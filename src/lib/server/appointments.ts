import { createServerFn } from '@tanstack/react-start/server'
import { notionDb } from '~/lib/notion'
import { verifyToken } from './auth'
import type { Appointment, AppointmentStatus } from '~/types'

export interface AppointmentsResponse {
  success: boolean
  data?: Appointment[]
  error?: string
}

export interface AppointmentResponse {
  success: boolean
  data?: Appointment
  error?: string
}

export interface CreateAppointmentData {
  serviceId: string
  staffId?: string
  date: string
  startTime: string
  endTime: string
  notes?: string
  addOns?: string[]
  totalPrice: number
  clientInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
}

// Server function: Create appointment (can be used by guests or logged-in users)
export const createAppointment = createServerFn({ method: 'POST' })
  .validator((data: CreateAppointmentData & { token?: string }) => data)
  .handler(async ({ data }): Promise<AppointmentResponse> => {
    try {
      let clientId = ''

      // If user is logged in, use their ID
      if (data.token) {
        const payload = verifyToken(data.token)
        if (payload) {
          clientId = payload.userId
        }
      }

      // If not logged in, check if user exists or create a new guest record
      if (!clientId && data.clientInfo.email) {
        const existingUser = await notionDb.users.findByEmail(data.clientInfo.email)
        if (existingUser) {
          clientId = existingUser.id
        } else {
          // Create a guest user record
          const newUser = await notionDb.users.create({
            firstName: data.clientInfo.firstName,
            lastName: data.clientInfo.lastName,
            email: data.clientInfo.email,
            phone: data.clientInfo.phone,
            role: 'client',
          })
          clientId = newUser.id
        }
      }

      const appointment = await notionDb.appointments.create({
        clientId,
        staffId: data.staffId || '',
        serviceId: data.serviceId,
        date: data.date,
        startTime: data.startTime,
        endTime: data.endTime,
        status: 'pending',
        notes: data.notes,
        addOns: data.addOns,
        totalPrice: data.totalPrice,
        depositPaid: false,
        reminderSent: false,
      })

      return { success: true, data: appointment }
    } catch (error) {
      console.error('Create appointment error:', error)
      return { success: false, error: 'Failed to create appointment' }
    }
  })

// Server function: Get appointments for current user
export const getUserAppointments = createServerFn({ method: 'GET' })
  .validator((data: { token: string }) => data)
  .handler(async ({ data }): Promise<AppointmentsResponse> => {
    try {
      const payload = verifyToken(data.token)
      if (!payload) {
        return { success: false, error: 'Invalid or expired token' }
      }

      const appointments = await notionDb.appointments.getByClient(payload.userId)
      return { success: true, data: appointments }
    } catch (error) {
      console.error('Get user appointments error:', error)
      return { success: false, error: 'Failed to fetch appointments' }
    }
  })

// Server function: Get appointment by ID
export const getAppointmentById = createServerFn({ method: 'GET' })
  .validator((data: { id: string; token?: string }) => data)
  .handler(async ({ data }): Promise<AppointmentResponse> => {
    try {
      const appointment = await notionDb.appointments.findById(data.id)
      if (!appointment) {
        return { success: false, error: 'Appointment not found' }
      }

      // If token provided, verify user owns this appointment or is admin
      if (data.token) {
        const payload = verifyToken(data.token)
        if (payload && payload.userId !== appointment.clientId && payload.role !== 'admin') {
          return { success: false, error: 'Unauthorized' }
        }
      }

      return { success: true, data: appointment }
    } catch (error) {
      console.error('Get appointment error:', error)
      return { success: false, error: 'Failed to fetch appointment' }
    }
  })

// Server function: Update appointment status
export const updateAppointmentStatus = createServerFn({ method: 'POST' })
  .validator((data: { id: string; status: AppointmentStatus; token: string }) => data)
  .handler(async ({ data }): Promise<AppointmentResponse> => {
    try {
      const payload = verifyToken(data.token)
      if (!payload) {
        return { success: false, error: 'Invalid or expired token' }
      }

      // Get appointment to check permissions
      const existing = await notionDb.appointments.findById(data.id)
      if (!existing) {
        return { success: false, error: 'Appointment not found' }
      }

      // Only owner, staff, or admin can update
      const isOwner = payload.userId === existing.clientId
      const isStaff = payload.role === 'staff'
      const isAdmin = payload.role === 'admin'

      if (!isOwner && !isStaff && !isAdmin) {
        return { success: false, error: 'Unauthorized' }
      }

      // Clients can only cancel their own appointments
      if (isOwner && !isStaff && !isAdmin && data.status !== 'cancelled') {
        return { success: false, error: 'You can only cancel appointments' }
      }

      const appointment = await notionDb.appointments.update(data.id, {
        status: data.status,
      })

      return { success: true, data: appointment }
    } catch (error) {
      console.error('Update appointment error:', error)
      return { success: false, error: 'Failed to update appointment' }
    }
  })

// Server function: Cancel appointment (simplified for clients)
export const cancelAppointment = createServerFn({ method: 'POST' })
  .validator((data: { id: string; token: string }) => data)
  .handler(async ({ data }): Promise<AppointmentResponse> => {
    try {
      const payload = verifyToken(data.token)
      if (!payload) {
        return { success: false, error: 'Invalid or expired token' }
      }

      const existing = await notionDb.appointments.findById(data.id)
      if (!existing) {
        return { success: false, error: 'Appointment not found' }
      }

      if (payload.userId !== existing.clientId && payload.role !== 'admin') {
        return { success: false, error: 'Unauthorized' }
      }

      const appointment = await notionDb.appointments.update(data.id, {
        status: 'cancelled',
      })

      return { success: true, data: appointment }
    } catch (error) {
      console.error('Cancel appointment error:', error)
      return { success: false, error: 'Failed to cancel appointment' }
    }
  })

// Server function: Get available time slots for a date
export const getAvailableSlots = createServerFn({ method: 'GET' })
  .validator((data: { date: string; serviceId: string; staffId?: string }) => data)
  .handler(async ({ data }): Promise<{ success: boolean; slots?: string[]; error?: string }> => {
    try {
      // Get service to know duration
      const service = await notionDb.services.findById(data.serviceId)
      if (!service) {
        return { success: false, error: 'Service not found' }
      }

      // Get all staff if no specific staff requested
      const staffList = data.staffId
        ? [await notionDb.staff.findById(data.staffId)].filter(Boolean)
        : await notionDb.staff.getAll(true)

      // Get existing appointments for the date
      const allSlots = [
        '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
        '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
        '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
        '6:00 PM', '6:30 PM',
      ]

      // For simplicity, return all slots
      // In production, filter based on staff schedules and existing appointments
      const availableSlots = allSlots

      return { success: true, slots: availableSlots }
    } catch (error) {
      console.error('Get available slots error:', error)
      return { success: false, error: 'Failed to fetch available slots' }
    }
  })

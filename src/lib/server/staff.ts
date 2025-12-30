import { createServerFn } from '@tanstack/react-start/server'
import { notionDb } from '~/lib/notion'
import { verifyToken } from './auth'
import type { Staff } from '~/types'

export interface StaffResponse {
  success: boolean
  data?: Staff[]
  error?: string
}

export interface SingleStaffResponse {
  success: boolean
  data?: Staff
  error?: string
}

// Server function: Get all active staff
export const getStaff = createServerFn({ method: 'GET' })
  .handler(async (): Promise<StaffResponse> => {
    try {
      const staff = await notionDb.staff.getAll(true)
      return { success: true, data: staff }
    } catch (error) {
      console.error('Get staff error:', error)
      return { success: false, error: 'Failed to fetch staff' }
    }
  })

// Server function: Get staff by ID
export const getStaffById = createServerFn({ method: 'GET' })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }): Promise<SingleStaffResponse> => {
    try {
      const staff = await notionDb.staff.findById(data.id)
      if (!staff) {
        return { success: false, error: 'Staff member not found' }
      }
      return { success: true, data: staff }
    } catch (error) {
      console.error('Get staff error:', error)
      return { success: false, error: 'Failed to fetch staff member' }
    }
  })

// Server function: Get staff schedule (admin only)
export const getStaffSchedule = createServerFn({ method: 'GET' })
  .validator((data: { staffId: string; startDate: string; endDate: string; token: string }) => data)
  .handler(async ({ data }): Promise<{ success: boolean; appointments?: any[]; error?: string }> => {
    try {
      const payload = verifyToken(data.token)
      if (!payload || (payload.role !== 'admin' && payload.role !== 'staff')) {
        return { success: false, error: 'Unauthorized' }
      }

      const appointments = await notionDb.appointments.getByStaff(
        data.staffId,
        data.startDate,
        data.endDate
      )

      return { success: true, appointments }
    } catch (error) {
      console.error('Get staff schedule error:', error)
      return { success: false, error: 'Failed to fetch schedule' }
    }
  })

// Server function: Update staff info (admin only)
export const updateStaff = createServerFn({ method: 'POST' })
  .validator((data: {
    staffId: string
    token: string
    updates: Partial<Staff>
  }) => data)
  .handler(async ({ data }): Promise<SingleStaffResponse> => {
    try {
      const payload = verifyToken(data.token)
      if (!payload || payload.role !== 'admin') {
        return { success: false, error: 'Unauthorized - Admin access required' }
      }

      const staff = await notionDb.staff.update(data.staffId, data.updates)
      return { success: true, data: staff }
    } catch (error) {
      console.error('Update staff error:', error)
      return { success: false, error: 'Failed to update staff' }
    }
  })

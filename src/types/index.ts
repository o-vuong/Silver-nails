// Core domain types for Silver Nails

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone: string
  role: 'client' | 'staff' | 'admin'
  createdAt: string
  preferences?: ClientPreferences
}

export interface ClientPreferences {
  favoriteColors?: string[]
  allergies?: string[]
  preferredTechnician?: string
  notes?: string
}

export interface Staff {
  id: string
  userId: string
  name: string
  email: string
  phone: string
  specialties: string[]
  bio?: string
  imageUrl?: string
  isActive: boolean
  schedule: WeeklySchedule
  createdAt: string
}

export interface WeeklySchedule {
  monday: DaySchedule
  tuesday: DaySchedule
  wednesday: DaySchedule
  thursday: DaySchedule
  friday: DaySchedule
  saturday: DaySchedule
  sunday: DaySchedule
}

export interface DaySchedule {
  isWorkingDay: boolean
  startTime?: string // "09:00"
  endTime?: string   // "18:00"
  breaks?: TimeSlot[]
}

export interface TimeSlot {
  startTime: string
  endTime: string
}

export interface Service {
  id: string
  name: string
  description: string
  category: ServiceCategory
  duration: number // in minutes
  price: number
  imageUrl?: string
  isActive: boolean
  requiresDeposit: boolean
  depositAmount?: number
  addOns?: ServiceAddOn[]
}

export type ServiceCategory =
  | 'manicure'
  | 'pedicure'
  | 'gel'
  | 'acrylic'
  | 'nail-art'
  | 'spa-treatment'
  | 'other'

export interface ServiceAddOn {
  id: string
  name: string
  price: number
  duration: number // additional minutes
}

export interface Appointment {
  id: string
  clientId: string
  staffId: string
  serviceId: string
  date: string // ISO date string
  startTime: string
  endTime: string
  status: AppointmentStatus
  notes?: string
  addOns?: string[] // ServiceAddOn IDs
  totalPrice: number
  depositPaid: boolean
  depositAmount?: number
  reminderSent: boolean
  createdAt: string
  updatedAt: string
}

export type AppointmentStatus =
  | 'pending'
  | 'confirmed'
  | 'in-progress'
  | 'completed'
  | 'cancelled'
  | 'no-show'

export interface BookingFormData {
  serviceId: string
  staffId?: string
  date: Date
  timeSlot: string
  addOns?: string[]
  notes?: string
  clientInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
}

export interface Payment {
  id: string
  appointmentId: string
  amount: number
  type: PaymentType
  status: PaymentStatus
  method: PaymentMethod
  transactionId?: string
  createdAt: string
}

export type PaymentType = 'deposit' | 'full-payment' | 'tip'
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded'
export type PaymentMethod = 'card' | 'tap' | 'paypal' | 'cash'

export interface LoyaltyProgram {
  clientId: string
  points: number
  tier: 'bronze' | 'silver' | 'gold' | 'platinum'
  lifetimeSpend: number
  visitsCount: number
  lastVisit?: string
  rewards: Reward[]
}

export interface Reward {
  id: string
  name: string
  description: string
  pointsCost: number
  isRedeemed: boolean
  redeemedAt?: string
}

export interface Review {
  id: string
  appointmentId: string
  clientId: string
  staffId: string
  rating: number // 1-5
  comment?: string
  createdAt: string
}

export interface Analytics {
  period: 'day' | 'week' | 'month' | 'year'
  startDate: string
  endDate: string
  revenue: number
  appointmentsCount: number
  newClients: number
  returningClients: number
  averageTicket: number
  topServices: TopService[]
  topStaff: TopStaff[]
  cancelationRate: number
  noShowRate: number
}

export interface TopService {
  serviceId: string
  serviceName: string
  bookings: number
  revenue: number
}

export interface TopStaff {
  staffId: string
  staffName: string
  appointmentsCompleted: number
  revenue: number
  averageRating: number
}

export interface NotificationSettings {
  userId: string
  emailNotifications: boolean
  smsNotifications: boolean
  appointmentReminders: boolean
  promotionalEmails: boolean
  reminderHours: number // hours before appointment
}

export interface GalleryImage {
  id: string
  url: string
  title?: string
  description?: string
  tags: string[]
  staffId?: string
  isHidden: boolean
  uploadedAt: string
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}

// Form validation schemas (used with zod)
export interface LoginFormData {
  email: string
  password: string
}

export interface SignupFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  preferredContact: 'email' | 'phone'
}

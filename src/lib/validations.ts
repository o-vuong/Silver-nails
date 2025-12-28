import { z } from "zod"

// Auth schemas
export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export const signupSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\+?1?\d{10,14}$/, "Please enter a valid phone number"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

// Booking schemas
export const bookingSchema = z.object({
  serviceId: z.string().min(1, "Please select a service"),
  staffId: z.string().optional(),
  date: z.date({
    required_error: "Please select a date",
  }).refine((date) => date >= new Date(new Date().setHours(0, 0, 0, 0)), {
    message: "Date must be in the future",
  }),
  timeSlot: z.string().min(1, "Please select a time slot"),
  addOns: z.array(z.string()).optional(),
  notes: z.string().max(500, "Notes must be less than 500 characters").optional(),
  clientInfo: z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().regex(/^\+?1?\d{10,14}$/, "Please enter a valid phone number"),
  }),
})

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\+?1?\d{10,14}$/, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
  preferredContact: z.enum(["email", "phone"]),
})

// Service schema
export const serviceSchema = z.object({
  name: z.string().min(2, "Service name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.enum(['manicure', 'pedicure', 'gel', 'acrylic', 'nail-art', 'spa-treatment', 'other']),
  duration: z.number().min(15, "Duration must be at least 15 minutes").max(480),
  price: z.number().min(0, "Price must be a positive number"),
  imageUrl: z.string().url().optional(),
  isActive: z.boolean().default(true),
  requiresDeposit: z.boolean().default(false),
  depositAmount: z.number().min(0).optional(),
})

// Staff schema
export const staffSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\+?1?\d{10,14}$/, "Please enter a valid phone number"),
  specialties: z.array(z.string()).min(1, "Please select at least one specialty"),
  bio: z.string().max(500).optional(),
  imageUrl: z.string().url().optional(),
  isActive: z.boolean().default(true),
})

// Schedule schema
const timeSchema = z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (use HH:MM)")

export const dayScheduleSchema = z.object({
  isWorkingDay: z.boolean(),
  startTime: timeSchema.optional(),
  endTime: timeSchema.optional(),
  breaks: z.array(z.object({
    startTime: timeSchema,
    endTime: timeSchema,
  })).optional(),
}).refine((data) => {
  if (data.isWorkingDay && (!data.startTime || !data.endTime)) {
    return false
  }
  return true
}, {
  message: "Working days must have start and end times",
})

export const weeklyScheduleSchema = z.object({
  monday: dayScheduleSchema,
  tuesday: dayScheduleSchema,
  wednesday: dayScheduleSchema,
  thursday: dayScheduleSchema,
  friday: dayScheduleSchema,
  saturday: dayScheduleSchema,
  sunday: dayScheduleSchema,
})

// Review schema
export const reviewSchema = z.object({
  appointmentId: z.string().min(1),
  rating: z.number().min(1, "Please provide a rating").max(5),
  comment: z.string().max(1000).optional(),
})

// Admin - Appointment management
export const appointmentUpdateSchema = z.object({
  status: z.enum(['pending', 'confirmed', 'in-progress', 'completed', 'cancelled', 'no-show']),
  notes: z.string().max(1000).optional(),
})

// Client preferences schema
export const clientPreferencesSchema = z.object({
  favoriteColors: z.array(z.string()).optional(),
  allergies: z.array(z.string()).optional(),
  preferredTechnician: z.string().optional(),
  notes: z.string().max(500).optional(),
})

// Notification settings schema
export const notificationSettingsSchema = z.object({
  emailNotifications: z.boolean(),
  smsNotifications: z.boolean(),
  appointmentReminders: z.boolean(),
  promotionalEmails: z.boolean(),
  reminderHours: z.number().min(1).max(48),
})

// Gallery image schema
export const galleryImageSchema = z.object({
  url: z.string().url("Please provide a valid URL"),
  title: z.string().max(100).optional(),
  description: z.string().max(500).optional(),
  tags: z.array(z.string()),
  staffId: z.string().optional(),
  isHidden: z.boolean().default(false),
})

// Type exports
export type LoginFormData = z.infer<typeof loginSchema>
export type SignupFormData = z.infer<typeof signupSchema>
export type BookingFormData = z.infer<typeof bookingSchema>
export type ContactFormData = z.infer<typeof contactSchema>
export type ServiceFormData = z.infer<typeof serviceSchema>
export type StaffFormData = z.infer<typeof staffSchema>
export type ReviewFormData = z.infer<typeof reviewSchema>
export type ClientPreferencesData = z.infer<typeof clientPreferencesSchema>
export type NotificationSettingsData = z.infer<typeof notificationSettingsSchema>

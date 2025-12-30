// Server Functions Index
// Export all server functions for use in components

// Authentication
export {
  loginUser,
  registerUser,
  getCurrentUser,
  updateUserProfile,
} from './auth'

// Services
export {
  getServices,
  getServiceById,
  getServicesByCategory,
} from './services'

// Appointments
export {
  createAppointment,
  getUserAppointments,
  getAppointmentById,
  updateAppointmentStatus,
  cancelAppointment,
  getAvailableSlots,
} from './appointments'

// Staff
export {
  getStaff,
  getStaffById,
  getStaffSchedule,
  updateStaff,
} from './staff'

// Payments
export {
  createPayPalOrder,
  capturePayPalPayment,
  getPayPalClientId,
  processTipPayment,
} from './payments'

// Email Notifications
export {
  sendBookingConfirmation,
  sendAppointmentReminder,
  sendCancellationEmail,
  sendWelcomeEmail,
} from './email'

// Loyalty Program
export {
  getLoyaltyProgram,
  addLoyaltyPoints,
  redeemReward,
  getAvailableRewards,
  getTierBenefits,
} from './loyalty'

import type { ServiceItem } from '~/lib/services-catalog'

export type BookingStep = 'service' | 'datetime' | 'info' | 'confirm'

export interface BookingData {
  service?: ServiceItem
  date?: Date
  time?: string
  firstName: string
  lastName: string
  email: string
  phone: string
  notes: string
}

export const stepOrder: BookingStep[] = ['service', 'datetime', 'info', 'confirm']

export const stepLabels: Record<BookingStep, string> = {
  service: 'Service',
  datetime: 'Date & Time',
  info: 'Your Info',
  confirm: 'Confirm',
}

export function canProceed(step: BookingStep, bookingData: BookingData): boolean {
  switch (step) {
    case 'service':
      return !!bookingData.service
    case 'datetime':
      return !!bookingData.date && !!bookingData.time
    case 'info':
      return (
        bookingData.firstName.trim() !== '' &&
        bookingData.lastName.trim() !== '' &&
        bookingData.email.trim() !== '' &&
        bookingData.phone.trim() !== ''
      )
    case 'confirm':
      return true
    default:
      return false
  }
}

export interface BookingWizardResult {
  currentStepIndex: number
  steps: { id: BookingStep; label: string }[]
  goNext: () => void
  goBack: () => void
}

export function useBookingWizard(
  step: BookingStep,
  setStep: (s: BookingStep) => void
): BookingWizardResult {
  const currentStepIndex = stepOrder.indexOf(step)

  const steps = stepOrder.map(id => ({
    id,
    label: stepLabels[id],
  }))

  const goNext = () => {
    const nextIndex = currentStepIndex + 1
    if (nextIndex < stepOrder.length) {
      setStep(stepOrder[nextIndex])
    }
  }

  const goBack = () => {
    const prevIndex = currentStepIndex - 1
    if (prevIndex >= 0) {
      setStep(stepOrder[prevIndex])
    }
  }

  return { currentStepIndex, steps, goNext, goBack }
}

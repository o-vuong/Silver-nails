import type { ChangeEvent } from 'react'
import { createFileRoute, Link, useSearch } from '@tanstack/react-router'
import { useState, useMemo } from 'react'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { Button } from '~/components/ui/button'
import {
  BookingProgress,
  BookingComplete,
  ServiceStep,
  DateTimeStep,
  InfoStep,
  ConfirmStep,
} from '~/components/booking'
import {
  services,
  getServiceById,
  isValidServiceId,
  groupServicesByCategory,
} from '~/lib/services-catalog'
import type { ServiceItem } from '~/lib/services-catalog'
import {
  useBookingWizard,
  canProceed,
  type BookingStep,
  type BookingData,
} from '~/lib/hooks/use-booking-wizard'

// Search params validation - validates that service ID exists in catalog
const bookingSearchSchema = {
  parse: (search: Record<string, unknown>) => {
    const serviceId = typeof search.service === 'string' ? search.service : undefined
    // Only return service ID if it's valid (exists in our catalog)
    return {
      service: isValidServiceId(serviceId) ? serviceId : undefined,
    }
  },
}

export const Route = createFileRoute('/booking')({
  component: BookingPage,
  validateSearch: bookingSearchSchema.parse,
})

function BookingPage() {
  const search = useSearch({ from: '/booking' })

  // Validate service ID exists - if invalid, treat as no service selected
  const validatedService = search.service ? getServiceById(search.service) : undefined
  const hasValidService = !!validatedService

  const [step, setStep] = useState<BookingStep>(hasValidService ? 'datetime' : 'service')
  const [bookingData, setBookingData] = useState<BookingData>(() => ({
    service: validatedService,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  }))
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const { currentStepIndex, steps, goNext, goBack } = useBookingWizard(step, setStep)

  // Group services by category - memoized since services array is static
  const groupedServices = useMemo(() => groupServicesByCategory(), [])

  const handleSelectService = (service: ServiceItem) => {
    setBookingData(prev => ({ ...prev, service }))
    setStep('datetime')
  }

  const handleSelectDate = (date: Date | undefined) => {
    setBookingData(prev => ({ ...prev, date, time: undefined }))
  }

  const handleSelectTime = (time: string) => {
    setBookingData(prev => ({ ...prev, time }))
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBookingData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsComplete(true)
  }

  const canGoForward = canProceed(step, bookingData)

  // Confirmation screen
  if (isComplete) {
    return <BookingComplete bookingData={bookingData} />
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="px-6 py-12 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Book Your Appointment</h1>
          <p className="mt-4 text-muted-foreground">
            Schedule your luxury nail care experience in just a few steps
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <BookingProgress steps={steps} currentStepIndex={currentStepIndex} />

      {/* Content */}
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Step 1: Service Selection */}
          {step === 'service' && (
            <ServiceStep
              selectedService={bookingData.service}
              groupedServices={groupedServices}
              onSelectService={handleSelectService}
            />
          )}

          {/* Step 2: Date & Time Selection */}
          {step === 'datetime' && (
            <DateTimeStep
              service={bookingData.service}
              selectedDate={bookingData.date}
              selectedTime={bookingData.time}
              onSelectDate={handleSelectDate}
              onSelectTime={handleSelectTime}
            />
          )}

          {/* Step 3: Contact Info */}
          {step === 'info' && (
            <InfoStep bookingData={bookingData} onInputChange={handleInputChange} />
          )}

          {/* Step 4: Confirmation */}
          {step === 'confirm' && <ConfirmStep bookingData={bookingData} />}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-12 pt-6 border-t border-border">
            {currentStepIndex > 0 ? (
              <Button variant="outline" onClick={goBack}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            ) : (
              <Button variant="outline" asChild>
                <Link to="/services">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Services
                </Link>
              </Button>
            )}

            {step === 'confirm' ? (
              <Button
                variant="luxury"
                size="lg"
                disabled={!canGoForward || isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Confirming...</span>
                ) : (
                  <>
                    Confirm Booking
                    <Check className="h-5 w-5 ml-2" />
                  </>
                )}
              </Button>
            ) : (
              <Button variant="luxury" size="lg" disabled={!canGoForward} onClick={goNext}>
                Continue
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

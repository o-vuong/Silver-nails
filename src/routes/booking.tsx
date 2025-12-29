import { createFileRoute, Link, useSearch } from '@tanstack/react-router'
import { useState, useMemo } from 'react'
import {
  Calendar as CalendarIcon,
  Clock,
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  User,
  Mail,
  Phone,
  MessageSquare,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Calendar } from '~/components/ui/calendar'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import type { ServiceCategory } from '~/types'

// Search params validation
const bookingSearchSchema = {
  parse: (search: Record<string, unknown>) => ({
    service: typeof search.service === 'string' ? search.service : undefined,
  }),
}

export const Route = createFileRoute('/booking')({
  component: BookingPage,
  validateSearch: bookingSearchSchema.parse,
})

interface ServiceItem {
  id: string
  name: string
  category: ServiceCategory
  duration: number
  price: number
}

const services: ServiceItem[] = [
  { id: 'classic-manicure', name: 'Classic Manicure', category: 'manicure', duration: 30, price: 25 },
  { id: 'luxury-manicure', name: 'Luxury Manicure', category: 'manicure', duration: 60, price: 45 },
  { id: 'express-manicure', name: 'Express Manicure', category: 'manicure', duration: 20, price: 18 },
  { id: 'classic-pedicure', name: 'Classic Pedicure', category: 'pedicure', duration: 45, price: 40 },
  { id: 'spa-pedicure', name: 'Spa Pedicure', category: 'pedicure', duration: 75, price: 65 },
  { id: 'detox-pedicure', name: 'Detox Pedicure', category: 'pedicure', duration: 60, price: 55 },
  { id: 'gel-manicure', name: 'Gel Manicure', category: 'gel', duration: 45, price: 45 },
  { id: 'gel-pedicure', name: 'Gel Pedicure', category: 'gel', duration: 60, price: 55 },
  { id: 'gel-removal', name: 'Gel Removal', category: 'gel', duration: 20, price: 15 },
  { id: 'gel-extension', name: 'Gel-X Extensions', category: 'gel', duration: 90, price: 85 },
  { id: 'acrylic-full-set', name: 'Acrylic Full Set', category: 'acrylic', duration: 90, price: 75 },
  { id: 'acrylic-fill', name: 'Acrylic Fill', category: 'acrylic', duration: 60, price: 45 },
  { id: 'acrylic-removal', name: 'Acrylic Removal', category: 'acrylic', duration: 30, price: 25 },
  { id: 'pink-white-set', name: 'Pink & White Full Set', category: 'acrylic', duration: 105, price: 95 },
]

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM',
]

type BookingStep = 'service' | 'datetime' | 'info' | 'confirm'

interface BookingData {
  service?: ServiceItem
  date?: Date
  time?: string
  firstName: string
  lastName: string
  email: string
  phone: string
  notes: string
}

function BookingPage() {
  const search = useSearch({ from: '/booking' })
  const [step, setStep] = useState<BookingStep>(search.service ? 'datetime' : 'service')
  const [bookingData, setBookingData] = useState<BookingData>(() => ({
    service: search.service ? services.find(s => s.id === search.service) : undefined,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  }))
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const steps = [
    { id: 'service', label: 'Service' },
    { id: 'datetime', label: 'Date & Time' },
    { id: 'info', label: 'Your Info' },
    { id: 'confirm', label: 'Confirm' },
  ]

  const currentStepIndex = steps.findIndex(s => s.id === step)

  const groupedServices = useMemo(() => {
    const groups: Record<string, ServiceItem[]> = {}
    services.forEach(service => {
      if (!groups[service.category]) {
        groups[service.category] = []
      }
      groups[service.category].push(service)
    })
    return groups
  }, [])

  const categoryLabels: Record<string, string> = {
    manicure: 'Manicures',
    pedicure: 'Pedicures',
    gel: 'Gel Services',
    acrylic: 'Acrylic Services',
  }

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const canProceed = () => {
    switch (step) {
      case 'service':
        return !!bookingData.service
      case 'datetime':
        return !!bookingData.date && !!bookingData.time
      case 'info':
        return bookingData.firstName.trim() !== '' &&
               bookingData.lastName.trim() !== '' &&
               bookingData.email.trim() !== '' &&
               bookingData.phone.trim() !== ''
      case 'confirm':
        return true
      default:
        return false
    }
  }

  const goNext = () => {
    const nextIndex = currentStepIndex + 1
    if (nextIndex < steps.length) {
      setStep(steps[nextIndex].id as BookingStep)
    }
  }

  const goBack = () => {
    const prevIndex = currentStepIndex - 1
    if (prevIndex >= 0) {
      setStep(steps[prevIndex].id as BookingStep)
    }
  }

  // Confirmation screen
  if (isComplete) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6 py-20">
        <Card className="max-w-lg w-full text-center">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent">
              <Check className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
            <CardDescription className="text-base">
              Your appointment has been scheduled successfully
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg border border-border p-4 text-left space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service</span>
                <span className="font-medium">{bookingData.service?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date</span>
                <span className="font-medium">
                  {bookingData.date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time</span>
                <span className="font-medium">{bookingData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total</span>
                <span className="font-bold text-lg">${bookingData.service?.price}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              A confirmation email has been sent to <strong>{bookingData.email}</strong>
            </p>
            <div className="flex flex-col gap-3">
              <Button variant="luxury" asChild>
                <Link to="/">Return Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/services">Book Another Service</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
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
      <section className="px-6 py-8 lg:px-8 border-b border-border">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            {steps.map((s, idx) => (
              <div key={s.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                      idx < currentStepIndex
                        ? 'bg-secondary border-secondary text-white'
                        : idx === currentStepIndex
                        ? 'border-secondary text-secondary'
                        : 'border-border text-muted-foreground'
                    }`}
                  >
                    {idx < currentStepIndex ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-medium">{idx + 1}</span>
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium ${
                      idx <= currentStepIndex ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className={`mx-4 h-0.5 w-16 sm:w-24 lg:w-32 ${
                      idx < currentStepIndex ? 'bg-secondary' : 'bg-border'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Step 1: Service Selection */}
          {step === 'service' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Select a Service</h2>
                <p className="text-muted-foreground">Choose the service you'd like to book</p>
              </div>
              {Object.entries(groupedServices).map(([category, categoryServices]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-4">{categoryLabels[category] || category}</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {categoryServices.map(service => (
                      <Card
                        key={service.id}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          bookingData.service?.id === service.id
                            ? 'border-secondary ring-2 ring-secondary/20'
                            : ''
                        }`}
                        onClick={() => handleSelectService(service)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium">{service.name}</h4>
                              <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {service.duration} min
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-xl font-bold">${service.price}</p>
                              {bookingData.service?.id === service.id && (
                                <Check className="h-5 w-5 text-secondary ml-auto mt-1" />
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {step === 'datetime' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Choose Date & Time</h2>
                <p className="text-muted-foreground">
                  Select when you'd like your {bookingData.service?.name}
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-secondary" />
                      Select Date
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={bookingData.date}
                      onSelect={handleSelectDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Clock className="h-5 w-5 text-secondary" />
                      Select Time
                    </CardTitle>
                    {bookingData.date && (
                      <CardDescription>
                        Available times for {bookingData.date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    {bookingData.date ? (
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map(time => (
                          <button
                            key={time}
                            onClick={() => handleSelectTime(time)}
                            className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                              bookingData.time === time
                                ? 'bg-secondary text-white border-secondary'
                                : 'border-border hover:border-secondary hover:bg-secondary/10'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-center text-muted-foreground py-8">
                        Please select a date first
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>

              {bookingData.service && (
                <Card className="bg-accent/5">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Sparkles className="h-5 w-5 text-secondary" />
                        <div>
                          <p className="font-medium">{bookingData.service.name}</p>
                          <p className="text-sm text-muted-foreground">{bookingData.service.duration} min</p>
                        </div>
                      </div>
                      <p className="text-xl font-bold">${bookingData.service.price}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 'info' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Your Information</h2>
                <p className="text-muted-foreground">
                  Please provide your contact details
                </p>
              </div>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={bookingData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={bookingData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={bookingData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 555-5555"
                      value={bookingData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      Special Requests (Optional)
                    </Label>
                    <Input
                      id="notes"
                      name="notes"
                      placeholder="Any special requests or notes for your appointment"
                      value={bookingData.notes}
                      onChange={handleInputChange}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 'confirm' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Confirm Your Booking</h2>
                <p className="text-muted-foreground">
                  Please review your appointment details
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Appointment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Service</p>
                        <p className="font-medium">{bookingData.service?.name}</p>
                        <p className="text-sm text-muted-foreground">{bookingData.service?.duration} minutes</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Date & Time</p>
                        <p className="font-medium">
                          {bookingData.date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                        <p className="text-sm text-muted-foreground">at {bookingData.time}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Contact</p>
                        <p className="font-medium">{bookingData.firstName} {bookingData.lastName}</p>
                        <p className="text-sm text-muted-foreground">{bookingData.email}</p>
                        <p className="text-sm text-muted-foreground">{bookingData.phone}</p>
                      </div>
                      {bookingData.notes && (
                        <div>
                          <p className="text-sm text-muted-foreground">Notes</p>
                          <p className="text-sm">{bookingData.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold">${bookingData.service?.price}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Payment will be collected at the salon
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/50 bg-secondary/5">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium">Cancellation Policy</p>
                      <p className="text-muted-foreground">
                        Free cancellation up to 24 hours before your appointment.
                        Cancellations within 24 hours may be subject to a fee.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

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
                disabled={!canProceed() || isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Confirming...</span>
                  </>
                ) : (
                  <>
                    Confirm Booking
                    <Check className="h-5 w-5 ml-2" />
                  </>
                )}
              </Button>
            ) : (
              <Button
                variant="luxury"
                size="lg"
                disabled={!canProceed()}
                onClick={goNext}
              >
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

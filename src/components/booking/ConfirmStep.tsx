import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import type { BookingData } from '~/lib/hooks/use-booking-wizard'

interface ConfirmStepProps {
  bookingData: BookingData
}

export function ConfirmStep({ bookingData }: ConfirmStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Confirm Your Booking</h2>
        <p className="text-muted-foreground">Please review your appointment details</p>
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
                <p className="font-medium">{bookingData.service?.name ?? 'No service selected'}</p>
                <p className="text-sm text-muted-foreground">{bookingData.service?.duration} minutes</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date & Time</p>
                <p className="font-medium">
                  {bookingData.date?.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
                <p className="text-sm text-muted-foreground">at {bookingData.time}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Contact</p>
                <p className="font-medium">
                  {bookingData.firstName} {bookingData.lastName}
                </p>
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
              <span className="text-2xl font-bold">${bookingData.service?.price ?? 0}</span>
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
                Free cancellation up to 24 hours before your appointment. Cancellations within 24
                hours may be subject to a fee.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

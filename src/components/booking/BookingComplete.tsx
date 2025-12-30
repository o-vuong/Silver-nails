import { Link } from '@tanstack/react-router'
import { Check } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import type { BookingData } from '~/lib/hooks/use-booking-wizard'

interface BookingCompleteProps {
  bookingData: BookingData
}

export function BookingComplete({ bookingData }: BookingCompleteProps) {
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
              <span className="font-medium">{bookingData.service?.name ?? 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date</span>
              <span className="font-medium">
                {bookingData.date?.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Time</span>
              <span className="font-medium">{bookingData.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="font-bold text-lg">${bookingData.service?.price ?? 0}</span>
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

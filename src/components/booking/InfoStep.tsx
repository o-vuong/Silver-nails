import type { ChangeEvent } from 'react'
import { User, Mail, Phone, MessageSquare } from 'lucide-react'
import { Card, CardContent } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import type { BookingData } from '~/lib/hooks/use-booking-wizard'

interface InfoStepProps {
  bookingData: BookingData
  onInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function InfoStep({ bookingData, onInputChange }: InfoStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Your Information</h2>
        <p className="text-muted-foreground">Please provide your contact details</p>
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
                onChange={onInputChange}
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
                onChange={onInputChange}
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
              onChange={onInputChange}
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
              onChange={onInputChange}
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
              onChange={onInputChange}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

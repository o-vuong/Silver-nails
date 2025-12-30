import { Calendar as CalendarIcon, Clock, Sparkles } from 'lucide-react'
import { startOfDay, isBefore } from 'date-fns'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Calendar } from '~/components/ui/calendar'
import type { ServiceItem } from '~/lib/services-catalog'

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM',
]

interface DateTimeStepProps {
  service?: ServiceItem
  selectedDate?: Date
  selectedTime?: string
  onSelectDate: (date: Date | undefined) => void
  onSelectTime: (time: string) => void
}

/**
 * Check if a date should be disabled.
 * Disables past dates (but allows today) and Sundays.
 * Uses date-fns to normalize dates to start of day for accurate comparison.
 */
function isDateDisabled(date: Date): boolean {
  const normalizedDate = startOfDay(date)
  const normalizedToday = startOfDay(new Date())

  // Disable if date is before today (past dates)
  if (isBefore(normalizedDate, normalizedToday)) {
    return true
  }

  // Disable Sundays (day 0)
  if (date.getDay() === 0) {
    return true
  }

  return false
}

export function DateTimeStep({
  service,
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
}: DateTimeStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Choose Date & Time</h2>
        <p className="text-muted-foreground">
          Select when you'd like your {service?.name}
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
              selected={selectedDate}
              onSelect={onSelectDate}
              disabled={isDateDisabled}
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
            {selectedDate && (
              <CardDescription>
                Available times for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {selectedDate ? (
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => onSelectTime(time)}
                    className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                      selectedTime === time
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

      {service && (
        <Card className="bg-accent/5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-secondary" />
                <div>
                  <p className="font-medium">{service.name}</p>
                  <p className="text-sm text-muted-foreground">{service.duration} min</p>
                </div>
              </div>
              <p className="text-xl font-bold">${service.price}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

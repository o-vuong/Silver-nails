import { Check } from 'lucide-react'
import type { BookingStep } from '~/lib/hooks/use-booking-wizard'

interface BookingProgressProps {
  steps: { id: BookingStep; label: string }[]
  currentStepIndex: number
}

export function BookingProgress({ steps, currentStepIndex }: BookingProgressProps) {
  return (
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
  )
}

import { Clock, Check } from 'lucide-react'
import { Card, CardContent } from '~/components/ui/card'
import type { ServiceItem } from '~/lib/services-catalog'
import { categoryLabels } from '~/lib/services-catalog'
import type { ServiceCategory } from '~/types'

interface ServiceStepProps {
  selectedService?: ServiceItem
  groupedServices: Record<ServiceCategory, ServiceItem[]>
  onSelectService: (service: ServiceItem) => void
}

export function ServiceStep({
  selectedService,
  groupedServices,
  onSelectService,
}: ServiceStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Select a Service</h2>
        <p className="text-muted-foreground">Choose the service you'd like to book</p>
      </div>
      {Object.entries(groupedServices).map(([category, categoryServices]) => (
        <div key={category}>
          <h3 className="text-lg font-semibold mb-4">
            {categoryLabels[category as ServiceCategory] || category}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {categoryServices.map(service => (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedService?.id === service.id
                    ? 'border-secondary ring-2 ring-secondary/20'
                    : ''
                }`}
                onClick={() => onSelectService(service)}
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
                      {selectedService?.id === service.id && (
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
  )
}

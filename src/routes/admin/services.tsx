import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  Clock,
  DollarSign,
  Tag,
  MoreVertical,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent } from '~/components/ui/card'
import { services, categoryLabels } from '~/lib/services-catalog'
import type { ServiceCategory } from '~/types'

export const Route = createFileRoute('/admin/services')({
  component: AdminServicesPage,
})

function AdminServicesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<ServiceCategory | 'all'>('all')

  const categories = Object.keys(categoryLabels) as (ServiceCategory | 'all')[]

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const stats = {
    total: services.length,
    popular: services.filter(s => s.popular).length,
    avgPrice: Math.round(services.reduce((sum, s) => sum + s.price, 0) / services.length),
    avgDuration: Math.round(services.reduce((sum, s) => sum + s.duration, 0) / services.length),
  }

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-muted-foreground">Manage your service menu</p>
          </div>
          <Button variant="luxury">
            <Plus className="h-4 w-4 mr-2" />
            Add Service
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">Total Services</p>
              <p className="text-3xl font-bold mt-2">{stats.total}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">Popular Services</p>
              <p className="text-3xl font-bold mt-2">{stats.popular}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">Avg. Price</p>
              <p className="text-3xl font-bold mt-2">${stats.avgPrice}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">Avg. Duration</p>
              <p className="text-3xl font-bold mt-2">{stats.avgDuration} min</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search services..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  categoryFilter === cat
                    ? 'bg-secondary text-white'
                    : 'bg-accent/10 hover:bg-accent/20'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <Card key={service.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">{service.name}</h3>
                    <span className="text-xs text-muted-foreground">
                      {categoryLabels[service.category]}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {service.popular && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                        Popular
                      </span>
                    )}
                    <button className="p-1 hover:bg-accent/10 rounded">
                      <MoreVertical className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>

                {service.description && (
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {service.description}
                  </p>
                )}

                <div className="flex items-center gap-4 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    {service.duration} min
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    ${service.price}
                  </div>
                </div>

                {service.addOns && service.addOns.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Add-ons:</p>
                    <div className="flex flex-wrap gap-1">
                      {service.addOns.map((addon, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-accent/10 rounded text-xs"
                        >
                          {addon.name} (+${addon.price})
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit2 className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

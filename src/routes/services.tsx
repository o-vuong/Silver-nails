import type { ReactNode } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Sparkles,
  Clock,
  ArrowRight,
  Palette,
  Star,
  Heart,
  Gem,
  Flower2,
  HandHeart,
  Check,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { services, getPopularServices } from '~/lib/services-catalog'
import type { ServiceCategory } from '~/types'

export const Route = createFileRoute('/services')({ component: ServicesPage })

const categories: { id: ServiceCategory | 'all'; name: string; icon: ReactNode; description: string }[] = [
  { id: 'all', name: 'All Services', icon: <Sparkles className="h-5 w-5" />, description: 'Browse our complete menu' },
  { id: 'manicure', name: 'Manicures', icon: <HandHeart className="h-5 w-5" />, description: 'Hand & nail care' },
  { id: 'pedicure', name: 'Pedicures', icon: <Flower2 className="h-5 w-5" />, description: 'Foot & nail care' },
  { id: 'gel', name: 'Gel Nails', icon: <Gem className="h-5 w-5" />, description: 'Long-lasting gel polish' },
  { id: 'acrylic', name: 'Acrylics', icon: <Star className="h-5 w-5" />, description: 'Nail extensions' },
  { id: 'nail-art', name: 'Nail Art', icon: <Palette className="h-5 w-5" />, description: 'Custom designs' },
  { id: 'spa-treatment', name: 'Spa Treatments', icon: <Heart className="h-5 w-5" />, description: 'Relaxation & care' },
]

function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all')

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory)

  const popularServices = getPopularServices()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Our{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            From classic manicures to intricate nail art, discover our full range of luxury nail care services
          </p>
        </div>
      </section>

      {/* Popular Services */}
      <section className="px-6 py-12 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 mb-8">
            <Star className="h-6 w-6 text-secondary fill-secondary" />
            <h2 className="text-2xl font-bold">Most Popular</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {popularServices.map((service) => (
              <Card key={service.id} className="group relative overflow-hidden border-secondary/30 hover:shadow-lg transition-all">
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary/20 px-2.5 py-1 text-xs font-medium text-secondary">
                    <Star className="h-3 w-3 fill-current" />
                    Popular
                  </span>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {service.duration} min
                    </div>
                    <p className="text-2xl font-bold">${service.price}</p>
                  </div>
                  <Button variant="luxury" size="sm" className="w-full" asChild>
                    <Link to="/booking" search={{ service: service.id }}>
                      Book Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="px-6 py-8 lg:px-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'bg-accent/10 hover:bg-accent/20 text-foreground'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              {categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-muted-foreground">
              {categories.find(c => c.id === selectedCategory)?.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <CardDescription className="mt-2">{service.description}</CardDescription>
                    </div>
                    {service.popular && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary/20 px-2 py-0.5 text-xs font-medium text-secondary">
                        <Star className="h-3 w-3 fill-current" />
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {service.duration} min
                    </div>
                    <p className="text-2xl font-bold">${service.price}</p>
                  </div>

                  {service.addOns && service.addOns.length > 0 && (
                    <div className="pt-3 border-t border-border">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Add-ons available:</p>
                      <div className="space-y-1">
                        {service.addOns.map((addon, idx) => (
                          <div key={idx} className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-1.5">
                              <Check className="h-3 w-3 text-secondary" />
                              {addon.name}
                            </span>
                            <span className="text-muted-foreground">+${addon.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button variant="outline" size="sm" className="w-full group-hover:bg-secondary group-hover:text-white transition-colors" asChild>
                    <Link to="/booking" search={{ service: service.id }}>
                      Book This Service
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Packages Section */}
      <section className="px-6 py-16 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Special Packages</h2>
            <p className="mt-4 text-muted-foreground">Save more with our curated service bundles</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Sparkles className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Essential Beauty</CardTitle>
                <CardDescription>Perfect for regular maintenance</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Classic Manicure
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Classic Pedicure
                  </li>
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground line-through">$65</p>
                  <p className="text-3xl font-bold">$55</p>
                  <p className="text-xs text-secondary">Save $10</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/booking">Book Package</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-medium px-3 py-1">
                Best Value
              </div>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent">
                  <Gem className="h-7 w-7 text-white" />
                </div>
                <CardTitle>Luxury Retreat</CardTitle>
                <CardDescription>Our most popular package</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Luxury Manicure
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Spa Pedicure
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Paraffin Treatment (Hands)
                  </li>
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground line-through">$125</p>
                  <p className="text-3xl font-bold">$99</p>
                  <p className="text-xs text-secondary">Save $26</p>
                </div>
                <Button variant="luxury" className="w-full" asChild>
                  <Link to="/booking">Book Package</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Star className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Gel Experience</CardTitle>
                <CardDescription>Long-lasting beauty</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Gel Manicure
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Gel Pedicure
                  </li>
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground line-through">$100</p>
                  <p className="text-3xl font-bold">$85</p>
                  <p className="text-xs text-secondary">Save $15</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/booking">Book Package</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Luxury?</h2>
          <p className="text-muted-foreground mb-8">
            Book your appointment today and let our expert technicians pamper you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="xl" asChild>
              <Link to="/booking">
                Book Appointment
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

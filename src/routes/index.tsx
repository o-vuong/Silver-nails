import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Sparkles,
  Award,
  Users,
  Clock,
  Star,
  ArrowRight,
  Check,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  const services = [
    {
      name: 'Luxury Manicure',
      description: 'Premium hand treatment with expert nail shaping and polish',
      price: 45,
      duration: '60 min',
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      name: 'Spa Pedicure',
      description: 'Indulgent foot care with massage and exfoliation',
      price: 65,
      duration: '75 min',
      icon: <Award className="h-6 w-6" />,
    },
    {
      name: 'Gel Nails',
      description: 'Long-lasting gel polish with chip-free shine',
      price: 55,
      duration: '60 min',
      icon: <Star className="h-6 w-6" />,
    },
    {
      name: 'Acrylic Extensions',
      description: 'Custom nail extensions for length and strength',
      price: 75,
      duration: '90 min',
      icon: <Sparkles className="h-6 w-6" />,
    },
  ]

  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Premium Products',
      description: 'We use only the finest, luxury nail care products',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Technicians',
      description: 'Highly trained professionals with years of experience',
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Luxury Experience',
      description: 'Elegant atmosphere designed for your comfort',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Flexible Hours',
      description: 'Open 7 days a week to fit your schedule',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Absolutely the best nail salon in Rancho Cucamonga! The attention to detail is incredible.',
    },
    {
      name: 'Maria Garcia',
      rating: 5,
      text: 'Love this place! The staff is so friendly and professional. My nails always look perfect.',
    },
    {
      name: 'Emily Chen',
      rating: 5,
      text: 'The luxury experience is worth every penny. Clean, elegant, and the results are amazing.',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-6 py-24 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 text-sm backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 text-secondary" />
                  <span className="text-muted-foreground">Rancho Cucamonga's Premier Nail Salon</span>
                </div>
                <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                  Elegance at Your{' '}
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Fingertips
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Experience luxury nail care where artistry meets expertise. Book your premium
                  manicure or pedicure today and discover the difference.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="luxury" size="xl" asChild>
                  <Link to="/booking">
                    Book Appointment
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">500+ Five-Star Reviews</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
              <div className="relative h-full rounded-3xl border border-border bg-gradient-to-br from-background/80 to-background/40 p-8 backdrop-blur-sm">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-2xl">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                        <Sparkles className="h-16 w-16 text-secondary" />
                      </div>
                    </div>
                    <h2 className="mb-2 text-2xl font-bold">Premium Nail Art</h2>
                    <p className="text-muted-foreground">Custom designs by expert technicians</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-accent/5 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Silver Nails</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experience the difference that sets us apart
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover our most-loved nail care treatments
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index} className="group cursor-pointer transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 text-secondary group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-bold">${service.price}</p>
                      <p className="text-sm text-muted-foreground">{service.duration}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/booking">Book</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-accent/5 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from our satisfied customers
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardDescription className="text-base">{testimonial.text}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-border bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
            <CardHeader className="text-center space-y-4 pb-8">
              <CardTitle className="text-3xl sm:text-4xl">Ready for Your Luxury Experience?</CardTitle>
              <CardDescription className="text-lg">
                Book your appointment today and discover why we're Rancho Cucamonga's
                premier nail salon
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
              <Button variant="luxury" size="xl" asChild>
                <Link to="/booking">
                  Book Your Appointment
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>Same-day appointments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>Expert technicians</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>Premium products</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

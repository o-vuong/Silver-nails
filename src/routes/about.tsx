import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Sparkles,
  Award,
  Heart,
  Users,
  Star,
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Check,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export const Route = createFileRoute('/about')({ component: AboutPage })

const team = [
  {
    name: 'Maria Santos',
    role: 'Founder & Lead Nail Artist',
    bio: 'With over 15 years of experience, Maria founded Silver Nails with a vision to bring luxury nail care to Rancho Cucamonga.',
    specialties: ['Nail Art', 'Gel Extensions', 'Bridal Nails'],
  },
  {
    name: 'Sarah Kim',
    role: 'Senior Nail Technician',
    bio: '10 years of expertise in acrylic and gel applications. Known for her precision and attention to detail.',
    specialties: ['Acrylics', 'French Manicures', 'Ombre'],
  },
  {
    name: 'Kim Nguyen',
    role: 'Nail Artist & Spa Specialist',
    bio: 'Certified in advanced nail art techniques and spa treatments. Creates stunning custom designs.',
    specialties: ['Custom Nail Art', 'Spa Pedicures', 'Chrome Nails'],
  },
  {
    name: 'Jessica Lee',
    role: 'Junior Nail Technician',
    bio: 'Passionate about nail care with fresh ideas and a dedication to client satisfaction.',
    specialties: ['Classic Manicures', 'Gel Polish', 'Nail Care'],
  },
]

const values = [
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Excellence',
    description: 'We strive for perfection in every service, using only premium products and techniques.',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Care',
    description: 'Your comfort and satisfaction are our top priorities. We treat every client like family.',
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Creativity',
    description: 'Our artists bring innovative designs and personalized touches to every appointment.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Community',
    description: 'We are proud to be part of the Rancho Cucamonga community for over a decade.',
  },
]

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '15,000+', label: 'Happy Clients' },
  { value: '500+', label: '5-Star Reviews' },
  { value: '4', label: 'Expert Technicians' },
]

function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              About{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Silver Nails
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              For over a decade, Silver Nails has been Rancho Cucamonga's premier destination
              for luxury nail care. We combine artistry, expertise, and personalized service
              to create an unforgettable experience for every client.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-12 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Silver Nails was founded in 2014 by Maria Santos, a passionate nail artist
                  with a dream to create a sanctuary where clients could experience luxury
                  nail care in a welcoming, elegant environment.
                </p>
                <p>
                  What started as a small salon with just two technicians has grown into
                  a beloved destination for nail enthusiasts throughout the Inland Empire.
                  Our commitment to quality and personalized service has earned us the trust
                  of thousands of loyal clients.
                </p>
                <p>
                  Today, our team of skilled technicians continues Maria's vision, combining
                  traditional techniques with the latest trends to deliver exceptional results
                  for every client who walks through our doors.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-2xl">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                      <Sparkles className="h-12 w-12 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Est. 2014</h3>
                  <p className="text-muted-foreground">Rancho Cucamonga, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-6 py-20 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border/50">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 text-secondary">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <p className="mt-4 text-muted-foreground">
              The talented artists behind your beautiful nails
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-secondary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-accent/20 rounded text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Silver Nails?</h2>
              <div className="space-y-4">
                {[
                  'Premium, salon-grade products from top brands',
                  'Strict hygiene and sanitation protocols',
                  'Relaxing, spa-like atmosphere',
                  'Skilled technicians with ongoing training',
                  'Personalized service for every client',
                  'Competitive pricing with loyalty rewards',
                  'Convenient location with easy parking',
                  'Online booking available 24/7',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-2 border-secondary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Silver Nails</p>
                  <p className="text-muted-foreground">123 Main Street</p>
                  <p className="text-muted-foreground">Rancho Cucamonga, CA 91730</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>(909) 555-1234</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <div>
                    <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
                <Button variant="luxury" className="w-full" asChild>
                  <Link to="/booking">
                    Book Your Visit
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Jennifer M.',
                text: "I've been coming to Silver Nails for 5 years now. The quality and service are consistently excellent. Maria and her team are true artists!",
                rating: 5,
              },
              {
                name: 'Ashley T.',
                text: "Best nail salon in the area! The atmosphere is so relaxing, and my nails always look amazing. Highly recommend the spa pedicure!",
                rating: 5,
              },
              {
                name: 'Rachel K.',
                text: "Found my forever nail salon! The attention to detail is incredible. Sarah did my wedding nails and they were absolutely perfect.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardDescription className="text-base">"{testimonial.text}"</CardDescription>
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
      <section className="px-6 py-16 lg:px-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Silver Nails Difference?</h2>
          <p className="text-muted-foreground mb-8">
            Book your appointment today and let us pamper you
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

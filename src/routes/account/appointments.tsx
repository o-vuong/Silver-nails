import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Calendar,
  Clock,
  MapPin,
  User,
  ArrowRight,
  X,
  Check,
  AlertCircle,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export const Route = createFileRoute('/account/appointments')({
  component: AppointmentsPage,
})

function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming')
  const [cancellingId, setCancellingId] = useState<string | null>(null)

  // Mock appointments data
  const upcomingAppointments = [
    {
      id: '1',
      service: 'Luxury Manicure',
      date: '2024-12-30',
      time: '2:00 PM',
      endTime: '3:00 PM',
      technician: 'Maria Santos',
      price: 45,
      status: 'confirmed',
      depositPaid: true,
    },
    {
      id: '2',
      service: 'Gel Pedicure',
      date: '2025-01-05',
      time: '10:00 AM',
      endTime: '11:00 AM',
      technician: 'Kim Nguyen',
      price: 55,
      status: 'pending',
      depositPaid: false,
    },
  ]

  const pastAppointments = [
    {
      id: '3',
      service: 'Spa Pedicure',
      date: '2024-12-15',
      time: '3:00 PM',
      technician: 'Maria Santos',
      price: 65,
      status: 'completed',
      reviewed: false,
    },
    {
      id: '4',
      service: 'Gel Manicure',
      date: '2024-11-28',
      time: '11:00 AM',
      technician: 'Sarah Kim',
      price: 45,
      status: 'completed',
      reviewed: true,
    },
    {
      id: '5',
      service: 'Acrylic Full Set',
      date: '2024-11-10',
      time: '1:00 PM',
      technician: 'Kim Nguyen',
      price: 75,
      status: 'completed',
      reviewed: true,
    },
    {
      id: '6',
      service: 'Classic Manicure',
      date: '2024-10-25',
      time: '4:00 PM',
      technician: 'Maria Santos',
      price: 25,
      status: 'cancelled',
      reviewed: false,
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const handleCancelAppointment = async (id: string) => {
    setCancellingId(id)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setCancellingId(null)
    // In real implementation, would remove from list or update status
  }

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/account" className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-block">
              ← Back to Account
            </Link>
            <h1 className="text-3xl font-bold">My Appointments</h1>
            <p className="text-muted-foreground">View and manage your appointments</p>
          </div>
          <Button variant="luxury" asChild>
            <Link to="/booking">
              Book New
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border mb-6">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'upcoming'
                ? 'text-secondary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Upcoming
            {upcomingAppointments.length > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-secondary/20 text-secondary text-xs rounded-full">
                {upcomingAppointments.length}
              </span>
            )}
            {activeTab === 'upcoming' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'past'
                ? 'text-secondary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Past
            {activeTab === 'past' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary" />
            )}
          </button>
        </div>

        {/* Upcoming Appointments */}
        {activeTab === 'upcoming' && (
          <div className="space-y-4">
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map((apt) => (
                <Card key={apt.id} className="overflow-hidden">
                  <div className="flex">
                    {/* Date sidebar */}
                    <div className="w-24 bg-gradient-to-b from-secondary to-primary flex flex-col items-center justify-center text-white p-4">
                      <span className="text-3xl font-bold">
                        {new Date(apt.date).getDate()}
                      </span>
                      <span className="text-sm">
                        {new Date(apt.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                    </div>

                    {/* Content */}
                    <CardContent className="flex-1 p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">{apt.service}</h3>
                          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {apt.time} - {apt.endTime}
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              with {apt.technician}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              123 Main Street, Rancho Cucamonga
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-2xl font-bold">${apt.price}</p>
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                              apt.status === 'confirmed'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}
                          >
                            {apt.status === 'confirmed' && <Check className="h-3 w-3 mr-1" />}
                            {apt.status === 'pending' && <AlertCircle className="h-3 w-3 mr-1" />}
                            {apt.status}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                        <div className="text-sm text-muted-foreground">
                          {apt.depositPaid ? (
                            <span className="flex items-center gap-1 text-green-600">
                              <Check className="h-4 w-4" /> Deposit paid
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-yellow-600">
                              <AlertCircle className="h-4 w-4" /> Deposit required
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            onClick={() => handleCancelAppointment(apt.id)}
                            disabled={cancellingId === apt.id}
                          >
                            {cancellingId === apt.id ? (
                              'Cancelling...'
                            ) : (
                              <>
                                <X className="h-4 w-4 mr-1" /> Cancel
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No upcoming appointments</h3>
                  <p className="text-muted-foreground mb-6">
                    Ready to book your next visit?
                  </p>
                  <Button variant="luxury" asChild>
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Past Appointments */}
        {activeTab === 'past' && (
          <div className="space-y-4">
            {pastAppointments.map((apt) => (
              <Card key={apt.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium">{apt.service}</h3>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(apt.date)} at {apt.time}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          with {apt.technician}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-bold">${apt.price}</p>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                          apt.status === 'completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {apt.status}
                      </span>
                    </div>
                  </div>

                  {apt.status === 'completed' && !apt.reviewed && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/account/reviews">
                          Leave a Review
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Tips */}
        <Card className="mt-8 bg-accent/5 border-dashed">
          <CardContent className="p-6">
            <h3 className="font-medium mb-2">Cancellation Policy</h3>
            <p className="text-sm text-muted-foreground">
              Free cancellation up to 24 hours before your appointment. Cancellations within 24 hours
              may be subject to a cancellation fee. Please call (909) 555-1234 if you need to make changes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

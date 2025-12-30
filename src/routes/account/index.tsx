import { createFileRoute, Link, useLocation } from '@tanstack/react-router'
import {
  User,
  Calendar,
  Gift,
  Star,
  Settings,
  Bell,
  LogOut,
  ArrowRight,
  Clock,
  MapPin,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export const Route = createFileRoute('/account/')({
  component: AccountDashboard,
})

const navItems = [
  { href: '/account', label: 'Overview', icon: User, exact: true },
  { href: '/account/appointments', label: 'My Appointments', icon: Calendar },
  { href: '/account/rewards', label: 'Rewards', icon: Gift },
  { href: '/account/reviews', label: 'My Reviews', icon: Star },
  { href: '/account/settings', label: 'Settings', icon: Settings },
]

function AccountDashboard() {
  const location = useLocation()

  // Mock user data
  const user = {
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah@email.com',
    phone: '(909) 555-1234',
    memberSince: 'January 2023',
  }

  const loyaltyData = {
    points: 450,
    tier: 'Silver',
    nextTier: 'Gold',
    pointsToNext: 550,
  }

  const upcomingAppointments = [
    {
      id: '1',
      service: 'Luxury Manicure',
      date: 'Tomorrow',
      time: '2:00 PM',
      technician: 'Maria Santos',
    },
  ]

  const recentAppointments = [
    {
      id: '2',
      service: 'Spa Pedicure',
      date: 'Dec 15, 2024',
      status: 'completed',
      reviewed: false,
    },
    {
      id: '3',
      service: 'Gel Manicure',
      date: 'Nov 28, 2024',
      status: 'completed',
      reviewed: true,
    },
  ]

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {user.firstName}!</h1>
            <p className="text-muted-foreground">Member since {user.memberSince}</p>
          </div>
          <Button variant="luxury" asChild>
            <Link to="/booking">
              Book Appointment
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {user.firstName[0]}{user.lastName[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{user.firstName} {user.lastName}</p>
                    <p className="text-sm text-muted-foreground">{loyaltyData.tier} Member</p>
                  </div>
                </div>

                <nav className="space-y-1">
                  {navItems.map((item) => {
                    const isActive = item.exact
                      ? location.pathname === item.href
                      : location.pathname.startsWith(item.href)

                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-secondary/10 text-secondary'
                            : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        {item.label}
                      </Link>
                    )
                  })}
                </nav>

                <div className="mt-6 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground" asChild>
                    <Link to="/login">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Loyalty Card */}
            <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-secondary/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="h-5 w-5 text-secondary" />
                      <span className="text-sm font-medium">{loyaltyData.tier} Member</span>
                    </div>
                    <p className="text-3xl font-bold">{loyaltyData.points} Points</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {loyaltyData.pointsToNext} more points to {loyaltyData.nextTier}
                    </p>
                  </div>
                  <Button variant="outline" asChild>
                    <Link to="/account/rewards">View Rewards</Link>
                  </Button>
                </div>
                <div className="mt-4">
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-secondary to-accent rounded-full transition-all"
                      style={{ width: `${(loyaltyData.points / (loyaltyData.points + loyaltyData.pointsToNext)) * 100}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Upcoming Appointments</CardTitle>
                  <CardDescription>Your scheduled visits</CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/account/appointments">View All</Link>
                </Button>
              </CardHeader>
              <CardContent>
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingAppointments.map((apt) => (
                      <div key={apt.id} className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-secondary" />
                          </div>
                          <div>
                            <p className="font-medium">{apt.service}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {apt.date} at {apt.time}
                              </span>
                              <span>with {apt.technician}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">Reschedule</Button>
                          <Button variant="ghost" size="sm" className="text-red-600">Cancel</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">No upcoming appointments</p>
                    <Button variant="luxury" asChild>
                      <Link to="/booking">Book Now</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
                <CardDescription>Your past appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAppointments.map((apt) => (
                    <div key={apt.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div>
                        <p className="font-medium">{apt.service}</p>
                        <p className="text-sm text-muted-foreground">{apt.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {!apt.reviewed && (
                          <Button variant="outline" size="sm" asChild>
                            <Link to="/account/reviews">
                              <Star className="h-4 w-4 mr-1" />
                              Leave Review
                            </Link>
                          </Button>
                        )}
                        {apt.reviewed && (
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Star className="h-4 w-4 fill-secondary text-secondary" />
                            Reviewed
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="hover:border-secondary transition-colors cursor-pointer">
                <Link to="/account/settings">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Settings className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Account Settings</p>
                        <p className="text-sm text-muted-foreground">Update your profile and preferences</p>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>

              <Card className="hover:border-secondary transition-colors cursor-pointer">
                <Link to="/account/settings">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <Bell className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">Notifications</p>
                        <p className="text-sm text-muted-foreground">Manage email and SMS preferences</p>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

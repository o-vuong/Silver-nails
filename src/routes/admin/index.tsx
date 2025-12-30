import { createFileRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import {
  LayoutDashboard,
  Calendar,
  Users,
  Scissors,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react'
import { Button } from '~/components/ui/button'

export const Route = createFileRoute('/admin/')({
  component: AdminLayout,
})

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/appointments', label: 'Appointments', icon: Calendar },
  { href: '/admin/clients', label: 'Clients', icon: Users },
  { href: '/admin/services', label: 'Services', icon: Scissors },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
]

function AdminLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-accent/5">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-background">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b border-border px-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                <span className="text-sm font-bold text-white">SN</span>
              </div>
              <span className="font-bold">Silver Nails</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
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

          {/* User section */}
          <div className="border-t border-border p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-sm font-bold text-white">A</span>
              </div>
              <div>
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@silvernails.com</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/login">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64">
        <AdminDashboard />
      </main>
    </div>
  )
}

function AdminDashboard() {
  // Mock data for dashboard
  const stats = [
    { label: 'Today\'s Appointments', value: '12', change: '+2 from yesterday' },
    { label: 'This Week\'s Revenue', value: '$3,450', change: '+15% from last week' },
    { label: 'Active Clients', value: '1,234', change: '+45 new this month' },
    { label: 'Avg. Rating', value: '4.9', change: 'Based on 500+ reviews' },
  ]

  const todayAppointments = [
    { time: '9:00 AM', client: 'Sarah Johnson', service: 'Luxury Manicure', technician: 'Maria', status: 'confirmed' },
    { time: '10:00 AM', client: 'Emily Chen', service: 'Gel Pedicure', technician: 'Kim', status: 'in-progress' },
    { time: '11:30 AM', client: 'Rachel Kim', service: 'Acrylic Full Set', technician: 'Sarah', status: 'confirmed' },
    { time: '1:00 PM', client: 'Jennifer Lee', service: 'Spa Pedicure', technician: 'Maria', status: 'pending' },
    { time: '2:30 PM', client: 'Ashley Wang', service: 'Gel Manicure', technician: 'Kim', status: 'confirmed' },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-lg border border-border bg-background p-6"
          >
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Today's Appointments */}
      <div className="rounded-lg border border-border bg-background">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold">Today's Appointments</h2>
          <Button variant="outline" size="sm" asChild>
            <Link to="/admin/appointments">View All</Link>
          </Button>
        </div>
        <div className="divide-y divide-border">
          {todayAppointments.map((apt, index) => (
            <div key={index} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-sm font-medium">{apt.time}</p>
                </div>
                <div>
                  <p className="font-medium">{apt.client}</p>
                  <p className="text-sm text-muted-foreground">
                    {apt.service} with {apt.technician}
                  </p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  apt.status === 'confirmed'
                    ? 'bg-green-100 text-green-700'
                    : apt.status === 'in-progress'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {apt.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Link
          to="/admin/appointments"
          className="flex items-center gap-4 rounded-lg border border-border bg-background p-6 hover:border-secondary transition-colors"
        >
          <Calendar className="h-10 w-10 text-secondary" />
          <div>
            <p className="font-medium">Manage Appointments</p>
            <p className="text-sm text-muted-foreground">View and manage all bookings</p>
          </div>
        </Link>
        <Link
          to="/admin/clients"
          className="flex items-center gap-4 rounded-lg border border-border bg-background p-6 hover:border-secondary transition-colors"
        >
          <Users className="h-10 w-10 text-secondary" />
          <div>
            <p className="font-medium">Client Database</p>
            <p className="text-sm text-muted-foreground">View client information</p>
          </div>
        </Link>
        <Link
          to="/admin/analytics"
          className="flex items-center gap-4 rounded-lg border border-border bg-background p-6 hover:border-secondary transition-colors"
        >
          <BarChart3 className="h-10 w-10 text-secondary" />
          <div>
            <p className="font-medium">View Analytics</p>
            <p className="text-sm text-muted-foreground">Revenue and performance</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

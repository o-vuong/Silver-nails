import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Clock,
  User,
  Check,
  X,
  MoreHorizontal,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

export const Route = createFileRoute('/admin/appointments')({
  component: AdminAppointments,
})

function AdminAppointments() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [view, setView] = useState<'day' | 'week'>('day')
  const [searchQuery, setSearchQuery] = useState('')

  // Mock appointments data
  const appointments = [
    {
      id: '1',
      time: '9:00 AM',
      endTime: '10:00 AM',
      client: { name: 'Sarah Johnson', phone: '(909) 555-1234', email: 'sarah@email.com' },
      service: 'Luxury Manicure',
      technician: 'Maria Santos',
      status: 'confirmed',
      price: 45,
      notes: 'Regular client, prefers light pink colors',
    },
    {
      id: '2',
      time: '10:00 AM',
      endTime: '11:00 AM',
      client: { name: 'Emily Chen', phone: '(909) 555-2345', email: 'emily@email.com' },
      service: 'Gel Pedicure',
      technician: 'Kim Nguyen',
      status: 'in-progress',
      price: 55,
      notes: '',
    },
    {
      id: '3',
      time: '11:30 AM',
      endTime: '1:00 PM',
      client: { name: 'Rachel Kim', phone: '(909) 555-3456', email: 'rachel@email.com' },
      service: 'Acrylic Full Set',
      technician: 'Sarah Kim',
      status: 'confirmed',
      price: 75,
      notes: 'New client - first visit',
    },
    {
      id: '4',
      time: '1:00 PM',
      endTime: '2:15 PM',
      client: { name: 'Jennifer Lee', phone: '(909) 555-4567', email: 'jennifer@email.com' },
      service: 'Spa Pedicure',
      technician: 'Maria Santos',
      status: 'pending',
      price: 65,
      notes: 'Allergic to certain fragrances',
    },
    {
      id: '5',
      time: '2:30 PM',
      endTime: '3:15 PM',
      client: { name: 'Ashley Wang', phone: '(909) 555-5678', email: 'ashley@email.com' },
      service: 'Gel Manicure',
      technician: 'Kim Nguyen',
      status: 'confirmed',
      price: 45,
      notes: '',
    },
  ]

  const filteredAppointments = appointments.filter(apt =>
    apt.client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    apt.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
    apt.technician.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const navigateDate = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1))
    setSelectedDate(newDate)
  }

  return (
    <div className="min-h-screen bg-accent/5 ml-64">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Appointments</h1>
            <p className="text-muted-foreground">Manage and view all appointments</p>
          </div>
          <Button variant="luxury">
            + New Appointment
          </Button>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            {/* Date Navigation */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => navigateDate('prev')}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{formatDate(selectedDate)}</span>
              </div>
              <Button variant="outline" size="icon" onClick={() => navigateDate('next')}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* View Toggle */}
            <div className="flex border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setView('day')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  view === 'day' ? 'bg-secondary text-white' : 'hover:bg-accent/50'
                }`}
              >
                Day
              </button>
              <button
                onClick={() => setView('week')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  view === 'week' ? 'bg-secondary text-white' : 'hover:bg-accent/50'
                }`}
              >
                Week
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search appointments..."
                className="pl-10 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Appointments List */}
        <div className="bg-background border border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-accent/30">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Time</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Client</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Service</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Technician</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Price</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredAppointments.map((apt) => (
                <tr key={apt.id} className="hover:bg-accent/10">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{apt.time}</p>
                        <p className="text-xs text-muted-foreground">to {apt.endTime}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <User className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">{apt.client.name}</p>
                        <p className="text-xs text-muted-foreground">{apt.client.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium">{apt.service}</p>
                    {apt.notes && (
                      <p className="text-xs text-muted-foreground truncate max-w-[200px]">{apt.notes}</p>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm">{apt.technician}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        apt.status === 'confirmed'
                          ? 'bg-green-100 text-green-700'
                          : apt.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-700'
                          : apt.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">${apt.price}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-green-600">
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                        <X className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredAppointments.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              No appointments found for this date.
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="mt-6 grid grid-cols-4 gap-4">
          <div className="bg-background border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Total Appointments</p>
            <p className="text-2xl font-bold">{appointments.length}</p>
          </div>
          <div className="bg-background border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Confirmed</p>
            <p className="text-2xl font-bold text-green-600">
              {appointments.filter(a => a.status === 'confirmed').length}
            </p>
          </div>
          <div className="bg-background border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="text-2xl font-bold text-yellow-600">
              {appointments.filter(a => a.status === 'pending').length}
            </p>
          </div>
          <div className="bg-background border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Expected Revenue</p>
            <p className="text-2xl font-bold">
              ${appointments.reduce((sum, a) => sum + a.price, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

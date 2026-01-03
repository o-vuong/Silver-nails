import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Calendar,
  Star,
  Download,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'

export const Route = createFileRoute('/admin/analytics')({
  component: AdminAnalyticsPage,
})

function AdminAnalyticsPage() {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('month')

  // Mock analytics data
  const metrics = {
    revenue: {
      current: 12450,
      previous: 10230,
      change: 21.7,
    },
    appointments: {
      current: 156,
      previous: 142,
      change: 9.9,
    },
    newClients: {
      current: 28,
      previous: 22,
      change: 27.3,
    },
    avgRating: {
      current: 4.9,
      previous: 4.8,
      change: 2.1,
    },
  }

  const topServices = [
    { name: 'Gel Manicure', bookings: 45, revenue: 2025, growth: 15 },
    { name: 'Spa Pedicure', bookings: 38, revenue: 2470, growth: 22 },
    { name: 'Acrylic Full Set', bookings: 32, revenue: 2400, growth: 8 },
    { name: 'Luxury Manicure', bookings: 28, revenue: 1260, growth: -5 },
    { name: 'Gel-X Extensions', bookings: 24, revenue: 2040, growth: 35 },
  ]

  const revenueByDay = [
    { day: 'Mon', revenue: 1200 },
    { day: 'Tue', revenue: 1450 },
    { day: 'Wed', revenue: 1100 },
    { day: 'Thu', revenue: 1680 },
    { day: 'Fri', revenue: 2100 },
    { day: 'Sat', revenue: 2800 },
    { day: 'Sun', revenue: 0 },
  ]

  const maxRevenue = Math.max(...revenueByDay.map(d => d.revenue))

  const staffPerformance = [
    { name: 'Maria', appointments: 42, revenue: 3150, rating: 4.9 },
    { name: 'Kim', appointments: 38, revenue: 2850, rating: 4.8 },
    { name: 'Sarah', appointments: 35, revenue: 2625, rating: 4.9 },
    { name: 'Lisa', appointments: 32, revenue: 2400, rating: 4.7 },
  ]

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-muted-foreground">Track your business performance</p>
          </div>
          <div className="flex gap-3">
            <div className="flex bg-accent/10 rounded-lg p-1">
              {(['week', 'month', 'year'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    timeRange === range
                      ? 'bg-background shadow'
                      : 'hover:text-foreground'
                  }`}
                >
                  {range.charAt(0).toUpperCase() + range.slice(1)}
                </button>
              ))}
            </div>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="h-5 w-5 text-green-600" />
                </div>
                <span className={`flex items-center text-sm font-medium ${
                  metrics.revenue.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metrics.revenue.change >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                  {metrics.revenue.change}%
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">Revenue</p>
              <p className="text-3xl font-bold">${metrics.revenue.current.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <span className={`flex items-center text-sm font-medium ${
                  metrics.appointments.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metrics.appointments.change >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                  {metrics.appointments.change}%
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">Appointments</p>
              <p className="text-3xl font-bold">{metrics.appointments.current}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <span className={`flex items-center text-sm font-medium ${
                  metrics.newClients.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metrics.newClients.change >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                  {metrics.newClients.change}%
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">New Clients</p>
              <p className="text-3xl font-bold">{metrics.newClients.current}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Star className="h-5 w-5 text-yellow-600" />
                </div>
                <span className={`flex items-center text-sm font-medium ${
                  metrics.avgRating.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metrics.avgRating.change >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                  {metrics.avgRating.change}%
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">Avg. Rating</p>
              <p className="text-3xl font-bold">{metrics.avgRating.current}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          {/* Revenue Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue by Day</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between h-48 gap-2">
                {revenueByDay.map((day) => (
                  <div key={day.day} className="flex flex-col items-center flex-1">
                    <div
                      className="w-full bg-gradient-to-t from-secondary to-accent rounded-t transition-all"
                      style={{
                        height: `${(day.revenue / maxRevenue) * 100}%`,
                        minHeight: day.revenue > 0 ? '8px' : '0',
                      }}
                    />
                    <p className="text-xs text-muted-foreground mt-2">{day.day}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Services */}
          <Card>
            <CardHeader>
              <CardTitle>Top Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topServices.map((service, index) => (
                  <div key={service.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-medium">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-medium">{service.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {service.bookings} bookings
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${service.revenue}</p>
                      <p className={`text-sm ${
                        service.growth >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {service.growth >= 0 ? '+' : ''}{service.growth}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Staff Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Staff Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-medium text-muted-foreground">Staff</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Appointments</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Revenue</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Rating</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Efficiency</th>
                  </tr>
                </thead>
                <tbody>
                  {staffPerformance.map((staff) => (
                    <tr key={staff.name} className="border-b border-border">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                            <span className="text-xs font-bold text-white">{staff.name[0]}</span>
                          </div>
                          <p className="font-medium">{staff.name}</p>
                        </div>
                      </td>
                      <td className="p-4">{staff.appointments}</td>
                      <td className="p-4">${staff.revenue}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          {staff.rating}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="w-24 bg-accent/20 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-secondary to-accent rounded-full h-2"
                            style={{ width: `${(staff.appointments / 50) * 100}%` }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

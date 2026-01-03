import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import {
  Search,
  Filter,
  Mail,
  Phone,
  Calendar,
  Star,
  MoreVertical,
  Plus,
  Download,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'

export const Route = createFileRoute('/admin/clients')({
  component: AdminClientsPage,
})

interface Client {
  id: string
  name: string
  email: string
  phone: string
  totalVisits: number
  totalSpent: number
  loyaltyPoints: number
  lastVisit: string
  status: 'active' | 'inactive' | 'vip'
}

// Mock data - in production, fetch from Notion API
const mockClients: Client[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '(909) 555-1234',
    totalVisits: 24,
    totalSpent: 1250,
    loyaltyPoints: 2500,
    lastVisit: '2025-12-28',
    status: 'vip',
  },
  {
    id: '2',
    name: 'Emily Chen',
    email: 'emily.c@email.com',
    phone: '(909) 555-2345',
    totalVisits: 12,
    totalSpent: 580,
    loyaltyPoints: 1160,
    lastVisit: '2025-12-27',
    status: 'active',
  },
  {
    id: '3',
    name: 'Rachel Kim',
    email: 'rachel.k@email.com',
    phone: '(909) 555-3456',
    totalVisits: 8,
    totalSpent: 420,
    loyaltyPoints: 840,
    lastVisit: '2025-12-25',
    status: 'active',
  },
  {
    id: '4',
    name: 'Jennifer Lee',
    email: 'jennifer.l@email.com',
    phone: '(909) 555-4567',
    totalVisits: 3,
    totalSpent: 150,
    loyaltyPoints: 300,
    lastVisit: '2025-12-20',
    status: 'inactive',
  },
  {
    id: '5',
    name: 'Ashley Wang',
    email: 'ashley.w@email.com',
    phone: '(909) 555-5678',
    totalVisits: 18,
    totalSpent: 920,
    loyaltyPoints: 1840,
    lastVisit: '2025-12-29',
    status: 'vip',
  },
]

function AdminClientsPage() {
  const [clients] = useState<Client[]>(mockClients)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.phone.includes(searchQuery)
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const stats = {
    total: clients.length,
    active: clients.filter(c => c.status === 'active').length,
    vip: clients.filter(c => c.status === 'vip').length,
    totalRevenue: clients.reduce((sum, c) => sum + c.totalSpent, 0),
  }

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Clients</h1>
            <p className="text-muted-foreground">Manage your client database</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="luxury">
              <Plus className="h-4 w-4 mr-2" />
              Add Client
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">Total Clients</p>
              <p className="text-3xl font-bold mt-2">{stats.total}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">Active Clients</p>
              <p className="text-3xl font-bold mt-2">{stats.active}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">VIP Members</p>
              <p className="text-3xl font-bold mt-2">{stats.vip}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <p className="text-3xl font-bold mt-2">${stats.totalRevenue.toLocaleString()}</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search clients..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            {['all', 'active', 'vip', 'inactive'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  statusFilter === status
                    ? 'bg-secondary text-white'
                    : 'bg-accent/10 hover:bg-accent/20'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Clients Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-medium text-muted-foreground">Client</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Contact</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Visits</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Total Spent</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Points</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Last Visit</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-left p-4 font-medium text-muted-foreground"></th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client) => (
                  <tr key={client.id} className="border-b border-border hover:bg-accent/5">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                          <span className="text-sm font-bold text-white">
                            {client.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <p className="font-medium">{client.name}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1">
                        <p className="text-sm flex items-center gap-2">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          {client.email}
                        </p>
                        <p className="text-sm flex items-center gap-2">
                          <Phone className="h-3 w-3 text-muted-foreground" />
                          {client.phone}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">{client.totalVisits}</td>
                    <td className="p-4">${client.totalSpent}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        {client.loyaltyPoints}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        {new Date(client.lastVisit).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          client.status === 'vip'
                            ? 'bg-purple-100 text-purple-700'
                            : client.status === 'active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {client.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="p-2 hover:bg-accent/10 rounded-lg">
                        <MoreVertical className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}

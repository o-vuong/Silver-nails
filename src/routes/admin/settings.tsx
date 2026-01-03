import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Store,
  Clock,
  Bell,
  CreditCard,
  Mail,
  Shield,
  Save,
  Plus,
  Trash2,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export const Route = createFileRoute('/admin/settings')({
  component: AdminSettingsPage,
})

function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('business')
  const [isSaving, setIsSaving] = useState(false)

  const tabs = [
    { id: 'business', label: 'Business Info', icon: Store },
    { id: 'hours', label: 'Hours', icon: Clock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'security', label: 'Security', icon: Shield },
  ]

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">Manage your salon settings</p>
          </div>
          <Button variant="luxury" onClick={handleSave} disabled={isSaving}>
            <Save className="h-4 w-4 mr-2" />
            {isSaving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>

        <div className="flex gap-8">
          {/* Tabs */}
          <div className="w-64 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-secondary/10 text-secondary'
                    : 'hover:bg-accent/10'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1">
            {activeTab === 'business' && <BusinessSettings />}
            {activeTab === 'hours' && <HoursSettings />}
            {activeTab === 'notifications' && <NotificationSettings />}
            {activeTab === 'payments' && <PaymentSettings />}
            {activeTab === 'email' && <EmailSettings />}
            {activeTab === 'security' && <SecuritySettings />}
          </div>
        </div>
      </div>
    </div>
  )
}

function BusinessSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Information</CardTitle>
        <CardDescription>Update your salon details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Business Name</Label>
            <Input id="name" defaultValue="Silver Nails" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" defaultValue="(909) 555-1234" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" defaultValue="123 Main Street, Rancho Cucamonga, CA 91730" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email">Business Email</Label>
            <Input id="email" type="email" defaultValue="hello@silvernails.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input id="website" defaultValue="https://silvernails.com" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <textarea
            id="description"
            className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background text-sm"
            defaultValue="Luxury nail salon in Rancho Cucamonga offering premium manicures, pedicures, and nail art services."
          />
        </div>
      </CardContent>
    </Card>
  )
}

function HoursSettings() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const defaultHours = {
    Monday: { open: '9:00 AM', close: '7:00 PM', closed: false },
    Tuesday: { open: '9:00 AM', close: '7:00 PM', closed: false },
    Wednesday: { open: '9:00 AM', close: '7:00 PM', closed: false },
    Thursday: { open: '9:00 AM', close: '7:00 PM', closed: false },
    Friday: { open: '9:00 AM', close: '8:00 PM', closed: false },
    Saturday: { open: '9:00 AM', close: '6:00 PM', closed: false },
    Sunday: { open: '', close: '', closed: true },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Hours</CardTitle>
        <CardDescription>Set your operating hours</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {days.map((day) => {
            const hours = defaultHours[day as keyof typeof defaultHours]
            return (
              <div key={day} className="flex items-center gap-4">
                <span className="w-28 font-medium">{day}</span>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked={!hours.closed} className="rounded" />
                  <span className="text-sm">Open</span>
                </label>
                {!hours.closed && (
                  <>
                    <Input className="w-28" defaultValue={hours.open} />
                    <span className="text-muted-foreground">to</span>
                    <Input className="w-28" defaultValue={hours.close} />
                  </>
                )}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Configure email and SMS notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Email Notifications</h3>
          {[
            { label: 'Booking confirmations', checked: true },
            { label: 'Appointment reminders (24h before)', checked: true },
            { label: 'Cancellation notifications', checked: true },
            { label: 'New client registrations', checked: true },
            { label: 'Daily summary report', checked: false },
          ].map((item) => (
            <label key={item.label} className="flex items-center gap-3">
              <input type="checkbox" defaultChecked={item.checked} className="rounded" />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">SMS Notifications</h3>
          {[
            { label: 'Booking confirmations', checked: false },
            { label: 'Appointment reminders', checked: true },
            { label: 'Cancellation notifications', checked: false },
          ].map((item) => (
            <label key={item.label} className="flex items-center gap-3">
              <input type="checkbox" defaultChecked={item.checked} className="rounded" />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function PaymentSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Settings</CardTitle>
        <CardDescription>Configure payment processing</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">PayPal Integration</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="paypal-client">Client ID</Label>
              <Input id="paypal-client" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="paypal-secret">Secret Key</Label>
              <Input id="paypal-secret" type="password" placeholder="••••••••" />
            </div>
          </div>
          <label className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="rounded" />
            <span>Enable PayPal payments</span>
          </label>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">Deposit Settings</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="deposit">Deposit Percentage</Label>
              <Input id="deposit" type="number" defaultValue="20" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="min-deposit">Minimum Deposit ($)</Label>
              <Input id="min-deposit" type="number" defaultValue="10" />
            </div>
          </div>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="rounded" />
            <span>Require deposit for all bookings</span>
          </label>
        </div>
      </CardContent>
    </Card>
  )
}

function EmailSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Email Configuration</CardTitle>
        <CardDescription>Configure email sending</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Resend API</h3>
          <div className="space-y-2">
            <Label htmlFor="resend-key">API Key</Label>
            <Input id="resend-key" type="password" placeholder="re_••••••••" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="from-email">From Email</Label>
            <Input id="from-email" type="email" defaultValue="noreply@silvernails.com" />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">Email Templates</h3>
          <p className="text-sm text-muted-foreground">
            Customize the email templates sent to your clients
          </p>
          <div className="grid gap-2">
            {['Booking Confirmation', 'Appointment Reminder', 'Cancellation', 'Welcome Email'].map((template) => (
              <div key={template} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <span>{template}</span>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function SecuritySettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
        <CardDescription>Manage access and security</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Admin Accounts</h3>
          <div className="space-y-2">
            {['admin@silvernails.com', 'manager@silvernails.com'].map((email) => (
              <div key={email} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <span>{email}</span>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Admin
          </Button>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">Session Settings</h3>
          <div className="space-y-2">
            <Label htmlFor="session">Session Timeout (minutes)</Label>
            <Input id="session" type="number" defaultValue="60" className="max-w-xs" />
          </div>
          <label className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="rounded" />
            <span>Require re-authentication for sensitive actions</span>
          </label>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">Two-Factor Authentication</h3>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="rounded" />
            <span>Require 2FA for admin accounts</span>
          </label>
        </div>
      </CardContent>
    </Card>
  )
}

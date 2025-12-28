import { Client } from "@notionhq/client"
import type {
  User,
  Staff,
  Service,
  Appointment,
  Payment,
  LoyaltyProgram,
  Review,
  GalleryImage,
} from "~/types"

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

// Database IDs - These will be set during setup
export const NOTION_DATABASES = {
  USERS: process.env.NOTION_DB_USERS || "",
  STAFF: process.env.NOTION_DB_STAFF || "",
  SERVICES: process.env.NOTION_DB_SERVICES || "",
  APPOINTMENTS: process.env.NOTION_DB_APPOINTMENTS || "",
  PAYMENTS: process.env.NOTION_DB_PAYMENTS || "",
  LOYALTY: process.env.NOTION_DB_LOYALTY || "",
  REVIEWS: process.env.NOTION_DB_REVIEWS || "",
  GALLERY: process.env.NOTION_DB_GALLERY || "",
}

// Helper to convert Notion page to User
function notionPageToUser(page: any): User {
  const props = page.properties
  return {
    id: page.id,
    email: props.Email?.email || "",
    firstName: props.FirstName?.rich_text?.[0]?.text?.content || "",
    lastName: props.LastName?.rich_text?.[0]?.text?.content || "",
    phone: props.Phone?.phone_number || "",
    role: props.Role?.select?.name || "client",
    createdAt: page.created_time,
    preferences: props.Preferences?.rich_text?.[0]?.text?.content
      ? JSON.parse(props.Preferences.rich_text[0].text.content)
      : undefined,
  }
}

// Helper to convert Notion page to Staff
function notionPageToStaff(page: any): Staff {
  const props = page.properties
  return {
    id: page.id,
    userId: props.UserId?.rich_text?.[0]?.text?.content || "",
    name: props.Name?.title?.[0]?.text?.content || "",
    email: props.Email?.email || "",
    phone: props.Phone?.phone_number || "",
    specialties: props.Specialties?.multi_select?.map((s: any) => s.name) || [],
    bio: props.Bio?.rich_text?.[0]?.text?.content,
    imageUrl: props.ImageUrl?.url,
    isActive: props.IsActive?.checkbox || false,
    schedule: props.Schedule?.rich_text?.[0]?.text?.content
      ? JSON.parse(props.Schedule.rich_text[0].text.content)
      : {},
    createdAt: page.created_time,
  }
}

// Helper to convert Notion page to Service
function notionPageToService(page: any): Service {
  const props = page.properties
  return {
    id: page.id,
    name: props.Name?.title?.[0]?.text?.content || "",
    description: props.Description?.rich_text?.[0]?.text?.content || "",
    category: props.Category?.select?.name || "other",
    duration: props.Duration?.number || 60,
    price: props.Price?.number || 0,
    imageUrl: props.ImageUrl?.url,
    isActive: props.IsActive?.checkbox || true,
    requiresDeposit: props.RequiresDeposit?.checkbox || false,
    depositAmount: props.DepositAmount?.number,
    addOns: props.AddOns?.rich_text?.[0]?.text?.content
      ? JSON.parse(props.AddOns.rich_text[0].text.content)
      : [],
  }
}

// Helper to convert Notion page to Appointment
function notionPageToAppointment(page: any): Appointment {
  const props = page.properties
  return {
    id: page.id,
    clientId: props.ClientId?.rich_text?.[0]?.text?.content || "",
    staffId: props.StaffId?.rich_text?.[0]?.text?.content || "",
    serviceId: props.ServiceId?.rich_text?.[0]?.text?.content || "",
    date: props.Date?.date?.start || "",
    startTime: props.StartTime?.rich_text?.[0]?.text?.content || "",
    endTime: props.EndTime?.rich_text?.[0]?.text?.content || "",
    status: props.Status?.select?.name || "pending",
    notes: props.Notes?.rich_text?.[0]?.text?.content,
    addOns: props.AddOns?.multi_select?.map((s: any) => s.name) || [],
    totalPrice: props.TotalPrice?.number || 0,
    depositPaid: props.DepositPaid?.checkbox || false,
    depositAmount: props.DepositAmount?.number,
    reminderSent: props.ReminderSent?.checkbox || false,
    createdAt: page.created_time,
    updatedAt: page.last_edited_time,
  }
}

// Users API
export const notionUsers = {
  async create(user: Omit<User, "id" | "createdAt">) {
    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASES.USERS },
      properties: {
        Email: { email: user.email },
        FirstName: { rich_text: [{ text: { content: user.firstName } }] },
        LastName: { rich_text: [{ text: { content: user.lastName } }] },
        Phone: { phone_number: user.phone },
        Role: { select: { name: user.role } },
        Preferences: user.preferences
          ? { rich_text: [{ text: { content: JSON.stringify(user.preferences) } }] }
          : undefined,
      },
    })
    return notionPageToUser(response)
  },

  async findByEmail(email: string): Promise<User | null> {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.USERS,
      filter: {
        property: "Email",
        email: { equals: email },
      },
    })
    return response.results.length > 0
      ? notionPageToUser(response.results[0])
      : null
  },

  async findById(id: string): Promise<User | null> {
    try {
      const response = await notion.pages.retrieve({ page_id: id })
      return notionPageToUser(response)
    } catch {
      return null
    }
  },

  async update(id: string, updates: Partial<User>) {
    const properties: any = {}

    if (updates.firstName) {
      properties.FirstName = { rich_text: [{ text: { content: updates.firstName } }] }
    }
    if (updates.lastName) {
      properties.LastName = { rich_text: [{ text: { content: updates.lastName } }] }
    }
    if (updates.phone) {
      properties.Phone = { phone_number: updates.phone }
    }
    if (updates.preferences) {
      properties.Preferences = {
        rich_text: [{ text: { content: JSON.stringify(updates.preferences) } }],
      }
    }

    const response = await notion.pages.update({
      page_id: id,
      properties,
    })
    return notionPageToUser(response)
  },
}

// Staff API
export const notionStaff = {
  async create(staff: Omit<Staff, "id" | "createdAt">) {
    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASES.STAFF },
      properties: {
        Name: { title: [{ text: { content: staff.name } }] },
        UserId: { rich_text: [{ text: { content: staff.userId } }] },
        Email: { email: staff.email },
        Phone: { phone_number: staff.phone },
        Specialties: { multi_select: staff.specialties.map(s => ({ name: s })) },
        Bio: staff.bio ? { rich_text: [{ text: { content: staff.bio } }] } : undefined,
        ImageUrl: staff.imageUrl ? { url: staff.imageUrl } : undefined,
        IsActive: { checkbox: staff.isActive },
        Schedule: { rich_text: [{ text: { content: JSON.stringify(staff.schedule) } }] },
      },
    })
    return notionPageToStaff(response)
  },

  async getAll(activeOnly: boolean = true): Promise<Staff[]> {
    const filter = activeOnly
      ? { property: "IsActive", checkbox: { equals: true } }
      : undefined

    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.STAFF,
      filter,
    })
    return response.results.map(notionPageToStaff)
  },

  async findById(id: string): Promise<Staff | null> {
    try {
      const response = await notion.pages.retrieve({ page_id: id })
      return notionPageToStaff(response)
    } catch {
      return null
    }
  },

  async update(id: string, updates: Partial<Staff>) {
    const properties: any = {}

    if (updates.name) {
      properties.Name = { title: [{ text: { content: updates.name } }] }
    }
    if (updates.bio !== undefined) {
      properties.Bio = { rich_text: [{ text: { content: updates.bio } }] }
    }
    if (updates.schedule) {
      properties.Schedule = {
        rich_text: [{ text: { content: JSON.stringify(updates.schedule) } }],
      }
    }
    if (updates.isActive !== undefined) {
      properties.IsActive = { checkbox: updates.isActive }
    }

    const response = await notion.pages.update({
      page_id: id,
      properties,
    })
    return notionPageToStaff(response)
  },
}

// Services API
export const notionServices = {
  async create(service: Omit<Service, "id">) {
    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASES.SERVICES },
      properties: {
        Name: { title: [{ text: { content: service.name } }] },
        Description: { rich_text: [{ text: { content: service.description } }] },
        Category: { select: { name: service.category } },
        Duration: { number: service.duration },
        Price: { number: service.price },
        ImageUrl: service.imageUrl ? { url: service.imageUrl } : undefined,
        IsActive: { checkbox: service.isActive },
        RequiresDeposit: { checkbox: service.requiresDeposit },
        DepositAmount: service.depositAmount ? { number: service.depositAmount } : undefined,
        AddOns: service.addOns
          ? { rich_text: [{ text: { content: JSON.stringify(service.addOns) } }] }
          : undefined,
      },
    })
    return notionPageToService(response)
  },

  async getAll(activeOnly: boolean = true): Promise<Service[]> {
    const filter = activeOnly
      ? { property: "IsActive", checkbox: { equals: true } }
      : undefined

    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.SERVICES,
      filter,
    })
    return response.results.map(notionPageToService)
  },

  async findById(id: string): Promise<Service | null> {
    try {
      const response = await notion.pages.retrieve({ page_id: id })
      return notionPageToService(response)
    } catch {
      return null
    }
  },

  async getByCategory(category: string): Promise<Service[]> {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.SERVICES,
      filter: {
        and: [
          { property: "Category", select: { equals: category } },
          { property: "IsActive", checkbox: { equals: true } },
        ],
      },
    })
    return response.results.map(notionPageToService)
  },
}

// Appointments API
export const notionAppointments = {
  async create(appointment: Omit<Appointment, "id" | "createdAt" | "updatedAt">) {
    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASES.APPOINTMENTS },
      properties: {
        ClientId: { rich_text: [{ text: { content: appointment.clientId } }] },
        StaffId: { rich_text: [{ text: { content: appointment.staffId } }] },
        ServiceId: { rich_text: [{ text: { content: appointment.serviceId } }] },
        Date: { date: { start: appointment.date } },
        StartTime: { rich_text: [{ text: { content: appointment.startTime } }] },
        EndTime: { rich_text: [{ text: { content: appointment.endTime } }] },
        Status: { select: { name: appointment.status } },
        Notes: appointment.notes
          ? { rich_text: [{ text: { content: appointment.notes } }] }
          : undefined,
        AddOns: { multi_select: appointment.addOns?.map(a => ({ name: a })) || [] },
        TotalPrice: { number: appointment.totalPrice },
        DepositPaid: { checkbox: appointment.depositPaid },
        DepositAmount: appointment.depositAmount
          ? { number: appointment.depositAmount }
          : undefined,
        ReminderSent: { checkbox: appointment.reminderSent },
      },
    })
    return notionPageToAppointment(response)
  },

  async findById(id: string): Promise<Appointment | null> {
    try {
      const response = await notion.pages.retrieve({ page_id: id })
      return notionPageToAppointment(response)
    } catch {
      return null
    }
  },

  async getByClient(clientId: string): Promise<Appointment[]> {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.APPOINTMENTS,
      filter: {
        property: "ClientId",
        rich_text: { equals: clientId },
      },
      sorts: [{ property: "Date", direction: "descending" }],
    })
    return response.results.map(notionPageToAppointment)
  },

  async getByStaff(staffId: string, startDate?: string, endDate?: string): Promise<Appointment[]> {
    const filters: any[] = [
      { property: "StaffId", rich_text: { equals: staffId } },
    ]

    if (startDate) {
      filters.push({ property: "Date", date: { on_or_after: startDate } })
    }
    if (endDate) {
      filters.push({ property: "Date", date: { on_or_before: endDate } })
    }

    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.APPOINTMENTS,
      filter: filters.length > 1 ? { and: filters } : filters[0],
      sorts: [{ property: "Date", direction: "ascending" }],
    })
    return response.results.map(notionPageToAppointment)
  },

  async update(id: string, updates: Partial<Appointment>) {
    const properties: any = {}

    if (updates.status) {
      properties.Status = { select: { name: updates.status } }
    }
    if (updates.notes !== undefined) {
      properties.Notes = { rich_text: [{ text: { content: updates.notes } }] }
    }
    if (updates.depositPaid !== undefined) {
      properties.DepositPaid = { checkbox: updates.depositPaid }
    }
    if (updates.reminderSent !== undefined) {
      properties.ReminderSent = { checkbox: updates.reminderSent }
    }

    const response = await notion.pages.update({
      page_id: id,
      properties,
    })
    return notionPageToAppointment(response)
  },
}

// Export all APIs
export const notionDb = {
  users: notionUsers,
  staff: notionStaff,
  services: notionServices,
  appointments: notionAppointments,
}

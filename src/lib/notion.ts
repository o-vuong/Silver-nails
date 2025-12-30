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

// ============================================
// Helper Functions for Relation Properties
// ============================================

// Extract first relation ID from a relation property
function getRelationId(relationProp: any): string {
  return relationProp?.relation?.[0]?.id || ""
}

// Extract all relation IDs from a relation property
function getRelationIds(relationProp: any): string[] {
  return relationProp?.relation?.map((r: any) => r.id) || []
}

// Create relation property value
function createRelation(id: string | undefined): { relation: { id: string }[] } | undefined {
  if (!id) return undefined
  return { relation: [{ id }] }
}

// Create multi-relation property value
function createRelations(ids: string[] | undefined): { relation: { id: string }[] } | undefined {
  if (!ids || ids.length === 0) return undefined
  return { relation: ids.map(id => ({ id })) }
}

// ============================================
// Type Converters
// ============================================

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

// Helper to convert Notion page to Staff (with User relation)
function notionPageToStaff(page: any): Staff {
  const props = page.properties
  return {
    id: page.id,
    userId: getRelationId(props.User), // Now using Relation
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
    isActive: props.IsActive?.checkbox ?? true,
    requiresDeposit: props.RequiresDeposit?.checkbox || false,
    depositAmount: props.DepositAmount?.number,
    addOns: props.AddOns?.rich_text?.[0]?.text?.content
      ? JSON.parse(props.AddOns.rich_text[0].text.content)
      : [],
  }
}

// Helper to convert Notion page to Appointment (with Relations)
function notionPageToAppointment(page: any): Appointment {
  const props = page.properties
  return {
    id: page.id,
    clientId: getRelationId(props.Client),    // Relation → Users
    staffId: getRelationId(props.Staff),      // Relation → Staff
    serviceId: getRelationId(props.Service),  // Relation → Services
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

// Helper to convert Notion page to Payment (with Relation)
function notionPageToPayment(page: any): Payment {
  const props = page.properties
  return {
    id: page.id,
    appointmentId: getRelationId(props.Appointment), // Relation → Appointments
    amount: props.Amount?.number || 0,
    type: props.Type?.select?.name || "full-payment",
    status: props.Status?.select?.name || "pending",
    method: props.Method?.select?.name || "card",
    transactionId: props.TransactionId?.rich_text?.[0]?.text?.content,
    createdAt: page.created_time,
  }
}

// Helper to convert Notion page to LoyaltyProgram (with Relation)
function notionPageToLoyalty(page: any): LoyaltyProgram {
  const props = page.properties
  return {
    clientId: getRelationId(props.User), // Relation → Users
    points: props.Points?.number || 0,
    tier: props.Tier?.select?.name || "bronze",
    lifetimeSpend: props.LifetimeSpend?.number || 0,
    visitsCount: props.VisitsCount?.number || 0,
    lastVisit: props.LastVisit?.date?.start,
    rewards: props.Rewards?.rich_text?.[0]?.text?.content
      ? JSON.parse(props.Rewards.rich_text[0].text.content)
      : [],
  }
}

// Helper to convert Notion page to Review (with Relations)
function notionPageToReview(page: any): Review {
  const props = page.properties
  return {
    id: page.id,
    appointmentId: getRelationId(props.Appointment), // Relation → Appointments
    clientId: getRelationId(props.Client),           // Relation → Users
    staffId: getRelationId(props.Staff),             // Relation → Staff
    rating: props.Rating?.number || 0,
    comment: props.Comment?.rich_text?.[0]?.text?.content,
    createdAt: page.created_time,
  }
}

// Helper to convert Notion page to GalleryImage (with Relation)
function notionPageToGallery(page: any): GalleryImage {
  const props = page.properties
  return {
    id: page.id,
    url: props.Url?.url || "",
    title: props.Title?.title?.[0]?.text?.content,
    description: props.Description?.rich_text?.[0]?.text?.content,
    tags: props.Tags?.multi_select?.map((t: any) => t.name) || [],
    staffId: getRelationId(props.Staff), // Relation → Staff
    isHidden: props.IsHidden?.checkbox || false,
    uploadedAt: page.created_time,
  }
}

// ============================================
// Users API
// ============================================
export const notionUsers = {
  async create(user: Omit<User, "id" | "createdAt">) {
    const properties: any = {
      Name: { title: [{ text: { content: `${user.firstName} ${user.lastName}` } }] },
      Email: { email: user.email },
      FirstName: { rich_text: [{ text: { content: user.firstName } }] },
      LastName: { rich_text: [{ text: { content: user.lastName } }] },
      Phone: { phone_number: user.phone },
      Role: { select: { name: user.role } },
    }

    if (user.preferences) {
      properties.Preferences = { rich_text: [{ text: { content: JSON.stringify(user.preferences) } }] }
    }

    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASES.USERS },
      properties,
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

  async getAll(): Promise<User[]> {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.USERS,
      sorts: [{ property: "Created", direction: "descending" }],
    })
    return response.results.map(notionPageToUser)
  },

  async getByRole(role: "client" | "staff" | "admin"): Promise<User[]> {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.USERS,
      filter: {
        property: "Role",
        select: { equals: role },
      },
    })
    return response.results.map(notionPageToUser)
  },

  async update(id: string, updates: Partial<User>) {
    const properties: any = {}

    if (updates.firstName !== undefined) {
      properties.FirstName = { rich_text: [{ text: { content: updates.firstName } }] }
    }
    if (updates.lastName !== undefined) {
      properties.LastName = { rich_text: [{ text: { content: updates.lastName } }] }
    }
    if (updates.firstName !== undefined || updates.lastName !== undefined) {
      const firstName = updates.firstName || ""
      const lastName = updates.lastName || ""
      properties.Name = { title: [{ text: { content: `${firstName} ${lastName}`.trim() } }] }
    }
    if (updates.phone !== undefined) {
      properties.Phone = { phone_number: updates.phone }
    }
    if (updates.preferences !== undefined) {
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

// ============================================
// Staff API (with User Relation)
// ============================================
export const notionStaff = {
  async create(staff: Omit<Staff, "id" | "createdAt">) {
    const properties: any = {
      Name: { title: [{ text: { content: staff.name } }] },
      Email: { email: staff.email },
      Phone: { phone_number: staff.phone },
      Specialties: { multi_select: staff.specialties.map(s => ({ name: s })) },
      IsActive: { checkbox: staff.isActive },
      Schedule: { rich_text: [{ text: { content: JSON.stringify(staff.schedule) } }] },
    }

    // User relation (if userId provided)
    if (staff.userId) {
      properties.User = createRelation(staff.userId)
    }
    if (staff.bio) {
      properties.Bio = { rich_text: [{ text: { content: staff.bio } }] }
    }
    if (staff.imageUrl) {
      properties.ImageUrl = { url: staff.imageUrl }
    }

    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASES.STAFF },
      properties,
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

  async findByUserId(userId: string): Promise<Staff | null> {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.STAFF,
      filter: {
        property: "User",
        relation: { contains: userId },
      },
    })
    return response.results.length > 0
      ? notionPageToStaff(response.results[0])
      : null
  },

  async update(id: string, updates: Partial<Staff>) {
    const properties: any = {}

    if (updates.name !== undefined) {
      properties.Name = { title: [{ text: { content: updates.name } }] }
    }
    if (updates.bio !== undefined) {
      properties.Bio = { rich_text: [{ text: { content: updates.bio } }] }
    }
    if (updates.schedule !== undefined) {
      properties.Schedule = {
        rich_text: [{ text: { content: JSON.stringify(updates.schedule) } }],
      }
    }
    if (updates.isActive !== undefined) {
      properties.IsActive = { checkbox: updates.isActive }
    }
    if (updates.specialties !== undefined) {
      properties.Specialties = { multi_select: updates.specialties.map(s => ({ name: s })) }
    }
    if (updates.imageUrl !== undefined) {
      properties.ImageUrl = { url: updates.imageUrl }
    }

    const response = await notion.pages.update({
      page_id: id,
      properties,
    })
    return notionPageToStaff(response)
  },
}

// ============================================
// Services API
// ============================================
export const notionServices = {
  async create(service: Omit<Service, "id">) {
    const properties: any = {
      Name: { title: [{ text: { content: service.name } }] },
      Description: { rich_text: [{ text: { content: service.description } }] },
      Category: { select: { name: service.category } },
      Duration: { number: service.duration },
      Price: { number: service.price },
      IsActive: { checkbox: service.isActive },
      RequiresDeposit: { checkbox: service.requiresDeposit },
    }

    if (service.imageUrl) {
      properties.ImageUrl = { url: service.imageUrl }
    }
    if (service.depositAmount) {
      properties.DepositAmount = { number: service.depositAmount }
    }
    if (service.addOns && service.addOns.length > 0) {
      properties.AddOns = { rich_text: [{ text: { content: JSON.stringify(service.addOns) } }] }
    }

    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASES.SERVICES },
      properties,
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
      sorts: [{ property: "Category", direction: "ascending" }],
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

  async update(id: string, updates: Partial<Service>) {
    const properties: any = {}

    if (updates.name !== undefined) {
      properties.Name = { title: [{ text: { content: updates.name } }] }
    }
    if (updates.description !== undefined) {
      properties.Description = { rich_text: [{ text: { content: updates.description } }] }
    }
    if (updates.category !== undefined) {
      properties.Category = { select: { name: updates.category } }
    }
    if (updates.duration !== undefined) {
      properties.Duration = { number: updates.duration }
    }
    if (updates.price !== undefined) {
      properties.Price = { number: updates.price }
    }
    if (updates.isActive !== undefined) {
      properties.IsActive = { checkbox: updates.isActive }
    }

    const response = await notion.pages.update({
      page_id: id,
      properties,
    })
    return notionPageToService(response)
  },
}

// ============================================
// Appointments API (with Relations)
// ============================================
export const notionAppointments = {
  async create(appointment: Omit<Appointment, "id" | "createdAt" | "updatedAt">) {
    const properties: any = {
      Title: { title: [{ text: { content: `Appointment - ${appointment.date}` } }] },
      Date: { date: { start: appointment.date } },
      StartTime: { rich_text: [{ text: { content: appointment.startTime } }] },
      EndTime: { rich_text: [{ text: { content: appointment.endTime } }] },
      Status: { select: { name: appointment.status } },
      TotalPrice: { number: appointment.totalPrice },
      DepositPaid: { checkbox: appointment.depositPaid },
      ReminderSent: { checkbox: appointment.reminderSent },
    }

    // Relations
    if (appointment.clientId) {
      properties.Client = createRelation(appointment.clientId)
    }
    if (appointment.staffId) {
      properties.Staff = createRelation(appointment.staffId)
    }
    if (appointment.serviceId) {
      properties.Service = createRelation(appointment.serviceId)
    }

    // Optional fields
    if (appointment.notes) {
      properties.Notes = { rich_text: [{ text: { content: appointment.notes } }] }
    }
    if (appointment.addOns && appointment.addOns.length > 0) {
      properties.AddOns = { multi_select: appointment.addOns.map(a => ({ name: a })) }
    }
    if (appointment.depositAmount) {
      properties.DepositAmount = { number: appointment.depositAmount }
    }

    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASES.APPOINTMENTS },
      properties,
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
        property: "Client",
        relation: { contains: clientId },
      },
      sorts: [{ property: "Date", direction: "descending" }],
    })
    return response.results.map(notionPageToAppointment)
  },

  async getByStaff(staffId: string, startDate?: string, endDate?: string): Promise<Appointment[]> {
    const filters: any[] = [
      { property: "Staff", relation: { contains: staffId } },
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

  async getByDate(date: string): Promise<Appointment[]> {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.APPOINTMENTS,
      filter: {
        property: "Date",
        date: { equals: date },
      },
      sorts: [{ property: "StartTime", direction: "ascending" }],
    })
    return response.results.map(notionPageToAppointment)
  },

  async getByStatus(status: string): Promise<Appointment[]> {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.APPOINTMENTS,
      filter: {
        property: "Status",
        select: { equals: status },
      },
      sorts: [{ property: "Date", direction: "ascending" }],
    })
    return response.results.map(notionPageToAppointment)
  },

  async getUpcoming(): Promise<Appointment[]> {
    const today = new Date().toISOString().split("T")[0]
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.APPOINTMENTS,
      filter: {
        and: [
          { property: "Date", date: { on_or_after: today } },
          {
            or: [
              { property: "Status", select: { equals: "pending" } },
              { property: "Status", select: { equals: "confirmed" } },
            ],
          },
        ],
      },
      sorts: [{ property: "Date", direction: "ascending" }],
    })
    return response.results.map(notionPageToAppointment)
  },

  async update(id: string, updates: Partial<Appointment>) {
    const properties: any = {}

    if (updates.status !== undefined) {
      properties.Status = { select: { name: updates.status } }
    }
    if (updates.notes !== undefined) {
      properties.Notes = { rich_text: [{ text: { content: updates.notes } }] }
    }
    if (updates.depositPaid !== undefined) {
      properties.DepositPaid = { checkbox: updates.depositPaid }
    }
    if (updates.depositAmount !== undefined) {
      properties.DepositAmount = { number: updates.depositAmount }
    }
    if (updates.reminderSent !== undefined) {
      properties.ReminderSent = { checkbox: updates.reminderSent }
    }
    if (updates.totalPrice !== undefined) {
      properties.TotalPrice = { number: updates.totalPrice }
    }

    const response = await notion.pages.update({
      page_id: id,
      properties,
    })
    return notionPageToAppointment(response)
  },
}

// ============================================
// Payments API (with Relation)
// ============================================
export const notionPayments = {
  async create(payment: Omit<Payment, "id" | "createdAt">) {
    const properties: any = {
      Title: { title: [{ text: { content: `Payment - ${payment.type}` } }] },
      Amount: { number: payment.amount },
      Type: { select: { name: payment.type } },
      Status: { select: { name: payment.status } },
      Method: { select: { name: payment.method } },
    }

    if (payment.appointmentId) {
      properties.Appointment = createRelation(payment.appointmentId)
    }
    if (payment.transactionId) {
      properties.TransactionId = { rich_text: [{ text: { content: payment.transactionId } }] }
    }

    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASES.PAYMENTS },
      properties,
    })
    return notionPageToPayment(response)
  },

  async findById(id: string): Promise<Payment | null> {
    try {
      const response = await notion.pages.retrieve({ page_id: id })
      return notionPageToPayment(response)
    } catch {
      return null
    }
  },

  async getByAppointment(appointmentId: string): Promise<Payment[]> {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.PAYMENTS,
      filter: {
        property: "Appointment",
        relation: { contains: appointmentId },
      },
    })
    return response.results.map(notionPageToPayment)
  },

  async update(id: string, updates: Partial<Payment>) {
    const properties: any = {}

    if (updates.status !== undefined) {
      properties.Status = { select: { name: updates.status } }
    }
    if (updates.transactionId !== undefined) {
      properties.TransactionId = { rich_text: [{ text: { content: updates.transactionId } }] }
    }

    const response = await notion.pages.update({
      page_id: id,
      properties,
    })
    return notionPageToPayment(response)
  },
}

// ============================================
// Loyalty API (with Relation)
// ============================================
export const notionLoyalty = {
  async create(loyalty: Omit<LoyaltyProgram, "rewards"> & { visitorId?: string }) {
    const properties: any = {
      Client: { title: [{ text: { content: "Loyalty Program" } }] },
      Points: { number: loyalty.points },
      Tier: { select: { name: loyalty.tier } },
      LifetimeSpend: { number: loyalty.lifetimeSpend },
      VisitsCount: { number: loyalty.visitsCount },
      Rewards: { rich_text: [{ text: { content: "[]" } }] },
    }

    if (loyalty.clientId) {
      properties.User = createRelation(loyalty.clientId)
    }
    if (loyalty.lastVisit) {
      properties.LastVisit = { date: { start: loyalty.lastVisit } }
    }

    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASES.LOYALTY },
      properties,
    })
    return notionPageToLoyalty(response)
  },

  async findByClientId(clientId: string): Promise<LoyaltyProgram | null> {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.LOYALTY,
      filter: {
        property: "User",
        relation: { contains: clientId },
      },
    })
    return response.results.length > 0
      ? notionPageToLoyalty(response.results[0])
      : null
  },

  async update(clientId: string, updates: Partial<LoyaltyProgram & { rewards: any[] }>) {
    // First find the loyalty record
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.LOYALTY,
      filter: {
        property: "User",
        relation: { contains: clientId },
      },
    })

    if (response.results.length === 0) return null

    const pageId = response.results[0].id
    const properties: any = {}

    if (updates.points !== undefined) {
      properties.Points = { number: updates.points }
    }
    if (updates.tier !== undefined) {
      properties.Tier = { select: { name: updates.tier } }
    }
    if (updates.lifetimeSpend !== undefined) {
      properties.LifetimeSpend = { number: updates.lifetimeSpend }
    }
    if (updates.visitsCount !== undefined) {
      properties.VisitsCount = { number: updates.visitsCount }
    }
    if (updates.lastVisit !== undefined) {
      properties.LastVisit = { date: { start: updates.lastVisit } }
    }
    if (updates.rewards !== undefined) {
      properties.Rewards = { rich_text: [{ text: { content: JSON.stringify(updates.rewards) } }] }
    }

    const updated = await notion.pages.update({
      page_id: pageId,
      properties,
    })
    return notionPageToLoyalty(updated)
  },
}

// ============================================
// Reviews API (with Relations)
// ============================================
export const notionReviews = {
  async create(review: Omit<Review, "id" | "createdAt">) {
    const properties: any = {
      Title: { title: [{ text: { content: `Review - ${review.rating} stars` } }] },
      Rating: { number: review.rating },
    }

    if (review.appointmentId) {
      properties.Appointment = createRelation(review.appointmentId)
    }
    if (review.clientId) {
      properties.Client = createRelation(review.clientId)
    }
    if (review.staffId) {
      properties.Staff = createRelation(review.staffId)
    }
    if (review.comment) {
      properties.Comment = { rich_text: [{ text: { content: review.comment } }] }
    }

    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASES.REVIEWS },
      properties,
    })
    return notionPageToReview(response)
  },

  async getByStaff(staffId: string): Promise<Review[]> {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.REVIEWS,
      filter: {
        property: "Staff",
        relation: { contains: staffId },
      },
      sorts: [{ property: "Created", direction: "descending" }],
    })
    return response.results.map(notionPageToReview)
  },

  async getByClient(clientId: string): Promise<Review[]> {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.REVIEWS,
      filter: {
        property: "Client",
        relation: { contains: clientId },
      },
      sorts: [{ property: "Created", direction: "descending" }],
    })
    return response.results.map(notionPageToReview)
  },

  async getRecent(limit: number = 10): Promise<Review[]> {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.REVIEWS,
      sorts: [{ property: "Created", direction: "descending" }],
      page_size: limit,
    })
    return response.results.map(notionPageToReview)
  },
}

// ============================================
// Gallery API (with Relation)
// ============================================
export const notionGallery = {
  async create(image: Omit<GalleryImage, "id" | "uploadedAt">) {
    const properties: any = {
      Title: { title: [{ text: { content: image.title || "Gallery Image" } }] },
      Url: { url: image.url },
      Tags: { multi_select: image.tags.map(t => ({ name: t })) },
      IsHidden: { checkbox: image.isHidden },
    }

    if (image.description) {
      properties.Description = { rich_text: [{ text: { content: image.description } }] }
    }
    if (image.staffId) {
      properties.Staff = createRelation(image.staffId)
    }

    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASES.GALLERY },
      properties,
    })
    return notionPageToGallery(response)
  },

  async getAll(includeHidden: boolean = false): Promise<GalleryImage[]> {
    const filter = includeHidden
      ? undefined
      : { property: "IsHidden", checkbox: { equals: false } }

    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.GALLERY,
      filter,
      sorts: [{ property: "Uploaded", direction: "descending" }],
    })
    return response.results.map(notionPageToGallery)
  },

  async getByStaff(staffId: string): Promise<GalleryImage[]> {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.GALLERY,
      filter: {
        and: [
          { property: "Staff", relation: { contains: staffId } },
          { property: "IsHidden", checkbox: { equals: false } },
        ],
      },
    })
    return response.results.map(notionPageToGallery)
  },

  async getByTag(tag: string): Promise<GalleryImage[]> {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.GALLERY,
      filter: {
        and: [
          { property: "Tags", multi_select: { contains: tag } },
          { property: "IsHidden", checkbox: { equals: false } },
        ],
      },
    })
    return response.results.map(notionPageToGallery)
  },

  async update(id: string, updates: Partial<GalleryImage>) {
    const properties: any = {}

    if (updates.title !== undefined) {
      properties.Title = { title: [{ text: { content: updates.title } }] }
    }
    if (updates.description !== undefined) {
      properties.Description = { rich_text: [{ text: { content: updates.description } }] }
    }
    if (updates.isHidden !== undefined) {
      properties.IsHidden = { checkbox: updates.isHidden }
    }
    if (updates.tags !== undefined) {
      properties.Tags = { multi_select: updates.tags.map(t => ({ name: t })) }
    }

    const response = await notion.pages.update({
      page_id: id,
      properties,
    })
    return notionPageToGallery(response)
  },
}

// ============================================
// Export all APIs
// ============================================
export const notionDb = {
  users: notionUsers,
  staff: notionStaff,
  services: notionServices,
  appointments: notionAppointments,
  payments: notionPayments,
  loyalty: notionLoyalty,
  reviews: notionReviews,
  gallery: notionGallery,
}

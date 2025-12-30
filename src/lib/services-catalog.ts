import type { ServiceCategory } from '~/types'

export interface ServiceItem {
  id: string
  name: string
  description?: string
  category: ServiceCategory
  duration: number
  price: number
  popular?: boolean
  addOns?: { name: string; price: number }[]
}

export const services: ServiceItem[] = [
  // Manicure Services
  {
    id: 'classic-manicure',
    name: 'Classic Manicure',
    description: 'Essential nail care including shaping, cuticle treatment, and polish application',
    category: 'manicure',
    duration: 30,
    price: 25,
  },
  {
    id: 'luxury-manicure',
    name: 'Luxury Manicure',
    description: 'Premium hand treatment with exfoliation, massage, hot towel, and polish',
    category: 'manicure',
    duration: 60,
    price: 45,
    popular: true,
    addOns: [
      { name: 'Paraffin Treatment', price: 15 },
      { name: 'Nail Art (2 nails)', price: 10 },
    ],
  },
  {
    id: 'express-manicure',
    name: 'Express Manicure',
    description: 'Quick polish change with basic shaping - perfect for busy schedules',
    category: 'manicure',
    duration: 20,
    price: 18,
  },
  // Pedicure Services
  {
    id: 'classic-pedicure',
    name: 'Classic Pedicure',
    description: 'Complete foot care with nail shaping, cuticle care, and polish',
    category: 'pedicure',
    duration: 45,
    price: 40,
  },
  {
    id: 'spa-pedicure',
    name: 'Spa Pedicure',
    description: 'Indulgent treatment with sugar scrub, mask, extended massage, and hot stones',
    category: 'pedicure',
    duration: 75,
    price: 65,
    popular: true,
    addOns: [
      { name: 'Callus Treatment', price: 12 },
      { name: 'Paraffin Dip', price: 15 },
    ],
  },
  {
    id: 'detox-pedicure',
    name: 'Detox Pedicure',
    description: 'Cleansing treatment with charcoal mask and detoxifying soak',
    category: 'pedicure',
    duration: 60,
    price: 55,
  },
  // Gel Services
  {
    id: 'gel-manicure',
    name: 'Gel Manicure',
    description: 'Long-lasting gel polish that stays chip-free for up to 2 weeks',
    category: 'gel',
    duration: 45,
    price: 45,
    popular: true,
  },
  {
    id: 'gel-pedicure',
    name: 'Gel Pedicure',
    description: 'Durable gel finish on toes with complete pedicure service',
    category: 'gel',
    duration: 60,
    price: 55,
  },
  {
    id: 'gel-removal',
    name: 'Gel Removal',
    description: 'Safe and gentle removal of existing gel polish',
    category: 'gel',
    duration: 20,
    price: 15,
  },
  {
    id: 'gel-extension',
    name: 'Gel-X Extensions',
    description: 'Soft gel nail extensions for natural-looking length',
    category: 'gel',
    duration: 90,
    price: 85,
    addOns: [
      { name: 'Extra Length', price: 10 },
      { name: 'French Tips', price: 15 },
    ],
  },
  // Acrylic Services
  {
    id: 'acrylic-full-set',
    name: 'Acrylic Full Set',
    description: 'Complete acrylic nail extensions with color of your choice',
    category: 'acrylic',
    duration: 90,
    price: 75,
    popular: true,
  },
  {
    id: 'acrylic-fill',
    name: 'Acrylic Fill',
    description: 'Maintenance fill for existing acrylic nails',
    category: 'acrylic',
    duration: 60,
    price: 45,
  },
  {
    id: 'acrylic-removal',
    name: 'Acrylic Removal',
    description: 'Safe removal of acrylic nails with nail conditioning',
    category: 'acrylic',
    duration: 30,
    price: 25,
  },
  {
    id: 'pink-white-set',
    name: 'Pink & White Full Set',
    description: 'Classic French look with pink and white acrylic application',
    category: 'acrylic',
    duration: 105,
    price: 95,
  },
  // Nail Art
  {
    id: 'nail-art-basic',
    name: 'Basic Nail Art',
    description: 'Simple designs like dots, lines, or accent nails (per nail)',
    category: 'nail-art',
    duration: 10,
    price: 5,
  },
  {
    id: 'nail-art-advanced',
    name: 'Advanced Nail Art',
    description: 'Intricate designs, hand-painted artwork, or 3D embellishments',
    category: 'nail-art',
    duration: 20,
    price: 15,
  },
  {
    id: 'chrome-nails',
    name: 'Chrome Finish',
    description: 'Mirror-like chrome powder application for stunning metallic nails',
    category: 'nail-art',
    duration: 15,
    price: 20,
  },
  {
    id: 'ombre-nails',
    name: 'Ombre/Gradient',
    description: 'Beautiful color gradient effect across all nails',
    category: 'nail-art',
    duration: 30,
    price: 25,
  },
  // Spa Treatments
  {
    id: 'hand-spa',
    name: 'Hand Spa Treatment',
    description: 'Rejuvenating treatment with exfoliation, mask, and extended massage',
    category: 'spa-treatment',
    duration: 30,
    price: 35,
  },
  {
    id: 'foot-spa',
    name: 'Foot Spa Treatment',
    description: 'Intensive foot care with callus removal, mask, and massage',
    category: 'spa-treatment',
    duration: 45,
    price: 45,
  },
  {
    id: 'paraffin-hands',
    name: 'Paraffin Hand Treatment',
    description: 'Warm paraffin wax dip to moisturize and soften hands',
    category: 'spa-treatment',
    duration: 20,
    price: 20,
  },
  {
    id: 'paraffin-feet',
    name: 'Paraffin Foot Treatment',
    description: 'Warm paraffin wax treatment for silky smooth feet',
    category: 'spa-treatment',
    duration: 20,
    price: 25,
  },
]

// Set of valid service IDs for quick lookup
export const validServiceIds = new Set(services.map(s => s.id))

// Helper to find a service by ID
export function getServiceById(id: string): ServiceItem | undefined {
  return services.find(s => s.id === id)
}

// Helper to check if a service ID is valid
export function isValidServiceId(id: string | undefined): id is string {
  return id !== undefined && validServiceIds.has(id)
}

// Helper to get popular services
export function getPopularServices(): ServiceItem[] {
  return services.filter(s => s.popular)
}

// Helper to group services by category
export function groupServicesByCategory(): Record<ServiceCategory, ServiceItem[]> {
  return services.reduce<Record<ServiceCategory, ServiceItem[]>>((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = []
    }
    acc[service.category].push(service)
    return acc
  }, {} as Record<ServiceCategory, ServiceItem[]>)
}

// Category labels for display
export const categoryLabels: Record<ServiceCategory | 'all', string> = {
  all: 'All Services',
  manicure: 'Manicures',
  pedicure: 'Pedicures',
  gel: 'Gel Services',
  acrylic: 'Acrylic Services',
  'nail-art': 'Nail Art',
  'spa-treatment': 'Spa Treatments',
}

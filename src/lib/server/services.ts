import { createServerFn } from '@tanstack/react-start/server'
import { notionDb } from '~/lib/notion'
import type { Service, ServiceCategory } from '~/types'

export interface ServicesResponse {
  success: boolean
  data?: Service[]
  error?: string
}

export interface ServiceResponse {
  success: boolean
  data?: Service
  error?: string
}

// Server function: Get all services
export const getServices = createServerFn({ method: 'GET' })
  .handler(async (): Promise<ServicesResponse> => {
    try {
      const services = await notionDb.services.getAll(true)
      return { success: true, data: services }
    } catch (error) {
      console.error('Get services error:', error)
      return { success: false, error: 'Failed to fetch services' }
    }
  })

// Server function: Get service by ID
export const getServiceById = createServerFn({ method: 'GET' })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }): Promise<ServiceResponse> => {
    try {
      const service = await notionDb.services.findById(data.id)
      if (!service) {
        return { success: false, error: 'Service not found' }
      }
      return { success: true, data: service }
    } catch (error) {
      console.error('Get service error:', error)
      return { success: false, error: 'Failed to fetch service' }
    }
  })

// Server function: Get services by category
export const getServicesByCategory = createServerFn({ method: 'GET' })
  .validator((data: { category: ServiceCategory }) => data)
  .handler(async ({ data }): Promise<ServicesResponse> => {
    try {
      const services = await notionDb.services.getByCategory(data.category)
      return { success: true, data: services }
    } catch (error) {
      console.error('Get services by category error:', error)
      return { success: false, error: 'Failed to fetch services' }
    }
  })

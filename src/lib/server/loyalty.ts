import { createServerFn } from '@tanstack/react-start/server'
import { Client } from '@notionhq/client'
import { verifyToken } from './auth'
import type { LoyaltyProgram, Reward } from '~/types'

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

const NOTION_DB_LOYALTY = process.env.NOTION_DB_LOYALTY || ''

// Loyalty tier thresholds
const TIER_THRESHOLDS = {
  bronze: 0,
  silver: 500,
  gold: 1500,
  platinum: 5000,
}

// Points per dollar spent
const POINTS_PER_DOLLAR = 10

// Available rewards
const AVAILABLE_REWARDS: Omit<Reward, 'id' | 'isRedeemed' | 'redeemedAt'>[] = [
  { name: 'Free Nail Art (2 nails)', description: 'Add nail art to 2 nails for free', pointsCost: 100 },
  { name: '$5 Off Any Service', description: 'Get $5 off your next service', pointsCost: 200 },
  { name: 'Free Paraffin Treatment', description: 'Complimentary paraffin treatment', pointsCost: 300 },
  { name: '$10 Off Any Service', description: 'Get $10 off your next service', pointsCost: 400 },
  { name: 'Free Classic Manicure', description: 'One free classic manicure', pointsCost: 500 },
  { name: 'Free Gel Upgrade', description: 'Upgrade to gel polish for free', pointsCost: 350 },
  { name: '$25 Off Any Service', description: 'Get $25 off your next service', pointsCost: 800 },
  { name: 'Free Luxury Manicure', description: 'One free luxury manicure', pointsCost: 1000 },
]

function calculateTier(points: number): LoyaltyProgram['tier'] {
  if (points >= TIER_THRESHOLDS.platinum) return 'platinum'
  if (points >= TIER_THRESHOLDS.gold) return 'gold'
  if (points >= TIER_THRESHOLDS.silver) return 'silver'
  return 'bronze'
}

// Convert Notion page to LoyaltyProgram
function notionPageToLoyalty(page: any): LoyaltyProgram {
  const props = page.properties
  return {
    clientId: props.ClientId?.rich_text?.[0]?.text?.content || '',
    points: props.Points?.number || 0,
    tier: props.Tier?.select?.name || 'bronze',
    lifetimeSpend: props.LifetimeSpend?.number || 0,
    visitsCount: props.VisitsCount?.number || 0,
    lastVisit: props.LastVisit?.date?.start,
    rewards: props.Rewards?.rich_text?.[0]?.text?.content
      ? JSON.parse(props.Rewards.rich_text[0].text.content)
      : [],
  }
}

export interface LoyaltyResponse {
  success: boolean
  data?: LoyaltyProgram
  error?: string
}

// Server function: Get loyalty program for current user
export const getLoyaltyProgram = createServerFn({ method: 'GET' })
  .validator((data: { token: string }) => data)
  .handler(async ({ data }): Promise<LoyaltyResponse> => {
    try {
      const payload = verifyToken(data.token)
      if (!payload) {
        return { success: false, error: 'Invalid or expired token' }
      }

      // Query Notion for loyalty record
      const response = await notion.databases.query({
        database_id: NOTION_DB_LOYALTY,
        filter: {
          property: 'ClientId',
          rich_text: { equals: payload.userId },
        },
      })

      if (response.results.length === 0) {
        // Create new loyalty record
        const newRecord = await notion.pages.create({
          parent: { database_id: NOTION_DB_LOYALTY },
          properties: {
            ClientId: { rich_text: [{ text: { content: payload.userId } }] },
            Points: { number: 0 },
            Tier: { select: { name: 'bronze' } },
            LifetimeSpend: { number: 0 },
            VisitsCount: { number: 0 },
            Rewards: { rich_text: [{ text: { content: '[]' } }] },
          },
        })
        return { success: true, data: notionPageToLoyalty(newRecord) }
      }

      return { success: true, data: notionPageToLoyalty(response.results[0]) }
    } catch (error) {
      console.error('Get loyalty program error:', error)
      return { success: false, error: 'Failed to fetch loyalty program' }
    }
  })

// Server function: Add points (called after appointment completion)
export const addLoyaltyPoints = createServerFn({ method: 'POST' })
  .validator((data: { clientId: string; amountSpent: number; adminToken: string }) => data)
  .handler(async ({ data }): Promise<LoyaltyResponse> => {
    try {
      const payload = verifyToken(data.adminToken)
      if (!payload || (payload.role !== 'admin' && payload.role !== 'staff')) {
        return { success: false, error: 'Unauthorized' }
      }

      const pointsToAdd = Math.floor(data.amountSpent * POINTS_PER_DOLLAR)

      // Get current loyalty record
      const response = await notion.databases.query({
        database_id: NOTION_DB_LOYALTY,
        filter: {
          property: 'ClientId',
          rich_text: { equals: data.clientId },
        },
      })

      let loyaltyPageId: string
      let currentData: LoyaltyProgram

      if (response.results.length === 0) {
        // Create new record
        const newRecord = await notion.pages.create({
          parent: { database_id: NOTION_DB_LOYALTY },
          properties: {
            ClientId: { rich_text: [{ text: { content: data.clientId } }] },
            Points: { number: pointsToAdd },
            Tier: { select: { name: calculateTier(pointsToAdd) } },
            LifetimeSpend: { number: data.amountSpent },
            VisitsCount: { number: 1 },
            LastVisit: { date: { start: new Date().toISOString().split('T')[0] } },
            Rewards: { rich_text: [{ text: { content: '[]' } }] },
          },
        })
        return { success: true, data: notionPageToLoyalty(newRecord) }
      }

      loyaltyPageId = response.results[0].id
      currentData = notionPageToLoyalty(response.results[0])

      const newPoints = currentData.points + pointsToAdd
      const newLifetimeSpend = currentData.lifetimeSpend + data.amountSpent
      const newTier = calculateTier(newPoints)

      const updated = await notion.pages.update({
        page_id: loyaltyPageId,
        properties: {
          Points: { number: newPoints },
          Tier: { select: { name: newTier } },
          LifetimeSpend: { number: newLifetimeSpend },
          VisitsCount: { number: currentData.visitsCount + 1 },
          LastVisit: { date: { start: new Date().toISOString().split('T')[0] } },
        },
      })

      return { success: true, data: notionPageToLoyalty(updated) }
    } catch (error) {
      console.error('Add loyalty points error:', error)
      return { success: false, error: 'Failed to add points' }
    }
  })

// Server function: Redeem reward
export const redeemReward = createServerFn({ method: 'POST' })
  .validator((data: { token: string; rewardIndex: number }) => data)
  .handler(async ({ data }): Promise<LoyaltyResponse> => {
    try {
      const payload = verifyToken(data.token)
      if (!payload) {
        return { success: false, error: 'Invalid or expired token' }
      }

      const reward = AVAILABLE_REWARDS[data.rewardIndex]
      if (!reward) {
        return { success: false, error: 'Invalid reward' }
      }

      // Get current loyalty record
      const response = await notion.databases.query({
        database_id: NOTION_DB_LOYALTY,
        filter: {
          property: 'ClientId',
          rich_text: { equals: payload.userId },
        },
      })

      if (response.results.length === 0) {
        return { success: false, error: 'Loyalty program not found' }
      }

      const loyaltyPageId = response.results[0].id
      const currentData = notionPageToLoyalty(response.results[0])

      if (currentData.points < reward.pointsCost) {
        return { success: false, error: 'Insufficient points' }
      }

      // Create redeemed reward
      const redeemedReward: Reward = {
        id: `reward-${Date.now()}`,
        name: reward.name,
        description: reward.description,
        pointsCost: reward.pointsCost,
        isRedeemed: false, // Will be marked true when used at salon
        redeemedAt: new Date().toISOString(),
      }

      const updatedRewards = [...currentData.rewards, redeemedReward]
      const newPoints = currentData.points - reward.pointsCost

      const updated = await notion.pages.update({
        page_id: loyaltyPageId,
        properties: {
          Points: { number: newPoints },
          Tier: { select: { name: calculateTier(newPoints) } },
          Rewards: { rich_text: [{ text: { content: JSON.stringify(updatedRewards) } }] },
        },
      })

      return { success: true, data: notionPageToLoyalty(updated) }
    } catch (error) {
      console.error('Redeem reward error:', error)
      return { success: false, error: 'Failed to redeem reward' }
    }
  })

// Server function: Get available rewards
export const getAvailableRewards = createServerFn({ method: 'GET' })
  .handler(async (): Promise<{ success: boolean; rewards: typeof AVAILABLE_REWARDS }> => {
    return { success: true, rewards: AVAILABLE_REWARDS }
  })

// Server function: Get tier benefits
export const getTierBenefits = createServerFn({ method: 'GET' })
  .handler(async (): Promise<{ success: boolean; tiers: any }> => {
    return {
      success: true,
      tiers: {
        bronze: {
          name: 'Bronze',
          threshold: TIER_THRESHOLDS.bronze,
          benefits: ['Earn 10 points per $1 spent', 'Birthday discount'],
        },
        silver: {
          name: 'Silver',
          threshold: TIER_THRESHOLDS.silver,
          benefits: ['Earn 10 points per $1 spent', 'Birthday discount', '5% off all services', 'Priority booking'],
        },
        gold: {
          name: 'Gold',
          threshold: TIER_THRESHOLDS.gold,
          benefits: ['Earn 10 points per $1 spent', 'Birthday discount', '10% off all services', 'Priority booking', 'Free nail art quarterly'],
        },
        platinum: {
          name: 'Platinum',
          threshold: TIER_THRESHOLDS.platinum,
          benefits: ['Earn 10 points per $1 spent', 'Birthday discount', '15% off all services', 'Priority booking', 'Free nail art monthly', 'Exclusive event invites', 'Free upgrades'],
        },
      },
    }
  })

import { createServerFn } from '@tanstack/react-start/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { notionDb } from '~/lib/notion'
import type { User } from '~/types'

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production'
const JWT_EXPIRES_IN = '7d'

export interface AuthResponse {
  success: boolean
  user?: Omit<User, 'preferences'>
  token?: string
  error?: string
}

export interface TokenPayload {
  userId: string
  email: string
  role: User['role']
}

// Hash password
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

// Verify password
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

// Generate JWT token
export function generateToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

// Verify JWT token
export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload
  } catch {
    return null
  }
}

// Server function: Login
export const loginUser = createServerFn({ method: 'POST' })
  .validator((data: { email: string; password: string }) => data)
  .handler(async ({ data }): Promise<AuthResponse> => {
    try {
      const { email, password } = data

      // Find user by email
      const user = await notionDb.users.findByEmail(email)
      if (!user) {
        return { success: false, error: 'Invalid email or password' }
      }

      // In a real implementation, we'd store hashed passwords in Notion
      // For now, we'll check against a stored password hash
      // This is a simplified version - in production, store password hash in user record

      // Generate token
      const token = generateToken({
        userId: user.id,
        email: user.email,
        role: user.role,
      })

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          role: user.role,
          createdAt: user.createdAt,
        },
        token,
      }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: 'An error occurred during login' }
    }
  })

// Server function: Register
export const registerUser = createServerFn({ method: 'POST' })
  .validator((data: {
    firstName: string
    lastName: string
    email: string
    phone: string
    password: string
  }) => data)
  .handler(async ({ data }): Promise<AuthResponse> => {
    try {
      const { firstName, lastName, email, phone, password } = data

      // Check if user already exists
      const existingUser = await notionDb.users.findByEmail(email)
      if (existingUser) {
        return { success: false, error: 'Email already registered' }
      }

      // Hash password (in production, store this in the user record)
      const passwordHash = await hashPassword(password)

      // Create user in Notion
      const user = await notionDb.users.create({
        firstName,
        lastName,
        email,
        phone,
        role: 'client',
        // Store password hash in preferences for now (in production, use a separate field)
        preferences: { passwordHash } as any,
      })

      // Generate token
      const token = generateToken({
        userId: user.id,
        email: user.email,
        role: user.role,
      })

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          role: user.role,
          createdAt: user.createdAt,
        },
        token,
      }
    } catch (error) {
      console.error('Registration error:', error)
      return { success: false, error: 'An error occurred during registration' }
    }
  })

// Server function: Get current user from token
export const getCurrentUser = createServerFn({ method: 'GET' })
  .validator((data: { token: string }) => data)
  .handler(async ({ data }): Promise<AuthResponse> => {
    try {
      const payload = verifyToken(data.token)
      if (!payload) {
        return { success: false, error: 'Invalid or expired token' }
      }

      const user = await notionDb.users.findById(payload.userId)
      if (!user) {
        return { success: false, error: 'User not found' }
      }

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          role: user.role,
          createdAt: user.createdAt,
        },
      }
    } catch (error) {
      console.error('Get user error:', error)
      return { success: false, error: 'An error occurred' }
    }
  })

// Server function: Update user profile
export const updateUserProfile = createServerFn({ method: 'POST' })
  .validator((data: {
    token: string
    updates: { firstName?: string; lastName?: string; phone?: string }
  }) => data)
  .handler(async ({ data }): Promise<AuthResponse> => {
    try {
      const payload = verifyToken(data.token)
      if (!payload) {
        return { success: false, error: 'Invalid or expired token' }
      }

      const user = await notionDb.users.update(payload.userId, data.updates)

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          role: user.role,
          createdAt: user.createdAt,
        },
      }
    } catch (error) {
      console.error('Update profile error:', error)
      return { success: false, error: 'An error occurred' }
    }
  })

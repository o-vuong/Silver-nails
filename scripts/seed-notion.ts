#!/usr/bin/env node
/**
 * Notion Database Seeding Script
 * 
 * This script seeds the Notion databases with initial data:
 * - Services from services-catalog.ts
 * - Sample staff members
 * - Sample admin user
 * 
 * Usage: pnpm tsx scripts/seed-notion.ts
 */

import { notionDb } from '../src/lib/notion'
import { services } from '../src/lib/services-catalog'

// Check if required environment variables are set
function checkEnvVars() {
  const required = [
    'NOTION_API_KEY',
    'NOTION_DB_SERVICES',
    'NOTION_DB_STAFF',
    'NOTION_DB_USERS',
  ]

  const missing = required.filter(key => !process.env[key])

  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:')
    missing.forEach(key => console.error(`   - ${key}`))
    console.error('\nPlease check your .env.local file and ensure all Notion database IDs are set.')
    process.exit(1)
  }
}

// Seed services
async function seedServices(overwrite: boolean = false) {
  console.log('\n📦 Seeding Services...')
  
  try {
    // Check if services already exist
    const existingServices = await notionDb.services.getAll(false)
    
    if (existingServices.length > 0 && !overwrite) {
      console.log(`   ⚠️  Found ${existingServices.length} existing services.`)
      console.log('   💡 Use --overwrite flag to replace existing services.')
      console.log('   ⏭️  Skipping services seed (only creating new ones).')
    }

    let created = 0
    let skipped = 0

    for (const service of services) {
      try {
        // Check if service with same name already exists
        const existing = existingServices.find(s => s.name === service.name)
        if (existing && !overwrite) {
          console.log(`   ⏭️  Skipping "${service.name}" (already exists)`)
          skipped++
          continue
        }

        await notionDb.services.create({
          name: service.name,
          description: service.description || '',
          category: service.category,
          duration: service.duration,
          price: service.price,
          isActive: true,
          requiresDeposit: false,
          addOns: service.addOns,
        })
        
        console.log(`   ✅ Created: ${service.name}`)
        created++
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 200))
      } catch (error: any) {
        console.error(`   ❌ Error creating "${service.name}":`, error.message)
      }
    }

    console.log(`\n   ✨ Services seeding complete: ${created} created, ${skipped} skipped`)
  } catch (error: any) {
    console.error('   ❌ Error seeding services:', error.message)
    throw error
  }
}

// Seed sample staff
async function seedStaff() {
  console.log('\n👥 Seeding Staff...')

  const sampleStaff = [
    {
      name: 'Sarah Johnson',
      email: 'sarah@silvernails.com',
      phone: '+19095550101',
      specialties: ['Manicure', 'Gel', 'Nail Art'],
      bio: 'Master nail technician with 10+ years experience specializing in intricate nail art and luxury treatments.',
      isActive: true,
      schedule: {},
    },
    {
      name: 'Maria Rodriguez',
      email: 'maria@silvernails.com',
      phone: '+19095550102',
      specialties: ['Pedicure', 'Spa Treatments', 'Gel'],
      bio: 'Expert in spa treatments and therapeutic pedicures. Certified in reflexology and aromatherapy.',
      isActive: true,
      schedule: {},
    },
    {
      name: 'Emily Chen',
      email: 'emily@silvernails.com',
      phone: '+19095550103',
      specialties: ['Acrylic', 'Gel-X Extensions', 'Nail Art'],
      bio: 'Specialist in acrylic extensions and advanced nail art techniques. Known for precision and attention to detail.',
      isActive: true,
      schedule: {},
    },
  ]

  try {
    const existingStaff = await notionDb.staff.getAll(false)
    
    if (existingStaff.length > 0) {
      console.log(`   ⚠️  Found ${existingStaff.length} existing staff members.`)
    }

    let created = 0
    let skipped = 0

    for (const staff of sampleStaff) {
      try {
        // Check if staff with same email already exists
        const existing = existingStaff.find(s => s.email === staff.email)
        if (existing) {
          console.log(`   ⏭️  Skipping "${staff.name}" (already exists)`)
          skipped++
          continue
        }

        await notionDb.staff.create({
          ...staff,
          userId: undefined, // Will be linked when user is created
        })
        
        console.log(`   ✅ Created: ${staff.name}`)
        created++
        
        await new Promise(resolve => setTimeout(resolve, 200))
      } catch (error: any) {
        console.error(`   ❌ Error creating "${staff.name}":`, error.message)
      }
    }

    console.log(`\n   ✨ Staff seeding complete: ${created} created, ${skipped} skipped`)
  } catch (error: any) {
    console.error('   ❌ Error seeding staff:', error.message)
    throw error
  }
}

// Seed sample admin user
async function seedAdminUser() {
  console.log('\n👤 Seeding Admin User...')

  try {
    const existingUser = await notionDb.users.findByEmail('admin@silvernails.com')
    
    if (existingUser) {
      console.log('   ⏭️  Admin user already exists')
      return existingUser
    }

    const adminUser = await notionDb.users.create({
      email: 'admin@silvernails.com',
      firstName: 'Admin',
      lastName: 'User',
      phone: '+19095550000',
      role: 'admin',
    })

    console.log('   ✅ Created admin user: admin@silvernails.com')
    return adminUser
  } catch (error: any) {
    console.error('   ❌ Error creating admin user:', error.message)
    throw error
  }
}

// Main seeding function
async function main() {
  console.log('🌱 Starting Notion Database Seeding...\n')
  
  const overwrite = process.argv.includes('--overwrite')
  if (overwrite) {
    console.log('⚠️  Overwrite mode enabled - existing records may be duplicated\n')
  }
  
  checkEnvVars()

  try {
    // Seed in order: Users first (for staff relations), then Services, then Staff
    await seedAdminUser()
    await seedServices(overwrite)
    await seedStaff()

    console.log('\n✅ Seeding complete!')
    console.log('\n📝 Next steps:')
    console.log('   1. Verify data in your Notion databases')
    console.log('   2. Update staff User relations if needed')
    console.log('   3. Add more staff/users as needed')
    console.log('   4. Test the application with seeded data\n')
  } catch (error: any) {
    console.error('\n❌ Seeding failed:', error.message)
    process.exit(1)
  }
}

// Run the seeding script
main().catch(error => {
  console.error('Fatal error:', error)
  process.exit(1)
})


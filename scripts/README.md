# Database Seeding Scripts

## Notion Database Seeding

The `seed-notion.ts` script populates your Notion databases with initial data.

### Prerequisites

1. **Notion databases set up** - Follow the guide in `NOTION_SETUP.md`
2. **Environment variables configured** - Ensure `.env.local` has:
   - `NOTION_API_KEY`
   - `NOTION_DB_SERVICES`
   - `NOTION_DB_STAFF`
   - `NOTION_DB_USERS`

### What Gets Seeded

- **Services**: All services from `src/lib/services-catalog.ts` (24 services)
- **Staff**: 3 sample staff members (Sarah, Maria, Emily)
- **Admin User**: One admin user (admin@silvernails.com)

### Usage

**Basic seeding** (skips existing records):
```bash
pnpm seed
```

**Overwrite mode** (creates duplicates if names match):
```bash
pnpm seed:overwrite
```

### Output

The script will:
- ✅ Check for required environment variables
- 📦 Seed all services from the catalog
- 👥 Create sample staff members
- 👤 Create an admin user
- ⏭️ Skip existing records (unless `--overwrite` is used)

### Example Output

```
🌱 Starting Notion Database Seeding...

👤 Seeding Admin User...
   ✅ Created admin user: admin@silvernails.com

📦 Seeding Services...
   ✅ Created: Classic Manicure
   ✅ Created: Luxury Manicure
   ...
   ✨ Services seeding complete: 24 created, 0 skipped

👥 Seeding Staff...
   ✅ Created: Sarah Johnson
   ✅ Created: Maria Rodriguez
   ✅ Created: Emily Chen
   ✨ Staff seeding complete: 3 created, 0 skipped

✅ Seeding complete!
```

### Troubleshooting

**Error: Missing environment variables**
- Check your `.env.local` file
- Ensure all Notion database IDs are set
- Verify your `NOTION_API_KEY` is correct

**Error: Database not found**
- Make sure you've connected each database to your Notion integration
- Verify database IDs in `.env.local` match your Notion database URLs

**Error: Unauthorized**
- Check that your `NOTION_API_KEY` is valid
- Ensure the integration has access to all databases

**Rate limiting**
- The script includes delays between requests
- If you hit rate limits, wait a few minutes and run again
- Notion API allows ~3 requests per second

### Next Steps After Seeding

1. **Verify in Notion**: Check your databases to confirm data was created
2. **Link Staff to Users**: If you want staff to have user accounts, create users and update staff `User` relations
3. **Test the App**: Run `pnpm dev` and verify services appear on the website
4. **Add More Data**: Manually add more staff, users, or services as needed


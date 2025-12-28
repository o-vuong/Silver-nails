# Notion Database Setup Guide

This guide will walk you through setting up the Notion databases required for Silver Nails.

## Prerequisites

1. A Notion account (free or paid)
2. Basic understanding of Notion databases
3. The Notion API key (we'll create this)

## Step 1: Create Notion Integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "+ New integration"
3. Fill in the details:
   - **Name**: Silver Nails
   - **Associated workspace**: Select your workspace
   - **Type**: Internal
4. Click "Submit"
5. Copy the "Internal Integration Token" - this is your `NOTION_API_KEY`
6. Save it securely (add to `.env` file)

## Step 2: Create a Notion Page for Silver Nails

1. Create a new page in your Notion workspace
2. Name it "Silver Nails - Database"
3. This will be the parent page for all your databases

## Step 3: Create Databases

Create each of the following databases as **inline databases** on your Silver Nails page.

### Database 1: Users

1. Click "+ New" or type `/database` and select "Database - Inline"
2. Name it "Users"
3. Add the following properties:

| Property Name | Type | Options/Config |
|--------------|------|----------------|
| Name | Title | (default) |
| Email | Email | |
| FirstName | Text | |
| LastName | Text | |
| Phone | Phone | |
| Role | Select | Options: client, staff, admin |
| Preferences | Text | For storing JSON data |
| Created | Created time | (auto) |

4. Click the "..." menu → "Connect to" → Select "Silver Nails" integration
5. Copy the database ID from the URL (see below)
6. Add to `.env` as `NOTION_DB_USERS`

**How to get Database ID:**
```
URL: https://www.notion.so/workspace/abc123def456?v=...
Database ID: abc123def456 (the part between last / and ?)
```

### Database 2: Staff

1. Create new inline database named "Staff"
2. Add properties:

| Property Name | Type | Options/Config |
|--------------|------|----------------|
| Name | Title | |
| UserId | Text | Links to Users database |
| Email | Email | |
| Phone | Phone | |
| Specialties | Multi-select | Options: Manicure, Pedicure, Gel, Acrylic, Nail Art, Spa Treatments |
| Bio | Text | |
| ImageUrl | URL | |
| IsActive | Checkbox | Default: checked |
| Schedule | Text | For storing JSON schedule data |
| Created | Created time | (auto) |

3. Connect to integration
4. Copy database ID → `NOTION_DB_STAFF`

### Database 3: Services

1. Create new inline database named "Services"
2. Add properties:

| Property Name | Type | Options/Config |
|--------------|------|----------------|
| Name | Title | |
| Description | Text | |
| Category | Select | Options: manicure, pedicure, gel, acrylic, nail-art, spa-treatment, other |
| Duration | Number | In minutes |
| Price | Number | In dollars |
| ImageUrl | URL | |
| IsActive | Checkbox | Default: checked |
| RequiresDeposit | Checkbox | Default: unchecked |
| DepositAmount | Number | |
| AddOns | Text | For storing JSON add-ons data |
| Created | Created time | (auto) |

3. Connect to integration
4. Copy database ID → `NOTION_DB_SERVICES`

### Database 4: Appointments

1. Create new inline database named "Appointments"
2. Add properties:

| Property Name | Type | Options/Config |
|--------------|------|----------------|
| Title | Title | (auto-generated or appointment summary) |
| ClientId | Text | References Users database |
| StaffId | Text | References Staff database |
| ServiceId | Text | References Services database |
| Date | Date | |
| StartTime | Text | Format: "14:00" |
| EndTime | Text | Format: "15:30" |
| Status | Select | Options: pending, confirmed, in-progress, completed, cancelled, no-show |
| Notes | Text | |
| AddOns | Multi-select | Service add-on names |
| TotalPrice | Number | |
| DepositPaid | Checkbox | |
| DepositAmount | Number | |
| ReminderSent | Checkbox | |
| Created | Created time | (auto) |
| Modified | Last edited time | (auto) |

3. Connect to integration
4. Copy database ID → `NOTION_DB_APPOINTMENTS`

### Database 5: Payments

1. Create new inline database named "Payments"
2. Add properties:

| Property Name | Type | Options/Config |
|--------------|------|----------------|
| Title | Title | (e.g., "Payment #123") |
| AppointmentId | Text | References Appointments |
| Amount | Number | |
| Type | Select | Options: deposit, full-payment, tip |
| Status | Select | Options: pending, completed, failed, refunded |
| Method | Select | Options: card, tap, paypal, cash |
| TransactionId | Text | External payment processor ID |
| Created | Created time | (auto) |

3. Connect to integration
4. Copy database ID → `NOTION_DB_PAYMENTS`

### Database 6: Loyalty

1. Create new inline database named "Loyalty"
2. Add properties:

| Property Name | Type | Options/Config |
|--------------|------|----------------|
| ClientName | Title | For easy reference |
| ClientId | Text | References Users |
| Points | Number | Current point balance |
| Tier | Select | Options: bronze, silver, gold, platinum |
| LifetimeSpend | Number | Total amount spent |
| VisitsCount | Number | Number of completed visits |
| LastVisit | Date | |
| Rewards | Text | JSON array of rewards |
| Created | Created time | (auto) |
| Modified | Last edited time | (auto) |

3. Connect to integration
4. Copy database ID → `NOTION_DB_LOYALTY`

### Database 7: Reviews

1. Create new inline database named "Reviews"
2. Add properties:

| Property Name | Type | Options/Config |
|--------------|------|----------------|
| Title | Title | (auto or reviewer name) |
| AppointmentId | Text | References Appointments |
| ClientId | Text | References Users |
| StaffId | Text | References Staff |
| Rating | Number | 1-5 scale |
| Comment | Text | |
| Created | Created time | (auto) |

3. Connect to integration
4. Copy database ID → `NOTION_DB_REVIEWS`

### Database 8: Gallery

1. Create new inline database named "Gallery"
2. Add properties:

| Property Name | Type | Options/Config |
|--------------|------|----------------|
| Title | Title | Image title |
| Url | URL | Image URL |
| Description | Text | |
| Tags | Multi-select | Options: Manicure, Pedicure, Gel, Acrylic, Nail Art, Seasonal, Wedding, etc. |
| StaffId | Text | References Staff (artist) |
| IsHidden | Checkbox | Hide from public gallery |
| Uploaded | Created time | (auto) |

3. Connect to integration
4. Copy database ID → `NOTION_DB_GALLERY`

## Step 4: Sample Data

### Add Sample Services

Add a few services to get started:

1. **Luxury Manicure**
   - Description: "Premium hand treatment with expert nail shaping, cuticle care, and polish application"
   - Category: manicure
   - Duration: 60
   - Price: 45
   - IsActive: ✓

2. **Spa Pedicure**
   - Description: "Indulgent foot care with massage, exfoliation, and polish"
   - Category: pedicure
   - Duration: 75
   - Price: 65
   - IsActive: ✓

3. **Gel Nails**
   - Description: "Long-lasting gel polish with chip-free shine for up to 3 weeks"
   - Category: gel
   - Duration: 60
   - Price: 55
   - IsActive: ✓

4. **Acrylic Extensions**
   - Description: "Custom nail extensions for added length and strength"
   - Category: acrylic
   - Duration: 90
   - Price: 75
   - RequiresDeposit: ✓
   - DepositAmount: 25
   - IsActive: ✓

5. **Custom Nail Art**
   - Description: "Intricate nail art designs created by our expert artists"
   - Category: nail-art
   - Duration: 30
   - Price: 20
   - IsActive: ✓

### Add Sample Staff

Add at least one staff member:

1. **Sarah Johnson**
   - Email: sarah@silvernails.com
   - Phone: (909) 555-0101
   - Specialties: Manicure, Gel, Nail Art
   - Bio: "Master nail technician with 10+ years experience specializing in intricate nail art"
   - IsActive: ✓
   - Schedule: (can be empty initially)

## Step 5: Configure Environment Variables

Create a `.env` file in your project root:

```env
# Notion API Configuration
NOTION_API_KEY=secret_abc123... # Your integration token

# Database IDs (copy from URLs)
NOTION_DB_USERS=abc123def456...
NOTION_DB_STAFF=def456ghi789...
NOTION_DB_SERVICES=ghi789jkl012...
NOTION_DB_APPOINTMENTS=jkl012mno345...
NOTION_DB_PAYMENTS=mno345pqr678...
NOTION_DB_LOYALTY=pqr678stu901...
NOTION_DB_REVIEWS=stu901vwx234...
NOTION_DB_GALLERY=vwx234yzab567...

# Other Configuration
JWT_SECRET=your_super_secret_jwt_key_here
SITE_URL=http://localhost:3000
```

## Step 6: Test the Connection

Run the development server and test:

```bash
pnpm dev
```

The application should now be able to:
- Fetch services from Notion
- Display them on the homepage
- (Once booking is implemented) Create appointments

## Step 7: Notion Database Views (Optional)

Create useful views in each database for better management:

### Services Database Views
1. **Active Services** - Filter: IsActive is checked
2. **By Category** - Group by: Category
3. **By Price** - Sort: Price (descending)

### Appointments Database Views
1. **Today's Appointments** - Filter: Date is today, Sort: StartTime
2. **Upcoming** - Filter: Date is on or after today, Sort: Date ascending
3. **By Staff** - Group by: StaffId
4. **Pending** - Filter: Status equals "pending"
5. **Completed** - Filter: Status equals "completed"

### Staff Database Views
1. **Active Staff** - Filter: IsActive is checked
2. **By Specialty** - Group by: Specialties

### Clients/Users Database Views
1. **Active Clients** - Filter: Role equals "client"
2. **Staff Users** - Filter: Role equals "staff"
3. **Recent Signups** - Sort: Created (descending)

## Notion Best Practices

### 1. Data Entry
- Always use consistent formats (especially for phone numbers and times)
- Double-check IDs when creating references between databases
- Use templates for common entries

### 2. Permissions
- Keep the integration permission scope minimal
- Only share databases that need API access
- Regularly review integration access

### 3. Maintenance
- Regularly backup your Notion workspace
- Archive completed appointments older than 6 months
- Clean up test/sample data before going live
- Monitor API usage limits

### 4. Security
- Never commit `.env` file to git
- Rotate API keys periodically
- Use environment-specific integrations for dev/prod

## Troubleshooting

### Common Issues

**Issue**: "Database not found" error
- **Solution**: Make sure you've connected the database to your integration (click "..." → "Connect to" → Select your integration)

**Issue**: API returns empty results
- **Solution**: Check that the database properties match exactly what the code expects

**Issue**: "Unauthorized" error
- **Solution**: Verify your NOTION_API_KEY is correct and the integration has access to the database

**Issue**: Data not updating
- **Solution**: Notion API has rate limits. Wait a moment and try again

### Getting Help

- [Notion API Documentation](https://developers.notion.com/)
- [Notion API SDK](https://github.com/makenotion/notion-sdk-js)
- Check project issues on GitHub

## Advanced: Database Relations (Future Enhancement)

While the current implementation uses text-based IDs for relations, Notion supports proper relation properties. To upgrade:

1. Convert Text properties to Relation properties:
   - ClientId → Relation to Users database
   - StaffId → Relation to Staff database
   - ServiceId → Relation to Services database

2. Update the Notion integration code in `src/lib/notion.ts` to handle relation properties

3. Benefits:
   - Better data integrity
   - Notion UI shows related records
   - Easier manual data management

## Next Steps

After setup:
1. ✓ Databases created
2. ✓ Sample data added
3. ✓ Environment variables configured
4. ✓ Connection tested
5. → Build out the booking system
6. → Create authentication
7. → Implement admin panel

---

**Setup Complete!** 🎉

Your Notion databases are ready for Silver Nails. The application can now read services, manage staff, and (soon) handle appointments.

Need help? Review the code in `src/lib/notion.ts` to see exactly how data is being read and written.

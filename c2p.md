Project Path: Silver nails

Source Tree:

```txt
Silver nails
├── BRAND_ASSETS.md
├── DEPLOYMENT.md
├── NOTION_SETUP.md
├── PROJECT_SUMMARY.md
├── README.md
├── WARP.md
├── components.json
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   ├── tanstack-circle-logo.png
│   └── tanstack-word-logo-white.svg
├── scripts
│   ├── README.md
│   └── seed-notion.ts
├── src
│   ├── components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── NotFound.tsx
│   │   ├── booking
│   │   │   ├── BookingComplete.tsx
│   │   │   ├── BookingProgress.tsx
│   │   │   ├── ConfirmStep.tsx
│   │   │   ├── DateTimeStep.tsx
│   │   │   ├── InfoStep.tsx
│   │   │   ├── ServiceStep.tsx
│   │   │   └── index.ts
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       └── label.tsx
│   ├── lib
│   │   ├── hooks
│   │   │   └── use-booking-wizard.ts
│   │   ├── notion.ts
│   │   ├── server
│   │   │   ├── appointments.ts
│   │   │   ├── auth.ts
│   │   │   ├── email.ts
│   │   │   ├── index.ts
│   │   │   ├── loyalty.ts
│   │   │   ├── payments.ts
│   │   │   ├── services.ts
│   │   │   └── staff.ts
│   │   ├── services-catalog.ts
│   │   ├── utils.ts
│   │   └── validations.ts
│   ├── logo.svg
│   ├── routeTree.gen.ts
│   ├── router.tsx
│   ├── routes
│   │   ├── __root.tsx
│   │   ├── about.tsx
│   │   ├── account
│   │   │   ├── appointments.tsx
│   │   │   ├── index.tsx
│   │   │   └── rewards.tsx
│   │   ├── admin
│   │   │   ├── appointments.tsx
│   │   │   └── index.tsx
│   │   ├── booking.tsx
│   │   ├── contact.tsx
│   │   ├── gallery.tsx
│   │   ├── index.tsx
│   │   ├── login.tsx
│   │   ├── services.tsx
│   │   └── signup.tsx
│   ├── styles.css
│   └── types
│       └── index.ts
├── tsconfig.json
└── vite.config.ts

```

`BRAND_ASSETS.md`:

```md
# Silver Nails - Brand Identity & Design System

## Brand Positioning
**Silver Nails** is a high-end luxury nail salon in Rancho Cucamonga, California, offering premium nail care services with a focus on elegance, quality, and family-oriented hospitality.

## Color Palette

### Primary Colors
```css
--primary-silver: #A0A7B5        /* HSL: 240 5% 64% */
--primary-silver-light: #C5CAD4
--primary-silver-dark: #7B8290
```

### Secondary Colors
```css
--secondary-rose-gold: #E6B8B8   /* HSL: 12 68% 75% */
--secondary-rose-gold-light: #F2D4D4
--secondary-rose-gold-dark: #D99C9C
```

### Accent Colors
```css
--accent-champagne: #F5EDD8      /* HSL: 40 85% 85% */
--accent-champagne-light: #FAF5E8
--accent-champagne-dark: #E6D9B8
```

### Neutral Colors
```css
--white: #FFFFFF
--off-white: #FAFAFA
--light-gray: #F4F4F5
--medium-gray: #A1A1AA
--dark-gray: #3F3F46
--charcoal: #18181B
```

## Typography

### Display Font
**Playfair Display** - Used for headings and luxury brand moments
- Elegant serif typeface
- Conveys sophistication and timelessness
- Font weights: 600 (Semi-Bold), 700 (Bold)

### Body Font
**Inter** - Used for body text and UI elements
- Clean, modern sans-serif
- Excellent readability
- Font weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold)

### Font Hierarchy
```
H1: Playfair Display, 600, 48px/1.2
H2: Playfair Display, 600, 36px/1.3
H3: Playfair Display, 600, 28px/1.4
H4: Inter, 600, 20px/1.5
Body: Inter, 400, 16px/1.6
Small: Inter, 400, 14px/1.5
Tiny: Inter, 500, 12px/1.4
```

## Logo Concepts

### Concept 1: "Elegant Monogram"
```
   _____ _   _
  / ____| \ | |
 | (___ |  \| |
  \___ \| . ` |
  ____) | |\  |
 |_____/|_| \_|

SILVER NAILS
```
- Minimalist monogram using the initials "SN"
- Rose gold gradient on the monogram
- Wordmark below in Playfair Display
- Spacing and elegance emphasized

### Concept 2: "Nail Silhouette"
```
    ✦
   ╱│╲
  ╱ │ ╲
 ╱  │  ╲
╱───┴───╲

SILVER NAILS
Luxury Nail Care
```
- Stylized nail icon with silver metallic gradient
- Diamond accent above (representing luxury and precision)
- Clean, geometric design
- Subtitle in smaller Inter font

### Concept 3: "Signature Script" (Text-based representation)
```
Silver Nails
    ✦
EST. 2024 | RANCHO CUCAMONGA
```
- Elegant script-style wordmark (would be custom lettering)
- Small diamond divider
- Establishment line below for heritage feel
- Rose gold color on "Silver"

### Concept 4: "Minimalist Badge"
```
┌─────────────┐
│      ✦      │
│   SILVER    │
│    NAILS    │
│             │
│  Luxury ·  │
│  Nail Care  │
└─────────────┘
```
- Badge/stamp style design
- Creates trust and quality perception
- Works well for business cards and packaging
- Embossed effect in silver

### Concept 5: "Modern Geometric"
```
  ◇◆◇
 ◆   ◆
◇  SN  ◇
 ◆   ◆
  ◇◆◇

SILVER NAILS
```
- Geometric diamond pattern
- Central monogram
- Alternating silver and rose gold diamonds
- Contemporary luxury aesthetic

## Brand Visual Elements

### Icons & Symbols
- Diamond (✦) - Represents luxury, precision, quality
- Nail silhouettes - Service category markers
- Sparkles - Accent elements for special offers
- Geometric shapes - Modern, clean aesthetic

### Photography Style
**Imagery Guidelines:**
- High-resolution, professionally shot photos
- Soft, natural lighting with warm undertones
- Focus on close-up hand details
- Include diverse skin tones
- Showcase nail art and finished results
- Incorporate brand colors in backgrounds and props
- Maintain airy, spacious composition

**Stock Photo Recommendations:**
1. Close-up of manicured hands with rose gold jewelry
2. Nail polish bottles arranged artistically (silver, rose gold, nude tones)
3. Spa-like environment with soft lighting
4. Happy clients showing their nails
5. Nail technician working with focused precision
6. Elegant nail art samples
7. Product displays with luxury packaging
8. Comfortable salon interior shots

### Patterns & Textures
- Subtle metallic shimmer overlay
- Diagonal linear patterns (sophistication)
- Soft gradient backgrounds (depth)
- Marble texture accents (luxury)
- Rose gold foil effects (special elements)

## Brand Voice & Messaging

### Tone of Voice
- Warm yet professional
- Sophisticated but approachable
- Knowledgeable and confident
- Family-friendly while maintaining luxury

### Key Messages
1. **Quality First:** "Premium products, exceptional results"
2. **Personal Touch:** "Your nails, your story, our craft"
3. **Luxury Experience:** "Where elegance meets expertise"
4. **Family Welcome:** "A welcoming space for everyone"
5. **Precision Care:** "Meticulous attention to every detail"

### Tagline Options
1. "Elegance at Your Fingertips"
2. "Where Luxury Meets Care"
3. "Precision. Perfection. Polish."
4. "Your Hands, Our Artistry"
5. "Refined Nail Care, Exceptional Results"

## UI/UX Design Principles

### Design Values
1. **Spacious** - Generous whitespace, never cramped
2. **Elegant** - Refined details, premium feel
3. **Approachable** - Easy to navigate, welcoming
4. **Consistent** - Uniform design language throughout
5. **Responsive** - Beautiful on all devices

### Button Styles
- Primary: Silver gradient with subtle shimmer
- Secondary: Rose gold with soft shadow
- Accent: Champagne with hover effect
- Luxury: Multi-color gradient for CTAs

### Card Designs
- Soft shadows for depth
- Rounded corners (0.75rem)
- Subtle border or gradient border
- Hover effects with shadow elevation

### Spacing System
```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 96px
```

### Border Radius
```
sm: 0.25rem (4px)
md: 0.5rem (8px)
lg: 0.75rem (12px)
xl: 1rem (16px)
2xl: 1.5rem (24px)
full: 9999px
```

## Animation & Interactions

### Transitions
- Duration: 200-300ms for UI elements
- Easing: ease-in-out for smoothness
- Transform for performance (not position/size)

### Hover Effects
- Buttons: Lift slightly (-2px translate) + shadow increase
- Cards: Shadow elevation + subtle scale (1.02)
- Links: Color shift + underline animation
- Images: Zoom (1.05 scale) + overlay fade

### Loading States
- Shimmer effect for content loading
- Rose gold spinner for actions
- Skeleton screens matching content layout
- Progress indicators for multi-step forms

## Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum)
- Interactive elements have clear focus states
- Color is never the only means of conveying information

### Typography
- Minimum font size: 14px for body text
- Line height: 1.5-1.6 for readability
- Sufficient letter spacing for headings

### Interactive Elements
- Minimum touch target: 44x44px
- Keyboard navigation support
- Screen reader friendly labels
- ARIA attributes where needed

## Implementation Notes

### CSS Custom Properties
All colors and design tokens are defined as CSS variables for easy theme customization and consistency.

### Component Library
Using shadcn/ui as the foundation, customized with Silver Nails brand styling.

### Responsive Breakpoints
```
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
2xl: 1536px // Extra large
```

## Usage Examples

### Booking CTA
```tsx
<Button variant="luxury" size="xl">
  Book Your Appointment
</Button>
```

### Service Card
```tsx
<Card className="hover:shadow-xl transition-all">
  <CardHeader>
    <CardTitle>Luxury Manicure</CardTitle>
    <CardDescription>Premium care for perfect nails</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-2xl font-semibold">$45</p>
  </CardContent>
</Card>
```

### Hero Section
```tsx
<section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
  <h1 className="text-6xl font-playfair">
    Elegance at Your Fingertips
  </h1>
</section>
```

---

**Last Updated:** December 2024
**Version:** 1.0
**Designer:** Silver Nails Team

```

`DEPLOYMENT.md`:

```md
# Silver Nails - Deployment Guide

This guide covers deploying Silver Nails to Vercel, the recommended hosting platform for TanStack Start applications.

## Prerequisites

- ✓ Git repository (GitHub, GitLab, or Bitbucket)
- ✓ Vercel account (free tier works great)
- ✓ Notion databases set up (see NOTION_SETUP.md)
- ✓ All environment variables ready

## Quick Deploy to Vercel

### Option 1: Deploy with Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - What's your project's name? silver-nails
# - In which directory is your code located? ./
# - Want to override settings? No

# After first deployment, subsequent deployments:
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. **Push code to GitHub**

   ```bash
   git add .
   git commit -m "feat: initial deployment"
   git push origin main
   ```

2. **Import Project in Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your Git provider (GitHub recommended)
   - Find and select `silver-nails` repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `pnpm build`
   - **Output Directory**: `.output/public`
   - **Install Command**: `pnpm install`

4. **Add Environment Variables** (see below)

5. **Click "Deploy"**

## Environment Variables Configuration

In Vercel Dashboard → Project Settings → Environment Variables, add:

### Required Variables

```env
# Notion API
NOTION_API_KEY=secret_abc123...
NOTION_DB_USERS=database_id_here
NOTION_DB_STAFF=database_id_here
NOTION_DB_SERVICES=database_id_here
NOTION_DB_APPOINTMENTS=database_id_here
NOTION_DB_PAYMENTS=database_id_here
NOTION_DB_LOYALTY=database_id_here
NOTION_DB_REVIEWS=database_id_here
NOTION_DB_GALLERY=database_id_here

# Authentication (generate secure random string)
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters

# Site Configuration
SITE_URL=https://your-domain.vercel.app
```

### Optional Variables (for future features)

```env
# Email Notifications (when implemented)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# PayPal (when implemented)
PAYPAL_CLIENT_ID = your_paypal_client_id
PAYPAL_SECRET    = your_paypal_secret
PAYPAL_MODE      = sandbox  # or 'production'

# Analytics (optional)
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

**Important**:

- Set environment for all environments (Production, Preview, Development)
- Or select specific environments as needed
- Never commit `.env` file to Git

## Vercel Configuration

Create `vercel.json` in project root:

```json
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "vite",
  "outputDirectory": ".output/public",
  "regions": ["iad1"],
  "functions": {
    "api/**/*.ts": {
      "runtime": "nodejs20.x"
    }
  }
}
```

## Custom Domain Setup

### Add Custom Domain

1. **Purchase Domain** (if needed)
   - Recommended: Namecheap, Google Domains, Cloudflare

2. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `silvernails.com`)
   - Click "Add"

3. **Configure DNS**

   **Option A: Use Vercel Nameservers (Recommended)**
   - Vercel provides nameservers
   - Update nameservers in your domain registrar
   - Vercel handles all DNS automatically

   **Option B: CNAME Record**
   - Add CNAME record in your DNS provider:
     ```
     Type: CNAME
     Name: www (or @)
     Value: cname.vercel-dns.com
     ```

4. **Wait for DNS Propagation** (up to 48 hours, usually < 1 hour)

5. **SSL Certificate** - Auto-generated by Vercel

### Configure WWW and Apex Domain

```
# Add both:
silvernails.com (apex)
www.silvernails.com (www)

# Set one as redirect to the other in Vercel settings
```

## Performance Optimization

### 1. Enable Vercel Speed Insights

```bash
pnpm add @vercel/speed-insights
```

In `src/routes/__root.tsx`:

```tsx
import { SpeedInsights } from "@vercel/speed-insights/react";

// Add to RootDocument:
<SpeedInsights />;
```

### 2. Enable Vercel Analytics

```bash
pnpm add @vercel/analytics
```

```tsx
import { Analytics } from "@vercel/analytics/react";

// Add to RootDocument:
<Analytics />;
```

### 3. Configure Edge Functions (Optional)

For faster global performance:

```typescript
// In route files where needed:
export const runtime = "edge";
```

### 4. Image Optimization

Use Vercel's automatic image optimization:

```tsx
// Instead of <img>:
import Image from "next/image"; // Or use Vercel's image component

<Image
  src="/nail-art.jpg"
  alt="Nail Art"
  width={800}
  height={600}
  quality={85}
/>;
```

## Monitoring & Observability

### 1. Vercel Dashboard

Monitor:

- Deployment status
- Build logs
- Function logs
- Analytics
- Speed Insights

### 2. Error Tracking (Optional)

Add Sentry for error tracking:

```bash
pnpm add @sentry/react @sentry/vite-plugin
```

Configure in `vite.config.ts` and application.

### 3. Uptime Monitoring

Recommended services:

- UptimeRobot (free)
- Pingdom
- StatusCake

## CI/CD Pipeline

Vercel provides automatic CI/CD:

### Automatic Deployments

- **Production**: Deploys on push to `main` branch
- **Preview**: Deploys on all other branches and PRs
- **Development**: Local development only

### Branch Protection (Recommended)

In GitHub:

1. Go to Settings → Branches
2. Add rule for `main` branch:
   - Require pull request reviews
   - Require status checks (Vercel deployments)
   - No direct pushes to main

### Deployment Workflow

```
1. Create feature branch
   git checkout -b feature/booking-system

2. Make changes and commit
   git add .
   git commit -m "feat: add booking system"
   git push origin feature/booking-system

3. Create Pull Request on GitHub
   → Vercel creates preview deployment
   → Review changes on preview URL

4. Merge to main
   → Vercel deploys to production automatically

5. Production live at your domain!
```

## Rollback Strategy

### Quick Rollback

1. **Via Vercel Dashboard**
   - Go to Deployments
   - Find previous working deployment
   - Click "..." → "Promote to Production"

2. **Via Git**

   ```bash
   # Revert to previous commit
   git revert HEAD
   git push origin main
   ```

3. **Via Vercel CLI**
   ```bash
   # Promote specific deployment
   vercel promote <deployment-url>
   ```

## Environment-Specific Configurations

### Development

```env
SITE_URL=http://localhost:3000
PAYPAL_MODE=sandbox
LOG_LEVEL=debug
```

### Staging (Preview)

```env
SITE_URL=https://silver-nails-git-staging.vercel.app
PAYPAL_MODE=sandbox
LOG_LEVEL=info
```

### Production

```env
SITE_URL=https://silvernails.com
PAYPAL_MODE=production
LOG_LEVEL=error
```

## Security Checklist

Before going live:

- [ ] Environment variables set correctly
- [ ] No sensitive data in code
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] CORS configured properly
- [ ] Rate limiting implemented (if needed)
- [ ] Input validation working
- [ ] Authentication implemented
- [ ] Database access restricted
- [ ] API keys rotated from defaults
- [ ] Error messages don't leak sensitive info
- [ ] Dependencies up to date
- [ ] Security headers configured

### Security Headers

Add to `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

## Pre-Launch Checklist

### Technical

- [ ] All pages loading correctly
- [ ] Mobile responsive on all devices
- [ ] Forms submitting properly
- [ ] Booking system tested end-to-end
- [ ] Payment integration tested (sandbox)
- [ ] Email notifications working
- [ ] Error pages customized (404, 500)
- [ ] Lighthouse score > 90
- [ ] Load testing completed

### Content

- [ ] All text proofread
- [ ] Images optimized
- [ ] Services and pricing updated
- [ ] Staff profiles complete
- [ ] Gallery populated
- [ ] Contact information verified
- [ ] Business hours correct
- [ ] Privacy policy added
- [ ] Terms of service added

### SEO

- [ ] Meta tags on all pages
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Google Analytics set up
- [ ] Google Search Console verified
- [ ] Social media meta tags
- [ ] Schema.org markup added

### Business

- [ ] Test bookings with real customers
- [ ] Staff trained on admin panel
- [ ] Payment processing tested
- [ ] Backup procedures established
- [ ] Support email set up
- [ ] Social media accounts linked
- [ ] Launch announcement prepared

## Post-Launch

### Week 1

1. Monitor error logs daily
2. Check booking success rate
3. Gather user feedback
4. Fix critical issues
5. Update documentation

### Month 1

1. Review analytics
2. Optimize conversion funnel
3. A/B test CTAs
4. Gather customer testimonials
5. Plan feature iterations

### Ongoing

- Weekly analytics review
- Monthly security updates
- Quarterly performance optimization
- Customer feedback integration
- Feature roadmap updates

## Troubleshooting

### Build Fails

**Check**:

- Build logs in Vercel dashboard
- TypeScript errors: `pnpm build` locally
- Dependency issues: Delete `node_modules`, run `pnpm install`
- Environment variables: Ensure all required vars are set

### Runtime Errors

**Check**:

- Function logs in Vercel
- Notion API rate limits
- Environment variable values
- API endpoint responses

### Slow Performance

**Optimize**:

- Enable Edge Functions
- Add image optimization
- Implement caching headers
- Use Vercel Analytics to identify bottlenecks

### Database Issues

**Verify**:

- Notion integration still has access
- Database IDs are correct
- API key hasn't expired
- Rate limits not exceeded

## Support Resources

- **Vercel Documentation**: https://vercel.com/docs
- **TanStack Start Docs**: https://tanstack.com/start
- **Notion API Docs**: https://developers.notion.com
- **Project GitHub**: (your repository)

## Cost Estimation

### Vercel Pricing (as of 2024)

**Hobby (Free)**

- Perfect for getting started
- Unlimited deployments
- 100 GB bandwidth/month
- Serverless function execution
- Automatic HTTPS

**Pro ($20/month)**

- For growing businesses
- Advanced analytics
- Password protection
- Preview deployment protection
- Team collaboration

**Recommended**: Start with Hobby, upgrade to Pro when:

- Exceeding free tier limits
- Need team features
- Want advanced analytics
- Require password protection

### Notion Pricing

- **Free**: Perfect for small salons (< 10 staff)
- **Plus ($10/user/month)**: Better for growing businesses
- **Unlimited**: Larger operations

---

## Quick Reference Commands

```bash
# Local development
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Deploy to Vercel
vercel --prod

# View logs
vercel logs

# Check environment variables
vercel env ls

# Pull environment variables to local
vercel env pull
```

---

**Ready to Deploy!** 🚀

Follow this guide step-by-step for a smooth deployment process. If you encounter issues, check the troubleshooting section or reach out for support.

Good luck with your launch!

```

`NOTION_SETUP.md`:

```md
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

- **Name** : Silver Nails
- **Associated workspace**: Select your workspace
- **Type** : Internal

1. Click "Submit"
2. Copy the "Internal Integration Token" - this is your `NOTION_API_KEY`
3. Save it securely (add to `.env` file)

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

| Property Name | Type         | Options/Config                |
| ------------- | ------------ | ----------------------------- |
| Name          | Title        | (default)                     |
| Email         | Email        |                               |
| FirstName     | Text         |                               |
| LastName      | Text         |                               |
| Phone         | Phone        |                               |
| Role          | Select       | Options: client, staff, admin |
| Preferences   | Text         | For storing JSON data         |
| Created       | Created time | (auto)                        |

1. Click the "..." menu → "Connect to" → Select "Silver Nails" integration
2. Copy the database ID from the URL (see below)
3. Add to `.env` as `NOTION_DB_USERS`

**How to get Database ID: **

```
         URL: https:                                        //www.notion.so/workspace/abc123def456?v=...
Database ID : abc123def456 (the part between last / and ?)
```

### Database 2: Staff

1. Create new inline database named "Staff"
2. Add properties:

| Property Name | Type         | Options/Config                                                      |
| ------------- | ------------ | ------------------------------------------------------------------- |
| Name          | Title        |                                                                     |
| UserId        | Text         | Links to Users database                                             |
| Email         | Email        |                                                                     |
| Phone         | Phone        |                                                                     |
| Specialties   | Multi-select | Options: Manicure, Pedicure, Gel, Acrylic, Nail Art, Spa Treatments |
| Bio           | Text         |                                                                     |
| ImageUrl      | URL          |                                                                     |
| IsActive      | Checkbox     | Default: checked                                                    |
| Schedule      | Text         | For storing JSON schedule data                                      |
| Created       | Created time | (auto)                                                              |

1. Connect to integration
2. Copy database ID → `NOTION_DB_STAFF`

### Database 3: Services

1. Create new inline database named "Services"
2. Add properties:

| Property Name   | Type         | Options/Config                                                            |
| --------------- | ------------ | ------------------------------------------------------------------------- |
| Name            | Title        |                                                                           |
| Description     | Text         |                                                                           |
| Category        | Select       | Options: manicure, pedicure, gel, acrylic, nail-art, spa-treatment, other |
| Duration        | Number       | In minutes                                                                |
| Price           | Number       | In dollars                                                                |
| ImageUrl        | URL          |                                                                           |
| IsActive        | Checkbox     | Default: checked                                                          |
| RequiresDeposit | Checkbox     | Default: unchecked                                                        |
| DepositAmount   | Number       |                                                                           |
| AddOns          | Text         | For storing JSON add-ons data                                             |
| Created         | Created time | (auto)                                                                    |

1. Connect to integration
2. Copy database ID → `NOTION_DB_SERVICES`

### Database 4: Appointments

1. Create new inline database named "Appointments"
2. Add properties:

| Property Name | Type             | Options/Config                                                          |
| ------------- | ---------------- | ----------------------------------------------------------------------- |
| Title         | Title            | (auto-generated or appointment summary)                                 |
| ClientId      | Text             | References Users database                                               |
| StaffId       | Text             | References Staff database                                               |
| ServiceId     | Text             | References Services database                                            |
| Date          | Date             |                                                                         |
| StartTime     | Text             | Format : "14:00"                                                        |
| EndTime       | Text             | Format : "15:30"                                                        |
| Status        | Select           | Options: pending, confirmed, in-progress, completed, cancelled, no-show |
| Notes         | Text             |                                                                         |
| AddOns        | Multi-select     | Service add-on names                                                    |
| TotalPrice    | Number           |                                                                         |
| DepositPaid   | Checkbox         |                                                                         |
| DepositAmount | Number           |                                                                         |
| ReminderSent  | Checkbox         |                                                                         |
| Created       | Created time     | (auto)                                                                  |
| Modified      | Last edited time | (auto)                                                                  |

1. Connect to integration
2. Copy database ID → `NOTION_DB_APPOINTMENTS`

### Database 5: Payments

1. Create new inline database named "Payments"
2. Add properties:

| Property Name | Type         | Options/Config                                |
| ------------- | ------------ | --------------------------------------------- |
| Title         | Title        | (e.g., "Payment #123")                        |
| AppointmentId | Text         | References Appointments                       |
| Amount        | Number       |                                               |
| Type          | Select       | Options: deposit, full-payment, tip           |
| Status        | Select       | Options: pending, completed, failed, refunded |
| Method        | Select       | Options: card, tap, paypal, cash              |
| TransactionId | Text         | External payment processor ID                 |
| Created       | Created time | (auto)                                        |

1. Connect to integration
2. Copy database ID → `NOTION_DB_PAYMENTS`

### Database 6: Loyalty

1. Create new inline database named "Loyalty"
2. Add properties:

| Property Name | Type             | Options/Config                          |
| ------------- | ---------------- | --------------------------------------- |
| ClientName    | Title            | For easy reference                      |
| ClientId      | Text             | References Users                        |
| Points        | Number           | Current point balance                   |
| Tier          | Select           | Options: bronze, silver, gold, platinum |
| LifetimeSpend | Number           | Total amount spent                      |
| VisitsCount   | Number           | Number of completed visits              |
| LastVisit     | Date             |                                         |
| Rewards       | Text             | JSON array of rewards                   |
| Created       | Created time     | (auto)                                  |
| Modified      | Last edited time | (auto)                                  |

1. Connect to integration
2. Copy database ID → `NOTION_DB_LOYALTY`

### Database 7: Reviews

1. Create new inline database named "Reviews"
2. Add properties:

| Property Name | Type         | Options/Config          |
| ------------- | ------------ | ----------------------- |
| Title         | Title        | (auto or reviewer name) |
| AppointmentId | Text         | References Appointments |
| ClientId      | Text         | References Users        |
| StaffId       | Text         | References Staff        |
| Rating        | Number       | 1-5 scale               |
| Comment       | Text         |                         |
| Created       | Created time | (auto)                  |

1. Connect to integration
2. Copy database ID → `NOTION_DB_REVIEWS`

### Database 8: Gallery

1. Create new inline database named "Gallery"
2. Add properties:

| Property Name | Type         | Options/Config                                                               |
| ------------- | ------------ | ---------------------------------------------------------------------------- |
| Title         | Title        | Image title                                                                  |
| Url           | URL          | Image URL                                                                    |
| Description   | Text         |                                                                              |
| Tags          | Multi-select | Options: Manicure, Pedicure, Gel, Acrylic, Nail Art, Seasonal, Wedding, etc. |
| StaffId       | Text         | References Staff (artist)                                                    |
| IsHidden      | Checkbox     | Hide from public gallery                                                     |
| Uploaded      | Created time | (auto)                                                                       |

1. Connect to integration
2. Copy database ID → `NOTION_DB_GALLERY`

## Step 4: Sample Data

### Add Sample Services

Add a few services to get started:

1. **Luxury Manicure**
   - Description: "Premium hand treatment with expert nail shaping, cuticle care, and polish application"
   - Category : manicure
   - Duration : 60
   - Price : 45
   - IsActive : ✓

2. **Spa Pedicure**
   - Description: "Indulgent foot care with massage, exfoliation, and polish"
   - Category : pedicure
   - Duration : 75
   - Price : 65
   - IsActive : ✓

3. **Gel Nails**
   - Description: "Long-lasting gel polish with chip-free shine for up to 3 weeks"
   - Category : gel
   - Duration : 60
   - Price : 55
   - IsActive : ✓

4. **Acrylic Extensions**
   - Description : "Custom nail extensions for added length and strength"
   - Category : acrylic
   - Duration : 90
   - Price : 75
   - RequiresDeposit: ✓
   - DepositAmount : 25
   - IsActive : ✓

5. **Custom Nail Art**
   - Description: "Intricate nail art designs created by our expert artists"
   - Category : nail-art
   - Duration : 30
   - Price : 20
   - IsActive : ✓

### Add Sample Staff

Add at least one staff member:

1. **Sarah Johnson**
   - Email : <sarah@silvernails.com>
   - Phone : (909) 555-0101
   - Specialties: Manicure, Gel, Nail Art
   - Bio : "Master nail technician with 10+ years experience specializing in intricate nail art"
   - IsActive : ✓
   - Schedule : (can be empty initially)

## Step 5: Configure Environment Variables

Create a `.env` file in your project root:

```env
# Notion API Configuration
NOTION_API_KEY = secret_abc123... # Your integration token

# Database IDs (copy from URLs)
NOTION_DB_USERS        = abc123def456...
NOTION_DB_STAFF        = def456ghi789...
NOTION_DB_SERVICES     = ghi789jkl012...
NOTION_DB_APPOINTMENTS = jkl012mno345...
NOTION_DB_PAYMENTS     = mno345pqr678...
NOTION_DB_LOYALTY      = pqr678stu901...
NOTION_DB_REVIEWS      = stu901vwx234...
NOTION_DB_GALLERY      = vwx234yzab567...

# Other Configuration
JWT_SECRET = your_super_secret_jwt_key_here
SITE_URL   = http://localhost:3000
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
2. **By Category** - Group by : Category
3. **By Price** - Sort : Price (descending)

### Appointments Database Views

1. **Today's Appointments** - Filter: Date is today, Sort: StartTime
2. **Upcoming** - Filter : Date is on or after today, Sort: Date ascending
3. **By Staff** - Group by: StaffId
4. **Pending** - Filter : Status equals "pending"
5. **Completed** - Filter : Status equals "completed"

### Staff Database Views

1. **Active Staff** - Filter : IsActive is checked
2. **By Specialty** - Group by: Specialties

### Clients/Users Database Views

1. **Active Clients** - Filter: Role equals "client"
2. **Staff Users** - Filter : Role equals "staff"
3. **Recent Signups** - Sort : Created (descending)

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

```

`PROJECT_SUMMARY.md`:

```md
# Silver Nails - Project Summary

## Project Overview

**Silver Nails** is a comprehensive, production-ready luxury nail salon website built with modern web technologies. The application features a complete booking system, client management, admin panel, and payment integration, all wrapped in an elegant, luxury-focused design.

### Key Information
- **Business**: Silver Nails - Luxury Nail Salon
- **Location**: Rancho Cucamonga, California
- **Tech Stack**: TanStack Start, React 19, TypeScript, Tailwind CSS, Notion API
- **Deployment Target**: Vercel
- **Database**: Notion (for easy long-term maintenance)

## What's Been Implemented

### ✅ Core Infrastructure
1. **TanStack Start Setup**
   - Full TanStack suite integration (Router, Query, Table, Form, Virtual)
   - TypeScript configuration
   - Vite build system
   - SSR support

2. **Design System**
   - Custom Tailwind theme with luxury color palette:
     - Primary: Silver (#A0A7B5)
     - Secondary: Rose Gold (#E6B8B8)
     - Accent: Champagne Gold (#F5EDD8)
   - Typography system (Inter + Playfair Display)
   - CSS custom properties for theming
   - Responsive breakpoints
   - Custom animations (shimmer effects)

3. **UI Component Library**
   - shadcn/ui components customized for luxury aesthetic
   - Button (with luxury variant)
   - Card
   - Input
   - Label
   - Calendar (react-day-picker)
   - Dialog
   - All components with proper TypeScript types

### ✅ Type System & Validation
1. **TypeScript Types** (`src/types/index.ts`)
   - User & Authentication
   - Staff & Scheduling
   - Services & Categories
   - Appointments & Bookings
   - Payments & Transactions
   - Loyalty Program
   - Reviews & Ratings
   - Analytics & Reporting
   - Gallery Images

2. **Zod Validation Schemas** (`src/lib/validations.ts`)
   - Login & Signup
   - Booking forms
   - Contact forms
   - Service management
   - Staff management
   - Schedule management
   - Reviews
   - Client preferences
   - Notification settings

### ✅ Notion Database Integration
**File**: `src/lib/notion.ts`

Fully implemented CRUD operations for:
- **Users**: Create, find by email/ID, update profiles
- **Staff**: Create, get all, find by ID, update schedules
- **Services**: Create, get all, filter by category
- **Appointments**: Create, find by client/staff, update status

Features:
- Type-safe API wrapper
- Proper error handling
- Data transformation (Notion → TypeScript types)
- Support for complex queries and filters

### ✅ Layout Components
1. **Header** (`src/components/Header.tsx`)
   - Sticky navigation with backdrop blur
   - Gradient logo design
   - Responsive mobile menu
   - Contact info bar
   - CTA buttons (Sign In, Book Now)
   - Smooth transitions

2. **Footer** (`src/components/Footer.tsx`)
   - Brand information
   - Quick links
   - Popular services
   - Contact details
   - Business hours
   - Social media links
   - Privacy/Terms links

3. **Root Layout** (`src/routes/__root.tsx`)
   - Proper HTML structure
   - SEO meta tags
   - Google Fonts integration
   - TanStack DevTools
   - Flex layout for sticky footer

### ✅ Homepage
**File**: `src/routes/index.tsx`

Sections:
1. **Hero Section**
   - Large, impactful headline
   - Gradient text effects
   - CTA buttons
   - Social proof (reviews, experience)
   - Decorative background elements

2. **Features Section**
   - Premium products
   - Expert technicians
   - Luxury experience
   - Flexible hours

3. **Services Preview**
   - 4 popular services
   - Pricing display
   - Duration information
   - Quick booking links

4. **Testimonials**
   - Customer reviews
   - Star ratings
   - Social proof

5. **CTA Section**
   - Final conversion push
   - Multiple benefit highlights
   - Prominent booking button

### ✅ Brand Assets
**File**: `BRAND_ASSETS.md`

Comprehensive brand guide including:
- 5 logo concept variations
- Complete color palette with hex codes
- Typography system
- UI/UX design principles
- Animation guidelines
- Accessibility standards
- Photography style guide
- Brand voice & messaging
- Usage examples

## Technology Stack

### Frontend
- **Framework**: TanStack Start (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: shadcn/ui (customized)
- **Icons**: Lucide React
- **Routing**: TanStack Router
- **State Management**: TanStack Query
- **Forms**: TanStack Form + React Hook Form
- **Validation**: Zod
- **Tables**: TanStack Table
- **Virtualization**: TanStack Virtual

### Backend/Database
- **Database**: Notion API
- **API Client**: @notionhq/client
- **Authentication**: JWT + bcryptjs (to be implemented)
- **Payments**: PayPal + tap payments (to be implemented)

### Development
- **Build Tool**: Vite
- **Runtime**: Nitro
- **Testing**: Vitest + Testing Library
- **Package Manager**: pnpm

## Project Structure

```
silver-nails/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── calendar.tsx
│   │   │   └── dialog.tsx
│   │   ├── Header.tsx       # Main navigation
│   │   └── Footer.tsx       # Site footer
│   ├── lib/
│   │   ├── utils.ts         # Utility functions
│   │   ├── validations.ts   # Zod schemas
│   │   └── notion.ts        # Notion API integration
│   ├── routes/
│   │   ├── __root.tsx       # Root layout
│   │   └── index.tsx        # Homepage
│   ├── types/
│   │   └── index.ts         # TypeScript types
│   ├── styles.css           # Global styles + Tailwind
│   └── router.tsx           # Router configuration
├── public/                  # Static assets
├── BRAND_ASSETS.md         # Brand guide
├── PROJECT_SUMMARY.md      # This file
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## What Still Needs to Be Built

### High Priority
1. **Services Page**
   - Full service catalog
   - Category filtering
   - Detailed service descriptions
   - Add-ons selection

2. **Booking System**
   - Calendar with availability
   - Time slot selection
   - Staff selection
   - Service customization
   - Client information form
   - Booking confirmation

3. **Authentication**
   - Login/Signup pages
   - Password reset
   - Email verification
   - Session management
   - Protected routes

4. **Client Dashboard**
   - Upcoming appointments
   - Booking history
   - Profile management
   - Loyalty points display
   - Favorite services

### Medium Priority
5. **Admin Panel**
   - Staff scheduling interface
   - Appointment calendar (master view)
   - Client database management
   - Service management
   - Analytics dashboard
   - Payment tracking

6. **Payment Integration**
   - PayPal integration
   - Tap payment support
   - Deposit handling
   - Payment history
   - Refund system

7. **Additional Pages**
   - About Us
   - Gallery (nail art showcase)
   - Contact page with form
   - Privacy Policy
   - Terms of Service

### Nice to Have
8. **Advanced Features**
   - Email/SMS notifications
   - Automated reminders
   - Loyalty program interface
   - Review system
   - Gift cards
   - Online store (products)
   - Blog section

9. **Documentation**
   - Notion database setup guide
   - Environment variables guide
   - Deployment instructions
   - Admin user manual
   - API documentation

## Environment Variables Needed

Create a `.env` file with:

```env
# Notion API
NOTION_API_KEY=your_notion_api_key
NOTION_DB_USERS=notion_database_id
NOTION_DB_STAFF=notion_database_id
NOTION_DB_SERVICES=notion_database_id
NOTION_DB_APPOINTMENTS=notion_database_id
NOTION_DB_PAYMENTS=notion_database_id
NOTION_DB_LOYALTY=notion_database_id
NOTION_DB_REVIEWS=notion_database_id
NOTION_DB_GALLERY=notion_database_id

# JWT
JWT_SECRET=your_secret_key

# PayPal
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_SECRET=your_paypal_secret

# Email (Optional - for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASSWORD=your_password

# Site URL
SITE_URL=https://silvernails.com
```

## Notion Database Schema

### Required Databases

#### 1. Users Database
Properties:
- Email (Email)
- FirstName (Text)
- LastName (Text)
- Phone (Phone)
- Role (Select: client, staff, admin)
- Preferences (Text - JSON)

#### 2. Staff Database
Properties:
- Name (Title)
- UserId (Text)
- Email (Email)
- Phone (Phone)
- Specialties (Multi-select)
- Bio (Text)
- ImageUrl (URL)
- IsActive (Checkbox)
- Schedule (Text - JSON)

#### 3. Services Database
Properties:
- Name (Title)
- Description (Text)
- Category (Select: manicure, pedicure, gel, acrylic, nail-art, spa-treatment, other)
- Duration (Number)
- Price (Number)
- ImageUrl (URL)
- IsActive (Checkbox)
- RequiresDeposit (Checkbox)
- DepositAmount (Number)
- AddOns (Text - JSON)

#### 4. Appointments Database
Properties:
- ClientId (Text)
- StaffId (Text)
- ServiceId (Text)
- Date (Date)
- StartTime (Text)
- EndTime (Text)
- Status (Select: pending, confirmed, in-progress, completed, cancelled, no-show)
- Notes (Text)
- AddOns (Multi-select)
- TotalPrice (Number)
- DepositPaid (Checkbox)
- DepositAmount (Number)
- ReminderSent (Checkbox)

#### 5. Payments Database
Properties:
- AppointmentId (Text)
- Amount (Number)
- Type (Select: deposit, full-payment, tip)
- Status (Select: pending, completed, failed, refunded)
- Method (Select: card, tap, paypal, cash)
- TransactionId (Text)

#### 6. Loyalty Database
Properties:
- ClientId (Text)
- Points (Number)
- Tier (Select: bronze, silver, gold, platinum)
- LifetimeSpend (Number)
- VisitsCount (Number)
- LastVisit (Date)
- Rewards (Text - JSON)

#### 7. Reviews Database
Properties:
- AppointmentId (Text)
- ClientId (Text)
- StaffId (Text)
- Rating (Number: 1-5)
- Comment (Text)

#### 8. Gallery Database
Properties:
- Url (URL)
- Title (Text)
- Description (Text)
- Tags (Multi-select)
- StaffId (Text)
- IsHidden (Checkbox)

## Development Workflow

### Getting Started
```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Notion API keys

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Code Quality
```bash
# Run tests
pnpm test

# Type checking
tsc --noEmit
```

## Deployment

### Vercel Deployment

1. **Connect Repository**
   - Push code to GitHub
   - Import project in Vercel

2. **Configure Environment Variables**
   - Add all environment variables in Vercel dashboard
   - Ensure Notion API keys are set

3. **Build Settings**
   - Build Command: `pnpm build`
   - Output Directory: `.output/public`
   - Install Command: `pnpm install`

4. **Deploy**
   - Automatic deployments on git push
   - Preview deployments for PRs

## Design Highlights

### Color Palette
- **Primary (Silver)**: #A0A7B5 - Sophistication and modernity
- **Secondary (Rose Gold)**: #E6B8B8 - Luxury and warmth
- **Accent (Champagne)**: #F5EDD8 - Elegance and premium feel

### Typography
- **Display**: Playfair Display - Classic serif for headings
- **Body**: Inter - Modern sans-serif for readability

### Key Visual Elements
- Gradient backgrounds
- Soft shadows and blur effects
- Smooth transitions and hover states
- Responsive grid layouts
- Mobile-first design

## Business Features

### Client Features
- ✅ View services and pricing
- ✅ See business hours and location
- ⏳ Book appointments online
- ⏳ Create account and login
- ⏳ View booking history
- ⏳ Manage profile and preferences
- ⏳ Earn loyalty points
- ⏳ Leave reviews

### Staff Features (Admin)
- ⏳ View personal schedule
- ⏳ Manage appointments
- ⏳ Update availability
- ⏳ View client history
- ⏳ Track earnings

### Admin Features
- ⏳ Manage all staff schedules
- ⏳ View master calendar
- ⏳ Add/edit services
- ⏳ Manage client database
- ⏳ Process payments
- ⏳ View analytics and reports
- ⏳ Send notifications
- ⏳ Manage gallery images

## Best Practices Implemented

1. **Type Safety**
   - Full TypeScript coverage
   - Zod validation for all user inputs
   - Type-safe API calls

2. **Performance**
   - Code splitting via TanStack Router
   - Image optimization
   - Lazy loading
   - Efficient re-renders with React 19

3. **Accessibility**
   - Semantic HTML
   - ARIA labels
   - Keyboard navigation
   - Color contrast compliance

4. **SEO**
   - Meta tags
   - Structured data (ready to add)
   - Sitemap (to be generated)
   - Clean URLs

5. **Security**
   - Input validation
   - XSS protection
   - CSRF tokens (to be added)
   - Secure password hashing

## Next Steps

### Immediate (Week 1)
1. Create Services page with full catalog
2. Build booking system with calendar
3. Implement authentication system
4. Set up Notion databases

### Short-term (Week 2-3)
1. Create client dashboard
2. Build admin panel basics
3. Integrate payment processing
4. Add email notifications

### Medium-term (Month 1-2)
1. Complete admin features
2. Add analytics dashboard
3. Implement loyalty program
4. Create gallery page
5. Write comprehensive docs

### Long-term (Month 3+)
1. Mobile app (React Native)
2. Advanced reporting
3. Marketing integrations
4. A/B testing
5. Performance optimization

## Success Metrics

### Business Goals
- Online bookings > 60% of total
- Average booking value increase
- Customer retention rate > 70%
- Reduced no-show rate
- Increased loyalty program enrollment

### Technical Goals
- Page load time < 2 seconds
- Lighthouse score > 90
- Zero critical bugs
- 99.9% uptime
- Positive user feedback

## Support & Maintenance

### Regular Tasks
- Monitor Notion API usage
- Review and respond to client feedback
- Update services and pricing
- Backup data weekly
- Security updates
- Performance monitoring

### Quarterly Reviews
- Analytics review
- Feature prioritization
- Design refresh
- Content updates
- SEO optimization

---

## Contact & Resources

**Project Repository**: GitHub (current repository)
**Documentation**: See individual files in project
**Brand Guide**: BRAND_ASSETS.md
**Notion Setup**: (To be created)

**Built with ❤️ using modern web technologies**

Last Updated: December 2024
Version: 1.0

```

`README.md`:

```md
# Silver Nails - Luxury Nail Salon Website

<div align="center">

**A modern, full-stack luxury nail salon website built with TanStack Start**

[![TanStack Start](https://img.shields.io/badge/TanStack-Start-blue)](https://tanstack.com/start)
[![React 19](https://img.shields.io/badge/React-19-blue)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-blue)](https://tailwindcss.com)
[![Notion API](https://img.shields.io/badge/Notion-API-black)](https://developers.notion.com)

[Demo](#) • [Documentation](#documentation) • [Features](#features) • [Getting Started](#getting-started)

</div>

---

## Overview

Silver Nails is a production-ready, luxury-focused nail salon website featuring comprehensive booking management, client dashboard, admin panel, and payment integration. Built with modern web technologies and designed for easy deployment and long-term maintenance.

### Key Highlights

- 🎨 **Luxury Design System** - Custom theme with silver, rose gold, and champagne colors
- 📱 **Fully Responsive** - Beautiful on all devices
- 🚀 **Modern Stack** - TanStack Start, React 19, TypeScript, Tailwind CSS
- 📊 **Notion Backend** - Easy-to-manage database without complex setup
- 💳 **Payment Ready** - Integrated PayPal and tap payment support
- 📅 **Smart Booking** - Real-time availability and scheduling
- 🔐 **Secure** - Type-safe with comprehensive validation
- ⚡ **Fast** - Optimized for performance and SEO

## Features

### ✅ Implemented

- **Luxury Homepage**
  - Stunning hero section with gradient effects
  - Service showcase with pricing
  - Customer testimonials
  - Multiple CTAs for conversions

- **Premium UI Components**
  - shadcn/ui components customized for luxury aesthetic
  - Responsive header with mobile menu
  - Comprehensive footer
  - Button, Card, Input, Calendar, Dialog, and more

- **Type-Safe Architecture**
  - Full TypeScript coverage
  - Zod validation for all forms
  - Comprehensive type definitions

- **Notion Integration**
  - Full CRUD operations
  - Type-safe API wrapper
  - Support for Users, Staff, Services, Appointments

- **Brand Assets**
  - 5 logo concepts
  - Complete color palette
  - Typography system
  - Design guidelines

### 🚧 In Progress / Planned

- Booking system with calendar
- Authentication (login/signup)
- Client dashboard
- Admin panel
- Services page
- Gallery
- Payment integration
- Analytics dashboard

## Technology Stack

### Frontend
- **Framework**: TanStack Start (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: TanStack Router
- **State**: TanStack Query
- **Forms**: TanStack Form + React Hook Form
- **Validation**: Zod

### Backend
- **Database**: Notion API
- **Authentication**: JWT + bcryptjs
- **Payments**: PayPal, Tap payments

### DevOps
- **Build**: Vite
- **Runtime**: Nitro
- **Hosting**: Vercel (recommended)
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+
- Notion account (free tier works)
- Git

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd silver-nails

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Notion API credentials

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### Quick Start (No Database)

The site will work out of the box with sample data for demonstration purposes. To connect to Notion:

1. Follow the **[Notion Setup Guide](NOTION_SETUP.md)**
2. Add your API keys to `.env`
3. Restart the dev server

## Building For Production

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch
```




## Documentation

### Comprehensive Guides

- **[Project Summary](PROJECT_SUMMARY.md)** - Complete project overview and status
- **[Brand Assets](BRAND_ASSETS.md)** - Logo concepts, colors, typography, and design system
- **[Notion Setup](NOTION_SETUP.md)** - Step-by-step database configuration
- **[Deployment Guide](DEPLOYMENT.md)** - Vercel deployment instructions

### Project Structure

```
silver-nails/
├── src/
│   ├── components/          # React components
│   │   ├── ui/              # shadcn UI components
│   │   ├── Header.tsx       # Main navigation
│   │   └── Footer.tsx       # Site footer
│   ├── lib/                 # Utilities and integrations
│   │   ├── utils.ts         # Helper functions
│   │   ├── validations.ts   # Zod schemas
│   │   └── notion.ts        # Notion API wrapper
│   ├── routes/              # TanStack Router pages
│   │   ├── __root.tsx       # Root layout
│   │   └── index.tsx        # Homepage
│   ├── types/               # TypeScript definitions
│   │   └── index.ts         # Domain types
│   └── styles.css           # Global styles + Tailwind
├── BRAND_ASSETS.md          # Brand guide
├── PROJECT_SUMMARY.md       # Project documentation
├── NOTION_SETUP.md          # Database setup guide
├── DEPLOYMENT.md            # Deployment instructions
└── package.json
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Silver | `#A0A7B5` | Primary color - sophistication |
| Rose Gold | `#E6B8B8` | Secondary - luxury and warmth |
| Champagne | `#F5EDD8` | Accent - elegance |

## Routing
This project uses [TanStack Router](https://tanstack.com/router) with file-based routing. Routes are managed as files in `src/routes`.

## Environment Variables

Create a `.env` file in the root directory:

```env
# Notion API
NOTION_API_KEY=your_notion_integration_token
NOTION_DB_USERS=your_users_database_id
NOTION_DB_STAFF=your_staff_database_id
NOTION_DB_SERVICES=your_services_database_id
NOTION_DB_APPOINTMENTS=your_appointments_database_id
NOTION_DB_PAYMENTS=your_payments_database_id
NOTION_DB_LOYALTY=your_loyalty_database_id
NOTION_DB_REVIEWS=your_reviews_database_id
NOTION_DB_GALLERY=your_gallery_database_id

# Authentication
JWT_SECRET=your_secret_key_minimum_32_characters

# Site Configuration
SITE_URL=http://localhost:3000
```

See [NOTION_SETUP.md](NOTION_SETUP.md) for detailed database setup instructions.

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Deploy to Other Platforms

Silver Nails can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- Fly.io

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See LICENSE file for details.

## Support

For support and questions:
- 📧 Email: support@silvernails.com (update with your email)
- 📚 [Documentation](PROJECT_SUMMARY.md)
- 🐛 [Report Issues](../../issues)

## Acknowledgments

- Built with [TanStack Start](https://tanstack.com/start)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide](https://lucide.dev)
- Database by [Notion](https://notion.so)

## Learn More

- [TanStack Documentation](https://tanstack.com)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Notion API Documentation](https://developers.notion.com)

---

<div align="center">

**Built with ❤️ for luxury nail salons**


</div>

```

`WARP.md`:

```md
# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Silver Nails is a modern, full-stack luxury nail salon website built with TanStack Start. It features comprehensive booking management, client dashboard, admin panel, and payment integration using Notion as the backend database.

## Technology Stack

- **Frontend**: TanStack Start (React 19), TypeScript, Tailwind CSS 4.0
- **UI Components**: shadcn/ui customized for luxury aesthetic
- **Routing**: TanStack Router with file-based routing
- **State Management**: TanStack Query
- **Forms**: TanStack Form + React Hook Form with Zod validation
- **Backend/Database**: Notion API
- **Authentication**: JWT + bcryptjs
- **Build Tool**: Vite with Nitro runtime
- **Package Manager**: pnpm

## Development Commands

### Essential Commands
```bash
# Development server on port 3000
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview

# Run tests
pnpm test
```

### Code Quality
```bash
# Format and lint code using Trunk
trunk fmt
trunk check

# Format specific files
trunk fmt src/components/Header.tsx
```

## Project Architecture

### Directory Structure
- `src/components/` - React components
  - `ui/` - shadcn/ui components (Button, Card, Input, Dialog, etc.)
  - `booking/` - Multi-step booking flow components
- `src/lib/` - Utilities and integrations
  - `notion.ts` - Notion API wrapper with typed CRUD operations
  - `services-catalog.ts` - Service definitions and helpers
  - `validations.ts` - Zod schemas for all forms
  - `utils.ts` - Helper functions and utilities
- `src/routes/` - TanStack Router file-based pages
- `src/types/` - TypeScript type definitions for all domain models

### Key Architectural Patterns

#### Notion Database Integration
The project uses Notion as a backend database with a comprehensive API wrapper (`src/lib/notion.ts`). All database operations are type-safe and handle the conversion between Notion's property format and TypeScript interfaces.

Database entities include:
- Users (clients with preferences and role-based access)
- Staff (with schedules, specialties, and bio)
- Services (with categories, pricing, and add-ons)
- Appointments (with status tracking and payment info)
- Payments, Reviews, Loyalty Programs, and Gallery

#### Type-Safe Forms with Zod
All forms use Zod schemas defined in `src/lib/validations.ts` for validation. This ensures consistent validation rules across the application and provides TypeScript inference.

#### Service Catalog System
Services are managed through a structured catalog (`src/lib/services-catalog.ts`) with categories, pricing, add-ons, and helper functions. This allows for easy service management and booking flow integration.

#### TanStack Router Architecture
Uses file-based routing with `__root.tsx` providing the global layout (Header/Footer). All pages are fully typed with proper route parameters and search params.

## Environment Setup

### Required Environment Variables
Copy `.env.example` to `.env` and configure:

```env
# Notion API - Required for database operations
NOTION_API_KEY=your_notion_integration_token
NOTION_DB_USERS=your_users_database_id
NOTION_DB_STAFF=your_staff_database_id
NOTION_DB_SERVICES=your_services_database_id
NOTION_DB_APPOINTMENTS=your_appointments_database_id
NOTION_DB_PAYMENTS=your_payments_database_id
NOTION_DB_LOYALTY=your_loyalty_database_id
NOTION_DB_REVIEWS=your_reviews_database_id
NOTION_DB_GALLERY=your_gallery_database_id

# Authentication
JWT_SECRET=your_secret_key_minimum_32_characters

# Site Configuration
SITE_URL=http://localhost:3000
```

See `NOTION_SETUP.md` for detailed database setup instructions.

## Development Guidelines

### Code Style
- Uses Trunk for linting and formatting (Prettier, ESLint equivalents)
- TypeScript strict mode enabled with comprehensive type checking
- Path aliases configured (`@/*` maps to `./src/*`)

### Component Development
- All UI components follow shadcn/ui patterns with luxury theme customization
- Use the `cn()` utility from `src/lib/utils.ts` for conditional class names
- Form components should use the validation schemas from `src/lib/validations.ts`

### Database Operations
- Always use the typed API wrappers from `src/lib/notion.ts`
- Handle errors gracefully as Notion API calls can fail
- Use the domain types from `src/types/index.ts` consistently

### Routing and Navigation
- TanStack Router automatically generates route tree from files in `src/routes/`
- Use typed links and navigation throughout the application
- Route parameters and search params are fully typed

## Testing

The project uses Vitest for testing with React Testing Library. Test files should be placed alongside components or in dedicated test directories.

## Brand Guidelines

Silver Nails uses a luxury color palette:
- Silver (`#A0A7B5`) - Primary color for sophistication
- Rose Gold (`#E6B8B8`) - Secondary color for luxury and warmth  
- Champagne (`#F5EDD8`) - Accent color for elegance

Typography uses Inter for body text and Playfair Display for headings to convey luxury and elegance.

## Common Development Tasks

### Adding New Services
1. Add service definition to `src/lib/services-catalog.ts`
2. Update the service categories type in `src/types/index.ts` if needed
3. Add validation in `src/lib/validations.ts` if custom validation required

### Creating New Routes
1. Add `.tsx` file to `src/routes/` directory
2. Export route configuration using TanStack Router patterns
3. Route tree is automatically generated

### Database Schema Changes
1. Update Notion database properties
2. Modify type definitions in `src/types/index.ts`
3. Update API wrappers in `src/lib/notion.ts`
4. Update validation schemas in `src/lib/validations.ts`

### Adding Form Validation
1. Create Zod schema in `src/lib/validations.ts`
2. Export TypeScript type using `z.infer<typeof schema>`
3. Use schema in form components with TanStack Form or React Hook Form

## Deployment

The application is configured for deployment on Vercel with Nitro runtime. See `DEPLOYMENT.md` for detailed deployment instructions.

For other platforms, the build output is compatible with any Node.js hosting environment.
```

`components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}

```

`package.json`:

```json
{
  "name": "silver-nails",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite dev --port 3000",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "seed": "tsx scripts/seed-notion.ts",
    "seed:overwrite": "tsx scripts/seed-notion.ts --overwrite"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@notionhq/client": "^5.6.0",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toast": "^1.2.15",
    "@tailwindcss/vite": "^4.0.6",
    "@tanstack/react-devtools": "^0.7.0",
    "@tanstack/react-form": "^1.27.6",
    "@tanstack/react-query": "^5.90.12",
    "@tanstack/react-router": "^1.132.0",
    "@tanstack/react-router-devtools": "^1.132.0",
    "@tanstack/react-router-ssr-query": "^1.131.7",
    "@tanstack/react-start": "^1.132.0",
    "@tanstack/react-table": "^8.21.3",
    "@tanstack/react-virtual": "^3.13.13",
    "@tanstack/router-plugin": "^1.132.0",
    "bcryptjs": "^3.0.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "jsonwebtoken": "^9.0.3",
    "lucide-react": "^0.561.0",
    "nitro": "latest",
    "react": "^19.2.0",
    "react-day-picker": "^9.13.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.69.0",
    "tailwind-merge": "^3.4.0",
    "tailwindcss": "^4.0.6",
    "vite-tsconfig-paths": "^6.0.2",
    "zod": "^4.2.1"
  },
  "devDependencies": {
    "@tanstack/devtools-vite": "^0.3.11",
    "@testing-library/dom": "^10.4.0",
    "@testing-library/react": "^16.2.0",
    "@types/bcryptjs": "^3.0.0",
    "@types/jsonwebtoken": "^9.0.10",
    "@types/node": "^22.10.2",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@vitejs/plugin-react": "^5.0.4",
    "jsdom": "^27.0.0",
    "tsx": "^4.19.2",
    "typescript": "^5.7.2",
    "vite": "^7.1.7",
    "vitest": "^3.0.5",
    "web-vitals": "^5.1.0"
  }
}
```

`pnpm-lock.yaml`:

```yaml
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@hookform/resolvers':
        specifier: ^5.2.2
        version: 5.2.2(react-hook-form@7.69.0(react@19.2.3))
      '@notionhq/client':
        specifier: ^5.6.0
        version: 5.6.0
      '@radix-ui/react-avatar':
        specifier: ^1.1.11
        version: 1.1.11(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-dialog':
        specifier: ^1.1.15
        version: 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-dropdown-menu':
        specifier: ^2.1.16
        version: 2.1.16(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-label':
        specifier: ^2.1.8
        version: 2.1.8(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-select':
        specifier: ^2.2.6
        version: 2.2.6(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-slot':
        specifier: ^1.2.4
        version: 1.2.4(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-tabs':
        specifier: ^1.1.13
        version: 1.1.13(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-toast':
        specifier: ^1.2.15
        version: 1.2.15(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@tailwindcss/vite':
        specifier: ^4.0.6
        version: 4.1.18(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))
      '@tanstack/react-devtools':
        specifier: ^0.7.0
        version: 0.7.11(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(csstype@3.2.3)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)(solid-js@1.9.10)
      '@tanstack/react-form':
        specifier: ^1.27.6
        version: 1.27.6(@tanstack/react-start@1.145.0(crossws@0.4.1(srvx@0.9.8))(react-dom@19.2.3(react@19.2.3))(react@19.2.3)(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)))(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@tanstack/react-query':
        specifier: ^5.90.12
        version: 5.90.12(react@19.2.3)
      '@tanstack/react-router':
        specifier: ^1.132.0
        version: 1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@tanstack/react-router-devtools':
        specifier: ^1.132.0
        version: 1.144.0(@tanstack/react-router@1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3))(@tanstack/router-core@1.144.0)(csstype@3.2.3)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)(solid-js@1.9.10)
      '@tanstack/react-router-ssr-query':
        specifier: ^1.131.7
        version: 1.144.0(@tanstack/query-core@5.90.12)(@tanstack/react-query@5.90.12(react@19.2.3))(@tanstack/react-router@1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3))(@tanstack/router-core@1.144.0)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@tanstack/react-start':
        specifier: ^1.132.0
        version: 1.145.0(crossws@0.4.1(srvx@0.9.8))(react-dom@19.2.3(react@19.2.3))(react@19.2.3)(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))
      '@tanstack/react-table':
        specifier: ^8.21.3
        version: 8.21.3(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@tanstack/react-virtual':
        specifier: ^3.13.13
        version: 3.13.13(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@tanstack/router-plugin':
        specifier: ^1.132.0
        version: 1.144.0(@tanstack/react-router@1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3))(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))
      bcryptjs:
        specifier: ^3.0.3
        version: 3.0.3
      class-variance-authority:
        specifier: ^0.7.1
        version: 0.7.1
      clsx:
        specifier: ^2.1.1
        version: 2.1.1
      date-fns:
        specifier: ^4.1.0
        version: 4.1.0
      jsonwebtoken:
        specifier: ^9.0.3
        version: 9.0.3
      lucide-react:
        specifier: ^0.561.0
        version: 0.561.0(react@19.2.3)
      nitro:
        specifier: latest
        version: 3.0.1-alpha.1(lru-cache@11.2.4)(rollup@4.54.0)(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))
      react:
        specifier: ^19.2.0
        version: 19.2.3
      react-day-picker:
        specifier: ^9.13.0
        version: 9.13.0(react@19.2.3)
      react-dom:
        specifier: ^19.2.0
        version: 19.2.3(react@19.2.3)
      react-hook-form:
        specifier: ^7.69.0
        version: 7.69.0(react@19.2.3)
      tailwind-merge:
        specifier: ^3.4.0
        version: 3.4.0
      tailwindcss:
        specifier: ^4.0.6
        version: 4.1.18
      vite-tsconfig-paths:
        specifier: ^6.0.2
        version: 6.0.3(typescript@5.9.3)(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))
      zod:
        specifier: ^4.2.1
        version: 4.2.1
    devDependencies:
      '@tanstack/devtools-vite':
        specifier: ^0.3.11
        version: 0.3.12(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))
      '@testing-library/dom':
        specifier: ^10.4.0
        version: 10.4.1
      '@testing-library/react':
        specifier: ^16.2.0
        version: 16.3.1(@testing-library/dom@10.4.1)(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@types/bcryptjs':
        specifier: ^3.0.0
        version: 3.0.0
      '@types/jsonwebtoken':
        specifier: ^9.0.10
        version: 9.0.10
      '@types/node':
        specifier: ^22.10.2
        version: 22.19.3
      '@types/react':
        specifier: ^19.2.0
        version: 19.2.7
      '@types/react-dom':
        specifier: ^19.2.0
        version: 19.2.3(@types/react@19.2.7)
      '@vitejs/plugin-react':
        specifier: ^5.0.4
        version: 5.1.2(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))
      jsdom:
        specifier: ^27.0.0
        version: 27.4.0
      tsx:
        specifier: ^4.19.2
        version: 4.21.0
      typescript:
        specifier: ^5.7.2
        version: 5.9.3
      vite:
        specifier: ^7.1.7
        version: 7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)
      vitest:
        specifier: ^3.0.5
        version: 3.2.4(@types/node@22.19.3)(jiti@2.6.1)(jsdom@27.4.0)(lightningcss@1.30.2)(tsx@4.21.0)
      web-vitals:
        specifier: ^5.1.0
        version: 5.1.0

packages:

  '@acemir/cssom@0.9.30':
    resolution: {integrity: sha512-9CnlMCI0LmCIq0olalQqdWrJHPzm0/tw3gzOA9zJSgvFX7Xau3D24mAGa4BtwxwY69nsuJW6kQqqCzf/mEcQgg==}

  '@asamuzakjp/css-color@4.1.1':
    resolution: {integrity: sha512-B0Hv6G3gWGMn0xKJ0txEi/jM5iFpT3MfDxmhZFb4W047GvytCf1DHQ1D69W3zHI4yWe2aTZAA0JnbMZ7Xc8DuQ==}

  '@asamuzakjp/dom-selector@6.7.6':
    resolution: {integrity: sha512-hBaJER6A9MpdG3WgdlOolHmbOYvSk46y7IQN/1+iqiCuUu6iWdQrs9DGKF8ocqsEqWujWf/V7b7vaDgiUmIvUg==}

  '@asamuzakjp/nwsapi@2.3.9':
    resolution: {integrity: sha512-n8GuYSrI9bF7FFZ/SjhwevlHc8xaVlb/7HmHelnc/PZXBD2ZR49NnN9sMMuDdEGPeeRQ5d0hqlSlEpgCX3Wl0Q==}

  '@babel/code-frame@7.27.1':
    resolution: {integrity: sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==}
    engines: {node: '>=6.9.0'}

  '@babel/compat-data@7.28.5':
    resolution: {integrity: sha512-6uFXyCayocRbqhZOB+6XcuZbkMNimwfVGFji8CTZnCzOHVGvDqzvitu1re2AU5LROliz7eQPhB8CpAMvnx9EjA==}
    engines: {node: '>=6.9.0'}

  '@babel/core@7.28.5':
    resolution: {integrity: sha512-e7jT4DxYvIDLk1ZHmU/m/mB19rex9sv0c2ftBtjSBv+kVM/902eh0fINUzD7UwLLNR+jU585GxUJ8/EBfAM5fw==}
    engines: {node: '>=6.9.0'}

  '@babel/generator@7.28.5':
    resolution: {integrity: sha512-3EwLFhZ38J4VyIP6WNtt2kUdW9dokXA9Cr4IVIFHuCpZ3H8/YFOl5JjZHisrn1fATPBmKKqXzDFvh9fUwHz6CQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-compilation-targets@7.27.2':
    resolution: {integrity: sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-globals@7.28.0':
    resolution: {integrity: sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-imports@7.27.1':
    resolution: {integrity: sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-transforms@7.28.3':
    resolution: {integrity: sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-plugin-utils@7.27.1':
    resolution: {integrity: sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-string-parser@7.27.1':
    resolution: {integrity: sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-identifier@7.28.5':
    resolution: {integrity: sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-option@7.27.1':
    resolution: {integrity: sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==}
    engines: {node: '>=6.9.0'}

  '@babel/helpers@7.28.4':
    resolution: {integrity: sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==}
    engines: {node: '>=6.9.0'}

  '@babel/parser@7.28.5':
    resolution: {integrity: sha512-KKBU1VGYR7ORr3At5HAtUQ+TV3SzRCXmA/8OdDZiLDBIZxVyzXuztPjfLd3BV1PRAQGCMWWSHYhL0F8d5uHBDQ==}
    engines: {node: '>=6.0.0'}
    hasBin: true

  '@babel/plugin-syntax-jsx@7.27.1':
    resolution: {integrity: sha512-y8YTNIeKoyhGd9O0Jiyzyyqk8gdjnumGTQPsz0xOZOQ2RmkVJeZ1vmmfIvFEKqucBG6axJGBZDE/7iI5suUI/w==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-typescript@7.27.1':
    resolution: {integrity: sha512-xfYCBMxveHrRMnAWl1ZlPXOZjzkN82THFvLhQhFXFt81Z5HnN+EtUkZhv/zcKpmT3fzmWZB0ywiBrbC3vogbwQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-react-jsx-self@7.27.1':
    resolution: {integrity: sha512-6UzkCs+ejGdZ5mFFC/OCUrv028ab2fp1znZmCZjAOBKiBK2jXD1O+BPSfX8X2qjJ75fZBMSnQn3Rq2mrBJK2mw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-react-jsx-source@7.27.1':
    resolution: {integrity: sha512-zbwoTsBruTeKB9hSq73ha66iFeJHuaFkUbwvqElnygoNbj/jHRsSeokowZFN3CZ64IvEqcmmkVe89OPXc7ldAw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/runtime@7.28.4':
    resolution: {integrity: sha512-Q/N6JNWvIvPnLDvjlE1OUBLPQHH6l3CltCEsHIujp45zQUSSh8K+gHnaEX45yAT1nyngnINhvWtzN+Nb9D8RAQ==}
    engines: {node: '>=6.9.0'}

  '@babel/template@7.27.2':
    resolution: {integrity: sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==}
    engines: {node: '>=6.9.0'}

  '@babel/traverse@7.28.5':
    resolution: {integrity: sha512-TCCj4t55U90khlYkVV/0TfkJkAkUg3jZFA3Neb7unZT8CPok7iiRfaX0F+WnqWqt7OxhOn0uBKXCw4lbL8W0aQ==}
    engines: {node: '>=6.9.0'}

  '@babel/types@7.28.5':
    resolution: {integrity: sha512-qQ5m48eI/MFLQ5PxQj4PFaprjyCTLI37ElWMmNs0K8Lk3dVeOdNpB3ks8jc7yM5CDmVC73eMVk/trk3fgmrUpA==}
    engines: {node: '>=6.9.0'}

  '@csstools/color-helpers@5.1.0':
    resolution: {integrity: sha512-S11EXWJyy0Mz5SYvRmY8nJYTFFd1LCNV+7cXyAgQtOOuzb4EsgfqDufL+9esx72/eLhsRdGZwaldu/h+E4t4BA==}
    engines: {node: '>=18'}

  '@csstools/css-calc@2.1.4':
    resolution: {integrity: sha512-3N8oaj+0juUw/1H3YwmDDJXCgTB1gKU6Hc/bB502u9zR0q2vd786XJH9QfrKIEgFlZmhZiq6epXl4rHqhzsIgQ==}
    engines: {node: '>=18'}
    peerDependencies:
      '@csstools/css-parser-algorithms': ^3.0.5
      '@csstools/css-tokenizer': ^3.0.4

  '@csstools/css-color-parser@3.1.0':
    resolution: {integrity: sha512-nbtKwh3a6xNVIp/VRuXV64yTKnb1IjTAEEh3irzS+HkKjAOYLTGNb9pmVNntZ8iVBHcWDA2Dof0QtPgFI1BaTA==}
    engines: {node: '>=18'}
    peerDependencies:
      '@csstools/css-parser-algorithms': ^3.0.5
      '@csstools/css-tokenizer': ^3.0.4

  '@csstools/css-parser-algorithms@3.0.5':
    resolution: {integrity: sha512-DaDeUkXZKjdGhgYaHNJTV9pV7Y9B3b644jCLs9Upc3VeNGg6LWARAT6O+Q+/COo+2gg/bM5rhpMAtf70WqfBdQ==}
    engines: {node: '>=18'}
    peerDependencies:
      '@csstools/css-tokenizer': ^3.0.4

  '@csstools/css-syntax-patches-for-csstree@1.0.22':
    resolution: {integrity: sha512-qBcx6zYlhleiFfdtzkRgwNC7VVoAwfK76Vmsw5t+PbvtdknO9StgRk7ROvq9so1iqbdW4uLIDAsXRsTfUrIoOw==}
    engines: {node: '>=18'}

  '@csstools/css-tokenizer@3.0.4':
    resolution: {integrity: sha512-Vd/9EVDiu6PPJt9yAh6roZP6El1xHrdvIVGjyBsHR0RYwNHgL7FJPyIIW4fANJNG6FtyZfvlRPpFI4ZM/lubvw==}
    engines: {node: '>=18'}

  '@date-fns/tz@1.4.1':
    resolution: {integrity: sha512-P5LUNhtbj6YfI3iJjw5EL9eUAG6OitD0W3fWQcpQjDRc/QIsL0tRNuO1PcDvPccWL1fSTXXdE1ds+l95DV/OFA==}

  '@emnapi/core@1.7.1':
    resolution: {integrity: sha512-o1uhUASyo921r2XtHYOHy7gdkGLge8ghBEQHMWmyJFoXlpU58kIrhhN3w26lpQb6dspetweapMn2CSNwQ8I4wg==}

  '@emnapi/runtime@1.7.1':
    resolution: {integrity: sha512-PVtJr5CmLwYAU9PZDMITZoR5iAOShYREoR45EyyLrbntV50mdePTgUn4AmOw90Ifcj+x2kRjdzr1HP3RrNiHGA==}

  '@emnapi/wasi-threads@1.1.0':
    resolution: {integrity: sha512-WI0DdZ8xFSbgMjR1sFsKABJ/C5OnRrjT06JXbZKexJGrDuPTzZdDYfFlsgcCXCyf+suG5QU2e/y1Wo2V/OapLQ==}

  '@esbuild/aix-ppc64@0.27.2':
    resolution: {integrity: sha512-GZMB+a0mOMZs4MpDbj8RJp4cw+w1WV5NYD6xzgvzUJ5Ek2jerwfO2eADyI6ExDSUED+1X8aMbegahsJi+8mgpw==}
    engines: {node: '>=18'}
    cpu: [ppc64]
    os: [aix]

  '@esbuild/android-arm64@0.27.2':
    resolution: {integrity: sha512-pvz8ZZ7ot/RBphf8fv60ljmaoydPU12VuXHImtAs0XhLLw+EXBi2BLe3OYSBslR4rryHvweW5gmkKFwTiFy6KA==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [android]

  '@esbuild/android-arm@0.27.2':
    resolution: {integrity: sha512-DVNI8jlPa7Ujbr1yjU2PfUSRtAUZPG9I1RwW4F4xFB1Imiu2on0ADiI/c3td+KmDtVKNbi+nffGDQMfcIMkwIA==}
    engines: {node: '>=18'}
    cpu: [arm]
    os: [android]

  '@esbuild/android-x64@0.27.2':
    resolution: {integrity: sha512-z8Ank4Byh4TJJOh4wpz8g2vDy75zFL0TlZlkUkEwYXuPSgX8yzep596n6mT7905kA9uHZsf/o2OJZubl2l3M7A==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [android]

  '@esbuild/darwin-arm64@0.27.2':
    resolution: {integrity: sha512-davCD2Zc80nzDVRwXTcQP/28fiJbcOwvdolL0sOiOsbwBa72kegmVU0Wrh1MYrbuCL98Omp5dVhQFWRKR2ZAlg==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [darwin]

  '@esbuild/darwin-x64@0.27.2':
    resolution: {integrity: sha512-ZxtijOmlQCBWGwbVmwOF/UCzuGIbUkqB1faQRf5akQmxRJ1ujusWsb3CVfk/9iZKr2L5SMU5wPBi1UWbvL+VQA==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [darwin]

  '@esbuild/freebsd-arm64@0.27.2':
    resolution: {integrity: sha512-lS/9CN+rgqQ9czogxlMcBMGd+l8Q3Nj1MFQwBZJyoEKI50XGxwuzznYdwcav6lpOGv5BqaZXqvBSiB/kJ5op+g==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [freebsd]

  '@esbuild/freebsd-x64@0.27.2':
    resolution: {integrity: sha512-tAfqtNYb4YgPnJlEFu4c212HYjQWSO/w/h/lQaBK7RbwGIkBOuNKQI9tqWzx7Wtp7bTPaGC6MJvWI608P3wXYA==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [freebsd]

  '@esbuild/linux-arm64@0.27.2':
    resolution: {integrity: sha512-hYxN8pr66NsCCiRFkHUAsxylNOcAQaxSSkHMMjcpx0si13t1LHFphxJZUiGwojB1a/Hd5OiPIqDdXONia6bhTw==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [linux]

  '@esbuild/linux-arm@0.27.2':
    resolution: {integrity: sha512-vWfq4GaIMP9AIe4yj1ZUW18RDhx6EPQKjwe7n8BbIecFtCQG4CfHGaHuh7fdfq+y3LIA2vGS/o9ZBGVxIDi9hw==}
    engines: {node: '>=18'}
    cpu: [arm]
    os: [linux]

  '@esbuild/linux-ia32@0.27.2':
    resolution: {integrity: sha512-MJt5BRRSScPDwG2hLelYhAAKh9imjHK5+NE/tvnRLbIqUWa+0E9N4WNMjmp/kXXPHZGqPLxggwVhz7QP8CTR8w==}
    engines: {node: '>=18'}
    cpu: [ia32]
    os: [linux]

  '@esbuild/linux-loong64@0.27.2':
    resolution: {integrity: sha512-lugyF1atnAT463aO6KPshVCJK5NgRnU4yb3FUumyVz+cGvZbontBgzeGFO1nF+dPueHD367a2ZXe1NtUkAjOtg==}
    engines: {node: '>=18'}
    cpu: [loong64]
    os: [linux]

  '@esbuild/linux-mips64el@0.27.2':
    resolution: {integrity: sha512-nlP2I6ArEBewvJ2gjrrkESEZkB5mIoaTswuqNFRv/WYd+ATtUpe9Y09RnJvgvdag7he0OWgEZWhviS1OTOKixw==}
    engines: {node: '>=18'}
    cpu: [mips64el]
    os: [linux]

  '@esbuild/linux-ppc64@0.27.2':
    resolution: {integrity: sha512-C92gnpey7tUQONqg1n6dKVbx3vphKtTHJaNG2Ok9lGwbZil6DrfyecMsp9CrmXGQJmZ7iiVXvvZH6Ml5hL6XdQ==}
    engines: {node: '>=18'}
    cpu: [ppc64]
    os: [linux]

  '@esbuild/linux-riscv64@0.27.2':
    resolution: {integrity: sha512-B5BOmojNtUyN8AXlK0QJyvjEZkWwy/FKvakkTDCziX95AowLZKR6aCDhG7LeF7uMCXEJqwa8Bejz5LTPYm8AvA==}
    engines: {node: '>=18'}
    cpu: [riscv64]
    os: [linux]

  '@esbuild/linux-s390x@0.27.2':
    resolution: {integrity: sha512-p4bm9+wsPwup5Z8f4EpfN63qNagQ47Ua2znaqGH6bqLlmJ4bx97Y9JdqxgGZ6Y8xVTixUnEkoKSHcpRlDnNr5w==}
    engines: {node: '>=18'}
    cpu: [s390x]
    os: [linux]

  '@esbuild/linux-x64@0.27.2':
    resolution: {integrity: sha512-uwp2Tip5aPmH+NRUwTcfLb+W32WXjpFejTIOWZFw/v7/KnpCDKG66u4DLcurQpiYTiYwQ9B7KOeMJvLCu/OvbA==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [linux]

  '@esbuild/netbsd-arm64@0.27.2':
    resolution: {integrity: sha512-Kj6DiBlwXrPsCRDeRvGAUb/LNrBASrfqAIok+xB0LxK8CHqxZ037viF13ugfsIpePH93mX7xfJp97cyDuTZ3cw==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [netbsd]

  '@esbuild/netbsd-x64@0.27.2':
    resolution: {integrity: sha512-HwGDZ0VLVBY3Y+Nw0JexZy9o/nUAWq9MlV7cahpaXKW6TOzfVno3y3/M8Ga8u8Yr7GldLOov27xiCnqRZf0tCA==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [netbsd]

  '@esbuild/openbsd-arm64@0.27.2':
    resolution: {integrity: sha512-DNIHH2BPQ5551A7oSHD0CKbwIA/Ox7+78/AWkbS5QoRzaqlev2uFayfSxq68EkonB+IKjiuxBFoV8ESJy8bOHA==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [openbsd]

  '@esbuild/openbsd-x64@0.27.2':
    resolution: {integrity: sha512-/it7w9Nb7+0KFIzjalNJVR5bOzA9Vay+yIPLVHfIQYG/j+j9VTH84aNB8ExGKPU4AzfaEvN9/V4HV+F+vo8OEg==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [openbsd]

  '@esbuild/openharmony-arm64@0.27.2':
    resolution: {integrity: sha512-LRBbCmiU51IXfeXk59csuX/aSaToeG7w48nMwA6049Y4J4+VbWALAuXcs+qcD04rHDuSCSRKdmY63sruDS5qag==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [openharmony]

  '@esbuild/sunos-x64@0.27.2':
    resolution: {integrity: sha512-kMtx1yqJHTmqaqHPAzKCAkDaKsffmXkPHThSfRwZGyuqyIeBvf08KSsYXl+abf5HDAPMJIPnbBfXvP2ZC2TfHg==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [sunos]

  '@esbuild/win32-arm64@0.27.2':
    resolution: {integrity: sha512-Yaf78O/B3Kkh+nKABUF++bvJv5Ijoy9AN1ww904rOXZFLWVc5OLOfL56W+C8F9xn5JQZa3UX6m+IktJnIb1Jjg==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [win32]

  '@esbuild/win32-ia32@0.27.2':
    resolution: {integrity: sha512-Iuws0kxo4yusk7sw70Xa2E2imZU5HoixzxfGCdxwBdhiDgt9vX9VUCBhqcwY7/uh//78A1hMkkROMJq9l27oLQ==}
    engines: {node: '>=18'}
    cpu: [ia32]
    os: [win32]

  '@esbuild/win32-x64@0.27.2':
    resolution: {integrity: sha512-sRdU18mcKf7F+YgheI/zGf5alZatMUTKj/jNS6l744f9u3WFu4v7twcUI9vu4mknF4Y9aDlblIie0IM+5xxaqQ==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [win32]

  '@exodus/bytes@1.6.0':
    resolution: {integrity: sha512-y32mI9627q5LR/L8fLc4YyDRJQOi+jK0D9okzLilAdiU3F9we3zC7Y7CFrR/8vAvUyv7FgBAYcNHtvbmhKCFcw==}
    engines: {node: ^20.19.0 || ^22.12.0 || >=24.0.0}
    peerDependencies:
      '@exodus/crypto': ^1.0.0-rc.4
    peerDependenciesMeta:
      '@exodus/crypto':
        optional: true

  '@floating-ui/core@1.7.3':
    resolution: {integrity: sha512-sGnvb5dmrJaKEZ+LDIpguvdX3bDlEllmv4/ClQ9awcmCZrlx5jQyyMWFM5kBI+EyNOCDDiKk8il0zeuX3Zlg/w==}

  '@floating-ui/dom@1.7.4':
    resolution: {integrity: sha512-OOchDgh4F2CchOX94cRVqhvy7b3AFb+/rQXyswmzmGakRfkMgoWVjfnLWkRirfLEfuD4ysVW16eXzwt3jHIzKA==}

  '@floating-ui/react-dom@2.1.6':
    resolution: {integrity: sha512-4JX6rEatQEvlmgU80wZyq9RT96HZJa88q8hp0pBd+LrczeDI4o6uA2M+uvxngVHo4Ihr8uibXxH6+70zhAFrVw==}
    peerDependencies:
      react: '>=16.8.0'
      react-dom: '>=16.8.0'

  '@floating-ui/utils@0.2.10':
    resolution: {integrity: sha512-aGTxbpbg8/b5JfU1HXSrbH3wXZuLPJcNEcZQFMxLs3oSzgtVu6nFPkbbGGUvBcUjKV2YyB9Wxxabo+HEH9tcRQ==}

  '@hookform/resolvers@5.2.2':
    resolution: {integrity: sha512-A/IxlMLShx3KjV/HeTcTfaMxdwy690+L/ZADoeaTltLx+CVuzkeVIPuybK3jrRfw7YZnmdKsVVHAlEPIAEUNlA==}
    peerDependencies:
      react-hook-form: ^7.55.0

  '@jridgewell/gen-mapping@0.3.13':
    resolution: {integrity: sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==}

  '@jridgewell/remapping@2.3.5':
    resolution: {integrity: sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/sourcemap-codec@1.5.5':
    resolution: {integrity: sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==}

  '@jridgewell/trace-mapping@0.3.31':
    resolution: {integrity: sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==}

  '@napi-rs/wasm-runtime@1.1.0':
    resolution: {integrity: sha512-Fq6DJW+Bb5jaWE69/qOE0D1TUN9+6uWhCeZpdnSBk14pjLcCWR7Q8n49PTSPHazM37JqrsdpEthXy2xn6jWWiA==}

  '@notionhq/client@5.6.0':
    resolution: {integrity: sha512-eA3dO87vQJhFmR59utXH8r0nnulW7C7oTcxfp3bpiiTiv59luCkOkbbALCIa8TzBDdELoRD/zJEIfKcynyFR6Q==}
    engines: {node: '>=18'}

  '@oozcitak/dom@2.0.2':
    resolution: {integrity: sha512-GjpKhkSYC3Mj4+lfwEyI1dqnsKTgwGy48ytZEhm4A/xnH/8z9M3ZVXKr/YGQi3uCLs1AEBS+x5T2JPiueEDW8w==}
    engines: {node: '>=20.0'}

  '@oozcitak/infra@2.0.2':
    resolution: {integrity: sha512-2g+E7hoE2dgCz/APPOEK5s3rMhJvNxSMBrP+U+j1OWsIbtSpWxxlUjq1lU8RIsFJNYv7NMlnVsCuHcUzJW+8vA==}
    engines: {node: '>=20.0'}

  '@oozcitak/url@3.0.0':
    resolution: {integrity: sha512-ZKfET8Ak1wsLAiLWNfFkZc/BraDccuTJKR6svTYc7sVjbR+Iu0vtXdiDMY4o6jaFl5TW2TlS7jbLl4VovtAJWQ==}
    engines: {node: '>=20.0'}

  '@oozcitak/util@10.0.0':
    resolution: {integrity: sha512-hAX0pT/73190NLqBPPWSdBVGtbY6VOhWYK3qqHqtXQ1gK7kS2yz4+ivsN07hpJ6I3aeMtKP6J6npsEKOAzuTLA==}
    engines: {node: '>=20.0'}

  '@oxc-minify/binding-android-arm64@0.96.0':
    resolution: {integrity: sha512-lzeIEMu/v6Y+La5JSesq4hvyKtKBq84cgQpKYTYM/yGuNk2tfd5Ha31hnC+mTh48lp/5vZH+WBfjVUjjINCfug==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [android]

  '@oxc-minify/binding-darwin-arm64@0.96.0':
    resolution: {integrity: sha512-i0LkJAUXb4BeBFrJQbMKQPoxf8+cFEffDyLSb7NEzzKuPcH8qrVsnEItoOzeAdYam8Sr6qCHVwmBNEQzl7PWpw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [darwin]

  '@oxc-minify/binding-darwin-x64@0.96.0':
    resolution: {integrity: sha512-C5vI0WPR+KPIFAD5LMOJk2J8iiT+Nv65vDXmemzXEXouzfEOLYNqnW+u6NSsccpuZHHWAiLyPFkYvKFduveAUQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [darwin]

  '@oxc-minify/binding-freebsd-x64@0.96.0':
    resolution: {integrity: sha512-3//5DNx+xUjVBMLLk2sl6hfe4fwfENJtjVQUBXjxzwPuv8xgZUqASG4cRG3WqG5Qe8dV6SbCI4EgKQFjO4KCZA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [freebsd]

  '@oxc-minify/binding-linux-arm-gnueabihf@0.96.0':
    resolution: {integrity: sha512-WXChFKV7VdDk1NePDK1J31cpSvxACAVztJ7f7lJVYBTkH+iz5D0lCqPcE7a9eb7nC3xvz4yk7DM6dA9wlUQkQg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm]
    os: [linux]

  '@oxc-minify/binding-linux-arm-musleabihf@0.96.0':
    resolution: {integrity: sha512-7B18glYMX4Z/YoqgE3VRLs/2YhVLxlxNKSgrtsRpuR8xv58xca+hEhiFwZN1Rn+NSMZ29Z33LWD7iYWnqYFvRA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm]
    os: [linux]

  '@oxc-minify/binding-linux-arm64-gnu@0.96.0':
    resolution: {integrity: sha512-Yl+KcTldsEJNcaYxxonwAXZ2q3gxIzn3kXYQWgKWdaGIpNhOCWqF+KE5WLsldoh5Ro5SHtomvb8GM6cXrIBMog==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [linux]

  '@oxc-minify/binding-linux-arm64-musl@0.96.0':
    resolution: {integrity: sha512-rNqoFWOWaxwMmUY5fspd/h5HfvgUlA3sv9CUdA2MpnHFiyoJNovR7WU8tGh+Yn0qOAs0SNH0a05gIthHig14IA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [linux]

  '@oxc-minify/binding-linux-riscv64-gnu@0.96.0':
    resolution: {integrity: sha512-3paajIuzGnukHwSI3YBjYVqbd72pZd8NJxaayaNFR0AByIm8rmIT5RqFXbq8j2uhtpmNdZRXiu0em1zOmIScWA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [riscv64]
    os: [linux]

  '@oxc-minify/binding-linux-s390x-gnu@0.96.0':
    resolution: {integrity: sha512-9ESrpkB2XG0lQ89JlsxlZa86iQCOs+jkDZLl6O+u5wb7ynUy21bpJJ1joauCOSYIOUlSy3+LbtJLiqi7oSQt5Q==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [s390x]
    os: [linux]

  '@oxc-minify/binding-linux-x64-gnu@0.96.0':
    resolution: {integrity: sha512-UMM1jkns+p+WwwmdjC5giI3SfR2BCTga18x3C0cAu6vDVf4W37uTZeTtSIGmwatTBbgiq++Te24/DE0oCdm1iQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [linux]

  '@oxc-minify/binding-linux-x64-musl@0.96.0':
    resolution: {integrity: sha512-8b1naiC7MdP7xeMi7cQ5tb9W1rZAP9Qz/jBRqp1Y5EOZ1yhSGnf1QWuZ/0pCc+XiB9vEHXEY3Aki/H+86m2eOg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [linux]

  '@oxc-minify/binding-wasm32-wasi@0.96.0':
    resolution: {integrity: sha512-bjGDjkGzo3GWU9Vg2qiFUrfoo5QxojPNV/2RHTlbIB5FWkkV4ExVjsfyqihFiAuj0NXIZqd2SAiEq9htVd3RFw==}
    engines: {node: '>=14.0.0'}
    cpu: [wasm32]

  '@oxc-minify/binding-win32-arm64-msvc@0.96.0':
    resolution: {integrity: sha512-4L4DlHUT47qMWQuTyUghpncR3NZHWtxvd0G1KgSjVgXf+cXzFdWQCWZZtCU0yrmOoVCNUf4S04IFCJyAe+Ie7A==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [win32]

  '@oxc-minify/binding-win32-x64-msvc@0.96.0':
    resolution: {integrity: sha512-T2ijfqZLpV2bgGGocXV4SXTuMoouqN0asYTIm+7jVOLvT5XgDogf3ZvCmiEnSWmxl21+r5wHcs8voU2iUROXAg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [win32]

  '@oxc-transform/binding-android-arm64@0.96.0':
    resolution: {integrity: sha512-wOm+ZsqFvyZ7B9RefUMsj0zcXw77Z2pXA51nbSQyPXqr+g0/pDGxriZWP8Sdpz/e4AEaKPA9DvrwyOZxu7GRDQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [android]

  '@oxc-transform/binding-darwin-arm64@0.96.0':
    resolution: {integrity: sha512-td1sbcvzsyuoNRiNdIRodPXRtFFwxzPpC/6/yIUtRRhKn30XQcizxupIvQQVpJWWchxkphbBDh6UN+u+2CJ8Zw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [darwin]

  '@oxc-transform/binding-darwin-x64@0.96.0':
    resolution: {integrity: sha512-xgqxnqhPYH2NYkgbqtnCJfhbXvxIf/pnhF/ig5UBK8PYpCEWIP/cfLpQRQ9DcQnRfuxi7RMIF6LdmB1AiS6Fkg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [darwin]

  '@oxc-transform/binding-freebsd-x64@0.96.0':
    resolution: {integrity: sha512-1i67OXdl/rvSkcTXqDlh6qGRXYseEmf0rl/R+/i88scZ/o3A+FzlX56sThuaPzSSv9eVgesnoYUjIBJELFc1oA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [freebsd]

  '@oxc-transform/binding-linux-arm-gnueabihf@0.96.0':
    resolution: {integrity: sha512-9MJBs0SWODsqyzO3eAnacXgJ/sZu1xqinjEwBzkcZ3tQI8nKhMADOzu2NzbVWDWujeoC8DESXaO08tujvUru+Q==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm]
    os: [linux]

  '@oxc-transform/binding-linux-arm-musleabihf@0.96.0':
    resolution: {integrity: sha512-BQom57I2ScccixljNYh2Wy+5oVZtF1LXiiUPxSLtDHbsanpEvV/+kzCagQpTjk1BVzSQzOxfEUWjvL7mY53pRQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm]
    os: [linux]

  '@oxc-transform/binding-linux-arm64-gnu@0.96.0':
    resolution: {integrity: sha512-kaqvUzNu8LL4aBSXqcqGVLFG13GmJEplRI2+yqzkgAItxoP/LfFMdEIErlTWLGyBwd0OLiNMHrOvkcCQRWadVg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [linux]

  '@oxc-transform/binding-linux-arm64-musl@0.96.0':
    resolution: {integrity: sha512-EiG/L3wEkPgTm4p906ufptyblBgtiQWTubGg/JEw82f8uLRroayr5zhbUqx40EgH037a3SfJthIyLZi7XPRFJw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [linux]

  '@oxc-transform/binding-linux-riscv64-gnu@0.96.0':
    resolution: {integrity: sha512-r01CY6OxKGtVeYnvH4mGmtkQMlLkXdPWWNXwo5o7fE2s/fgZPMpqh8bAuXEhuMXipZRJrjxTk1+ZQ4KCHpMn3Q==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [riscv64]
    os: [linux]

  '@oxc-transform/binding-linux-s390x-gnu@0.96.0':
    resolution: {integrity: sha512-4djg2vYLGbVeS8YiA2K4RPPpZE4fxTGCX5g/bOMbCYyirDbmBAIop4eOAj8vOA9i1CcWbDtmp+PVJ1dSw7f3IQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [s390x]
    os: [linux]

  '@oxc-transform/binding-linux-x64-gnu@0.96.0':
    resolution: {integrity: sha512-f6pcWVz57Y8jXa2OS7cz3aRNuks34Q3j61+3nQ4xTE8H1KbalcEvHNmM92OEddaJ8QLs9YcE0kUC6eDTbY34+A==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [linux]

  '@oxc-transform/binding-linux-x64-musl@0.96.0':
    resolution: {integrity: sha512-NSiRtFvR7Pbhv3mWyPMkTK38czIjcnK0+K5STo3CuzZRVbX1TM17zGdHzKBUHZu7v6IQ6/XsQ3ELa1BlEHPGWQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [linux]

  '@oxc-transform/binding-wasm32-wasi@0.96.0':
    resolution: {integrity: sha512-A91ARLiuZHGN4hBds9s7bW3czUuLuHLsV+cz44iF9j8e1zX9m2hNGXf/acQRbg/zcFUXmjz5nmk8EkZyob876w==}
    engines: {node: '>=14.0.0'}
    cpu: [wasm32]

  '@oxc-transform/binding-win32-arm64-msvc@0.96.0':
    resolution: {integrity: sha512-IedJf40djKgDObomhYjdRAlmSYUEdfqX3A3M9KfUltl9AghTBBLkTzUMA7O09oo71vYf5TEhbFM7+Vn5vqw7AQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [win32]

  '@oxc-transform/binding-win32-x64-msvc@0.96.0':
    resolution: {integrity: sha512-0fI0P0W7bSO/GCP/N5dkmtB9vBqCA4ggo1WmXTnxNJVmFFOtcA1vYm1I9jl8fxo+sucW2WnlpnI4fjKdo3JKxA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [win32]

  '@radix-ui/number@1.1.1':
    resolution: {integrity: sha512-MkKCwxlXTgz6CFoJx3pCwn07GKp36+aZyu/u2Ln2VrA5DcdyCZkASEDBTd8x5whTQQL5CiYf4prXKLcgQdv29g==}

  '@radix-ui/primitive@1.1.3':
    resolution: {integrity: sha512-JTF99U/6XIjCBo0wqkU5sK10glYe27MRRsfwoiq5zzOEZLHU3A3KCMa5X/azekYRCJ0HlwI0crAXS/5dEHTzDg==}

  '@radix-ui/react-arrow@1.1.7':
    resolution: {integrity: sha512-F+M1tLhO+mlQaOWspE8Wstg+z6PwxwRd8oQ8IXceWz92kfAmalTRf0EjrouQeo7QssEPfCn05B4Ihs1K9WQ/7w==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-avatar@1.1.11':
    resolution: {integrity: sha512-0Qk603AHGV28BOBO34p7IgD5m+V5Sg/YovfayABkoDDBM5d3NCx0Mp4gGrjzLGes1jV5eNOE1r3itqOR33VC6Q==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-collection@1.1.7':
    resolution: {integrity: sha512-Fh9rGN0MoI4ZFUNyfFVNU4y9LUz93u9/0K+yLgA2bwRojxM8JU1DyvvMBabnZPBgMWREAJvU2jjVzq+LrFUglw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-compose-refs@1.1.2':
    resolution: {integrity: sha512-z4eqJvfiNnFMHIIvXP3CY57y2WJs5g2v3X0zm9mEJkrkNv4rDxu+sg9Jh8EkXyeqBkB7SOcboo9dMVqhyrACIg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-context@1.1.2':
    resolution: {integrity: sha512-jCi/QKUM2r1Ju5a3J64TH2A5SpKAgh0LpknyqdQ4m6DCV0xJ2HG1xARRwNGPQfi1SLdLWZ1OJz6F4OMBBNiGJA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-context@1.1.3':
    resolution: {integrity: sha512-ieIFACdMpYfMEjF0rEf5KLvfVyIkOz6PDGyNnP+u+4xQ6jny3VCgA4OgXOwNx2aUkxn8zx9fiVcM8CfFYv9Lxw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-dialog@1.1.15':
    resolution: {integrity: sha512-TCglVRtzlffRNxRMEyR36DGBLJpeusFcgMVD9PZEzAKnUs1lKCgX5u9BmC2Yg+LL9MgZDugFFs1Vl+Jp4t/PGw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-direction@1.1.1':
    resolution: {integrity: sha512-1UEWRX6jnOA2y4H5WczZ44gOOjTEmlqv1uNW4GAJEO5+bauCBhv8snY65Iw5/VOS/ghKN9gr2KjnLKxrsvoMVw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-dismissable-layer@1.1.11':
    resolution: {integrity: sha512-Nqcp+t5cTB8BinFkZgXiMJniQH0PsUt2k51FUhbdfeKvc4ACcG2uQniY/8+h1Yv6Kza4Q7lD7PQV0z0oicE0Mg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-dropdown-menu@2.1.16':
    resolution: {integrity: sha512-1PLGQEynI/3OX/ftV54COn+3Sud/Mn8vALg2rWnBLnRaGtJDduNW/22XjlGgPdpcIbiQxjKtb7BkcjP00nqfJw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-focus-guards@1.1.3':
    resolution: {integrity: sha512-0rFg/Rj2Q62NCm62jZw0QX7a3sz6QCQU0LpZdNrJX8byRGaGVTqbrW9jAoIAHyMQqsNpeZ81YgSizOt5WXq0Pw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-focus-scope@1.1.7':
    resolution: {integrity: sha512-t2ODlkXBQyn7jkl6TNaw/MtVEVvIGelJDCG41Okq/KwUsJBwQ4XVZsHAVUkK4mBv3ewiAS3PGuUWuY2BoK4ZUw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-id@1.1.1':
    resolution: {integrity: sha512-kGkGegYIdQsOb4XjsfM97rXsiHaBwco+hFI66oO4s9LU+PLAC5oJ7khdOVFxkhsmlbpUqDAvXw11CluXP+jkHg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-label@2.1.8':
    resolution: {integrity: sha512-FmXs37I6hSBVDlO4y764TNz1rLgKwjJMQ0EGte6F3Cb3f4bIuHB/iLa/8I9VKkmOy+gNHq8rql3j686ACVV21A==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-menu@2.1.16':
    resolution: {integrity: sha512-72F2T+PLlphrqLcAotYPp0uJMr5SjP5SL01wfEspJbru5Zs5vQaSHb4VB3ZMJPimgHHCHG7gMOeOB9H3Hdmtxg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-popper@1.2.8':
    resolution: {integrity: sha512-0NJQ4LFFUuWkE7Oxf0htBKS6zLkkjBH+hM1uk7Ng705ReR8m/uelduy1DBo0PyBXPKVnBA6YBlU94MBGXrSBCw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-portal@1.1.9':
    resolution: {integrity: sha512-bpIxvq03if6UNwXZ+HTK71JLh4APvnXntDc6XOX8UVq4XQOVl7lwok0AvIl+b8zgCw3fSaVTZMpAPPagXbKmHQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-presence@1.1.5':
    resolution: {integrity: sha512-/jfEwNDdQVBCNvjkGit4h6pMOzq8bHkopq458dPt2lMjx+eBQUohZNG9A7DtO/O5ukSbxuaNGXMjHicgwy6rQQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-primitive@2.1.3':
    resolution: {integrity: sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-primitive@2.1.4':
    resolution: {integrity: sha512-9hQc4+GNVtJAIEPEqlYqW5RiYdrr8ea5XQ0ZOnD6fgru+83kqT15mq2OCcbe8KnjRZl5vF3ks69AKz3kh1jrhg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-roving-focus@1.1.11':
    resolution: {integrity: sha512-7A6S9jSgm/S+7MdtNDSb+IU859vQqJ/QAtcYQcfFC6W8RS4IxIZDldLR0xqCFZ6DCyrQLjLPsxtTNch5jVA4lA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-select@2.2.6':
    resolution: {integrity: sha512-I30RydO+bnn2PQztvo25tswPH+wFBjehVGtmagkU78yMdwTwVf12wnAOF+AeP8S2N8xD+5UPbGhkUfPyvT+mwQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-slot@1.2.3':
    resolution: {integrity: sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-slot@1.2.4':
    resolution: {integrity: sha512-Jl+bCv8HxKnlTLVrcDE8zTMJ09R9/ukw4qBs/oZClOfoQk/cOTbDn+NceXfV7j09YPVQUryJPHurafcSg6EVKA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-tabs@1.1.13':
    resolution: {integrity: sha512-7xdcatg7/U+7+Udyoj2zodtI9H/IIopqo+YOIcZOq1nJwXWBZ9p8xiu5llXlekDbZkca79a/fozEYQXIA4sW6A==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-toast@1.2.15':
    resolution: {integrity: sha512-3OSz3TacUWy4WtOXV38DggwxoqJK4+eDkNMl5Z/MJZaoUPaP4/9lf81xXMe1I2ReTAptverZUpbPY4wWwWyL5g==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-use-callback-ref@1.1.1':
    resolution: {integrity: sha512-FkBMwD+qbGQeMu1cOHnuGB6x4yzPjho8ap5WtbEJ26umhgqVXbhekKUQO+hZEL1vU92a3wHwdp0HAcqAUF5iDg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-controllable-state@1.2.2':
    resolution: {integrity: sha512-BjasUjixPFdS+NKkypcyyN5Pmg83Olst0+c6vGov0diwTEo6mgdqVR6hxcEgFuh4QrAs7Rc+9KuGJ9TVCj0Zzg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-effect-event@0.0.2':
    resolution: {integrity: sha512-Qp8WbZOBe+blgpuUT+lw2xheLP8q0oatc9UpmiemEICxGvFLYmHm9QowVZGHtJlGbS6A6yJ3iViad/2cVjnOiA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-escape-keydown@1.1.1':
    resolution: {integrity: sha512-Il0+boE7w/XebUHyBjroE+DbByORGR9KKmITzbR7MyQ4akpORYP/ZmbhAr0DG7RmmBqoOnZdy2QlvajJ2QA59g==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-is-hydrated@0.1.0':
    resolution: {integrity: sha512-U+UORVEq+cTnRIaostJv9AGdV3G6Y+zbVd+12e18jQ5A3c0xL03IhnHuiU4UV69wolOQp5GfR58NW/EgdQhwOA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-layout-effect@1.1.1':
    resolution: {integrity: sha512-RbJRS4UWQFkzHTTwVymMTUv8EqYhOp8dOOviLj2ugtTiXRaRQS7GLGxZTLL1jWhMeoSCf5zmcZkqTl9IiYfXcQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-previous@1.1.1':
    resolution: {integrity: sha512-2dHfToCj/pzca2Ck724OZ5L0EVrr3eHRNsG/b3xQJLA2hZpVCS99bLAX+hm1IHXDEnzU6by5z/5MIY794/a8NQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-rect@1.1.1':
    resolution: {integrity: sha512-QTYuDesS0VtuHNNvMh+CjlKJ4LJickCMUAqjlE3+j8w+RlRpwyX3apEQKGFzbZGdo7XNG1tXa+bQqIE7HIXT2w==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-size@1.1.1':
    resolution: {integrity: sha512-ewrXRDTAqAXlkl6t/fkXWNAhFX9I+CkKlw6zjEwk86RSPKwZr3xpBRso655aqYafwtnbpHLj6toFzmd6xdVptQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-visually-hidden@1.2.3':
    resolution: {integrity: sha512-pzJq12tEaaIhqjbzpCuv/OypJY/BPavOofm+dbab+MHLajy277+1lLm6JFcGgF5eskJ6mquGirhXY2GD/8u8Ug==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/rect@1.1.1':
    resolution: {integrity: sha512-HPwpGIzkl28mWyZqG52jiqDJ12waP11Pa1lGoiyUkIEuMLBP0oeK/C89esbXrxsky5we7dfd8U58nm0SgAWpVw==}

  '@rolldown/pluginutils@1.0.0-beta.40':
    resolution: {integrity: sha512-s3GeJKSQOwBlzdUrj4ISjJj5SfSh+aqn0wjOar4Bx95iV1ETI7F6S/5hLcfAxZ9kXDcyrAkxPlqmd1ZITttf+w==}

  '@rolldown/pluginutils@1.0.0-beta.53':
    resolution: {integrity: sha512-vENRlFU4YbrwVqNDZ7fLvy+JR1CRkyr01jhSiDpE1u6py3OMzQfztQU2jxykW3ALNxO4kSlqIDeYyD0Y9RcQeQ==}

  '@rollup/rollup-android-arm-eabi@4.54.0':
    resolution: {integrity: sha512-OywsdRHrFvCdvsewAInDKCNyR3laPA2mc9bRYJ6LBp5IyvF3fvXbbNR0bSzHlZVFtn6E0xw2oZlyjg4rKCVcng==}
    cpu: [arm]
    os: [android]

  '@rollup/rollup-android-arm64@4.54.0':
    resolution: {integrity: sha512-Skx39Uv+u7H224Af+bDgNinitlmHyQX1K/atIA32JP3JQw6hVODX5tkbi2zof/E69M1qH2UoN3Xdxgs90mmNYw==}
    cpu: [arm64]
    os: [android]

  '@rollup/rollup-darwin-arm64@4.54.0':
    resolution: {integrity: sha512-k43D4qta/+6Fq+nCDhhv9yP2HdeKeP56QrUUTW7E6PhZP1US6NDqpJj4MY0jBHlJivVJD5P8NxrjuobZBJTCRw==}
    cpu: [arm64]
    os: [darwin]

  '@rollup/rollup-darwin-x64@4.54.0':
    resolution: {integrity: sha512-cOo7biqwkpawslEfox5Vs8/qj83M/aZCSSNIWpVzfU2CYHa2G3P1UN5WF01RdTHSgCkri7XOlTdtk17BezlV3A==}
    cpu: [x64]
    os: [darwin]

  '@rollup/rollup-freebsd-arm64@4.54.0':
    resolution: {integrity: sha512-miSvuFkmvFbgJ1BevMa4CPCFt5MPGw094knM64W9I0giUIMMmRYcGW/JWZDriaw/k1kOBtsWh1z6nIFV1vPNtA==}
    cpu: [arm64]
    os: [freebsd]

  '@rollup/rollup-freebsd-x64@4.54.0':
    resolution: {integrity: sha512-KGXIs55+b/ZfZsq9aR026tmr/+7tq6VG6MsnrvF4H8VhwflTIuYh+LFUlIsRdQSgrgmtM3fVATzEAj4hBQlaqQ==}
    cpu: [x64]
    os: [freebsd]

  '@rollup/rollup-linux-arm-gnueabihf@4.54.0':
    resolution: {integrity: sha512-EHMUcDwhtdRGlXZsGSIuXSYwD5kOT9NVnx9sqzYiwAc91wfYOE1g1djOEDseZJKKqtHAHGwnGPQu3kytmfaXLQ==}
    cpu: [arm]
    os: [linux]

  '@rollup/rollup-linux-arm-musleabihf@4.54.0':
    resolution: {integrity: sha512-+pBrqEjaakN2ySv5RVrj/qLytYhPKEUwk+e3SFU5jTLHIcAtqh2rLrd/OkbNuHJpsBgxsD8ccJt5ga/SeG0JmA==}
    cpu: [arm]
    os: [linux]

  '@rollup/rollup-linux-arm64-gnu@4.54.0':
    resolution: {integrity: sha512-NSqc7rE9wuUaRBsBp5ckQ5CVz5aIRKCwsoa6WMF7G01sX3/qHUw/z4pv+D+ahL1EIKy6Enpcnz1RY8pf7bjwng==}
    cpu: [arm64]
    os: [linux]

  '@rollup/rollup-linux-arm64-musl@4.54.0':
    resolution: {integrity: sha512-gr5vDbg3Bakga5kbdpqx81m2n9IX8M6gIMlQQIXiLTNeQW6CucvuInJ91EuCJ/JYvc+rcLLsDFcfAD1K7fMofg==}
    cpu: [arm64]
    os: [linux]

  '@rollup/rollup-linux-loong64-gnu@4.54.0':
    resolution: {integrity: sha512-gsrtB1NA3ZYj2vq0Rzkylo9ylCtW/PhpLEivlgWe0bpgtX5+9j9EZa0wtZiCjgu6zmSeZWyI/e2YRX1URozpIw==}
    cpu: [loong64]
    os: [linux]

  '@rollup/rollup-linux-ppc64-gnu@4.54.0':
    resolution: {integrity: sha512-y3qNOfTBStmFNq+t4s7Tmc9hW2ENtPg8FeUD/VShI7rKxNW7O4fFeaYbMsd3tpFlIg1Q8IapFgy7Q9i2BqeBvA==}
    cpu: [ppc64]
    os: [linux]

  '@rollup/rollup-linux-riscv64-gnu@4.54.0':
    resolution: {integrity: sha512-89sepv7h2lIVPsFma8iwmccN7Yjjtgz0Rj/Ou6fEqg3HDhpCa+Et+YSufy27i6b0Wav69Qv4WBNl3Rs6pwhebQ==}
    cpu: [riscv64]
    os: [linux]

  '@rollup/rollup-linux-riscv64-musl@4.54.0':
    resolution: {integrity: sha512-ZcU77ieh0M2Q8Ur7D5X7KvK+UxbXeDHwiOt/CPSBTI1fBmeDMivW0dPkdqkT4rOgDjrDDBUed9x4EgraIKoR2A==}
    cpu: [riscv64]
    os: [linux]

  '@rollup/rollup-linux-s390x-gnu@4.54.0':
    resolution: {integrity: sha512-2AdWy5RdDF5+4YfG/YesGDDtbyJlC9LHmL6rZw6FurBJ5n4vFGupsOBGfwMRjBYH7qRQowT8D/U4LoSvVwOhSQ==}
    cpu: [s390x]
    os: [linux]

  '@rollup/rollup-linux-x64-gnu@4.54.0':
    resolution: {integrity: sha512-WGt5J8Ij/rvyqpFexxk3ffKqqbLf9AqrTBbWDk7ApGUzaIs6V+s2s84kAxklFwmMF/vBNGrVdYgbblCOFFezMQ==}
    cpu: [x64]
    os: [linux]

  '@rollup/rollup-linux-x64-musl@4.54.0':
    resolution: {integrity: sha512-JzQmb38ATzHjxlPHuTH6tE7ojnMKM2kYNzt44LO/jJi8BpceEC8QuXYA908n8r3CNuG/B3BV8VR3Hi1rYtmPiw==}
    cpu: [x64]
    os: [linux]

  '@rollup/rollup-openharmony-arm64@4.54.0':
    resolution: {integrity: sha512-huT3fd0iC7jigGh7n3q/+lfPcXxBi+om/Rs3yiFxjvSxbSB6aohDFXbWvlspaqjeOh+hx7DDHS+5Es5qRkWkZg==}
    cpu: [arm64]
    os: [openharmony]

  '@rollup/rollup-win32-arm64-msvc@4.54.0':
    resolution: {integrity: sha512-c2V0W1bsKIKfbLMBu/WGBz6Yci8nJ/ZJdheE0EwB73N3MvHYKiKGs3mVilX4Gs70eGeDaMqEob25Tw2Gb9Nqyw==}
    cpu: [arm64]
    os: [win32]

  '@rollup/rollup-win32-ia32-msvc@4.54.0':
    resolution: {integrity: sha512-woEHgqQqDCkAzrDhvDipnSirm5vxUXtSKDYTVpZG3nUdW/VVB5VdCYA2iReSj/u3yCZzXID4kuKG7OynPnB3WQ==}
    cpu: [ia32]
    os: [win32]

  '@rollup/rollup-win32-x64-gnu@4.54.0':
    resolution: {integrity: sha512-dzAc53LOuFvHwbCEOS0rPbXp6SIhAf2txMP5p6mGyOXXw5mWY8NGGbPMPrs4P1WItkfApDathBj/NzMLUZ9rtQ==}
    cpu: [x64]
    os: [win32]

  '@rollup/rollup-win32-x64-msvc@4.54.0':
    resolution: {integrity: sha512-hYT5d3YNdSh3mbCU1gwQyPgQd3T2ne0A3KG8KSBdav5TiBg6eInVmV+TeR5uHufiIgSFg0XsOWGW5/RhNcSvPg==}
    cpu: [x64]
    os: [win32]

  '@solid-primitives/event-listener@2.4.3':
    resolution: {integrity: sha512-h4VqkYFv6Gf+L7SQj+Y6puigL/5DIi7x5q07VZET7AWcS+9/G3WfIE9WheniHWJs51OEkRB43w6lDys5YeFceg==}
    peerDependencies:
      solid-js: ^1.6.12

  '@solid-primitives/keyboard@1.3.3':
    resolution: {integrity: sha512-9dQHTTgLBqyAI7aavtO+HnpTVJgWQA1ghBSrmLtMu1SMxLPDuLfuNr+Tk5udb4AL4Ojg7h9JrKOGEEDqsJXWJA==}
    peerDependencies:
      solid-js: ^1.6.12

  '@solid-primitives/resize-observer@2.1.3':
    resolution: {integrity: sha512-zBLje5E06TgOg93S7rGPldmhDnouNGhvfZVKOp+oG2XU8snA+GoCSSCz1M+jpNAg5Ek2EakU5UVQqL152WmdXQ==}
    peerDependencies:
      solid-js: ^1.6.12

  '@solid-primitives/rootless@1.5.2':
    resolution: {integrity: sha512-9HULb0QAzL2r47CCad0M+NKFtQ+LrGGNHZfteX/ThdGvKIg2o2GYhBooZubTCd/RTu2l2+Nw4s+dEfiDGvdrrQ==}
    peerDependencies:
      solid-js: ^1.6.12

  '@solid-primitives/static-store@0.1.2':
    resolution: {integrity: sha512-ReK+5O38lJ7fT+L6mUFvUr6igFwHBESZF+2Ug842s7fvlVeBdIVEdTCErygff6w7uR6+jrr7J8jQo+cYrEq4Iw==}
    peerDependencies:
      solid-js: ^1.6.12

  '@solid-primitives/utils@6.3.2':
    resolution: {integrity: sha512-hZ/M/qr25QOCcwDPOHtGjxTD8w2mNyVAYvcfgwzBHq2RwNqHNdDNsMZYap20+ruRwW4A3Cdkczyoz0TSxLCAPQ==}
    peerDependencies:
      solid-js: ^1.6.12

  '@standard-schema/utils@0.3.0':
    resolution: {integrity: sha512-e7Mew686owMaPJVNNLs55PUvgz371nKgwsc4vxE49zsODpJEnxgxRo2y/OKrqueavXgZNMDVj3DdHFlaSAeU8g==}

  '@tailwindcss/node@4.1.18':
    resolution: {integrity: sha512-DoR7U1P7iYhw16qJ49fgXUlry1t4CpXeErJHnQ44JgTSKMaZUdf17cfn5mHchfJ4KRBZRFA/Coo+MUF5+gOaCQ==}

  '@tailwindcss/oxide-android-arm64@4.1.18':
    resolution: {integrity: sha512-dJHz7+Ugr9U/diKJA0W6N/6/cjI+ZTAoxPf9Iz9BFRF2GzEX8IvXxFIi/dZBloVJX/MZGvRuFA9rqwdiIEZQ0Q==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [android]

  '@tailwindcss/oxide-darwin-arm64@4.1.18':
    resolution: {integrity: sha512-Gc2q4Qhs660bhjyBSKgq6BYvwDz4G+BuyJ5H1xfhmDR3D8HnHCmT/BSkvSL0vQLy/nkMLY20PQ2OoYMO15Jd0A==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [darwin]

  '@tailwindcss/oxide-darwin-x64@4.1.18':
    resolution: {integrity: sha512-FL5oxr2xQsFrc3X9o1fjHKBYBMD1QZNyc1Xzw/h5Qu4XnEBi3dZn96HcHm41c/euGV+GRiXFfh2hUCyKi/e+yw==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [darwin]

  '@tailwindcss/oxide-freebsd-x64@4.1.18':
    resolution: {integrity: sha512-Fj+RHgu5bDodmV1dM9yAxlfJwkkWvLiRjbhuO2LEtwtlYlBgiAT4x/j5wQr1tC3SANAgD+0YcmWVrj8R9trVMA==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [freebsd]

  '@tailwindcss/oxide-linux-arm-gnueabihf@4.1.18':
    resolution: {integrity: sha512-Fp+Wzk/Ws4dZn+LV2Nqx3IilnhH51YZoRaYHQsVq3RQvEl+71VGKFpkfHrLM/Li+kt5c0DJe/bHXK1eHgDmdiA==}
    engines: {node: '>= 10'}
    cpu: [arm]
    os: [linux]

  '@tailwindcss/oxide-linux-arm64-gnu@4.1.18':
    resolution: {integrity: sha512-S0n3jboLysNbh55Vrt7pk9wgpyTTPD0fdQeh7wQfMqLPM/Hrxi+dVsLsPrycQjGKEQk85Kgbx+6+QnYNiHalnw==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@tailwindcss/oxide-linux-arm64-musl@4.1.18':
    resolution: {integrity: sha512-1px92582HkPQlaaCkdRcio71p8bc8i/ap5807tPRDK/uw953cauQBT8c5tVGkOwrHMfc2Yh6UuxaH4vtTjGvHg==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@tailwindcss/oxide-linux-x64-gnu@4.1.18':
    resolution: {integrity: sha512-v3gyT0ivkfBLoZGF9LyHmts0Isc8jHZyVcbzio6Wpzifg/+5ZJpDiRiUhDLkcr7f/r38SWNe7ucxmGW3j3Kb/g==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@tailwindcss/oxide-linux-x64-musl@4.1.18':
    resolution: {integrity: sha512-bhJ2y2OQNlcRwwgOAGMY0xTFStt4/wyU6pvI6LSuZpRgKQwxTec0/3Scu91O8ir7qCR3AuepQKLU/kX99FouqQ==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@tailwindcss/oxide-wasm32-wasi@4.1.18':
    resolution: {integrity: sha512-LffYTvPjODiP6PT16oNeUQJzNVyJl1cjIebq/rWWBF+3eDst5JGEFSc5cWxyRCJ0Mxl+KyIkqRxk1XPEs9x8TA==}
    engines: {node: '>=14.0.0'}
    cpu: [wasm32]
    bundledDependencies:
      - '@napi-rs/wasm-runtime'
      - '@emnapi/core'
      - '@emnapi/runtime'
      - '@tybys/wasm-util'
      - '@emnapi/wasi-threads'
      - tslib

  '@tailwindcss/oxide-win32-arm64-msvc@4.1.18':
    resolution: {integrity: sha512-HjSA7mr9HmC8fu6bdsZvZ+dhjyGCLdotjVOgLA2vEqxEBZaQo9YTX4kwgEvPCpRh8o4uWc4J/wEoFzhEmjvPbA==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [win32]

  '@tailwindcss/oxide-win32-x64-msvc@4.1.18':
    resolution: {integrity: sha512-bJWbyYpUlqamC8dpR7pfjA0I7vdF6t5VpUGMWRkXVE3AXgIZjYUYAK7II1GNaxR8J1SSrSrppRar8G++JekE3Q==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [win32]

  '@tailwindcss/oxide@4.1.18':
    resolution: {integrity: sha512-EgCR5tTS5bUSKQgzeMClT6iCY3ToqE1y+ZB0AKldj809QXk1Y+3jB0upOYZrn9aGIzPtUsP7sX4QQ4XtjBB95A==}
    engines: {node: '>= 10'}

  '@tailwindcss/vite@4.1.18':
    resolution: {integrity: sha512-jVA+/UpKL1vRLg6Hkao5jldawNmRo7mQYrZtNHMIVpLfLhDml5nMRUo/8MwoX2vNXvnaXNNMedrMfMugAVX1nA==}
    peerDependencies:
      vite: ^5.2.0 || ^6 || ^7

  '@tanstack/devtools-client@0.0.3':
    resolution: {integrity: sha512-kl0r6N5iIL3t9gGDRAv55VRM3UIyMKVH83esRGq7xBjYsRLe/BeCIN2HqrlJkObUXQMKhy7i8ejuGOn+bDqDBw==}
    engines: {node: '>=18'}

  '@tanstack/devtools-client@0.0.5':
    resolution: {integrity: sha512-hsNDE3iu4frt9cC2ppn1mNRnLKo2uc1/1hXAyY9z4UYb+o40M2clFAhiFoo4HngjfGJDV3x18KVVIq7W4Un+zA==}
    engines: {node: '>=18'}

  '@tanstack/devtools-event-bus@0.3.3':
    resolution: {integrity: sha512-lWl88uLAz7ZhwNdLH6A3tBOSEuBCrvnY9Fzr5JPdzJRFdM5ZFdyNWz1Bf5l/F3GU57VodrN0KCFi9OA26H5Kpg==}
    engines: {node: '>=18'}

  '@tanstack/devtools-event-client@0.3.5':
    resolution: {integrity: sha512-RL1f5ZlfZMpghrCIdzl6mLOFLTuhqmPNblZgBaeKfdtk5rfbjykurv+VfYydOFXj0vxVIoA2d/zT7xfD7Ph8fw==}
    engines: {node: '>=18'}

  '@tanstack/devtools-event-client@0.4.0':
    resolution: {integrity: sha512-RPfGuk2bDZgcu9bAJodvO2lnZeHuz4/71HjZ0bGb/SPg8+lyTA+RLSKQvo7fSmPSi8/vcH3aKQ8EM9ywf1olaw==}
    engines: {node: '>=18'}

  '@tanstack/devtools-ui@0.4.4':
    resolution: {integrity: sha512-5xHXFyX3nom0UaNfiOM92o6ziaHjGo3mcSGe2HD5Xs8dWRZNpdZ0Smd0B9ddEhy0oB+gXyMzZgUJb9DmrZV0Mg==}
    engines: {node: '>=18'}
    peerDependencies:
      solid-js: '>=1.9.7'

  '@tanstack/devtools-vite@0.3.12':
    resolution: {integrity: sha512-fGJgu4xUhKmGk+a+/aHD8l5HKVk6+ObA+6D3YC3xCXbai/YmaGhztqcZf1tKUqjZyYyQLHsjqmKzvJgVpQP1jw==}
    engines: {node: '>=18'}
    peerDependencies:
      vite: ^6.0.0 || ^7.0.0

  '@tanstack/devtools@0.7.0':
    resolution: {integrity: sha512-AlAoCqJhWLg9GBEaoV1g/j+X/WA1aJSWOsekxeuZpYeS2hdVuKAjj04KQLUMJhtLfNl2s2E+TCj7ZRtWyY3U4w==}
    engines: {node: '>=18'}
    peerDependencies:
      solid-js: '>=1.9.7'

  '@tanstack/form-core@1.27.6':
    resolution: {integrity: sha512-1C4PUpOcCpivddKxtAeqdeqncxnPKiPpTVDRknDExCba+6zCsAjxgL+p3qYA3hu+EFyUAdW71rU+uqYbEa7qqA==}

  '@tanstack/history@1.141.0':
    resolution: {integrity: sha512-LS54XNyxyTs5m/pl1lkwlg7uZM3lvsv2FIIV1rsJgnfwVCnI+n4ZGZ2CcjNT13BPu/3hPP+iHmliBSscJxW5FQ==}
    engines: {node: '>=12'}

  '@tanstack/pacer-lite@0.1.1':
    resolution: {integrity: sha512-y/xtNPNt/YeyoVxE/JCx+T7yjEzpezmbb+toK8DDD1P4m7Kzs5YR956+7OKexG3f8aXgC3rLZl7b1V+yNUSy5w==}
    engines: {node: '>=18'}

  '@tanstack/query-core@5.90.12':
    resolution: {integrity: sha512-T1/8t5DhV/SisWjDnaiU2drl6ySvsHj1bHBCWNXd+/T+Hh1cf6JodyEYMd5sgwm+b/mETT4EV3H+zCVczCU5hg==}

  '@tanstack/react-devtools@0.7.11':
    resolution: {integrity: sha512-a2Lmz8x+JoDrsU6f7uKRcyyY+k8mA/n5mb9h7XJ3Fz/y3+sPV9t7vAW1s5lyNkQyyDt6V1Oim99faLthoJSxMw==}
    engines: {node: '>=18'}
    peerDependencies:
      '@types/react': '>=16.8'
      '@types/react-dom': '>=16.8'
      react: '>=16.8'
      react-dom: '>=16.8'

  '@tanstack/react-form@1.27.6':
    resolution: {integrity: sha512-kq/68CKbCxK6TkFnGihtQ3qdrD5GPrVjfhkcqMFH/+X9jYOZDai52864T4997lC3nSEKFbUhkkXlaIy/wCSuNQ==}
    peerDependencies:
      '@tanstack/react-start': '*'
      react: ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@tanstack/react-start':
        optional: true

  '@tanstack/react-query@5.90.12':
    resolution: {integrity: sha512-graRZspg7EoEaw0a8faiUASCyJrqjKPdqJ9EwuDRUF9mEYJ1YPczI9H+/agJ0mOJkPCJDk0lsz5QTrLZ/jQ2rg==}
    peerDependencies:
      react: ^18 || ^19

  '@tanstack/react-router-devtools@1.144.0':
    resolution: {integrity: sha512-nstjZvZbOM4U0/Hzi82rtsP1DsR2tfigBidK+WuaDRVVstBsnwVor3DQXTGY5CcfgIiMI3eKzI17VOy3SQDDoQ==}
    engines: {node: '>=12'}
    peerDependencies:
      '@tanstack/react-router': ^1.144.0
      '@tanstack/router-core': ^1.144.0
      react: '>=18.0.0 || >=19.0.0'
      react-dom: '>=18.0.0 || >=19.0.0'
    peerDependenciesMeta:
      '@tanstack/router-core':
        optional: true

  '@tanstack/react-router-ssr-query@1.144.0':
    resolution: {integrity: sha512-re83VQxo586dSCmo8qUQvOwRGZljElN1/7pkYVYxaRRhtW2hrVVnr7Z2B6UF7XHp6FtScU7QAvMjPj8i0mTm6g==}
    engines: {node: '>=12'}
    peerDependencies:
      '@tanstack/query-core': '>=5.90.0'
      '@tanstack/react-query': '>=5.90.0'
      '@tanstack/react-router': '>=1.127.0'
      react: '>=18.0.0 || >=19.0.0'
      react-dom: '>=18.0.0 || >=19.0.0'

  '@tanstack/react-router@1.144.0':
    resolution: {integrity: sha512-GmRyIGmHtGj3VLTHXepIwXAxTcHyL5W7Vw7O1CnVEtFxQQWKMVOnWgI7tPY6FhlNwMKVb3n0mPFWz9KMYyd2GA==}
    engines: {node: '>=12'}
    peerDependencies:
      react: '>=18.0.0 || >=19.0.0'
      react-dom: '>=18.0.0 || >=19.0.0'

  '@tanstack/react-start-client@1.145.0':
    resolution: {integrity: sha512-UC/+ONaOzuFnlHbOEudYS+AHOrcwAJaqbnfh9zZ5pUtTkJToBawW3YabDbMnS3o6lEiKggc8uGpsiCglUJrBcA==}
    engines: {node: '>=22.12.0'}
    peerDependencies:
      react: '>=18.0.0 || >=19.0.0'
      react-dom: '>=18.0.0 || >=19.0.0'

  '@tanstack/react-start-server@1.145.0':
    resolution: {integrity: sha512-22xO7iNt0lKof7ZT4fkePFuVvYLyGx9pEpTZwUpHpag0MCOnLtSblAvQDeT5j48sfDg3jAMLCujFeV0BkcI21Q==}
    engines: {node: '>=22.12.0'}
    peerDependencies:
      react: '>=18.0.0 || >=19.0.0'
      react-dom: '>=18.0.0 || >=19.0.0'

  '@tanstack/react-start@1.145.0':
    resolution: {integrity: sha512-grGGR5gNbq54QGunAslWnKVPNmTU1UlPLXCJQlGyVa1i1YA6QiVXO9PlOZgVlunXcvazPHd2nEmiCOytBOL8fw==}
    engines: {node: '>=22.12.0'}
    peerDependencies:
      react: '>=18.0.0 || >=19.0.0'
      react-dom: '>=18.0.0 || >=19.0.0'
      vite: '>=7.0.0'

  '@tanstack/react-store@0.8.0':
    resolution: {integrity: sha512-1vG9beLIuB7q69skxK9r5xiLN3ztzIPfSQSs0GfeqWGO2tGIyInZx0x1COhpx97RKaONSoAb8C3dxacWksm1ow==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
      react-dom: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0

  '@tanstack/react-table@8.21.3':
    resolution: {integrity: sha512-5nNMTSETP4ykGegmVkhjcS8tTLW6Vl4axfEGQN3v0zdHYbK4UfoqfPChclTrJ4EoK9QynqAu9oUf8VEmrpZ5Ww==}
    engines: {node: '>=12'}
    peerDependencies:
      react: '>=16.8'
      react-dom: '>=16.8'

  '@tanstack/react-virtual@3.13.13':
    resolution: {integrity: sha512-4o6oPMDvQv+9gMi8rE6gWmsOjtUZUYIJHv7EB+GblyYdi8U6OqLl8rhHWIUZSL1dUU2dPwTdTgybCKf9EjIrQg==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
      react-dom: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0

  '@tanstack/router-core@1.144.0':
    resolution: {integrity: sha512-6oVERtK9XDHCP4XojgHsdHO56ZSj11YaWjF5g/zw39LhyA6Lx+/X86AEIHO4y0BUrMQaJfcjdAQMVSAs6Vjtdg==}
    engines: {node: '>=12'}

  '@tanstack/router-devtools-core@1.144.0':
    resolution: {integrity: sha512-rbpQn1aHUtcfY3U3SyJqOZRqDu0a2uPK+TE2CH50HieJApmCuNKj5RsjVQYHgwiFFvR0w0LUmueTnl2X2hiWTg==}
    engines: {node: '>=12'}
    peerDependencies:
      '@tanstack/router-core': ^1.144.0
      csstype: ^3.0.10
      solid-js: '>=1.9.5'
    peerDependenciesMeta:
      csstype:
        optional: true

  '@tanstack/router-generator@1.144.0':
    resolution: {integrity: sha512-NRXO/e9fZkSPF/Xa2S2+UxKgQWQpA/DmTQLCjQfPumCnNLUHpq0+iQPUWY9b5Rk2fnKwQkBZNLAl2EuWGa7rvw==}
    engines: {node: '>=12'}

  '@tanstack/router-plugin@1.144.0':
    resolution: {integrity: sha512-P5pJ/dYeDxwgHkDk5xq4MYdWIRWiehlfWjcIewnd21hG0hud/IQCfAwnGY89k/izJV8WZSOV+rKtJf6ufW2aKw==}
    engines: {node: '>=12'}
    peerDependencies:
      '@rsbuild/core': '>=1.0.2'
      '@tanstack/react-router': ^1.144.0
      vite: '>=5.0.0 || >=6.0.0 || >=7.0.0'
      vite-plugin-solid: ^2.11.10
      webpack: '>=5.92.0'
    peerDependenciesMeta:
      '@rsbuild/core':
        optional: true
      '@tanstack/react-router':
        optional: true
      vite:
        optional: true
      vite-plugin-solid:
        optional: true
      webpack:
        optional: true

  '@tanstack/router-ssr-query-core@1.144.0':
    resolution: {integrity: sha512-ECM4T6Gtj768Oi62iprDr45KDR6J/jvmVifJK9SRmoXW9WtiASymxB9H8tkPsX+yPEs22ZCs/j38hv63Mo30sQ==}
    engines: {node: '>=12'}
    peerDependencies:
      '@tanstack/query-core': '>=5.90.0'
      '@tanstack/router-core': '>=1.127.0'

  '@tanstack/router-utils@1.143.11':
    resolution: {integrity: sha512-N24G4LpfyK8dOlnP8BvNdkuxg1xQljkyl6PcrdiPSA301pOjatRT1y8wuCCJZKVVD8gkd0MpCZ0VEjRMGILOtA==}
    engines: {node: '>=12'}

  '@tanstack/start-client-core@1.145.0':
    resolution: {integrity: sha512-pqINeN7ZqdfTZrkhy9C7isxRr8U3cByH5ZtLVnUxJp9fvLgwX7LlI+OWpGI0q3E8f/mHMUqJdeE56+atSs8Khw==}
    engines: {node: '>=22.12.0'}

  '@tanstack/start-fn-stubs@1.143.8':
    resolution: {integrity: sha512-2IKUPh/TlxwzwHMiHNeFw95+L2sD4M03Es27SxMR0A60Qc4WclpaD6gpC8FsbuNASM2jBxk2UyeYClJxW1GOAQ==}
    engines: {node: '>=22.12.0'}

  '@tanstack/start-plugin-core@1.145.0':
    resolution: {integrity: sha512-suRUAUbeITAVpTb35V9mpL4fH0xUqjmnQZglMfZEkiPrhL8dorlWQZYpzmSlFSeQpqhTgH5hLafliQTF+A8pcg==}
    engines: {node: '>=22.12.0'}
    peerDependencies:
      vite: '>=7.0.0'

  '@tanstack/start-server-core@1.145.0':
    resolution: {integrity: sha512-psROCguKEXlpx04NeuqIVmtsunKpdIrvHunIE14YeXHQFs+HrItyXlS/we1H4c7bPG1n1kk5+SRUCVAVyipq0Q==}
    engines: {node: '>=22.12.0'}

  '@tanstack/start-storage-context@1.144.0':
    resolution: {integrity: sha512-DuUx5CXfLNettyJlsHDQp66y5haeqzXJkUor7kp5p10SVv24p76dTYqBOpw+wQz//RfJlOciIZFVBcKezXXY0w==}
    engines: {node: '>=22.12.0'}

  '@tanstack/store@0.7.7':
    resolution: {integrity: sha512-xa6pTan1bcaqYDS9BDpSiS63qa6EoDkPN9RsRaxHuDdVDNntzq3xNwR5YKTU/V3SkSyC9T4YVOPh2zRQN0nhIQ==}

  '@tanstack/store@0.8.0':
    resolution: {integrity: sha512-Om+BO0YfMZe//X2z0uLF2j+75nQga6TpTJgLJQBiq85aOyZNIhkCgleNcud2KQg4k4v9Y9l+Uhru3qWMPGTOzQ==}

  '@tanstack/table-core@8.21.3':
    resolution: {integrity: sha512-ldZXEhOBb8Is7xLs01fR3YEc3DERiz5silj8tnGkFZytt1abEvl/GhUmCE0PMLaMPTa3Jk4HbKmRlHmu+gCftg==}
    engines: {node: '>=12'}

  '@tanstack/virtual-core@3.13.13':
    resolution: {integrity: sha512-uQFoSdKKf5S8k51W5t7b2qpfkyIbdHMzAn+AMQvHPxKUPeo1SsGaA4JRISQT87jm28b7z8OEqPcg1IOZagQHcA==}

  '@tanstack/virtual-file-routes@1.141.0':
    resolution: {integrity: sha512-CJrWtr6L9TVzEImm9S7dQINx+xJcYP/aDkIi6gnaWtIgbZs1pnzsE0yJc2noqXZ+yAOqLx3TBGpBEs9tS0P9/A==}
    engines: {node: '>=12'}

  '@testing-library/dom@10.4.1':
    resolution: {integrity: sha512-o4PXJQidqJl82ckFaXUeoAW+XysPLauYI43Abki5hABd853iMhitooc6znOnczgbTYmEP6U6/y1ZyKAIsvMKGg==}
    engines: {node: '>=18'}

  '@testing-library/react@16.3.1':
    resolution: {integrity: sha512-gr4KtAWqIOQoucWYD/f6ki+j5chXfcPc74Col/6poTyqTmn7zRmodWahWRCp8tYd+GMqBonw6hstNzqjbs6gjw==}
    engines: {node: '>=18'}
    peerDependencies:
      '@testing-library/dom': ^10.0.0
      '@types/react': ^18.0.0 || ^19.0.0
      '@types/react-dom': ^18.0.0 || ^19.0.0
      react: ^18.0.0 || ^19.0.0
      react-dom: ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@tybys/wasm-util@0.10.1':
    resolution: {integrity: sha512-9tTaPJLSiejZKx+Bmog4uSubteqTvFrVrURwkmHixBo0G4seD0zUxp98E1DzUBJxLQ3NPwXrGKDiVjwx/DpPsg==}

  '@types/aria-query@5.0.4':
    resolution: {integrity: sha512-rfT93uj5s0PRL7EzccGMs3brplhcrghnDoV26NqKhCAS1hVo+WdNsPvE/yb6ilfr5hi2MEk6d5EWJTKdxg8jVw==}

  '@types/babel__core@7.20.5':
    resolution: {integrity: sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==}

  '@types/babel__generator@7.27.0':
    resolution: {integrity: sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==}

  '@types/babel__template@7.4.4':
    resolution: {integrity: sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==}

  '@types/babel__traverse@7.28.0':
    resolution: {integrity: sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==}

  '@types/bcryptjs@3.0.0':
    resolution: {integrity: sha512-WRZOuCuaz8UcZZE4R5HXTco2goQSI2XxjGY3hbM/xDvwmqFWd4ivooImsMx65OKM6CtNKbnZ5YL+YwAwK7c1dg==}
    deprecated: This is a stub types definition. bcryptjs provides its own type definitions, so you do not need this installed.

  '@types/chai@5.2.3':
    resolution: {integrity: sha512-Mw558oeA9fFbv65/y4mHtXDs9bPnFMZAL/jxdPFUpOHHIXX91mcgEHbS5Lahr+pwZFR8A7GQleRWeI6cGFC2UA==}

  '@types/deep-eql@4.0.2':
    resolution: {integrity: sha512-c9h9dVVMigMPc4bwTvC5dxqtqJZwQPePsWjPlpSOnojbor6pGqdk541lfA7AqFQr5pB1BRdq0juY9db81BwyFw==}

  '@types/estree@1.0.8':
    resolution: {integrity: sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==}

  '@types/jsonwebtoken@9.0.10':
    resolution: {integrity: sha512-asx5hIG9Qmf/1oStypjanR7iKTv0gXQ1Ov/jfrX6kS/EO0OFni8orbmGCn0672NHR3kXHwpAwR+B368ZGN/2rA==}

  '@types/ms@2.1.0':
    resolution: {integrity: sha512-GsCCIZDE/p3i96vtEqx+7dBUGXrc7zeSK3wwPHIaRThS+9OhWIXRqzs4d6k1SVU8g91DrNRWxWUGhp5KXQb2VA==}

  '@types/node@22.19.3':
    resolution: {integrity: sha512-1N9SBnWYOJTrNZCdh/yJE+t910Y128BoyY+zBLWhL3r0TYzlTmFdXrPwHL9DyFZmlEXNQQolTZh3KHV31QDhyA==}

  '@types/react-dom@19.2.3':
    resolution: {integrity: sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==}
    peerDependencies:
      '@types/react': ^19.2.0

  '@types/react@19.2.7':
    resolution: {integrity: sha512-MWtvHrGZLFttgeEj28VXHxpmwYbor/ATPYbBfSFZEIRK0ecCFLl2Qo55z52Hss+UV9CRN7trSeq1zbgx7YDWWg==}

  '@vitejs/plugin-react@5.1.2':
    resolution: {integrity: sha512-EcA07pHJouywpzsoTUqNh5NwGayl2PPVEJKUSinGGSxFGYn+shYbqMGBg6FXDqgXum9Ou/ecb+411ssw8HImJQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    peerDependencies:
      vite: ^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0

  '@vitest/expect@3.2.4':
    resolution: {integrity: sha512-Io0yyORnB6sikFlt8QW5K7slY4OjqNX9jmJQ02QDda8lyM6B5oNgVWoSoKPac8/kgnCUzuHQKrSLtu/uOqqrig==}

  '@vitest/mocker@3.2.4':
    resolution: {integrity: sha512-46ryTE9RZO/rfDd7pEqFl7etuyzekzEhUbTW3BvmeO/BcCMEgq59BKhek3dXDWgAj4oMK6OZi+vRr1wPW6qjEQ==}
    peerDependencies:
      msw: ^2.4.9
      vite: ^5.0.0 || ^6.0.0 || ^7.0.0-0
    peerDependenciesMeta:
      msw:
        optional: true
      vite:
        optional: true

  '@vitest/pretty-format@3.2.4':
    resolution: {integrity: sha512-IVNZik8IVRJRTr9fxlitMKeJeXFFFN0JaB9PHPGQ8NKQbGpfjlTx9zO4RefN8gp7eqjNy8nyK3NZmBzOPeIxtA==}

  '@vitest/runner@3.2.4':
    resolution: {integrity: sha512-oukfKT9Mk41LreEW09vt45f8wx7DordoWUZMYdY/cyAk7w5TWkTRCNZYF7sX7n2wB7jyGAl74OxgwhPgKaqDMQ==}

  '@vitest/snapshot@3.2.4':
    resolution: {integrity: sha512-dEYtS7qQP2CjU27QBC5oUOxLE/v5eLkGqPE0ZKEIDGMs4vKWe7IjgLOeauHsR0D5YuuycGRO5oSRXnwnmA78fQ==}

  '@vitest/spy@3.2.4':
    resolution: {integrity: sha512-vAfasCOe6AIK70iP5UD11Ac4siNUNJ9i/9PZ3NKx07sG6sUxeag1LWdNrMWeKKYBLlzuK+Gn65Yd5nyL6ds+nw==}

  '@vitest/utils@3.2.4':
    resolution: {integrity: sha512-fB2V0JFrQSMsCo9HiSq3Ezpdv4iYaXRG1Sx8edX3MwxfyNn83mKiGzOcH+Fkxt4MHxr3y42fQi1oeAInqgX2QA==}

  acorn@8.15.0:
    resolution: {integrity: sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  agent-base@7.1.4:
    resolution: {integrity: sha512-MnA+YT8fwfJPgBx3m60MNqakm30XOkyIoH1y6huTQvC0PwZG7ki8NacLBcrPbNoo8vEZy7Jpuk7+jMO+CUovTQ==}
    engines: {node: '>= 14'}

  ansi-regex@5.0.1:
    resolution: {integrity: sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==}
    engines: {node: '>=8'}

  ansi-styles@5.2.0:
    resolution: {integrity: sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA==}
    engines: {node: '>=10'}

  ansis@4.2.0:
    resolution: {integrity: sha512-HqZ5rWlFjGiV0tDm3UxxgNRqsOTniqoKZu0pIAfh7TZQMGuZK+hH0drySty0si0QXj1ieop4+SkSfPZBPPkHig==}
    engines: {node: '>=14'}

  anymatch@3.1.3:
    resolution: {integrity: sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==}
    engines: {node: '>= 8'}

  argparse@2.0.1:
    resolution: {integrity: sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==}

  aria-hidden@1.2.6:
    resolution: {integrity: sha512-ik3ZgC9dY/lYVVM++OISsaYDeg1tb0VtP5uL3ouh1koGOaUMDPpbFIei4JkFimWUFPn90sbMNMXQAIVOlnYKJA==}
    engines: {node: '>=10'}

  aria-query@5.3.0:
    resolution: {integrity: sha512-b0P0sZPKtyu8HkeRAfCq0IfURZK+SuwMjY1UXGBU27wpAiTwQAIlq56IbIO+ytk/JjS1fMR14ee5WBBfKi5J6A==}

  assertion-error@2.0.1:
    resolution: {integrity: sha512-Izi8RQcffqCeNVgFigKli1ssklIbpHnCYc6AknXGYoB6grJqyeby7jv12JUQgmTAnIDnbck1uxksT4dzN3PWBA==}
    engines: {node: '>=12'}

  ast-types@0.16.1:
    resolution: {integrity: sha512-6t10qk83GOG8p0vKmaCr8eiilZwO171AvbROMtvvNiwrTly62t+7XkA8RdIIVbpMhCASAsxgAzdRSwh6nw/5Dg==}
    engines: {node: '>=4'}

  babel-dead-code-elimination@1.0.11:
    resolution: {integrity: sha512-mwq3W3e/pKSI6TG8lXMiDWvEi1VXYlSBlJlB3l+I0bAb5u1RNUl88udos85eOPNK3m5EXK9uO7d2g08pesTySQ==}

  baseline-browser-mapping@2.9.11:
    resolution: {integrity: sha512-Sg0xJUNDU1sJNGdfGWhVHX0kkZ+HWcvmVymJbj6NSgZZmW/8S9Y2HQ5euytnIgakgxN6papOAWiwDo1ctFDcoQ==}
    hasBin: true

  bcryptjs@3.0.3:
    resolution: {integrity: sha512-GlF5wPWnSa/X5LKM1o0wz0suXIINz1iHRLvTS+sLyi7XPbe5ycmYI3DlZqVGZZtDgl4DmasFg7gOB3JYbphV5g==}
    hasBin: true

  bidi-js@1.0.3:
    resolution: {integrity: sha512-RKshQI1R3YQ+n9YJz2QQ147P66ELpa1FQEg20Dk8oW9t2KgLbpDLLp9aGZ7y8WHSshDknG0bknqGw5/tyCs5tw==}

  binary-extensions@2.3.0:
    resolution: {integrity: sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==}
    engines: {node: '>=8'}

  boolbase@1.0.0:
    resolution: {integrity: sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==}

  braces@3.0.3:
    resolution: {integrity: sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==}
    engines: {node: '>=8'}

  browserslist@4.28.1:
    resolution: {integrity: sha512-ZC5Bd0LgJXgwGqUknZY/vkUQ04r8NXnJZ3yYi4vDmSiZmC/pdSN0NbNRPxZpbtO4uAfDUAFffO8IZoM3Gj8IkA==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true

  buffer-equal-constant-time@1.0.1:
    resolution: {integrity: sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA==}

  cac@6.7.14:
    resolution: {integrity: sha512-b6Ilus+c3RrdDk+JhLKUAQfzzgLEPy6wcXqS7f/xe1EETvsDP6GORG7SFuOs6cID5YkqchW/LXZbX5bc8j7ZcQ==}
    engines: {node: '>=8'}

  caniuse-lite@1.0.30001761:
    resolution: {integrity: sha512-JF9ptu1vP2coz98+5051jZ4PwQgd2ni8A+gYSN7EA7dPKIMf0pDlSUxhdmVOaV3/fYK5uWBkgSXJaRLr4+3A6g==}

  chai@5.3.3:
    resolution: {integrity: sha512-4zNhdJD/iOjSH0A05ea+Ke6MU5mmpQcbQsSOkgdaUMJ9zTlDTD/GYlwohmIE2u0gaxHYiVHEn1Fw9mZ/ktJWgw==}
    engines: {node: '>=18'}

  chalk@5.6.2:
    resolution: {integrity: sha512-7NzBL0rN6fMUW+f7A6Io4h40qQlG+xGmtMxfbnH/K7TAtt8JQWVQK+6g0UXKMeVJoyV5EkkNsErQ8pVD3bLHbA==}
    engines: {node: ^12.17.0 || ^14.13 || >=16.0.0}

  check-error@2.1.1:
    resolution: {integrity: sha512-OAlb+T7V4Op9OwdkjmguYRqncdlx5JiofwOAUkmTF+jNdHwzTaTs4sRAGpzLF3oOz5xAyDGrPgeIDFQmDOTiJw==}
    engines: {node: '>= 16'}

  cheerio-select@2.1.0:
    resolution: {integrity: sha512-9v9kG0LvzrlcungtnJtpGNxY+fzECQKhK4EGJX2vByejiMX84MFNQw4UxPJl3bFbTMw+Dfs37XaIkCwTZfLh4g==}

  cheerio@1.1.2:
    resolution: {integrity: sha512-IkxPpb5rS/d1IiLbHMgfPuS0FgiWTtFIm/Nj+2woXDLTZ7fOT2eqzgYbdMlLweqlHbsZjxEChoVK+7iph7jyQg==}
    engines: {node: '>=20.18.1'}

  chokidar@3.6.0:
    resolution: {integrity: sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==}
    engines: {node: '>= 8.10.0'}

  class-variance-authority@0.7.1:
    resolution: {integrity: sha512-Ka+9Trutv7G8M6WT6SeiRWz792K5qEqIGEGzXKhAE6xOWAY6pPH8U+9IY3oCMv6kqTmLsv7Xh/2w2RigkePMsg==}

  clsx@2.1.1:
    resolution: {integrity: sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==}
    engines: {node: '>=6'}

  consola@3.4.2:
    resolution: {integrity: sha512-5IKcdX0nnYavi6G7TtOhwkYzyjfJlatbjMjuLSfE2kYT5pMDOilZ4OvMhi637CcDICTmz3wARPoyhqyX1Y+XvA==}
    engines: {node: ^14.18.0 || >=16.10.0}

  convert-source-map@2.0.0:
    resolution: {integrity: sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==}

  cookie-es@2.0.0:
    resolution: {integrity: sha512-RAj4E421UYRgqokKUmotqAwuplYw15qtdXfY+hGzgCJ/MBjCVZcSoHK/kH9kocfjRjcDME7IiDWR/1WX1TM2Pg==}

  crossws@0.4.1:
    resolution: {integrity: sha512-E7WKBcHVhAVrY6JYD5kteNqVq1GSZxqGrdSiwXR9at+XHi43HJoCQKXcCczR5LBnBquFZPsB3o7HklulKoBU5w==}
    peerDependencies:
      srvx: '>=0.7.1'
    peerDependenciesMeta:
      srvx:
        optional: true

  css-select@5.2.2:
    resolution: {integrity: sha512-TizTzUddG/xYLA3NXodFM0fSbNizXjOKhqiQQwvhlspadZokn1KDy0NZFS0wuEubIYAV5/c1/lAr0TaaFXEXzw==}

  css-tree@3.1.0:
    resolution: {integrity: sha512-0eW44TGN5SQXU1mWSkKwFstI/22X2bG1nYzZTYMAWjylYURhse752YgbE4Cx46AC+bAvI+/dYTPRk1LqSUnu6w==}
    engines: {node: ^10 || ^12.20.0 || ^14.13.0 || >=15.0.0}

  css-what@6.2.2:
    resolution: {integrity: sha512-u/O3vwbptzhMs3L1fQE82ZSLHQQfto5gyZzwteVIEyeaY5Fc7R4dapF/BvRoSYFeqfBk4m0V1Vafq5Pjv25wvA==}
    engines: {node: '>= 6'}

  cssstyle@5.3.5:
    resolution: {integrity: sha512-GlsEptulso7Jg0VaOZ8BXQi3AkYM5BOJKEO/rjMidSCq70FkIC5y0eawrCXeYzxgt3OCf4Ls+eoxN+/05vN0Ag==}
    engines: {node: '>=20'}

  csstype@3.2.3:
    resolution: {integrity: sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==}

  data-urls@6.0.0:
    resolution: {integrity: sha512-BnBS08aLUM+DKamupXs3w2tJJoqU+AkaE/+6vQxi/G/DPmIZFJJp9Dkb1kM03AZx8ADehDUZgsNxju3mPXZYIA==}
    engines: {node: '>=20'}

  date-fns-jalali@4.1.0-0:
    resolution: {integrity: sha512-hTIP/z+t+qKwBDcmmsnmjWTduxCg+5KfdqWQvb2X/8C9+knYY6epN/pfxdDuyVlSVeFz0sM5eEfwIUQ70U4ckg==}

  date-fns@4.1.0:
    resolution: {integrity: sha512-Ukq0owbQXxa/U3EGtsdVBkR1w7KOQ5gIBqdH2hkvknzZPYvBxb/aa6E8L7tmjFtkwZBu3UXBbjIgPo/Ez4xaNg==}

  db0@0.3.4:
    resolution: {integrity: sha512-RiXXi4WaNzPTHEOu8UPQKMooIbqOEyqA1t7Z6MsdxSCeb8iUC9ko3LcmsLmeUt2SM5bctfArZKkRQggKZz7JNw==}
    peerDependencies:
      '@electric-sql/pglite': '*'
      '@libsql/client': '*'
      better-sqlite3: '*'
      drizzle-orm: '*'
      mysql2: '*'
      sqlite3: '*'
    peerDependenciesMeta:
      '@electric-sql/pglite':
        optional: true
      '@libsql/client':
        optional: true
      better-sqlite3:
        optional: true
      drizzle-orm:
        optional: true
      mysql2:
        optional: true
      sqlite3:
        optional: true

  debug@4.4.3:
    resolution: {integrity: sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  decimal.js@10.6.0:
    resolution: {integrity: sha512-YpgQiITW3JXGntzdUmyUR1V812Hn8T1YVXhCu+wO3OpS4eU9l4YdD3qjyiKdV6mvV29zapkMeD390UVEf2lkUg==}

  deep-eql@5.0.2:
    resolution: {integrity: sha512-h5k/5U50IJJFpzfL6nO9jaaumfjO/f2NjK/oYB2Djzm4p9L+3T9qWpZqZ2hAbLPuuYq9wrU08WQyBTL5GbPk5Q==}
    engines: {node: '>=6'}

  dequal@2.0.3:
    resolution: {integrity: sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==}
    engines: {node: '>=6'}

  detect-libc@2.1.2:
    resolution: {integrity: sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==}
    engines: {node: '>=8'}

  detect-node-es@1.1.0:
    resolution: {integrity: sha512-ypdmJU/TbBby2Dxibuv7ZLW3Bs1QEmM7nHjEANfohJLvE0XVujisn1qPJcZxg+qDucsr+bP6fLD1rPS3AhJ7EQ==}

  diff@8.0.2:
    resolution: {integrity: sha512-sSuxWU5j5SR9QQji/o2qMvqRNYRDOcBTgsJ/DeCf4iSN4gW+gNMXM7wFIP+fdXZxoNiAnHUTGjCr+TSWXdRDKg==}
    engines: {node: '>=0.3.1'}

  dom-accessibility-api@0.5.16:
    resolution: {integrity: sha512-X7BJ2yElsnOJ30pZF4uIIDfBEVgF4XEBxL9Bxhy6dnrm5hkzqmsWHGTiHqRiITNhMyFLyAiWndIJP7Z1NTteDg==}

  dom-serializer@2.0.0:
    resolution: {integrity: sha512-wIkAryiqt/nV5EQKqQpo3SToSOV9J0DnbJqwK7Wv/Trc92zIAYZ4FlMu+JPFW1DfGFt81ZTCGgDEabffXeLyJg==}

  domelementtype@2.3.0:
    resolution: {integrity: sha512-OLETBj6w0OsagBwdXnPdN0cnMfF9opN69co+7ZrbfPGrdpPVNBUj02spi6B1N7wChLQiPn4CSH/zJvXw56gmHw==}

  domhandler@5.0.3:
    resolution: {integrity: sha512-cgwlv/1iFQiFnU96XXgROh8xTeetsnJiDsTc7TYCLFd9+/WNkIqPTxiM/8pSd8VIrhXGTf1Ny1q1hquVqDJB5w==}
    engines: {node: '>= 4'}

  domutils@3.2.2:
    resolution: {integrity: sha512-6kZKyUajlDuqlHKVX1w7gyslj9MPIXzIFiz/rGu35uC1wMi+kMhQwGhl4lt9unC9Vb9INnY9Z3/ZA3+FhASLaw==}

  ecdsa-sig-formatter@1.0.11:
    resolution: {integrity: sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==}

  electron-to-chromium@1.5.267:
    resolution: {integrity: sha512-0Drusm6MVRXSOJpGbaSVgcQsuB4hEkMpHXaVstcPmhu5LIedxs1xNK/nIxmQIU/RPC0+1/o0AVZfBTkTNJOdUw==}

  encoding-sniffer@0.2.1:
    resolution: {integrity: sha512-5gvq20T6vfpekVtqrYQsSCFZ1wEg5+wW0/QaZMWkFr6BqD3NfKs0rLCx4rrVlSWJeZb5NBJgVLswK/w2MWU+Gw==}

  enhanced-resolve@5.18.4:
    resolution: {integrity: sha512-LgQMM4WXU3QI+SYgEc2liRgznaD5ojbmY3sb8LxyguVkIg5FxdpTkvk72te2R38/TGKxH634oLxXRGY6d7AP+Q==}
    engines: {node: '>=10.13.0'}

  entities@4.5.0:
    resolution: {integrity: sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==}
    engines: {node: '>=0.12'}

  entities@6.0.1:
    resolution: {integrity: sha512-aN97NXWF6AWBTahfVOIrB/NShkzi5H7F9r1s9mD3cDj4Ko5f2qhhVoYMibXF7GlLveb/D2ioWay8lxI97Ven3g==}
    engines: {node: '>=0.12'}

  es-module-lexer@1.7.0:
    resolution: {integrity: sha512-jEQoCwk8hyb2AZziIOLhDqpm5+2ww5uIE6lkO/6jcOCusfk6LhMHpXXfBLXTZ7Ydyt0j4VoUQv6uGNYbdW+kBA==}

  esbuild@0.27.2:
    resolution: {integrity: sha512-HyNQImnsOC7X9PMNaCIeAm4ISCQXs5a5YasTXVliKv4uuBo1dKrG0A+uQS8M5eXjVMnLg3WgXaKvprHlFJQffw==}
    engines: {node: '>=18'}
    hasBin: true

  escalade@3.2.0:
    resolution: {integrity: sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==}
    engines: {node: '>=6'}

  esprima@4.0.1:
    resolution: {integrity: sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==}
    engines: {node: '>=4'}
    hasBin: true

  estree-walker@3.0.3:
    resolution: {integrity: sha512-7RUKfXgSMMkzt6ZuXmqapOurLGPPfgj6l9uRZ7lRGolvk0y2yocc35LdcxKC5PQZdn2DMqioAQ2NoWcrTKmm6g==}

  expect-type@1.3.0:
    resolution: {integrity: sha512-knvyeauYhqjOYvQ66MznSMs83wmHrCycNEN6Ao+2AeYEfxUIkuiVxdEa1qlGEPK+We3n0THiDciYSsCcgW/DoA==}
    engines: {node: '>=12.0.0'}

  exsolve@1.0.8:
    resolution: {integrity: sha512-LmDxfWXwcTArk8fUEnOfSZpHOJ6zOMUJKOtFLFqJLoKJetuQG874Uc7/Kki7zFLzYybmZhp1M7+98pfMqeX8yA==}

  fdir@6.5.0:
    resolution: {integrity: sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==}
    engines: {node: '>=12.0.0'}
    peerDependencies:
      picomatch: ^3 || ^4
    peerDependenciesMeta:
      picomatch:
        optional: true

  fill-range@7.1.1:
    resolution: {integrity: sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==}
    engines: {node: '>=8'}

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  gensync@1.0.0-beta.2:
    resolution: {integrity: sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==}
    engines: {node: '>=6.9.0'}

  get-nonce@1.0.1:
    resolution: {integrity: sha512-FJhYRoDaiatfEkUK8HKlicmu/3SGFD51q3itKDGoSTysQJBnfOcxU5GxnhE1E6soB76MbT0MBtnKJuXyAx+96Q==}
    engines: {node: '>=6'}

  get-tsconfig@4.13.0:
    resolution: {integrity: sha512-1VKTZJCwBrvbd+Wn3AOgQP/2Av+TfTCOlE4AcRJE72W1ksZXbAx8PPBR9RzgTeSPzlPMHrbANMH3LbltH73wxQ==}

  glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}

  globrex@0.1.2:
    resolution: {integrity: sha512-uHJgbwAMwNFf5mLst7IWLNg14x1CkeqglJb/K3doi4dw6q2IvAAmM/Y81kevy83wP+Sst+nutFTYOGg3d1lsxg==}

  goober@2.1.18:
    resolution: {integrity: sha512-2vFqsaDVIT9Gz7N6kAL++pLpp41l3PfDuusHcjnGLfR6+huZkl6ziX+zgVC3ZxpqWhzH6pyDdGrCeDhMIvwaxw==}
    peerDependencies:
      csstype: ^3.0.10

  graceful-fs@4.2.11:
    resolution: {integrity: sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==}

  h3@2.0.1-rc.5:
    resolution: {integrity: sha512-qkohAzCab0nLzXNm78tBjZDvtKMTmtygS8BJLT3VPczAQofdqlFXDPkXdLMJN4r05+xqneG8snZJ0HgkERCZTg==}
    engines: {node: '>=20.11.1'}
    peerDependencies:
      crossws: ^0.4.1
    peerDependenciesMeta:
      crossws:
        optional: true

  h3@2.0.1-rc.6:
    resolution: {integrity: sha512-kKLFVFNJlDVTbQjakz1ZTFSHB9+oi9+Khf0v7xQsUKU3iOqu2qmrFzTD56YsDvvj2nBgqVDphGRXB2VRursw4w==}
    engines: {node: '>=20.11.1'}
    peerDependencies:
      crossws: ^0.4.1
    peerDependenciesMeta:
      crossws:
        optional: true

  html-encoding-sniffer@6.0.0:
    resolution: {integrity: sha512-CV9TW3Y3f8/wT0BRFc1/KAVQ3TUHiXmaAb6VW9vtiMFf7SLoMd1PdAc4W3KFOFETBJUb90KatHqlsZMWV+R9Gg==}
    engines: {node: ^20.19.0 || ^22.12.0 || >=24.0.0}

  htmlparser2@10.0.0:
    resolution: {integrity: sha512-TwAZM+zE5Tq3lrEHvOlvwgj1XLWQCtaaibSN11Q+gGBAS7Y1uZSWwXXRe4iF6OXnaq1riyQAPFOBtYc77Mxq0g==}

  http-proxy-agent@7.0.2:
    resolution: {integrity: sha512-T1gkAiYYDWYx3V5Bmyu7HcfcvL7mUrTWiM6yOfa3PIphViJ/gFPbvidQ+veqSOHci/PxBcDabeUNCzpOODJZig==}
    engines: {node: '>= 14'}

  https-proxy-agent@7.0.6:
    resolution: {integrity: sha512-vK9P5/iUfdl95AI+JVyUuIcVtd4ofvtrOr3HNtM2yxC9bnMbEdp3x01OhQNnjb8IJYi38VlTE3mBXwcfvywuSw==}
    engines: {node: '>= 14'}

  iconv-lite@0.6.3:
    resolution: {integrity: sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==}
    engines: {node: '>=0.10.0'}

  is-binary-path@2.1.0:
    resolution: {integrity: sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==}
    engines: {node: '>=8'}

  is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}

  is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}

  is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}

  is-potential-custom-element-name@1.0.1:
    resolution: {integrity: sha512-bCYeRA2rVibKZd+s2625gGnGF/t7DSqDs4dP7CrLA1m7jKWz6pps0LpYLJN8Q64HtmPKJ1hrN3nzPNKFEKOUiQ==}

  isbot@5.1.32:
    resolution: {integrity: sha512-VNfjM73zz2IBZmdShMfAUg10prm6t7HFUQmNAEOAVS4YH92ZrZcvkMcGX6cIgBJAzWDzPent/EeAtYEHNPNPBQ==}
    engines: {node: '>=18'}

  jiti@2.6.1:
    resolution: {integrity: sha512-ekilCSN1jwRvIbgeg/57YFh8qQDNbwDb9xT/qu2DAHbFFZUicIl4ygVaAvzveMhMVr3LnpSKTNnwt8PoOfmKhQ==}
    hasBin: true

  js-tokens@4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  js-tokens@9.0.1:
    resolution: {integrity: sha512-mxa9E9ITFOt0ban3j6L5MpjwegGz6lBQmM1IJkWeBZGcMxto50+eWdjC/52xDbS2vy0k7vIMK0Fe2wfL9OQSpQ==}

  js-yaml@4.1.1:
    resolution: {integrity: sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==}
    hasBin: true

  jsdom@27.4.0:
    resolution: {integrity: sha512-mjzqwWRD9Y1J1KUi7W97Gja1bwOOM5Ug0EZ6UDK3xS7j7mndrkwozHtSblfomlzyB4NepioNt+B2sOSzczVgtQ==}
    engines: {node: ^20.19.0 || ^22.12.0 || >=24.0.0}
    peerDependencies:
      canvas: ^3.0.0
    peerDependenciesMeta:
      canvas:
        optional: true

  jsesc@3.1.0:
    resolution: {integrity: sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==}
    engines: {node: '>=6'}
    hasBin: true

  json5@2.2.3:
    resolution: {integrity: sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==}
    engines: {node: '>=6'}
    hasBin: true

  jsonwebtoken@9.0.3:
    resolution: {integrity: sha512-MT/xP0CrubFRNLNKvxJ2BYfy53Zkm++5bX9dtuPbqAeQpTVe0MQTFhao8+Cp//EmJp244xt6Drw/GVEGCUj40g==}
    engines: {node: '>=12', npm: '>=6'}

  jwa@2.0.1:
    resolution: {integrity: sha512-hRF04fqJIP8Abbkq5NKGN0Bbr3JxlQ+qhZufXVr0DvujKy93ZCbXZMHDL4EOtodSbCWxOqR8MS1tXA5hwqCXDg==}

  jws@4.0.1:
    resolution: {integrity: sha512-EKI/M/yqPncGUUh44xz0PxSidXFr/+r0pA70+gIYhjv+et7yxM+s29Y+VGDkovRofQem0fs7Uvf4+YmAdyRduA==}

  launch-editor@2.12.0:
    resolution: {integrity: sha512-giOHXoOtifjdHqUamwKq6c49GzBdLjvxrd2D+Q4V6uOHopJv7p9VJxikDsQ/CBXZbEITgUqSVHXLTG3VhPP1Dg==}

  lightningcss-android-arm64@1.30.2:
    resolution: {integrity: sha512-BH9sEdOCahSgmkVhBLeU7Hc9DWeZ1Eb6wNS6Da8igvUwAe0sqROHddIlvU06q3WyXVEOYDZ6ykBZQnjTbmo4+A==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [android]

  lightningcss-darwin-arm64@1.30.2:
    resolution: {integrity: sha512-ylTcDJBN3Hp21TdhRT5zBOIi73P6/W0qwvlFEk22fkdXchtNTOU4Qc37SkzV+EKYxLouZ6M4LG9NfZ1qkhhBWA==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [darwin]

  lightningcss-darwin-x64@1.30.2:
    resolution: {integrity: sha512-oBZgKchomuDYxr7ilwLcyms6BCyLn0z8J0+ZZmfpjwg9fRVZIR5/GMXd7r9RH94iDhld3UmSjBM6nXWM2TfZTQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [darwin]

  lightningcss-freebsd-x64@1.30.2:
    resolution: {integrity: sha512-c2bH6xTrf4BDpK8MoGG4Bd6zAMZDAXS569UxCAGcA7IKbHNMlhGQ89eRmvpIUGfKWNVdbhSbkQaWhEoMGmGslA==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [freebsd]

  lightningcss-linux-arm-gnueabihf@1.30.2:
    resolution: {integrity: sha512-eVdpxh4wYcm0PofJIZVuYuLiqBIakQ9uFZmipf6LF/HRj5Bgm0eb3qL/mr1smyXIS1twwOxNWndd8z0E374hiA==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm]
    os: [linux]

  lightningcss-linux-arm64-gnu@1.30.2:
    resolution: {integrity: sha512-UK65WJAbwIJbiBFXpxrbTNArtfuznvxAJw4Q2ZGlU8kPeDIWEX1dg3rn2veBVUylA2Ezg89ktszWbaQnxD/e3A==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]

  lightningcss-linux-arm64-musl@1.30.2:
    resolution: {integrity: sha512-5Vh9dGeblpTxWHpOx8iauV02popZDsCYMPIgiuw97OJ5uaDsL86cnqSFs5LZkG3ghHoX5isLgWzMs+eD1YzrnA==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]

  lightningcss-linux-x64-gnu@1.30.2:
    resolution: {integrity: sha512-Cfd46gdmj1vQ+lR6VRTTadNHu6ALuw2pKR9lYq4FnhvgBc4zWY1EtZcAc6EffShbb1MFrIPfLDXD6Xprbnni4w==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]

  lightningcss-linux-x64-musl@1.30.2:
    resolution: {integrity: sha512-XJaLUUFXb6/QG2lGIW6aIk6jKdtjtcffUT0NKvIqhSBY3hh9Ch+1LCeH80dR9q9LBjG3ewbDjnumefsLsP6aiA==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]

  lightningcss-win32-arm64-msvc@1.30.2:
    resolution: {integrity: sha512-FZn+vaj7zLv//D/192WFFVA0RgHawIcHqLX9xuWiQt7P0PtdFEVaxgF9rjM/IRYHQXNnk61/H/gb2Ei+kUQ4xQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [win32]

  lightningcss-win32-x64-msvc@1.30.2:
    resolution: {integrity: sha512-5g1yc73p+iAkid5phb4oVFMB45417DkRevRbt/El/gKXJk4jid+vPFF/AXbxn05Aky8PapwzZrdJShv5C0avjw==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [win32]

  lightningcss@1.30.2:
    resolution: {integrity: sha512-utfs7Pr5uJyyvDETitgsaqSyjCb2qNRAtuqUeWIAKztsOYdcACf2KtARYXg2pSvhkt+9NfoaNY7fxjl6nuMjIQ==}
    engines: {node: '>= 12.0.0'}

  lodash.includes@4.3.0:
    resolution: {integrity: sha512-W3Bx6mdkRTGtlJISOvVD/lbqjTlPPUDTMnlXZFnVwi9NKJ6tiAk6LVdlhZMm17VZisqhKcgzpO5Wz91PCt5b0w==}

  lodash.isboolean@3.0.3:
    resolution: {integrity: sha512-Bz5mupy2SVbPHURB98VAcw+aHh4vRV5IPNhILUCsOzRmsTmSQ17jIuqopAentWoehktxGd9e/hbIXq980/1QJg==}

  lodash.isinteger@4.0.4:
    resolution: {integrity: sha512-DBwtEWN2caHQ9/imiNeEA5ys1JoRtRfY3d7V9wkqtbycnAmTvRRmbHKDV4a0EYc678/dia0jrte4tjYwVBaZUA==}

  lodash.isnumber@3.0.3:
    resolution: {integrity: sha512-QYqzpfwO3/CWf3XP+Z+tkQsfaLL/EnUlXWVkIk5FUPc4sBdTehEqZONuyRt2P67PXAk+NXmTBcc97zw9t1FQrw==}

  lodash.isplainobject@4.0.6:
    resolution: {integrity: sha512-oSXzaWypCMHkPC3NvBEaPHf0KsA5mvPrOPgQWDsbg8n7orZ290M0BmC/jgRZ4vcJ6DTAhjrsSYgdsW/F+MFOBA==}

  lodash.isstring@4.0.1:
    resolution: {integrity: sha512-0wJxfxH1wgO3GrbuP+dTTk7op+6L41QCXbGINEmD+ny/G/eCqGzxyCsh7159S+mgDDcoarnBw6PC1PS5+wUGgw==}

  lodash.once@4.1.1:
    resolution: {integrity: sha512-Sb487aTOCr9drQVL8pIxOzVhafOjZN9UU54hiN8PU3uAiSV7lx1yYNpbNmex2PK6dSJoNTSJUUswT651yww3Mg==}

  loupe@3.2.1:
    resolution: {integrity: sha512-CdzqowRJCeLU72bHvWqwRBBlLcMEtIvGrlvef74kMnV2AolS9Y8xUv1I0U/MNAWMhBlKIoyuEgoJ0t/bbwHbLQ==}

  lru-cache@11.2.4:
    resolution: {integrity: sha512-B5Y16Jr9LB9dHVkh6ZevG+vAbOsNOYCX+sXvFWFu7B3Iz5mijW3zdbMyhsh8ANd2mSWBYdJgnqi+mL7/LrOPYg==}
    engines: {node: 20 || >=22}

  lru-cache@5.1.1:
    resolution: {integrity: sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==}

  lucide-react@0.561.0:
    resolution: {integrity: sha512-Y59gMY38tl4/i0qewcqohPdEbieBy7SovpBL9IFebhc2mDd8x4PZSOsiFRkpPcOq6bj1r/mjH/Rk73gSlIJP2A==}
    peerDependencies:
      react: ^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0

  lz-string@1.5.0:
    resolution: {integrity: sha512-h5bgJWpxJNswbU7qCrV0tIKQCaS3blPDrqKWx+QxzuzL1zGUzij9XCWLrSLsJPu5t+eWA/ycetzYAO5IOMcWAQ==}
    hasBin: true

  magic-string@0.30.21:
    resolution: {integrity: sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==}

  mdn-data@2.12.2:
    resolution: {integrity: sha512-IEn+pegP1aManZuckezWCO+XZQDplx1366JoVhTpMpBB1sPey/SbveZQUosKiKiGYjg1wH4pMlNgXbCiYgihQA==}

  ms@2.1.3:
    resolution: {integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==}

  nanoid@3.3.11:
    resolution: {integrity: sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  nf3@0.1.12:
    resolution: {integrity: sha512-qbMXT7RTGh74MYWPeqTIED8nDW70NXOULVHpdWcdZ7IVHVnAsMV9fNugSNnvooipDc1FMOzpis7T9nXJEbJhvQ==}

  nitro@3.0.1-alpha.1:
    resolution: {integrity: sha512-U4AxIsXxdkxzkFrK0XAw0e5Qbojk8jQ50MjjRBtBakC4HurTtQoiZvF+lSe382jhuQZCfAyywGWOFa9QzXLFaw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    hasBin: true
    peerDependencies:
      rolldown: '*'
      rollup: ^4
      vite: ^7
      xml2js: ^0.6.2
    peerDependenciesMeta:
      rolldown:
        optional: true
      rollup:
        optional: true
      vite:
        optional: true
      xml2js:
        optional: true

  node-releases@2.0.27:
    resolution: {integrity: sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==}

  normalize-path@3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}

  nth-check@2.1.1:
    resolution: {integrity: sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==}

  ofetch@2.0.0-alpha.3:
    resolution: {integrity: sha512-zpYTCs2byOuft65vI3z43Dd6iSdFbOZZLb9/d21aCpx2rGastVU9dOCv0lu4ykc1Ur1anAYjDi3SUvR0vq50JA==}

  ohash@2.0.11:
    resolution: {integrity: sha512-RdR9FQrFwNBNXAr4GixM8YaRZRJ5PUWbKYbE5eOsrwAjJW0q2REGcf79oYPsLyskQCZG1PLN+S/K1V00joZAoQ==}

  oxc-minify@0.96.0:
    resolution: {integrity: sha512-dXeeGrfPJJ4rMdw+NrqiCRtbzVX2ogq//R0Xns08zql2HjV3Zi2SBJ65saqfDaJzd2bcHqvGWH+M44EQCHPAcA==}
    engines: {node: ^20.19.0 || >=22.12.0}

  oxc-transform@0.96.0:
    resolution: {integrity: sha512-dQPNIF+gHpSkmC0+Vg9IktNyhcn28Y8R3eTLyzn52UNymkasLicl3sFAtz7oEVuFmCpgGjaUTKkwk+jW2cHpDQ==}
    engines: {node: ^20.19.0 || >=22.12.0}

  parse5-htmlparser2-tree-adapter@7.1.0:
    resolution: {integrity: sha512-ruw5xyKs6lrpo9x9rCZqZZnIUntICjQAd0Wsmp396Ul9lN/h+ifgVV1x1gZHi8euej6wTfpqX8j+BFQxF0NS/g==}

  parse5-parser-stream@7.1.2:
    resolution: {integrity: sha512-JyeQc9iwFLn5TbvvqACIF/VXG6abODeB3Fwmv/TGdLk2LfbWkaySGY72at4+Ty7EkPZj854u4CrICqNk2qIbow==}

  parse5@7.3.0:
    resolution: {integrity: sha512-IInvU7fabl34qmi9gY8XOVxhYyMyuH2xUNpb2q8/Y+7552KlejkRvqvD19nMoUW/uQGGbqNpA6Tufu5FL5BZgw==}

  parse5@8.0.0:
    resolution: {integrity: sha512-9m4m5GSgXjL4AjumKzq1Fgfp3Z8rsvjRNbnkVwfu2ImRqE5D0LnY2QfDen18FSY9C573YU5XxSapdHZTZ2WolA==}

  pathe@2.0.3:
    resolution: {integrity: sha512-WUjGcAqP1gQacoQe+OBJsFA7Ld4DyXuUIjZ5cc75cLHvJ7dtNsTugphxIADwspS+AraAUePCKrSVtPLFj/F88w==}

  pathval@2.0.1:
    resolution: {integrity: sha512-//nshmD55c46FuFw26xV/xFAaB5HF9Xdap7HJBBnrKdAd6/GxDBaNA1870O79+9ueg61cZLSVc+OaFlfmObYVQ==}
    engines: {node: '>= 14.16'}

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}

  picomatch@4.0.3:
    resolution: {integrity: sha512-5gTmgEY/sqK6gFXLIsQNH19lWb4ebPDLA4SdLP7dsWkIXHWlG66oPuVvXSGFPppYZz8ZDZq0dYYrbHfBCVUb1Q==}
    engines: {node: '>=12'}

  postcss@8.5.6:
    resolution: {integrity: sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==}
    engines: {node: ^10 || ^12 || >=14}

  prettier@3.7.4:
    resolution: {integrity: sha512-v6UNi1+3hSlVvv8fSaoUbggEM5VErKmmpGA7Pl3HF8V6uKY7rvClBOJlH6yNwQtfTueNkGVpOv/mtWL9L4bgRA==}
    engines: {node: '>=14'}
    hasBin: true

  pretty-format@27.5.1:
    resolution: {integrity: sha512-Qb1gy5OrP5+zDf2Bvnzdl3jsTf1qXVMazbvCoKhtKqVs4/YK4ozX4gKQJJVyNe+cajNPn0KoC0MC3FUmaHWEmQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}

  punycode@2.3.1:
    resolution: {integrity: sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==}
    engines: {node: '>=6'}

  react-day-picker@9.13.0:
    resolution: {integrity: sha512-euzj5Hlq+lOHqI53NiuNhCP8HWgsPf/bBAVijR50hNaY1XwjKjShAnIe8jm8RD2W9IJUvihDIZ+KrmqfFzNhFQ==}
    engines: {node: '>=18'}
    peerDependencies:
      react: '>=16.8.0'

  react-dom@19.2.3:
    resolution: {integrity: sha512-yELu4WmLPw5Mr/lmeEpox5rw3RETacE++JgHqQzd2dg+YbJuat3jH4ingc+WPZhxaoFzdv9y33G+F7Nl5O0GBg==}
    peerDependencies:
      react: ^19.2.3

  react-hook-form@7.69.0:
    resolution: {integrity: sha512-yt6ZGME9f4F6WHwevrvpAjh42HMvocuSnSIHUGycBqXIJdhqGSPQzTpGF+1NLREk/58IdPxEMfPcFCjlMhclGw==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      react: ^16.8.0 || ^17 || ^18 || ^19

  react-is@17.0.2:
    resolution: {integrity: sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w==}

  react-refresh@0.18.0:
    resolution: {integrity: sha512-QgT5//D3jfjJb6Gsjxv0Slpj23ip+HtOpnNgnb2S5zU3CB26G/IDPGoy4RJB42wzFE46DRsstbW6tKHoKbhAxw==}
    engines: {node: '>=0.10.0'}

  react-remove-scroll-bar@2.3.8:
    resolution: {integrity: sha512-9r+yi9+mgU33AKcj6IbT9oRCO78WriSj6t/cF8DWBZJ9aOGPOTEDvdUDz1FwKim7QXWwmHqtdHnRJfhAxEG46Q==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-remove-scroll@2.7.2:
    resolution: {integrity: sha512-Iqb9NjCCTt6Hf+vOdNIZGdTiH1QSqr27H/Ek9sv/a97gfueI/5h1s3yRi1nngzMUaOOToin5dI1dXKdXiF+u0Q==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-style-singleton@2.2.3:
    resolution: {integrity: sha512-b6jSvxvVnyptAiLjbkWLE/lOnR4lfTtDAl+eUC7RZy+QQWc6wRzIV2CE6xBuMmDxc2qIihtDCZD5NPOFl7fRBQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react@19.2.3:
    resolution: {integrity: sha512-Ku/hhYbVjOQnXDZFv2+RibmLFGwFdeeKHFcOTlrt7xplBnya5OGn/hIRDsqDiSUcfORsDC7MPxwork8jBwsIWA==}
    engines: {node: '>=0.10.0'}

  readdirp@3.6.0:
    resolution: {integrity: sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==}
    engines: {node: '>=8.10.0'}

  recast@0.23.11:
    resolution: {integrity: sha512-YTUo+Flmw4ZXiWfQKGcwwc11KnoRAYgzAE2E7mXKCjSviTKShtxBsN6YUUBB2gtaBzKzeKunxhUwNHQuRryhWA==}
    engines: {node: '>= 4'}

  require-from-string@2.0.2:
    resolution: {integrity: sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==}
    engines: {node: '>=0.10.0'}

  resolve-pkg-maps@1.0.0:
    resolution: {integrity: sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==}

  rollup@4.54.0:
    resolution: {integrity: sha512-3nk8Y3a9Ea8szgKhinMlGMhGMw89mqule3KWczxhIzqudyHdCIOHw8WJlj/r329fACjKLEh13ZSk7oE22kyeIw==}
    engines: {node: '>=18.0.0', npm: '>=8.0.0'}
    hasBin: true

  rou3@0.7.12:
    resolution: {integrity: sha512-iFE4hLDuloSWcD7mjdCDhx2bKcIsYbtOTpfH5MHHLSKMOUyjqQXTeZVa289uuwEGEKFoE/BAPbhaU4B774nceg==}

  safe-buffer@5.2.1:
    resolution: {integrity: sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==}

  safer-buffer@2.1.2:
    resolution: {integrity: sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==}

  saxes@6.0.0:
    resolution: {integrity: sha512-xAg7SOnEhrm5zI3puOOKyy1OMcMlIJZYNJY7xLBwSze0UjhPLnWfj2GF2EpT0jmzaJKIWKHLsaSSajf35bcYnA==}
    engines: {node: '>=v12.22.7'}

  scheduler@0.27.0:
    resolution: {integrity: sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==}

  semver@6.3.1:
    resolution: {integrity: sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==}
    hasBin: true

  semver@7.7.3:
    resolution: {integrity: sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==}
    engines: {node: '>=10'}
    hasBin: true

  seroval-plugins@1.3.3:
    resolution: {integrity: sha512-16OL3NnUBw8JG1jBLUoZJsLnQq0n5Ua6aHalhJK4fMQkz1lqR7Osz1sA30trBtd9VUDc2NgkuRCn8+/pBwqZ+w==}
    engines: {node: '>=10'}
    peerDependencies:
      seroval: ^1.0

  seroval-plugins@1.4.2:
    resolution: {integrity: sha512-X7p4MEDTi+60o2sXZ4bnDBhgsUYDSkQEvzYZuJyFqWg9jcoPsHts5nrg5O956py2wyt28lUrBxk0M0/wU8URpA==}
    engines: {node: '>=10'}
    peerDependencies:
      seroval: ^1.0

  seroval@1.3.2:
    resolution: {integrity: sha512-RbcPH1n5cfwKrru7v7+zrZvjLurgHhGyso3HTyGtRivGWgYjbOmGuivCQaORNELjNONoK35nj28EoWul9sb1zQ==}
    engines: {node: '>=10'}

  seroval@1.4.2:
    resolution: {integrity: sha512-N3HEHRCZYn3cQbsC4B5ldj9j+tHdf4JZoYPlcI4rRYu0Xy4qN8MQf1Z08EibzB0WpgRG5BGK08FTrmM66eSzKQ==}
    engines: {node: '>=10'}

  shell-quote@1.8.3:
    resolution: {integrity: sha512-ObmnIF4hXNg1BqhnHmgbDETF8dLPCggZWBjkQfhZpbszZnYur5DUljTcCHii5LC3J5E0yeO/1LIMyH+UvHQgyw==}
    engines: {node: '>= 0.4'}

  siginfo@2.0.0:
    resolution: {integrity: sha512-ybx0WO1/8bSBLEWXZvEd7gMW3Sn3JFlW3TvX1nREbDLRNQNaeNN8WK0meBwPdAaOI7TtRRRJn/Es1zhrrCHu7g==}

  solid-js@1.9.10:
    resolution: {integrity: sha512-Coz956cos/EPDlhs6+jsdTxKuJDPT7B5SVIWgABwROyxjY7Xbr8wkzD68Et+NxnV7DLJ3nJdAC2r9InuV/4Jew==}

  source-map-js@1.2.1:
    resolution: {integrity: sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==}
    engines: {node: '>=0.10.0'}

  source-map@0.6.1:
    resolution: {integrity: sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==}
    engines: {node: '>=0.10.0'}

  source-map@0.7.6:
    resolution: {integrity: sha512-i5uvt8C3ikiWeNZSVZNWcfZPItFQOsYTUAOkcUPGd8DqDy1uOUikjt5dG+uRlwyvR108Fb9DOd4GvXfT0N2/uQ==}
    engines: {node: '>= 12'}

  srvx@0.9.8:
    resolution: {integrity: sha512-RZaxTKJEE/14HYn8COLuUOJAt0U55N9l1Xf6jj+T0GoA01EUH1Xz5JtSUOI+EHn+AEgPCVn7gk6jHJffrr06fQ==}
    engines: {node: '>=20.16.0'}
    hasBin: true

  stackback@0.0.2:
    resolution: {integrity: sha512-1XMJE5fQo1jGH6Y/7ebnwPOBEkIEnT4QF32d5R1+VXdXveM0IBMJt8zfaxX1P3QhVwrYe+576+jkANtSS2mBbw==}

  std-env@3.10.0:
    resolution: {integrity: sha512-5GS12FdOZNliM5mAOxFRg7Ir0pWz8MdpYm6AY6VPkGpbA7ZzmbzNcBJQ0GPvvyWgcY7QAhCgf9Uy89I03faLkg==}

  strip-literal@3.1.0:
    resolution: {integrity: sha512-8r3mkIM/2+PpjHoOtiAW8Rg3jJLHaV7xPwG+YRGrv6FP0wwk/toTpATxWYOW0BKdWwl82VT2tFYi5DlROa0Mxg==}

  symbol-tree@3.2.4:
    resolution: {integrity: sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==}

  tailwind-merge@3.4.0:
    resolution: {integrity: sha512-uSaO4gnW+b3Y2aWoWfFpX62vn2sR3skfhbjsEnaBI81WD1wBLlHZe5sWf0AqjksNdYTbGBEd0UasQMT3SNV15g==}

  tailwindcss@4.1.18:
    resolution: {integrity: sha512-4+Z+0yiYyEtUVCScyfHCxOYP06L5Ne+JiHhY2IjR2KWMIWhJOYZKLSGZaP5HkZ8+bY0cxfzwDE5uOmzFXyIwxw==}

  tapable@2.3.0:
    resolution: {integrity: sha512-g9ljZiwki/LfxmQADO3dEY1CbpmXT5Hm2fJ+QaGKwSXUylMybePR7/67YW7jOrrvjEgL1Fmz5kzyAjWVWLlucg==}
    engines: {node: '>=6'}

  tiny-invariant@1.3.3:
    resolution: {integrity: sha512-+FbBPE1o9QAYvviau/qC5SE3caw21q3xkvWKBtja5vgqOWIHHJ3ioaq1VPfn/Szqctz2bU/oYeKd9/z5BL+PVg==}

  tiny-warning@1.0.3:
    resolution: {integrity: sha512-lBN9zLN/oAf68o3zNXYrdCt1kP8WsiGW8Oo2ka41b2IM5JL/S1CTyX1rW0mb/zSuJun0ZUrDxx4sqvYS2FWzPA==}

  tinybench@2.9.0:
    resolution: {integrity: sha512-0+DUvqWMValLmha6lr4kD8iAMK1HzV0/aKnCtWb9v9641TnP/MFb7Pc2bxoxQjTXAErryXVgUOfv2YqNllqGeg==}

  tinyexec@0.3.2:
    resolution: {integrity: sha512-KQQR9yN7R5+OSwaK0XQoj22pwHoTlgYqmUscPYoknOoWCWfj/5/ABTMRi69FrKU5ffPVh5QcFikpWJI/P1ocHA==}

  tinyglobby@0.2.15:
    resolution: {integrity: sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==}
    engines: {node: '>=12.0.0'}

  tinypool@1.1.1:
    resolution: {integrity: sha512-Zba82s87IFq9A9XmjiX5uZA/ARWDrB03OHlq+Vw1fSdt0I+4/Kutwy8BP4Y/y/aORMo61FQ0vIb5j44vSo5Pkg==}
    engines: {node: ^18.0.0 || >=20.0.0}

  tinyrainbow@2.0.0:
    resolution: {integrity: sha512-op4nsTR47R6p0vMUUoYl/a+ljLFVtlfaXkLQmqfLR1qHma1h/ysYk4hEXZ880bf2CYgTskvTa/e196Vd5dDQXw==}
    engines: {node: '>=14.0.0'}

  tinyspy@4.0.4:
    resolution: {integrity: sha512-azl+t0z7pw/z958Gy9svOTuzqIk6xq+NSheJzn5MMWtWTFywIacg2wUlzKFGtt3cthx0r2SxMK0yzJOR0IES7Q==}
    engines: {node: '>=14.0.0'}

  tldts-core@7.0.19:
    resolution: {integrity: sha512-lJX2dEWx0SGH4O6p+7FPwYmJ/bu1JbcGJ8RLaG9b7liIgZ85itUVEPbMtWRVrde/0fnDPEPHW10ZsKW3kVsE9A==}

  tldts@7.0.19:
    resolution: {integrity: sha512-8PWx8tvC4jDB39BQw1m4x8y5MH1BcQ5xHeL2n7UVFulMPH/3Q0uiamahFJ3lXA0zO2SUyRXuVVbWSDmstlt9YA==}
    hasBin: true

  to-regex-range@5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}

  tough-cookie@6.0.0:
    resolution: {integrity: sha512-kXuRi1mtaKMrsLUxz3sQYvVl37B0Ns6MzfrtV5DvJceE9bPyspOqk9xxv7XbZWcfLWbFmm997vl83qUWVJA64w==}
    engines: {node: '>=16'}

  tr46@6.0.0:
    resolution: {integrity: sha512-bLVMLPtstlZ4iMQHpFHTR7GAGj2jxi8Dg0s2h2MafAE4uSWF98FC/3MomU51iQAMf8/qDUbKWf5GxuvvVcXEhw==}
    engines: {node: '>=20'}

  tsconfck@3.1.6:
    resolution: {integrity: sha512-ks6Vjr/jEw0P1gmOVwutM3B7fWxoWBL2KRDb1JfqGVawBmO5UsvmWOQFGHBPl5yxYz4eERr19E6L7NMv+Fej4w==}
    engines: {node: ^18 || >=20}
    hasBin: true
    peerDependencies:
      typescript: ^5.0.0
    peerDependenciesMeta:
      typescript:
        optional: true

  tslib@2.8.1:
    resolution: {integrity: sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==}

  tsx@4.21.0:
    resolution: {integrity: sha512-5C1sg4USs1lfG0GFb2RLXsdpXqBSEhAaA/0kPL01wxzpMqLILNxIxIOKiILz+cdg/pLnOUxFYOR5yhHU666wbw==}
    engines: {node: '>=18.0.0'}
    hasBin: true

  typescript@5.9.3:
    resolution: {integrity: sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==}
    engines: {node: '>=14.17'}
    hasBin: true

  ufo@1.6.1:
    resolution: {integrity: sha512-9a4/uxlTWJ4+a5i0ooc1rU7C7YOw3wT+UGqdeNNHWnOF9qcMBgLRS+4IYUqbczewFx4mLEig6gawh7X6mFlEkA==}

  undici-types@6.21.0:
    resolution: {integrity: sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==}

  undici@7.16.0:
    resolution: {integrity: sha512-QEg3HPMll0o3t2ourKwOeUAZ159Kn9mx5pnzHRQO8+Wixmh88YdZRiIwat0iNzNNXn0yoEtXJqFpyW7eM8BV7g==}
    engines: {node: '>=20.18.1'}

  unenv@2.0.0-rc.24:
    resolution: {integrity: sha512-i7qRCmY42zmCwnYlh9H2SvLEypEFGye5iRmEMKjcGi7zk9UquigRjFtTLz0TYqr0ZGLZhaMHl/foy1bZR+Cwlw==}

  unplugin@2.3.11:
    resolution: {integrity: sha512-5uKD0nqiYVzlmCRs01Fhs2BdkEgBS3SAVP6ndrBsuK42iC2+JHyxM05Rm9G8+5mkmRtzMZGY8Ct5+mliZxU/Ww==}
    engines: {node: '>=18.12.0'}

  unstorage@2.0.0-alpha.4:
    resolution: {integrity: sha512-ywXZMZRfrvmO1giJeMTCw6VUn0ALYxVl8pFqJPStiyQUvgJImejtAHrKvXPj4QGJAoS/iLGcVGF6ljN/lkh1bw==}
    peerDependencies:
      '@azure/app-configuration': ^1.8.0
      '@azure/cosmos': ^4.2.0
      '@azure/data-tables': ^13.3.0
      '@azure/identity': ^4.6.0
      '@azure/keyvault-secrets': ^4.9.0
      '@azure/storage-blob': ^12.26.0
      '@capacitor/preferences': ^6.0.3 || ^7.0.0
      '@deno/kv': '>=0.9.0'
      '@netlify/blobs': ^6.5.0 || ^7.0.0 || ^8.1.0 || ^9.0.0 || ^10.0.0
      '@planetscale/database': ^1.19.0
      '@upstash/redis': ^1.34.3
      '@vercel/blob': '>=0.27.1'
      '@vercel/functions': ^2.2.12 || ^3.0.0
      '@vercel/kv': ^1.0.1
      aws4fetch: ^1.0.20
      chokidar: ^4.0.3
      db0: '>=0.2.1'
      idb-keyval: ^6.2.1
      ioredis: ^5.4.2
      lru-cache: ^11.2.2
      mongodb: ^6.20.0
      ofetch: '*'
      uploadthing: ^7.4.4
    peerDependenciesMeta:
      '@azure/app-configuration':
        optional: true
      '@azure/cosmos':
        optional: true
      '@azure/data-tables':
        optional: true
      '@azure/identity':
        optional: true
      '@azure/keyvault-secrets':
        optional: true
      '@azure/storage-blob':
        optional: true
      '@capacitor/preferences':
        optional: true
      '@deno/kv':
        optional: true
      '@netlify/blobs':
        optional: true
      '@planetscale/database':
        optional: true
      '@upstash/redis':
        optional: true
      '@vercel/blob':
        optional: true
      '@vercel/functions':
        optional: true
      '@vercel/kv':
        optional: true
      aws4fetch:
        optional: true
      chokidar:
        optional: true
      db0:
        optional: true
      idb-keyval:
        optional: true
      ioredis:
        optional: true
      lru-cache:
        optional: true
      mongodb:
        optional: true
      ofetch:
        optional: true
      uploadthing:
        optional: true

  update-browserslist-db@1.2.3:
    resolution: {integrity: sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==}
    hasBin: true
    peerDependencies:
      browserslist: '>= 4.21.0'

  use-callback-ref@1.3.3:
    resolution: {integrity: sha512-jQL3lRnocaFtu3V00JToYz/4QkNWswxijDaCVNZRiRTO3HQDLsdu1ZtmIUvV4yPp+rvWm5j0y0TG/S61cuijTg==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  use-sidecar@1.1.3:
    resolution: {integrity: sha512-Fedw0aZvkhynoPYlA5WXrMCAMm+nSWdZt6lzJQ7Ok8S6Q+VsHmHpRWndVRJ8Be0ZbkfPc5LRYH+5XrzXcEeLRQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  use-sync-external-store@1.6.0:
    resolution: {integrity: sha512-Pp6GSwGP/NrPIrxVFAIkOQeyw8lFenOHijQWkUTrDvrF4ALqylP2C/KCkeS9dpUM3KvYRQhna5vt7IL95+ZQ9w==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0

  vite-node@3.2.4:
    resolution: {integrity: sha512-EbKSKh+bh1E1IFxeO0pg1n4dvoOTt0UDiXMd/qn++r98+jPO1xtJilvXldeuQ8giIB5IkpjCgMleHMNEsGH6pg==}
    engines: {node: ^18.0.0 || ^20.0.0 || >=22.0.0}
    hasBin: true

  vite-tsconfig-paths@6.0.3:
    resolution: {integrity: sha512-7bL7FPX/DSviaZGYUKowWF1AiDVWjMjxNbE8lyaVGDezkedWqfGhlnQ4BZXre0ZN5P4kAgIJfAlgFDVyjrCIyg==}
    peerDependencies:
      vite: '*'
    peerDependenciesMeta:
      vite:
        optional: true

  vite@7.3.0:
    resolution: {integrity: sha512-dZwN5L1VlUBewiP6H9s2+B3e3Jg96D0vzN+Ry73sOefebhYr9f94wwkMNN/9ouoU8pV1BqA1d1zGk8928cx0rg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    hasBin: true
    peerDependencies:
      '@types/node': ^20.19.0 || >=22.12.0
      jiti: '>=1.21.0'
      less: ^4.0.0
      lightningcss: ^1.21.0
      sass: ^1.70.0
      sass-embedded: ^1.70.0
      stylus: '>=0.54.8'
      sugarss: ^5.0.0
      terser: ^5.16.0
      tsx: ^4.8.1
      yaml: ^2.4.2
    peerDependenciesMeta:
      '@types/node':
        optional: true
      jiti:
        optional: true
      less:
        optional: true
      lightningcss:
        optional: true
      sass:
        optional: true
      sass-embedded:
        optional: true
      stylus:
        optional: true
      sugarss:
        optional: true
      terser:
        optional: true
      tsx:
        optional: true
      yaml:
        optional: true

  vitefu@1.1.1:
    resolution: {integrity: sha512-B/Fegf3i8zh0yFbpzZ21amWzHmuNlLlmJT6n7bu5e+pCHUKQIfXSYokrqOBGEMMe9UG2sostKQF9mml/vYaWJQ==}
    peerDependencies:
      vite: ^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0-beta.0
    peerDependenciesMeta:
      vite:
        optional: true

  vitest@3.2.4:
    resolution: {integrity: sha512-LUCP5ev3GURDysTWiP47wRRUpLKMOfPh+yKTx3kVIEiu5KOMeqzpnYNsKyOoVrULivR8tLcks4+lga33Whn90A==}
    engines: {node: ^18.0.0 || ^20.0.0 || >=22.0.0}
    hasBin: true
    peerDependencies:
      '@edge-runtime/vm': '*'
      '@types/debug': ^4.1.12
      '@types/node': ^18.0.0 || ^20.0.0 || >=22.0.0
      '@vitest/browser': 3.2.4
      '@vitest/ui': 3.2.4
      happy-dom: '*'
      jsdom: '*'
    peerDependenciesMeta:
      '@edge-runtime/vm':
        optional: true
      '@types/debug':
        optional: true
      '@types/node':
        optional: true
      '@vitest/browser':
        optional: true
      '@vitest/ui':
        optional: true
      happy-dom:
        optional: true
      jsdom:
        optional: true

  w3c-xmlserializer@5.0.0:
    resolution: {integrity: sha512-o8qghlI8NZHU1lLPrpi2+Uq7abh4GGPpYANlalzWxyWteJOCsr/P+oPBA49TOLu5FTZO4d3F9MnWJfiMo4BkmA==}
    engines: {node: '>=18'}

  web-vitals@5.1.0:
    resolution: {integrity: sha512-ArI3kx5jI0atlTtmV0fWU3fjpLmq/nD3Zr1iFFlJLaqa5wLBkUSzINwBPySCX/8jRyjlmy1Volw1kz1g9XE4Jg==}

  webidl-conversions@8.0.0:
    resolution: {integrity: sha512-n4W4YFyz5JzOfQeA8oN7dUYpR+MBP3PIUsn2jLjWXwK5ASUzt0Jc/A5sAUZoCYFJRGF0FBKJ+1JjN43rNdsQzA==}
    engines: {node: '>=20'}

  webpack-virtual-modules@0.6.2:
    resolution: {integrity: sha512-66/V2i5hQanC51vBQKPH4aI8NMAcBW59FVBs+rC7eGHupMyfn34q7rZIE+ETlJ+XTevqfUhVVBgSUNSW2flEUQ==}

  whatwg-encoding@3.1.1:
    resolution: {integrity: sha512-6qN4hJdMwfYBtE3YBTTHhoeuUrDBPZmbQaxWAqSALV/MeEnR5z1xd8UKud2RAkFoPkmB+hli1TZSnyi84xz1vQ==}
    engines: {node: '>=18'}

  whatwg-mimetype@4.0.0:
    resolution: {integrity: sha512-QaKxh0eNIi2mE9p2vEdzfagOKHCcj1pJ56EEHGQOVxp8r9/iszLUUV7v89x9O1p/T+NlTM5W7jW6+cz4Fq1YVg==}
    engines: {node: '>=18'}

  whatwg-url@15.1.0:
    resolution: {integrity: sha512-2ytDk0kiEj/yu90JOAp44PVPUkO9+jVhyf+SybKlRHSDlvOOZhdPIrr7xTH64l4WixO2cP+wQIcgujkGBPPz6g==}
    engines: {node: '>=20'}

  why-is-node-running@2.3.0:
    resolution: {integrity: sha512-hUrmaWBdVDcxvYqnyh09zunKzROWjbZTiNy8dBEjkS7ehEDQibXJ7XvlmtbwuTclUiIyN+CyXQD4Vmko8fNm8w==}
    engines: {node: '>=8'}
    hasBin: true

  ws@8.18.3:
    resolution: {integrity: sha512-PEIGCY5tSlUt50cqyMXfCzX+oOPqN0vuGqWzbcJ2xvnkzkq46oOpz7dQaTDBdfICb4N14+GARUDw2XV2N4tvzg==}
    engines: {node: '>=10.0.0'}
    peerDependencies:
      bufferutil: ^4.0.1
      utf-8-validate: '>=5.0.2'
    peerDependenciesMeta:
      bufferutil:
        optional: true
      utf-8-validate:
        optional: true

  xml-name-validator@5.0.0:
    resolution: {integrity: sha512-EvGK8EJ3DhaHfbRlETOWAS5pO9MZITeauHKJyb8wyajUfQUenkIg2MvLDTZ4T/TgIcm3HU0TFBgWWboAZ30UHg==}
    engines: {node: '>=18'}

  xmlbuilder2@4.0.3:
    resolution: {integrity: sha512-bx8Q1STctnNaaDymWnkfQLKofs0mGNN7rLLapJlGuV3VlvegD7Ls4ggMjE3aUSWItCCzU0PEv45lI87iSigiCA==}
    engines: {node: '>=20.0'}

  xmlchars@2.2.0:
    resolution: {integrity: sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw==}

  yallist@3.1.1:
    resolution: {integrity: sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==}

  zod@3.25.76:
    resolution: {integrity: sha512-gzUt/qt81nXsFGKIFcC3YnfEAx5NkunCfnDlvuBSSFS02bcXu4Lmea0AFIUwbLWxWPx3d9p8S5QoaujKcNQxcQ==}

  zod@4.2.1:
    resolution: {integrity: sha512-0wZ1IRqGGhMP76gLqz8EyfBXKk0J2qo2+H3fi4mcUP/KtTocoX08nmIAHl1Z2kJIZbZee8KOpBCSNPRgauucjw==}

snapshots:

  '@acemir/cssom@0.9.30': {}

  '@asamuzakjp/css-color@4.1.1':
    dependencies:
      '@csstools/css-calc': 2.1.4(@csstools/css-parser-algorithms@3.0.5(@csstools/css-tokenizer@3.0.4))(@csstools/css-tokenizer@3.0.4)
      '@csstools/css-color-parser': 3.1.0(@csstools/css-parser-algorithms@3.0.5(@csstools/css-tokenizer@3.0.4))(@csstools/css-tokenizer@3.0.4)
      '@csstools/css-parser-algorithms': 3.0.5(@csstools/css-tokenizer@3.0.4)
      '@csstools/css-tokenizer': 3.0.4
      lru-cache: 11.2.4

  '@asamuzakjp/dom-selector@6.7.6':
    dependencies:
      '@asamuzakjp/nwsapi': 2.3.9
      bidi-js: 1.0.3
      css-tree: 3.1.0
      is-potential-custom-element-name: 1.0.1
      lru-cache: 11.2.4

  '@asamuzakjp/nwsapi@2.3.9': {}

  '@babel/code-frame@7.27.1':
    dependencies:
      '@babel/helper-validator-identifier': 7.28.5
      js-tokens: 4.0.0
      picocolors: 1.1.1

  '@babel/compat-data@7.28.5': {}

  '@babel/core@7.28.5':
    dependencies:
      '@babel/code-frame': 7.27.1
      '@babel/generator': 7.28.5
      '@babel/helper-compilation-targets': 7.27.2
      '@babel/helper-module-transforms': 7.28.3(@babel/core@7.28.5)
      '@babel/helpers': 7.28.4
      '@babel/parser': 7.28.5
      '@babel/template': 7.27.2
      '@babel/traverse': 7.28.5
      '@babel/types': 7.28.5
      '@jridgewell/remapping': 2.3.5
      convert-source-map: 2.0.0
      debug: 4.4.3
      gensync: 1.0.0-beta.2
      json5: 2.2.3
      semver: 6.3.1
    transitivePeerDependencies:
      - supports-color

  '@babel/generator@7.28.5':
    dependencies:
      '@babel/parser': 7.28.5
      '@babel/types': 7.28.5
      '@jridgewell/gen-mapping': 0.3.13
      '@jridgewell/trace-mapping': 0.3.31
      jsesc: 3.1.0

  '@babel/helper-compilation-targets@7.27.2':
    dependencies:
      '@babel/compat-data': 7.28.5
      '@babel/helper-validator-option': 7.27.1
      browserslist: 4.28.1
      lru-cache: 5.1.1
      semver: 6.3.1

  '@babel/helper-globals@7.28.0': {}

  '@babel/helper-module-imports@7.27.1':
    dependencies:
      '@babel/traverse': 7.28.5
      '@babel/types': 7.28.5
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-module-transforms@7.28.3(@babel/core@7.28.5)':
    dependencies:
      '@babel/core': 7.28.5
      '@babel/helper-module-imports': 7.27.1
      '@babel/helper-validator-identifier': 7.28.5
      '@babel/traverse': 7.28.5
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-plugin-utils@7.27.1': {}

  '@babel/helper-string-parser@7.27.1': {}

  '@babel/helper-validator-identifier@7.28.5': {}

  '@babel/helper-validator-option@7.27.1': {}

  '@babel/helpers@7.28.4':
    dependencies:
      '@babel/template': 7.27.2
      '@babel/types': 7.28.5

  '@babel/parser@7.28.5':
    dependencies:
      '@babel/types': 7.28.5

  '@babel/plugin-syntax-jsx@7.27.1(@babel/core@7.28.5)':
    dependencies:
      '@babel/core': 7.28.5
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-syntax-typescript@7.27.1(@babel/core@7.28.5)':
    dependencies:
      '@babel/core': 7.28.5
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-react-jsx-self@7.27.1(@babel/core@7.28.5)':
    dependencies:
      '@babel/core': 7.28.5
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-react-jsx-source@7.27.1(@babel/core@7.28.5)':
    dependencies:
      '@babel/core': 7.28.5
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/runtime@7.28.4': {}

  '@babel/template@7.27.2':
    dependencies:
      '@babel/code-frame': 7.27.1
      '@babel/parser': 7.28.5
      '@babel/types': 7.28.5

  '@babel/traverse@7.28.5':
    dependencies:
      '@babel/code-frame': 7.27.1
      '@babel/generator': 7.28.5
      '@babel/helper-globals': 7.28.0
      '@babel/parser': 7.28.5
      '@babel/template': 7.27.2
      '@babel/types': 7.28.5
      debug: 4.4.3
    transitivePeerDependencies:
      - supports-color

  '@babel/types@7.28.5':
    dependencies:
      '@babel/helper-string-parser': 7.27.1
      '@babel/helper-validator-identifier': 7.28.5

  '@csstools/color-helpers@5.1.0': {}

  '@csstools/css-calc@2.1.4(@csstools/css-parser-algorithms@3.0.5(@csstools/css-tokenizer@3.0.4))(@csstools/css-tokenizer@3.0.4)':
    dependencies:
      '@csstools/css-parser-algorithms': 3.0.5(@csstools/css-tokenizer@3.0.4)
      '@csstools/css-tokenizer': 3.0.4

  '@csstools/css-color-parser@3.1.0(@csstools/css-parser-algorithms@3.0.5(@csstools/css-tokenizer@3.0.4))(@csstools/css-tokenizer@3.0.4)':
    dependencies:
      '@csstools/color-helpers': 5.1.0
      '@csstools/css-calc': 2.1.4(@csstools/css-parser-algorithms@3.0.5(@csstools/css-tokenizer@3.0.4))(@csstools/css-tokenizer@3.0.4)
      '@csstools/css-parser-algorithms': 3.0.5(@csstools/css-tokenizer@3.0.4)
      '@csstools/css-tokenizer': 3.0.4

  '@csstools/css-parser-algorithms@3.0.5(@csstools/css-tokenizer@3.0.4)':
    dependencies:
      '@csstools/css-tokenizer': 3.0.4

  '@csstools/css-syntax-patches-for-csstree@1.0.22': {}

  '@csstools/css-tokenizer@3.0.4': {}

  '@date-fns/tz@1.4.1': {}

  '@emnapi/core@1.7.1':
    dependencies:
      '@emnapi/wasi-threads': 1.1.0
      tslib: 2.8.1
    optional: true

  '@emnapi/runtime@1.7.1':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@emnapi/wasi-threads@1.1.0':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@esbuild/aix-ppc64@0.27.2':
    optional: true

  '@esbuild/android-arm64@0.27.2':
    optional: true

  '@esbuild/android-arm@0.27.2':
    optional: true

  '@esbuild/android-x64@0.27.2':
    optional: true

  '@esbuild/darwin-arm64@0.27.2':
    optional: true

  '@esbuild/darwin-x64@0.27.2':
    optional: true

  '@esbuild/freebsd-arm64@0.27.2':
    optional: true

  '@esbuild/freebsd-x64@0.27.2':
    optional: true

  '@esbuild/linux-arm64@0.27.2':
    optional: true

  '@esbuild/linux-arm@0.27.2':
    optional: true

  '@esbuild/linux-ia32@0.27.2':
    optional: true

  '@esbuild/linux-loong64@0.27.2':
    optional: true

  '@esbuild/linux-mips64el@0.27.2':
    optional: true

  '@esbuild/linux-ppc64@0.27.2':
    optional: true

  '@esbuild/linux-riscv64@0.27.2':
    optional: true

  '@esbuild/linux-s390x@0.27.2':
    optional: true

  '@esbuild/linux-x64@0.27.2':
    optional: true

  '@esbuild/netbsd-arm64@0.27.2':
    optional: true

  '@esbuild/netbsd-x64@0.27.2':
    optional: true

  '@esbuild/openbsd-arm64@0.27.2':
    optional: true

  '@esbuild/openbsd-x64@0.27.2':
    optional: true

  '@esbuild/openharmony-arm64@0.27.2':
    optional: true

  '@esbuild/sunos-x64@0.27.2':
    optional: true

  '@esbuild/win32-arm64@0.27.2':
    optional: true

  '@esbuild/win32-ia32@0.27.2':
    optional: true

  '@esbuild/win32-x64@0.27.2':
    optional: true

  '@exodus/bytes@1.6.0': {}

  '@floating-ui/core@1.7.3':
    dependencies:
      '@floating-ui/utils': 0.2.10

  '@floating-ui/dom@1.7.4':
    dependencies:
      '@floating-ui/core': 1.7.3
      '@floating-ui/utils': 0.2.10

  '@floating-ui/react-dom@2.1.6(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@floating-ui/dom': 1.7.4
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)

  '@floating-ui/utils@0.2.10': {}

  '@hookform/resolvers@5.2.2(react-hook-form@7.69.0(react@19.2.3))':
    dependencies:
      '@standard-schema/utils': 0.3.0
      react-hook-form: 7.69.0(react@19.2.3)

  '@jridgewell/gen-mapping@0.3.13':
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.5
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/remapping@2.3.5':
    dependencies:
      '@jridgewell/gen-mapping': 0.3.13
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/sourcemap-codec@1.5.5': {}

  '@jridgewell/trace-mapping@0.3.31':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.5.5

  '@napi-rs/wasm-runtime@1.1.0':
    dependencies:
      '@emnapi/core': 1.7.1
      '@emnapi/runtime': 1.7.1
      '@tybys/wasm-util': 0.10.1
    optional: true

  '@notionhq/client@5.6.0': {}

  '@oozcitak/dom@2.0.2':
    dependencies:
      '@oozcitak/infra': 2.0.2
      '@oozcitak/url': 3.0.0
      '@oozcitak/util': 10.0.0

  '@oozcitak/infra@2.0.2':
    dependencies:
      '@oozcitak/util': 10.0.0

  '@oozcitak/url@3.0.0':
    dependencies:
      '@oozcitak/infra': 2.0.2
      '@oozcitak/util': 10.0.0

  '@oozcitak/util@10.0.0': {}

  '@oxc-minify/binding-android-arm64@0.96.0':
    optional: true

  '@oxc-minify/binding-darwin-arm64@0.96.0':
    optional: true

  '@oxc-minify/binding-darwin-x64@0.96.0':
    optional: true

  '@oxc-minify/binding-freebsd-x64@0.96.0':
    optional: true

  '@oxc-minify/binding-linux-arm-gnueabihf@0.96.0':
    optional: true

  '@oxc-minify/binding-linux-arm-musleabihf@0.96.0':
    optional: true

  '@oxc-minify/binding-linux-arm64-gnu@0.96.0':
    optional: true

  '@oxc-minify/binding-linux-arm64-musl@0.96.0':
    optional: true

  '@oxc-minify/binding-linux-riscv64-gnu@0.96.0':
    optional: true

  '@oxc-minify/binding-linux-s390x-gnu@0.96.0':
    optional: true

  '@oxc-minify/binding-linux-x64-gnu@0.96.0':
    optional: true

  '@oxc-minify/binding-linux-x64-musl@0.96.0':
    optional: true

  '@oxc-minify/binding-wasm32-wasi@0.96.0':
    dependencies:
      '@napi-rs/wasm-runtime': 1.1.0
    optional: true

  '@oxc-minify/binding-win32-arm64-msvc@0.96.0':
    optional: true

  '@oxc-minify/binding-win32-x64-msvc@0.96.0':
    optional: true

  '@oxc-transform/binding-android-arm64@0.96.0':
    optional: true

  '@oxc-transform/binding-darwin-arm64@0.96.0':
    optional: true

  '@oxc-transform/binding-darwin-x64@0.96.0':
    optional: true

  '@oxc-transform/binding-freebsd-x64@0.96.0':
    optional: true

  '@oxc-transform/binding-linux-arm-gnueabihf@0.96.0':
    optional: true

  '@oxc-transform/binding-linux-arm-musleabihf@0.96.0':
    optional: true

  '@oxc-transform/binding-linux-arm64-gnu@0.96.0':
    optional: true

  '@oxc-transform/binding-linux-arm64-musl@0.96.0':
    optional: true

  '@oxc-transform/binding-linux-riscv64-gnu@0.96.0':
    optional: true

  '@oxc-transform/binding-linux-s390x-gnu@0.96.0':
    optional: true

  '@oxc-transform/binding-linux-x64-gnu@0.96.0':
    optional: true

  '@oxc-transform/binding-linux-x64-musl@0.96.0':
    optional: true

  '@oxc-transform/binding-wasm32-wasi@0.96.0':
    dependencies:
      '@napi-rs/wasm-runtime': 1.1.0
    optional: true

  '@oxc-transform/binding-win32-arm64-msvc@0.96.0':
    optional: true

  '@oxc-transform/binding-win32-x64-msvc@0.96.0':
    optional: true

  '@radix-ui/number@1.1.1': {}

  '@radix-ui/primitive@1.1.3': {}

  '@radix-ui/react-arrow@1.1.7(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-avatar@1.1.11(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/react-context': 1.1.3(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-primitive': 2.1.4(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-is-hydrated': 0.1.0(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-collection@1.1.7(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-slot': 1.2.3(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-compose-refs@1.1.2(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      react: 19.2.3
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-context@1.1.2(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      react: 19.2.3
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-context@1.1.3(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      react: 19.2.3
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-dialog@1.1.15(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/primitive': 1.1.3
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-dismissable-layer': 1.1.11(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-focus-guards': 1.1.3(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-focus-scope': 1.1.7(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-id': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-portal': 1.1.9(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-presence': 1.1.5(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-slot': 1.2.3(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@19.2.7)(react@19.2.3)
      aria-hidden: 1.2.6
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
      react-remove-scroll: 2.7.2(@types/react@19.2.7)(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-direction@1.1.1(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      react: 19.2.3
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-dismissable-layer@1.1.11(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/primitive': 1.1.3
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-escape-keydown': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-dropdown-menu@2.1.16(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/primitive': 1.1.3
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-id': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-menu': 2.1.16(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-focus-guards@1.1.3(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      react: 19.2.3
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-focus-scope@1.1.7(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-id@1.1.1(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-label@2.1.8(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.4(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-menu@2.1.16(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/primitive': 1.1.3
      '@radix-ui/react-collection': 1.1.7(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-direction': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-dismissable-layer': 1.1.11(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-focus-guards': 1.1.3(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-focus-scope': 1.1.7(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-id': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-popper': 1.2.8(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-portal': 1.1.9(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-presence': 1.1.5(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-roving-focus': 1.1.11(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-slot': 1.2.3(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      aria-hidden: 1.2.6
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
      react-remove-scroll: 2.7.2(@types/react@19.2.7)(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-popper@1.2.8(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@floating-ui/react-dom': 2.1.6(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-arrow': 1.1.7(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-rect': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-size': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/rect': 1.1.1
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-portal@1.1.9(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-presence@1.1.5(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-primitive@2.1.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/react-slot': 1.2.3(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-primitive@2.1.4(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/react-slot': 1.2.4(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-roving-focus@1.1.11(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/primitive': 1.1.3
      '@radix-ui/react-collection': 1.1.7(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-direction': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-id': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-select@2.2.6(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/number': 1.1.1
      '@radix-ui/primitive': 1.1.3
      '@radix-ui/react-collection': 1.1.7(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-direction': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-dismissable-layer': 1.1.11(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-focus-guards': 1.1.3(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-focus-scope': 1.1.7(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-id': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-popper': 1.2.8(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-portal': 1.1.9(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-slot': 1.2.3(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-previous': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-visually-hidden': 1.2.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      aria-hidden: 1.2.6
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
      react-remove-scroll: 2.7.2(@types/react@19.2.7)(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-slot@1.2.3(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-slot@1.2.4(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-tabs@1.1.13(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/primitive': 1.1.3
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-direction': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-id': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-presence': 1.1.5(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-roving-focus': 1.1.11(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-toast@1.2.15(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/primitive': 1.1.3
      '@radix-ui/react-collection': 1.1.7(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-dismissable-layer': 1.1.11(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-portal': 1.1.9(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-presence': 1.1.5(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-visually-hidden': 1.2.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/react-use-callback-ref@1.1.1(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      react: 19.2.3
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-use-controllable-state@1.2.2(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      '@radix-ui/react-use-effect-event': 0.0.2(@types/react@19.2.7)(react@19.2.3)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-use-effect-event@0.0.2(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-use-escape-keydown@1.1.1(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-use-is-hydrated@0.1.0(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      react: 19.2.3
      use-sync-external-store: 1.6.0(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-use-layout-effect@1.1.1(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      react: 19.2.3
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-use-previous@1.1.1(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      react: 19.2.3
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-use-rect@1.1.1(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      '@radix-ui/rect': 1.1.1
      react: 19.2.3
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-use-size@1.1.1(@types/react@19.2.7)(react@19.2.3)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.7)(react@19.2.3)
      react: 19.2.3
    optionalDependencies:
      '@types/react': 19.2.7

  '@radix-ui/react-visually-hidden@1.2.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@radix-ui/rect@1.1.1': {}

  '@rolldown/pluginutils@1.0.0-beta.40': {}

  '@rolldown/pluginutils@1.0.0-beta.53': {}

  '@rollup/rollup-android-arm-eabi@4.54.0':
    optional: true

  '@rollup/rollup-android-arm64@4.54.0':
    optional: true

  '@rollup/rollup-darwin-arm64@4.54.0':
    optional: true

  '@rollup/rollup-darwin-x64@4.54.0':
    optional: true

  '@rollup/rollup-freebsd-arm64@4.54.0':
    optional: true

  '@rollup/rollup-freebsd-x64@4.54.0':
    optional: true

  '@rollup/rollup-linux-arm-gnueabihf@4.54.0':
    optional: true

  '@rollup/rollup-linux-arm-musleabihf@4.54.0':
    optional: true

  '@rollup/rollup-linux-arm64-gnu@4.54.0':
    optional: true

  '@rollup/rollup-linux-arm64-musl@4.54.0':
    optional: true

  '@rollup/rollup-linux-loong64-gnu@4.54.0':
    optional: true

  '@rollup/rollup-linux-ppc64-gnu@4.54.0':
    optional: true

  '@rollup/rollup-linux-riscv64-gnu@4.54.0':
    optional: true

  '@rollup/rollup-linux-riscv64-musl@4.54.0':
    optional: true

  '@rollup/rollup-linux-s390x-gnu@4.54.0':
    optional: true

  '@rollup/rollup-linux-x64-gnu@4.54.0':
    optional: true

  '@rollup/rollup-linux-x64-musl@4.54.0':
    optional: true

  '@rollup/rollup-openharmony-arm64@4.54.0':
    optional: true

  '@rollup/rollup-win32-arm64-msvc@4.54.0':
    optional: true

  '@rollup/rollup-win32-ia32-msvc@4.54.0':
    optional: true

  '@rollup/rollup-win32-x64-gnu@4.54.0':
    optional: true

  '@rollup/rollup-win32-x64-msvc@4.54.0':
    optional: true

  '@solid-primitives/event-listener@2.4.3(solid-js@1.9.10)':
    dependencies:
      '@solid-primitives/utils': 6.3.2(solid-js@1.9.10)
      solid-js: 1.9.10

  '@solid-primitives/keyboard@1.3.3(solid-js@1.9.10)':
    dependencies:
      '@solid-primitives/event-listener': 2.4.3(solid-js@1.9.10)
      '@solid-primitives/rootless': 1.5.2(solid-js@1.9.10)
      '@solid-primitives/utils': 6.3.2(solid-js@1.9.10)
      solid-js: 1.9.10

  '@solid-primitives/resize-observer@2.1.3(solid-js@1.9.10)':
    dependencies:
      '@solid-primitives/event-listener': 2.4.3(solid-js@1.9.10)
      '@solid-primitives/rootless': 1.5.2(solid-js@1.9.10)
      '@solid-primitives/static-store': 0.1.2(solid-js@1.9.10)
      '@solid-primitives/utils': 6.3.2(solid-js@1.9.10)
      solid-js: 1.9.10

  '@solid-primitives/rootless@1.5.2(solid-js@1.9.10)':
    dependencies:
      '@solid-primitives/utils': 6.3.2(solid-js@1.9.10)
      solid-js: 1.9.10

  '@solid-primitives/static-store@0.1.2(solid-js@1.9.10)':
    dependencies:
      '@solid-primitives/utils': 6.3.2(solid-js@1.9.10)
      solid-js: 1.9.10

  '@solid-primitives/utils@6.3.2(solid-js@1.9.10)':
    dependencies:
      solid-js: 1.9.10

  '@standard-schema/utils@0.3.0': {}

  '@tailwindcss/node@4.1.18':
    dependencies:
      '@jridgewell/remapping': 2.3.5
      enhanced-resolve: 5.18.4
      jiti: 2.6.1
      lightningcss: 1.30.2
      magic-string: 0.30.21
      source-map-js: 1.2.1
      tailwindcss: 4.1.18

  '@tailwindcss/oxide-android-arm64@4.1.18':
    optional: true

  '@tailwindcss/oxide-darwin-arm64@4.1.18':
    optional: true

  '@tailwindcss/oxide-darwin-x64@4.1.18':
    optional: true

  '@tailwindcss/oxide-freebsd-x64@4.1.18':
    optional: true

  '@tailwindcss/oxide-linux-arm-gnueabihf@4.1.18':
    optional: true

  '@tailwindcss/oxide-linux-arm64-gnu@4.1.18':
    optional: true

  '@tailwindcss/oxide-linux-arm64-musl@4.1.18':
    optional: true

  '@tailwindcss/oxide-linux-x64-gnu@4.1.18':
    optional: true

  '@tailwindcss/oxide-linux-x64-musl@4.1.18':
    optional: true

  '@tailwindcss/oxide-wasm32-wasi@4.1.18':
    optional: true

  '@tailwindcss/oxide-win32-arm64-msvc@4.1.18':
    optional: true

  '@tailwindcss/oxide-win32-x64-msvc@4.1.18':
    optional: true

  '@tailwindcss/oxide@4.1.18':
    optionalDependencies:
      '@tailwindcss/oxide-android-arm64': 4.1.18
      '@tailwindcss/oxide-darwin-arm64': 4.1.18
      '@tailwindcss/oxide-darwin-x64': 4.1.18
      '@tailwindcss/oxide-freebsd-x64': 4.1.18
      '@tailwindcss/oxide-linux-arm-gnueabihf': 4.1.18
      '@tailwindcss/oxide-linux-arm64-gnu': 4.1.18
      '@tailwindcss/oxide-linux-arm64-musl': 4.1.18
      '@tailwindcss/oxide-linux-x64-gnu': 4.1.18
      '@tailwindcss/oxide-linux-x64-musl': 4.1.18
      '@tailwindcss/oxide-wasm32-wasi': 4.1.18
      '@tailwindcss/oxide-win32-arm64-msvc': 4.1.18
      '@tailwindcss/oxide-win32-x64-msvc': 4.1.18

  '@tailwindcss/vite@4.1.18(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))':
    dependencies:
      '@tailwindcss/node': 4.1.18
      '@tailwindcss/oxide': 4.1.18
      tailwindcss: 4.1.18
      vite: 7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)

  '@tanstack/devtools-client@0.0.3':
    dependencies:
      '@tanstack/devtools-event-client': 0.3.5

  '@tanstack/devtools-client@0.0.5':
    dependencies:
      '@tanstack/devtools-event-client': 0.4.0

  '@tanstack/devtools-event-bus@0.3.3':
    dependencies:
      ws: 8.18.3
    transitivePeerDependencies:
      - bufferutil
      - utf-8-validate

  '@tanstack/devtools-event-client@0.3.5': {}

  '@tanstack/devtools-event-client@0.4.0': {}

  '@tanstack/devtools-ui@0.4.4(csstype@3.2.3)(solid-js@1.9.10)':
    dependencies:
      clsx: 2.1.1
      goober: 2.1.18(csstype@3.2.3)
      solid-js: 1.9.10
    transitivePeerDependencies:
      - csstype

  '@tanstack/devtools-vite@0.3.12(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))':
    dependencies:
      '@babel/core': 7.28.5
      '@babel/generator': 7.28.5
      '@babel/parser': 7.28.5
      '@babel/traverse': 7.28.5
      '@babel/types': 7.28.5
      '@tanstack/devtools-client': 0.0.5
      '@tanstack/devtools-event-bus': 0.3.3
      chalk: 5.6.2
      launch-editor: 2.12.0
      picomatch: 4.0.3
      vite: 7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)
    transitivePeerDependencies:
      - bufferutil
      - supports-color
      - utf-8-validate

  '@tanstack/devtools@0.7.0(csstype@3.2.3)(solid-js@1.9.10)':
    dependencies:
      '@solid-primitives/event-listener': 2.4.3(solid-js@1.9.10)
      '@solid-primitives/keyboard': 1.3.3(solid-js@1.9.10)
      '@solid-primitives/resize-observer': 2.1.3(solid-js@1.9.10)
      '@tanstack/devtools-client': 0.0.3
      '@tanstack/devtools-event-bus': 0.3.3
      '@tanstack/devtools-ui': 0.4.4(csstype@3.2.3)(solid-js@1.9.10)
      clsx: 2.1.1
      goober: 2.1.18(csstype@3.2.3)
      solid-js: 1.9.10
    transitivePeerDependencies:
      - bufferutil
      - csstype
      - utf-8-validate

  '@tanstack/form-core@1.27.6':
    dependencies:
      '@tanstack/devtools-event-client': 0.4.0
      '@tanstack/pacer-lite': 0.1.1
      '@tanstack/store': 0.7.7

  '@tanstack/history@1.141.0': {}

  '@tanstack/pacer-lite@0.1.1': {}

  '@tanstack/query-core@5.90.12': {}

  '@tanstack/react-devtools@0.7.11(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(csstype@3.2.3)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)(solid-js@1.9.10)':
    dependencies:
      '@tanstack/devtools': 0.7.0(csstype@3.2.3)(solid-js@1.9.10)
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    transitivePeerDependencies:
      - bufferutil
      - csstype
      - solid-js
      - utf-8-validate

  '@tanstack/react-form@1.27.6(@tanstack/react-start@1.145.0(crossws@0.4.1(srvx@0.9.8))(react-dom@19.2.3(react@19.2.3))(react@19.2.3)(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)))(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@tanstack/form-core': 1.27.6
      '@tanstack/react-store': 0.8.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      react: 19.2.3
    optionalDependencies:
      '@tanstack/react-start': 1.145.0(crossws@0.4.1(srvx@0.9.8))(react-dom@19.2.3(react@19.2.3))(react@19.2.3)(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))
    transitivePeerDependencies:
      - react-dom

  '@tanstack/react-query@5.90.12(react@19.2.3)':
    dependencies:
      '@tanstack/query-core': 5.90.12
      react: 19.2.3

  '@tanstack/react-router-devtools@1.144.0(@tanstack/react-router@1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3))(@tanstack/router-core@1.144.0)(csstype@3.2.3)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)(solid-js@1.9.10)':
    dependencies:
      '@tanstack/react-router': 1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@tanstack/router-devtools-core': 1.144.0(@tanstack/router-core@1.144.0)(csstype@3.2.3)(solid-js@1.9.10)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@tanstack/router-core': 1.144.0
    transitivePeerDependencies:
      - csstype
      - solid-js

  '@tanstack/react-router-ssr-query@1.144.0(@tanstack/query-core@5.90.12)(@tanstack/react-query@5.90.12(react@19.2.3))(@tanstack/react-router@1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3))(@tanstack/router-core@1.144.0)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@tanstack/query-core': 5.90.12
      '@tanstack/react-query': 5.90.12(react@19.2.3)
      '@tanstack/react-router': 1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@tanstack/router-ssr-query-core': 1.144.0(@tanstack/query-core@5.90.12)(@tanstack/router-core@1.144.0)
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    transitivePeerDependencies:
      - '@tanstack/router-core'

  '@tanstack/react-router@1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@tanstack/history': 1.141.0
      '@tanstack/react-store': 0.8.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@tanstack/router-core': 1.144.0
      isbot: 5.1.32
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
      tiny-invariant: 1.3.3
      tiny-warning: 1.0.3

  '@tanstack/react-start-client@1.145.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@tanstack/react-router': 1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@tanstack/router-core': 1.144.0
      '@tanstack/start-client-core': 1.145.0
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
      tiny-invariant: 1.3.3
      tiny-warning: 1.0.3

  '@tanstack/react-start-server@1.145.0(crossws@0.4.1(srvx@0.9.8))(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@tanstack/history': 1.141.0
      '@tanstack/react-router': 1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@tanstack/router-core': 1.144.0
      '@tanstack/start-client-core': 1.145.0
      '@tanstack/start-server-core': 1.145.0(crossws@0.4.1(srvx@0.9.8))
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    transitivePeerDependencies:
      - crossws

  '@tanstack/react-start@1.145.0(crossws@0.4.1(srvx@0.9.8))(react-dom@19.2.3(react@19.2.3))(react@19.2.3)(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))':
    dependencies:
      '@tanstack/react-router': 1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@tanstack/react-start-client': 1.145.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@tanstack/react-start-server': 1.145.0(crossws@0.4.1(srvx@0.9.8))(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      '@tanstack/router-utils': 1.143.11
      '@tanstack/start-client-core': 1.145.0
      '@tanstack/start-plugin-core': 1.145.0(@tanstack/react-router@1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3))(crossws@0.4.1(srvx@0.9.8))(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))
      '@tanstack/start-server-core': 1.145.0(crossws@0.4.1(srvx@0.9.8))
      pathe: 2.0.3
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
      vite: 7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)
    transitivePeerDependencies:
      - '@rsbuild/core'
      - crossws
      - supports-color
      - vite-plugin-solid
      - webpack

  '@tanstack/react-store@0.8.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@tanstack/store': 0.8.0
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
      use-sync-external-store: 1.6.0(react@19.2.3)

  '@tanstack/react-table@8.21.3(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@tanstack/table-core': 8.21.3
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)

  '@tanstack/react-virtual@3.13.13(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@tanstack/virtual-core': 3.13.13
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)

  '@tanstack/router-core@1.144.0':
    dependencies:
      '@tanstack/history': 1.141.0
      '@tanstack/store': 0.8.0
      cookie-es: 2.0.0
      seroval: 1.4.2
      seroval-plugins: 1.4.2(seroval@1.4.2)
      tiny-invariant: 1.3.3
      tiny-warning: 1.0.3

  '@tanstack/router-devtools-core@1.144.0(@tanstack/router-core@1.144.0)(csstype@3.2.3)(solid-js@1.9.10)':
    dependencies:
      '@tanstack/router-core': 1.144.0
      clsx: 2.1.1
      goober: 2.1.18(csstype@3.2.3)
      solid-js: 1.9.10
      tiny-invariant: 1.3.3
    optionalDependencies:
      csstype: 3.2.3

  '@tanstack/router-generator@1.144.0':
    dependencies:
      '@tanstack/router-core': 1.144.0
      '@tanstack/router-utils': 1.143.11
      '@tanstack/virtual-file-routes': 1.141.0
      prettier: 3.7.4
      recast: 0.23.11
      source-map: 0.7.6
      tsx: 4.21.0
      zod: 3.25.76
    transitivePeerDependencies:
      - supports-color

  '@tanstack/router-plugin@1.144.0(@tanstack/react-router@1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3))(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))':
    dependencies:
      '@babel/core': 7.28.5
      '@babel/plugin-syntax-jsx': 7.27.1(@babel/core@7.28.5)
      '@babel/plugin-syntax-typescript': 7.27.1(@babel/core@7.28.5)
      '@babel/template': 7.27.2
      '@babel/traverse': 7.28.5
      '@babel/types': 7.28.5
      '@tanstack/router-core': 1.144.0
      '@tanstack/router-generator': 1.144.0
      '@tanstack/router-utils': 1.143.11
      '@tanstack/virtual-file-routes': 1.141.0
      babel-dead-code-elimination: 1.0.11
      chokidar: 3.6.0
      unplugin: 2.3.11
      zod: 3.25.76
    optionalDependencies:
      '@tanstack/react-router': 1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3)
      vite: 7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)
    transitivePeerDependencies:
      - supports-color

  '@tanstack/router-ssr-query-core@1.144.0(@tanstack/query-core@5.90.12)(@tanstack/router-core@1.144.0)':
    dependencies:
      '@tanstack/query-core': 5.90.12
      '@tanstack/router-core': 1.144.0

  '@tanstack/router-utils@1.143.11':
    dependencies:
      '@babel/core': 7.28.5
      '@babel/generator': 7.28.5
      '@babel/parser': 7.28.5
      ansis: 4.2.0
      diff: 8.0.2
      pathe: 2.0.3
      tinyglobby: 0.2.15
    transitivePeerDependencies:
      - supports-color

  '@tanstack/start-client-core@1.145.0':
    dependencies:
      '@tanstack/router-core': 1.144.0
      '@tanstack/start-fn-stubs': 1.143.8
      '@tanstack/start-storage-context': 1.144.0
      seroval: 1.4.2
      tiny-invariant: 1.3.3
      tiny-warning: 1.0.3

  '@tanstack/start-fn-stubs@1.143.8': {}

  '@tanstack/start-plugin-core@1.145.0(@tanstack/react-router@1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3))(crossws@0.4.1(srvx@0.9.8))(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))':
    dependencies:
      '@babel/code-frame': 7.27.1
      '@babel/core': 7.28.5
      '@babel/types': 7.28.5
      '@rolldown/pluginutils': 1.0.0-beta.40
      '@tanstack/router-core': 1.144.0
      '@tanstack/router-generator': 1.144.0
      '@tanstack/router-plugin': 1.144.0(@tanstack/react-router@1.144.0(react-dom@19.2.3(react@19.2.3))(react@19.2.3))(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))
      '@tanstack/router-utils': 1.143.11
      '@tanstack/start-client-core': 1.145.0
      '@tanstack/start-server-core': 1.145.0(crossws@0.4.1(srvx@0.9.8))
      babel-dead-code-elimination: 1.0.11
      cheerio: 1.1.2
      exsolve: 1.0.8
      pathe: 2.0.3
      srvx: 0.9.8
      tinyglobby: 0.2.15
      ufo: 1.6.1
      vite: 7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)
      vitefu: 1.1.1(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))
      xmlbuilder2: 4.0.3
      zod: 3.25.76
    transitivePeerDependencies:
      - '@rsbuild/core'
      - '@tanstack/react-router'
      - crossws
      - supports-color
      - vite-plugin-solid
      - webpack

  '@tanstack/start-server-core@1.145.0(crossws@0.4.1(srvx@0.9.8))':
    dependencies:
      '@tanstack/history': 1.141.0
      '@tanstack/router-core': 1.144.0
      '@tanstack/start-client-core': 1.145.0
      '@tanstack/start-storage-context': 1.144.0
      h3-v2: h3@2.0.1-rc.6(crossws@0.4.1(srvx@0.9.8))
      seroval: 1.4.2
      tiny-invariant: 1.3.3
    transitivePeerDependencies:
      - crossws

  '@tanstack/start-storage-context@1.144.0':
    dependencies:
      '@tanstack/router-core': 1.144.0

  '@tanstack/store@0.7.7': {}

  '@tanstack/store@0.8.0': {}

  '@tanstack/table-core@8.21.3': {}

  '@tanstack/virtual-core@3.13.13': {}

  '@tanstack/virtual-file-routes@1.141.0': {}

  '@testing-library/dom@10.4.1':
    dependencies:
      '@babel/code-frame': 7.27.1
      '@babel/runtime': 7.28.4
      '@types/aria-query': 5.0.4
      aria-query: 5.3.0
      dom-accessibility-api: 0.5.16
      lz-string: 1.5.0
      picocolors: 1.1.1
      pretty-format: 27.5.1

  '@testing-library/react@16.3.1(@testing-library/dom@10.4.1)(@types/react-dom@19.2.3(@types/react@19.2.7))(@types/react@19.2.7)(react-dom@19.2.3(react@19.2.3))(react@19.2.3)':
    dependencies:
      '@babel/runtime': 7.28.4
      '@testing-library/dom': 10.4.1
      react: 19.2.3
      react-dom: 19.2.3(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7
      '@types/react-dom': 19.2.3(@types/react@19.2.7)

  '@tybys/wasm-util@0.10.1':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@types/aria-query@5.0.4': {}

  '@types/babel__core@7.20.5':
    dependencies:
      '@babel/parser': 7.28.5
      '@babel/types': 7.28.5
      '@types/babel__generator': 7.27.0
      '@types/babel__template': 7.4.4
      '@types/babel__traverse': 7.28.0

  '@types/babel__generator@7.27.0':
    dependencies:
      '@babel/types': 7.28.5

  '@types/babel__template@7.4.4':
    dependencies:
      '@babel/parser': 7.28.5
      '@babel/types': 7.28.5

  '@types/babel__traverse@7.28.0':
    dependencies:
      '@babel/types': 7.28.5

  '@types/bcryptjs@3.0.0':
    dependencies:
      bcryptjs: 3.0.3

  '@types/chai@5.2.3':
    dependencies:
      '@types/deep-eql': 4.0.2
      assertion-error: 2.0.1

  '@types/deep-eql@4.0.2': {}

  '@types/estree@1.0.8': {}

  '@types/jsonwebtoken@9.0.10':
    dependencies:
      '@types/ms': 2.1.0
      '@types/node': 22.19.3

  '@types/ms@2.1.0': {}

  '@types/node@22.19.3':
    dependencies:
      undici-types: 6.21.0

  '@types/react-dom@19.2.3(@types/react@19.2.7)':
    dependencies:
      '@types/react': 19.2.7

  '@types/react@19.2.7':
    dependencies:
      csstype: 3.2.3

  '@vitejs/plugin-react@5.1.2(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))':
    dependencies:
      '@babel/core': 7.28.5
      '@babel/plugin-transform-react-jsx-self': 7.27.1(@babel/core@7.28.5)
      '@babel/plugin-transform-react-jsx-source': 7.27.1(@babel/core@7.28.5)
      '@rolldown/pluginutils': 1.0.0-beta.53
      '@types/babel__core': 7.20.5
      react-refresh: 0.18.0
      vite: 7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)
    transitivePeerDependencies:
      - supports-color

  '@vitest/expect@3.2.4':
    dependencies:
      '@types/chai': 5.2.3
      '@vitest/spy': 3.2.4
      '@vitest/utils': 3.2.4
      chai: 5.3.3
      tinyrainbow: 2.0.0

  '@vitest/mocker@3.2.4(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))':
    dependencies:
      '@vitest/spy': 3.2.4
      estree-walker: 3.0.3
      magic-string: 0.30.21
    optionalDependencies:
      vite: 7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)

  '@vitest/pretty-format@3.2.4':
    dependencies:
      tinyrainbow: 2.0.0

  '@vitest/runner@3.2.4':
    dependencies:
      '@vitest/utils': 3.2.4
      pathe: 2.0.3
      strip-literal: 3.1.0

  '@vitest/snapshot@3.2.4':
    dependencies:
      '@vitest/pretty-format': 3.2.4
      magic-string: 0.30.21
      pathe: 2.0.3

  '@vitest/spy@3.2.4':
    dependencies:
      tinyspy: 4.0.4

  '@vitest/utils@3.2.4':
    dependencies:
      '@vitest/pretty-format': 3.2.4
      loupe: 3.2.1
      tinyrainbow: 2.0.0

  acorn@8.15.0: {}

  agent-base@7.1.4: {}

  ansi-regex@5.0.1: {}

  ansi-styles@5.2.0: {}

  ansis@4.2.0: {}

  anymatch@3.1.3:
    dependencies:
      normalize-path: 3.0.0
      picomatch: 2.3.1

  argparse@2.0.1: {}

  aria-hidden@1.2.6:
    dependencies:
      tslib: 2.8.1

  aria-query@5.3.0:
    dependencies:
      dequal: 2.0.3

  assertion-error@2.0.1: {}

  ast-types@0.16.1:
    dependencies:
      tslib: 2.8.1

  babel-dead-code-elimination@1.0.11:
    dependencies:
      '@babel/core': 7.28.5
      '@babel/parser': 7.28.5
      '@babel/traverse': 7.28.5
      '@babel/types': 7.28.5
    transitivePeerDependencies:
      - supports-color

  baseline-browser-mapping@2.9.11: {}

  bcryptjs@3.0.3: {}

  bidi-js@1.0.3:
    dependencies:
      require-from-string: 2.0.2

  binary-extensions@2.3.0: {}

  boolbase@1.0.0: {}

  braces@3.0.3:
    dependencies:
      fill-range: 7.1.1

  browserslist@4.28.1:
    dependencies:
      baseline-browser-mapping: 2.9.11
      caniuse-lite: 1.0.30001761
      electron-to-chromium: 1.5.267
      node-releases: 2.0.27
      update-browserslist-db: 1.2.3(browserslist@4.28.1)

  buffer-equal-constant-time@1.0.1: {}

  cac@6.7.14: {}

  caniuse-lite@1.0.30001761: {}

  chai@5.3.3:
    dependencies:
      assertion-error: 2.0.1
      check-error: 2.1.1
      deep-eql: 5.0.2
      loupe: 3.2.1
      pathval: 2.0.1

  chalk@5.6.2: {}

  check-error@2.1.1: {}

  cheerio-select@2.1.0:
    dependencies:
      boolbase: 1.0.0
      css-select: 5.2.2
      css-what: 6.2.2
      domelementtype: 2.3.0
      domhandler: 5.0.3
      domutils: 3.2.2

  cheerio@1.1.2:
    dependencies:
      cheerio-select: 2.1.0
      dom-serializer: 2.0.0
      domhandler: 5.0.3
      domutils: 3.2.2
      encoding-sniffer: 0.2.1
      htmlparser2: 10.0.0
      parse5: 7.3.0
      parse5-htmlparser2-tree-adapter: 7.1.0
      parse5-parser-stream: 7.1.2
      undici: 7.16.0
      whatwg-mimetype: 4.0.0

  chokidar@3.6.0:
    dependencies:
      anymatch: 3.1.3
      braces: 3.0.3
      glob-parent: 5.1.2
      is-binary-path: 2.1.0
      is-glob: 4.0.3
      normalize-path: 3.0.0
      readdirp: 3.6.0
    optionalDependencies:
      fsevents: 2.3.3

  class-variance-authority@0.7.1:
    dependencies:
      clsx: 2.1.1

  clsx@2.1.1: {}

  consola@3.4.2: {}

  convert-source-map@2.0.0: {}

  cookie-es@2.0.0: {}

  crossws@0.4.1(srvx@0.9.8):
    optionalDependencies:
      srvx: 0.9.8

  css-select@5.2.2:
    dependencies:
      boolbase: 1.0.0
      css-what: 6.2.2
      domhandler: 5.0.3
      domutils: 3.2.2
      nth-check: 2.1.1

  css-tree@3.1.0:
    dependencies:
      mdn-data: 2.12.2
      source-map-js: 1.2.1

  css-what@6.2.2: {}

  cssstyle@5.3.5:
    dependencies:
      '@asamuzakjp/css-color': 4.1.1
      '@csstools/css-syntax-patches-for-csstree': 1.0.22
      css-tree: 3.1.0

  csstype@3.2.3: {}

  data-urls@6.0.0:
    dependencies:
      whatwg-mimetype: 4.0.0
      whatwg-url: 15.1.0

  date-fns-jalali@4.1.0-0: {}

  date-fns@4.1.0: {}

  db0@0.3.4: {}

  debug@4.4.3:
    dependencies:
      ms: 2.1.3

  decimal.js@10.6.0: {}

  deep-eql@5.0.2: {}

  dequal@2.0.3: {}

  detect-libc@2.1.2: {}

  detect-node-es@1.1.0: {}

  diff@8.0.2: {}

  dom-accessibility-api@0.5.16: {}

  dom-serializer@2.0.0:
    dependencies:
      domelementtype: 2.3.0
      domhandler: 5.0.3
      entities: 4.5.0

  domelementtype@2.3.0: {}

  domhandler@5.0.3:
    dependencies:
      domelementtype: 2.3.0

  domutils@3.2.2:
    dependencies:
      dom-serializer: 2.0.0
      domelementtype: 2.3.0
      domhandler: 5.0.3

  ecdsa-sig-formatter@1.0.11:
    dependencies:
      safe-buffer: 5.2.1

  electron-to-chromium@1.5.267: {}

  encoding-sniffer@0.2.1:
    dependencies:
      iconv-lite: 0.6.3
      whatwg-encoding: 3.1.1

  enhanced-resolve@5.18.4:
    dependencies:
      graceful-fs: 4.2.11
      tapable: 2.3.0

  entities@4.5.0: {}

  entities@6.0.1: {}

  es-module-lexer@1.7.0: {}

  esbuild@0.27.2:
    optionalDependencies:
      '@esbuild/aix-ppc64': 0.27.2
      '@esbuild/android-arm': 0.27.2
      '@esbuild/android-arm64': 0.27.2
      '@esbuild/android-x64': 0.27.2
      '@esbuild/darwin-arm64': 0.27.2
      '@esbuild/darwin-x64': 0.27.2
      '@esbuild/freebsd-arm64': 0.27.2
      '@esbuild/freebsd-x64': 0.27.2
      '@esbuild/linux-arm': 0.27.2
      '@esbuild/linux-arm64': 0.27.2
      '@esbuild/linux-ia32': 0.27.2
      '@esbuild/linux-loong64': 0.27.2
      '@esbuild/linux-mips64el': 0.27.2
      '@esbuild/linux-ppc64': 0.27.2
      '@esbuild/linux-riscv64': 0.27.2
      '@esbuild/linux-s390x': 0.27.2
      '@esbuild/linux-x64': 0.27.2
      '@esbuild/netbsd-arm64': 0.27.2
      '@esbuild/netbsd-x64': 0.27.2
      '@esbuild/openbsd-arm64': 0.27.2
      '@esbuild/openbsd-x64': 0.27.2
      '@esbuild/openharmony-arm64': 0.27.2
      '@esbuild/sunos-x64': 0.27.2
      '@esbuild/win32-arm64': 0.27.2
      '@esbuild/win32-ia32': 0.27.2
      '@esbuild/win32-x64': 0.27.2

  escalade@3.2.0: {}

  esprima@4.0.1: {}

  estree-walker@3.0.3:
    dependencies:
      '@types/estree': 1.0.8

  expect-type@1.3.0: {}

  exsolve@1.0.8: {}

  fdir@6.5.0(picomatch@4.0.3):
    optionalDependencies:
      picomatch: 4.0.3

  fill-range@7.1.1:
    dependencies:
      to-regex-range: 5.0.1

  fsevents@2.3.3:
    optional: true

  gensync@1.0.0-beta.2: {}

  get-nonce@1.0.1: {}

  get-tsconfig@4.13.0:
    dependencies:
      resolve-pkg-maps: 1.0.0

  glob-parent@5.1.2:
    dependencies:
      is-glob: 4.0.3

  globrex@0.1.2: {}

  goober@2.1.18(csstype@3.2.3):
    dependencies:
      csstype: 3.2.3

  graceful-fs@4.2.11: {}

  h3@2.0.1-rc.5(crossws@0.4.1(srvx@0.9.8)):
    dependencies:
      rou3: 0.7.12
      srvx: 0.9.8
    optionalDependencies:
      crossws: 0.4.1(srvx@0.9.8)

  h3@2.0.1-rc.6(crossws@0.4.1(srvx@0.9.8)):
    dependencies:
      rou3: 0.7.12
      srvx: 0.9.8
    optionalDependencies:
      crossws: 0.4.1(srvx@0.9.8)

  html-encoding-sniffer@6.0.0:
    dependencies:
      '@exodus/bytes': 1.6.0
    transitivePeerDependencies:
      - '@exodus/crypto'

  htmlparser2@10.0.0:
    dependencies:
      domelementtype: 2.3.0
      domhandler: 5.0.3
      domutils: 3.2.2
      entities: 6.0.1

  http-proxy-agent@7.0.2:
    dependencies:
      agent-base: 7.1.4
      debug: 4.4.3
    transitivePeerDependencies:
      - supports-color

  https-proxy-agent@7.0.6:
    dependencies:
      agent-base: 7.1.4
      debug: 4.4.3
    transitivePeerDependencies:
      - supports-color

  iconv-lite@0.6.3:
    dependencies:
      safer-buffer: 2.1.2

  is-binary-path@2.1.0:
    dependencies:
      binary-extensions: 2.3.0

  is-extglob@2.1.1: {}

  is-glob@4.0.3:
    dependencies:
      is-extglob: 2.1.1

  is-number@7.0.0: {}

  is-potential-custom-element-name@1.0.1: {}

  isbot@5.1.32: {}

  jiti@2.6.1: {}

  js-tokens@4.0.0: {}

  js-tokens@9.0.1: {}

  js-yaml@4.1.1:
    dependencies:
      argparse: 2.0.1

  jsdom@27.4.0:
    dependencies:
      '@acemir/cssom': 0.9.30
      '@asamuzakjp/dom-selector': 6.7.6
      '@exodus/bytes': 1.6.0
      cssstyle: 5.3.5
      data-urls: 6.0.0
      decimal.js: 10.6.0
      html-encoding-sniffer: 6.0.0
      http-proxy-agent: 7.0.2
      https-proxy-agent: 7.0.6
      is-potential-custom-element-name: 1.0.1
      parse5: 8.0.0
      saxes: 6.0.0
      symbol-tree: 3.2.4
      tough-cookie: 6.0.0
      w3c-xmlserializer: 5.0.0
      webidl-conversions: 8.0.0
      whatwg-mimetype: 4.0.0
      whatwg-url: 15.1.0
      ws: 8.18.3
      xml-name-validator: 5.0.0
    transitivePeerDependencies:
      - '@exodus/crypto'
      - bufferutil
      - supports-color
      - utf-8-validate

  jsesc@3.1.0: {}

  json5@2.2.3: {}

  jsonwebtoken@9.0.3:
    dependencies:
      jws: 4.0.1
      lodash.includes: 4.3.0
      lodash.isboolean: 3.0.3
      lodash.isinteger: 4.0.4
      lodash.isnumber: 3.0.3
      lodash.isplainobject: 4.0.6
      lodash.isstring: 4.0.1
      lodash.once: 4.1.1
      ms: 2.1.3
      semver: 7.7.3

  jwa@2.0.1:
    dependencies:
      buffer-equal-constant-time: 1.0.1
      ecdsa-sig-formatter: 1.0.11
      safe-buffer: 5.2.1

  jws@4.0.1:
    dependencies:
      jwa: 2.0.1
      safe-buffer: 5.2.1

  launch-editor@2.12.0:
    dependencies:
      picocolors: 1.1.1
      shell-quote: 1.8.3

  lightningcss-android-arm64@1.30.2:
    optional: true

  lightningcss-darwin-arm64@1.30.2:
    optional: true

  lightningcss-darwin-x64@1.30.2:
    optional: true

  lightningcss-freebsd-x64@1.30.2:
    optional: true

  lightningcss-linux-arm-gnueabihf@1.30.2:
    optional: true

  lightningcss-linux-arm64-gnu@1.30.2:
    optional: true

  lightningcss-linux-arm64-musl@1.30.2:
    optional: true

  lightningcss-linux-x64-gnu@1.30.2:
    optional: true

  lightningcss-linux-x64-musl@1.30.2:
    optional: true

  lightningcss-win32-arm64-msvc@1.30.2:
    optional: true

  lightningcss-win32-x64-msvc@1.30.2:
    optional: true

  lightningcss@1.30.2:
    dependencies:
      detect-libc: 2.1.2
    optionalDependencies:
      lightningcss-android-arm64: 1.30.2
      lightningcss-darwin-arm64: 1.30.2
      lightningcss-darwin-x64: 1.30.2
      lightningcss-freebsd-x64: 1.30.2
      lightningcss-linux-arm-gnueabihf: 1.30.2
      lightningcss-linux-arm64-gnu: 1.30.2
      lightningcss-linux-arm64-musl: 1.30.2
      lightningcss-linux-x64-gnu: 1.30.2
      lightningcss-linux-x64-musl: 1.30.2
      lightningcss-win32-arm64-msvc: 1.30.2
      lightningcss-win32-x64-msvc: 1.30.2

  lodash.includes@4.3.0: {}

  lodash.isboolean@3.0.3: {}

  lodash.isinteger@4.0.4: {}

  lodash.isnumber@3.0.3: {}

  lodash.isplainobject@4.0.6: {}

  lodash.isstring@4.0.1: {}

  lodash.once@4.1.1: {}

  loupe@3.2.1: {}

  lru-cache@11.2.4: {}

  lru-cache@5.1.1:
    dependencies:
      yallist: 3.1.1

  lucide-react@0.561.0(react@19.2.3):
    dependencies:
      react: 19.2.3

  lz-string@1.5.0: {}

  magic-string@0.30.21:
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.5

  mdn-data@2.12.2: {}

  ms@2.1.3: {}

  nanoid@3.3.11: {}

  nf3@0.1.12: {}

  nitro@3.0.1-alpha.1(lru-cache@11.2.4)(rollup@4.54.0)(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)):
    dependencies:
      consola: 3.4.2
      crossws: 0.4.1(srvx@0.9.8)
      db0: 0.3.4
      h3: 2.0.1-rc.5(crossws@0.4.1(srvx@0.9.8))
      jiti: 2.6.1
      nf3: 0.1.12
      ofetch: 2.0.0-alpha.3
      ohash: 2.0.11
      oxc-minify: 0.96.0
      oxc-transform: 0.96.0
      srvx: 0.9.8
      undici: 7.16.0
      unenv: 2.0.0-rc.24
      unstorage: 2.0.0-alpha.4(db0@0.3.4)(lru-cache@11.2.4)(ofetch@2.0.0-alpha.3)
    optionalDependencies:
      rollup: 4.54.0
      vite: 7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)
    transitivePeerDependencies:
      - '@azure/app-configuration'
      - '@azure/cosmos'
      - '@azure/data-tables'
      - '@azure/identity'
      - '@azure/keyvault-secrets'
      - '@azure/storage-blob'
      - '@capacitor/preferences'
      - '@deno/kv'
      - '@electric-sql/pglite'
      - '@libsql/client'
      - '@netlify/blobs'
      - '@planetscale/database'
      - '@upstash/redis'
      - '@vercel/blob'
      - '@vercel/functions'
      - '@vercel/kv'
      - aws4fetch
      - better-sqlite3
      - chokidar
      - drizzle-orm
      - idb-keyval
      - ioredis
      - lru-cache
      - mongodb
      - mysql2
      - sqlite3
      - uploadthing

  node-releases@2.0.27: {}

  normalize-path@3.0.0: {}

  nth-check@2.1.1:
    dependencies:
      boolbase: 1.0.0

  ofetch@2.0.0-alpha.3: {}

  ohash@2.0.11: {}

  oxc-minify@0.96.0:
    optionalDependencies:
      '@oxc-minify/binding-android-arm64': 0.96.0
      '@oxc-minify/binding-darwin-arm64': 0.96.0
      '@oxc-minify/binding-darwin-x64': 0.96.0
      '@oxc-minify/binding-freebsd-x64': 0.96.0
      '@oxc-minify/binding-linux-arm-gnueabihf': 0.96.0
      '@oxc-minify/binding-linux-arm-musleabihf': 0.96.0
      '@oxc-minify/binding-linux-arm64-gnu': 0.96.0
      '@oxc-minify/binding-linux-arm64-musl': 0.96.0
      '@oxc-minify/binding-linux-riscv64-gnu': 0.96.0
      '@oxc-minify/binding-linux-s390x-gnu': 0.96.0
      '@oxc-minify/binding-linux-x64-gnu': 0.96.0
      '@oxc-minify/binding-linux-x64-musl': 0.96.0
      '@oxc-minify/binding-wasm32-wasi': 0.96.0
      '@oxc-minify/binding-win32-arm64-msvc': 0.96.0
      '@oxc-minify/binding-win32-x64-msvc': 0.96.0

  oxc-transform@0.96.0:
    optionalDependencies:
      '@oxc-transform/binding-android-arm64': 0.96.0
      '@oxc-transform/binding-darwin-arm64': 0.96.0
      '@oxc-transform/binding-darwin-x64': 0.96.0
      '@oxc-transform/binding-freebsd-x64': 0.96.0
      '@oxc-transform/binding-linux-arm-gnueabihf': 0.96.0
      '@oxc-transform/binding-linux-arm-musleabihf': 0.96.0
      '@oxc-transform/binding-linux-arm64-gnu': 0.96.0
      '@oxc-transform/binding-linux-arm64-musl': 0.96.0
      '@oxc-transform/binding-linux-riscv64-gnu': 0.96.0
      '@oxc-transform/binding-linux-s390x-gnu': 0.96.0
      '@oxc-transform/binding-linux-x64-gnu': 0.96.0
      '@oxc-transform/binding-linux-x64-musl': 0.96.0
      '@oxc-transform/binding-wasm32-wasi': 0.96.0
      '@oxc-transform/binding-win32-arm64-msvc': 0.96.0
      '@oxc-transform/binding-win32-x64-msvc': 0.96.0

  parse5-htmlparser2-tree-adapter@7.1.0:
    dependencies:
      domhandler: 5.0.3
      parse5: 7.3.0

  parse5-parser-stream@7.1.2:
    dependencies:
      parse5: 7.3.0

  parse5@7.3.0:
    dependencies:
      entities: 6.0.1

  parse5@8.0.0:
    dependencies:
      entities: 6.0.1

  pathe@2.0.3: {}

  pathval@2.0.1: {}

  picocolors@1.1.1: {}

  picomatch@2.3.1: {}

  picomatch@4.0.3: {}

  postcss@8.5.6:
    dependencies:
      nanoid: 3.3.11
      picocolors: 1.1.1
      source-map-js: 1.2.1

  prettier@3.7.4: {}

  pretty-format@27.5.1:
    dependencies:
      ansi-regex: 5.0.1
      ansi-styles: 5.2.0
      react-is: 17.0.2

  punycode@2.3.1: {}

  react-day-picker@9.13.0(react@19.2.3):
    dependencies:
      '@date-fns/tz': 1.4.1
      date-fns: 4.1.0
      date-fns-jalali: 4.1.0-0
      react: 19.2.3

  react-dom@19.2.3(react@19.2.3):
    dependencies:
      react: 19.2.3
      scheduler: 0.27.0

  react-hook-form@7.69.0(react@19.2.3):
    dependencies:
      react: 19.2.3

  react-is@17.0.2: {}

  react-refresh@0.18.0: {}

  react-remove-scroll-bar@2.3.8(@types/react@19.2.7)(react@19.2.3):
    dependencies:
      react: 19.2.3
      react-style-singleton: 2.2.3(@types/react@19.2.7)(react@19.2.3)
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.2.7

  react-remove-scroll@2.7.2(@types/react@19.2.7)(react@19.2.3):
    dependencies:
      react: 19.2.3
      react-remove-scroll-bar: 2.3.8(@types/react@19.2.7)(react@19.2.3)
      react-style-singleton: 2.2.3(@types/react@19.2.7)(react@19.2.3)
      tslib: 2.8.1
      use-callback-ref: 1.3.3(@types/react@19.2.7)(react@19.2.3)
      use-sidecar: 1.1.3(@types/react@19.2.7)(react@19.2.3)
    optionalDependencies:
      '@types/react': 19.2.7

  react-style-singleton@2.2.3(@types/react@19.2.7)(react@19.2.3):
    dependencies:
      get-nonce: 1.0.1
      react: 19.2.3
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.2.7

  react@19.2.3: {}

  readdirp@3.6.0:
    dependencies:
      picomatch: 2.3.1

  recast@0.23.11:
    dependencies:
      ast-types: 0.16.1
      esprima: 4.0.1
      source-map: 0.6.1
      tiny-invariant: 1.3.3
      tslib: 2.8.1

  require-from-string@2.0.2: {}

  resolve-pkg-maps@1.0.0: {}

  rollup@4.54.0:
    dependencies:
      '@types/estree': 1.0.8
    optionalDependencies:
      '@rollup/rollup-android-arm-eabi': 4.54.0
      '@rollup/rollup-android-arm64': 4.54.0
      '@rollup/rollup-darwin-arm64': 4.54.0
      '@rollup/rollup-darwin-x64': 4.54.0
      '@rollup/rollup-freebsd-arm64': 4.54.0
      '@rollup/rollup-freebsd-x64': 4.54.0
      '@rollup/rollup-linux-arm-gnueabihf': 4.54.0
      '@rollup/rollup-linux-arm-musleabihf': 4.54.0
      '@rollup/rollup-linux-arm64-gnu': 4.54.0
      '@rollup/rollup-linux-arm64-musl': 4.54.0
      '@rollup/rollup-linux-loong64-gnu': 4.54.0
      '@rollup/rollup-linux-ppc64-gnu': 4.54.0
      '@rollup/rollup-linux-riscv64-gnu': 4.54.0
      '@rollup/rollup-linux-riscv64-musl': 4.54.0
      '@rollup/rollup-linux-s390x-gnu': 4.54.0
      '@rollup/rollup-linux-x64-gnu': 4.54.0
      '@rollup/rollup-linux-x64-musl': 4.54.0
      '@rollup/rollup-openharmony-arm64': 4.54.0
      '@rollup/rollup-win32-arm64-msvc': 4.54.0
      '@rollup/rollup-win32-ia32-msvc': 4.54.0
      '@rollup/rollup-win32-x64-gnu': 4.54.0
      '@rollup/rollup-win32-x64-msvc': 4.54.0
      fsevents: 2.3.3

  rou3@0.7.12: {}

  safe-buffer@5.2.1: {}

  safer-buffer@2.1.2: {}

  saxes@6.0.0:
    dependencies:
      xmlchars: 2.2.0

  scheduler@0.27.0: {}

  semver@6.3.1: {}

  semver@7.7.3: {}

  seroval-plugins@1.3.3(seroval@1.3.2):
    dependencies:
      seroval: 1.3.2

  seroval-plugins@1.4.2(seroval@1.4.2):
    dependencies:
      seroval: 1.4.2

  seroval@1.3.2: {}

  seroval@1.4.2: {}

  shell-quote@1.8.3: {}

  siginfo@2.0.0: {}

  solid-js@1.9.10:
    dependencies:
      csstype: 3.2.3
      seroval: 1.3.2
      seroval-plugins: 1.3.3(seroval@1.3.2)

  source-map-js@1.2.1: {}

  source-map@0.6.1: {}

  source-map@0.7.6: {}

  srvx@0.9.8: {}

  stackback@0.0.2: {}

  std-env@3.10.0: {}

  strip-literal@3.1.0:
    dependencies:
      js-tokens: 9.0.1

  symbol-tree@3.2.4: {}

  tailwind-merge@3.4.0: {}

  tailwindcss@4.1.18: {}

  tapable@2.3.0: {}

  tiny-invariant@1.3.3: {}

  tiny-warning@1.0.3: {}

  tinybench@2.9.0: {}

  tinyexec@0.3.2: {}

  tinyglobby@0.2.15:
    dependencies:
      fdir: 6.5.0(picomatch@4.0.3)
      picomatch: 4.0.3

  tinypool@1.1.1: {}

  tinyrainbow@2.0.0: {}

  tinyspy@4.0.4: {}

  tldts-core@7.0.19: {}

  tldts@7.0.19:
    dependencies:
      tldts-core: 7.0.19

  to-regex-range@5.0.1:
    dependencies:
      is-number: 7.0.0

  tough-cookie@6.0.0:
    dependencies:
      tldts: 7.0.19

  tr46@6.0.0:
    dependencies:
      punycode: 2.3.1

  tsconfck@3.1.6(typescript@5.9.3):
    optionalDependencies:
      typescript: 5.9.3

  tslib@2.8.1: {}

  tsx@4.21.0:
    dependencies:
      esbuild: 0.27.2
      get-tsconfig: 4.13.0
    optionalDependencies:
      fsevents: 2.3.3

  typescript@5.9.3: {}

  ufo@1.6.1: {}

  undici-types@6.21.0: {}

  undici@7.16.0: {}

  unenv@2.0.0-rc.24:
    dependencies:
      pathe: 2.0.3

  unplugin@2.3.11:
    dependencies:
      '@jridgewell/remapping': 2.3.5
      acorn: 8.15.0
      picomatch: 4.0.3
      webpack-virtual-modules: 0.6.2

  unstorage@2.0.0-alpha.4(db0@0.3.4)(lru-cache@11.2.4)(ofetch@2.0.0-alpha.3):
    optionalDependencies:
      db0: 0.3.4
      lru-cache: 11.2.4
      ofetch: 2.0.0-alpha.3

  update-browserslist-db@1.2.3(browserslist@4.28.1):
    dependencies:
      browserslist: 4.28.1
      escalade: 3.2.0
      picocolors: 1.1.1

  use-callback-ref@1.3.3(@types/react@19.2.7)(react@19.2.3):
    dependencies:
      react: 19.2.3
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.2.7

  use-sidecar@1.1.3(@types/react@19.2.7)(react@19.2.3):
    dependencies:
      detect-node-es: 1.1.0
      react: 19.2.3
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.2.7

  use-sync-external-store@1.6.0(react@19.2.3):
    dependencies:
      react: 19.2.3

  vite-node@3.2.4(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0):
    dependencies:
      cac: 6.7.14
      debug: 4.4.3
      es-module-lexer: 1.7.0
      pathe: 2.0.3
      vite: 7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)
    transitivePeerDependencies:
      - '@types/node'
      - jiti
      - less
      - lightningcss
      - sass
      - sass-embedded
      - stylus
      - sugarss
      - supports-color
      - terser
      - tsx
      - yaml

  vite-tsconfig-paths@6.0.3(typescript@5.9.3)(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)):
    dependencies:
      debug: 4.4.3
      globrex: 0.1.2
      tsconfck: 3.1.6(typescript@5.9.3)
    optionalDependencies:
      vite: 7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)
    transitivePeerDependencies:
      - supports-color
      - typescript

  vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0):
    dependencies:
      esbuild: 0.27.2
      fdir: 6.5.0(picomatch@4.0.3)
      picomatch: 4.0.3
      postcss: 8.5.6
      rollup: 4.54.0
      tinyglobby: 0.2.15
    optionalDependencies:
      '@types/node': 22.19.3
      fsevents: 2.3.3
      jiti: 2.6.1
      lightningcss: 1.30.2
      tsx: 4.21.0

  vitefu@1.1.1(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)):
    optionalDependencies:
      vite: 7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)

  vitest@3.2.4(@types/node@22.19.3)(jiti@2.6.1)(jsdom@27.4.0)(lightningcss@1.30.2)(tsx@4.21.0):
    dependencies:
      '@types/chai': 5.2.3
      '@vitest/expect': 3.2.4
      '@vitest/mocker': 3.2.4(vite@7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0))
      '@vitest/pretty-format': 3.2.4
      '@vitest/runner': 3.2.4
      '@vitest/snapshot': 3.2.4
      '@vitest/spy': 3.2.4
      '@vitest/utils': 3.2.4
      chai: 5.3.3
      debug: 4.4.3
      expect-type: 1.3.0
      magic-string: 0.30.21
      pathe: 2.0.3
      picomatch: 4.0.3
      std-env: 3.10.0
      tinybench: 2.9.0
      tinyexec: 0.3.2
      tinyglobby: 0.2.15
      tinypool: 1.1.1
      tinyrainbow: 2.0.0
      vite: 7.3.0(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)
      vite-node: 3.2.4(@types/node@22.19.3)(jiti@2.6.1)(lightningcss@1.30.2)(tsx@4.21.0)
      why-is-node-running: 2.3.0
    optionalDependencies:
      '@types/node': 22.19.3
      jsdom: 27.4.0
    transitivePeerDependencies:
      - jiti
      - less
      - lightningcss
      - msw
      - sass
      - sass-embedded
      - stylus
      - sugarss
      - supports-color
      - terser
      - tsx
      - yaml

  w3c-xmlserializer@5.0.0:
    dependencies:
      xml-name-validator: 5.0.0

  web-vitals@5.1.0: {}

  webidl-conversions@8.0.0: {}

  webpack-virtual-modules@0.6.2: {}

  whatwg-encoding@3.1.1:
    dependencies:
      iconv-lite: 0.6.3

  whatwg-mimetype@4.0.0: {}

  whatwg-url@15.1.0:
    dependencies:
      tr46: 6.0.0
      webidl-conversions: 8.0.0

  why-is-node-running@2.3.0:
    dependencies:
      siginfo: 2.0.0
      stackback: 0.0.2

  ws@8.18.3: {}

  xml-name-validator@5.0.0: {}

  xmlbuilder2@4.0.3:
    dependencies:
      '@oozcitak/dom': 2.0.2
      '@oozcitak/infra': 2.0.2
      '@oozcitak/util': 10.0.0
      js-yaml: 4.1.1

  xmlchars@2.2.0: {}

  yallist@3.1.1: {}

  zod@3.25.76: {}

  zod@4.2.1: {}

```

`public/manifest.json`:

```json
{
  "short_name": "TanStack App",
  "name": "Create TanStack App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

`public/robots.txt`:

```txt
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

```

`public/tanstack-word-logo-white.svg`:

```svg
<svg height="660" viewBox="0 0 3178 660" width="3178" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" transform="translate(.9778)"><g transform="translate(740.0222 38)"><path d="m101.695801 467h101.445312v-264.858398h90.917969v-80.390625h-283.28125v80.390625h90.917969z"/><path d="m241.544434 467h106.708984l68.666992-262.944336h33.017578v-82.304687h-95.703125zm70.820312-68.666992h211.025391l-21.054688-71.538086h-168.916015zm175.136719 68.666992h106.708984l-112.690429-345.249023h-62.685547v82.304687z"/><path d="m600.313965 467h101.445312v-179.443359h41.391602l-66.274414-38.759766 149.536133 218.203125h83.500976v-345.249023h-101.445312v176.572265h-41.391602l66.513672 38.759766-148.818359-215.332031h-84.458008z"/><path d="m1072.01318 473.220703c31.74154 0 58.85743-4.74528 81.34766-14.23584s39.67692-22.96875 51.56006-40.43457 17.82471-38.081869 17.82471-61.848145v-.239257c0-18.66211-3.94776-34.572754-11.84327-47.731934-7.8955-13.15918-19.89827-23.965658-36.0083-32.419434-16.11002-8.453776-36.52669-14.913737-61.25-19.379882l-34.69238-6.220703c-17.22656-3.190105-29.74772-6.898601-37.56348-11.125489-7.81575-4.226888-11.72363-10.248209-11.72363-18.063965v-.239257c0-5.263672 1.59505-10.008952 4.78516-14.23584 3.1901-4.226888 7.93538-7.576498 14.23584-10.048828 6.30045-2.472331 14.07633-3.708497 23.32763-3.708497 9.25131 0 17.5057 1.276042 24.76319 3.828126 7.25748 2.552083 13.07942 6.101074 17.46582 10.646972 4.38639 4.545899 6.8986 10.008952 7.53662 16.38916l.23926 2.392578h93.31054l-.23925-5.263671c-.95704-21.533204-7.01823-40.235189-18.1836-56.105957-11.16536-15.870769-27.27539-28.112793-48.33008-36.726075-21.05468-8.613281-46.97428-12.919922-77.75879-12.919922-27.27539 0-51.59993 4.625651-72.973628 13.876954-21.373698 9.251302-38.161621 22.330729-50.36377 39.238281-12.202148 16.907552-18.303222 36.925456-18.303222 60.053711v.239258c0 26.796875 9.131673 48.728841 27.395019 65.795898s44.541831 28.631185 78.835451 34.692383l34.69238 6.220703c19.14063 3.509115 32.61882 7.33724 40.43457 11.484375 7.81576 4.147135 11.72363 10.288086 11.72363 18.422852v.239257c0 5.742188-1.99381 10.846354-5.98144 15.3125s-9.61019 7.975261-16.86768 10.527344c-7.25748 2.552083-15.99039 3.828125-26.19873 3.828125-9.57031 0-18.3431-1.315918-26.31836-3.947754s-14.59472-6.260579-19.8584-10.88623c-5.26367-4.625651-8.61328-10.048828-10.04882-16.269532l-.47852-2.15332h-93.310546l.239258 4.545899c1.276042 22.649739 8.015137 41.909993 20.217285 57.780761 12.202149 15.870769 29.189453 27.953288 50.961914 36.247559 21.772459 8.294271 47.572429 12.441406 77.399899 12.441406z"/><path d="m1303.73682 467h101.44531v-264.858398h90.91797v-80.390625h-283.28125v80.390625h90.91797z"/><path d="m1443.58545 467h106.70898l68.667-262.944336h33.01757v-82.304687h-95.70312zm70.82031-68.666992h211.02539l-21.05469-71.538086h-168.91601zm175.13672 68.666992h106.70898l-112.69042-345.249023h-62.68555v82.304687z"/><path d="m1941.12451 473.220703c31.74154 0 59.65495-6.300456 83.74024-18.901367 24.08528-12.600912 42.94677-29.667969 56.58447-51.201172 13.63769-21.533203 20.45654-45.777995 20.45654-72.734375v-2.631836h-97.13867l-.23926 2.631836c-1.11653 12.122396-4.46614 22.689616-10.04883 31.70166-5.58268 9.012044-12.91992 15.990397-22.01171 20.935059-9.0918 4.944661-19.45964 7.416992-31.10352 7.416992-13.87695 0-25.9196-3.748372-36.12793-11.245117s-18.06396-18.462728-23.56689-32.897949c-5.50293-14.435222-8.2544-31.861166-8.2544-52.277832v-.239258c0-20.257162 2.75147-37.483724 8.2544-51.679688 5.50293-14.195963 13.31868-25.042317 23.44726-32.539062s22.13135-11.245117 36.0083-11.245117c12.60091 0 23.40739 2.591959 32.41944 7.775878 9.01204 5.18392 16.11002 12.281902 21.29394 21.293946s8.2544 19.260254 9.21143 30.744629l.23925 2.871093h97.13868v-2.15332c0-27.115885-6.69922-51.480306-20.09766-73.093262-13.39844-21.612955-32.10042-38.719889-56.10596-51.3208-24.00553-12.600912-52.03857-18.901368-84.09912-18.901368-35.09114 0-65.43701 6.978353-91.0376 20.935059-25.60058 13.956706-45.33935 34.213867-59.2163 60.771484-13.87696 26.557618-20.81543 58.817546-20.81543 96.779786v.239257c0 37.96224 6.8986 70.262045 20.6958 96.899414 13.7972 26.63737 33.49609 46.974284 59.09668 61.010743 25.60058 14.036458 56.0262 21.054687 91.27685 21.054687z"/><path d="m2214.23975 379.670898 75.36621-101.445312h26.0791l116.04004-156.474609h-106.46973l-106.70898 146.425781h-4.30664zm-99.05274 87.329102h101.44531v-345.249023h-101.44531zm203.84766 0h117.9541l-140.20508-226.577148-74.16992 64.121093z"/></g><path d="m305.114318.62443771c8.717817-1.14462121 17.926803-.36545135 26.712694-.36545135 32.548987 0 64.505987 5.05339923 95.64868 14.63098274 39.74418 12.2236582 76.762804 31.7666864 109.435876 57.477568 40.046637 31.5132839 73.228974 72.8472109 94.520714 119.2362609 39.836383 86.790386 39.544267 191.973146-1.268422 278.398081-26.388695 55.880442-68.724007 102.650458-119.964986 136.75724-41.808813 27.828603-90.706831 44.862601-140.45707 50.89341-63.325458 7.677926-131.784923-3.541603-188.712259-32.729444-106.868873-54.795293-179.52309291-165.076271-180.9604082-285.932068-.27660564-23.300971.08616998-46.74071 4.69884909-69.814998 7.51316071-37.57857 20.61272131-73.903917 40.28618971-106.877282 21.2814003-35.670293 48.7704861-67.1473767 81.6882804-92.5255597 38.602429-29.7610135 83.467691-51.1674988 130.978372-62.05777669 11.473831-2.62966514 22.9946-4.0869914 34.57273-5.4964306l3.658171-.44480576c3.050084-.37153079 6.104217-.74794222 9.162589-1.14972654zm-110.555861 549.44131429c-14.716752 1.577863-30.238964 4.25635-42.869928 12.522173 2.84343.683658 6.102369.004954 9.068638 0 7.124652-.011559 14.317732-.279903 21.434964.032202 17.817402.781913 36.381729 3.63214 53.58741 8.350042 22.029372 6.040631 41.432961 17.928687 62.656049 25.945156 22.389644 8.456554 44.67706 11.084675 68.427 11.084675 11.96813 0 23.845573-.035504 35.450133-3.302696-6.056202-3.225083-14.72582-2.619864-21.434964-3.963236-14.556814-2.915455-28.868774-6.474936-42.869928-11.470264-10.304996-3.676672-20.230803-8.214291-30.11097-12.848661l-6.348531-2.985046c-9.1705-4.309263-18.363277-8.560752-27.845391-12.142608-24.932161-9.418465-52.560181-14.071964-79.144482-11.221737zm22.259385-62.614168c-29.163917 0-58.660076 5.137344-84.915434 18.369597-6.361238 3.206092-12.407546 7.02566-18.137277 11.258891-1.746125 1.290529-4.841829 2.948483-5.487351 5.191839-.654591 2.275558 1.685942 4.182039 3.014086 5.637703 6.562396-3.497556 12.797498-7.199878 19.78612-9.855246 45.19892-17.169893 99.992458-13.570779 145.098218 2.172348 22.494346 7.851335 43.219483 19.592421 65.129314 28.800338 24.503461 10.297807 49.53043 16.975034 75.846795 20.399104 31.04195 4.037546 66.433549.7654 94.808495-13.242161 9.970556-4.921843 23.814245-12.422267 28.030337-23.320339-5.207047.454947-9.892236 2.685918-14.83959 4.224149-7.866632 2.445646-15.827248 4.51974-23.908229 6.138887-27.388113 5.486604-56.512458 6.619429-84.091013 1.639788-25.991939-4.693152-50.142596-14.119246-74.179513-24.03502l-3.068058-1.268177c-2.045137-.846788-4.089983-1.695816-6.135603-2.544467l-3.069142-1.272366c-12.279956-5.085721-24.606928-10.110797-37.210937-14.51024-24.485325-8.546552-50.726667-13.784628-76.671218-13.784628zm51.114145-447.9909432c-34.959602 7.7225298-66.276908 22.7605319-96.457338 41.7180089-17.521434 11.0054099-34.281927 22.2799893-49.465301 36.4444283-22.5792616 21.065423-39.8360564 46.668751-54.8866988 73.411509-15.507372 27.55357-25.4498976 59.665686-30.2554517 90.824149-4.7140432 30.568106-5.4906485 62.70747-.0906864 93.301172 6.7503648 38.248526 19.5989769 74.140579 39.8896436 107.337631 6.8187918-3.184625 11.659796-10.445603 17.3128555-15.336896 11.4149428-9.875888 23.3995608-19.029311 36.2745548-26.928535 4.765981-2.923712 9.662222-5.194315 14.83959-7.275014 1.953055-.785216 5.14604-1.502727 6.06527-3.647828 1.460876-3.406732-1.240754-9.335897-1.704904-12.865654-1.324845-10.095517-2.124534-20.362774-1.874735-30.549941.725492-29.668947 6.269727-59.751557 16.825623-87.521453 7.954845-20.924233 20.10682-39.922168 34.502872-56.971512 4.884699-5.785498 10.077731-11.170545 15.437296-16.512656 3.167428-3.157378 7.098271-5.858983 9.068639-9.908915-10.336599.006606-20.674847 2.987289-30.503603 6.013385-21.174447 6.519522-41.801477 16.19312-59.358362 29.841512-8.008432 6.226409-13.873368 14.387371-21.44733 20.939921-2.32322 2.010516-6.484901 4.704691-9.695199 3.187928-4.8500728-2.29042-4.1014979-11.835213-4.6571581-16.222019-2.1369011-16.873476 4.2548401-38.216325 12.3778671-52.843142 13.039878-23.479694 37.150915-43.528712 65.467327-42.82854 12.228647.302197 22.934587 4.551115 34.625711 7.324555-2.964621-4.211764-6.939158-7.28162-10.717482-10.733763-9.257431-8.459031-19.382979-16.184864-30.503603-22.028985-4.474136-2.350694-9.291232-3.77911-14.015169-5.506421-2.375159-.867783-5.36616-2.062533-6.259834-4.702213-1.654614-4.888817 7.148561-9.416813 10.381943-11.478522 12.499882-7.969406 27.826705-14.525258 42.869928-14.894334 23.509209-.577147 46.479246 12.467678 56.162903 34.665926 3.404469 7.803171 4.411273 16.054969 5.079109 24.382907l.121749 1.56229.174325 2.345587c.01913.260708.038244.521433.057403.782164l.11601 1.56437.120128 1.563971c7.38352-6.019164 12.576553-14.876995 19.78612-21.323859 16.861073-15.07846 39.936636-21.7722 61.831627-14.984333 19.786945 6.133107 36.984382 19.788105 47.105807 37.959541 2.648042 4.754231 10.035685 16.373942 4.698379 21.109183-4.177345 3.707277-9.475079.818243-13.880788-.719162-3.33605-1.16376-6.782939-1.90214-10.241828-2.585698l-1.887262-.369639c-.629089-.122886-1.257979-.246187-1.886079-.372129-11.980496-2.401886-25.91652-2.152533-37.923398-.041284-7.762754 1.364839-15.349083 4.127545-23.083807 5.271929v1.651348c21.149714.175043 41.608563 12.240618 52.043268 30.549941 4.323267 7.585468 6.482428 16.267431 8.138691 24.770223 2.047864 10.50918.608423 21.958802-2.263037 32.201289-.962925 3.433979-2.710699 9.255807-6.817143 10.046802-2.902789.558982-5.36781-2.330878-7.024898-4.279468-4.343878-5.10762-8.475879-9.96341-13.573278-14.374161-12.895604-11.157333-26.530715-21.449361-40.396663-31.373138-7.362086-5.269452-15.425755-12.12007-23.908229-15.340199 2.385052 5.745041 4.721463 11.086326 5.532694 17.339156 2.385876 18.392716-5.314223 35.704625-16.87179 49.540445-3.526876 4.222498-7.29943 8.475545-11.744712 11.755948-1.843407 1.360711-4.156734 3.137561-6.595373 2.752797-7.645687-1.207961-8.555849-12.73272-9.728176-18.637115-3.970415-19.998652-2.375984-39.861068 3.132802-59.448534-4.901187 2.485279-8.443727 7.923994-11.521293 12.385111-6.770975 9.816439-12.645804 20.199291-16.858599 31.375615-16.777806 44.519521-16.616219 96.664142 5.118834 139.523233 2.427098 4.786433 6.110614 4.144058 10.894733 4.144058.720854 0 1.44257-.004515 2.164851-.010924l2.168232-.022283c4.338648-.045438 8.686803-.064635 12.979772.508795 2.227588.297243 5.320818.032202 7.084256 1.673642 2.111344 1.966755.986008 5.338808.4996 7.758859-1.358647 6.765574-1.812904 12.914369-1.812904 19.816178 9.02412-1.398692 11.525415-15.866153 14.724172-23.118874 3.624982-8.216283 7.313444-16.440823 10.667192-24.770223 1.648843-4.093692 3.854171-8.671229 3.275427-13.210785-.649644-5.10184-4.335633-10.510831-6.904531-14.862134-4.86244-8.234447-10.389363-16.70834-13.969002-25.595896-2.861567-7.104926-.197036-15.983399 7.871579-18.521521 4.450228-1.400344 9.198073 1.345848 12.094266 4.562675 6.07269 6.74328 9.992815 16.777697 14.401823 24.692609l34.394873 61.925556c2.920926 5.243856 5.848447 10.481933 8.836976 15.687808 1.165732 2.031158 2.352075 5.167068 4.740424 6.0332 2.127008.77118 5.033095-.325315 7.148561-.748886 5.492297-1.099798 10.97635-2.287117 16.488434-3.28288 6.605266-1.193099 16.673928-.969342 21.434964-6.129805-6.963066-2.205375-15.011895-2.074919-22.259386-1.577863-4.352947.298894-9.178287 1.856116-13.178381-.686135-5.953149-3.783239-9.910373-12.522173-13.552668-18.377854-8.980425-14.439388-17.441465-29.095929-26.041008-43.760726l-1.376261-2.335014-2.765943-4.665258c-1.380597-2.334387-2.750786-4.67476-4.079753-7.036188-1.02723-1.826391-2.549937-4.233231-1.078344-6.24705 1.545791-2.114476 4.91472-2.239146 7.956473-2.243117l.603351.000261c1.195428.001526 2.315572.002427 3.222811-.11692 12.27399-1.615019 24.718635-2.952611 37.098976-2.952611-.963749-3.352237-3.719791-7.141255-2.838484-10.73046 1.972017-8.030506 13.526287-10.543033 18.899867-4.780653 3.60767 3.868283 5.704174 9.192229 8.051303 13.859765 3.097352 6.162006 6.624228 12.118418 9.940876 18.16483 5.805578 10.585967 12.146205 20.881297 18.116667 31.375615.49237.865561.999687 1.726685 1.512269 2.587098l.771613 1.290552c2.577138 4.303168 5.164895 8.635123 6.553094 13.461506-20.735854-.9487-36.30176-25.018751-45.343193-41.283704-.721369 2.604176.450959 4.928448 1.388326 7.431066 1.948109 5.197619 4.276275 10.147535 7.20627 14.862134 4.184765 6.732546 8.982075 13.665732 15.313633 18.553722 11.236043 8.673707 26.05255 8.721596 39.572241 7.794364 8.669619-.595311 19.50252-4.542034 28.030338-1.864372 8.513803 2.673532 11.940924 12.063098 6.884745 19.276187-3.787393 5.403211-8.842747 7.443452-15.128962 8.257566 4.445282 9.53571 10.268996 18.385285 14.490036 28.072919 1.758491 4.035895 3.59118 10.22102 7.8048 12.350433 2.805507 1.416857 6.824562.09743 9.85761.034678-3.043765-8.053625-8.742992-14.887729-11.541904-23.118874 8.533589.390544 16.786875 4.843404 24.732651 7.685374 15.630376 5.590144 31.063836 11.701854 46.475333 17.86913l7.112077 2.848685c6.338978 2.538947 12.71588 5.052299 18.961699 7.812528 2.285297 1.009799 5.449427 3.370401 7.975455 1.917215 2.061054-1.186494 3.394144-4.015253 4.665403-5.931643 3.55573-5.361927 6.775921-10.928622 9.965609-16.513481 12.774414-22.36586 22.143967-46.872692 28.402976-71.833646 20.645168-82.323009 2.934117-173.156241-46.677107-241.922507-19.061454-26.420745-43.033164-49.262193-69.46165-68.1783861-66.13923-47.336721-152.911262-66.294198-232.486917-48.7172481zm135.205158 410.5292842c-17.532977 4.570931-35.601827 8.714164-53.58741 11.040088 2.365265 8.052799 8.145286 15.885969 12.376218 23.118874 1.635653 2.796558 3.3859 6.541816 6.618457 7.755557 3.651364 1.370619 8.063669-.853747 11.508927-1.975838-1.595256-4.364513-4.279573-8.292245-6.476657-12.385112-.905215-1.687677-2.305907-3.685809-1.559805-5.68972 1.410585-3.786541 7.266452-3.563609 10.509727-4.221671 8.54678-1.733916 17.004522-3.898008 25.557073-5.611281 3.150939-.631641 7.538512-2.342438 10.705115-1.285575 2.371037.791232 3.800147 2.744743 5.152304 4.781948l.606196.918752c.80912 1.222827 1.637246 2.41754 2.671212 3.351165 3.457625 3.121874 8.628398 3.60159 13.017619 4.453686-2.678546-6.027421-7.130424-11.301001-9.984571-17.339156-1.659561-3.511592-3.023155-8.677834-6.656381-10.707341-5.005064-2.795733-15.341663 2.461334-20.458024 3.795624zm-110.472507-40.151706c-.825246 10.467897-4.036369 18.984725-9.068639 28.072919 5.76683.729896 11.649079.989984 17.312856 2.39363 4.244947 1.051908 8.156828 3.058296 12.366325 4.211763-2.250671-6.157877-6.426367-11.651913-9.661398-17.339156-3.266358-5.740912-6.189758-12.717032-10.949144-17.339156z"/></g></svg>
```

`scripts/README.md`:

```md
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


```

`scripts/seed-notion.ts`:

```ts
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


```

`src/components/Footer.tsx`:

```tsx
import { Link } from "@tanstack/react-router"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-accent/5">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-secondary to-accent shadow-md">
                <span className="text-lg font-bold text-white font-playfair">SN</span>
              </div>
              <span className="text-lg font-bold font-playfair bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Silver Nails
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Experience luxury nail care in the heart of Rancho Cucamonga.
              Where elegance meets expertise.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Popular Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services#manicure"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Luxury Manicure
                </Link>
              </li>
              <li>
                <Link
                  to="/services#pedicure"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Spa Pedicure
                </Link>
              </li>
              <li>
                <Link
                  to="/services#gel"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Gel Nails
                </Link>
              </li>
              <li>
                <Link
                  to="/services#acrylic"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Acrylic Extensions
                </Link>
              </li>
              <li>
                <Link
                  to="/services#nail-art"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Nail Art
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  123 Luxury Lane<br />
                  Rancho Cucamonga, CA 91730
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a
                  href="tel:+19095551234"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  (909) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a
                  href="mailto:info@silvernails.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@silvernails.com
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-accent/20 rounded-lg">
              <p className="text-xs font-medium mb-1">Business Hours</p>
              <p className="text-xs text-muted-foreground">
                Mon-Sat: 9:00 AM - 7:00 PM<br />
                Sunday: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Silver Nails. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

```

`src/components/Header.tsx`:

```tsx
import { Link } from "@tanstack/react-router"
import { Menu, X, Calendar, User, Phone } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"
import { cn } from "~/lib/utils"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 group">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-secondary to-accent shadow-md group-hover:shadow-lg transition-all">
                <span className="text-xl font-bold text-white font-playfair">SN</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-playfair bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Silver Nails
                </span>
                <span className="text-xs text-muted-foreground tracking-wider">LUXURY NAIL CARE</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium leading-6 text-foreground hover:text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">
              <User className="h-4 w-4" />
              Sign In
            </Link>
          </Button>
          <Button variant="luxury" size="sm" asChild>
            <Link to="/booking">
              <Calendar className="h-4 w-4" />
              Book Now
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="space-y-2 px-6 pb-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block rounded-lg px-3 py-2 text-base font-medium leading-7 text-foreground hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="border-t border-border pt-4 space-y-2">
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <User className="h-4 w-4" />
                Sign In
              </Link>
            </Button>
            <Button variant="luxury" size="sm" className="w-full" asChild>
              <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
                <Calendar className="h-4 w-4" />
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Top bar with contact info */}
      <div className="hidden md:block border-b border-border/40 bg-accent/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:+19095551234"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                (909) 555-1234
              </a>
              <span className="text-muted-foreground">
                Mon-Sat: 9:00 AM - 7:00 PM | Sun: 10:00 AM - 6:00 PM
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Rancho Cucamonga, CA</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

```

`src/components/NotFound.tsx`:

```tsx
import { Link } from '@tanstack/react-router'
import { Home, Sparkles } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <Card className="max-w-lg w-full text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-3xl">404</CardTitle>
          <CardDescription className="text-lg mt-2">
            Page Not Found
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col gap-3 pt-4">
            <Button variant="luxury" asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


```

`src/components/booking/BookingComplete.tsx`:

```tsx
import { Link } from '@tanstack/react-router'
import { Check } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import type { BookingData } from '~/lib/hooks/use-booking-wizard'

interface BookingCompleteProps {
  bookingData: BookingData
}

export function BookingComplete({ bookingData }: BookingCompleteProps) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <Card className="max-w-lg w-full text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent">
            <Check className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
          <CardDescription className="text-base">
            Your appointment has been scheduled successfully
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border border-border p-4 text-left space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service</span>
              <span className="font-medium">{bookingData.service?.name ?? 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date</span>
              <span className="font-medium">
                {bookingData.date?.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Time</span>
              <span className="font-medium">{bookingData.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="font-bold text-lg">${bookingData.service?.price ?? 0}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            A confirmation email has been sent to <strong>{bookingData.email}</strong>
          </p>
          <div className="flex flex-col gap-3">
            <Button variant="luxury" asChild>
              <Link to="/">Return Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/services">Book Another Service</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

```

`src/components/booking/BookingProgress.tsx`:

```tsx
import { Check } from 'lucide-react'
import type { BookingStep } from '~/lib/hooks/use-booking-wizard'

interface BookingProgressProps {
  steps: { id: BookingStep; label: string }[]
  currentStepIndex: number
}

export function BookingProgress({ steps, currentStepIndex }: BookingProgressProps) {
  return (
    <section className="px-6 py-8 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          {steps.map((s, idx) => (
            <div key={s.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                    idx < currentStepIndex
                      ? 'bg-secondary border-secondary text-white'
                      : idx === currentStepIndex
                        ? 'border-secondary text-secondary'
                        : 'border-border text-muted-foreground'
                  }`}
                >
                  {idx < currentStepIndex ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-medium">{idx + 1}</span>
                  )}
                </div>
                <span
                  className={`mt-2 text-xs font-medium ${
                    idx <= currentStepIndex ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={`mx-4 h-0.5 w-16 sm:w-24 lg:w-32 ${
                    idx < currentStepIndex ? 'bg-secondary' : 'bg-border'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

```

`src/components/booking/ConfirmStep.tsx`:

```tsx
import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import type { BookingData } from '~/lib/hooks/use-booking-wizard'

interface ConfirmStepProps {
  bookingData: BookingData
}

export function ConfirmStep({ bookingData }: ConfirmStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Confirm Your Booking</h2>
        <p className="text-muted-foreground">Please review your appointment details</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Appointment Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Service</p>
                <p className="font-medium">{bookingData.service?.name ?? 'No service selected'}</p>
                <p className="text-sm text-muted-foreground">{bookingData.service?.duration} minutes</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date & Time</p>
                <p className="font-medium">
                  {bookingData.date?.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
                <p className="text-sm text-muted-foreground">at {bookingData.time}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Contact</p>
                <p className="font-medium">
                  {bookingData.firstName} {bookingData.lastName}
                </p>
                <p className="text-sm text-muted-foreground">{bookingData.email}</p>
                <p className="text-sm text-muted-foreground">{bookingData.phone}</p>
              </div>
              {bookingData.notes && (
                <div>
                  <p className="text-sm text-muted-foreground">Notes</p>
                  <p className="text-sm">{bookingData.notes}</p>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-border pt-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-2xl font-bold">${bookingData.service?.price ?? 0}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Payment will be collected at the salon
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-secondary/50 bg-secondary/5">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Check className="h-5 w-5 text-secondary mt-0.5" />
            <div className="text-sm">
              <p className="font-medium">Cancellation Policy</p>
              <p className="text-muted-foreground">
                Free cancellation up to 24 hours before your appointment. Cancellations within 24
                hours may be subject to a fee.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

```

`src/components/booking/DateTimeStep.tsx`:

```tsx
import { Calendar as CalendarIcon, Clock, Sparkles } from 'lucide-react'
import { startOfDay, isBefore } from 'date-fns'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Calendar } from '~/components/ui/calendar'
import type { ServiceItem } from '~/lib/services-catalog'

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM',
]

interface DateTimeStepProps {
  service?: ServiceItem
  selectedDate?: Date
  selectedTime?: string
  onSelectDate: (date: Date | undefined) => void
  onSelectTime: (time: string) => void
}

/**
 * Check if a date should be disabled.
 * Disables past dates (but allows today) and Sundays.
 * Uses date-fns to normalize dates to start of day for accurate comparison.
 */
function isDateDisabled(date: Date): boolean {
  const normalizedDate = startOfDay(date)
  const normalizedToday = startOfDay(new Date())

  // Disable if date is before today (past dates)
  if (isBefore(normalizedDate, normalizedToday)) {
    return true
  }

  // Disable Sundays (day 0)
  if (date.getDay() === 0) {
    return true
  }

  return false
}

export function DateTimeStep({
  service,
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
}: DateTimeStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Choose Date & Time</h2>
        <p className="text-muted-foreground">
          Select when you'd like your {service?.name}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-secondary" />
              Select Date
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onSelectDate}
              disabled={isDateDisabled}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-secondary" />
              Select Time
            </CardTitle>
            {selectedDate && (
              <CardDescription>
                Available times for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {selectedDate ? (
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => onSelectTime(time)}
                    className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                      selectedTime === time
                        ? 'bg-secondary text-white border-secondary'
                        : 'border-border hover:border-secondary hover:bg-secondary/10'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                Please select a date first
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {service && (
        <Card className="bg-accent/5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-secondary" />
                <div>
                  <p className="font-medium">{service.name}</p>
                  <p className="text-sm text-muted-foreground">{service.duration} min</p>
                </div>
              </div>
              <p className="text-xl font-bold">${service.price}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

```

`src/components/booking/InfoStep.tsx`:

```tsx
import type { ChangeEvent } from 'react'
import { User, Mail, Phone, MessageSquare } from 'lucide-react'
import { Card, CardContent } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import type { BookingData } from '~/lib/hooks/use-booking-wizard'

interface InfoStepProps {
  bookingData: BookingData
  onInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function InfoStep({ bookingData, onInputChange }: InfoStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Your Information</h2>
        <p className="text-muted-foreground">Please provide your contact details</p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={bookingData.firstName}
                onChange={onInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={bookingData.lastName}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={bookingData.email}
              onChange={onInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(555) 555-5555"
              value={bookingData.phone}
              onChange={onInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              Special Requests (Optional)
            </Label>
            <Input
              id="notes"
              name="notes"
              placeholder="Any special requests or notes for your appointment"
              value={bookingData.notes}
              onChange={onInputChange}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

```

`src/components/booking/ServiceStep.tsx`:

```tsx
import { Clock, Check } from 'lucide-react'
import { Card, CardContent } from '~/components/ui/card'
import type { ServiceItem } from '~/lib/services-catalog'
import { categoryLabels } from '~/lib/services-catalog'
import type { ServiceCategory } from '~/types'

interface ServiceStepProps {
  selectedService?: ServiceItem
  groupedServices: Record<ServiceCategory, ServiceItem[]>
  onSelectService: (service: ServiceItem) => void
}

export function ServiceStep({
  selectedService,
  groupedServices,
  onSelectService,
}: ServiceStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Select a Service</h2>
        <p className="text-muted-foreground">Choose the service you'd like to book</p>
      </div>
      {Object.entries(groupedServices).map(([category, categoryServices]) => (
        <div key={category}>
          <h3 className="text-lg font-semibold mb-4">
            {categoryLabels[category as ServiceCategory] || category}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {categoryServices.map(service => (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedService?.id === service.id
                    ? 'border-secondary ring-2 ring-secondary/20'
                    : ''
                }`}
                onClick={() => onSelectService(service)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">{service.name}</h4>
                      <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {service.duration} min
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">${service.price}</p>
                      {selectedService?.id === service.id && (
                        <Check className="h-5 w-5 text-secondary ml-auto mt-1" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

```

`src/components/booking/index.ts`:

```ts
export { BookingProgress } from './BookingProgress'
export { BookingComplete } from './BookingComplete'
export { ServiceStep } from './ServiceStep'
export { DateTimeStep } from './DateTimeStep'
export { InfoStep } from './InfoStep'
export { ConfirmStep } from './ConfirmStep'

```

`src/components/ui/button.tsx`:

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg",
        destructive:
          "bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90 hover:shadow-lg",
        outline:
          "border-2 border-input bg-background shadow-sm hover:bg-accent/50 hover:text-accent-foreground hover:border-accent",
        secondary:
          "bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/90 hover:shadow-lg",
        ghost: 
          "hover:bg-accent/50 hover:text-accent-foreground",
        link: 
          "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        luxury: 
          "bg-gradient-to-r from-secondary to-accent text-white shadow-lg hover:shadow-xl hover:shadow-secondary/25 transform hover:-translate-y-0.5 transition-all duration-300 font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

`src/components/ui/calendar.tsx`:

```tsx
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "~/lib/utils"
import { buttonVariants } from "~/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-gradient-to-br from-secondary to-accent text-white hover:from-secondary/90 hover:to-accent/90 focus:from-secondary focus:to-accent font-semibold shadow-md",
        day_today: "bg-accent/20 text-accent-foreground border-2 border-accent font-medium",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }

```

`src/components/ui/card.tsx`:

```tsx
import * as React from "react"
import { cn } from "~/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-border/50 bg-card text-card-foreground shadow-md transition-all duration-200 hover:shadow-lg hover:border-border",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-tight tracking-tight font-serif", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

```

`src/components/ui/dialog.tsx`:

```tsx
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "~/lib/utils"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-border/50 bg-background p-6 shadow-2xl duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-xl",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-tight tracking-tight font-serif",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

```

`src/components/ui/input.tsx`:

```tsx
import * as React from "react"
import { cn } from "~/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg border-2 border-input bg-background px-4 py-2 text-sm ring-offset-background transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:border-ring hover:border-input/80 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

```

`src/components/ui/label.tsx`:

```tsx
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }

```

`src/lib/hooks/use-booking-wizard.ts`:

```ts
import type { ServiceItem } from '~/lib/services-catalog'

export type BookingStep = 'service' | 'datetime' | 'info' | 'confirm'

export interface BookingData {
  service?: ServiceItem
  date?: Date
  time?: string
  firstName: string
  lastName: string
  email: string
  phone: string
  notes: string
}

export const stepOrder: BookingStep[] = ['service', 'datetime', 'info', 'confirm']

export const stepLabels: Record<BookingStep, string> = {
  service: 'Service',
  datetime: 'Date & Time',
  info: 'Your Info',
  confirm: 'Confirm',
}

export function canProceed(step: BookingStep, bookingData: BookingData): boolean {
  switch (step) {
    case 'service':
      return !!bookingData.service
    case 'datetime':
      return !!bookingData.date && !!bookingData.time
    case 'info':
      return (
        bookingData.firstName.trim() !== '' &&
        bookingData.lastName.trim() !== '' &&
        bookingData.email.trim() !== '' &&
        bookingData.phone.trim() !== ''
      )
    case 'confirm':
      return true
    default:
      return false
  }
}

export interface BookingWizardResult {
  currentStepIndex: number
  steps: { id: BookingStep; label: string }[]
  goNext: () => void
  goBack: () => void
}

export function useBookingWizard(
  step: BookingStep,
  setStep: (s: BookingStep) => void
): BookingWizardResult {
  const currentStepIndex = stepOrder.indexOf(step)

  const steps = stepOrder.map(id => ({
    id,
    label: stepLabels[id],
  }))

  const goNext = () => {
    const nextIndex = currentStepIndex + 1
    if (nextIndex < stepOrder.length) {
      setStep(stepOrder[nextIndex])
    }
  }

  const goBack = () => {
    const prevIndex = currentStepIndex - 1
    if (prevIndex >= 0) {
      setStep(stepOrder[prevIndex])
    }
  }

  return { currentStepIndex, steps, goNext, goBack }
}

```

`src/lib/notion.ts`:

```ts
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

```

`src/lib/server/appointments.ts`:

```ts
import { createServerFn } from '@tanstack/react-start/server'
import { notionDb } from '~/lib/notion'
import { verifyToken } from './auth'
import type { Appointment, AppointmentStatus } from '~/types'

export interface AppointmentsResponse {
  success: boolean
  data?: Appointment[]
  error?: string
}

export interface AppointmentResponse {
  success: boolean
  data?: Appointment
  error?: string
}

export interface CreateAppointmentData {
  serviceId: string
  staffId?: string
  date: string
  startTime: string
  endTime: string
  notes?: string
  addOns?: string[]
  totalPrice: number
  clientInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
}

// Server function: Create appointment (can be used by guests or logged-in users)
export const createAppointment = createServerFn({ method: 'POST' })
  .validator((data: CreateAppointmentData & { token?: string }) => data)
  .handler(async ({ data }): Promise<AppointmentResponse> => {
    try {
      let clientId = ''

      // If user is logged in, use their ID
      if (data.token) {
        const payload = verifyToken(data.token)
        if (payload) {
          clientId = payload.userId
        }
      }

      // If not logged in, check if user exists or create a new guest record
      if (!clientId && data.clientInfo.email) {
        const existingUser = await notionDb.users.findByEmail(data.clientInfo.email)
        if (existingUser) {
          clientId = existingUser.id
        } else {
          // Create a guest user record
          const newUser = await notionDb.users.create({
            firstName: data.clientInfo.firstName,
            lastName: data.clientInfo.lastName,
            email: data.clientInfo.email,
            phone: data.clientInfo.phone,
            role: 'client',
          })
          clientId = newUser.id
        }
      }

      const appointment = await notionDb.appointments.create({
        clientId,
        staffId: data.staffId || '',
        serviceId: data.serviceId,
        date: data.date,
        startTime: data.startTime,
        endTime: data.endTime,
        status: 'pending',
        notes: data.notes,
        addOns: data.addOns,
        totalPrice: data.totalPrice,
        depositPaid: false,
        reminderSent: false,
      })

      return { success: true, data: appointment }
    } catch (error) {
      console.error('Create appointment error:', error)
      return { success: false, error: 'Failed to create appointment' }
    }
  })

// Server function: Get appointments for current user
export const getUserAppointments = createServerFn({ method: 'GET' })
  .validator((data: { token: string }) => data)
  .handler(async ({ data }): Promise<AppointmentsResponse> => {
    try {
      const payload = verifyToken(data.token)
      if (!payload) {
        return { success: false, error: 'Invalid or expired token' }
      }

      const appointments = await notionDb.appointments.getByClient(payload.userId)
      return { success: true, data: appointments }
    } catch (error) {
      console.error('Get user appointments error:', error)
      return { success: false, error: 'Failed to fetch appointments' }
    }
  })

// Server function: Get appointment by ID
export const getAppointmentById = createServerFn({ method: 'GET' })
  .validator((data: { id: string; token?: string }) => data)
  .handler(async ({ data }): Promise<AppointmentResponse> => {
    try {
      const appointment = await notionDb.appointments.findById(data.id)
      if (!appointment) {
        return { success: false, error: 'Appointment not found' }
      }

      // If token provided, verify user owns this appointment or is admin
      if (data.token) {
        const payload = verifyToken(data.token)
        if (payload && payload.userId !== appointment.clientId && payload.role !== 'admin') {
          return { success: false, error: 'Unauthorized' }
        }
      }

      return { success: true, data: appointment }
    } catch (error) {
      console.error('Get appointment error:', error)
      return { success: false, error: 'Failed to fetch appointment' }
    }
  })

// Server function: Update appointment status
export const updateAppointmentStatus = createServerFn({ method: 'POST' })
  .validator((data: { id: string; status: AppointmentStatus; token: string }) => data)
  .handler(async ({ data }): Promise<AppointmentResponse> => {
    try {
      const payload = verifyToken(data.token)
      if (!payload) {
        return { success: false, error: 'Invalid or expired token' }
      }

      // Get appointment to check permissions
      const existing = await notionDb.appointments.findById(data.id)
      if (!existing) {
        return { success: false, error: 'Appointment not found' }
      }

      // Only owner, staff, or admin can update
      const isOwner = payload.userId === existing.clientId
      const isStaff = payload.role === 'staff'
      const isAdmin = payload.role === 'admin'

      if (!isOwner && !isStaff && !isAdmin) {
        return { success: false, error: 'Unauthorized' }
      }

      // Clients can only cancel their own appointments
      if (isOwner && !isStaff && !isAdmin && data.status !== 'cancelled') {
        return { success: false, error: 'You can only cancel appointments' }
      }

      const appointment = await notionDb.appointments.update(data.id, {
        status: data.status,
      })

      return { success: true, data: appointment }
    } catch (error) {
      console.error('Update appointment error:', error)
      return { success: false, error: 'Failed to update appointment' }
    }
  })

// Server function: Cancel appointment (simplified for clients)
export const cancelAppointment = createServerFn({ method: 'POST' })
  .validator((data: { id: string; token: string }) => data)
  .handler(async ({ data }): Promise<AppointmentResponse> => {
    try {
      const payload = verifyToken(data.token)
      if (!payload) {
        return { success: false, error: 'Invalid or expired token' }
      }

      const existing = await notionDb.appointments.findById(data.id)
      if (!existing) {
        return { success: false, error: 'Appointment not found' }
      }

      if (payload.userId !== existing.clientId && payload.role !== 'admin') {
        return { success: false, error: 'Unauthorized' }
      }

      const appointment = await notionDb.appointments.update(data.id, {
        status: 'cancelled',
      })

      return { success: true, data: appointment }
    } catch (error) {
      console.error('Cancel appointment error:', error)
      return { success: false, error: 'Failed to cancel appointment' }
    }
  })

// Server function: Get available time slots for a date
export const getAvailableSlots = createServerFn({ method: 'GET' })
  .validator((data: { date: string; serviceId: string; staffId?: string }) => data)
  .handler(async ({ data }): Promise<{ success: boolean; slots?: string[]; error?: string }> => {
    try {
      // Get service to know duration
      const service = await notionDb.services.findById(data.serviceId)
      if (!service) {
        return { success: false, error: 'Service not found' }
      }

      // Get all staff if no specific staff requested
      const staffList = data.staffId
        ? [await notionDb.staff.findById(data.staffId)].filter(Boolean)
        : await notionDb.staff.getAll(true)

      // Get existing appointments for the date
      const allSlots = [
        '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
        '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
        '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
        '6:00 PM', '6:30 PM',
      ]

      // For simplicity, return all slots
      // In production, filter based on staff schedules and existing appointments
      const availableSlots = allSlots

      return { success: true, slots: availableSlots }
    } catch (error) {
      console.error('Get available slots error:', error)
      return { success: false, error: 'Failed to fetch available slots' }
    }
  })

```

`src/lib/server/auth.ts`:

```ts
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

      // Get password hash from user preferences
      const passwordHash = (user.preferences as any)?.passwordHash
      
      if (!passwordHash) {
        // User exists but has no password set (legacy account or admin-created)
        return { success: false, error: 'Account not set up. Please contact support or reset your password.' }
      }

      // Verify password against stored hash
      const isValidPassword = await verifyPassword(password, passwordHash)
      if (!isValidPassword) {
        return { success: false, error: 'Invalid email or password' }
      }

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

      // Hash password before storing
      const passwordHash = await hashPassword(password)

      // Create user in Notion with hashed password stored in preferences
      const user = await notionDb.users.create({
        firstName,
        lastName,
        email,
        phone,
        role: 'client',
        // Store password hash securely in preferences JSON field
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

```

`src/lib/server/email.ts`:

```ts
import { createServerFn } from '@tanstack/react-start/server'
import { notionDb } from '~/lib/notion'

// Email configuration - supports Resend or SMTP (Gmail)
const EMAIL_PROVIDER = process.env.EMAIL_PROVIDER || 'resend' // 'resend' or 'smtp'
const RESEND_API_KEY = process.env.RESEND_API_KEY || ''
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@silvernails.com'
const SITE_NAME = 'Silver Nails'

// SMTP configuration (for Gmail)
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com'
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587')
const SMTP_USER = process.env.SMTP_USER || ''
const SMTP_PASSWORD = process.env.SMTP_PASSWORD || ''

interface EmailResponse {
  success: boolean
  messageId?: string
  error?: string
}

// Send email using Resend API
async function sendWithResend(params: {
  to: string
  subject: string
  html: string
  text?: string
}): Promise<EmailResponse> {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${SITE_NAME} <${FROM_EMAIL}>`,
        to: params.to,
        subject: params.subject,
        html: params.html,
        text: params.text,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Resend API error:', error)
      return { success: false, error: 'Failed to send email via Resend' }
    }

    const data = await response.json()
    return { success: true, messageId: data.id }
  } catch (error) {
    console.error('Resend error:', error)
    return { success: false, error: 'Failed to send email via Resend' }
  }
}

// Send email using SMTP (Gmail or other SMTP providers)
// Note: This requires nodemailer package to be installed
async function sendWithSMTP(params: {
  to: string
  subject: string
  html: string
  text?: string
}): Promise<EmailResponse> {
  try {
    // Dynamic import to avoid issues if nodemailer is not installed
    const nodemailer = await import('nodemailer').catch(() => null)

    if (!nodemailer) {
      console.warn('nodemailer not installed - run: pnpm add nodemailer @types/nodemailer')
      return { success: false, error: 'nodemailer not installed' }
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    })

    const info = await transporter.sendMail({
      from: `"${SITE_NAME}" <${SMTP_USER}>`,
      to: params.to,
      subject: params.subject,
      html: params.html,
      text: params.text,
    })

    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('SMTP error:', error)
    return { success: false, error: 'Failed to send email via SMTP' }
  }
}

// Main send email function - routes to appropriate provider
async function sendEmail(params: {
  to: string
  subject: string
  html: string
  text?: string
}): Promise<EmailResponse> {
  // Check if any email configuration is available
  const hasResend = !!RESEND_API_KEY
  const hasSMTP = !!SMTP_USER && !!SMTP_PASSWORD

  if (!hasResend && !hasSMTP) {
    console.warn('No email configuration found. Set RESEND_API_KEY or SMTP credentials.')
    return { success: true, messageId: 'skipped-no-config' }
  }

  // Use configured provider or fall back to available one
  if (EMAIL_PROVIDER === 'smtp' && hasSMTP) {
    return sendWithSMTP(params)
  } else if (hasResend) {
    return sendWithResend(params)
  } else if (hasSMTP) {
    return sendWithSMTP(params)
  }

  return { success: false, error: 'No email provider configured' }
}

// Email templates
const emailStyles = `
  body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
  .header { background: linear-gradient(135deg, #A0A7B5, #E6B8B8); padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
  .header h1 { color: white; margin: 0; font-size: 28px; }
  .content { background: #fff; padding: 30px; border: 1px solid #eee; }
  .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #888; border-radius: 0 0 8px 8px; }
  .button { display: inline-block; background: linear-gradient(135deg, #A0A7B5, #E6B8B8); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
  .details { background: #f9f9f9; padding: 20px; border-radius: 6px; margin: 20px 0; }
  .details p { margin: 5px 0; }
`

// Server function: Send booking confirmation email
export const sendBookingConfirmation = createServerFn({ method: 'POST' })
  .validator((data: {
    appointmentId: string
    clientEmail: string
    clientName: string
    serviceName: string
    date: string
    time: string
    price: number
  }) => data)
  .handler(async ({ data }): Promise<EmailResponse> => {
    const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

    const html = `
      <!DOCTYPE html>
      <html>
      <head><style>${emailStyles}</style></head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✨ ${SITE_NAME}</h1>
          </div>
          <div class="content">
            <h2>Booking Confirmed!</h2>
            <p>Hi ${data.clientName},</p>
            <p>Your appointment has been confirmed. We look forward to seeing you!</p>

            <div class="details">
              <h3>Appointment Details</h3>
              <p><strong>Service:</strong> ${data.serviceName}</p>
              <p><strong>Date:</strong> ${data.date}</p>
              <p><strong>Time:</strong> ${data.time}</p>
              <p><strong>Total:</strong> $${data.price.toFixed(2)}</p>
            </div>

            <p style="text-align: center;">
              <a href="${siteUrl}/account/appointments" class="button">View My Appointments</a>
            </p>

            <p><strong>Location:</strong><br>
            Silver Nails<br>
            123 Main Street<br>
            Rancho Cucamonga, CA 91730</p>

            <p><strong>Need to reschedule?</strong><br>
            Please contact us at least 24 hours before your appointment at (909) 555-1234.</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.</p>
            <p>123 Main Street, Rancho Cucamonga, CA 91730</p>
          </div>
        </div>
      </body>
      </html>
    `

    return sendEmail({
      to: data.clientEmail,
      subject: `Booking Confirmed - ${data.serviceName} on ${data.date}`,
      html,
    })
  })

// Server function: Send appointment reminder
export const sendAppointmentReminder = createServerFn({ method: 'POST' })
  .validator((data: {
    appointmentId: string
    clientEmail: string
    clientName: string
    serviceName: string
    date: string
    time: string
  }) => data)
  .handler(async ({ data }): Promise<EmailResponse> => {
    const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

    const html = `
      <!DOCTYPE html>
      <html>
      <head><style>${emailStyles}</style></head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✨ ${SITE_NAME}</h1>
          </div>
          <div class="content">
            <h2>Appointment Reminder</h2>
            <p>Hi ${data.clientName},</p>
            <p>This is a friendly reminder about your upcoming appointment!</p>

            <div class="details">
              <h3>Your Appointment</h3>
              <p><strong>Service:</strong> ${data.serviceName}</p>
              <p><strong>Date:</strong> ${data.date}</p>
              <p><strong>Time:</strong> ${data.time}</p>
            </div>

            <p style="text-align: center;">
              <a href="${siteUrl}/account/appointments" class="button">View Appointment</a>
            </p>

            <p><strong>Location:</strong><br>
            Silver Nails<br>
            123 Main Street<br>
            Rancho Cucamonga, CA 91730</p>

            <p><strong>Need to reschedule?</strong><br>
            Please call us at (909) 555-1234 as soon as possible.</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Mark reminder as sent
    await notionDb.appointments.update(data.appointmentId, { reminderSent: true })

    return sendEmail({
      to: data.clientEmail,
      subject: `Reminder: Your appointment tomorrow at ${data.time}`,
      html,
    })
  })

// Server function: Send cancellation confirmation
export const sendCancellationEmail = createServerFn({ method: 'POST' })
  .validator((data: {
    clientEmail: string
    clientName: string
    serviceName: string
    date: string
    time: string
  }) => data)
  .handler(async ({ data }): Promise<EmailResponse> => {
    const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

    const html = `
      <!DOCTYPE html>
      <html>
      <head><style>${emailStyles}</style></head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✨ ${SITE_NAME}</h1>
          </div>
          <div class="content">
            <h2>Appointment Cancelled</h2>
            <p>Hi ${data.clientName},</p>
            <p>Your appointment has been cancelled as requested.</p>

            <div class="details">
              <h3>Cancelled Appointment</h3>
              <p><strong>Service:</strong> ${data.serviceName}</p>
              <p><strong>Date:</strong> ${data.date}</p>
              <p><strong>Time:</strong> ${data.time}</p>
            </div>

            <p>We hope to see you again soon!</p>

            <p style="text-align: center;">
              <a href="${siteUrl}/booking" class="button">Book New Appointment</a>
            </p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `

    return sendEmail({
      to: data.clientEmail,
      subject: `Appointment Cancelled - ${data.serviceName}`,
      html,
    })
  })

// Server function: Send welcome email for new users
export const sendWelcomeEmail = createServerFn({ method: 'POST' })
  .validator((data: { email: string; firstName: string }) => data)
  .handler(async ({ data }): Promise<EmailResponse> => {
    const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

    const html = `
      <!DOCTYPE html>
      <html>
      <head><style>${emailStyles}</style></head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✨ ${SITE_NAME}</h1>
          </div>
          <div class="content">
            <h2>Welcome to ${SITE_NAME}!</h2>
            <p>Hi ${data.firstName},</p>
            <p>Thank you for creating an account with us! We're excited to have you as part of our family.</p>

            <div class="details">
              <h3>Your Benefits</h3>
              <p>✓ Easy online booking</p>
              <p>✓ View appointment history</p>
              <p>✓ Earn loyalty points</p>
              <p>✓ Exclusive member offers</p>
            </div>

            <p style="text-align: center;">
              <a href="${siteUrl}/booking" class="button">Book Your First Appointment</a>
            </p>

            <p>If you have any questions, feel free to contact us at (909) 555-1234 or reply to this email.</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.</p>
            <p>123 Main Street, Rancho Cucamonga, CA 91730</p>
          </div>
        </div>
      </body>
      </html>
    `

    return sendEmail({
      to: data.email,
      subject: `Welcome to ${SITE_NAME}! ✨`,
      html,
    })
  })

```

`src/lib/server/index.ts`:

```ts
// Server Functions Index
// Export all server functions for use in components

// Authentication
export {
  loginUser,
  registerUser,
  getCurrentUser,
  updateUserProfile,
} from './auth'

// Services
export {
  getServices,
  getServiceById,
  getServicesByCategory,
} from './services'

// Appointments
export {
  createAppointment,
  getUserAppointments,
  getAppointmentById,
  updateAppointmentStatus,
  cancelAppointment,
  getAvailableSlots,
} from './appointments'

// Staff
export {
  getStaff,
  getStaffById,
  getStaffSchedule,
  updateStaff,
} from './staff'

// Payments
export {
  createPayPalOrder,
  capturePayPalPayment,
  getPayPalClientId,
  processTipPayment,
} from './payments'

// Email Notifications
export {
  sendBookingConfirmation,
  sendAppointmentReminder,
  sendCancellationEmail,
  sendWelcomeEmail,
} from './email'

// Loyalty Program
export {
  getLoyaltyProgram,
  addLoyaltyPoints,
  redeemReward,
  getAvailableRewards,
  getTierBenefits,
} from './loyalty'

```

`src/lib/server/loyalty.ts`:

```ts
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

```

`src/lib/server/payments.ts`:

```ts
import { createServerFn } from '@tanstack/react-start/server'
import { notionDb } from '~/lib/notion'
import { verifyToken } from './auth'
import type { Payment, PaymentStatus, PaymentType } from '~/types'

// PayPal configuration
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || ''
const PAYPAL_SECRET = process.env.PAYPAL_SECRET || ''
const PAYPAL_MODE = process.env.PAYPAL_MODE || 'sandbox'

const PAYPAL_BASE_URL = PAYPAL_MODE === 'production'
  ? 'https://api-m.paypal.com'
  : 'https://api-m.sandbox.paypal.com'

// Get PayPal access token
async function getPayPalAccessToken(): Promise<string | null> {
  try {
    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`).toString('base64')
    const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    })

    if (!response.ok) {
      console.error('PayPal auth failed:', await response.text())
      return null
    }

    const data = await response.json()
    return data.access_token
  } catch (error) {
    console.error('PayPal auth error:', error)
    return null
  }
}

export interface PaymentResponse {
  success: boolean
  data?: {
    orderId?: string
    approvalUrl?: string
    payment?: Payment
  }
  error?: string
}

// Server function: Create PayPal order
export const createPayPalOrder = createServerFn({ method: 'POST' })
  .validator((data: {
    appointmentId: string
    amount: number
    type: PaymentType
    description: string
  }) => data)
  .handler(async ({ data }): Promise<PaymentResponse> => {
    try {
      const accessToken = await getPayPalAccessToken()
      if (!accessToken) {
        return { success: false, error: 'PayPal authentication failed' }
      }

      const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

      const orderPayload = {
        intent: 'CAPTURE',
        purchase_units: [{
          reference_id: data.appointmentId,
          description: data.description,
          amount: {
            currency_code: 'USD',
            value: data.amount.toFixed(2),
          },
        }],
        application_context: {
          brand_name: 'Silver Nails',
          landing_page: 'NO_PREFERENCE',
          user_action: 'PAY_NOW',
          return_url: `${siteUrl}/payment/success`,
          cancel_url: `${siteUrl}/payment/cancel`,
        },
      }

      const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderPayload),
      })

      if (!response.ok) {
        const error = await response.text()
        console.error('PayPal order creation failed:', error)
        return { success: false, error: 'Failed to create PayPal order' }
      }

      const order = await response.json()
      const approvalUrl = order.links?.find((link: any) => link.rel === 'approve')?.href

      return {
        success: true,
        data: {
          orderId: order.id,
          approvalUrl,
        },
      }
    } catch (error) {
      console.error('Create PayPal order error:', error)
      return { success: false, error: 'Failed to create payment' }
    }
  })

// Server function: Capture PayPal payment
export const capturePayPalPayment = createServerFn({ method: 'POST' })
  .validator((data: {
    orderId: string
    appointmentId: string
    type: PaymentType
  }) => data)
  .handler(async ({ data }): Promise<PaymentResponse> => {
    try {
      const accessToken = await getPayPalAccessToken()
      if (!accessToken) {
        return { success: false, error: 'PayPal authentication failed' }
      }

      const response = await fetch(
        `${PAYPAL_BASE_URL}/v2/checkout/orders/${data.orderId}/capture`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      )

      if (!response.ok) {
        const error = await response.text()
        console.error('PayPal capture failed:', error)
        return { success: false, error: 'Failed to capture payment' }
      }

      const captureData = await response.json()
      const capturedAmount = captureData.purchase_units?.[0]?.payments?.captures?.[0]?.amount?.value

      // If this was a deposit, update the appointment
      if (data.type === 'deposit' && capturedAmount) {
        await notionDb.appointments.update(data.appointmentId, {
          depositPaid: true,
          depositAmount: parseFloat(capturedAmount),
        })
      }

      return {
        success: true,
        data: {
          orderId: captureData.id,
          payment: {
            id: captureData.id,
            appointmentId: data.appointmentId,
            amount: parseFloat(capturedAmount || '0'),
            type: data.type,
            status: 'completed' as PaymentStatus,
            method: 'paypal',
            transactionId: captureData.id,
            createdAt: new Date().toISOString(),
          },
        },
      }
    } catch (error) {
      console.error('Capture PayPal payment error:', error)
      return { success: false, error: 'Failed to process payment' }
    }
  })

// Server function: Get PayPal client ID for frontend
export const getPayPalClientId = createServerFn({ method: 'GET' })
  .handler(async (): Promise<{ success: boolean; clientId?: string }> => {
    return {
      success: true,
      clientId: PAYPAL_CLIENT_ID,
    }
  })

// Server function: Process tip payment
export const processTipPayment = createServerFn({ method: 'POST' })
  .validator((data: {
    appointmentId: string
    amount: number
    staffId: string
  }) => data)
  .handler(async ({ data }): Promise<PaymentResponse> => {
    try {
      // Create PayPal order for tip
      const accessToken = await getPayPalAccessToken()
      if (!accessToken) {
        return { success: false, error: 'PayPal authentication failed' }
      }

      const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

      const orderPayload = {
        intent: 'CAPTURE',
        purchase_units: [{
          reference_id: `tip-${data.appointmentId}`,
          description: `Tip for service at Silver Nails`,
          amount: {
            currency_code: 'USD',
            value: data.amount.toFixed(2),
          },
        }],
        application_context: {
          brand_name: 'Silver Nails',
          landing_page: 'NO_PREFERENCE',
          user_action: 'PAY_NOW',
          return_url: `${siteUrl}/payment/tip-success`,
          cancel_url: `${siteUrl}/payment/cancel`,
        },
      }

      const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderPayload),
      })

      if (!response.ok) {
        return { success: false, error: 'Failed to create tip payment' }
      }

      const order = await response.json()
      const approvalUrl = order.links?.find((link: any) => link.rel === 'approve')?.href

      return {
        success: true,
        data: {
          orderId: order.id,
          approvalUrl,
        },
      }
    } catch (error) {
      console.error('Process tip error:', error)
      return { success: false, error: 'Failed to process tip' }
    }
  })

```

`src/lib/server/services.ts`:

```ts
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

```

`src/lib/server/staff.ts`:

```ts
import { createServerFn } from '@tanstack/react-start/server'
import { notionDb } from '~/lib/notion'
import { verifyToken } from './auth'
import type { Staff } from '~/types'

export interface StaffResponse {
  success: boolean
  data?: Staff[]
  error?: string
}

export interface SingleStaffResponse {
  success: boolean
  data?: Staff
  error?: string
}

// Server function: Get all active staff
export const getStaff = createServerFn({ method: 'GET' })
  .handler(async (): Promise<StaffResponse> => {
    try {
      const staff = await notionDb.staff.getAll(true)
      return { success: true, data: staff }
    } catch (error) {
      console.error('Get staff error:', error)
      return { success: false, error: 'Failed to fetch staff' }
    }
  })

// Server function: Get staff by ID
export const getStaffById = createServerFn({ method: 'GET' })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }): Promise<SingleStaffResponse> => {
    try {
      const staff = await notionDb.staff.findById(data.id)
      if (!staff) {
        return { success: false, error: 'Staff member not found' }
      }
      return { success: true, data: staff }
    } catch (error) {
      console.error('Get staff error:', error)
      return { success: false, error: 'Failed to fetch staff member' }
    }
  })

// Server function: Get staff schedule (admin only)
export const getStaffSchedule = createServerFn({ method: 'GET' })
  .validator((data: { staffId: string; startDate: string; endDate: string; token: string }) => data)
  .handler(async ({ data }): Promise<{ success: boolean; appointments?: any[]; error?: string }> => {
    try {
      const payload = verifyToken(data.token)
      if (!payload || (payload.role !== 'admin' && payload.role !== 'staff')) {
        return { success: false, error: 'Unauthorized' }
      }

      const appointments = await notionDb.appointments.getByStaff(
        data.staffId,
        data.startDate,
        data.endDate
      )

      return { success: true, appointments }
    } catch (error) {
      console.error('Get staff schedule error:', error)
      return { success: false, error: 'Failed to fetch schedule' }
    }
  })

// Server function: Update staff info (admin only)
export const updateStaff = createServerFn({ method: 'POST' })
  .validator((data: {
    staffId: string
    token: string
    updates: Partial<Staff>
  }) => data)
  .handler(async ({ data }): Promise<SingleStaffResponse> => {
    try {
      const payload = verifyToken(data.token)
      if (!payload || payload.role !== 'admin') {
        return { success: false, error: 'Unauthorized - Admin access required' }
      }

      const staff = await notionDb.staff.update(data.staffId, data.updates)
      return { success: true, data: staff }
    } catch (error) {
      console.error('Update staff error:', error)
      return { success: false, error: 'Failed to update staff' }
    }
  })

```

`src/lib/services-catalog.ts`:

```ts
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

```

`src/lib/utils.ts`:

```ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date)
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

```

`src/lib/validations.ts`:

```ts
import { z } from "zod"

// Auth schemas
export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export const signupSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\+?1?\d{10,14}$/, "Please enter a valid phone number"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

// Booking schemas
export const bookingSchema = z.object({
  serviceId: z.string().min(1, "Please select a service"),
  staffId: z.string().optional(),
  date: z.date({
    required_error: "Please select a date",
  }).refine((date) => date >= new Date(new Date().setHours(0, 0, 0, 0)), {
    message: "Date must be in the future",
  }),
  timeSlot: z.string().min(1, "Please select a time slot"),
  addOns: z.array(z.string()).optional(),
  notes: z.string().max(500, "Notes must be less than 500 characters").optional(),
  clientInfo: z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().regex(/^\+?1?\d{10,14}$/, "Please enter a valid phone number"),
  }),
})

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\+?1?\d{10,14}$/, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
  preferredContact: z.enum(["email", "phone"]),
})

// Service schema
export const serviceSchema = z.object({
  name: z.string().min(2, "Service name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.enum(['manicure', 'pedicure', 'gel', 'acrylic', 'nail-art', 'spa-treatment', 'other']),
  duration: z.number().min(15, "Duration must be at least 15 minutes").max(480),
  price: z.number().min(0, "Price must be a positive number"),
  imageUrl: z.string().url().optional(),
  isActive: z.boolean().default(true),
  requiresDeposit: z.boolean().default(false),
  depositAmount: z.number().min(0).optional(),
})

// Staff schema
export const staffSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\+?1?\d{10,14}$/, "Please enter a valid phone number"),
  specialties: z.array(z.string()).min(1, "Please select at least one specialty"),
  bio: z.string().max(500).optional(),
  imageUrl: z.string().url().optional(),
  isActive: z.boolean().default(true),
})

// Schedule schema
const timeSchema = z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (use HH:MM)")

export const dayScheduleSchema = z.object({
  isWorkingDay: z.boolean(),
  startTime: timeSchema.optional(),
  endTime: timeSchema.optional(),
  breaks: z.array(z.object({
    startTime: timeSchema,
    endTime: timeSchema,
  })).optional(),
}).refine((data) => {
  if (data.isWorkingDay && (!data.startTime || !data.endTime)) {
    return false
  }
  return true
}, {
  message: "Working days must have start and end times",
})

export const weeklyScheduleSchema = z.object({
  monday: dayScheduleSchema,
  tuesday: dayScheduleSchema,
  wednesday: dayScheduleSchema,
  thursday: dayScheduleSchema,
  friday: dayScheduleSchema,
  saturday: dayScheduleSchema,
  sunday: dayScheduleSchema,
})

// Review schema
export const reviewSchema = z.object({
  appointmentId: z.string().min(1),
  rating: z.number().min(1, "Please provide a rating").max(5),
  comment: z.string().max(1000).optional(),
})

// Admin - Appointment management
export const appointmentUpdateSchema = z.object({
  status: z.enum(['pending', 'confirmed', 'in-progress', 'completed', 'cancelled', 'no-show']),
  notes: z.string().max(1000).optional(),
})

// Client preferences schema
export const clientPreferencesSchema = z.object({
  favoriteColors: z.array(z.string()).optional(),
  allergies: z.array(z.string()).optional(),
  preferredTechnician: z.string().optional(),
  notes: z.string().max(500).optional(),
})

// Notification settings schema
export const notificationSettingsSchema = z.object({
  emailNotifications: z.boolean(),
  smsNotifications: z.boolean(),
  appointmentReminders: z.boolean(),
  promotionalEmails: z.boolean(),
  reminderHours: z.number().min(1).max(48),
})

// Gallery image schema
export const galleryImageSchema = z.object({
  url: z.string().url("Please provide a valid URL"),
  title: z.string().max(100).optional(),
  description: z.string().max(500).optional(),
  tags: z.array(z.string()),
  staffId: z.string().optional(),
  isHidden: z.boolean().default(false),
})

// Type exports
export type LoginFormData = z.infer<typeof loginSchema>
export type SignupFormData = z.infer<typeof signupSchema>
export type BookingFormData = z.infer<typeof bookingSchema>
export type ContactFormData = z.infer<typeof contactSchema>
export type ServiceFormData = z.infer<typeof serviceSchema>
export type StaffFormData = z.infer<typeof staffSchema>
export type ReviewFormData = z.infer<typeof reviewSchema>
export type ClientPreferencesData = z.infer<typeof clientPreferencesSchema>
export type NotificationSettingsData = z.infer<typeof notificationSettingsSchema>

```

`src/logo.svg`:

```svg
<?xml version="1.0" encoding="UTF-8"?>
<svg width="5355px" height="3786px" viewBox="0 0 5355 3786" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>logo</title>
    <g id="logo" stroke="none" fill="none" transform="translate(0.9778, 0)" fill-rule="evenodd" stroke-width="1">
        <g id="Layer_1" transform="translate(1117.351, 496.0658)" fill="#61DAFB">
            <g id="Group" fill-rule="nonzero">
                <path d="M3119.93396,1389.62036 C3119.93396,1182.92626 2861.10536,987.043843 2464.27723,865.571309 C2555.85295,461.086847 2515.15263,139.280027 2335.81684,36.2509659 C2294.48058,12.0836553 2246.14895,0.635981858 2193.36572,0.635981858 L2193.36572,142.459936 C2222.61908,142.459936 2246.14895,148.183773 2265.86317,158.995464 C2352.35135,208.602049 2389.87196,397.488661 2360.6186,640.433731 C2353.62323,700.216026 2342.17627,763.178229 2328.18553,827.412397 C2203.5408,796.885268 2067.4491,773.353939 1924.36204,758.090375 C1838.5098,640.433731 1749.47785,533.588779 1659.80995,440.099446 C1867.12721,247.396943 2061.72562,141.823954 2194.00166,141.823954 L2194.00166,0 C2019.11747,0 1790.17817,124.652444 1558.69509,340.886276 C1327.21202,125.924408 1098.27272,2.54392743 923.388526,2.54392743 L923.388526,144.367882 C1055.02863,144.367882 1250.26298,249.304888 1457.58024,440.735428 C1368.54828,534.224761 1279.51633,640.433731 1194.93598,758.090375 C1051.21297,773.353939 915.121273,796.885268 790.476541,828.048379 C775.849863,764.450193 765.038841,702.759953 757.407531,643.61364 C727.518233,400.66857 764.402898,211.781959 850.255137,161.539392 C869.333413,150.091718 894.13517,145.003864 923.388526,145.003864 L923.388526,3.17990929 C869.969355,3.17990929 821.637724,14.6275827 779.665518,38.7948933 C600.965673,141.823954 560.901295,462.994793 653.112959,866.20729 C257.556717,988.315807 0,1183.56224 0,1389.62036 C0,1595.67848 258.828602,1792.19688 655.656729,1913.66941 C564.081007,2318.15387 604.781328,2639.96069 784.117116,2742.98975 C825.453379,2767.15706 873.78501,2778.60474 927.204181,2778.60474 C1102.08837,2778.60474 1331.02768,2653.95229 1562.51075,2437.71846 C1793.99382,2652.68033 2022.93313,2776.06081 2197.81732,2776.06081 C2251.23649,2776.06081 2299.56812,2764.61314 2341.54033,2740.44583 C2520.24017,2637.41676 2560.30455,2316.24593 2468.09289,1913.03343 C2862.37724,1791.56089 3119.93396,1595.67848 3119.93396,1389.62036 L3119.93396,1389.62036 Z M2291.93681,965.42046 C2268.40694,1047.46212 2239.15358,1132.04771 2206.08457,1216.63329 C2180.01093,1165.75475 2152.6654,1114.8762 2122.7761,1063.99765 C2093.52275,1013.1191 2062.36156,963.512515 2031.20038,915.177893 C2121.50422,928.533513 2208.62834,945.069041 2291.93681,965.42046 Z M2000.67514,1642.74114 C1951.07162,1728.59869 1900.19622,1810.00437 1847.41299,1885.68621 C1752.65756,1893.95397 1656.63024,1898.40585 1559.96698,1898.40585 C1463.30372,1898.40585 1367.91234,1893.95397 1273.79285,1886.32219 C1221.00962,1810.64035 1169.49828,1729.87065 1119.89476,1644.64908 C1071.56313,1561.33546 1027.6831,1476.74987 987.61872,1391.52831 C1027.04716,1306.30674 1071.56313,1221.08517 1119.25882,1137.77154 C1168.86234,1051.91399 1219.73774,970.508315 1272.52096,894.826474 C1367.2764,886.55871 1463.30372,882.106837 1559.96698,882.106837 C1656.63024,882.106837 1752.02162,886.55871 1846.14111,894.190492 C1898.92434,969.872333 1950.43568,1050.64203 2000.0392,1135.8636 C2048.37083,1219.17722 2092.25086,1303.76281 2132.31524,1388.98438 C2092.25086,1474.20595 2048.37083,1559.42752 2000.67514,1642.74114 Z M2206.08457,1560.0635 C2240.42547,1645.28507 2269.67882,1730.50664 2293.84464,1813.18428 C2210.53617,1833.5357 2122.7761,1850.70721 2031.83632,1864.06283 C2062.99751,1815.09222 2094.15869,1764.84966 2123.41204,1713.33513 C2152.6654,1662.45658 2180.01093,1610.94205 2206.08457,1560.0635 Z M1561.23886,2238.65614 C1502.09621,2177.60188 1442.95356,2109.55182 1384.44685,2035.14195 C1441.68167,2037.68587 1500.18838,2039.59382 1559.33104,2039.59382 C1618.47369,2039.59382 1678.25229,2038.32185 1736.12305,2035.14195 C1678.88823,2109.55182 1619.74558,2177.60188 1561.23886,2238.65614 Z M1088.09764,1864.06283 C997.7938,1850.70721 910.669676,1834.17168 827.361207,1813.82026 C850.89108,1731.7786 880.144435,1647.19301 913.213446,1562.60742 C939.287089,1613.48597 966.632617,1664.36452 996.521915,1715.24307 C1026.41121,1766.12162 1056.93645,1815.7282 1088.09764,1864.06283 Z M1558.05915,540.584579 C1617.20181,601.638838 1676.34446,669.688896 1734.85117,744.098774 C1677.61634,741.554846 1619.10963,739.646901 1559.96698,739.646901 C1500.82433,739.646901 1441.04573,740.918864 1383.17496,744.098774 C1440.40979,669.688896 1499.55244,601.638838 1558.05915,540.584579 Z M1087.46169,915.177893 C1056.30051,964.148497 1025.13933,1014.39106 995.885972,1065.90559 C966.632617,1116.78414 939.287089,1167.66269 913.213446,1218.54124 C878.87255,1133.31967 849.619195,1048.0981 825.453379,965.42046 C908.761848,945.705023 996.521915,928.533513 1087.46169,915.177893 Z M511.933721,1711.42718 C286.810072,1615.39392 141.179237,1489.46951 141.179237,1389.62036 C141.179237,1289.77121 286.810072,1163.21082 511.933721,1067.81354 C566.624777,1044.28221 626.403373,1023.29481 688.089797,1003.57937 C724.33852,1128.23182 772.034208,1257.97211 831.176862,1390.89232 C772.670151,1523.17655 725.610405,1652.28087 689.997624,1776.29733 C627.039316,1756.58189 567.26072,1734.95851 511.933721,1711.42718 Z M854.070792,2620.24525 C767.582611,2570.63867 730.062003,2381.75206 759.315358,2138.80699 C766.310726,2079.02469 777.757691,2016.06249 791.748426,1951.82832 C916.393158,1982.35545 1052.48486,2005.88678 1195.57192,2021.15034 C1281.42416,2138.80699 1370.45611,2245.65194 1460.12401,2339.14127 C1252.80675,2531.84378 1058.20834,2637.41676 925.932296,2637.41676 C897.314883,2636.78078 873.149068,2631.05695 854.070792,2620.24525 L854.070792,2620.24525 Z M2362.52643,2135.62708 C2392.41573,2378.57215 2355.53106,2567.45876 2269.67882,2617.70133 C2250.60055,2629.149 2225.79879,2634.23686 2196.54543,2634.23686 C2064.90533,2634.23686 1869.67098,2529.29985 1662.35372,2337.86931 C1751.38568,2244.37998 1840.41763,2138.17101 1924.99798,2020.51436 C2068.72099,2005.2508 2204.81269,1981.71947 2329.45742,1950.55636 C2344.0841,2014.79053 2355.53106,2076.48077 2362.52643,2135.62708 L2362.52643,2135.62708 Z M2607.3643,1711.42718 C2552.67324,1734.95851 2492.89464,1755.94591 2431.20822,1775.66135 C2394.9595,1651.0089 2347.26381,1521.2686 2288.12115,1388.3484 C2346.62787,1256.06417 2393.68761,1126.95985 2429.30039,1002.94339 C2492.2587,1022.65883 2552.0373,1044.28221 2608.00024,1067.81354 C2833.12389,1163.8468 2978.75472,1289.77121 2978.75472,1389.62036 C2978.75472,1489.46951 2832.48794,1616.0299 2607.3643,1711.42718 L2607.3643,1711.42718 Z" id="Shape"></path>
            </g>
            <path d="M1537.37834,1099.4829 C1545.02735,1098.47702 1553.10731,1099.16174 1560.81604,1099.16174 C1589.37451,1099.16174 1617.41357,1103.60261 1644.73816,1112.01928 C1679.60968,1122.76128 1712.08981,1139.93545 1740.75715,1162.52987 C1775.89405,1190.22336 1805.00822,1226.54711 1823.68958,1267.31325 C1858.64201,1343.58359 1858.38571,1436.01692 1822.57667,1511.96611 C1799.42324,1561.07316 1762.27826,1602.17408 1717.31944,1632.14671 C1680.63641,1656.60215 1637.73331,1671.57142 1594.08247,1676.87122 C1538.52074,1683.61849 1478.45443,1673.7589 1428.50641,1648.10898 C1334.7397,1599.95554 1270.99292,1503.04196 1269.73182,1396.83535 C1269.48913,1376.35874 1269.80743,1355.76018 1273.85459,1335.48277 C1280.44663,1302.45918 1291.94018,1270.53691 1309.20168,1241.56031 C1327.87397,1210.21369 1351.99288,1182.55201 1380.87494,1160.24997 C1414.74469,1134.09636 1454.10946,1115.2846 1495.79531,1105.71435 C1505.55336,1103.47438 1515.35011,1102.20236 1525.19388,1100.99838 L1528.67012,1100.57481 C1531.56864,1100.22174 1534.47131,1099.86541 1537.37834,1099.4829 Z M1440.28829,1582.05277 C1427.38628,1583.43854 1413.77812,1585.79095 1402.70469,1593.0505 C1405.19749,1593.65093 1408.05457,1593.05485 1410.65507,1593.0505 C1416.90117,1593.04035 1423.20727,1592.80467 1429.44687,1593.07878 C1445.06719,1593.76551 1461.34234,1596.26875 1476.42637,1600.4123 C1488.01412,1603.59545 1498.77315,1608.6274 1509.54524,1613.66442 L1512.23902,1614.92271 C1518.52742,1617.854 1524.84413,1620.73472 1531.35625,1623.19891 C1550.98501,1630.62598 1570.52415,1632.93415 1591.34546,1632.93415 L1593.25225,1632.93318 C1603.09908,1632.91995 1612.8672,1632.72906 1622.42421,1630.03352 C1617.1148,1627.20106 1609.51424,1627.7326 1603.63241,1626.55277 C1590.87061,1623.99224 1578.32347,1620.86608 1566.04881,1616.47888 C1546.68964,1609.55943 1528.85694,1599.16793 1509.6734,1591.90838 C1487.81565,1583.63651 1463.59446,1579.54953 1440.28829,1582.05277 Z M1459.80285,1527.06119 C1434.23516,1527.06119 1408.3762,1531.57312 1385.35841,1543.19449 C1379.78158,1546.01028 1374.48085,1549.36485 1369.45766,1553.08274 C1367.92685,1554.21616 1365.21288,1555.67227 1364.64696,1557.64252 C1364.07308,1559.64106 1366.125,1561.31545 1367.28937,1562.5939 C1373.04255,1559.52213 1378.5088,1556.27053 1384.63565,1553.93842 C1424.26105,1538.85878 1472.29796,1542.01974 1511.84169,1555.84631 C1531.56224,1562.74183 1549.73174,1573.05357 1568.93985,1581.14052 C1590.42177,1590.18468 1612.36265,1596.04903 1635.43392,1599.05625 C1662.64806,1602.60227 1693.67549,1599.72848 1718.5515,1587.42618 C1727.29258,1583.10352 1739.42919,1576.51619 1743.1254,1566.94484 C1738.56043,1567.3444 1734.45298,1569.30378 1730.11569,1570.65475 C1723.2191,1572.80266 1716.24011,1574.62426 1709.1556,1576.04629 C1685.14474,1580.86496 1659.61174,1581.85988 1635.43392,1577.48645 C1610.81165,1573.03264 1588.07413,1563.72547 1565.31061,1554.26664 L1562.27515,1553.00498 C1550.63735,1548.16833 1538.97057,1543.34664 1527.01968,1539.16769 C1505.55366,1531.66159 1482.54816,1527.06119 1459.80285,1527.06119 Z M1504.61407,1133.60828 C1473.96537,1140.39067 1446.50982,1153.59796 1420.05097,1170.24757 C1404.69012,1179.91319 1389.99637,1189.81522 1376.68527,1202.25529 C1356.89028,1220.75623 1341.76143,1243.24263 1328.5667,1266.72974 C1314.97155,1290.92897 1306.25505,1319.13178 1302.04207,1346.49704 C1297.90932,1373.34381 1297.22848,1401.57056 1301.96257,1428.43981 C1307.88054,1462.03199 1319.14478,1493.55458 1336.93339,1522.71025 C1342.91135,1519.91332 1347.1554,1513.53629 1352.11138,1509.24045 C1362.11874,1500.56685 1372.62552,1492.52776 1383.91289,1485.59018 C1388.09117,1483.02239 1392.38365,1481.02821 1396.9226,1479.20082 C1398.63482,1478.51119 1401.43407,1477.88103 1402.23995,1475.99707 C1403.52069,1473.00507 1401.1522,1467.79772 1400.74528,1464.69767 C1399.58381,1455.83117 1398.88273,1446.81384 1399.10172,1437.86685 C1399.73775,1411.80978 1404.59833,1385.3894 1413.85256,1361.00019 C1420.82649,1342.62325 1431.48,1325.93811 1444.10086,1310.96434 C1448.38322,1305.88316 1452.9359,1301.15368 1457.63457,1296.46192 C1458.21308,1295.88421 1458.82064,1295.32387 1459.43565,1294.76658 L1460.17587,1294.09838 C1462.27545,1292.20409 1464.36137,1290.27877 1465.58495,1287.7593 C1456.52296,1287.76511 1447.45953,1290.38292 1438.84277,1293.04062 C1420.27936,1298.76647 1402.19587,1307.26241 1386.80393,1319.24926 C1379.78303,1324.71767 1374.6413,1331.88512 1368.00129,1337.63997 C1365.96455,1339.40573 1362.31605,1341.77192 1359.50162,1340.4398 C1355.24961,1338.42822 1355.90588,1330.0454 1355.41874,1326.19264 C1353.54534,1311.37332 1359.14891,1292.62874 1366.27028,1279.78257 C1377.7022,1259.16128 1398.84008,1241.55301 1423.66478,1242.16794 C1434.3855,1242.43335 1443.77128,1246.16501 1454.02076,1248.60081 C1451.42171,1244.90179 1447.93728,1242.20565 1444.62486,1239.17377 C1436.50897,1231.74453 1427.63201,1224.95924 1417.88268,1219.82657 C1415.26773,1218.45023 1412.51915,1217.43388 1409.75022,1216.45975 L1408.08733,1215.8778 C1407.25557,1215.58681 1406.42402,1215.29391 1405.59574,1214.9905 C1403.51346,1214.22836 1400.89128,1213.17906 1400.10781,1210.86073 C1398.65722,1206.56707 1406.37487,1202.59031 1409.20954,1200.77959 C1420.16806,1193.78038 1433.60492,1188.02263 1446.79315,1187.69848 C1467.40342,1187.1916 1487.541,1198.64836 1496.03056,1218.14421 C1499.41855,1225.92354 1500.09804,1234.21057 1500.70889,1242.5268 L1500.82326,1244.08631 C1500.88069,1244.86613 1500.93897,1245.64593 1501.00027,1246.42534 C1507.47332,1241.13895 1512.02599,1233.35946 1518.34654,1227.69743 C1533.12846,1214.45461 1553.35856,1208.57576 1572.55366,1214.53728 C1589.90066,1219.92375 1604.97747,1231.9164 1613.85081,1247.87566 C1616.17232,1252.05111 1622.64899,1262.25625 1617.96983,1266.41503 C1614.3076,1269.67098 1609.66313,1267.13366 1605.80069,1265.78341 C1601.8125,1264.38966 1597.64361,1263.69061 1593.51375,1262.86103 C1583.01058,1260.75155 1570.79301,1260.97055 1560.26672,1262.82477 C1553.46119,1264.02346 1546.81034,1266.44983 1540.02939,1267.4549 L1540.02939,1268.90522 C1558.57112,1269.05895 1576.50717,1279.65567 1585.65516,1295.73603 C1589.44532,1302.39805 1591.33824,1310.02308 1592.79026,1317.49075 C1594.5856,1326.72055 1593.32366,1336.77631 1590.80628,1345.77188 C1589.9621,1348.78781 1588.42984,1353.9009 1584.82977,1354.5956 C1582.28492,1355.08653 1580.12387,1352.54848 1578.67112,1350.83711 C1574.86289,1346.35128 1571.2404,1342.08663 1566.77157,1338.21284 C1555.46613,1328.41379 1543.51238,1319.37471 1531.35625,1310.65904 C1524.90199,1306.03109 1517.83266,1300.01446 1510.39617,1297.18635 C1512.48712,1302.23199 1514.53542,1306.92303 1515.24662,1312.41465 C1517.33829,1328.56825 1510.5877,1343.77263 1500.4553,1355.92409 C1497.36333,1359.63254 1494.05597,1363.36782 1490.15884,1366.24887 C1488.54275,1367.44393 1486.51468,1369.00447 1484.37675,1368.66655 C1477.67386,1367.60564 1476.87593,1357.4839 1475.84816,1352.2983 C1472.36734,1334.73427 1473.76516,1317.28988 1478.59466,1300.08698 C1474.29784,1302.2697 1471.19213,1307.04631 1468.49406,1310.96434 C1462.55802,1319.58573 1457.40762,1328.70458 1453.71431,1338.52031 C1439.00539,1377.62006 1439.14705,1423.41664 1458.20194,1461.05811 C1460.32975,1465.26184 1463.55905,1464.69767 1467.75323,1464.69767 C1472.80895,1464.69767 1477.91309,1464.44387 1482.93123,1465.11536 C1484.88413,1465.37642 1487.59593,1465.14364 1489.14192,1466.58526 C1490.99291,1468.31258 1490.00634,1471.27412 1489.57991,1473.39956 C1488.3888,1479.3415 1487.99056,1484.74174 1487.99056,1490.80333 C1495.9019,1489.57492 1498.09476,1476.86871 1500.89908,1470.49893 C1504.07706,1463.28289 1507.3107,1456.0596 1510.25089,1448.74421 C1511.69641,1445.14888 1513.6298,1441.12861 1513.12242,1437.1417 C1512.55289,1432.66095 1509.32142,1427.91044 1507.06929,1424.08887 C1502.80645,1416.85687 1497.96105,1409.41458 1494.82282,1401.60899 C1492.31412,1395.36901 1494.65008,1387.5714 1501.72375,1385.34226 C1505.62522,1384.1124 1509.7876,1386.52427 1512.32666,1389.34948 C1515.93315,1393.3614 1518.67364,1398.69976 1521.26801,1403.88732 L1522.0059,1405.3641 C1522.98612,1407.32427 1523.95508,1409.24214 1524.95258,1411.03604 L1555.1062,1465.42283 C1557.66694,1470.0283 1560.23347,1474.6287 1562.85348,1479.20082 C1563.87546,1480.9847 1564.91552,1483.73885 1567.00936,1484.49954 C1568.87408,1485.17684 1571.42182,1484.21383 1573.27642,1483.84182 C1578.09146,1482.87591 1582.89927,1481.83314 1587.73166,1480.9586 C1593.52242,1479.91074 1602.34951,1480.10726 1606.52346,1475.57503 C1600.41901,1473.63813 1593.36269,1473.75271 1587.00889,1474.18925 C1586.22321,1474.2433 1585.41997,1474.34419 1584.60911,1474.45086 L1583.91244,1474.54275 C1581.00382,1474.92353 1578.03411,1475.22838 1575.45555,1473.58665 C1570.23649,1470.26398 1566.76723,1462.58891 1563.57407,1457.4461 C1555.70103,1444.76455 1548.28333,1431.89228 1540.7442,1419.01276 C1538.34102,1414.90692 1535.86628,1410.83299 1533.5361,1406.68509 C1532.63554,1405.08104 1531.3006,1402.96721 1532.59073,1401.19855 C1533.93235,1399.36006 1536.8405,1399.23436 1539.486,1399.22865 L1540.63853,1399.22883 C1541.48104,1399.22712 1542.26426,1399.21253 1542.92044,1399.12605 C1553.68091,1397.70765 1564.591,1396.53289 1575.44471,1396.53289 C1574.5998,1393.58875 1572.18361,1390.26101 1572.95624,1387.10875 C1574.68509,1380.05587 1584.81459,1377.84921 1589.52555,1382.91009 C1592.68835,1386.30745 1594.52634,1390.98326 1596.58404,1395.08258 C1599.29945,1400.49442 1602.39143,1405.72571 1605.2991,1411.03604 C1610.38879,1420.33328 1615.94754,1429.37526 1621.18178,1438.59201 C1621.64941,1439.41555 1622.13242,1440.23451 1622.62001,1441.05306 L1623.35349,1442.2811 C1625.55616,1445.9674 1627.74247,1449.68746 1628.92907,1453.82031 C1610.75017,1452.98711 1597.1037,1431.84732 1589.17718,1417.56245 C1588.54476,1419.8496 1589.57253,1421.89091 1590.39431,1424.08887 C1592.10219,1428.65373 1594.14327,1433.00105 1596.71197,1437.1417 C1600.38071,1443.05463 1604.58646,1449.14377 1610.13726,1453.4367 C1619.98778,1461.05448 1632.97725,1461.09654 1644.82982,1460.28219 C1652.43038,1459.75935 1661.92747,1456.2931 1669.40371,1458.64478 C1676.86767,1460.99284 1679.87219,1469.23933 1675.4395,1475.5743 C1672.11913,1480.31973 1667.68716,1482.1116 1662.1761,1482.8266 C1666.07323,1491.20144 1671.17882,1498.97368 1674.87936,1507.48195 C1676.42101,1511.02652 1678.02771,1516.45867 1681.72174,1518.32885 C1684.1813,1519.57322 1687.70476,1518.41442 1690.3638,1518.35931 C1687.69536,1511.28612 1682.69891,1505.284 1680.24514,1498.0549 C1687.72644,1498.3979 1694.96201,1502.30868 1701.92799,1504.80467 C1717.73912,1510.4696 1733.32041,1516.74438 1748.90749,1523.00031 C1754.4648,1525.23017 1760.05536,1527.43755 1765.53101,1529.86175 C1767.5345,1530.74862 1770.30846,1532.82184 1772.523,1531.54557 C1774.3299,1530.50352 1775.49861,1528.01913 1776.61311,1526.33604 C1779.73038,1521.62687 1782.55349,1516.73786 1785.34985,1511.83289 C1796.54904,1492.18983 1804.76323,1470.66644 1810.25043,1448.74421 C1828.34983,1376.44313 1812.82274,1296.66786 1769.32912,1236.27314 C1752.61815,1213.06883 1731.60241,1193.00808 1708.43284,1176.39473 C1650.44929,1134.82074 1574.37719,1118.17113 1504.61407,1133.60828 Z M1623.14697,1494.16008 C1607.776,1498.17456 1591.93524,1501.81339 1576.16747,1503.85616 C1578.24107,1510.92862 1583.30835,1517.80819 1587.01757,1524.16056 C1588.45153,1526.61667 1589.98595,1529.90599 1592.8199,1530.97197 C1596.02101,1532.17573 1599.88923,1530.22215 1602.90965,1529.23667 C1601.5111,1525.40348 1599.15779,1521.95391 1597.23163,1518.35931 C1596.43804,1516.87709 1595.21007,1515.1222 1595.86417,1513.36225 C1597.10081,1510.03668 1602.23459,1510.23247 1605.07793,1509.65452 C1612.5708,1508.13169 1619.98561,1506.23105 1627.48354,1504.72635 C1630.24594,1504.17161 1634.09247,1502.66908 1636.8686,1503.59728 C1640.50626,1504.81337 1641.61498,1509.15561 1644.25884,1511.54718 C1647.2901,1514.289 1651.82326,1514.71032 1655.67124,1515.45868 C1653.32299,1510.16503 1649.42008,1505.53345 1646.91788,1500.23038 C1645.46296,1497.14628 1644.26751,1492.60897 1641.0823,1490.82654 C1636.69442,1488.37115 1627.63243,1492.98823 1623.14697,1494.16008 Z M1526.29692,1458.89641 C1525.57344,1468.08996 1522.75828,1475.56995 1518.34654,1483.55176 C1523.40226,1484.1928 1528.55916,1484.42122 1533.52454,1485.65399 C1537.24604,1486.57784 1540.67554,1488.33997 1544.36596,1489.35302 C1542.39282,1483.94479 1538.73203,1479.1196 1535.89592,1474.12472 C1533.03234,1469.0827 1530.46942,1462.95584 1526.29692,1458.89641 Z" id="Combined-Shape-Copy" fill-rule="nonzero"></path>
        </g>
    </g>
</svg>
```

`src/routeTree.gen.ts`:

```ts
/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as SignupRouteImport } from './routes/signup'
import { Route as ServicesRouteImport } from './routes/services'
import { Route as LoginRouteImport } from './routes/login'
import { Route as GalleryRouteImport } from './routes/gallery'
import { Route as ContactRouteImport } from './routes/contact'
import { Route as BookingRouteImport } from './routes/booking'
import { Route as AboutRouteImport } from './routes/about'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AdminIndexRouteImport } from './routes/admin/index'
import { Route as AccountIndexRouteImport } from './routes/account/index'
import { Route as AdminAppointmentsRouteImport } from './routes/admin/appointments'
import { Route as AccountRewardsRouteImport } from './routes/account/rewards'
import { Route as AccountAppointmentsRouteImport } from './routes/account/appointments'

const SignupRoute = SignupRouteImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRouteImport,
} as any)
const ServicesRoute = ServicesRouteImport.update({
  id: '/services',
  path: '/services',
  getParentRoute: () => rootRouteImport,
} as any)
const LoginRoute = LoginRouteImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRouteImport,
} as any)
const GalleryRoute = GalleryRouteImport.update({
  id: '/gallery',
  path: '/gallery',
  getParentRoute: () => rootRouteImport,
} as any)
const ContactRoute = ContactRouteImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRouteImport,
} as any)
const BookingRoute = BookingRouteImport.update({
  id: '/booking',
  path: '/booking',
  getParentRoute: () => rootRouteImport,
} as any)
const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const AdminIndexRoute = AdminIndexRouteImport.update({
  id: '/admin/',
  path: '/admin/',
  getParentRoute: () => rootRouteImport,
} as any)
const AccountIndexRoute = AccountIndexRouteImport.update({
  id: '/account/',
  path: '/account/',
  getParentRoute: () => rootRouteImport,
} as any)
const AdminAppointmentsRoute = AdminAppointmentsRouteImport.update({
  id: '/admin/appointments',
  path: '/admin/appointments',
  getParentRoute: () => rootRouteImport,
} as any)
const AccountRewardsRoute = AccountRewardsRouteImport.update({
  id: '/account/rewards',
  path: '/account/rewards',
  getParentRoute: () => rootRouteImport,
} as any)
const AccountAppointmentsRoute = AccountAppointmentsRouteImport.update({
  id: '/account/appointments',
  path: '/account/appointments',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/booking': typeof BookingRoute
  '/contact': typeof ContactRoute
  '/gallery': typeof GalleryRoute
  '/login': typeof LoginRoute
  '/services': typeof ServicesRoute
  '/signup': typeof SignupRoute
  '/account/appointments': typeof AccountAppointmentsRoute
  '/account/rewards': typeof AccountRewardsRoute
  '/admin/appointments': typeof AdminAppointmentsRoute
  '/account': typeof AccountIndexRoute
  '/admin': typeof AdminIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/booking': typeof BookingRoute
  '/contact': typeof ContactRoute
  '/gallery': typeof GalleryRoute
  '/login': typeof LoginRoute
  '/services': typeof ServicesRoute
  '/signup': typeof SignupRoute
  '/account/appointments': typeof AccountAppointmentsRoute
  '/account/rewards': typeof AccountRewardsRoute
  '/admin/appointments': typeof AdminAppointmentsRoute
  '/account': typeof AccountIndexRoute
  '/admin': typeof AdminIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/booking': typeof BookingRoute
  '/contact': typeof ContactRoute
  '/gallery': typeof GalleryRoute
  '/login': typeof LoginRoute
  '/services': typeof ServicesRoute
  '/signup': typeof SignupRoute
  '/account/appointments': typeof AccountAppointmentsRoute
  '/account/rewards': typeof AccountRewardsRoute
  '/admin/appointments': typeof AdminAppointmentsRoute
  '/account/': typeof AccountIndexRoute
  '/admin/': typeof AdminIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/booking'
    | '/contact'
    | '/gallery'
    | '/login'
    | '/services'
    | '/signup'
    | '/account/appointments'
    | '/account/rewards'
    | '/admin/appointments'
    | '/account'
    | '/admin'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/booking'
    | '/contact'
    | '/gallery'
    | '/login'
    | '/services'
    | '/signup'
    | '/account/appointments'
    | '/account/rewards'
    | '/admin/appointments'
    | '/account'
    | '/admin'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/booking'
    | '/contact'
    | '/gallery'
    | '/login'
    | '/services'
    | '/signup'
    | '/account/appointments'
    | '/account/rewards'
    | '/admin/appointments'
    | '/account/'
    | '/admin/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  BookingRoute: typeof BookingRoute
  ContactRoute: typeof ContactRoute
  GalleryRoute: typeof GalleryRoute
  LoginRoute: typeof LoginRoute
  ServicesRoute: typeof ServicesRoute
  SignupRoute: typeof SignupRoute
  AccountAppointmentsRoute: typeof AccountAppointmentsRoute
  AccountRewardsRoute: typeof AccountRewardsRoute
  AdminAppointmentsRoute: typeof AdminAppointmentsRoute
  AccountIndexRoute: typeof AccountIndexRoute
  AdminIndexRoute: typeof AdminIndexRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/services': {
      id: '/services'
      path: '/services'
      fullPath: '/services'
      preLoaderRoute: typeof ServicesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/gallery': {
      id: '/gallery'
      path: '/gallery'
      fullPath: '/gallery'
      preLoaderRoute: typeof GalleryRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/booking': {
      id: '/booking'
      path: '/booking'
      fullPath: '/booking'
      preLoaderRoute: typeof BookingRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/admin/': {
      id: '/admin/'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/account/': {
      id: '/account/'
      path: '/account'
      fullPath: '/account'
      preLoaderRoute: typeof AccountIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/admin/appointments': {
      id: '/admin/appointments'
      path: '/admin/appointments'
      fullPath: '/admin/appointments'
      preLoaderRoute: typeof AdminAppointmentsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/account/rewards': {
      id: '/account/rewards'
      path: '/account/rewards'
      fullPath: '/account/rewards'
      preLoaderRoute: typeof AccountRewardsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/account/appointments': {
      id: '/account/appointments'
      path: '/account/appointments'
      fullPath: '/account/appointments'
      preLoaderRoute: typeof AccountAppointmentsRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  BookingRoute: BookingRoute,
  ContactRoute: ContactRoute,
  GalleryRoute: GalleryRoute,
  LoginRoute: LoginRoute,
  ServicesRoute: ServicesRoute,
  SignupRoute: SignupRoute,
  AccountAppointmentsRoute: AccountAppointmentsRoute,
  AccountRewardsRoute: AccountRewardsRoute,
  AdminAppointmentsRoute: AdminAppointmentsRoute,
  AccountIndexRoute: AccountIndexRoute,
  AdminIndexRoute: AdminIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { createStart } from '@tanstack/react-start'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
  }
}

```

`src/router.tsx`:

```tsx
import { createRouter } from '@tanstack/react-router'
import { NotFound } from './components/NotFound'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},

    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultNotFoundComponent: NotFound,
  })

  return router
}

```

`src/routes/__root.tsx`:

```tsx
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { Outlet } from '@tanstack/react-router'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { NotFound } from '../components/NotFound'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Silver Nails - Luxury Nail Salon in Rancho Cucamonga',
      },
      {
        name: 'description',
        content: 'Experience premium nail care at Silver Nails. Offering luxury manicures, pedicures, gel nails, acrylics, and custom nail art in Rancho Cucamonga, California.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap',
      },
    ],
  }),

  component: RootLayout,
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

```

`src/routes/about.tsx`:

```tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Sparkles,
  Award,
  Heart,
  Users,
  Star,
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Check,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export const Route = createFileRoute('/about')({ component: AboutPage })

const team = [
  {
    name: 'Maria Santos',
    role: 'Founder & Lead Nail Artist',
    bio: 'With over 15 years of experience, Maria founded Silver Nails with a vision to bring luxury nail care to Rancho Cucamonga.',
    specialties: ['Nail Art', 'Gel Extensions', 'Bridal Nails'],
  },
  {
    name: 'Sarah Kim',
    role: 'Senior Nail Technician',
    bio: '10 years of expertise in acrylic and gel applications. Known for her precision and attention to detail.',
    specialties: ['Acrylics', 'French Manicures', 'Ombre'],
  },
  {
    name: 'Kim Nguyen',
    role: 'Nail Artist & Spa Specialist',
    bio: 'Certified in advanced nail art techniques and spa treatments. Creates stunning custom designs.',
    specialties: ['Custom Nail Art', 'Spa Pedicures', 'Chrome Nails'],
  },
  {
    name: 'Jessica Lee',
    role: 'Junior Nail Technician',
    bio: 'Passionate about nail care with fresh ideas and a dedication to client satisfaction.',
    specialties: ['Classic Manicures', 'Gel Polish', 'Nail Care'],
  },
]

const values = [
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Excellence',
    description: 'We strive for perfection in every service, using only premium products and techniques.',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Care',
    description: 'Your comfort and satisfaction are our top priorities. We treat every client like family.',
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Creativity',
    description: 'Our artists bring innovative designs and personalized touches to every appointment.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Community',
    description: 'We are proud to be part of the Rancho Cucamonga community for over a decade.',
  },
]

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '15,000+', label: 'Happy Clients' },
  { value: '500+', label: '5-Star Reviews' },
  { value: '4', label: 'Expert Technicians' },
]

function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10" />
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              About{' '}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Silver Nails
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              For over a decade, Silver Nails has been Rancho Cucamonga's premier destination
              for luxury nail care. We combine artistry, expertise, and personalized service
              to create an unforgettable experience for every client.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-12 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Silver Nails was founded in 2014 by Maria Santos, a passionate nail artist
                  with a dream to create a sanctuary where clients could experience luxury
                  nail care in a welcoming, elegant environment.
                </p>
                <p>
                  What started as a small salon with just two technicians has grown into
                  a beloved destination for nail enthusiasts throughout the Inland Empire.
                  Our commitment to quality and personalized service has earned us the trust
                  of thousands of loyal clients.
                </p>
                <p>
                  Today, our team of skilled technicians continues Maria's vision, combining
                  traditional techniques with the latest trends to deliver exceptional results
                  for every client who walks through our doors.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent p-1 shadow-2xl">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                      <Sparkles className="h-12 w-12 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Est. 2014</h3>
                  <p className="text-muted-foreground">Rancho Cucamonga, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-6 py-20 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border/50">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 text-secondary">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <p className="mt-4 text-muted-foreground">
              The talented artists behind your beautiful nails
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-secondary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-accent/20 rounded text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Silver Nails?</h2>
              <div className="space-y-4">
                {[
                  'Premium, salon-grade products from top brands',
                  'Strict hygiene and sanitation protocols',
                  'Relaxing, spa-like atmosphere',
                  'Skilled technicians with ongoing training',
                  'Personalized service for every client',
                  'Competitive pricing with loyalty rewards',
                  'Convenient location with easy parking',
                  'Online booking available 24/7',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-2 border-secondary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Silver Nails</p>
                  <p className="text-muted-foreground">123 Main Street</p>
                  <p className="text-muted-foreground">Rancho Cucamonga, CA 91730</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>(909) 555-1234</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <div>
                    <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
                <Button variant="luxury" className="w-full" asChild>
                  <Link to="/booking">
                    Book Your Visit
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Jennifer M.',
                text: "I've been coming to Silver Nails for 5 years now. The quality and service are consistently excellent. Maria and her team are true artists!",
                rating: 5,
              },
              {
                name: 'Ashley T.',
                text: "Best nail salon in the area! The atmosphere is so relaxing, and my nails always look amazing. Highly recommend the spa pedicure!",
                rating: 5,
              },
              {
                name: 'Rachel K.',
                text: "Found my forever nail salon! The attention to detail is incredible. Sarah did my wedding nails and they were absolutely perfect.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardDescription className="text-base">"{testimonial.text}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 lg:px-8 bg-gradient-to-r from-secondary/10 to-accent/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Silver Nails Difference?</h2>
          <p className="text-muted-foreground mb-8">
            Book your appointment today and let us pamper you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="xl" asChild>
              <Link to="/booking">
                Book Appointment
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

```

`src/routes/account/appointments.tsx`:

```tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Calendar,
  Clock,
  MapPin,
  User,
  ArrowRight,
  X,
  Check,
  AlertCircle,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export const Route = createFileRoute('/account/appointments')({
  component: AppointmentsPage,
})

function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming')
  const [cancellingId, setCancellingId] = useState<string | null>(null)

  // Mock appointments data
  const upcomingAppointments = [
    {
      id: '1',
      service: 'Luxury Manicure',
      date: '2024-12-30',
      time: '2:00 PM',
      endTime: '3:00 PM',
      technician: 'Maria Santos',
      price: 45,
      status: 'confirmed',
      depositPaid: true,
    },
    {
      id: '2',
      service: 'Gel Pedicure',
      date: '2025-01-05',
      time: '10:00 AM',
      endTime: '11:00 AM',
      technician: 'Kim Nguyen',
      price: 55,
      status: 'pending',
      depositPaid: false,
    },
  ]

  const pastAppointments = [
    {
      id: '3',
      service: 'Spa Pedicure',
      date: '2024-12-15',
      time: '3:00 PM',
      technician: 'Maria Santos',
      price: 65,
      status: 'completed',
      reviewed: false,
    },
    {
      id: '4',
      service: 'Gel Manicure',
      date: '2024-11-28',
      time: '11:00 AM',
      technician: 'Sarah Kim',
      price: 45,
      status: 'completed',
      reviewed: true,
    },
    {
      id: '5',
      service: 'Acrylic Full Set',
      date: '2024-11-10',
      time: '1:00 PM',
      technician: 'Kim Nguyen',
      price: 75,
      status: 'completed',
      reviewed: true,
    },
    {
      id: '6',
      service: 'Classic Manicure',
      date: '2024-10-25',
      time: '4:00 PM',
      technician: 'Maria Santos',
      price: 25,
      status: 'cancelled',
      reviewed: false,
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const handleCancelAppointment = async (id: string) => {
    setCancellingId(id)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setCancellingId(null)
    // In real implementation, would remove from list or update status
  }

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/account" className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-block">
              ← Back to Account
            </Link>
            <h1 className="text-3xl font-bold">My Appointments</h1>
            <p className="text-muted-foreground">View and manage your appointments</p>
          </div>
          <Button variant="luxury" asChild>
            <Link to="/booking">
              Book New
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border mb-6">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'upcoming'
                ? 'text-secondary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Upcoming
            {upcomingAppointments.length > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-secondary/20 text-secondary text-xs rounded-full">
                {upcomingAppointments.length}
              </span>
            )}
            {activeTab === 'upcoming' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'past'
                ? 'text-secondary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Past
            {activeTab === 'past' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary" />
            )}
          </button>
        </div>

        {/* Upcoming Appointments */}
        {activeTab === 'upcoming' && (
          <div className="space-y-4">
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map((apt) => (
                <Card key={apt.id} className="overflow-hidden">
                  <div className="flex">
                    {/* Date sidebar */}
                    <div className="w-24 bg-gradient-to-b from-secondary to-primary flex flex-col items-center justify-center text-white p-4">
                      <span className="text-3xl font-bold">
                        {new Date(apt.date).getDate()}
                      </span>
                      <span className="text-sm">
                        {new Date(apt.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                    </div>

                    {/* Content */}
                    <CardContent className="flex-1 p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">{apt.service}</h3>
                          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {apt.time} - {apt.endTime}
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              with {apt.technician}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              123 Main Street, Rancho Cucamonga
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-2xl font-bold">${apt.price}</p>
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                              apt.status === 'confirmed'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}
                          >
                            {apt.status === 'confirmed' && <Check className="h-3 w-3 mr-1" />}
                            {apt.status === 'pending' && <AlertCircle className="h-3 w-3 mr-1" />}
                            {apt.status}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                        <div className="text-sm text-muted-foreground">
                          {apt.depositPaid ? (
                            <span className="flex items-center gap-1 text-green-600">
                              <Check className="h-4 w-4" /> Deposit paid
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-yellow-600">
                              <AlertCircle className="h-4 w-4" /> Deposit required
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            onClick={() => handleCancelAppointment(apt.id)}
                            disabled={cancellingId === apt.id}
                          >
                            {cancellingId === apt.id ? (
                              'Cancelling...'
                            ) : (
                              <>
                                <X className="h-4 w-4 mr-1" /> Cancel
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No upcoming appointments</h3>
                  <p className="text-muted-foreground mb-6">
                    Ready to book your next visit?
                  </p>
                  <Button variant="luxury" asChild>
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Past Appointments */}
        {activeTab === 'past' && (
          <div className="space-y-4">
            {pastAppointments.map((apt) => (
              <Card key={apt.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium">{apt.service}</h3>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(apt.date)} at {apt.time}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          with {apt.technician}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-bold">${apt.price}</p>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                          apt.status === 'completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {apt.status}
                      </span>
                    </div>
                  </div>

                  {apt.status === 'completed' && !apt.reviewed && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/account/reviews">
                          Leave a Review
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Tips */}
        <Card className="mt-8 bg-accent/5 border-dashed">
          <CardContent className="p-6">
            <h3 className="font-medium mb-2">Cancellation Policy</h3>
            <p className="text-sm text-muted-foreground">
              Free cancellation up to 24 hours before your appointment. Cancellations within 24 hours
              may be subject to a cancellation fee. Please call (909) 555-1234 if you need to make changes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

```

`src/routes/account/index.tsx`:

```tsx
import { createFileRoute, Link, useLocation } from '@tanstack/react-router'
import {
  User,
  Calendar,
  Gift,
  Star,
  Settings,
  Bell,
  LogOut,
  ArrowRight,
  Clock,
  MapPin,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export const Route = createFileRoute('/account/')({
  component: AccountDashboard,
})

const navItems = [
  { href: '/account', label: 'Overview', icon: User, exact: true },
  { href: '/account/appointments', label: 'My Appointments', icon: Calendar },
  { href: '/account/rewards', label: 'Rewards', icon: Gift },
  { href: '/account/reviews', label: 'My Reviews', icon: Star },
  { href: '/account/settings', label: 'Settings', icon: Settings },
]

function AccountDashboard() {
  const location = useLocation()

  // Mock user data
  const user = {
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah@email.com',
    phone: '(909) 555-1234',
    memberSince: 'January 2023',
  }

  const loyaltyData = {
    points: 450,
    tier: 'Silver',
    nextTier: 'Gold',
    pointsToNext: 550,
  }

  const upcomingAppointments = [
    {
      id: '1',
      service: 'Luxury Manicure',
      date: 'Tomorrow',
      time: '2:00 PM',
      technician: 'Maria Santos',
    },
  ]

  const recentAppointments = [
    {
      id: '2',
      service: 'Spa Pedicure',
      date: 'Dec 15, 2024',
      status: 'completed',
      reviewed: false,
    },
    {
      id: '3',
      service: 'Gel Manicure',
      date: 'Nov 28, 2024',
      status: 'completed',
      reviewed: true,
    },
  ]

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {user.firstName}!</h1>
            <p className="text-muted-foreground">Member since {user.memberSince}</p>
          </div>
          <Button variant="luxury" asChild>
            <Link to="/booking">
              Book Appointment
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {user.firstName[0]}{user.lastName[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{user.firstName} {user.lastName}</p>
                    <p className="text-sm text-muted-foreground">{loyaltyData.tier} Member</p>
                  </div>
                </div>

                <nav className="space-y-1">
                  {navItems.map((item) => {
                    const isActive = item.exact
                      ? location.pathname === item.href
                      : location.pathname.startsWith(item.href)

                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-secondary/10 text-secondary'
                            : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        {item.label}
                      </Link>
                    )
                  })}
                </nav>

                <div className="mt-6 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground" asChild>
                    <Link to="/login">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Loyalty Card */}
            <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-secondary/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="h-5 w-5 text-secondary" />
                      <span className="text-sm font-medium">{loyaltyData.tier} Member</span>
                    </div>
                    <p className="text-3xl font-bold">{loyaltyData.points} Points</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {loyaltyData.pointsToNext} more points to {loyaltyData.nextTier}
                    </p>
                  </div>
                  <Button variant="outline" asChild>
                    <Link to="/account/rewards">View Rewards</Link>
                  </Button>
                </div>
                <div className="mt-4">
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-secondary to-accent rounded-full transition-all"
                      style={{ width: `${(loyaltyData.points / (loyaltyData.points + loyaltyData.pointsToNext)) * 100}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Upcoming Appointments</CardTitle>
                  <CardDescription>Your scheduled visits</CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/account/appointments">View All</Link>
                </Button>
              </CardHeader>
              <CardContent>
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingAppointments.map((apt) => (
                      <div key={apt.id} className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-secondary" />
                          </div>
                          <div>
                            <p className="font-medium">{apt.service}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {apt.date} at {apt.time}
                              </span>
                              <span>with {apt.technician}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">Reschedule</Button>
                          <Button variant="ghost" size="sm" className="text-red-600">Cancel</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">No upcoming appointments</p>
                    <Button variant="luxury" asChild>
                      <Link to="/booking">Book Now</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
                <CardDescription>Your past appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAppointments.map((apt) => (
                    <div key={apt.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div>
                        <p className="font-medium">{apt.service}</p>
                        <p className="text-sm text-muted-foreground">{apt.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {!apt.reviewed && (
                          <Button variant="outline" size="sm" asChild>
                            <Link to="/account/reviews">
                              <Star className="h-4 w-4 mr-1" />
                              Leave Review
                            </Link>
                          </Button>
                        )}
                        {apt.reviewed && (
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Star className="h-4 w-4 fill-secondary text-secondary" />
                            Reviewed
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="hover:border-secondary transition-colors cursor-pointer">
                <Link to="/account/settings">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Settings className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Account Settings</p>
                        <p className="text-sm text-muted-foreground">Update your profile and preferences</p>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>

              <Card className="hover:border-secondary transition-colors cursor-pointer">
                <Link to="/account/settings">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <Bell className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">Notifications</p>
                        <p className="text-sm text-muted-foreground">Manage email and SMS preferences</p>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

```

`src/routes/account/rewards.tsx`:

```tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Gift,
  Star,
  Check,
  ArrowRight,
  Sparkles,
  Crown,
  Gem,
  Award,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export const Route = createFileRoute('/account/rewards')({
  component: RewardsPage,
})

function RewardsPage() {
  const [selectedReward, setSelectedReward] = useState<number | null>(null)

  // Mock loyalty data
  const loyaltyData = {
    points: 450,
    tier: 'silver' as const,
    lifetimeSpend: 1250,
    visitsCount: 28,
  }

  const tiers = {
    bronze: {
      name: 'Bronze',
      icon: Award,
      threshold: 0,
      color: 'from-amber-600 to-amber-800',
      benefits: ['Earn 10 points per $1 spent', 'Birthday discount'],
    },
    silver: {
      name: 'Silver',
      icon: Star,
      threshold: 500,
      color: 'from-gray-400 to-gray-600',
      benefits: ['Earn 10 points per $1 spent', 'Birthday discount', '5% off all services', 'Priority booking'],
    },
    gold: {
      name: 'Gold',
      icon: Crown,
      threshold: 1500,
      color: 'from-yellow-400 to-yellow-600',
      benefits: ['Earn 10 points per $1 spent', 'Birthday discount', '10% off all services', 'Priority booking', 'Free nail art quarterly'],
    },
    platinum: {
      name: 'Platinum',
      icon: Gem,
      threshold: 5000,
      color: 'from-purple-400 to-purple-600',
      benefits: ['Earn 10 points per $1 spent', 'Birthday discount', '15% off all services', 'Priority booking', 'Free nail art monthly', 'Exclusive event invites', 'Free upgrades'],
    },
  }

  const availableRewards = [
    { id: 0, name: 'Free Nail Art (2 nails)', description: 'Add nail art to 2 nails for free', pointsCost: 100 },
    { id: 1, name: '$5 Off Any Service', description: 'Get $5 off your next service', pointsCost: 200 },
    { id: 2, name: 'Free Paraffin Treatment', description: 'Complimentary paraffin treatment', pointsCost: 300 },
    { id: 3, name: '$10 Off Any Service', description: 'Get $10 off your next service', pointsCost: 400 },
    { id: 4, name: 'Free Classic Manicure', description: 'One free classic manicure', pointsCost: 500 },
    { id: 5, name: 'Free Gel Upgrade', description: 'Upgrade to gel polish for free', pointsCost: 350 },
  ]

  const redeemedRewards = [
    { name: '$5 Off Any Service', redeemedAt: 'Dec 10, 2024', used: false },
    { name: 'Free Nail Art (2 nails)', redeemedAt: 'Nov 15, 2024', used: true },
  ]

  const currentTier = tiers[loyaltyData.tier]
  const nextTierKey = loyaltyData.tier === 'bronze' ? 'silver' : loyaltyData.tier === 'silver' ? 'gold' : loyaltyData.tier === 'gold' ? 'platinum' : null
  const nextTier = nextTierKey ? tiers[nextTierKey] : null
  const pointsToNext = nextTier ? nextTier.threshold - loyaltyData.points : 0

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/account" className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-block">
            ← Back to Account
          </Link>
          <h1 className="text-3xl font-bold">Rewards & Loyalty</h1>
          <p className="text-muted-foreground">Earn points, unlock rewards, and enjoy exclusive benefits</p>
        </div>

        {/* Points Summary Card */}
        <Card className={`bg-gradient-to-r ${currentTier.color} text-white mb-8 overflow-hidden`}>
          <CardContent className="p-8 relative">
            <div className="absolute top-0 right-0 opacity-10">
              <currentTier.icon className="h-48 w-48 -mr-12 -mt-12" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <currentTier.icon className="h-6 w-6" />
                <span className="text-lg font-medium">{currentTier.name} Member</span>
              </div>
              <p className="text-5xl font-bold mb-2">{loyaltyData.points}</p>
              <p className="text-white/80">Available Points</p>

              {nextTier && (
                <div className="mt-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>{currentTier.name}</span>
                    <span>{nextTier.name}</span>
                  </div>
                  <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{ width: `${(loyaltyData.points / nextTier.threshold) * 100}%` }}
                    />
                  </div>
                  <p className="text-sm text-white/80 mt-2">
                    {pointsToNext} more points to reach {nextTier.name}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Available Rewards */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-secondary" />
                  Available Rewards
                </CardTitle>
                <CardDescription>Redeem your points for these rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {availableRewards.map((reward) => {
                    const canAfford = loyaltyData.points >= reward.pointsCost
                    return (
                      <div
                        key={reward.id}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          canAfford
                            ? 'border-border hover:border-secondary cursor-pointer'
                            : 'border-border/50 opacity-60'
                        } ${selectedReward === reward.id ? 'border-secondary bg-secondary/5' : ''}`}
                        onClick={() => canAfford && setSelectedReward(reward.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium">{reward.name}</p>
                            <p className="text-sm text-muted-foreground">{reward.description}</p>
                          </div>
                          {selectedReward === reward.id && (
                            <Check className="h-5 w-5 text-secondary" />
                          )}
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <span className={`text-lg font-bold ${canAfford ? 'text-secondary' : 'text-muted-foreground'}`}>
                            {reward.pointsCost} pts
                          </span>
                          {!canAfford && (
                            <span className="text-xs text-muted-foreground">
                              Need {reward.pointsCost - loyaltyData.points} more
                            </span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {selectedReward !== null && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <Button variant="luxury" className="w-full">
                      Redeem {availableRewards[selectedReward].name}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Redeemed Rewards */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>My Rewards</CardTitle>
                <CardDescription>Rewards you've redeemed</CardDescription>
              </CardHeader>
              <CardContent>
                {redeemedRewards.length > 0 ? (
                  <div className="space-y-3">
                    {redeemedRewards.map((reward, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                        <div>
                          <p className="font-medium">{reward.name}</p>
                          <p className="text-sm text-muted-foreground">Redeemed {reward.redeemedAt}</p>
                        </div>
                        {reward.used ? (
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Check className="h-4 w-4" /> Used
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                            Active
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-4">No redeemed rewards yet</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Tier Benefits */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Your Benefits</CardTitle>
                <CardDescription>{currentTier.name} tier perks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {currentTier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Tier Progression */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Membership Tiers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(tiers).map(([key, tier]) => {
                  const isCurrentTier = key === loyaltyData.tier
                  const isUnlocked = loyaltyData.points >= tier.threshold
                  return (
                    <div
                      key={key}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        isCurrentTier ? 'bg-secondary/10 border border-secondary' : ''
                      }`}
                    >
                      <div className={`h-10 w-10 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center`}>
                        <tier.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{tier.name}</p>
                        <p className="text-xs text-muted-foreground">{tier.threshold}+ points</p>
                      </div>
                      {isCurrentTier && (
                        <span className="text-xs bg-secondary text-white px-2 py-1 rounded-full">Current</span>
                      )}
                      {isUnlocked && !isCurrentTier && (
                        <Check className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Visits</span>
                  <span className="font-bold">{loyaltyData.visitsCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lifetime Spend</span>
                  <span className="font-bold">${loyaltyData.lifetimeSpend}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Points Earned</span>
                  <span className="font-bold">{loyaltyData.lifetimeSpend * 10}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

```

`src/routes/admin/appointments.tsx`:

```tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Clock,
  User,
  Check,
  X,
  MoreHorizontal,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

export const Route = createFileRoute('/admin/appointments')({
  component: AdminAppointments,
})

function AdminAppointments() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [view, setView] = useState<'day' | 'week'>('day')
  const [searchQuery, setSearchQuery] = useState('')

  // Mock appointments data
  const appointments = [
    {
      id: '1',
      time: '9:00 AM',
      endTime: '10:00 AM',
      client: { name: 'Sarah Johnson', phone: '(909) 555-1234', email: 'sarah@email.com' },
      service: 'Luxury Manicure',
      technician: 'Maria Santos',
      status: 'confirmed',
      price: 45,
      notes: 'Regular client, prefers light pink colors',
    },
    {
      id: '2',
      time: '10:00 AM',
      endTime: '11:00 AM',
      client: { name: 'Emily Chen', phone: '(909) 555-2345', email: 'emily@email.com' },
      service: 'Gel Pedicure',
      technician: 'Kim Nguyen',
      status: 'in-progress',
      price: 55,
      notes: '',
    },
    {
      id: '3',
      time: '11:30 AM',
      endTime: '1:00 PM',
      client: { name: 'Rachel Kim', phone: '(909) 555-3456', email: 'rachel@email.com' },
      service: 'Acrylic Full Set',
      technician: 'Sarah Kim',
      status: 'confirmed',
      price: 75,
      notes: 'New client - first visit',
    },
    {
      id: '4',
      time: '1:00 PM',
      endTime: '2:15 PM',
      client: { name: 'Jennifer Lee', phone: '(909) 555-4567', email: 'jennifer@email.com' },
      service: 'Spa Pedicure',
      technician: 'Maria Santos',
      status: 'pending',
      price: 65,
      notes: 'Allergic to certain fragrances',
    },
    {
      id: '5',
      time: '2:30 PM',
      endTime: '3:15 PM',
      client: { name: 'Ashley Wang', phone: '(909) 555-5678', email: 'ashley@email.com' },
      service: 'Gel Manicure',
      technician: 'Kim Nguyen',
      status: 'confirmed',
      price: 45,
      notes: '',
    },
  ]

  const filteredAppointments = appointments.filter(apt =>
    apt.client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    apt.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
    apt.technician.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const navigateDate = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1))
    setSelectedDate(newDate)
  }

  return (
    <div className="min-h-screen bg-accent/5 ml-64">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Appointments</h1>
            <p className="text-muted-foreground">Manage and view all appointments</p>
          </div>
          <Button variant="luxury">
            + New Appointment
          </Button>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            {/* Date Navigation */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => navigateDate('prev')}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{formatDate(selectedDate)}</span>
              </div>
              <Button variant="outline" size="icon" onClick={() => navigateDate('next')}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* View Toggle */}
            <div className="flex border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setView('day')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  view === 'day' ? 'bg-secondary text-white' : 'hover:bg-accent/50'
                }`}
              >
                Day
              </button>
              <button
                onClick={() => setView('week')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  view === 'week' ? 'bg-secondary text-white' : 'hover:bg-accent/50'
                }`}
              >
                Week
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search appointments..."
                className="pl-10 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Appointments List */}
        <div className="bg-background border border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-accent/30">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Time</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Client</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Service</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Technician</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Price</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredAppointments.map((apt) => (
                <tr key={apt.id} className="hover:bg-accent/10">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{apt.time}</p>
                        <p className="text-xs text-muted-foreground">to {apt.endTime}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <User className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">{apt.client.name}</p>
                        <p className="text-xs text-muted-foreground">{apt.client.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium">{apt.service}</p>
                    {apt.notes && (
                      <p className="text-xs text-muted-foreground truncate max-w-[200px]">{apt.notes}</p>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm">{apt.technician}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        apt.status === 'confirmed'
                          ? 'bg-green-100 text-green-700'
                          : apt.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-700'
                          : apt.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">${apt.price}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-green-600">
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                        <X className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredAppointments.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              No appointments found for this date.
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="mt-6 grid grid-cols-4 gap-4">
          <div className="bg-background border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Total Appointments</p>
            <p className="text-2xl font-bold">{appointments.length}</p>
          </div>
          <div className="bg-background border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Confirmed</p>
            <p className="text-2xl font-bold text-green-600">
              {appointments.filter(a => a.status === 'confirmed').length}
            </p>
          </div>
          <div className="bg-background border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="text-2xl font-bold text-yellow-600">
              {appointments.filter(a => a.status === 'pending').length}
            </p>
          </div>
          <div className="bg-background border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Expected Revenue</p>
            <p className="text-2xl font-bold">
              ${appointments.reduce((sum, a) => sum + a.price, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

```

`src/routes/admin/index.tsx`:

```tsx
import { createFileRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import {
  LayoutDashboard,
  Calendar,
  Users,
  Scissors,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react'
import { Button } from '~/components/ui/button'

export const Route = createFileRoute('/admin/')({
  component: AdminLayout,
})

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/appointments', label: 'Appointments', icon: Calendar },
  { href: '/admin/clients', label: 'Clients', icon: Users },
  { href: '/admin/services', label: 'Services', icon: Scissors },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
]

function AdminLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-accent/5">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-background">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b border-border px-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent">
                <span className="text-sm font-bold text-white">SN</span>
              </div>
              <span className="font-bold">Silver Nails</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {navItems.map((item) => {
              const isActive = item.exact
                ? location.pathname === item.href
                : location.pathname.startsWith(item.href)

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-secondary/10 text-secondary'
                      : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* User section */}
          <div className="border-t border-border p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <span className="text-sm font-bold text-white">A</span>
              </div>
              <div>
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@silvernails.com</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/login">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64">
        <AdminDashboard />
      </main>
    </div>
  )
}

function AdminDashboard() {
  // Mock data for dashboard
  const stats = [
    { label: 'Today\'s Appointments', value: '12', change: '+2 from yesterday' },
    { label: 'This Week\'s Revenue', value: '$3,450', change: '+15% from last week' },
    { label: 'Active Clients', value: '1,234', change: '+45 new this month' },
    { label: 'Avg. Rating', value: '4.9', change: 'Based on 500+ reviews' },
  ]

  const todayAppointments = [
    { time: '9:00 AM', client: 'Sarah Johnson', service: 'Luxury Manicure', technician: 'Maria', status: 'confirmed' },
    { time: '10:00 AM', client: 'Emily Chen', service: 'Gel Pedicure', technician: 'Kim', status: 'in-progress' },
    { time: '11:30 AM', client: 'Rachel Kim', service: 'Acrylic Full Set', technician: 'Sarah', status: 'confirmed' },
    { time: '1:00 PM', client: 'Jennifer Lee', service: 'Spa Pedicure', technician: 'Maria', status: 'pending' },
    { time: '2:30 PM', client: 'Ashley Wang', service: 'Gel Manicure', technician: 'Kim', status: 'confirmed' },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-lg border border-border bg-background p-6"
          >
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Today's Appointments */}
      <div className="rounded-lg border border-border bg-background">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold">Today's Appointments</h2>
          <Button variant="outline" size="sm" asChild>
            <Link to="/admin/appointments">View All</Link>
          </Button>
        </div>
        <div className="divide-y divide-border">
          {todayAppointments.map((apt, index) => (
            <div key={index} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-sm font-medium">{apt.time}</p>
                </div>
                <div>
                  <p className="font-medium">{apt.client}</p>
                  <p className="text-sm text-muted-foreground">
                    {apt.service} with {apt.technician}
                  </p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  apt.status === 'confirmed'
                    ? 'bg-green-100 text-green-700'
                    : apt.status === 'in-progress'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {apt.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Link
          to="/admin/appointments"
          className="flex items-center gap-4 rounded-lg border border-border bg-background p-6 hover:border-secondary transition-colors"
        >
          <Calendar className="h-10 w-10 text-secondary" />
          <div>
            <p className="font-medium">Manage Appointments</p>
            <p className="text-sm text-muted-foreground">View and manage all bookings</p>
          </div>
        </Link>
        <Link
          to="/admin/clients"
          className="flex items-center gap-4 rounded-lg border border-border bg-background p-6 hover:border-secondary transition-colors"
        >
          <Users className="h-10 w-10 text-secondary" />
          <div>
            <p className="font-medium">Client Database</p>
            <p className="text-sm text-muted-foreground">View client information</p>
          </div>
        </Link>
        <Link
          to="/admin/analytics"
          className="flex items-center gap-4 rounded-lg border border-border bg-background p-6 hover:border-secondary transition-colors"
        >
          <BarChart3 className="h-10 w-10 text-secondary" />
          <div>
            <p className="font-medium">View Analytics</p>
            <p className="text-sm text-muted-foreground">Revenue and performance</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

```

`src/routes/booking.tsx`:

```tsx
import type { ChangeEvent } from 'react'
import { createFileRoute, Link, useSearch } from '@tanstack/react-router'
import { useState, useMemo } from 'react'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { Button } from '~/components/ui/button'
import {
  BookingProgress,
  BookingComplete,
  ServiceStep,
  DateTimeStep,
  InfoStep,
  ConfirmStep,
} from '~/components/booking'
import {
  services,
  getServiceById,
  isValidServiceId,
  groupServicesByCategory,
} from '~/lib/services-catalog'
import type { ServiceItem } from '~/lib/services-catalog'
import {
  useBookingWizard,
  canProceed,
  type BookingStep,
  type BookingData,
} from '~/lib/hooks/use-booking-wizard'

// Search params validation - validates that service ID exists in catalog
const bookingSearchSchema = {
  parse: (search: Record<string, unknown>) => {
    const serviceId = typeof search.service === 'string' ? search.service : undefined
    // Only return service ID if it's valid (exists in our catalog)
    return {
      service: isValidServiceId(serviceId) ? serviceId : undefined,
    }
  },
}

export const Route = createFileRoute('/booking')({
  component: BookingPage,
  validateSearch: bookingSearchSchema.parse,
})

function BookingPage() {
  const search = useSearch({ from: '/booking' })

  // Validate service ID exists - if invalid, treat as no service selected
  const validatedService = search.service ? getServiceById(search.service) : undefined
  const hasValidService = !!validatedService

  const [step, setStep] = useState<BookingStep>(hasValidService ? 'datetime' : 'service')
  const [bookingData, setBookingData] = useState<BookingData>(() => ({
    service: validatedService,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  }))
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const { currentStepIndex, steps, goNext, goBack } = useBookingWizard(step, setStep)

  // Group services by category - memoized since services array is static
  const groupedServices = useMemo(() => groupServicesByCategory(), [])

  const handleSelectService = (service: ServiceItem) => {
    setBookingData(prev => ({ ...prev, service }))
    setStep('datetime')
  }

  const handleSelectDate = (date: Date | undefined) => {
    setBookingData(prev => ({ ...prev, date, time: undefined }))
  }

  const handleSelectTime = (time: string) => {
    setBookingData(prev => ({ ...prev, time }))
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBookingData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsComplete(true)
  }

  const canGoForward = canProceed(step, bookingData)

  // Confirmation screen
  if (isComplete) {
    return <BookingComplete bookingData={bookingData} />
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="px-6 py-12 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Book Your Appointment</h1>
          <p className="mt-4 text-muted-foreground">
            Schedule your luxury nail care experience in just a few steps
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <BookingProgress steps={steps} currentStepIndex={currentStepIndex} />

      {/* Content */}
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Step 1: Service Selection */}
          {step === 'service' && (
            <ServiceStep
              selectedService={bookingData.service}
              groupedServices={groupedServices}
              onSelectService={handleSelectService}
            />
          )}

          {/* Step 2: Date & Time Selection */}
          {step === 'datetime' && (
            <DateTimeStep
              service={bookingData.service}
              selectedDate={bookingData.date}
              selectedTime={bookingData.time}
              onSelectDate={handleSelectDate}
              onSelectTime={handleSelectTime}
            />
          )}

          {/* Step 3: Contact Info */}
          {step === 'info' && (
            <InfoStep bookingData={bookingData} onInputChange={handleInputChange} />
          )}

          {/* Step 4: Confirmation */}
          {step === 'confirm' && <ConfirmStep bookingData={bookingData} />}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-12 pt-6 border-t border-border">
            {currentStepIndex > 0 ? (
              <Button variant="outline" onClick={goBack}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            ) : (
              <Button variant="outline" asChild>
                <Link to="/services">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Services
                </Link>
              </Button>
            )}

            {step === 'confirm' ? (
              <Button
                variant="luxury"
                size="lg"
                disabled={!canGoForward || isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Confirming...</span>
                ) : (
                  <>
                    Confirm Booking
                    <Check className="h-5 w-5 ml-2" />
                  </>
                )}
              </Button>
            ) : (
              <Button variant="luxury" size="lg" disabled={!canGoForward} onClick={goNext}>
                Continue
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

```

`src/routes/contact.tsx`:

```tsx
import type { ChangeEvent, FormEvent } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  ArrowRight,
  Check,
  Facebook,
  Instagram,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export const Route = createFileRoute('/contact')({ component: ContactPage })

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email' as 'email' | 'phone',
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6 py-20">
        <Card className="max-w-md w-full text-center">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent">
              <Check className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Message Sent!</CardTitle>
            <CardDescription className="text-base">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="luxury" className="w-full" asChild>
              <Link to="/">Return Home</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/booking">Book an Appointment</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Get in{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Have a question or want to book an appointment? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-sm text-muted-foreground">
                  123 Main Street<br />
                  Rancho Cucamonga, CA 91730
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:+19095551234" className="hover:text-secondary">
                    (909) 555-1234
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:hello@silvernails.com" className="hover:text-secondary">
                    hello@silvernails.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Mon-Sat: 9AM - 7PM<br />
                  Sun: Closed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="px-6 py-12 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-secondary" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 555-5555"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredContact">Preferred Contact</Label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What can we help you with?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="luxury"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <p className="font-medium">123 Main Street</p>
                    <p className="text-sm text-muted-foreground">Rancho Cucamonga, CA 91730</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-4 text-sm text-secondary hover:underline"
                    >
                      Get Directions
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Follow Us</CardTitle>
                  <CardDescription>Stay connected on social media</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 hover:bg-secondary hover:text-white transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 hover:bg-secondary hover:text-white transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/booking">
                      <Clock className="h-4 w-4 mr-2" />
                      Book an Appointment
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/services">
                      <Check className="h-4 w-4 mr-2" />
                      View Our Services
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/gallery">
                      <Check className="h-4 w-4 mr-2" />
                      Browse Gallery
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Do I need an appointment?',
                answer: 'While we accept walk-ins based on availability, we recommend booking an appointment to ensure you get your preferred time slot and technician.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept cash, all major credit cards, Apple Pay, and Google Pay for your convenience.',
              },
              {
                question: 'What is your cancellation policy?',
                answer: 'We kindly ask for 24 hours notice for cancellations. Cancellations within 24 hours may be subject to a cancellation fee.',
              },
              {
                question: 'Do you offer group bookings?',
                answer: 'Yes! We love hosting bridal parties, birthday celebrations, and girls\' days out. Contact us to arrange a group booking.',
              },
              {
                question: 'Are your products cruelty-free?',
                answer: 'We prioritize using cruelty-free and vegan-friendly products whenever possible. Please ask about specific products if you have concerns.',
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

```

`src/routes/gallery.tsx`:

```tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Sparkles,
  Heart,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Palette,
  Gem,
  Flower2,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'

export const Route = createFileRoute('/gallery')({ component: GalleryPage })

interface GalleryItem {
  id: string
  title: string
  category: string
  tags: string[]
  technician: string
}

// Using placeholder gallery items with gradient placeholders
const galleryItems: GalleryItem[] = [
  { id: '1', title: 'Rose Gold Elegance', category: 'gel', tags: ['rose gold', 'glitter', 'luxury'], technician: 'Maria' },
  { id: '2', title: 'French Classic', category: 'acrylic', tags: ['french', 'white', 'classic'], technician: 'Sarah' },
  { id: '3', title: 'Marble Art', category: 'nail-art', tags: ['marble', 'white', 'grey'], technician: 'Kim' },
  { id: '4', title: 'Chrome Dreams', category: 'nail-art', tags: ['chrome', 'mirror', 'silver'], technician: 'Maria' },
  { id: '5', title: 'Floral Spring', category: 'nail-art', tags: ['flowers', 'spring', 'pink'], technician: 'Sarah' },
  { id: '6', title: 'Minimalist Lines', category: 'gel', tags: ['minimalist', 'lines', 'nude'], technician: 'Kim' },
  { id: '7', title: 'Glitter Gradient', category: 'gel', tags: ['glitter', 'gradient', 'sparkle'], technician: 'Maria' },
  { id: '8', title: 'Ocean Blue', category: 'nail-art', tags: ['blue', 'ocean', 'waves'], technician: 'Sarah' },
  { id: '9', title: 'Nude Perfection', category: 'manicure', tags: ['nude', 'natural', 'clean'], technician: 'Kim' },
  { id: '10', title: 'Red Carpet', category: 'gel', tags: ['red', 'glamour', 'bold'], technician: 'Maria' },
  { id: '11', title: 'Galaxy Nails', category: 'nail-art', tags: ['galaxy', 'purple', 'stars'], technician: 'Sarah' },
  { id: '12', title: 'Bridal Lace', category: 'acrylic', tags: ['bridal', 'lace', 'white'], technician: 'Kim' },
]

const categories = [
  { id: 'all', name: 'All', icon: <Sparkles className="h-4 w-4" /> },
  { id: 'gel', name: 'Gel', icon: <Gem className="h-4 w-4" /> },
  { id: 'acrylic', name: 'Acrylic', icon: <Star className="h-4 w-4" /> },
  { id: 'nail-art', name: 'Nail Art', icon: <Palette className="h-4 w-4" /> },
  { id: 'manicure', name: 'Manicure', icon: <Flower2 className="h-4 w-4" /> },
]

const gradientColors = [
  'from-pink-300 via-rose-300 to-purple-300',
  'from-amber-200 via-orange-200 to-yellow-200',
  'from-emerald-200 via-teal-200 to-cyan-200',
  'from-blue-200 via-indigo-200 to-violet-200',
  'from-rose-200 via-pink-200 to-fuchsia-200',
  'from-slate-200 via-gray-200 to-zinc-200',
  'from-lime-200 via-green-200 to-emerald-200',
  'from-sky-200 via-blue-200 to-indigo-200',
  'from-amber-100 via-yellow-100 to-orange-100',
  'from-fuchsia-200 via-purple-200 to-indigo-200',
  'from-violet-300 via-purple-300 to-fuchsia-300',
  'from-rose-100 via-pink-100 to-red-100',
]

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set())

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  const toggleLike = (id: string) => {
    setLikedItems(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const handlePrevious = () => {
    if (!selectedItem) return
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
    const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
    setSelectedItem(filteredItems[prevIndex])
  }

  const handleNext = () => {
    if (!selectedItem) return
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
    const nextIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1
    setSelectedItem(filteredItems[nextIndex])
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Our{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Browse our collection of stunning nail art and designs created by our talented technicians
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 py-6 lg:px-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg'
                    : 'bg-accent/10 hover:bg-accent/20 text-foreground'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all"
                onClick={() => setSelectedItem(item)}
              >
                <CardContent className="p-0 relative">
                  {/* Gradient placeholder for image */}
                  <div className={`aspect-square bg-gradient-to-br ${gradientColors[index % gradientColors.length]} flex items-center justify-center`}>
                    <Sparkles className="h-12 w-12 text-white/50" />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Like button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(item.id)
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        likedItems.has(item.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                      }`}
                    />
                  </button>

                  {/* Info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-white/70 text-sm">by {item.technician}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No items found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
            className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`aspect-square rounded-lg bg-gradient-to-br ${gradientColors[galleryItems.findIndex(i => i.id === selectedItem.id) % gradientColors.length]} flex items-center justify-center mb-4`}>
              <Sparkles className="h-24 w-24 text-white/50" />
            </div>
            <div className="text-white text-center">
              <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
              <p className="text-white/70 mb-4">by {selectedItem.technician}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {selectedItem.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="luxury" asChild>
                <Link to="/booking">
                  Book This Style
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="px-6 py-16 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Love What You See?</h2>
          <p className="text-muted-foreground mb-8">
            Book an appointment and let our artists create something beautiful for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="xl" asChild>
              <Link to="/booking">
                Book Appointment
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

```

`src/routes/index.tsx`:

```tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Sparkles,
  Award,
  Users,
  Clock,
  Star,
  ArrowRight,
  Check,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  const services = [
    {
      name: 'Luxury Manicure',
      description: 'Premium hand treatment with expert nail shaping and polish',
      price: 45,
      duration: '60 min',
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      name: 'Spa Pedicure',
      description: 'Indulgent foot care with massage and exfoliation',
      price: 65,
      duration: '75 min',
      icon: <Award className="h-6 w-6" />,
    },
    {
      name: 'Gel Nails',
      description: 'Long-lasting gel polish with chip-free shine',
      price: 55,
      duration: '60 min',
      icon: <Star className="h-6 w-6" />,
    },
    {
      name: 'Acrylic Extensions',
      description: 'Custom nail extensions for length and strength',
      price: 75,
      duration: '90 min',
      icon: <Sparkles className="h-6 w-6" />,
    },
  ]

  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Premium Products',
      description: 'We use only the finest, luxury nail care products',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Technicians',
      description: 'Highly trained professionals with years of experience',
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Luxury Experience',
      description: 'Elegant atmosphere designed for your comfort',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Flexible Hours',
      description: 'Open 7 days a week to fit your schedule',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Absolutely the best nail salon in Rancho Cucamonga! The attention to detail is incredible.',
    },
    {
      name: 'Maria Garcia',
      rating: 5,
      text: 'Love this place! The staff is so friendly and professional. My nails always look perfect.',
    },
    {
      name: 'Emily Chen',
      rating: 5,
      text: 'The luxury experience is worth every penny. Clean, elegant, and the results are amazing.',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-6 py-24 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 text-sm backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 text-secondary" />
                  <span className="text-muted-foreground">Rancho Cucamonga's Premier Nail Salon</span>
                </div>
                <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                  Elegance at Your{' '}
                  <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    Fingertips
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Experience luxury nail care where artistry meets expertise. Book your premium
                  manicure or pedicure today and discover the difference.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="luxury" size="xl" asChild>
                  <Link to="/booking">
                    Book Appointment
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">500+ Five-Star Reviews</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary/20 to-accent/20 blur-3xl" />
              <div className="relative h-full rounded-3xl border border-border bg-gradient-to-br from-background/80 to-background/40 p-8 backdrop-blur-sm">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent p-1 shadow-2xl">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                        <Sparkles className="h-16 w-16 text-secondary" />
                      </div>
                    </div>
                    <h2 className="mb-2 text-2xl font-bold">Premium Nail Art</h2>
                    <p className="text-muted-foreground">Custom designs by expert technicians</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-accent/5 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Silver Nails</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experience the difference that sets us apart
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover our most-loved nail care treatments
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index} className="group cursor-pointer transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 text-secondary group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-bold">${service.price}</p>
                      <p className="text-sm text-muted-foreground">{service.duration}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/booking">Book</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-accent/5 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from our satisfied customers
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardDescription className="text-base">{testimonial.text}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-border bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
            <CardHeader className="text-center space-y-4 pb-8">
              <CardTitle className="text-3xl sm:text-4xl">Ready for Your Luxury Experience?</CardTitle>
              <CardDescription className="text-lg">
                Book your appointment today and discover why we're Rancho Cucamonga's
                premier nail salon
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
              <Button variant="luxury" size="xl" asChild>
                <Link to="/booking">
                  Book Your Appointment
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>Same-day appointments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>Expert technicians</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>Premium products</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

```

`src/routes/login.tsx`:

```tsx
import type { ChangeEvent, FormEvent } from 'react'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { Sparkles, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { loginUser } from '~/lib/server/auth'

export const Route = createFileRoute('/login')({ component: LoginPage })

function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    setIsLoading(true)

    try {
      const response = await loginUser({ email: formData.email, password: formData.password })
      
      if (!response.success || !response.token) {
        setError(response.error || 'Invalid email or password')
        return
      }

      // Store token in localStorage
      localStorage.setItem('auth_token', response.token)
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response.user))
      }

      // Navigate to account dashboard or home
      const redirectTo = response.user?.role === 'admin' ? '/admin' : '/account'
      navigate({ to: redirectTo })
    } catch (err) {
      console.error('Login error:', err)
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                <Sparkles className="h-6 w-6 text-secondary" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Silver Nails
            </span>
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>
              Sign in to your account to manage bookings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-secondary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                variant="luxury"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="animate-pulse">Signing in...</span>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <Button variant="outline" type="button">
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" type="button">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/signup" className="font-semibold text-secondary hover:underline">
                Sign up
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

```

`src/routes/services.tsx`:

```tsx
import type { ReactNode } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Sparkles,
  Clock,
  ArrowRight,
  Palette,
  Star,
  Heart,
  Gem,
  Flower2,
  HandHeart,
  Check,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { services, getPopularServices } from '~/lib/services-catalog'
import type { ServiceCategory } from '~/types'

export const Route = createFileRoute('/services')({ component: ServicesPage })

const categories: { id: ServiceCategory | 'all'; name: string; icon: ReactNode; description: string }[] = [
  { id: 'all', name: 'All Services', icon: <Sparkles className="h-5 w-5" />, description: 'Browse our complete menu' },
  { id: 'manicure', name: 'Manicures', icon: <HandHeart className="h-5 w-5" />, description: 'Hand & nail care' },
  { id: 'pedicure', name: 'Pedicures', icon: <Flower2 className="h-5 w-5" />, description: 'Foot & nail care' },
  { id: 'gel', name: 'Gel Nails', icon: <Gem className="h-5 w-5" />, description: 'Long-lasting gel polish' },
  { id: 'acrylic', name: 'Acrylics', icon: <Star className="h-5 w-5" />, description: 'Nail extensions' },
  { id: 'nail-art', name: 'Nail Art', icon: <Palette className="h-5 w-5" />, description: 'Custom designs' },
  { id: 'spa-treatment', name: 'Spa Treatments', icon: <Heart className="h-5 w-5" />, description: 'Relaxation & care' },
]

function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all')

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory)

  const popularServices = getPopularServices()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Our{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            From classic manicures to intricate nail art, discover our full range of luxury nail care services
          </p>
        </div>
      </section>

      {/* Popular Services */}
      <section className="px-6 py-12 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 mb-8">
            <Star className="h-6 w-6 text-secondary fill-secondary" />
            <h2 className="text-2xl font-bold">Most Popular</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {popularServices.map((service) => (
              <Card key={service.id} className="group relative overflow-hidden border-secondary/30 hover:shadow-lg transition-all">
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary/20 px-2.5 py-1 text-xs font-medium text-secondary">
                    <Star className="h-3 w-3 fill-current" />
                    Popular
                  </span>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {service.duration} min
                    </div>
                    <p className="text-2xl font-bold">${service.price}</p>
                  </div>
                  <Button variant="luxury" size="sm" className="w-full" asChild>
                    <Link to="/booking" search={{ service: service.id }}>
                      Book Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="px-6 py-8 lg:px-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg'
                    : 'bg-accent/10 hover:bg-accent/20 text-foreground'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              {categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-muted-foreground">
              {categories.find(c => c.id === selectedCategory)?.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <CardDescription className="mt-2">{service.description}</CardDescription>
                    </div>
                    {service.popular && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary/20 px-2 py-0.5 text-xs font-medium text-secondary">
                        <Star className="h-3 w-3 fill-current" />
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {service.duration} min
                    </div>
                    <p className="text-2xl font-bold">${service.price}</p>
                  </div>

                  {service.addOns && service.addOns.length > 0 && (
                    <div className="pt-3 border-t border-border">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Add-ons available:</p>
                      <div className="space-y-1">
                        {service.addOns.map((addon, idx) => (
                          <div key={idx} className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-1.5">
                              <Check className="h-3 w-3 text-secondary" />
                              {addon.name}
                            </span>
                            <span className="text-muted-foreground">+${addon.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button variant="outline" size="sm" className="w-full group-hover:bg-secondary group-hover:text-white transition-colors" asChild>
                    <Link to="/booking" search={{ service: service.id }}>
                      Book This Service
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Packages Section */}
      <section className="px-6 py-16 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Special Packages</h2>
            <p className="mt-4 text-muted-foreground">Save more with our curated service bundles</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Sparkles className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Essential Beauty</CardTitle>
                <CardDescription>Perfect for regular maintenance</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Classic Manicure
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Classic Pedicure
                  </li>
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground line-through">$65</p>
                  <p className="text-3xl font-bold">$55</p>
                  <p className="text-xs text-secondary">Save $10</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/booking">Book Package</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-medium px-3 py-1">
                Best Value
              </div>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent">
                  <Gem className="h-7 w-7 text-white" />
                </div>
                <CardTitle>Luxury Retreat</CardTitle>
                <CardDescription>Our most popular package</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Luxury Manicure
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Spa Pedicure
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Paraffin Treatment (Hands)
                  </li>
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground line-through">$125</p>
                  <p className="text-3xl font-bold">$99</p>
                  <p className="text-xs text-secondary">Save $26</p>
                </div>
                <Button variant="luxury" className="w-full" asChild>
                  <Link to="/booking">Book Package</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Star className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Gel Experience</CardTitle>
                <CardDescription>Long-lasting beauty</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Gel Manicure
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Gel Pedicure
                  </li>
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground line-through">$100</p>
                  <p className="text-3xl font-bold">$85</p>
                  <p className="text-xs text-secondary">Save $15</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/booking">Book Package</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Luxury?</h2>
          <p className="text-muted-foreground mb-8">
            Book your appointment today and let our expert technicians pamper you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="xl" asChild>
              <Link to="/booking">
                Book Appointment
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

```

`src/routes/signup.tsx`:

```tsx
import type { ChangeEvent, FormEvent } from 'react'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { Sparkles, Mail, Lock, Eye, EyeOff, ArrowRight, User, Phone, Check } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { registerUser } from '~/lib/server/auth'

export const Route = createFileRoute('/signup')({ component: SignupPage })

function SignupPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const passwordRequirements = [
    { text: 'At least 8 characters', met: formData.password.length >= 8 },
    { text: 'Contains uppercase letter', met: /[A-Z]/.test(formData.password) },
    { text: 'Contains lowercase letter', met: /[a-z]/.test(formData.password) },
    { text: 'Contains number', met: /[0-9]/.test(formData.password) },
  ]

  const allRequirementsMet = passwordRequirements.every(req => req.met)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields')
      return
    }

    if (!allRequirementsMet) {
      setError('Password does not meet requirements')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setIsLoading(true)

    try {
      const response = await registerUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      })

      if (!response.success || !response.token) {
        setError(response.error || 'Registration failed. Please try again.')
        return
      }

      // Store token in localStorage
      localStorage.setItem('auth_token', response.token)
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response.user))
      }

      // Navigate to account dashboard
      navigate({ to: '/account' })
    } catch (err) {
      console.error('Registration error:', err)
      setError('An error occurred during registration. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                <Sparkles className="h-6 w-6 text-secondary" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Silver Nails
            </span>
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>
              Join Silver Nails and start booking your appointments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="First"
                      className="pl-10"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Last"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    className="pl-10"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    className="pl-10 pr-10"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {formData.password && (
                  <div className="mt-2 space-y-1">
                    {passwordRequirements.map((req, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <Check className={`h-3 w-3 ${req.met ? 'text-green-500' : 'text-muted-foreground'}`} />
                        <span className={req.met ? 'text-green-600' : 'text-muted-foreground'}>
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    className="pl-10 pr-10"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="text-xs text-destructive">Passwords do not match</p>
                )}
              </div>

              <Button
                type="submit"
                variant="luxury"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="animate-pulse">Creating account...</span>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By creating an account, you agree to our{' '}
                <Link to="/terms" className="text-secondary hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-secondary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <Button variant="outline" type="button">
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" type="button">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-secondary hover:underline">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

```

`src/styles.css`:

```css
@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

/* ============================================
   Luxury Nail Salon Theme - Unified Design System
   ============================================ */

@layer base {
  :root {
    /* ============================================
       Color Palette - Luxury Nail Salon
       ============================================ */
    
    /* Base Colors */
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    
    /* Card & Popover */
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    
    /* Primary - Silver (elegant metallic gray) */
    --primary: 240 5% 64%;
    --primary-foreground: 0 0% 100%;
    
    /* Secondary - Rose Gold (warm luxurious pink) */
    --secondary: 12 68% 75%;
    --secondary-foreground: 240 10% 3.9%;
    
    /* Accent - Champagne Gold (sophisticated warm beige) */
    --accent: 40 85% 85%;
    --accent-foreground: 240 10% 3.9%;
    
    /* Muted Tones (soft grays with slight warmth) */
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    
    /* Destructive (refined red) */
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    
    /* Borders & Inputs (soft silver-gray) */
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 5% 64%;
    
    /* Border Radius */
    --radius: 0.5rem;
  }

  .dark {
    /* Dark Mode - Luxury Theme */
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    
    --primary: 240 5% 64%;
    --primary-foreground: 0 0% 100%;
    
    --secondary: 12 68% 75%;
    --secondary-foreground: 240 10% 3.9%;
    
    --accent: 40 85% 85%;
    --accent-foreground: 240 10% 3.9%;
    
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 5% 64%;
  }

  /* ============================================
     Base Styles
     ============================================ */
  
  * {
    border-color: hsl(var(--border));
  }

  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    margin: 0;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-feature-settings: "kern" 1, "liga" 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    letter-spacing: -0.011em;
  }

  /* Typography - Luxury Hierarchy */
  h1, h2, h3, h4, h5, h6 {
    font-family: "Playfair Display", Georgia, serif;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.2;
    color: hsl(var(--foreground));
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 600;
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
  }

  p {
    line-height: 1.7;
    color: hsl(var(--foreground));
  }

  code {
    font-family: "IBM Plex Mono", "Fira Code", "Consolas", "Monaco", monospace;
    font-size: 0.875em;
  }

  /* Focus Styles - Accessibility */
  *:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
  }

  /* Selection Styles */
  ::selection {
    background-color: hsl(var(--secondary) / 0.3);
    color: hsl(var(--foreground));
  }
}

/* ============================================
   Tailwind Theme Configuration
   ============================================ */

@theme inline {
  /* Typography */
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
  --font-serif: "Playfair Display", Georgia, serif;
  --font-mono: "IBM Plex Mono", "Fira Code", "Consolas", monospace;
  
  /* Letter Spacing */
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: -0.011em;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
  
  /* Border Radius */
  --radius-sm: calc(var(--radius) - 0.25rem);
  --radius-md: calc(var(--radius) - 0.125rem);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 0.25rem);
  --radius-2xl: calc(var(--radius) + 0.5rem);
  --radius-3xl: calc(var(--radius) + 0.75rem);
  --radius-4xl: calc(var(--radius) + 1rem);
  
  /* Shadows - Luxury Depth */
  --shadow-color: 240 5% 3.9%;
  --shadow-opacity: 0.08;
  --shadow-blur: 20px;
  --shadow-spread: -2px;
  --shadow-offset-x: 0px;
  --shadow-offset-y: 4px;
  
  --shadow-2xs: 0 1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-opacity) * 0.5));
  --shadow-xs: 0 1px 3px 0 hsl(var(--shadow-color) / calc(var(--shadow-opacity) * 0.75));
  --shadow-sm: 0 2px 4px -1px hsl(var(--shadow-color) / var(--shadow-opacity));
  --shadow: 0 4px 6px -2px hsl(var(--shadow-color) / var(--shadow-opacity));
  --shadow-md: 0 8px 12px -4px hsl(var(--shadow-color) / var(--shadow-opacity));
  --shadow-lg: 0 16px 24px -6px hsl(var(--shadow-color) / calc(var(--shadow-opacity) * 1.5));
  --shadow-xl: 0 24px 32px -8px hsl(var(--shadow-color) / calc(var(--shadow-opacity) * 2));
  --shadow-2xl: 0 32px 48px -12px hsl(var(--shadow-color) / calc(var(--shadow-opacity) * 3));
  
  /* Color Tokens for Tailwind v4 */
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
  
  /* Ensure border color is accessible for border utilities */
  --border-color: var(--color-border);
  
  /* Chart Colors - Luxury Palette */
  --color-chart-1: hsl(12 68% 75%);
  --color-chart-2: hsl(240 5% 64%);
  --color-chart-3: hsl(40 85% 85%);
  --color-chart-4: hsl(30 60% 70%);
  --color-chart-5: hsl(280 30% 60%);
  
  /* Sidebar Colors */
  --color-sidebar: hsl(var(--muted));
  --color-sidebar-foreground: hsl(var(--foreground));
  --color-sidebar-primary: hsl(var(--primary));
  --color-sidebar-primary-foreground: hsl(var(--primary-foreground));
  --color-sidebar-accent: hsl(var(--accent));
  --color-sidebar-accent-foreground: hsl(var(--accent-foreground));
  --color-sidebar-border: hsl(var(--border));
  --color-sidebar-ring: hsl(var(--ring));
}

/* ============================================
   Custom Luxury Animations
   ============================================ */

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.shimmer {
  background: linear-gradient(
    90deg,
    transparent 0%,
    hsl(var(--secondary) / 0.1) 20%,
    hsl(var(--accent) / 0.2) 60%,
    transparent 100%
  );
  background-size: 200% auto;
  animation: shimmer 3s linear infinite;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

/* ============================================
   Utility Classes - Luxury Enhancements
   ============================================ */

.luxury-gradient {
  background: linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--accent)));
}

.luxury-text-gradient {
  background: linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--accent)));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.luxury-border-gradient {
  border-image: linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--accent))) 1;
}

/* Glass Morphism Effect */
.glass {
  background: hsl(var(--background) / 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid hsl(var(--border) / 0.5);
}

/* Premium Shadow */
.premium-shadow {
  box-shadow: 
    0 4px 6px -2px hsl(var(--shadow-color) / 0.1),
    0 10px 15px -3px hsl(var(--shadow-color) / 0.08),
    0 0 0 1px hsl(var(--border) / 0.1);
}

/* Hover Lift Effect */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* ============================================
   Responsive Typography
   ============================================ */

@media (max-width: 640px) {
  body {
    font-size: 0.9375rem;
    line-height: 1.6;
  }
  
  h1 {
    font-size: 2rem;
    line-height: 1.1;
  }
  
  h2 {
    font-size: 1.75rem;
    line-height: 1.2;
  }
  
  h3 {
    font-size: 1.5rem;
    line-height: 1.3;
  }
}

/* ============================================
   Print Styles
   ============================================ */

@media print {
  * {
    background: transparent !important;
    color: black !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  
  a,
  a:visited {
    text-decoration: underline;
  }
  
  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }
  
  thead {
    display: table-header-group;
  }
  
  tr,
  img {
    page-break-inside: avoid;
  }
  
  img {
    max-width: 100% !important;
  }
  
  @page {
    margin: 2cm;
  }
  
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  
  h2,
  h3 {
    page-break-after: avoid;
  }
}

```

`src/types/index.ts`:

```ts
// Core domain types for Silver Nails

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone: string
  role: 'client' | 'staff' | 'admin'
  createdAt: string
  preferences?: ClientPreferences
}

export interface ClientPreferences {
  favoriteColors?: string[]
  allergies?: string[]
  preferredTechnician?: string
  notes?: string
}

export interface Staff {
  id: string
  userId: string
  name: string
  email: string
  phone: string
  specialties: string[]
  bio?: string
  imageUrl?: string
  isActive: boolean
  schedule: WeeklySchedule
  createdAt: string
}

export interface WeeklySchedule {
  monday: DaySchedule
  tuesday: DaySchedule
  wednesday: DaySchedule
  thursday: DaySchedule
  friday: DaySchedule
  saturday: DaySchedule
  sunday: DaySchedule
}

export interface DaySchedule {
  isWorkingDay: boolean
  startTime?: string // "09:00"
  endTime?: string   // "18:00"
  breaks?: TimeSlot[]
}

export interface TimeSlot {
  startTime: string
  endTime: string
}

export interface Service {
  id: string
  name: string
  description: string
  category: ServiceCategory
  duration: number // in minutes
  price: number
  imageUrl?: string
  isActive: boolean
  requiresDeposit: boolean
  depositAmount?: number
  addOns?: ServiceAddOn[]
}

export type ServiceCategory =
  | 'manicure'
  | 'pedicure'
  | 'gel'
  | 'acrylic'
  | 'nail-art'
  | 'spa-treatment'
  | 'other'

export interface ServiceAddOn {
  id: string
  name: string
  price: number
  duration: number // additional minutes
}

export interface Appointment {
  id: string
  clientId: string
  staffId: string
  serviceId: string
  date: string // ISO date string
  startTime: string
  endTime: string
  status: AppointmentStatus
  notes?: string
  addOns?: string[] // ServiceAddOn IDs
  totalPrice: number
  depositPaid: boolean
  depositAmount?: number
  reminderSent: boolean
  createdAt: string
  updatedAt: string
}

export type AppointmentStatus =
  | 'pending'
  | 'confirmed'
  | 'in-progress'
  | 'completed'
  | 'cancelled'
  | 'no-show'

export interface BookingFormData {
  serviceId: string
  staffId?: string
  date: Date
  timeSlot: string
  addOns?: string[]
  notes?: string
  clientInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
}

export interface Payment {
  id: string
  appointmentId: string
  amount: number
  type: PaymentType
  status: PaymentStatus
  method: PaymentMethod
  transactionId?: string
  createdAt: string
}

export type PaymentType = 'deposit' | 'full-payment' | 'tip'
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded'
export type PaymentMethod = 'card' | 'tap' | 'paypal' | 'cash'

export interface LoyaltyProgram {
  clientId: string
  points: number
  tier: 'bronze' | 'silver' | 'gold' | 'platinum'
  lifetimeSpend: number
  visitsCount: number
  lastVisit?: string
  rewards: Reward[]
}

export interface Reward {
  id: string
  name: string
  description: string
  pointsCost: number
  isRedeemed: boolean
  redeemedAt?: string
}

export interface Review {
  id: string
  appointmentId: string
  clientId: string
  staffId: string
  rating: number // 1-5
  comment?: string
  createdAt: string
}

export interface Analytics {
  period: 'day' | 'week' | 'month' | 'year'
  startDate: string
  endDate: string
  revenue: number
  appointmentsCount: number
  newClients: number
  returningClients: number
  averageTicket: number
  topServices: TopService[]
  topStaff: TopStaff[]
  cancelationRate: number
  noShowRate: number
}

export interface TopService {
  serviceId: string
  serviceName: string
  bookings: number
  revenue: number
}

export interface TopStaff {
  staffId: string
  staffName: string
  appointmentsCompleted: number
  revenue: number
  averageRating: number
}

export interface NotificationSettings {
  userId: string
  emailNotifications: boolean
  smsNotifications: boolean
  appointmentReminders: boolean
  promotionalEmails: boolean
  reminderHours: number // hours before appointment
}

export interface GalleryImage {
  id: string
  url: string
  title?: string
  description?: string
  tags: string[]
  staffId?: string
  isHidden: boolean
  uploadedAt: string
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}

// Form validation schemas (used with zod)
export interface LoginFormData {
  email: string
  password: string
}

export interface SignupFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  preferredContact: 'email' | 'phone'
}

```

`tsconfig.json`:

```json
{
  "include": ["**/*.ts", "**/*.tsx"],
  "compilerOptions": {
    "target": "ES2022",
    "jsx": "react-jsx",
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "types": ["vite/client"],

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": false,
    "noEmit": true,

    /* Linting */
    "skipLibCheck": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "~/*": ["./src/*"]
    }
  }
}

```

`vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'
import path from 'path'

const config = defineConfig({
  plugins: [
    devtools(),
    nitro(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
})

export default config

```
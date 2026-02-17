# Thatha Ennai - Code Structure Explained

## Project Overview

This is a Next.js 14 single-page business website for Thatha Ennai Ayurvedic Pain Reliever. It uses the App Router, Tailwind CSS for styling, and Framer Motion for animations.

---

## Folder Structure

```
Website/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (wraps all pages, adds metadata & WhatsApp button)
│   ├── page.tsx            # Home page - imports and renders all sections
│   ├── globals.css         # Global styles & Tailwind
│   ├── icon.svg            # Favicon (T logo)
│   └── opengraph-image.tsx # Dynamic OG image for social sharing
├── components/             # Reusable React components
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Ingredients.tsx
│   ├── HowItWorks.tsx
│   ├── Benefits.tsx
│   ├── Practitioner.tsx
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx  # Sticky floating button
│   └── AnimatedSection.tsx # Wrapper for scroll animations
├── public/                 # Static assets (if any)
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind theme (colors, fonts)
└── next.config.js          # Next.js config
```

---

## How It Works

### 1. Entry Point: `app/layout.tsx`
- Wraps the entire app
- Defines SEO metadata (title, description, Open Graph, Twitter cards)
- Loads global CSS and fonts
- Renders `WhatsAppButton` on every page (sticky)

### 2. Main Page: `app/page.tsx`
- Single page that stacks all 10 section components in order
- Each section is a separate component for clean organization

### 3. Section Components (in order)

| Component | Purpose |
|-----------|---------|
| **Hero** | Headline "Walk Without Pain Again", product image placeholder, Order on WhatsApp CTA |
| **Problem** | Pain points (elderly, arthritis, professionals) - empathy-driven |
| **Ingredients** | 30+ ingredients grid, herbal/root/oil breakdown, badges |
| **HowItWorks** | 3 steps: Apply → Massage → Absorb |
| **Benefits** | 4 benefits with icons |
| **Practitioner** | K.R. Ponnambalam credentials, P&R Naturals, UDYAM |
| **Testimonials** | Placeholder customer reviews |
| **Pricing** | ₹300, WhatsApp order button |
| **FAQ** | Accordion with 4 questions |
| **Footer** | Contact, address, registration, Made in India |

### 4. Reusable Components

- **WhatsAppButton**: Fixed bottom-right, links to `wa.me/917305230228`
- **AnimatedSection**: Wraps content with scroll-triggered fade-in animation (Framer Motion)

### 5. Styling (Tailwind)
- **Colors**: `primary` (amber #D4A574), `secondary` (green #2D5A27), `cream` (#FAF7F2)
- **Responsive**: Mobile-first, breakpoints `md:` and `lg:`

### 6. Data Flow
- No external API or database
- All content is hardcoded in components
- WhatsApp link uses: `https://wa.me/917305230228?text=Hi%20I%20want%20to%20order%20Thatha%20Ennai`

---

## Key Files to Edit

| To change... | Edit... |
|--------------|---------|
| Contact number | `components/Footer.tsx`, `Hero.tsx`, `Pricing.tsx`, `WhatsAppButton.tsx` |
| Colors | `tailwind.config.ts`, `app/globals.css` |
| SEO | `app/layout.tsx` (metadata) |
| Section content | The corresponding component in `components/` |

# Tropical Bay by Malpe — Resort Website

> **Private Repository**
> Designed and optimized for Tropical Bay by Malpe, a luxury waterfront resort and backwater sanctuary in coastal Karnataka.

---

## 🌟 Overview

This is the official web application for **Tropical Bay by Malpe**, designed to offer an immersive, high-end visual showcase of the resort's premium accommodation, amenities, local experiences, and the rich cultural heritage of Tulu Nadu. 

The website is designed with a premium, mobile-first aesthetic featuring curated typography, smooth micro-animations, glassmorphism components, and dynamic parallax backgrounds.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js](https://nextjs.org/) (App Router & React)
- **Language**: [TypeScript](https://www.typescript.org/)
- **Styling**: Vanilla CSS (Tailored HSL/Hex palettes, fluid custom layouts, modular styling rules)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS Transitions, Keyframes, Custom React stagger reveal systems

---

## ⚡ Key Architectural Patterns

### 1. Traditional SSR Navigation (Search Engine Optimized)
To guarantee real-time page rendering, clean crawlability, and standard browser transition flows, the site operates under a **traditional multi-page navigation architecture**:
- All internal page links are rendered as standard HTML `<a>` tags instead of Next.js client-side `Link` components.
- Every route is configured with `export const dynamic = 'force-dynamic'` to ensure dynamic Server-Side Rendering (SSR) per request.
- Clicking links triggers native browser reloads to fetch fresh server-rendered page documents.

### 2. Immersive Room Gallery Lightbox
An interactive, full-screen media lightbox is integrated within the room detail views (`components/ui/ImageSlider.tsx`):
- **Responsive Cursor Hints**: Hovering over room detail photos showcases a luxury `zoom-in` visual state.
- **Lightbox Controls**: Features next/prev arrow pagination, image captions, active/total counters, and a close button.
- **Access & Lock**: Prevents body scrolling while active, support for Arrow pagination, and Escape key dismissal.

### 3. Responsive Responsive Design
Optimized specifically for devices of all sizes (from 320px up to ultra-wide displays):
- **Hero Image Swap**: Serves `hero-desktop.webp` for viewports above 768px, and a custom portrait `hero-mobile.webp` for mobile layouts, preventing unnecessary layout shifts or cropped ratios.
- **Culture Section Stack**: Redesigned mobile cards stack statically (Image -> Descriptions -> Tags -> CTA) rather than overlays, expanding dynamically to prevent text clipping.
- **Refined Badging**: Proportional feature badge adjustments on mobile screens to preserve grid balance and margin aesthetics.

---

## 📁 Directory Structure

```text
├── app/                  # Next.js App Router pages
│   ├── about/            # About page
│   ├── attractions/      # Local tourism destinations
│   ├── around-us/        # Curated experiences & dynamic detail pages
│   ├── culture/          # Sacred traditions of Tulu Nadu (Yakshagana, etc.)
│   ├── faqs/             # FAQ listing
│   ├── home/             # Homepage sections (Hero, FeaturedRooms, Experiences, etc.)
│   ├── pricing/          # Room tariff details
│   ├── services/         # Amenity details
│   └── rooms/            # Room detail page templates
├── components/           # Reusable UI components
│   ├── animations/       # FadeIn & StaggerReveal wrappers
│   ├── layout/           # Shared Navbar & Footer Layouts
│   └── ui/               # Core design elements (BookingWidget, ImageSlider, etc.)
├── lib/                  # Data objects, types, & site config
└── public/               # Static assets (images, videos, metadata)
    └── images/           # Category-wise compressed webp assets
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your local machine:
- **Node.js**: `v18.x` or later
- **npm**: `v9.x` or later

### Installation

1. Clone the private repository:
   ```bash
   git clone https://github.com/one-directory/Tropical-Bay-by-Malpe.git
   cd Tropical-Bay-by-Malpe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the local server.

### Building for Production

To create an optimized production bundle:

1. Compile the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

---

## 🔒 License & Copyright

All content, design assets, and source code are private and proprietary. Copyright © 2026 Tropical Bay by Malpe. All rights reserved. Unauthorised replication, hosting, or distribution of this code is strictly prohibited.

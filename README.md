# Luxury Barber Demo

A conversion-focused barbershop landing page built with Vite + React + Tailwind CSS v4 + Supabase.

## Features

- Multi-profile config (switch shops by changing one line in `src/config/business.js`)
- Supabase booking form with confirmation flow
- Interactive before/after transformation sliders
- Today available slots with one-tap booking prefill
- WhatsApp CTA with pre-filled booking message
- Mobile-first responsive design

## Local Setup

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase credentials
npm run dev
```

Open `http://localhost:5173`

## Environment Variables

Create `.env.local` (never commit this file):

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Get these from: Supabase Dashboard > Project > Settings > API

## Supabase Setup

1. Run `supabase/schema.sql` in the Supabase SQL Editor
2. Run `supabase/seed.sql` to seed services and barbers for all 3 profiles

## Switching Profiles

Edit the top of `src/config/business.js`:

```js
export const ACTIVE_PROFILE = 'luxuryDubai' // 'modernNeighborhood' | 'premiumGroomingLounge'
```

## Scripts

```bash
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview production build locally
```

## Vercel Deployment

1. Push repo to GitHub
2. Import in Vercel — framework auto-detected as Vite
3. Add env vars in Vercel dashboard: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
4. Deploy

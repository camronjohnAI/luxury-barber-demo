-- =============================================================================
-- LUXURY BARBER DEMO — SUPABASE SCHEMA
-- Run this in your Supabase SQL Editor (supabase.com → project → SQL Editor)
-- =============================================================================

-- Customers (deduplicated by phone number)
CREATE TABLE IF NOT EXISTS customers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL UNIQUE,
  email TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Services (mirrors config — used for booking FK integrity)
CREATE TABLE IF NOT EXISTS services (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  currency TEXT DEFAULT 'AED',
  duration TEXT,
  active BOOLEAN DEFAULT TRUE
);

-- Barbers
CREATE TABLE IF NOT EXISTS barbers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT,
  active BOOLEAN DEFAULT TRUE
);

-- Bookings (main table)
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_email TEXT,
  service_id TEXT REFERENCES services(id),
  service_name TEXT NOT NULL,
  barber_id TEXT REFERENCES barbers(id),
  barber_name TEXT NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  notes TEXT,
  profile TEXT DEFAULT 'luxuryDubai',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- Row Level Security (RLS)
-- Allows the public booking form to insert rows using the anon key
-- =============================================================================
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anyone can read bookings"
  ON bookings FOR SELECT TO anon USING (true);

ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert customers"
  ON customers FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anyone can read customers"
  ON customers FOR SELECT TO anon USING (true);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read services"
  ON services FOR SELECT TO anon USING (true);

ALTER TABLE barbers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read barbers"
  ON barbers FOR SELECT TO anon USING (true);

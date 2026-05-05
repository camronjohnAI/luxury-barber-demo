-- =============================================================================
-- LUXURY BARBER DEMO — SEED DATA
-- Run this in Supabase SQL Editor AFTER running schema.sql
-- Seeds services and barbers for all 3 demo profiles so FK constraints pass
-- =============================================================================

-- -----------------------------------------------------------------------------
-- SERVICES  (id matches the slug IDs in src/config/business.js)
-- -----------------------------------------------------------------------------
INSERT INTO services (id, name, price, currency, duration) VALUES
  -- Profile: luxuryDubai
  ('signature-cut',         'Signature Cut',           150, 'AED', '45 min'),
  ('skin-fade',             'Skin Fade',                120, 'AED', '35 min'),
  ('beard-sculpt',          'Beard Sculpt & Line Up',   80,  'AED', '30 min'),
  ('vip-package',           'VIP Grooming Package',     220, 'AED', '75 min'),
  ('hair-beard',            'Hair + Beard Combo',       180, 'AED', '60 min'),
  ('kids-cut',              'Kids'' Cut',               70,  'AED', '25 min'),

  -- Profile: modernNeighborhood
  ('classic-cut',           'Classic Cut',              45,  '$',   '30 min'),
  ('fade',                  'Skin Fade',                40,  '$',   '30 min'),
  ('beard-trim',            'Beard Trim & Shape',       25,  '$',   '20 min'),
  ('cut-beard',             'Cut + Beard Combo',        65,  '$',   '50 min'),
  ('hot-shave',             'Hot Towel Shave',          35,  '$',   '35 min'),
  ('kids',                  'Kids'' Cut',               25,  '$',   '20 min'),

  -- Profile: premiumGroomingLounge
  ('master-cut',            'Master Cut',               95,  '£',   '60 min'),
  ('executive-shave',       'Executive Shave',          75,  '£',   '45 min'),
  ('beard-design',          'Beard Design & Groom',     55,  '£',   '35 min'),
  ('signature-experience',  'Signature Experience',     160, '£',   '90 min'),
  ('cut-beard-premium',     'Cut & Beard Premium',      130, '£',   '75 min'),
  ('scalp-treatment',       'Scalp Treatment',          45,  '£',   '30 min')

ON CONFLICT (id) DO UPDATE SET
  name     = EXCLUDED.name,
  price    = EXCLUDED.price,
  currency = EXCLUDED.currency,
  duration = EXCLUDED.duration,
  active   = TRUE;

-- -----------------------------------------------------------------------------
-- BARBERS  (id matches the slug IDs in src/config/business.js)
-- -----------------------------------------------------------------------------
INSERT INTO barbers (id, name, title) VALUES
  -- Profile: luxuryDubai
  ('omar-hassan',        'Omar Hassan',        'Master Barber'),
  ('khalid-al-rashid',   'Khalid Al Rashid',   'Senior Barber'),
  ('james-carter',       'James Carter',       'Style Specialist'),

  -- Profile: modernNeighborhood
  ('marcus-jones',       'Marcus Jones',       'Head Barber'),
  ('tony-reyes',         'Tony Reyes',         'Senior Barber'),
  ('devon-white',        'Devon White',        'Style Barber'),

  -- Profile: premiumGroomingLounge
  ('edward-black',       'Edward Black',       'Creative Director'),
  ('ibrahim-al-sayed',   'Ibrahim Al Sayed',   'Master Barber'),
  ('lucas-santos',       'Lucas Santos',       'Senior Stylist')

ON CONFLICT (id) DO UPDATE SET
  name   = EXCLUDED.name,
  title  = EXCLUDED.title,
  active = TRUE;

-- -----------------------------------------------------------------------------
-- CUSTOMERS RLS patch — allow upsert (INSERT + UPDATE on conflict)
-- The original schema only had INSERT policy; upsert needs UPDATE too
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Anyone can upsert customers" ON customers;
CREATE POLICY "Anyone can upsert customers"
  ON customers FOR UPDATE TO anon USING (true) WITH CHECK (true);

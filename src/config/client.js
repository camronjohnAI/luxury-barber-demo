// =============================================================
// CLIENT CONFIG — Edit this file to set up a new demo
// =============================================================
// Everything here overrides the demo template automatically.
// Nothing else needs to be touched for a standard client swap.
// =============================================================

export const client = {

  // ── Identity ──────────────────────────────────────────────
  name:          'Mr. Cutz',
  wordmarkLine1: 'Mr. Cutz',          // top line in navbar / footer
  wordmarkLine2: 'Smithtown, NY',     // bottom line in navbar / footer
  tagline:       'Sharp Cuts. Clean Fades.',
  city:          'Smithtown',         // used in hero eyebrow

  // ── Contact ───────────────────────────────────────────────
  phone:      '(631) 863-8022',
  sms:        '+16318638022',          // number used for sms: links (usually same as phone)
  instagram:  '',                      // full URL: https://instagram.com/yourshop
  bookingUrl: '',                      // Fresha / Square / Booksy etc.
                                       // if set, CTAs link here instead of the on-page form

  // ── Location ──────────────────────────────────────────────
  address:  '302 Maple Ave, Smithtown, NY 11787',
  mapsUrl:  'https://maps.google.com/?q=302+Maple+Ave+Smithtown+NY+11787',

  // ── Assets ────────────────────────────────────────────────
  // Drop files in the /public folder, then set filenames here.
  logo:      'mrcutzlogo.jpg',         // e.g. 'logo.png' — blank = text wordmark
  heroImage: 'barberhero.png',         // hero background photo

  // ── Hours ─────────────────────────────────────────────────
  hours: [
    { day: 'Mon – Fri', time: '10:00 AM – 8:00 PM' },
    { day: 'Saturday',  time: '9:00 AM – 7:00 PM'  },
    { day: 'Sunday',    time: '10:00 AM – 5:00 PM' },
  ],

  // ── Services ──────────────────────────────────────────────
  // popular: true  →  gold accent bar + "Most Booked" label on the card
  // currency: '$' | '€' | '£' | etc.
  services: [
    {
      id: 'signature-haircut',
      name: 'Signature Haircut',
      price: 42,
      currency: '$',
      duration: '45 min',
      popular: false,
      description: 'Scissor cut shaped to your style and your head. Clean, adaptable, and consistent every time you sit down.',
    },
    {
      id: 'skin-fade',
      name: 'Skin Fade',
      price: 45,
      currency: '$',
      duration: '45 min',
      popular: true,
      description: 'Zero-to-skin fade, blended seamless. The cut most of our regulars come back for every two to three weeks.',
    },
    {
      id: 'beard-trim-lineup',
      name: 'Beard Trim & Lineup',
      price: 30,
      currency: '$',
      duration: '25 min',
      popular: false,
      description: "Trim, shape, and a straight-razor line-up. We work with what you've got — nothing overdone.",
    },
    {
      id: 'haircut-beard',
      name: 'Haircut + Beard',
      price: 65,
      currency: '$',
      duration: '60 min',
      popular: true,
      description: 'Cut and beard done together, finished sharp. Walk in, walk out looking put together.',
    },
    {
      id: 'kids-cut',
      name: "Kids' Cut",
      price: 28,
      currency: '$',
      duration: '25 min',
      popular: false,
      description: 'Clean cuts for 12 and under. Patient barbers, relaxed pace, good results every time.',
    },
    {
      id: 'hot-towel-shave',
      name: 'Hot Towel Shave',
      price: 45,
      currency: '$',
      duration: '35 min',
      popular: false,
      description: 'Straight razor, hot towel prep, and a smooth finish. Done the right way, not the fast way.',
    },
  ],
}

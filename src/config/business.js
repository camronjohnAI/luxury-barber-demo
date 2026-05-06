// =============================================================================
// LUXURY BARBER DEMO — MASTER BUSINESS CONFIG
// =============================================================================
// HOW TO PERSONALIZE FOR A NEW BARBERSHOP IN 5 MINUTES:
// 1. Change ACTIVE_PROFILE below to one of: 'luxuryDubai' | 'modernNeighborhood' | 'premiumGroomingLounge'
// 2. OR duplicate a profile below and fill in the real shop's details
// 3. Every page/section pulls from this file — nothing is hardcoded anywhere else
// =============================================================================

// ✏️  CHANGE THIS ONE LINE TO SWITCH BETWEEN SHOP PROFILES
export const ACTIVE_PROFILE = 'luxuryDubai'

const profiles = {

  // ===========================================================================
  // PROFILE 1: LUXURY DUBAI BARBER
  // ===========================================================================
  luxuryDubai: {
    brand: {
      name: 'Scissor Mens Salon',                      // ✏️ Shop name
      tagline: 'The Art of Refined Grooming',         // ✏️ Tagline
      subTagline: 'Where Precision Meets Prestige',   // ✏️ Sub-tagline
      phone: '+971 50 878 2699',                      // ✏️ Phone number (display)
      whatsapp: '971508782699',                       // ✏️ WhatsApp number (no + or spaces)
      email: '',                                      // ✏️ Email
      address: 'Reef Village, Abu Dhabi, UAE',        // ✏️ Address
      city: 'Abu Dhabi',
      mapsUrl: 'https://maps.google.com/?q=Reef+Village+Abu+Dhabi+UAE',  // ✏️ Google Maps link
      mapEmbedUrl: '',                                // ✏️ Paste Google Maps embed URL here
      instagram: 'https://instagram.com/thesovereign.ae',    // ✏️ Instagram URL
      tiktok: '',
    },

    colors: {
      primary: '#C9A84C',
      primaryLight: '#E8C97A',
      bg: '#0A0A0A',
      surface: '#141414',
      text: '#F5F0E8',
    },

    hero: {
      headline: 'Craft.',           // ✏️ First word of headline
      headlineAccent: 'Precision.', // ✏️ Gold accent word
      headlineEnd: 'Legacy.',       // ✏️ Last word of headline
      subheadline: "Abu Dhabi's most exclusive grooming experience — where every cut is a statement.",
      cta: 'Book Your Appointment',
      ctaSecondary: 'View Services',
      urgency: 'Only 3 slots remaining today',
      trustBadges: [
        { icon: 'Award', label: '5-Star Rated' },
        { icon: 'Clock', label: 'Book in 30 Seconds' },
        { icon: 'Shield', label: 'Premium Experience' },
        { icon: 'Users', label: '500+ Happy Clients' },
      ],
    },

    services: [                     // ✏️ Edit service names, prices, descriptions
      {
        id: 'signature-cut',
        name: 'Signature Cut',
        price: 150,
        currency: 'AED',
        duration: '45 min',
        description: 'Precision cut tailored to your face shape, finished with a hot towel and premium styling product.',
        popular: true,
        image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=500&q=80&auto=format&fit=crop', // ✏️ Replace with real photo
      },
      {
        id: 'skin-fade',
        name: 'Skin Fade',
        price: 120,
        currency: 'AED',
        duration: '35 min',
        description: 'Flawless skin fade with seamless blending. The gold standard of modern barbering.',
        popular: false,
        image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=500&q=80&auto=format&fit=crop',
      },
      {
        id: 'beard-sculpt',
        name: 'Beard Sculpt & Line Up',
        price: 80,
        currency: 'AED',
        duration: '30 min',
        description: 'Expert beard shaping and line-up with straight razor finish for a sharp, defined look.',
        popular: false,
        image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&h=500&q=80&auto=format&fit=crop',
      },
      {
        id: 'vip-package',
        name: 'VIP Grooming Package',
        price: 220,
        currency: 'AED',
        duration: '75 min',
        description: 'Full service experience: signature cut, beard sculpt, hot towel shave, and scalp massage.',
        popular: true,
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=500&q=80&auto=format&fit=crop',
      },
      {
        id: 'hair-beard',
        name: 'Hair + Beard Combo',
        price: 180,
        currency: 'AED',
        duration: '60 min',
        description: 'Complete transformation. Precision cut paired with a sculpted beard — the full package.',
        popular: false,
        image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=500&q=80&auto=format&fit=crop',
      },
      {
        id: 'kids-cut',
        name: "Kids' Cut",
        price: 70,
        currency: 'AED',
        duration: '25 min',
        description: 'Gentle, precise cuts for young gentlemen. Ages 2–12. Patient and professional service.',
        popular: false,
        image: 'https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=800&h=500&q=80&auto=format&fit=crop',
      },
    ],

    barbers: [                      // ✏️ Edit barber names, specialties, bios
      {
        id: 'omar-hassan',
        name: 'Omar Hassan',
        title: 'Master Barber',
        specialty: 'Skin Fades & Precision Lines',
        rating: 4.9,
        reviews: 247,
        experience: '8 Years',
        bio: 'Trained in London and Dubai, Omar is renowned for flawless skin fades and sharp line-ups that define the modern gentleman.',
        initials: 'OH',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80&auto=format&fit=crop&face', // ✏️ Replace with real barber photo
      },
      {
        id: 'khalid-al-rashid',
        name: 'Khalid Al Rashid',
        title: 'Senior Barber',
        specialty: 'Classic Cuts & Beard Sculpting',
        rating: 4.8,
        reviews: 189,
        experience: '6 Years',
        bio: 'A master of the classic cut and traditional straight razor shave. Khalid blends old-world technique with modern style.',
        initials: 'KR',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80&auto=format&fit=crop&face',
      },
      {
        id: 'james-carter',
        name: 'James Carter',
        title: 'Style Specialist',
        specialty: 'Textured Cuts & Modern Styles',
        rating: 4.9,
        reviews: 312,
        experience: '5 Years',
        bio: 'James specialises in textured, contemporary cuts for the style-conscious client. Known for his creative approach and attention to detail.',
        initials: 'JC',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&q=80&auto=format&fit=crop&face',
      },
    ],

    hours: [                        // ✏️ Edit opening hours
      { day: 'Monday – Friday', time: '9:00 AM – 10:00 PM' },
      { day: 'Saturday', time: '8:00 AM – 11:00 PM' },
      { day: 'Sunday', time: '10:00 AM – 8:00 PM' },
    ],

    testimonials: [                 // ✏️ Edit customer reviews
      {
        id: 1,
        name: 'Khalid Al-Mansoori',
        role: 'CEO, Dubai',
        text: "An unparalleled grooming experience. The attention to detail is extraordinary — I won't go anywhere else.",
        rating: 5,
        verified: true,
      },
      {
        id: 2,
        name: 'Ahmed Farouq',
        role: 'Finance Director',
        text: 'The VIP package is worth every dirham. The hot towel finish alone is reason enough to return weekly.',
        rating: 5,
        verified: true,
      },
      {
        id: 3,
        name: 'Ryan Mitchell',
        role: 'Entrepreneur',
        text: "I've visited barbers in London, New York, and Dubai. The Sovereign is in a different class entirely.",
        rating: 5,
        verified: true,
      },
      {
        id: 4,
        name: 'Omar Siddiqui',
        role: 'Architect',
        text: "Khalid transformed my beard game completely. The craftsmanship here is something you don't find everywhere.",
        rating: 5,
        verified: true,
      },
      {
        id: 5,
        name: 'Daniel Kowalski',
        role: 'Marketing Executive',
        text: 'Booking was effortless, the environment is stunning, and the cut was perfect. This is what luxury looks like.',
        rating: 5,
        verified: true,
      },
    ],

    about: {
      headline: 'A Cut Above',
      subheadline: 'More than a barbershop.',
      body: "The Sovereign is Dubai's premier grooming destination — a sanctuary where master craftsmen transform the everyday into the exceptional. Founded on the principles of precision, luxury, and discretion, we serve the city's most discerning gentlemen.\n\nEvery visit is a ritual. From the moment you arrive, you're treated as royalty. Our barbers are internationally trained, our products are hand-selected, and our standards are uncompromising.",
      stats: [
        { value: '8+', label: 'Years of Excellence' },
        { value: '500+', label: 'Monthly Clients' },
        { value: '4.9', label: 'Average Rating' },
        { value: '3', label: 'Master Barbers' },
      ],
    },

    booking: {
      headline: 'Reserve Your Session',
      subheadline: 'Book in under 30 seconds',
      urgency: 'Limited slots available — secure your preferred time now',
      confirmationMessage: "Your booking is confirmed! We'll WhatsApp you shortly to confirm your appointment.",
      availableTimes: [
        '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
        '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM',
      ],
      todaySlots: [
        { time: '11:00 AM', label: 'Morning' },
        { time: '2:00 PM', label: 'Afternoon' },
        { time: '5:00 PM', label: 'Evening' },
        { time: '7:00 PM', label: 'Late Evening' },
      ],
    },

    gallery: {
      headline: 'The Work',
      subheadline: 'Craftsmanship in every cut',
      items: [                      // ✏️ Replace image URLs with real client photos
        { id: 1, label: 'Barber at Work', tag: 'Featured', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=800&q=85&auto=format&fit=crop' },
        { id: 2, label: 'Skin Fade', tag: 'After', image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&q=80&auto=format&fit=crop' },
        { id: 3, label: 'Beard Sculpt', tag: 'After', image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&h=600&q=80&auto=format&fit=crop' },
        { id: 4, label: 'Clean Fade', tag: 'After', image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&q=80&auto=format&fit=crop' },
        { id: 5, label: 'Precision Cut', tag: 'After', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&q=80&auto=format&fit=crop' },
        { id: 6, label: 'Shop Atmosphere', tag: 'Lounge', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&q=80&auto=format&fit=crop' },
      ],
    },

    transformations: [
      {
        id: 'skin-fade',
        label: 'Skin Fade',
        description: 'From overgrown to razor sharp in one session.',
        before: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=680&q=80&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=680&q=80&auto=format&fit=crop',
      },
      {
        id: 'beard-lineup',
        label: 'Beard Line Up',
        description: 'Precision shaping that defines the jaw.',
        before: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=680&q=80&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&h=680&q=80&auto=format&fit=crop',
      },
      {
        id: 'full-groom',
        label: 'Full Grooming Package',
        description: 'Complete transformation, head to beard.',
        before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=680&q=80&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=680&q=80&auto=format&fit=crop',
      },
    ],
  },

  // ===========================================================================
  // PROFILE 2: MODERN NEIGHBOURHOOD BARBER
  // ===========================================================================
  modernNeighborhood: {
    brand: {
      name: 'Sharp & Co.',
      tagline: 'Fresh Cuts. Real Talk.',
      subTagline: 'Your Local Barber, Elevated.',
      phone: '+1 (555) 234-5678',
      whatsapp: '15552345678',
      email: 'hello@sharpandco.com',
      address: '42 Main Street, Brooklyn, NY',
      city: 'Brooklyn',
      mapsUrl: 'https://maps.google.com/?q=Brooklyn+NY',
      mapEmbedUrl: '',
      instagram: 'https://instagram.com/sharpandco',
      tiktok: '',
    },

    colors: {
      primary: '#C9A84C',
      primaryLight: '#E8C97A',
      bg: '#0A0A0A',
      surface: '#141414',
      text: '#F5F0E8',
    },

    hero: {
      headline: 'Sharp.',
      headlineAccent: 'Clean.',
      headlineEnd: 'Confident.',
      subheadline: 'Brooklyn\'s freshest cuts in a space that respects your time and your style.',
      cta: 'Book a Cut',
      ctaSecondary: 'See Services',
      urgency: 'Walk-ins welcome — but smart guys book ahead',
      trustBadges: [
        { icon: 'Scissors', label: 'Expert Cuts' },
        { icon: 'Clock', label: 'On Time, Every Time' },
        { icon: 'Star', label: 'Top Rated' },
        { icon: 'MapPin', label: 'Brooklyn\'s Finest' },
      ],
    },

    services: [
      {
        id: 'classic-cut',
        name: 'Classic Cut',
        price: 45,
        currency: '$',
        duration: '30 min',
        description: 'A clean, sharp cut customised to your style and head shape. The cornerstone of every great look.',
        popular: true,
        image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=500&q=80&auto=format&fit=crop',
      },
      {
        id: 'fade',
        name: 'Skin Fade',
        price: 40,
        currency: '$',
        duration: '30 min',
        description: 'Tight, blended skin fade with a crisp finish. Zero to skin — executed with precision.',
        popular: false,
        image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=500&q=80&auto=format&fit=crop',
      },
      {
        id: 'beard-trim',
        name: 'Beard Trim & Shape',
        price: 25,
        currency: '$',
        duration: '20 min',
        description: 'Clean up the lines, shape the edges, and keep your beard looking intentional.',
        popular: false,
        image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&h=500&q=80&auto=format&fit=crop',
      },
      {
        id: 'cut-beard',
        name: 'Cut + Beard Combo',
        price: 65,
        currency: '$',
        duration: '50 min',
        description: 'Full head-to-beard treatment. Walk out looking sharper than when you walked in.',
        popular: true,
        image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=500&q=80&auto=format&fit=crop',
      },
      {
        id: 'hot-shave',
        name: 'Hot Towel Shave',
        price: 35,
        currency: '$',
        duration: '35 min',
        description: 'Old school straight razor shave with hot towel prep. Smooth as it gets.',
        popular: false,
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=500&q=80&auto=format&fit=crop',
      },
      {
        id: 'kids',
        name: "Kids' Cut",
        price: 25,
        currency: '$',
        duration: '20 min',
        description: 'Patient, skilled cuts for young ones. Ages 2–12. No fuss, great results.',
        popular: false,
        image: 'https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=800&h=500&q=80&auto=format&fit=crop',
      },
    ],

    barbers: [
      {
        id: 'marcus-jones',
        name: 'Marcus Jones',
        title: 'Head Barber',
        specialty: 'Fades & Tapers',
        rating: 4.9,
        reviews: 203,
        experience: '10 Years',
        bio: 'Marcus built his skills in Harlem before bringing his craft to Brooklyn. Known for the sharpest fades in the borough.',
        initials: 'MJ',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80&auto=format&fit=crop',
      },
      {
        id: 'tony-reyes',
        name: 'Tony Reyes',
        title: 'Senior Barber',
        specialty: 'Classic Cuts & Beard Work',
        rating: 4.8,
        reviews: 155,
        experience: '7 Years',
        bio: 'Tony\'s old-school technique and modern eye make him the go-to for clients who want a timeless look.',
        initials: 'TR',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80&auto=format&fit=crop',
      },
      {
        id: 'devon-white',
        name: 'Devon White',
        title: 'Style Barber',
        specialty: 'Textured Hair & Designs',
        rating: 4.8,
        reviews: 178,
        experience: '5 Years',
        bio: 'Devon specialises in textured hair and creative line work. If you want to stand out, Devon\'s your guy.',
        initials: 'DW',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&q=80&auto=format&fit=crop',
      },
    ],

    hours: [
      { day: 'Monday – Friday', time: '10:00 AM – 8:00 PM' },
      { day: 'Saturday', time: '9:00 AM – 7:00 PM' },
      { day: 'Sunday', time: '11:00 AM – 5:00 PM' },
    ],

    testimonials: [
      {
        id: 1,
        name: 'Jordan T.',
        role: 'Brooklyn, NY',
        text: "Marcus gave me the cleanest fade I've had in years. This is my spot now, no question.",
        rating: 5,
        verified: true,
      },
      {
        id: 2,
        name: 'Mike S.',
        role: 'Regular Client',
        text: 'Consistent, fast, and always on point. Sharp & Co. is worth every penny.',
        rating: 5,
        verified: true,
      },
      {
        id: 3,
        name: 'Carlos R.',
        role: 'Local Business Owner',
        text: "Tony worked magic on my beard. I didn't know it could look this good. Definitely coming back.",
        rating: 5,
        verified: true,
      },
      {
        id: 4,
        name: 'Ben L.',
        role: 'First-Time Client',
        text: 'Walked in nervous about trying a new place. Walked out looking like a new man. Sharp & Co. has a customer for life.',
        rating: 5,
        verified: true,
      },
      {
        id: 5,
        name: 'Kevin A.',
        role: 'Verified Client',
        text: 'Booked online, in and out in 30 minutes, fade was perfect. Exactly what I needed.',
        rating: 5,
        verified: true,
      },
    ],

    about: {
      headline: 'Built for the Neighbourhood',
      subheadline: 'Where everyone gets the premium treatment.',
      body: "Sharp & Co. was built on one idea: every man deserves a great haircut, no matter where he's from. We brought premium barbering to Brooklyn without the pretension — skilled barbers, clean space, no waiting around.\n\nWe're the kind of shop where you'll recognize faces, swap stories, and leave feeling better than when you walked in. That's what a real neighbourhood barber looks like.",
      stats: [
        { value: '10+', label: 'Years in Brooklyn' },
        { value: '300+', label: 'Clients per Month' },
        { value: '4.9', label: 'Google Rating' },
        { value: '3', label: 'Expert Barbers' },
      ],
    },

    booking: {
      headline: 'Book Your Cut',
      subheadline: 'Takes less than a minute',
      urgency: 'Slots fill fast on weekends — book yours now',
      confirmationMessage: "You're booked! We'll send you a WhatsApp reminder before your appointment.",
      availableTimes: [
        '10:00 AM', '11:00 AM', '12:00 PM',
        '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
        '5:00 PM', '6:00 PM', '7:00 PM',
      ],
      todaySlots: [
        { time: '11:00 AM', label: 'Morning' },
        { time: '1:00 PM', label: 'Afternoon' },
        { time: '4:00 PM', label: 'Late Afternoon' },
        { time: '6:00 PM', label: 'Evening' },
      ],
    },

    gallery: {
      headline: 'Fresh Cuts',
      subheadline: 'The results speak for themselves',
      items: [
        { id: 1, label: 'Barber at Work', tag: 'Featured', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=800&q=85&auto=format&fit=crop' },
        { id: 2, label: 'Skin Fade', tag: 'After', image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&q=80&auto=format&fit=crop' },
        { id: 3, label: 'Beard Trim', tag: 'After', image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&h=600&q=80&auto=format&fit=crop' },
        { id: 4, label: 'Clean Fade', tag: 'After', image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&q=80&auto=format&fit=crop' },
        { id: 5, label: 'Precision Cut', tag: 'After', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&q=80&auto=format&fit=crop' },
        { id: 6, label: 'Shop Vibe', tag: 'Atmosphere', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&q=80&auto=format&fit=crop' },
      ],
    },

    transformations: [
      {
        id: 'skin-fade',
        label: 'Skin Fade',
        description: 'From overgrown to razor sharp in one session.',
        before: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=680&q=80&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=680&q=80&auto=format&fit=crop',
      },
      {
        id: 'beard-lineup',
        label: 'Beard Line Up',
        description: 'Precision shaping that defines the jaw.',
        before: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=680&q=80&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&h=680&q=80&auto=format&fit=crop',
      },
      {
        id: 'full-groom',
        label: 'Full Grooming Package',
        description: 'Complete transformation, head to beard.',
        before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=680&q=80&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=680&q=80&auto=format&fit=crop',
      },
    ],
  },

  // ===========================================================================
  // PROFILE 3: PREMIUM MEN'S GROOMING LOUNGE
  // ===========================================================================
  premiumGroomingLounge: {
    brand: {
      name: 'Obsidian Grooming',
      tagline: 'Elevate Your Standard',
      subTagline: 'Premium Grooming for the Modern Gentleman',
      phone: '+44 20 7123 4567',
      whatsapp: '442071234567',
      email: 'book@obsidiangrooming.co.uk',
      address: 'Mayfair, London, W1K 5AB',
      city: 'London',
      mapsUrl: 'https://maps.google.com/?q=Mayfair+London',
      mapEmbedUrl: '',
      instagram: 'https://instagram.com/obsidiangrooming',
      tiktok: '',
    },

    colors: {
      primary: '#C9A84C',
      primaryLight: '#E8C97A',
      bg: '#0A0A0A',
      surface: '#141414',
      text: '#F5F0E8',
    },

    hero: {
      headline: 'Elevate.',
      headlineAccent: 'Refine.',
      headlineEnd: 'Arrive.',
      subheadline: "Mayfair's most exclusive men's grooming lounge. By appointment only.",
      cta: 'Request an Appointment',
      ctaSecondary: 'Our Services',
      urgency: 'Limited appointments this week',
      trustBadges: [
        { icon: 'Crown', label: 'By Appointment' },
        { icon: 'Award', label: 'Award Winning' },
        { icon: 'Shield', label: 'Discreet & Private' },
        { icon: 'Star', label: 'Mayfair Standard' },
      ],
    },

    services: [
      {
        id: 'master-cut',
        name: 'Master Cut',
        price: 95,
        currency: '£',
        duration: '60 min',
        description: 'Unhurried, consultative cut by a master stylist. Includes scalp treatment and hot towel finish.',
        popular: true,
        image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=500&q=80&auto=format&fit=crop',
      },
      {
        id: 'executive-shave',
        name: 'Executive Shave',
        price: 75,
        currency: '£',
        duration: '45 min',
        description: 'Traditional straight razor shave with pre-shave oil, multiple hot towels, and cooling balm.',
        popular: false,
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=500&q=80&auto=format&fit=crop',
      },
      {
        id: 'beard-design',
        name: 'Beard Design & Groom',
        price: 55,
        currency: '£',
        duration: '35 min',
        description: 'Precision beard sculpting tailored to your face structure. Finished with premium beard oil.',
        popular: false,
        image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&h=500&q=80&auto=format&fit=crop',
      },
      {
        id: 'signature-experience',
        name: 'Signature Experience',
        price: 160,
        currency: '£',
        duration: '90 min',
        description: 'The complete Obsidian experience. Cut, shave, beard, scalp treatment, and complimentary refreshments.',
        popular: true,
        image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=500&q=80&auto=format&fit=crop',
      },
      {
        id: 'cut-beard-premium',
        name: 'Cut & Beard Premium',
        price: 130,
        currency: '£',
        duration: '75 min',
        description: 'Master cut paired with a precision beard design. The quintessential gentleman\'s appointment.',
        popular: false,
        image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=500&q=80&auto=format&fit=crop',
      },
      {
        id: 'scalp-treatment',
        name: 'Scalp Treatment',
        price: 45,
        currency: '£',
        duration: '30 min',
        description: 'Revitalising scalp massage and treatment using botanics selected for your hair type.',
        popular: false,
        image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=500&q=80&auto=format&fit=crop',
      },
    ],

    barbers: [
      {
        id: 'edward-black',
        name: 'Edward Black',
        title: 'Creative Director',
        specialty: 'Classic British Cuts & Styling',
        rating: 5.0,
        reviews: 289,
        experience: '15 Years',
        bio: 'Edward trained under the best in London and New York. His signature is the kind of cut that looks effortless but takes a decade of skill to achieve.',
        initials: 'EB',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&q=80&auto=format&fit=crop',
      },
      {
        id: 'ibrahim-al-sayed',
        name: 'Ibrahim Al Sayed',
        title: 'Master Barber',
        specialty: 'Traditional Shaving & Beard Artistry',
        rating: 4.9,
        reviews: 201,
        experience: '12 Years',
        bio: 'Ibrahim is Obsidian\'s shaving authority. His straight razor technique has earned a devoted following among London\'s most particular gentlemen.',
        initials: 'IS',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80&auto=format&fit=crop',
      },
      {
        id: 'lucas-santos',
        name: 'Lucas Santos',
        title: 'Senior Stylist',
        specialty: 'Modern Cuts & Textured Styles',
        rating: 4.9,
        reviews: 176,
        experience: '8 Years',
        bio: 'Lucas brings a contemporary edge to classic barbering. He reads hair with an artist\'s eye and delivers results that last.',
        initials: 'LS',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80&auto=format&fit=crop',
      },
    ],

    hours: [
      { day: 'Monday – Friday', time: '8:00 AM – 9:00 PM' },
      { day: 'Saturday', time: '9:00 AM – 7:00 PM' },
      { day: 'Sunday', time: 'Closed' },
    ],

    testimonials: [
      {
        id: 1,
        name: 'Lord William H.',
        role: 'Mayfair Resident',
        text: "I've had my hair cut in the finest establishments in London for 30 years. Obsidian is categorically the best.",
        rating: 5,
        verified: true,
      },
      {
        id: 2,
        name: 'James F.',
        role: 'Investment Banker',
        text: 'Edward has been cutting my hair for four years. I travel internationally but I always make time for Obsidian.',
        rating: 5,
        verified: true,
      },
      {
        id: 3,
        name: 'Alexander P.',
        role: 'Barrister',
        text: "Ibrahim's straight razor shave is the definition of luxury. Nothing else comes close.",
        rating: 5,
        verified: true,
      },
      {
        id: 4,
        name: 'Thomas R.',
        role: 'Private Equity',
        text: 'The Signature Experience is how every man should start his week. Non-negotiable.',
        rating: 5,
        verified: true,
      },
      {
        id: 5,
        name: 'Sebastian M.',
        role: 'Architect',
        text: 'Discreet, professional, and exceptional. Exactly what you want in a Mayfair establishment.',
        rating: 5,
        verified: true,
      },
    ],

    about: {
      headline: 'The Gentleman\'s Standard',
      subheadline: 'Not a barbershop. A grooming lounge.',
      body: "Obsidian was founded on the belief that grooming is not a transaction — it is a ritual. Situated in the heart of Mayfair, our lounge offers an environment of quiet luxury: unhurried appointments, curated products, and craftsmen who understand the difference between a good haircut and a perfect one.\n\nWe do not take walk-ins. We do not rush appointments. We do not compromise on quality. Every client who enters Obsidian leaves looking and feeling precisely as they should.",
      stats: [
        { value: '15+', label: 'Years of Mastery' },
        { value: '200+', label: 'Monthly Members' },
        { value: '5.0', label: 'Average Rating' },
        { value: '3', label: 'Master Craftsmen' },
      ],
    },

    booking: {
      headline: 'Request an Appointment',
      subheadline: 'We\'ll confirm within the hour',
      urgency: 'Limited appointments available this week',
      confirmationMessage: "Your appointment request has been received. We'll confirm via WhatsApp within the hour.",
      availableTimes: [
        '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
        '5:00 PM', '6:00 PM', '7:00 PM',
      ],
      todaySlots: [
        { time: '10:00 AM', label: 'Morning' },
        { time: '1:00 PM', label: 'Afternoon' },
        { time: '3:00 PM', label: 'Afternoon' },
        { time: '6:00 PM', label: 'Evening' },
      ],
    },

    gallery: {
      headline: 'The Craft',
      subheadline: 'Precision in every detail',
      items: [
        { id: 1, label: 'Master at Work', tag: 'Featured', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=800&q=85&auto=format&fit=crop' },
        { id: 2, label: 'Master Cut', tag: 'After', image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&q=80&auto=format&fit=crop' },
        { id: 3, label: 'Beard Design', tag: 'After', image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&h=600&q=80&auto=format&fit=crop' },
        { id: 4, label: 'Executive Shave', tag: 'After', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&q=80&auto=format&fit=crop' },
        { id: 5, label: 'Fade Detail', tag: 'After', image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&q=80&auto=format&fit=crop' },
        { id: 6, label: 'Lounge', tag: 'Atmosphere', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&q=80&auto=format&fit=crop' },
      ],
    },

    transformations: [
      {
        id: 'skin-fade',
        label: 'Skin Fade',
        description: 'From overgrown to razor sharp in one session.',
        before: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=680&q=80&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=680&q=80&auto=format&fit=crop',
      },
      {
        id: 'beard-lineup',
        label: 'Beard Line Up',
        description: 'Precision shaping that defines the jaw.',
        before: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=680&q=80&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&h=680&q=80&auto=format&fit=crop',
      },
      {
        id: 'full-groom',
        label: 'Full Grooming Package',
        description: 'Complete transformation, head to beard.',
        before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=680&q=80&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=680&q=80&auto=format&fit=crop',
      },
    ],
  },
}

export const config = profiles[ACTIVE_PROFILE]

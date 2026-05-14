import { motion } from 'framer-motion'
import { ChevronDown, Calendar, Scissors } from 'lucide-react'
import { config } from '../../config/business'
import Button from '../ui/Button'

// Expo-out bezier — fast start, smooth settle. More premium than ease-out.
const EXPO_OUT = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: EXPO_OUT },
})

const buttonHover = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.15, ease: 'easeOut' },
}

function handleBookingCta(bookingUrl) {
  if (bookingUrl) {
    window.open(bookingUrl, '_blank', 'noopener,noreferrer')
  } else {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function HeroSection() {
  const { hero, brand } = config

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Hero photo — slow Ken Burns zoom on mount */}
      <motion.img
        src={`/${hero.image}`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        fetchpriority="high"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: 'easeOut' }}
        style={{ willChange: 'transform' }}
      />

      {/* Bottom-up gradient — heavy at base for text legibility, fades to almost nothing at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Left-side gradient — anchors the text block without blacking out the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

      {/* Gold hairline at top */}
      <div className="absolute top-0 left-0 right-0 h-px gold-gradient opacity-50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-24 pt-40">
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.1)}
          className="text-gold text-[0.65rem] font-semibold tracking-[0.32em] uppercase mb-5"
        >
          {brand.city} Barbershop
        </motion.p>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.25)}
          className="font-heading font-bold leading-[1.06] mb-7 text-white"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
        >
          {hero.headline} {hero.headlineAccent}
          <br />
          <span className="gold-text">{hero.headlineEnd}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.42)}
          className="text-white/60 text-base md:text-lg max-w-lg leading-relaxed mb-10"
        >
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.56)}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
        >
          <motion.div {...buttonHover}>
            <Button
              size="lg"
              className="w-full sm:w-auto sm:min-w-[210px]"
              onClick={() => handleBookingCta(brand.bookingUrl)}
            >
              <Calendar size={16} />
              {hero.cta}
            </Button>
          </motion.div>

          <motion.div {...buttonHover}>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto sm:min-w-[210px]"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Scissors size={16} />
              {hero.ctaSecondary}
            </Button>
          </motion.div>
        </motion.div>

        {/* Urgency */}
        <motion.div
          {...fadeUp(0.68)}
          className="flex items-center gap-3 mt-8"
        >
          <div className="w-6 h-px bg-gold/50" />
          <p className="text-gold/60 text-[0.7rem] font-medium tracking-[0.18em] uppercase">
            {hero.urgency}
          </p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/40 hover:text-gold transition-colors duration-300"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <ChevronDown size={26} />
        </motion.div>
      </motion.button>
    </section>
  )
}

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { config } from '../../config/business'
import Button from '../ui/Button'
import TrustBadge from '../ui/TrustBadge'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
})

export default function HeroSection() {
  const { hero, brand } = config

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #C9A84C 0px,
            #C9A84C 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-[ellipse_80%_50%_at_50%_60%] from-[rgba(201,168,76,0.06)] to-transparent pointer-events-none" />

      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px gold-gradient opacity-60" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Trust Badges */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {hero.trustBadges.map((badge) => (
            <TrustBadge key={badge.label} icon={badge.icon} label={badge.label} />
          ))}
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-6"
        >
          {brand.city} Premium Barbershop
        </motion.p>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.3)}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 text-cream"
        >
          {hero.headline}{' '}
          <span className="gold-text">{hero.headlineAccent}</span>{' '}
          {hero.headlineEnd}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.45)}
          className="text-cream-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {hero.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.55)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {hero.cta}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {hero.ctaSecondary}
          </Button>
        </motion.div>

        {/* Urgency */}
        <motion.p
          {...fadeUp(0.65)}
          className="text-gold text-sm font-medium italic"
        >
          ⚡ {hero.urgency}
        </motion.p>
      </div>

      {/* Gold divider line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px gold-gradient opacity-40" />

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/40 hover:text-gold transition-colors"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  )
}

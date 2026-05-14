import { motion } from 'framer-motion'
import { config } from '../../config/business'
import SectionHeading from '../ui/SectionHeading'

export default function AboutSection() {
  const { about, brand } = config

  return (
    <section id="about" className="bg-black py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {about.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-charcoal border border-charcoal-border p-6 text-center"
                >
                  <p className="gold-text font-heading text-4xl font-bold mb-1">{stat.value}</p>
                  <p className="text-cream-muted text-xs tracking-wider uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Gold accent line */}
            <div className="mt-8 border-l-2 border-gold pl-5">
              <p className="text-cream-muted text-sm italic leading-relaxed">
                "Huntington's been good to us. We try to return the favor — one cut at a time."
              </p>
              <p className="text-gold text-xs mt-2 font-medium">— {brand.name}</p>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="About Us"
              title={about.headline}
              subtitle={about.subheadline}
              align="left"
              size="md"
            />
            {about.body.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-cream-muted leading-relaxed mb-4 text-sm md:text-base">
                {paragraph}
              </p>
            ))}

            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 flex items-center gap-2 text-gold font-medium text-sm hover:gap-4 transition-all duration-200"
            >
              Book your first cut →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

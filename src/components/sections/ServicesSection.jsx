import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'
import { config } from '../../config/business'

const EXPO_OUT = [0.22, 1, 0.36, 1]

function ServiceCard({ service, index }) {
  const handleBook = () => {
    window.dispatchEvent(new CustomEvent('prefill-service', { detail: service }))
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EXPO_OUT }}
      className="relative bg-black border border-charcoal-border hover:border-gold/40 transition-colors duration-300 group cursor-default flex flex-col overflow-hidden"
    >
      {/* Popular — left gold bar, always visible */}
      {service.popular && (
        <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-transparent via-gold to-transparent" />
      )}

      <div className="p-8 lg:p-10 flex flex-col flex-1">
        {/* Name + price row */}
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-heading text-xl font-semibold text-cream group-hover:text-gold transition-colors duration-200 leading-tight">
            {service.name}
          </h3>
          <span className="gold-text font-heading text-2xl font-bold whitespace-nowrap shrink-0 leading-tight">
            {service.currency}{service.price}
          </span>
        </div>

        {/* Popular label */}
        {service.popular && (
          <p className="text-gold/70 text-[0.6rem] font-bold tracking-[0.28em] uppercase mb-4">
            Most Booked
          </p>
        )}

        {/* Gold hairline */}
        <div className={`w-8 h-px bg-gold/40 ${service.popular ? '' : 'mt-4'} mb-5`} />

        {/* Duration */}
        <div className="flex items-center gap-1.5 mb-5">
          <Clock size={11} className="text-gold/60 shrink-0" />
          <span className="text-cream-muted text-[0.7rem] tracking-wide">{service.duration}</span>
        </div>

        {/* Description */}
        <p className="text-cream-muted text-sm leading-relaxed flex-1">
          {service.description}
        </p>

        {/* CTA */}
        <button
          onClick={handleBook}
          className="mt-7 pt-5 border-t border-charcoal-border flex items-center gap-1.5 text-gold text-sm font-medium hover:gap-3 transition-all duration-200 group/btn"
        >
          Book This Service
          <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const { services } = config

  return (
    <section id="services" className="bg-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial split header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EXPO_OUT }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12"
        >
          <div>
            <span className="text-gold text-[0.65rem] font-semibold tracking-[0.28em] uppercase block mb-3">
              The Menu
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream leading-tight">
              Our Services
            </h2>
          </div>
          <p className="text-cream-muted text-sm md:text-base leading-relaxed sm:text-right sm:max-w-[260px]">
            Straightforward pricing.<br className="hidden sm:block" /> No upsells, no surprises.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-border">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 text-cream-muted text-sm"
        >
          Questions? Call us at{' '}
          <a href={`tel:${config.brand.phone}`} className="text-gold hover:text-gold-light transition-colors">
            {config.brand.phone}
          </a>
        </motion.p>
      </div>
    </section>
  )
}

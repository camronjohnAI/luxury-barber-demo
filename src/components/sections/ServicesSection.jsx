import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'
import { config } from '../../config/business'
import SectionHeading from '../ui/SectionHeading'

function ServiceCard({ service, index }) {
  const handleBook = () => {
    window.dispatchEvent(new CustomEvent('prefill-service', { detail: service }))
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative bg-charcoal border border-charcoal-border hover:border-gold/40 transition-all duration-300 group cursor-default flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className="img-zoom relative h-[220px] shrink-0 bg-charcoal-light">
        {service.image ? (
          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full gold-gradient opacity-20" />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
        {/* Popular badge on image */}
        {service.popular && (
          <div className="absolute top-3 left-3 gold-gradient text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1">
            Most Popular
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7 md:p-8 lg:p-10 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-heading text-xl text-cream font-semibold group-hover:text-gold transition-colors leading-tight">
            {service.name}
          </h3>
          <span className="gold-text font-heading text-2xl font-bold whitespace-nowrap ml-3 shrink-0">
            {service.currency}{service.price}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-cream-muted text-xs mb-5">
          <Clock size={12} className="text-gold" />
          <span>{service.duration}</span>
        </div>

        <p className="text-cream-muted text-sm leading-relaxed mb-7 flex-1">
          {service.description}
        </p>

        <button
          onClick={handleBook}
          className="flex items-center gap-1.5 text-gold text-sm font-medium hover:gap-3 transition-all duration-200 group/btn mt-auto pt-4 border-t border-charcoal-border"
        >
          Book This Service
          <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const { services } = config

  return (
    <section id="services" className="bg-charcoal py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Services"
          subtitle="Every service is a craft. Performed by masters, priced for the experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 items-stretch">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-cream-muted text-sm mb-4">Not sure which service is right for you?</p>
          <a
            href={`https://wa.me/${config.brand.whatsapp}?text=Hi%2C%20I%27d%20like%20some%20advice%20on%20which%20service%20to%20choose`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light text-sm font-medium underline underline-offset-4 transition-colors"
          >
            Chat with us on WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { config } from '../../config/business'
import SectionHeading from '../ui/SectionHeading'
import StarRating from '../ui/StarRating'

function BarberCard({ barber, index }) {
  const handleBook = () => {
    window.dispatchEvent(new CustomEvent('prefill-barber', { detail: barber }))
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="bg-charcoal border border-charcoal-border p-8 text-center group hover:border-gold/30 transition-all duration-300"
    >
      {/* Avatar */}
      <div className="relative mx-auto mb-6 w-28 h-28">
        {barber.image ? (
          <div className="w-28 h-28 rounded-full overflow-hidden mx-auto img-zoom">
            <img
              src={barber.image}
              alt={barber.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-28 h-28 rounded-full gold-gradient flex items-center justify-center mx-auto">
            <span className="font-heading text-2xl font-bold text-black">{barber.initials}</span>
          </div>
        )}
        {/* Experience badge */}
        <div className="absolute -bottom-1 -right-1 bg-black border border-gold text-gold text-[9px] font-bold px-2 py-0.5 tracking-wider">
          {barber.experience}
        </div>
      </div>

      <h3 className="font-heading text-xl text-cream font-semibold mb-1.5">{barber.name}</h3>
      <p className="text-gold text-xs font-medium tracking-wider uppercase mb-3">{barber.title}</p>
      <p className="text-cream-muted text-xs mb-4">{barber.specialty}</p>

      <div className="flex items-center justify-center gap-2 mb-5">
        <StarRating rating={barber.rating} size={12} />
        <span className="text-cream-muted text-xs">({barber.reviews} reviews)</span>
      </div>

      <p className="text-cream-muted text-sm leading-relaxed mb-7">{barber.bio}</p>

      <button
        onClick={handleBook}
        className="flex items-center justify-center gap-1.5 text-gold text-sm font-medium mx-auto hover:gap-3 transition-all duration-200 group/btn"
      >
        Book with {barber.name.split(' ')[0]}
        <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
      </button>
    </motion.div>
  )
}

export default function TeamSection() {
  return (
    <section id="team" className="bg-charcoal py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Your Barbers"
          title="Meet the Team"
          subtitle="Three barbers. All with regulars who ask for them by name. Pick yours."
          size="md"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.barbers.map((barber, i) => (
            <BarberCard key={barber.id} barber={barber} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

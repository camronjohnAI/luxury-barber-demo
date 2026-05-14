import { motion } from 'framer-motion'
import { Quote, BadgeCheck } from 'lucide-react'
import { config } from '../../config/business'
import SectionHeading from '../ui/SectionHeading'
import StarRating from '../ui/StarRating'

function TestimonialCard({ review, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="luxury-card bg-charcoal border border-charcoal-border relative hover:border-gold/30 transition-colors duration-300 h-full flex flex-col"
    >
      <Quote size={28} className="text-gold/20 absolute top-5 right-5" />
      <StarRating rating={review.rating} showNumber={false} size={14} />
      <p className="text-cream-muted text-base leading-[1.7] mt-5 flex-1 italic">
        "{review.text}"
      </p>
      <div className="flex items-center justify-between mt-6 pt-5 border-t border-charcoal-border/60">
        <div>
          <p className="text-cream text-sm font-semibold">{review.name}</p>
          <p className="text-cream-muted text-xs mt-1">{review.role}</p>
        </div>
        {review.verified && (
          <div className="flex items-center gap-1 text-gold text-xs shrink-0 ml-3">
            <BadgeCheck size={14} />
            <span>Verified</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  const { testimonials } = config

  return (
    <section id="testimonials" className="bg-charcoal py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Real Reviews"
          title="What People Are Saying"
          size="md"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((review, i) => (
            <TestimonialCard key={review.id} review={review} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="gold-gradient text-black font-semibold px-8 py-4 text-base tracking-wide hover:opacity-90 transition-opacity"
          >
            Book Your Cut
          </button>
        </motion.div>
      </div>
    </section>
  )
}

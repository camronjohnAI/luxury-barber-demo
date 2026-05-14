import { motion } from 'framer-motion'
import { Quote, BadgeCheck, Star } from 'lucide-react'
import { config } from '../../config/business'
import SectionHeading from '../ui/SectionHeading'
import StarRating from '../ui/StarRating'

const EXPO_OUT = [0.22, 1, 0.36, 1]

function TestimonialCard({ review, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EXPO_OUT }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="luxury-card bg-black border border-charcoal-border relative hover:border-gold/30 transition-colors duration-300 h-full flex flex-col"
    >
      <Quote size={24} className="text-gold/15 absolute top-5 right-5" />
      <StarRating rating={review.rating} showNumber={false} size={13} />
      <p className="text-cream-muted text-sm leading-[1.75] mt-5 flex-1">
        "{review.text}"
      </p>
      <div className="flex items-center justify-between mt-6 pt-5 border-t border-charcoal-border/60">
        <div>
          <p className="text-cream text-sm font-semibold">{review.name}</p>
          <p className="text-cream-muted text-xs mt-0.5">{review.role}</p>
        </div>
        {review.verified && (
          <div className="flex items-center gap-1 text-gold/70 text-xs shrink-0 ml-3">
            <BadgeCheck size={13} />
            <span className="tracking-wide">Verified</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  const { testimonials, about } = config

  return (
    <section id="testimonials" className="bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Real Reviews"
          title="What People Are Saying"
          size="md"
        />

        {/* Social proof stats — anchors the section before the cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EXPO_OUT }}
          className="flex flex-col sm:flex-row items-center justify-center gap-0 mb-12 border border-charcoal-border bg-black"
        >
          {about.stats.slice(0, 3).map((stat, i) => (
            <div key={stat.label} className="flex-1 flex flex-col items-center justify-center py-6 px-4 text-center border-b sm:border-b-0 sm:border-r border-charcoal-border last:border-0">
              <p className="gold-text font-heading text-3xl md:text-4xl font-bold leading-none mb-1.5">
                {stat.value}
              </p>
              <p className="text-cream-muted text-[0.65rem] font-medium tracking-[0.2em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
          <div className="flex-1 flex flex-col items-center justify-center py-6 px-4 text-center">
            <div className="flex gap-1 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-gold fill-gold" style={{ fill: 'currentColor' }} />
              ))}
            </div>
            <p className="text-cream-muted text-[0.65rem] font-medium tracking-[0.2em] uppercase">
              Consistently Rated
            </p>
          </div>
        </motion.div>

        {/* Review cards */}
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
            className="gold-gradient text-black font-semibold px-8 py-4 text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Book Your Cut
          </button>
        </motion.div>
      </div>
    </section>
  )
}

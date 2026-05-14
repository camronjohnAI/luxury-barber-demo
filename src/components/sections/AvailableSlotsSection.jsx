import { motion } from 'framer-motion'
import { Clock, Zap } from 'lucide-react'
import { config } from '../../config/business'
import SectionHeading from '../ui/SectionHeading'

export default function AvailableSlotsSection() {
  const { booking } = config
  const slots = booking.todaySlots ?? []

  const claimSlot = (time) => {
    window.dispatchEvent(new CustomEvent('prefill-time', { detail: time }))
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="availability" className="bg-charcoal py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Today's Openings"
          title="Open Slots"
          subtitle="Tap a time to pre-fill your booking form."
          size="md"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {slots.map((slot, i) => (
            <motion.div
              key={slot.time}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="luxury-card bg-black border border-charcoal-border text-center hover:border-gold/40 transition-colors duration-300 flex flex-col items-center"
            >
              <Clock size={16} className="text-gold mb-3" />
              <p className="text-cream font-semibold text-lg leading-tight">{slot.time}</p>
              <p className="text-cream-muted text-xs mt-1 mb-5">{slot.label}</p>
              <button
                onClick={() => claimSlot(slot.time)}
                className="w-full gold-gradient text-black text-[11px] font-bold uppercase tracking-widest py-2.5 hover:opacity-90 transition-opacity"
              >
                Claim Slot
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-8 flex items-center justify-center gap-2 text-cream-muted/60 text-xs"
        >
          <Zap size={12} className="text-gold" />
          <span>Slots reset daily — times shown are for today only.</span>
        </motion.div>
      </div>
    </section>
  )
}

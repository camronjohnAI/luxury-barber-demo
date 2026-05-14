import { motion } from 'framer-motion'
import { config } from '../../config/business'

const EXPO_OUT = [0.22, 1, 0.36, 1]

const steps = [
  {
    number: '01',
    label: 'Consultation',
    title: 'We Talk First.',
    body: "Sit down. Tell us what you want — show us a photo if you have one. We'll be straight with you about what'll actually look good on your head. No assumptions before the clippers come out.",
    detail: 'No pressure. No guesswork.',
    featured: false,
  },
  {
    number: '02',
    label: 'The Cut',
    title: 'We Move With Intention.',
    body: "Skin fade, taper, classic cut, beard line-up — whatever you're in for, we execute it clean. Every blend checked, every angle right. We don't rush, and we don't cut corners.",
    detail: '30–75 min depending on service.',
    featured: true,
  },
  {
    number: '03',
    label: 'Finish & Style',
    title: 'You Walk Out Right.',
    body: "Hot towel, product if you want it, a final look in the mirror. You leave looking sharp — not just passable for today. That's the standard every time you sit in the chair.",
    detail: 'Hot towel included on all cuts.',
    featured: false,
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-black">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: EXPO_OUT }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-gold text-[0.65rem] font-semibold tracking-[0.28em] uppercase mb-4">
            What to Expect
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-cream mb-4">
            The Cut Experience
          </h2>
          <div className="section-divider" />
          <p className="text-cream-muted text-base md:text-lg mt-5 max-w-xl leading-relaxed">
            Every appointment runs the same way. Clean, efficient, and focused on getting your cut exactly right.
          </p>
        </motion.div>

        {/* Step cards — gap-px shows the parent border color as a 1px separator */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal-border">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: i * 0.14, ease: EXPO_OUT }}
              className={`relative overflow-hidden group flex flex-col p-10 md:p-12 lg:p-14 ${
                step.featured ? 'bg-charcoal-light' : 'bg-black'
              }`}
            >
              {/* Watermark number — barely visible depth element */}
              <span
                className="absolute -top-6 -right-3 font-heading font-bold leading-none select-none pointer-events-none text-gold"
                style={{ fontSize: 'clamp(6rem, 12vw, 9rem)', opacity: 0.04 }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Left accent bar — slides in on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Step tag */}
              <p className="text-gold text-[0.6rem] font-bold tracking-[0.32em] uppercase mb-6 relative z-10">
                {step.number} — {step.label}
              </p>

              {/* Title */}
              <h3 className="font-heading text-2xl lg:text-[1.65rem] font-bold text-cream leading-snug mb-5 relative z-10">
                {step.title}
              </h3>

              {/* Short gold line */}
              <div className="w-8 h-px bg-gold/50 mb-6 relative z-10" />

              {/* Body copy */}
              <p className="text-cream-muted text-sm md:text-[0.9rem] leading-relaxed flex-1 relative z-10">
                {step.body}
              </p>

              {/* Footer detail */}
              <div className="mt-8 pt-5 border-t border-charcoal-border relative z-10">
                <p className="text-gold/60 text-[0.65rem] font-medium tracking-[0.18em] uppercase">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bar — mt-px connects it to the card grid as one unit */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: EXPO_OUT }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-px bg-charcoal border-t border-charcoal-border px-10 md:px-12 lg:px-14 py-7"
        >
          <div>
            <p className="text-cream text-sm font-semibold mb-0.5">
              Ready to sit in the chair?
            </p>
            <p className="text-cream-muted text-xs">{config.booking.urgency}</p>
          </div>
          <button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="gold-gradient text-black font-semibold px-7 py-3 text-sm tracking-wide hover:opacity-90 transition-opacity shrink-0 whitespace-nowrap"
          >
            Book Your Appointment
          </button>
        </motion.div>

      </div>
    </section>
  )
}

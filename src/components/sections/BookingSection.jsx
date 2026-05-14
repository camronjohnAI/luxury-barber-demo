import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Clock, Star, Zap } from 'lucide-react'
import { config } from '../../config/business'
import { useBooking } from '../../hooks/useBooking'
import BookingForm from '../booking/BookingForm'
import BookingConfirmation from '../booking/BookingConfirmation'
import SectionHeading from '../ui/SectionHeading'

const trustPoints = [
  { icon: Shield, text: 'No deposit required' },
  { icon: Clock, text: 'Book in under 30 seconds' },
  { icon: Star, text: '900+ five-star reviews' },
  { icon: Zap, text: 'Instant confirmation' },
]

export default function BookingSection() {
  const { formData, updateField, prefillService, prefillBarber, prefillTime, submitBooking, status, errorMessage, reset } = useBooking()

  useEffect(() => {
    const onService = (e) => prefillService(e.detail)
    const onBarber = (e) => prefillBarber(e.detail)
    const onTime = (e) => prefillTime(e.detail)
    window.addEventListener('prefill-service', onService)
    window.addEventListener('prefill-barber', onBarber)
    window.addEventListener('prefill-time', onTime)
    return () => {
      window.removeEventListener('prefill-service', onService)
      window.removeEventListener('prefill-barber', onBarber)
      window.removeEventListener('prefill-time', onTime)
    }
    // prefill* functions use functional setState so stale-closure is not a concern
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const waUrl = `https://wa.me/${config.brand.whatsapp}?text=${encodeURIComponent(
    `Hi, I'd like to book an appointment at ${config.brand.name}. My preferred time is...`
  )}`

  return (
    <section id="booking" className="bg-black py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Book Online"
          title={config.booking.headline}
          subtitle={config.booking.subheadline}
          size="md"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — trust copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="luxury-card bg-charcoal border border-charcoal-border flex flex-col justify-center"
          >
            <div className="mb-8">
              <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Why Book With Us
              </p>
              <h3 className="font-heading text-3xl md:text-4xl text-cream font-bold mb-4 leading-tight">
                Your time is{' '}
                <span className="gold-text">valuable.</span>
                <br />We treat it that way.
              </h3>
              <p className="text-cream-muted leading-relaxed">
                {config.booking.urgency}
              </p>
            </div>

            <ul className="space-y-5 mb-8">
              {trustPoints.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 gold-gradient rounded-sm flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-black" />
                  </div>
                  <span className="text-cream text-sm">{text}</span>
                </li>
              ))}
            </ul>

            <div className="border border-gold/30 bg-gold-dim p-5 md:p-6">
              <p className="text-gold text-sm font-medium">
                ⚡ {config.hero.urgency}
              </p>
            </div>
          </motion.div>

          {/* Right — form or confirmation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="luxury-card bg-charcoal border border-charcoal-border shadow-xl shadow-black/50 min-w-0 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <BookingConfirmation formData={formData} onReset={reset} />
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <BookingForm
                    formData={formData}
                    updateField={updateField}
                    onSubmit={submitBooking}
                    status={status}
                    errorMessage={errorMessage}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-cream-muted text-sm mt-6"
        >
          Prefer to call?{' '}
          <a href={`tel:${config.brand.phone}`} className="text-gold hover:text-gold-light transition-colors">
            {config.brand.phone}
          </a>
        </motion.p>
      </div>
    </section>
  )
}

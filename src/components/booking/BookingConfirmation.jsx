import { motion } from 'framer-motion'
import { CheckCircle2, MessageSquare, CalendarCheck, Clock, User, Scissors, Phone } from 'lucide-react'
import { config } from '../../config/business'
import Button from '../ui/Button'

function formatDate(dateStr) {
  if (!dateStr) return dateStr
  const [year, month, day] = dateStr.split('-')
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`
}

export default function BookingConfirmation({ formData, onReset }) {
  const barberLabel = formData.barberName || 'No preference'
  const displayDate = formatDate(formData.date)

  const smsBody = encodeURIComponent(
    `Hi, I just submitted a booking request at ${config.brand.name}. ` +
    `${formData.serviceName} at ${formData.time} on ${displayDate}. ` +
    `Name: ${formData.customerName}. Phone: ${formData.customerPhone}.`
  )
  const smsUrl = config.brand.sms ? `sms:${config.brand.sms}?body=${smsBody}` : null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-center py-8"
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
        className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle2 size={32} className="text-black" />
      </motion.div>

      <h3 className="font-heading text-2xl text-cream font-bold mb-2">Booking Received</h3>
      <p className="text-cream-muted text-sm mb-6 max-w-xs mx-auto leading-relaxed">
        We've got your request. Text us to confirm your slot — your details will be pre-filled.
      </p>

      {/* Summary */}
      <div className="bg-black border border-charcoal-border p-5 mb-6 text-left space-y-3">
        <BookingRow icon={<Scissors size={13} className="text-gold" />}  label="Service" value={formData.serviceName} />
        <BookingRow icon={<User size={13} className="text-gold" />}      label="Barber"  value={barberLabel} />
        <BookingRow icon={<CalendarCheck size={13} className="text-gold" />} label="Date" value={displayDate} />
        <BookingRow icon={<Clock size={13} className="text-gold" />}     label="Time"    value={formData.time} />
        <BookingRow icon={<User size={13} className="text-gold" />}      label="Name"    value={formData.customerName} />
        <BookingRow icon={<Phone size={13} className="text-gold" />}     label="Phone"   value={formData.customerPhone} />
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        {smsUrl && (
          <a href={smsUrl} className="flex-1">
            <Button className="w-full gap-2">
              <MessageSquare size={16} />
              Text to Confirm
            </Button>
          </a>
        )}
        <Button variant="secondary" className="flex-1" onClick={onReset}>
          Book Another
        </Button>
      </div>

      {smsUrl && (
        <p className="text-cream-muted/40 text-xs mt-5">
          Tap "Text to Confirm" to send us your details — pre-filled and ready to go.
        </p>
      )}
    </motion.div>
  )
}

function BookingRow({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between text-sm gap-4">
      <span className="text-cream-muted flex items-center gap-1.5 shrink-0">{icon}{label}</span>
      <span className="text-cream font-medium text-right">{value}</span>
    </div>
  )
}

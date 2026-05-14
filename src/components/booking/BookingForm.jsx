import { config } from '../../config/business'
import Button from '../ui/Button'

const inputClass =
  'w-full min-w-0 bg-charcoal-light border border-charcoal-border text-cream placeholder-cream-muted/40 px-4 py-4 text-sm focus:outline-none focus:border-gold transition-colors duration-200'

const labelClass = 'block text-gold text-xs font-semibold tracking-widest uppercase mb-2'

function Field({ label, children, required }) {
  return (
    <div>
      <label className={labelClass}>
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {children}
    </div>
  )
}

export default function BookingForm({ formData, updateField, onSubmit, status, errorMessage }) {
  const { services, barbers, booking } = config
  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className="booking-form space-y-6">
      {/* Service */}
      <Field label="Service" required>
        <select
          value={formData.serviceId}
          onChange={(e) => {
            const svc = services.find((s) => s.id === e.target.value)
            updateField('serviceId', e.target.value)
            updateField('serviceName', svc ? svc.name : '')
          }}
          required
          className={inputClass}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name} — {s.currency}{s.price} ({s.duration})
            </option>
          ))}
        </select>
      </Field>

      {/* Barber */}
      <Field label="Barber">
        <select
          value={formData.barberId}
          onChange={(e) => {
            const b = barbers.find((b) => b.id === e.target.value)
            updateField('barberId', e.target.value)
            updateField('barberName', b ? b.name : '')
          }}
          className={inputClass}
        >
          <option value="">No preference</option>
          {barbers.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name} — {b.specialty}
            </option>
          ))}
        </select>
      </Field>

      {/* Date & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Date" required>
          <input
            type="date"
            value={formData.date}
            min={today}
            onChange={(e) => updateField('date', e.target.value)}
            required
            className={inputClass}
            style={{ colorScheme: 'dark' }}
          />
        </Field>
        <Field label="Time" required>
          <select
            value={formData.time}
            onChange={(e) => updateField('time', e.target.value)}
            required
            className={inputClass}
          >
            <option value="">Select time</option>
            {booking.availableTimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Name */}
      <Field label="Full Name" required>
        <input
          type="text"
          value={formData.customerName}
          onChange={(e) => updateField('customerName', e.target.value)}
          placeholder="Your full name"
          required
          className={inputClass}
        />
      </Field>

      {/* Phone */}
      <Field label="Phone Number" required>
        <input
          type="tel"
          value={formData.customerPhone}
          onChange={(e) => updateField('customerPhone', e.target.value)}
          placeholder="+971 50 000 0000"
          required
          className={inputClass}
        />
      </Field>

      {/* Email (optional) */}
      <Field label="Email (Optional)">
        <input
          type="email"
          value={formData.customerEmail}
          onChange={(e) => updateField('customerEmail', e.target.value)}
          placeholder="your@email.com"
          className={inputClass}
        />
      </Field>

      {/* Error */}
      {status === 'error' && (
        <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 px-4 py-3">
          {errorMessage}
        </p>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        loading={status === 'submitting'}
        className="w-full mt-2"
      >
        {status === 'submitting' ? 'Confirming...' : 'Confirm Booking'}
      </Button>

      <p className="text-cream-muted/50 text-xs text-center">
        Book in under 30 seconds. No deposit required.
      </p>
    </form>
  )
}

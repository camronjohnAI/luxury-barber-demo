import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from 'lucide-react'
import { config } from '../../config/business'
import SectionHeading from '../ui/SectionHeading'

export default function ContactSection() {
  const { brand, hours } = config
  const waUrl = `https://wa.me/${brand.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20booking%20at%20${encodeURIComponent(brand.name)}`

  return (
    <section id="contact" className="bg-charcoal py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Find Us"
          title="Location & Contact"
          subtitle="We'd love to see you. Come in, or reach out."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="luxury-card bg-black border border-charcoal-border h-full flex flex-col"
          >
            <h3 className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">Contact</h3>
            <ul className="space-y-5">
              <ContactItem icon={MapPin}>{brand.address}</ContactItem>
              <ContactItem icon={Phone}>
                <a href={`tel:${brand.phone}`} className="hover:text-gold transition-colors">{brand.phone}</a>
              </ContactItem>
              {brand.email && (
                <ContactItem icon={Mail}>
                  <a href={`mailto:${brand.email}`} className="hover:text-gold transition-colors">{brand.email}</a>
                </ContactItem>
              )}
              {brand.instagram && (
                <ContactItem icon={ExternalLink}>
                  <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                    Instagram
                  </a>
                </ContactItem>
              )}
            </ul>

            <div className="mt-auto pt-6">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', fontSize: '13px', fontWeight: '600', background: '#25D366', color: '#fff', whiteSpace: 'nowrap', transition: 'opacity 0.2s' }}
                onMouseOver={e => e.currentTarget.style.opacity = '0.88'}
                onMouseOut={e => e.currentTarget.style.opacity = '1'}
              >
                <MessageCircle size={15} />
                Message on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="luxury-card bg-black border border-charcoal-border h-full flex flex-col"
          >
            <h3 className="text-gold text-xs font-semibold tracking-widest uppercase mb-6 flex items-center gap-2">
              <Clock size={12} /> Opening Hours
            </h3>
            <ul className="space-y-4 flex-1">
              {hours.map((h, i) => (
                <li key={i} className="flex items-center justify-between border-b border-charcoal-border pb-4 last:border-0 last:pb-0">
                  <span className="text-cream-muted text-sm">{h.day}</span>
                  <span className={`text-sm font-medium ${h.time === 'Closed' ? 'text-cream-muted/50' : 'text-cream'}`}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black border border-charcoal-border overflow-hidden h-full"
            style={{ minHeight: '320px' }}
          >
            {brand.mapEmbedUrl ? (
              <iframe
                src={brand.mapEmbedUrl}
                className="w-full h-full"
                style={{ minHeight: '320px', border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location map"
              />
            ) : (
              <a
                href={brand.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center h-full p-10 text-center hover:bg-charcoal-light transition-colors"
                style={{ minHeight: '320px' }}
              >
                <MapPin size={36} className="text-gold mb-4" />
                <p className="text-cream text-sm font-semibold mb-2">{brand.name}</p>
                <p className="text-cream-muted text-xs mb-6 leading-relaxed">{brand.address}</p>
                <span className="text-gold text-xs border border-gold/40 px-4 py-2 hover:bg-gold/10 transition-colors">
                  Open in Google Maps →
                </span>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon: Icon, children }) {
  return (
    <li className="flex items-start gap-3">
      <Icon size={14} className="text-gold mt-0.5 shrink-0" />
      <span className="text-cream-muted text-sm leading-snug">{children}</span>
    </li>
  )
}

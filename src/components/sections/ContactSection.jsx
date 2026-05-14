import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react'
import { config } from '../../config/business'
import SectionHeading from '../ui/SectionHeading'

export default function ContactSection() {
  const { brand, hours } = config

  const handleBook = () => {
    if (brand.bookingUrl) {
      window.open(brand.bookingUrl, '_blank', 'noopener,noreferrer')
    } else {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="contact" className="bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Find Us"
          title="Location & Hours"
          subtitle={`Come find us at ${brand.address.split(',')[0]} — walk-ins welcome, appointments preferred.`}
          size="md"
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
              {brand.branches?.length > 0 ? (
                brand.branches.map((branch) => (
                  <Fragment key={branch.name}>
                    <li className="pb-1">
                      <p className="text-gold text-[11px] font-bold uppercase tracking-wider mb-2">{branch.name}</p>
                      <div className="space-y-2">
                        <ContactItem icon={MapPin}>
                          <a href={branch.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">{branch.address}</a>
                        </ContactItem>
                        <ContactItem icon={Phone}>
                          <a href={`tel:${branch.phone}`} className="hover:text-gold transition-colors">{branch.phone}</a>
                        </ContactItem>
                      </div>
                    </li>
                  </Fragment>
                ))
              ) : (
                <>
                  <ContactItem icon={MapPin}>{brand.address}</ContactItem>
                  <ContactItem icon={Phone}>
                    <a href={`tel:${brand.phone}`} className="hover:text-gold transition-colors">{brand.phone}</a>
                  </ContactItem>
                </>
              )}
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

            <div className="mt-auto pt-6 flex flex-col gap-3">
              <button
                onClick={handleBook}
                className="gold-gradient text-black text-sm font-semibold px-5 py-3 hover:opacity-90 transition-opacity"
              >
                Book Appointment
              </button>
              {brand.sms && (
                <a
                  href={`sms:${brand.sms}`}
                  className="flex items-center justify-center gap-2 border border-charcoal-border hover:border-gold/50 text-cream text-sm font-medium px-5 py-3 transition-colors duration-200"
                >
                  <MessageSquare size={13} className="text-gold" />
                  Text the Shop
                </a>
              )}
              {brand.instagram && (
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-gold/60 hover:text-gold text-xs font-medium py-2 transition-colors duration-200"
                >
                  <ExternalLink size={12} />
                  View on Instagram
                </a>
              )}
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
            ) : brand.branches?.length > 0 ? (
              <div className="flex flex-col justify-center h-full p-8 gap-6" style={{ minHeight: '320px' }}>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={18} className="text-gold shrink-0" />
                  <p className="text-cream text-sm font-semibold">Our Locations</p>
                </div>
                {brand.branches.map((branch) => (
                  <a
                    key={branch.name}
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-charcoal-border hover:border-gold/40 p-4 transition-colors duration-200 hover:bg-charcoal-light group"
                  >
                    <p className="text-gold text-[11px] font-bold uppercase tracking-wider mb-1">{branch.name}</p>
                    <p className="text-cream-muted text-xs leading-relaxed mb-3">{branch.address}</p>
                    <span className="text-gold text-[11px] font-medium group-hover:underline">
                      Open in Google Maps →
                    </span>
                  </a>
                ))}
              </div>
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

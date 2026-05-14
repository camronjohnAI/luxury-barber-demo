import { ExternalLink, Phone, MapPin } from 'lucide-react'
import { config } from '../../config/business'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-charcoal-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex flex-col leading-none mb-4">
              {config.brand.logo ? (
                <img src={`/${config.brand.logo}`} alt={config.brand.name} className="h-12 w-auto max-w-[180px] object-contain self-start" />
              ) : (
                <>
                  <span className="font-heading text-lg font-bold tracking-[0.1em] text-white uppercase">
                    {config.brand.wordmarkLine1}
                  </span>
                  <span className="text-[0.55rem] tracking-[0.38em] text-gold uppercase font-semibold mt-0.5">
                    {config.brand.wordmarkLine2}
                  </span>
                </>
              )}
            </a>
            <p className="text-cream-muted text-sm leading-relaxed">{config.brand.tagline}</p>
            {config.brand.instagram && (
              <a
                href={config.brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-gold hover:text-gold-light text-sm transition-colors"
              >
                <ExternalLink size={14} />
                Instagram
              </a>
            )}
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-cream text-sm font-semibold tracking-widest uppercase mb-4">Hours</h4>
            <ul className="space-y-2">
              {config.hours.map((h, i) => (
                <li key={i} className="flex justify-between text-sm">
                  <span className="text-cream-muted">{h.day}</span>
                  <span className="text-cream">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream text-sm font-semibold tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="text-cream-muted text-sm">{config.brand.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold shrink-0" />
                <a href={`tel:${config.brand.phone}`} className="text-cream-muted hover:text-gold text-sm transition-colors">
                  {config.brand.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream-muted text-xs">
            © {year} {config.brand.name}. All rights reserved.
          </p>
          <p className="text-charcoal-border text-xs">
            {config.brand.address}
          </p>
        </div>
      </div>
    </footer>
  )
}

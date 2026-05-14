import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { config } from '../../config/business'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Book', href: '#booking' },
  { label: 'Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-charcoal-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none group" aria-label={config.brand.name}>
            {config.brand.logo ? (
              <img src={`/${config.brand.logo}`} alt={config.brand.name} className="h-12 w-auto max-w-[160px] object-contain" />
            ) : (
              <>
                <span className="font-heading text-lg md:text-xl font-bold tracking-[0.1em] text-white uppercase group-hover:text-gold transition-colors duration-200">
                  {config.brand.wordmarkLine1}
                </span>
                <span className="text-[0.55rem] tracking-[0.38em] text-gold uppercase font-semibold mt-0.5">
                  {config.brand.wordmarkLine2}
                </span>
              </>
            )}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream-muted hover:text-gold text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="sm" onClick={() => {
              if (config.brand.bookingUrl) {
                window.open(config.brand.bookingUrl, '_blank', 'noopener,noreferrer')
              } else {
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
              }
            }}>
              Book Now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cream p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-black/98 border-b border-charcoal-border"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-cream-muted hover:text-gold text-base font-medium py-2 border-b border-charcoal-border last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-2 w-full"
                onClick={() => {
                  setMenuOpen(false)
                  if (config.brand.bookingUrl) {
                    window.open(config.brand.bookingUrl, '_blank', 'noopener,noreferrer')
                  } else {
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Book Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

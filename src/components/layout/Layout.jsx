import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import { config } from '../../config/business'

export default function Layout({ children }) {
  const waUrl = `https://wa.me/${config.brand.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20${encodeURIComponent(config.brand.name)}`

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>{children}</main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-4 md:bottom-8 md:right-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-xl shadow-black/40 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={24} fill="white" />
      </motion.a>

      {/* Sticky Mobile Book Now Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <button
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full gold-gradient text-black font-bold text-base py-4 tracking-wide"
        >
          Book Now — {config.hero.urgency}
        </button>
      </div>
    </div>
  )
}

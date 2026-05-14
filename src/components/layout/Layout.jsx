import Navbar from './Navbar'
import Footer from './Footer'
import { config } from '../../config/business'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>{children}</main>
      <Footer />

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

import Layout from './components/layout/Layout'
import HeroSection from './components/sections/HeroSection'
import ServicesSection from './components/sections/ServicesSection'
import AvailableSlotsSection from './components/sections/AvailableSlotsSection'
import BookingSection from './components/sections/BookingSection'
import TeamSection from './components/sections/TeamSection'
import GallerySection from './components/sections/GallerySection'
import TransformationsSection from './components/sections/TransformationsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AvailableSlotsSection />
      <BookingSection />
      <TeamSection />
      <GallerySection />
      <TransformationsSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  )
}

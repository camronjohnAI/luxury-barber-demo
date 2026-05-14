import Layout from './components/layout/Layout'
import HeroSection from './components/sections/HeroSection'
import ServicesSection from './components/sections/ServicesSection'
import AvailableSlotsSection from './components/sections/AvailableSlotsSection'
import BookingSection from './components/sections/BookingSection'
import TeamSection from './components/sections/TeamSection'
import GallerySection from './components/sections/GallerySection'
import TransformationsSection from './components/sections/TransformationsSection'
import ExperienceSection from './components/sections/ExperienceSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TransformationsSection />
      <ExperienceSection />
      <TeamSection />
      <TestimonialsSection />
      <AboutSection />
      <AvailableSlotsSection />
      <BookingSection />
      <ContactSection />
    </Layout>
  )
}

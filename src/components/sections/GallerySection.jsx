import { motion } from 'framer-motion'
import { config } from '../../config/business'
import SectionHeading from '../ui/SectionHeading'

function GalleryItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="relative overflow-hidden border border-charcoal-border hover:border-gold/40 transition-all duration-300 bg-charcoal cursor-pointer group img-zoom"
    >
      <div className="h-[280px] md:h-[340px]">
        {item.image ? (
          <img
            src={item.image}
            alt={item.label}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full gold-gradient opacity-20" />
        )}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Tag */}
      <div className="absolute top-3 left-3 bg-gold/90 text-black text-[10px] font-bold px-2 py-0.5 tracking-widest uppercase">
        {item.tag}
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-cream font-heading text-base font-semibold">{item.label}</p>
        <p className="text-cream-muted text-xs mt-0.5">{config.brand.name}</p>
      </div>
    </motion.div>
  )
}

export default function GallerySection() {
  const { gallery } = config
  const items = gallery.items.slice(0, 6)

  return (
    <section id="gallery" className="bg-black py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title={gallery.headline}
          subtitle={gallery.subheadline}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <GalleryItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

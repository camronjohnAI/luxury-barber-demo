import { motion } from 'framer-motion'
import { config } from '../../config/business'

const EXPO_OUT = [0.22, 1, 0.36, 1]

function GalleryItem({ item, index, tall = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: EXPO_OUT }}
      className={`relative overflow-hidden border border-charcoal-border group img-zoom cursor-pointer ${
        tall ? 'h-[360px] md:h-[424px]' : 'h-[200px]'
      }`}
    >
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

      {/* Overlay — slides in on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Tag — fades in on hover */}
      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-black/75 text-gold text-[10px] font-bold px-2.5 py-1 tracking-widest uppercase border border-gold/30">
          {item.tag}
        </span>
      </div>

      {/* Label — slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
        <p className="text-cream font-heading text-sm font-semibold leading-tight">{item.label}</p>
      </div>
    </motion.div>
  )
}

export default function GallerySection() {
  const { gallery } = config
  const items = gallery.items.slice(0, 5)
  const [featured, ...rest] = items

  return (
    <section id="gallery" className="bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial split header — breaks the centered-heading pattern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EXPO_OUT }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12"
        >
          <div>
            <span className="text-gold text-[0.65rem] font-semibold tracking-[0.28em] uppercase block mb-3">
              Portfolio
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream leading-tight">
              {gallery.headline}
            </h2>
          </div>
          <p className="text-cream-muted text-sm md:text-base leading-relaxed sm:text-right sm:max-w-[240px]">
            {gallery.subheadline}
          </p>
        </motion.div>

        {/* Featured layout: large left — 2×2 right */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Large featured photo */}
          <div className="md:w-[42%] shrink-0">
            <GalleryItem item={featured} index={0} tall />
          </div>

          {/* 2×2 grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {rest.map((item, i) => (
              <GalleryItem key={item.id} item={item} index={i + 1} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

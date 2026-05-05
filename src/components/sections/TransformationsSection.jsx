import { motion } from 'framer-motion'
import { config } from '../../config/business'
import SectionHeading from '../ui/SectionHeading'
import BeforeAfterSlider from '../ui/BeforeAfterSlider'

export default function TransformationsSection() {
  const { transformations } = config

  return (
    <section id="transformations" className="bg-charcoal py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Transformations"
          title="Before & After"
          subtitle="Drag to reveal the result. Results speak for themselves."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="overflow-hidden border border-charcoal-border hover:border-gold/40 transition-colors duration-300"
            >
              <BeforeAfterSlider before={t.before} after={t.after} height={340} />
              <div className="bg-black px-5 py-4">
                <p className="text-cream font-heading text-base font-semibold">{t.label}</p>
                <p className="text-cream-muted text-xs mt-1 leading-relaxed">{t.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-cream-muted/50 text-xs mt-10 tracking-wide"
        >
          ← Drag the handle left or right to compare →
        </motion.p>
      </div>
    </section>
  )
}

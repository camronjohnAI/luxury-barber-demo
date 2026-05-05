export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false }) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <div className={`flex flex-col ${alignClass} mb-16`}>
      {eyebrow && (
        <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 ${light ? 'text-black' : 'text-cream'}`}>
        {title}
      </h2>
      <div className={`section-divider ${align === 'left' ? 'ml-0' : ''}`} />
      {subtitle && (
        <p className="text-cream-muted text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

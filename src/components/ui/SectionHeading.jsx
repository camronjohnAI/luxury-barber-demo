export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  size = 'lg',
  divider = true,
}) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'
  const titleSize = size === 'lg'
    ? 'text-4xl md:text-5xl lg:text-6xl'
    : 'text-3xl md:text-4xl lg:text-5xl'
  const wrapperMb = size === 'lg' ? 'mb-16' : 'mb-12'

  return (
    <div className={`flex flex-col ${alignClass} ${wrapperMb}`}>
      {eyebrow && (
        <span className="text-gold text-[0.65rem] font-semibold tracking-[0.28em] uppercase mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading ${titleSize} font-bold leading-tight mb-4 text-cream`}>
        {title}
      </h2>
      {divider && (
        <div className={`section-divider ${align === 'left' ? 'ml-0' : ''}`} />
      )}
      {subtitle && (
        <p className="text-cream-muted text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

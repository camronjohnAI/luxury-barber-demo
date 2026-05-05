import * as Icons from 'lucide-react'

export default function TrustBadge({ icon, label }) {
  const Icon = Icons[icon] || Icons.Shield
  return (
    <div className="flex items-center gap-2 bg-charcoal-light border border-charcoal-border px-4 py-2 rounded-sm">
      <Icon size={16} className="text-gold shrink-0" />
      <span className="text-cream text-xs font-medium tracking-wide whitespace-nowrap">{label}</span>
    </div>
  )
}

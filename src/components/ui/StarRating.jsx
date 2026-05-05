import { Star } from 'lucide-react'

export default function StarRating({ rating = 5, showNumber = true, size = 14 }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={star <= Math.round(rating) ? 'text-gold fill-gold' : 'text-charcoal-border'}
        />
      ))}
      {showNumber && (
        <span className="text-cream-muted text-sm ml-1">{rating}</span>
      )}
    </div>
  )
}

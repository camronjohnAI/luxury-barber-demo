import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function BeforeAfterSlider({ before, after, height = 360 }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const updatePosition = (clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }

  const handlePointerDown = (e) => {
    isDragging.current = true
    containerRef.current?.setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  const handlePointerMove = (e) => {
    if (!isDragging.current) return
    updatePosition(e.clientX)
  }

  const handlePointerUp = () => {
    isDragging.current = false
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden select-none"
      style={{ height, cursor: 'ew-resize', touchAction: 'none' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Before image — base layer */}
      <img
        src={before}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* After image — clipped from left */}
      <img
        src={after}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      {/* Divider line */}
      <div
        className="absolute inset-y-0 w-px bg-gold pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 gold-gradient rounded-full flex items-center justify-center shadow-lg shadow-black/60 z-10 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <ChevronLeft size={13} className="text-black" />
        <ChevronRight size={13} className="text-black" />
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-black/70 text-cream-muted text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 pointer-events-none">
        Before
      </div>
      <div className="absolute top-3 right-3 bg-gold/90 text-black text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 pointer-events-none">
        After
      </div>
    </div>
  )
}

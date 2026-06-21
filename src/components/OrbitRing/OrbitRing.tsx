import './OrbitRing.css'

interface OrbitRingProps {
  /** Position du centre de l'anneau, en % du conteneur parent (positionné en absolute). */
  position?: 'right' | 'left' | 'center'
  /** Teinte dominante de l'anneau. */
  tone?: 'violet' | 'green'
  className?: string
}

/**
 * Trois ellipses concentriques, inclinées en perspective et animées en
 * rotation lente : donne une sensation de profondeur / d'anneau 3D façon
 * piste de course, sans jamais devenir le sujet principal de la section.
 * Purement décoratif (aria-hidden), à poser en fond d'une section `position: relative`.
 */
export default function OrbitRing({ position = 'right', tone = 'violet', className = '' }: OrbitRingProps) {
  return (
    <div
      className={`orbit-ring orbit-ring--${position} orbit-ring--${tone} ${className}`}
      aria-hidden="true"
    >
      <span className="orbit-ring__ellipse orbit-ring__ellipse--1" />
      <span className="orbit-ring__ellipse orbit-ring__ellipse--2" />
      <span className="orbit-ring__ellipse orbit-ring__ellipse--3" />
    </div>
  )
}

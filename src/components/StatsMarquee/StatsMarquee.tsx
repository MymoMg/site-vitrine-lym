import './StatsMarquee.css'

const ITEMS = [
  'SUIVI SPORT',
  'MENTAL',
  'IA ADAPTATIVE',
  'ZÉRO PRESSION',
  '8 MIN CHRONO',
  'RÉGULARITÉ',
  'AVATAR 3D',
  'PROGRESSION RÉELLE',
]

export default function StatsMarquee() {
  // Doublé pour boucler la translation sans coupure visible.
  const loop = [...ITEMS, ...ITEMS]

  return (
    <div className="stats-marquee">
      <div className="stats-marquee__track">
        {loop.map((item, i) => (
          <span className="stats-marquee__item" key={`${item}-${i}`}>
            {item}
            <span className="stats-marquee__dot" />
          </span>
        ))}
      </div>
    </div>
  )
}

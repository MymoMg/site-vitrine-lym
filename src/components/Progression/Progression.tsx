import { useReveal } from '../../hooks/useReveal'
import { useCountUp } from '../../hooks/useCountUp'
import OrbitRing from '../OrbitRing/OrbitRing'
import './Progression.css'

const STATS = [
  { value: 92, suffix: '%', label: 'se sentent plus motivé·es après une semaine' },
  { value: 8, suffix: ' min', label: 'suffisent pour une séance « zéro excuse »' },
  { value: 3, suffix: '', label: 'dimensions suivies : corps, mental, habitudes' },
]

const CHART_POINTS = '4,150 60,130 116,138 172,96 228,108 284,58 340,72 396,30'

function StatCard({
  value,
  suffix,
  label,
  active,
  delayClass,
}: {
  value: number
  suffix: string
  label: string
  active: boolean
  delayClass: string
}) {
  const animated = useCountUp(value, active)
  return (
    <div className={`stat-card glass-card reveal ${delayClass} ${active ? 'is-visible' : ''}`}>
      <p className="stat-card__value">
        {animated}
        {suffix}
      </p>
      <p className="stat-card__label">{label}</p>
    </div>
  )
}

export default function Progression() {
  const heading = useReveal<HTMLDivElement>()
  const chart = useReveal<HTMLDivElement>({ threshold: 0.35 })

  return (
    <section id="progression" className="section progression">
      <OrbitRing position="left" tone="green" />

      <div className="container">
        <div
          ref={heading.ref}
          className={`section-heading reveal ${heading.isVisible ? 'is-visible' : ''}`}
        >
          <span className="eyebrow">Progression</span>
          <h2 className="section-title">
            Voir le chemin parcouru, <span className="text-accent">pas juste le score</span>.
          </h2>
          <p className="section-text">
            Des graphiques clairs, sans comparaison ni hiérarchie entre les
            jours. Chaque effort compte, visuellement et textuellement.
          </p>
        </div>

        <div
          ref={chart.ref}
          className={`progression__panel glass-card reveal reveal-delay-2 ${chart.isVisible ? 'is-visible' : ''}`}
        >
          <div className="progression__panel-head">
            <div>
              <p className="progression__panel-title">Constance sur 8 semaines</p>
              <p className="progression__panel-sub">Aucune semaine n’est notée plus qu’une autre</p>
            </div>
            <span className="progression__panel-tag">+34% de régularité</span>
          </div>

          <svg viewBox="0 0 400 170" className="progression__chart" preserveAspectRatio="none">
            <defs>
              <linearGradient id="progFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D6FF60" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#D6FF60" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[40, 80, 120].map((y) => (
              <line key={y} x1="0" y1={y} x2="400" y2={y} className="progression__grid-line" />
            ))}
            <polyline points={`${CHART_POINTS} 396,170 4,170`} fill="url(#progFill)" stroke="none" />
            <polyline points={CHART_POINTS} className="progression__chart-line" />
            {CHART_POINTS.split(' ').map((point) => {
              const [x, y] = point.split(',')
              return <circle key={point} cx={x} cy={y} r="4.5" className="progression__chart-dot" />
            })}
          </svg>

          <div className="progression__chart-labels">
            <span>S1</span>
            <span>S2</span>
            <span>S3</span>
            <span>S4</span>
            <span>S5</span>
            <span>S6</span>
            <span>S7</span>
            <span>S8</span>
          </div>
        </div>

        <div className="progression__stats">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              {...stat}
              active={chart.isVisible}
              delayClass={`reveal-delay-${Math.min(i + 1, 4)}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

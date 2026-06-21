import { useReveal } from '../../hooks/useReveal'
import './Concept.css'

const NODES = [
  { label: 'Corps', angle: -90 },
  { label: 'Mental', angle: 30 },
  { label: 'Habitudes', angle: 150 },
]

export default function Concept() {
  const heading = useReveal<HTMLDivElement>()
  const diagram = useReveal<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section id="concept" className="section concept">
      <div className="container concept__inner">
        <div
          ref={heading.ref}
          className={`reveal ${heading.isVisible ? 'is-visible' : ''}`}
        >
          <span className="eyebrow">Concept</span>
          <h2 className="section-title">
            Une seule application.
            <br />
            Trois dimensions <span className="text-accent">essentielles</span>.
          </h2>
          <p className="section-text">
            La plupart des apps te montrent soit ton corps, soit ton
            alimentation, soit ton mental. LYM relie tout ça pour te donner une
            vision claire de ta progression globale.
          </p>

          <p className="concept__quote">
            « Le sport seul ne suffit pas. Le mental seul non plus.
            <br />
            <span className="text-accent-violet">LYM relie les deux.</span> »
          </p>
        </div>

        <div
          ref={diagram.ref}
          className={`concept__diagram reveal reveal-delay-2 ${diagram.isVisible ? 'is-visible' : ''}`}
        >
          <svg viewBox="0 0 360 360" className="concept__lines" aria-hidden="true">
            <line x1="180" y1="180" x2="180" y2="40" className="concept__line" />
            <line x1="180" y1="180" x2="306" y2="250" className="concept__line concept__line--d1" />
            <line x1="180" y1="180" x2="54" y2="250" className="concept__line concept__line--d2" />
          </svg>

          <div className="concept__core glass-card">
            <span>LYM</span>
          </div>

          {NODES.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180
            const x = 50 + 38 * Math.cos(rad)
            const y = 50 + 38 * Math.sin(rad)
            return (
              <div
                key={node.label}
                className={`concept__node glass-card reveal-delay-${i + 2}`}
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {node.label}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

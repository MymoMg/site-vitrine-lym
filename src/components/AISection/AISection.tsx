import { BatteryMedium, Clock, Gauge } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import './AISection.css'

const SIGNALS = [
  { icon: Clock, label: 'Temps dispo', value: '8 min' },
  { icon: BatteryMedium, label: 'Énergie du jour', value: 'Basse' },
  { icon: Gauge, label: 'Suggestion LYM', value: 'Séance douce' },
]

export default function AISection() {
  const content = useReveal<HTMLDivElement>()
  const panel = useReveal<HTMLDivElement>({ threshold: 0.25 })

  return (
    <section id="ia" className="section ai-section">
      <div className="container ai-section__inner">
        <div
          ref={content.ref}
          className={`reveal ${content.isVisible ? 'is-visible' : ''}`}
        >
          <span className="eyebrow">Intelligence adaptative</span>
          <h2 className="section-title">
            Une IA qui <span className="text-accent">s’adapte à toi</span>.
          </h2>
          <p className="section-text">
            Pas d’objectifs irréalistes. Pas de pression inutile. Juste des
            suggestions adaptées à ton énergie réelle.
          </p>
        </div>

        <div
          ref={panel.ref}
          className={`ai-section__panel glass-card reveal reveal-delay-2 ${panel.isVisible ? 'is-visible' : ''}`}
        >
          <p className="ai-section__panel-label">Aujourd’hui</p>

          {SIGNALS.map((signal, i) => {
            const Icon = signal.icon
            return (
              <div
                key={signal.label}
                className="ai-section__signal"
                style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
              >
                <span className="ai-section__signal-icon">
                  <Icon size={16} />
                </span>
                <span className="ai-section__signal-label">{signal.label}</span>
                <span className="ai-section__signal-value">{signal.value}</span>
              </div>
            )
          })}

          <div className="ai-section__result">
            <span className="ai-section__result-dot" />
            <span>Séance « zéro excuse » générée — 8 min, sans matériel</span>
          </div>
        </div>
      </div>
    </section>
  )
}

import { CheckCircle2 } from 'lucide-react'
import PhoneMockup from '../PhoneMockup/PhoneMockup'
import { useReveal } from '../../hooks/useReveal'
import './AppPreview.css'

const POINTS = [
  'Un anneau de progression qui résume ta semaine en un coup d’œil',
  'Un avatar 3D que tu choisis et personnalises, et qui évolue avec toi',
  'Un check-in d’humeur en deux secondes, avant ou après l’effort',
]

export default function AppPreview() {
  const text = useReveal<HTMLDivElement>()
  const phone = useReveal<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section className="section app-preview">
      <div className="container app-preview__inner">
        <div
          ref={phone.ref}
          className={`app-preview__phone reveal ${phone.isVisible ? 'is-visible' : ''}`}
        >
          <PhoneMockup className="app-preview__phone-mockup" />
        </div>

        <div
          ref={text.ref}
          className={`app-preview__content reveal reveal-delay-2 ${text.isVisible ? 'is-visible' : ''}`}
        >
          <span className="eyebrow">Dans ta poche</span>
          <h2 className="section-title">
            Ta progression, <span className="text-accent">dans ta poche</span>.
          </h2>
          <p className="section-text">
            Un suivi simple, visuel et motivant. Chaque effort compte, même les
            plus petits.
          </p>

          <ul className="app-preview__list">
            {POINTS.map((point) => (
              <li key={point}>
                <CheckCircle2 size={18} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

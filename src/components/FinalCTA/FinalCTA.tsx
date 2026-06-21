import { ArrowRight } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import './FinalCTA.css'

export default function FinalCTA() {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section id="cta-final" className="section final-cta">
      <div className="container">
        <div
          ref={ref}
          className={`final-cta__panel reveal ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="final-cta__glow final-cta__glow--violet" aria-hidden="true" />
          <div className="final-cta__glow final-cta__glow--green" aria-hidden="true" />

          <span className="eyebrow">Prêt·e à commencer ?</span>
          <h2 className="final-cta__title">
            Commence à construire <span className="text-accent">ta progression</span>.
          </h2>

          <a href="#top" className="btn btn-primary final-cta__btn">
            Entrer dans LYM <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

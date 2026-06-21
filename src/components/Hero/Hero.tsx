import { ArrowRight, PlayCircle } from 'lucide-react'
import PhoneMockup from '../PhoneMockup/PhoneMockup'
import { useReveal } from '../../hooks/useReveal'
import './Hero.css'

export default function Hero() {
  const heading = useReveal<HTMLDivElement>()
  const phone = useReveal<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--violet" />
        <span className="hero__blob hero__blob--green" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div
          ref={heading.ref}
          className={`hero__content reveal ${heading.isVisible ? 'is-visible' : ''}`}
        >
          <span className="eyebrow">LYM — Lift Your Mind</span>

          <h1 className="hero__title">
            Construis un <span className="text-accent">mental solide</span>.
            <br />
            Transforme ton corps.
            <br />
            Suis ta <span className="text-accent">progression</span>.
          </h1>

          <p className="hero__subtitle">
            LYM relie sport, mental et habitudes de vie pour t’aider à avancer
            sans pression, mais avec constance.
          </p>

          <div className="hero__actions">
            <a href="#fonctionnalites" className="btn btn-primary">
              Découvrir LYM <ArrowRight size={17} />
            </a>
            <a href="#progression" className="btn btn-ghost">
              <PlayCircle size={18} /> Voir la démo
            </a>
          </div>

          <div className="hero__proof">
            <div className="hero__proof-avatars">
              <span />
              <span />
              <span />
            </div>
            <p>Pensé avec et pour des étudiant·es en quête d’un suivi simple.</p>
          </div>
        </div>

        <div
          ref={phone.ref}
          className={`hero__phone-wrap reveal reveal-delay-2 ${phone.isVisible ? 'is-visible' : ''}`}
        >
          <PhoneMockup />
        </div>
      </div>

     
    </section>
  )
}

import type { LucideIcon } from 'lucide-react'
import { Activity, Brain, Sparkles, ClipboardList, LineChart, UserRound } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import OrbitRing from '../OrbitRing/OrbitRing'
import './Features.css'

interface Feature {
  icon: LucideIcon
  title: string
  text: string
  big?: boolean
}

const FEATURES: Feature[] = [
  {
    icon: Activity,
    title: 'Suivi de l’activité physique',
    text: 'Des séances simples, adaptatives et accessibles à tous les niveaux — du sprint de 8 minutes à la séance longue.',
    big: true,
  },
  {
    icon: Brain,
    title: 'Dimension mentale',
    text: 'Un suivi de ton énergie et de ton état d’esprit pour mieux comprendre ton évolution, séance après séance.',
    big: true,
  },
  {
    icon: Sparkles,
    title: 'IA adaptative',
    text: 'Des recommandations qui s’ajustent à ton énergie du jour.',
  },
  {
    icon: ClipboardList,
    title: 'Programmes personnalisés',
    text: 'Des parcours pensés pour ton profil, jamais imposés à la lettre.',
  },
  {
    icon: LineChart,
    title: 'Graphiques de progression',
    text: 'Des graphiques clairs pour voir ton évolution sans pression.',
  },
  {
    icon: UserRound,
    title: 'Avatar 3D personnalisable',
    text: 'Choisis et personnalise ton compagnon 3D : il évolue avec ta régularité et ton humeur.',
  },
]

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()
  const Icon = feature.icon
  const delayClass = `reveal-delay-${Math.min((index % 4) + 1, 4)}`

  return (
    <div
      ref={ref}
      className={`feature-card glass-card reveal ${delayClass} ${feature.big ? 'feature-card--big' : ''} ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="feature-card__icon">
        <Icon size={feature.big ? 26 : 22} strokeWidth={1.8} />
      </div>
      <h3 className="feature-card__title">{feature.title}</h3>
      <p className="feature-card__text">{feature.text}</p>
    </div>
  )
}

export default function Features() {
  const heading = useReveal<HTMLDivElement>()

  return (
    <section id="fonctionnalites" className="section features">
      <OrbitRing position="right" tone="violet" />

      <div className="container">
        <div
          ref={heading.ref}
          className={`section-heading reveal ${heading.isVisible ? 'is-visible' : ''}`}
        >
          <span className="eyebrow">Fonctionnalités</span>
          <h2 className="section-title">
            Tout ce qu’il te faut, <span className="text-accent">rien de plus</span>.
          </h2>
        </div>

        <div className="features__grid">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { Flame, Moon } from 'lucide-react'
import './PhoneMockup.css'

interface PhoneMockupProps {
  /** Anime le flottement + légère rotation continue */
  floating?: boolean
  className?: string
}

/**
 * Reproduction stylisée de l'écran d'accueil LYM : anneau de progression,
 * graphe de tendance et mini check-in d'humeur. Utilisé dans le Hero et
 * dans la section "Ta progression dans ta poche".
 */
export default function PhoneMockup({ floating = true, className = '' }: PhoneMockupProps) {
  return (
    <div className={`phone ${floating ? 'phone--floating' : ''} ${className}`}>
      <div className="phone__frame">
        <div className="phone__notch" />
        <div className="phone__screen">
          <div className="phone__statusbar">
            <span>9:41</span>
            <span className="phone__statusbar-dot" />
          </div>

          <p className="phone__greeting">Salut Léa 👋</p>
          <p className="phone__greeting-sub">Ton énergie du jour ?</p>

          <div className="phone__ring-card">
            <svg viewBox="0 0 120 120" className="phone__ring" aria-hidden="true">
              <circle cx="60" cy="60" r="50" className="phone__ring-track" />
              <circle cx="60" cy="60" r="50" className="phone__ring-progress" />
            </svg>
            <div className="phone__ring-label">
              <span className="phone__ring-value">74%</span>
              <span className="phone__ring-caption">objectif semaine</span>
            </div>
          </div>

          <div className="phone__chart-card">
            <div className="phone__chart-head">
              <span>Progression</span>
              <span className="phone__chart-trend">+12%</span>
            </div>
            <svg viewBox="0 0 220 70" className="phone__chart" aria-hidden="true">
              <defs>
                <linearGradient id="lymChartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D6FF60" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#D6FF60" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M2 50 L34 42 L66 48 L98 28 L130 34 L162 16 L194 22 L218 8"
                className="phone__chart-line"
              />
              <path
                d="M2 50 L34 42 L66 48 L98 28 L130 34 L162 16 L194 22 L218 8 L218 70 L2 70 Z"
                fill="url(#lymChartFill)"
                stroke="none"
              />
            </svg>
          </div>

          <div className="phone__mood-row">
            <div className="phone__mood-pill phone__mood-pill--active">
              <Flame size={14} />
              <span>Motivée</span>
            </div>
            <div className="phone__mood-pill">
              <Moon size={14} />
              <span>Calme</span>
            </div>
          </div>

          <div className="phone__cta">Séance du jour · 8 min</div>
        </div>
      </div>
      <div className="phone__glow" aria-hidden="true" />
    </div>
  )
}

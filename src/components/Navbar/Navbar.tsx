import { useEffect, useState } from 'react'
import './Navbar.css'

const LINKS = [
  { href: '#concept', label: 'Concept' },
  { href: '#fonctionnalites', label: 'Fonctionnalités' },
  { href: '#progression', label: 'Progression' },
  { href: '#ia', label: 'IA' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo">
          <img src="/lym-logo.png" alt="LYM — Lift Your Mind" className="navbar__logo-img" />
        </a>

        <nav className="navbar__links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#cta-final" className="btn btn-ghost navbar__cta">
          Découvrir LYM
        </a>
      </div>
    </header>
  )
}

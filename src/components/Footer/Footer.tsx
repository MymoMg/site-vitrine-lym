import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">
          LYM<span className="footer__logo-dot">.</span>
        </span>
        <p className="footer__tagline">Lift Your Mind — sport, mental, constance.</p>
        <p className="footer__copy">© {new Date().getFullYear()} LYM. Projet pédagogique.</p>
      </div>
    </footer>
  )
}

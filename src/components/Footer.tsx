import { Link } from 'react-router-dom'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer-brand">Ruchi</p>
      <nav className="footer-nav" aria-label="Legal">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/delete-my-data">Delete My Data</Link>
        <Link to="/delete-my-account">Delete My Account</Link>
      </nav>
      <p>© {year} Ruchi. Talk soon.</p>
    </footer>
  )
}

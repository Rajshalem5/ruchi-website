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
      <p className="footer-company">Ruchi is a product of Meta Mind Edutech</p>
      <address className="footer-address">
        50-50-8 TPT Colony, Seethammadhara
        <br />
        Visakhapatnam - 530013
        <br />
        Andhra Pradesh
        <br />
        India
      </address>
      <p className="footer-contact">
        <a href="mailto:privacy@maaruchi.com">privacy@maaruchi.com</a>
      </p>
      <p>© {year} Ruchi. See you in the kitchen.</p>
    </footer>
  )
}

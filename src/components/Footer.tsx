export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer-brand">Ruchi</p>
      <p>© {year} Ruchi. Talk soon.</p>
    </footer>
  )
}

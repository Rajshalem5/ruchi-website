import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'

type PageLayoutProps = {
  title: string
  children: ReactNode
}

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <>
      <header className="page-header">
        <div className="page-header-inner">
          <Link className="page-brand" to="/">
            Ruchi
          </Link>
          <Link className="page-back" to="/">
            ← Back to home
          </Link>
        </div>
      </header>
      <main className="section legal-page">
        <div className="section-inner legal-page-inner">
          <h1 className="legal-title">{title}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

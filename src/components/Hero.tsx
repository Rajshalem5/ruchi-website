export function Hero() {
  return (
    <header className="hero">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-blob hero-blob-a" />
        <div className="hero-blob hero-blob-b" />
        <div className="hero-blob hero-blob-c" />
      </div>

      <div className="hero-content">
        <p className="brand fade-up">Ruchi</p>
        <h1 className="hero-headline fade-up fade-up-delay-1">
          Just talk. We&apos;ll listen.
        </h1>
        <p className="hero-sub fade-up fade-up-delay-2">
          A playful voice companion for easygoing chats — no typing, no fuss,
          just you and a friendly ear.
        </p>
        <div className="hero-cta fade-up fade-up-delay-3">
          <a className="btn btn-primary" href="#waitlist">
            Join the waitlist
          </a>
          <a className="btn btn-secondary" href="#how-it-works">
            How it works
          </a>
        </div>
        <div className="voice-waves fade-up fade-up-delay-3" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  )
}

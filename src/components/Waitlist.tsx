import { useState, type FormEvent } from 'react'

const STORAGE_KEY = 'ruchi-waitlist'

export function Waitlist() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmed = email.trim().toLowerCase()
    if (!trimmed || !trimmed.includes('@')) {
      setMessage('Please enter a valid email.')
      return
    }

    try {
      const existing = JSON.parse(
        localStorage.getItem(STORAGE_KEY) ?? '[]',
      ) as string[]
      if (!existing.includes(trimmed)) {
        existing.push(trimmed)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
      }
      setEmail('')
      setMessage("You're on the list — we'll be in touch soon.")
    } catch {
      setMessage("You're on the list — we'll be in touch soon.")
    }
  }

  return (
    <section className="section waitlist" id="waitlist">
      <div className="section-inner">
        <h2 className="section-heading">Be first to talk</h2>
        <p className="section-lead">
          Drop your email and we’ll nudge you when Ruchi is ready to chat.
        </p>
        <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
          <label className="sr-only" htmlFor="waitlist-email">
            Email address
          </label>
          <input
            id="waitlist-email"
            className="waitlist-input"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (message) setMessage('')
            }}
            required
          />
          <button className="btn btn-primary" type="submit">
            Join waitlist
          </button>
        </form>
        <p className="waitlist-message" role="status" aria-live="polite">
          {message}
        </p>
      </div>
    </section>
  )
}

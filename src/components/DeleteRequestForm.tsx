import { useState, type FormEvent } from 'react'

type DeleteRequestFormProps = {
  actionLabel: string
  description: string
  warning: string
}

export function DeleteRequestForm({
  actionLabel,
  description,
  warning,
}: DeleteRequestFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!email.trim() || !password) {
      setMessage('Please enter your email and password.')
      return
    }

    if (!confirmed) {
      setMessage('Please confirm that you understand this action.')
      return
    }

    setMessage(
      'This form is not yet connected. Account management will be available when Ruchi launches.',
    )
  }

  return (
    <div className="delete-request">
      <p className="legal-lead">{description}</p>
      <p className="delete-warning">{warning}</p>

      <form className="delete-form" onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="delete-email">Email address</label>
          <input
            id="delete-email"
            className="form-input"
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
        </div>

        <div className="form-field">
          <label htmlFor="delete-password">Password</label>
          <input
            id="delete-password"
            className="form-input"
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              if (message) setMessage('')
            }}
            required
          />
        </div>

        <label className="form-checkbox">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(e) => {
              setConfirmed(e.target.checked)
              if (message) setMessage('')
            }}
          />
          <span>I understand this action and want to continue.</span>
        </label>

        <button className="btn btn-primary delete-submit" type="submit">
          {actionLabel}
        </button>

        <p className="form-message" role="status" aria-live="polite">
          {message}
        </p>
      </form>
    </div>
  )
}

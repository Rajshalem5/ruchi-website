function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2a3.5 3.5 0 0 0-3.5 3.5v6a3.5 3.5 0 1 0 7 0v-6A3.5 3.5 0 0 0 12 2Z"
        fill="currentColor"
      />
      <path
        d="M6 11.5a6 6 0 0 0 12 0M12 17.5V21M9 21h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Vibe() {
  return (
    <section className="section vibe" id="vibe">
      <div className="section-inner">
        <h2 className="section-heading">Made for the kitchen</h2>
        <p className="section-lead">
          Soft, unhurried, and a little bit fun — like a friend who already knows
          the recipe.
        </p>
        <div className="vibe-stage">
          <div className="vibe-mic">
            <MicIcon />
          </div>
          <p className="vibe-quote">
            “Hey Ruchi, what’s next?” and you’re already back in the flow.
          </p>
        </div>
      </div>
    </section>
  )
}

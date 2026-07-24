const steps = [
  {
    title: 'Speak',
    body: "Say whatever's on your mind — a thought, a question, or just a hello.",
  },
  {
    title: 'Understand',
    body: 'Ruchi catches the vibe and the words, without making you overthink it.',
  },
  {
    title: 'Reply',
    body: 'Get a warm, natural voice reply that keeps the conversation flowing.',
  },
]

export function HowItWorks() {
  return (
    <section className="section how" id="how-it-works">
      <div className="section-inner">
        <h2 className="section-heading">How it works</h2>
        <p className="section-lead">
          Three easy beats. Open up, talk it out, and hear Ruchi talk back.
        </p>
        <ol className="steps">
          {steps.map((step, i) => (
            <li className="step" key={step.title}>
              <span className="step-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const steps = [
  {
    title: 'Speak',
    body: 'Ask what’s for dinner, what’s in the fridge, or where you are in a recipe.',
  },
  {
    title: 'Understand',
    body: 'Ruchi follows the cook, not just the words — even when you’re mid-chop.',
  },
  {
    title: 'Reply',
    body: 'Get the next step, a substitution, or a timer — spoken back, hands-free.',
  },
]

export function HowItWorks() {
  return (
    <section className="section how" id="how-it-works">
      <div className="section-inner">
        <h2 className="section-heading">How it works</h2>
        <p className="section-lead">
          Three easy beats. Ask out loud, cook along, and hear Ruchi talk you
          through it.
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

const people = [
  {
    name: 'Narayana Rao VV',
    role: 'Partner',
  },
  {
    name: 'K S Narayana',
    role: 'Partner',
  },
  {
    name: 'Akshya Asada',
    role: 'Product Designer',
  },
]

export function Team() {
  return (
    <section className="section team" id="team">
      <div className="section-inner">
        <h2 className="section-heading">The team</h2>
        <p className="section-lead">
          Ruchi is built by Meta Mind Edutech — a small crew cooking up a
          voice-native kitchen companion.
        </p>
        <ol className="steps">
          {people.map((person, i) => (
            <li className="step" key={person.name}>
              <span className="step-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

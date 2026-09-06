export default function About() {
  const traits = [
    {
      label: "Build",
      value: "I learn best by building real projects.",
    },
    {
      label: "Solve",
      value: "I focus on understanding the problem before the code.",
    },
    {
      label: "Improve",
      value: "I keep refining my code, projects, and approach.",
    },
  ];

  return (
    <section id="about" className="px-6 md:px-12 py-24 border-b border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <p className="text-muted leading-relaxed max-w-md mb-4">
            I&apos;m a backend-focused developer who enjoys building APIs,
            working with databases, and turning ideas into functional
            applications.
          </p>
          <p className="text-muted leading-relaxed max-w-md">
            I like understanding how things work under the hood and solving
            problems by building and experimenting. I&apos;m currently
            focused on becoming a stronger backend developer while exploring
            practical AI integrations.
          </p>
        </div>
        <div className="grid gap-4">
          {traits.map((trait) => (
            <div
              key={trait.label}
              className="border border-line rounded-md p-4"
            >
              <p className="text-accent font-mono text-xs mb-1">
                {trait.label}
              </p>
              <p className="text-sm text-muted">{trait.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
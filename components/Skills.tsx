const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS","Responsive Design"],
  },
  {
    category: "Backend",
    skills: ["JavaScript", "TypeScript", "Node.js", "Express", "REST API Design"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Neon"],
  },
  {
    category: "Tools",
    skills: ["Git", "Render", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-24 border-b border-line">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="border border-line rounded-md p-6"
            >
              <h3 className="text-accent font-mono text-sm mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs border border-line px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

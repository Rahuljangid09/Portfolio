"use client";

import Image from "next/image";
import {  ExternalLink } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

const projects = [
  {
    title: "DevSync",
    description:
      "Team project management API with JWT auth, GitHub integration, and AI-generated docs.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Prisma"],
    github: "https://github.com/Rahuljangid09/DevSync",
    live: "https://devsync-q0xz.onrender.com",
    image: "/DevSync.png",
  },
  {
    title: "BookNest",
    description: "Airbnb-style full-stack booking app.",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/Rahuljangid09/BookNest-Project",
    live: "https://wanderlust-project-s119.onrender.com",
    image: "/BookNest.png",
  },
  {
    title: "Result Analysis Automation",
    description:
      "Automates extracting and processing academic results from PDFs into structured Excel reports.",
    tech: ["Python", "FastAPI", "Pandas"],
    github: "https://github.com/Rahuljangid09/",
    live: "",
    image: "/ResultAnalysis.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-24 border-b border-line">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-line rounded-md overflow-hidden hover:border-accent transition-colors"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono border border-line px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2 border-t border-line">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted hover:text-accent text-sm transition-colors"
                  >
                    <GithubIcon size={16} /> Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-muted hover:text-accent text-sm transition-colors"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
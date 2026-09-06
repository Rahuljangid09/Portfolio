"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-base/80 backdrop-blur-sm z-50 border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="font-bold font-mono text-accent">
          RJ
        </a>
        <div className="hidden md:flex gap-6 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-muted hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
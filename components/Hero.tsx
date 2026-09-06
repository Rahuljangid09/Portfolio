export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-12 pt-20 border-b border-line"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-18 items-center">
        {/* Left: text content */}
        <div>
          <p className="text-accent font-mono text-sm mb-4">backend developer</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Rahul Jangid
          </h1>
          <p className="text-muted text-lg mb-8 max-w-md">
            I build backend applications and APIs, and explore practical ways to integrate AI into real-world products.
          </p>
          <a
            href="#projects"
            className="inline-block border border-accent text-accent px-6 py-3 rounded-md hover:bg-accent hover:text-base transition-colors"
          >
            View Work
          </a>
        </div>

        {/* Right: terminal mockup — fills the empty space honestly */}
        <div className="bg-card border border-line rounded-md overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
            <span className="w-3 h-3 rounded-full bg-line"></span>
            <span className="w-3 h-3 rounded-full bg-line"></span>
            <span className="w-3 h-3 rounded-full bg-line"></span>
            <span className="text-muted text-xs font-mono ml-2">
              devsync-api
            </span>
          </div>
          <pre className="p-6 font-mono text-sm text-muted overflow-x-auto">
            {`POST /api/workspaces/:id/summary

{
  "status": "success",
  "summary": "3 PRs merged, 
  2 issues closed this week",
  "generatedBy": "gemini-1.5",
  "timestamp": "2026-09-05T10:32:00Z"
}`}
          </pre>
        </div>
      </div>
    </section>
  );
}

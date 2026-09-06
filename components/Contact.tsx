export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 py-24">
      <div className="max-w-2xl mx-auto border border-line rounded-md p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted mb-8">
          Open to backend engineering roles — feel free to reach out.
        </p>

        <div className="flex justify-center gap-6 mb-4 font-mono text-sm">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rahuljangid.scoe.entc@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/Rahuljangid09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rahuljangid08/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Visible fallback contact details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-muted text-sm mb-8 font-mono">
          <span>rahuljangid.scoe.entc@gmail.com</span>
          <span className="hidden sm:inline text-line">|</span>
          <span>+91 9404847516</span>
        </div>

        <a
          href="/Rahul_Jangid_Resume_v2.pdf"
          download
          className="inline-block bg-accent text-base px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

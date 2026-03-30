export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-8 rounded-full" />
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          Feel free to reach out if you want to collaborate,
          have a question, or just want to say hi!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kweon82@naver.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}

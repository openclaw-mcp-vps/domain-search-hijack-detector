export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Domain Security Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Detect When Registrars{" "}
          <span className="text-[#58a6ff]">Steal Your Domain Searches</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-10">
          Search a domain, and some registrars register it before you can. Our monitor watches every domain you search and fires an email alert the moment a registrar hijacks it.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors"
        >
          Start Monitoring — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant setup.</p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: "🔍", title: "Search Tracking", desc: "Log every domain you search across any registrar." },
            { icon: "📡", title: "WHOIS Monitoring", desc: "Background jobs poll WHOIS every hour for status changes." },
            { icon: "🚨", title: "Instant Alerts", desc: "Email you the moment a domain flips from available to registered." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Monitor up to 500 domains",
              "Hourly WHOIS checks",
              "Instant email alerts",
              "Hijack history log",
              "Registrar risk scoring"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does domain search hijacking work?",
              a: "Some registrars log your availability searches and register the domain themselves, then resell it at a premium. This is called domain tasting or front-running."
            },
            {
              q: "How does the detector catch it?",
              a: "After you search a domain, our system records it and runs hourly WHOIS lookups. If the domain goes from available to registered within 24–48 hours, you get an alert."
            },
            {
              q: "Which registrars are known offenders?",
              a: "Several large registrars have been accused historically. Our tool tracks patterns and builds a risk score per registrar based on hijack frequency."
            }
          ].map((item) => (
            <details key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 group">
              <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
                {item.q}
                <span className="text-[#58a6ff] ml-4">+</span>
              </summary>
              <p className="mt-3 text-sm text-[#8b949e] leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} Domain Hijack Detector. All rights reserved.
      </footer>
    </main>
  );
}

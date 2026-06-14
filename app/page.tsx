export default function Home() {
  const faqs = [
    {
      q: "Which AI providers are supported?",
      a: "OpenAI (GPT-4o, GPT-4, GPT-3.5) and Anthropic (Claude 3.5, Claude 3) are fully supported with more providers coming soon."
    },
    {
      q: "How does the diff view work?",
      a: "Responses from each prompt variation are displayed side by side with highlighted differences so you can instantly spot what changed between outputs."
    },
    {
      q: "Can I export my comparison results?",
      a: "Yes. You can export prompt sets and their AI responses as JSON or CSV for further analysis or sharing with your team."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#30363d] px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-lg tracking-tight">PromptDiffer</span>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="bg-[#58a6ff] text-[#0d1117] font-semibold px-4 py-2 rounded-md text-sm hover:bg-[#79b8ff] transition-colors"
        >
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          For AI &amp; Prompt Engineers
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          Compare AI Prompt Outputs{" "}
          <span className="text-[#58a6ff]">Side by Side</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-2xl mx-auto mb-10">
          Run multiple prompt variations against OpenAI and Anthropic models simultaneously.
          Spot differences instantly with a built-in diff view and ship better prompts faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-3 rounded-md text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start for $12/mo
          </a>
          <a
            href="#pricing"
            className="border border-[#30363d] text-[#c9d1d9] font-semibold px-8 py-3 rounded-md text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            See Pricing
          </a>
        </div>

        {/* Feature pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {["Side-by-side diff", "OpenAI + Anthropic", "Prompt set management", "Export to JSON/CSV", "Subscription gated"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-2 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-md mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <span className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest">Pro</span>
          <div className="mt-4 mb-2">
            <span className="text-5xl font-extrabold text-white">$12</span>
            <span className="text-[#8b949e] ml-1">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to optimize prompts at scale.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited prompt comparisons",
              "OpenAI & Anthropic support",
              "Side-by-side diff view",
              "Prompt set management",
              "Export results (JSON / CSV)",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-md hover:bg-[#79b8ff] transition-colors text-center"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>&copy; {new Date().getFullYear()} PromptDiffer. All rights reserved.</p>
      </footer>
    </main>
  );
}

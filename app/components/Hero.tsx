import { domains, domainColors, criticalRules } from "@/app/data/domains";

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
          Claude Certified Architect — Fast Revision Guide
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          <span className="gradient-text">Architect Exam</span>
          <br />
          <span className="text-slate-100">Cheat Sheet</span>
        </h1>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Everything you need to pass — organized by domain, built for speed.
          Know the patterns, avoid the anti-patterns, ace the exam.
        </p>
      </div>

      {/* Domain Weight Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
        {domains.map((domain) => {
          const colors = domainColors[domain.colorKey];
          return (
            <a
              key={domain.id}
              href={`#${domain.id}`}
              className={`group relative overflow-hidden rounded-xl border ${colors.border} bg-slate-900 p-4 hover:${colors.bg} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:${colors.glow}`}
            >
              <div className="flex items-start justify-between mb-2">
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${colors.badge}`}
                >
                  D{domain.number}
                </span>
                <span className={`text-xs font-mono font-bold ${colors.text}`}>
                  {domain.weight}
                </span>
              </div>
              <div className={`text-sm font-semibold ${colors.text} leading-tight`}>
                {domain.shortTitle}
              </div>
              <div className="text-xs text-slate-500 mt-1 leading-snug hidden sm:block">
                {domain.tagline.split(",")[0]}
              </div>
              <div
                className={`absolute bottom-0 left-0 h-0.5 w-0 ${colors.dot} group-hover:w-full transition-all duration-500`}
              />
            </a>
          );
        })}
      </div>

      {/* Critical Rules */}
      <div className="relative rounded-2xl border border-red-500/30 bg-red-500/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none" />
        <div className="relative p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/40">
              <span className="text-red-400 text-sm">✕</span>
            </div>
            <div>
              <h2 className="text-base font-bold text-red-400">
                Fastest Ways to Lose Marks
              </h2>
              <p className="text-xs text-slate-500">
                Avoid all of these — they are the most common wrong-answer traps
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {criticalRules.map((rule, i) => (
              <div
                key={i}
                className="flex items-start gap-2 bg-slate-900/60 rounded-lg p-3 border border-slate-800"
              >
                <span className="text-red-500 mt-0.5 flex-shrink-0 text-xs font-mono font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

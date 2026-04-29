import { quickRefList, domains, domainColors } from "@/app/data/domains";

export default function QuickRef() {
  return (
    <section id="quickref" className="scroll-mt-16 px-4 max-w-7xl mx-auto mb-20">
      {/* Header */}
      <div className="relative rounded-2xl border-2 border-orange-500/60 overflow-hidden mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/5 pointer-events-none" />
        <div className="relative p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-xl shadow-lg shadow-orange-500/30">
            ⚡
          </div>
          <div>
            <h2 className="text-2xl font-bold text-orange-400">
              Last-Minute Quick Reference
            </h2>
            <p className="text-sm text-slate-400">
              Memorize these pairs. They cover the most common right-vs-wrong exam choices.
            </p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-orange-500 to-amber-400" />
      </div>

      {/* Do vs Don't grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {quickRefList.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start gap-2 mb-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-xs font-bold">
                ✓
              </span>
              <span className="text-xs text-emerald-300 font-semibold leading-relaxed">
                {item.rule}
              </span>
            </div>
            <div className="flex items-start gap-2 pl-0.5">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 text-xs font-bold">
                ✕
              </span>
              <span className="text-xs text-red-300/80 leading-relaxed">
                {item.avoid}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Domain weight summary */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">
          Exam Weight at a Glance
        </h3>
        <div className="space-y-3">
          {domains.map((domain) => {
            const colors = domainColors[domain.colorKey];
            const pct = parseInt(domain.weight.replace(/\D/g, ""));
            return (
              <div key={domain.id} className="flex items-center gap-3">
                <span
                  className={`flex-shrink-0 text-xs font-mono font-bold w-16 text-right ${colors.text}`}
                >
                  {domain.weight}
                </span>
                <div className="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${colors.dot} transition-all`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-xs text-slate-400 w-28 truncate">
                  D{domain.number}: {domain.shortTitle}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-6 text-center">
        <p className="text-xs text-slate-600">
          Claude Certified Architect Exam Cheat Sheet · Fast-revision guide covering all 5 domains
        </p>
      </div>
    </section>
  );
}

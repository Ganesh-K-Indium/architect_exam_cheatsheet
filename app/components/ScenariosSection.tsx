import { scenarios, examMeta } from "@/app/data/domains";

const scenarioColors = [
  { border: "border-purple-500/40", bg: "bg-purple-500/5", badge: "bg-purple-600", text: "text-purple-300", dot: "bg-purple-500" },
  { border: "border-emerald-500/40", bg: "bg-emerald-500/5", badge: "bg-emerald-600", text: "text-emerald-300", dot: "bg-emerald-500" },
  { border: "border-blue-500/40", bg: "bg-blue-500/5", badge: "bg-blue-600", text: "text-blue-300", dot: "bg-blue-500" },
  { border: "border-amber-500/40", bg: "bg-amber-500/5", badge: "bg-amber-600", text: "text-amber-300", dot: "bg-amber-500" },
  { border: "border-cyan-500/40", bg: "bg-cyan-500/5", badge: "bg-cyan-600", text: "text-cyan-300", dot: "bg-cyan-500" },
  { border: "border-rose-500/40", bg: "bg-rose-500/5", badge: "bg-rose-600", text: "text-rose-300", dot: "bg-rose-500" },
];

export default function ScenariosSection() {
  return (
    <section id="scenarios" className="scroll-mt-16 px-4 max-w-7xl mx-auto mb-16">
      {/* Header */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="relative p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300">
                  CRITICAL
                </span>
                <span className="text-xs text-slate-500">Every exam question anchors to a scenario</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-100">
                The 6 Exam Scenario Contexts
              </h2>
              <p className="text-sm text-slate-400 mt-1 max-w-xl">
                {examMeta.scenarios}. Study all 6 — know the domain focus and key skills for each.
              </p>
            </div>

            {/* Exam stats */}
            <div className="flex-shrink-0 grid grid-cols-2 sm:grid-cols-1 gap-2 sm:min-w-[180px]">
              {[
                { label: "Questions", value: String(examMeta.questions) },
                { label: "Duration", value: examMeta.duration },
                { label: "Pass Score", value: examMeta.passing },
                { label: "Cost", value: examMeta.cost },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between gap-3 bg-slate-800/60 rounded-lg px-3 py-2 border border-slate-700"
                >
                  <span className="text-xs text-slate-500">{stat.label}</span>
                  <span className="text-xs font-bold text-orange-400">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-0.5 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500" />
      </div>

      {/* Scenarios grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {scenarios.map((scenario, i) => {
          const colors = scenarioColors[i % scenarioColors.length];
          return (
            <div
              key={scenario.number}
              className={`rounded-xl border ${colors.border} ${colors.bg} bg-slate-900 overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5`}
            >
              {/* Card header */}
              <div className="p-4 border-b border-slate-800">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full text-white ${colors.badge}`}>
                    S{scenario.number}
                  </span>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {scenario.domainsHit.map((d) => (
                      <span
                        key={d}
                        className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className={`text-sm font-bold ${colors.text} leading-tight`}>
                  {scenario.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {scenario.description}
                </p>
              </div>

              {/* Key skills */}
              <div className="p-4">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Key Skills Tested
                </div>
                <ul className="space-y-1.5">
                  {scenario.keySkills.map((skill, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${colors.dot}`} />
                      <span className="text-xs text-slate-300 leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Warning note */}
      <div className="mt-4 flex items-start gap-3 p-4 rounded-xl border border-amber-500/30 bg-amber-500/5">
        <span className="text-amber-400 text-lg flex-shrink-0">⚠</span>
        <p className="text-xs text-amber-300 leading-relaxed">
          <span className="font-bold">Exam day:</span> 4 of these 6 scenarios are randomly selected for your exam session.
          You will NOT know which 4 in advance. Study all 6 thoroughly — every question is framed
          within a scenario context, and the right answer always depends on that context.
        </p>
      </div>
    </section>
  );
}

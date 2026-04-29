import { models } from "@/app/data/domains";

export default function ModelsRef() {
  return (
    <section className="px-4 max-w-7xl mx-auto mb-12">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-slate-700 flex items-center justify-center text-sm">
              🤖
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-200">Current Claude Models Reference</h3>
              <p className="text-xs text-slate-500">Know which model to recommend for each use case</p>
            </div>
          </div>
        </div>

        {/* Models table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-800">
                {["Model", "API ID", "Context", "Max Output", "Speed", "Extended Thinking", "Pricing", "Best For"].map((h) => (
                  <th key={h} className="px-4 py-2.5 text-left font-semibold text-slate-500 whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {models.map((m, i) => (
                <tr key={m.id} className={`border-b border-slate-800/60 ${i % 2 === 0 ? "bg-slate-900" : "bg-slate-800/20"}`}>
                  <td className="px-4 py-3 font-semibold text-slate-200 whitespace-nowrap">{m.name}</td>
                  <td className="px-4 py-3 font-mono text-slate-400 whitespace-nowrap">{m.id}</td>
                  <td className="px-4 py-3 text-emerald-400 font-mono whitespace-nowrap">{m.context}</td>
                  <td className="px-4 py-3 text-blue-400 font-mono whitespace-nowrap">{m.maxOutput}</td>
                  <td className="px-4 py-3 text-slate-300 whitespace-nowrap">{m.speed}</td>
                  <td className="px-4 py-3 text-center">
                    {m.extendedThinking ? (
                      <span className="text-emerald-400 font-bold">✓</span>
                    ) : (
                      <span className="text-slate-600">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-amber-400 font-mono whitespace-nowrap">{m.pricing}</td>
                  <td className="px-4 py-3 text-slate-300 max-w-xs">{m.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Caching cost notes */}
        <div className="px-5 py-4 border-t border-slate-800 bg-slate-800/20">
          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-3">
            Prompt Cache Pricing Multipliers
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Cache write (5 min)", value: "1.25× base input", color: "text-amber-400" },
              { label: "Cache write (1 hour)", value: "2× base input", color: "text-orange-400" },
              { label: "Cache read", value: "0.1× base input (~90% off)", color: "text-emerald-400" },
              { label: "Batch API", value: "50% off standard pricing", color: "text-blue-400" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-1.5 border border-slate-700">
                <span className="text-slate-400">{item.label}:</span>
                <span className={`font-bold ${item.color}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Domain, domainColors, Subsection } from "@/app/data/domains";

function ExamTip({ tip, colorKey }: { tip: string; colorKey: string }) {
  const colors = domainColors[colorKey as keyof typeof domainColors];
  return (
    <div
      className={`flex items-start gap-3 p-3 rounded-lg ${colors.bg} border ${colors.border} border-opacity-40`}
    >
      <div className={`flex-shrink-0 w-5 h-5 rounded flex items-center justify-center text-xs font-bold ${colors.badge}`}>
        !
      </div>
      <p className={`text-xs leading-relaxed ${colors.text} font-medium`}>{tip}</p>
    </div>
  );
}

function AntiPatterns({ items }: { items: string[] }) {
  return (
    <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-3">
      <div className="flex items-center gap-1.5 mb-2">
        <span className="text-red-400 text-xs font-bold">✕ Anti-Patterns</span>
      </div>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-red-500/70 flex-shrink-0 mt-0.5 text-xs">▸</span>
            <span className="text-xs text-slate-400 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConceptList({
  items,
  colorKey,
}: {
  items: string[];
  colorKey: string;
}) {
  const colors = domainColors[colorKey as keyof typeof domainColors];
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${colors.dot}`} />
          <span className="text-xs text-slate-300 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Comparison({
  comparison,
}: {
  comparison: NonNullable<Subsection["comparison"]>;
}) {
  return (
    <div className="space-y-2">
      <div className="text-xs text-slate-500 font-medium">{comparison.label}</div>
      <div className="grid sm:grid-cols-2 gap-2">
        <div className="rounded-lg border border-red-500/30 bg-slate-950 overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 border-b border-red-500/20">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs text-red-400 font-medium">Wrong</span>
          </div>
          <pre className="code-block p-3 text-red-300/80 overflow-x-auto whitespace-pre-wrap">
            {comparison.wrong}
          </pre>
        </div>
        <div className="rounded-lg border border-emerald-500/30 bg-slate-950 overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border-b border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs text-emerald-400 font-medium">Correct</span>
          </div>
          <pre className="code-block p-3 text-emerald-300/80 overflow-x-auto whitespace-pre-wrap">
            {comparison.right}
          </pre>
        </div>
      </div>
    </div>
  );
}

function SubsectionCard({
  subsection,
  colorKey,
}: {
  subsection: Subsection;
  colorKey: string;
}) {
  const colors = domainColors[colorKey as keyof typeof domainColors];
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden">
      {/* Subsection header */}
      <div className={`flex items-center gap-3 px-4 py-3 border-b border-slate-800 ${colors.bg}`}>
        <span
          className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${colors.badge}`}
        >
          {subsection.code}
        </span>
        <h3 className={`text-sm font-semibold ${colors.text}`}>
          {subsection.title}
        </h3>
      </div>

      <div className="p-4 space-y-4">
        {/* Key concepts */}
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Key Concepts
          </div>
          <ConceptList items={subsection.concepts} colorKey={colorKey} />
        </div>

        {/* Anti-patterns */}
        <AntiPatterns items={subsection.antiPatterns} />

        {/* Comparison */}
        {subsection.comparison && (
          <Comparison comparison={subsection.comparison} />
        )}

        {/* Exam tip */}
        <ExamTip tip={subsection.examTip} colorKey={colorKey} />
      </div>
    </div>
  );
}

export default function DomainSection({ domain }: { domain: Domain }) {
  const colors = domainColors[domain.colorKey];

  return (
    <section id={domain.id} className="scroll-mt-16 px-4 max-w-7xl mx-auto mb-16">
      {/* Domain header */}
      <div
        className={`relative rounded-2xl border-2 ${colors.border} overflow-hidden mb-6`}
      >
        <div
          className={`absolute inset-0 ${colors.bg} pointer-events-none`}
        />
        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6">
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-xl ${colors.badge} flex items-center justify-center text-xl font-black shadow-lg`}
            >
              {domain.number}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${colors.tag} ${colors.tagText}`}
                >
                  Domain {domain.number}
                </span>
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300`}
                >
                  {domain.weight} of exam
                </span>
              </div>
              <h2 className={`text-xl sm:text-2xl font-bold ${colors.text}`}>
                {domain.title}
              </h2>
            </div>
          </div>
          <p className="text-sm text-slate-400 sm:text-right sm:max-w-xs leading-relaxed">
            {domain.tagline}
          </p>
        </div>
        {/* Color bar at bottom */}
        <div className={`h-1 w-full ${colors.dot}`} />
      </div>

      {/* Subsections grid */}
      <div className="grid lg:grid-cols-2 gap-4">
        {domain.subsections.map((subsection) => (
          <SubsectionCard
            key={subsection.code}
            subsection={subsection}
            colorKey={domain.colorKey}
          />
        ))}
      </div>
    </section>
  );
}

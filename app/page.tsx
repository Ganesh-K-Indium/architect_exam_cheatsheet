import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import DomainSection from "@/app/components/DomainSection";
import QuickRef from "@/app/components/QuickRef";
import { domains } from "@/app/data/domains";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <main className="relative">
        <Hero />

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>

        {/* All 5 domain sections */}
        {domains.map((domain) => (
          <DomainSection key={domain.id} domain={domain} />
        ))}

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>

        <QuickRef />
      </main>
    </>
  );
}

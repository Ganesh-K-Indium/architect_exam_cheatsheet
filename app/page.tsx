import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import ScenariosSection from "@/app/components/ScenariosSection";
import DomainSection from "@/app/components/DomainSection";
import ModelsRef from "@/app/components/ModelsRef";
import QuickRef from "@/app/components/QuickRef";
import { domains } from "@/app/data/domains";

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-12">
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <main className="relative">
        {/* Hero — title, domain weights, critical rules */}
        <Hero />
        <Divider />

        {/* 6 Exam Scenarios — must come before domains */}
        <ScenariosSection />
        <Divider />

        {/* Domain 1 & 2 */}
        <DomainSection domain={domains[0]} />
        <DomainSection domain={domains[1]} />

        {/* Models reference between D2 and D3 */}
        <ModelsRef />

        {/* Domain 3, 4, 5 */}
        <DomainSection domain={domains[2]} />
        <DomainSection domain={domains[3]} />
        <DomainSection domain={domains[4]} />

        <Divider />

        {/* Quick reference — last-minute memorization */}
        <QuickRef />
      </main>
    </>
  );
}

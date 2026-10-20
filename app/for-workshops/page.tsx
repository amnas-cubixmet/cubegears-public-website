import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = {
  title: "For Automobile Workshops",
  description: "CubeGears workshop management for independent garages, service centres, specialist and multi-branch operations.",
};

const workshopTypes = [
  ["Independent garages", "Keep daily jobs, customers, parts and payments organised without scattered paper records."],
  ["Service centres", "Give service advisors, mechanics and managers a shared view of work in progress."],
  ["Specialist workshops", "Support workflows for AC, electrical, detailing, body repair and more."],
  ["Multi-branch teams", "Bring a consistent structure to company operations across locations."],
];

export default function ForWorkshopsPage() {
  return (
    <>
      <PublicHeader />
      <main id="main-content" className="bg-[#f7f9fd]">
        <section className="relative overflow-hidden bg-[#0a1d3b] text-white">
          <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="page-shell relative grid gap-12 py-18 sm:py-24 lg:grid-cols-[1fr_.75fr] lg:items-center">
            <div>
              <p className="eyebrow !text-blue-300">MADE FOR SERVICE TEAMS</p>
              <h1 className="mt-5 text-[clamp(40px,5vw,64px)] font-extrabold leading-[1.1] tracking-[-.055em]">Built around the way your workshop works.</h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-8 text-slate-300">Move away from disconnected systems and manage each service visit in one connected workspace.</p>
              <Link href="/signup" className="button-primary focus-ring mt-8 inline-flex">Set up your workshop ↗</Link>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-7 sm:p-9">
              <p className="text-[12px] font-extrabold tracking-[.12em] text-blue-300">A CLEAR JOB FLOW</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Check-in", "Inspection", "Estimate", "Approval", "Repair", "QC", "Invoice", "Delivery"].map((step, i) => (
                  <span key={step} className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-[14px] font-semibold text-white">{i + 1}. {step}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section-pad">
          <div className="page-shell">
            <p className="eyebrow">DIFFERENT SHOPS, ONE FOUNDATION</p>
            <h2 className="section-title mt-4">Flexible for different kinds of workshops.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {workshopTypes.map(([title, copy], index) => (
                <article key={title} className="surface-card surface-card-hover p-7 sm:p-9">
                  <span className="text-[13px] font-extrabold tracking-[.1em] text-blue-600">0{index + 1}</span>
                  <h3 className="mt-5 text-[24px] font-extrabold tracking-[-.035em] text-slate-900">{title}</h3>
                  <p className="mt-4 text-[15px] leading-8 text-slate-600">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-slate-200 bg-white py-16">
          <div className="page-shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div><h2 className="section-title">A simpler daily workflow.</h2><p className="section-copy mt-3">See each step of a workshop job.</p></div>
            <Link href="/how-it-works" className="button-primary focus-ring inline-flex">See how it works ↗</Link>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}

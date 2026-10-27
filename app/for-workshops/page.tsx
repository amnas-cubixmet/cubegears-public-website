import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import { BottomCTA, SectionLead } from "@/components/MarketingBlocks";

export const metadata: Metadata = {
  title: "For Automobile Workshops",
  description: "CubeGears workshop management for independent garages, service centres, specialist and multi-branch operations.",
};

const workshopTypes = [
  { number: "01", title: "Independent garages", description: "Give smaller teams a practical way to manage daily jobs, customers, parts and payments.", detail: "One place for day-to-day work" },
  { number: "02", title: "Service centres", description: "Help service advisors, mechanics and managers follow the same work-in-progress information.", detail: "Better visibility between teams" },
  { number: "03", title: "Specialist workshops", description: "Keep a consistent service process for electrical, AC, detailing, body repair and other specialist work.", detail: "A flow that fits the service" },
  { number: "04", title: "Multi-branch teams", description: "Organise operations, staff and records with a more consistent company-wide structure.", detail: "Shared operational structure" },
];

export default function ForWorkshopsPage() {
  return (
    <>
      <PublicHeader />
      <main id="main-content" className="bg-[#f7f9fd]">
        <section className="marketing-hero marketing-hero-dark relative overflow-hidden text-white">
          <div className="page-shell relative grid items-center gap-10 py-16 sm:py-22 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
            <div>
              <p className="eyebrow !text-blue-300">BUILT FOR SERVICE TEAMS</p>
              <h1 className="marketing-text-balance mt-5 text-[clamp(38px,5vw,64px)] font-extrabold leading-[1.09] tracking-[-.058em]">Your workshop runs on teamwork. Your software should too.</h1>
              <p className="mt-6 max-w-xl text-[16px] leading-8 text-slate-300 sm:text-[17px]">Keep the front desk, technicians and managers connected around every vehicle service visit.</p>
              <div className="responsive-actions mt-8">
                <Link href="/signup" className="button-primary focus-ring inline-flex">Create workshop account <span aria-hidden="true">↗</span></Link>
                <Link href="/features" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 px-5 py-3 text-[14px] font-bold text-white transition hover:bg-white/10 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-300">Explore features <span aria-hidden="true" className="ml-2">→</span></Link>
              </div>
            </div>
            <div className="rounded-[24px] border border-white/15 bg-white/10 p-6 shadow-[0_30px_65px_rgba(0,0,0,.12)] backdrop-blur-md sm:p-8">
              <p className="text-[12px] font-extrabold tracking-[.15em] text-blue-200">A TYPICAL SERVICE VISIT</p>
              <ol className="mt-6 space-y-3">
                {[
                  ["01", "Vehicle check-in", "Customer, vehicle & concern"],
                  ["02", "Job in progress", "Inspection, parts & technician updates"],
                  ["03", "Ready for handover", "Quality check & final invoice"],
                ].map(([number, title, copy]) => (
                  <li key={number} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500 text-sm font-bold">{number}</span>
                    <div><h2 className="text-[16px] font-bold">{title}</h2><p className="mt-1 text-[13px] leading-6 text-slate-300">{copy}</p></div>
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-xs text-slate-300">Illustrative workflow · Modules may vary by workspace</p>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-shell">
            <SectionLead eyebrow="A FIT FOR DIFFERENT TEAMS" title="One foundation. Different workshop workflows." description="From a local independent garage to a multi-team service operation, keep your daily work better organised." />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {workshopTypes.map((item) => (
                <article key={item.number} className="marketing-card surface-card-hover flex flex-col p-7 sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="marketing-number" aria-hidden="true">{item.number}</span>
                    <span className="h-px w-14 bg-blue-100" aria-hidden="true" />
                  </div>
                  <h3 className="mt-7 text-[24px] font-extrabold tracking-[-.04em] text-slate-950">{item.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-8 text-slate-600">{item.description}</p>
                  <p className="mt-6 border-t border-slate-100 pt-5 text-[13px] font-bold text-blue-700"><span aria-hidden="true">✓ </span>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <BottomCTA eyebrow="A SIMPLER WORKSHOP DAY" title="Give your team one place to work." description="See the service process in action, then set up the workspace that fits your team." href="/how-it-works" label="See the workflow" secondaryHref="/signup" secondaryLabel="Get started" />
      </main>
      <PublicFooter />
    </>
  );
}

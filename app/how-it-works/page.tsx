import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import { BottomCTA, PageHero, SectionLead } from "@/components/MarketingBlocks";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Follow the workshop service process from vehicle check-in through estimate, repair, invoicing and delivery.",
};

const phases = [
  { number: "01", label: "INTAKE", title: "Welcome & inspect", description: "Start each service visit with the right information.", steps: [
    ["01", "Check in the customer", "Find or create the customer and select their vehicle."],
    ["02", "Inspect the vehicle", "Record the concern, inspection notes and recommended work."],
  ] },
  { number: "02", label: "PLAN", title: "Estimate & approve", description: "Make the planned job clear to the team.", steps: [
    ["03", "Prepare an estimate", "Bring proposed parts and labour into an estimate."],
    ["04", "Confirm approval", "Move approved work into the active job queue."],
  ] },
  { number: "03", label: "SERVICE", title: "Repair & review", description: "Keep the workshop and front desk in sync.", steps: [
    ["05", "Complete the repair", "Update the job as technicians make progress."],
    ["06", "Quality check", "Review the work before final handover."],
  ] },
  { number: "04", label: "HANDOVER", title: "Invoice & deliver", description: "Close out the visit with a useful service history.", steps: [
    ["07", "Invoice and payment", "Prepare the invoice and record payment details."],
    ["08", "Vehicle delivery", "Close the job and retain its history for next time."],
  ] },
];

export default function HowItWorksPage() {
  return (
    <>
      <PublicHeader />
      <main id="main-content" className="bg-[#f7f9fd]">
        <PageHero dark eyebrow="THE SERVICE JOURNEY" title="From check-in to handover. One connected flow." description="Give advisors, technicians and workshop managers a shared view of what needs to happen next.">
          <div className="marketing-flow-dark flex flex-wrap items-center gap-3 text-[13px] font-semibold text-blue-100">
            {["Check-in", "Approve", "Repair", "Deliver"].map((step, index) => (
              <span key={step} className="flex items-center gap-3">
                {index > 0 ? <span aria-hidden="true" className="text-blue-300">→</span> : null}
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">{step}</span>
              </span>
            ))}
          </div>
        </PageHero>

        <section className="section-pad">
          <div className="page-shell">
            <SectionLead eyebrow="THE WORKFLOW" title="Eight simple steps, organised into four stages." description="Each stage carries information forward so your team spends less time searching for updates." />
            <ol className="mt-10 grid gap-5 lg:grid-cols-2">
              {phases.map((phase) => (
                <li key={phase.number} className="marketing-card h-full p-6 sm:p-8">
                  <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
                    <span className="marketing-number" aria-hidden="true">{phase.number}</span>
                    <div>
                      <p className="text-[11px] font-extrabold tracking-[.15em] text-blue-600">{phase.label}</p>
                      <h3 className="mt-2 text-[23px] font-extrabold tracking-[-.04em] text-slate-950">{phase.title}</h3>
                      <p className="mt-2 text-[14px] leading-6 text-slate-600">{phase.description}</p>
                    </div>
                  </div>
                  <ol className="mt-6 space-y-6">
                    {phase.steps.map(([number, title, copy]) => (
                      <li key={number} className="flex items-start gap-4">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-100 text-[13px] font-extrabold text-blue-700">{number}</span>
                        <div><h4 className="text-[16px] font-extrabold text-slate-900">{title}</h4><p className="mt-1 text-[14px] leading-6 text-slate-600">{copy}</p></div>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-14 sm:py-18">
          <div className="page-shell grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionLead eyebrow="SHARED INFORMATION" title="The details stay with the job." description="The people handling intake, service and billing can work from the same service record instead of recreating information at every handover." />
            </div>
            <div className="marketing-card grid gap-3 p-6 sm:p-8">
              {["Customer & vehicle record", "Service notes & job status", "Parts, labour & estimate", "Invoice & visit history"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-[#f3f7ff] px-4 py-3.5 text-[15px] font-semibold text-slate-800">
                  <span className="marketing-check" aria-hidden="true">✓</span>{item}
                </div>
              ))}
              <Link href="/features" className="focus-ring mt-3 inline-flex items-center gap-2 rounded-lg py-2 font-bold text-blue-700 hover:text-blue-900">Explore workshop features <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>
        <BottomCTA eyebrow="READY FOR A CLEARER WORKFLOW?" title="Bring your workshop into one workspace." description="Create a workshop account and choose the features that match your operations." href="/signup" label="Create workshop account" secondaryHref="/for-workshops" secondaryLabel="Who it's for" />
      </main>
      <PublicFooter />
    </>
  );
}

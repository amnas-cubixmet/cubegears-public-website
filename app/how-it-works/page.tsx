import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Follow the workshop service process from vehicle check-in through estimate, repair, invoicing and delivery.",
};

const steps = [
  ["01", "Check in the customer", "Create or find the customer and select the vehicle for the visit."],
  ["02", "Inspect the vehicle", "Record the complaint, findings and the work needed."],
  ["03", "Prepare the estimate", "Organise proposed parts and labour into an estimate."],
  ["04", "Get approval", "Move approved work into the team's active job queue."],
  ["05", "Complete the work", "Keep technicians and repair progress aligned."],
  ["06", "Quality check", "Review the completed work before final delivery."],
  ["07", "Invoice and payment", "Generate the final invoice and record payment details."],
  ["08", "Deliver with history", "Close the job and keep its history for the next visit."],
];

export default function HowItWorksPage() {
  return (
    <>
      <PublicHeader />
      <main id="main-content" className="bg-white">
        <section className="relative overflow-hidden bg-[#0a1d3b] text-white">
          <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="page-shell relative py-18 sm:py-24">
            <p className="eyebrow !text-blue-300">THE SERVICE JOURNEY</p>
            <h1 className="mt-5 max-w-4xl text-[clamp(40px,5vw,64px)] font-extrabold leading-[1.1] tracking-[-.055em]">From arrival to delivery, every step connected.</h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-slate-300">A clear workflow helps the front desk and workshop floor work from the same information.</p>
          </div>
        </section>
        <section className="section-pad bg-[#f7f9fd]">
          <div className="page-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">THE WORKFLOW</p>
              <h2 className="section-title mt-4">Eight steps. One workspace.</h2>
            </div>
            <ol className="mt-10 grid gap-4 md:grid-cols-2">
              {steps.map(([number, title, description]) => (
                <li key={number} className="surface-card surface-card-hover flex gap-5 p-6 sm:p-7">
                  <span aria-hidden="true" className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-lg font-extrabold text-blue-700">{number}</span>
                  <div>
                    <h3 className="text-xl font-extrabold tracking-[-.025em] text-slate-900">{title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-slate-600">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-11 flex flex-col items-start justify-between gap-6 rounded-[24px] bg-[#eaf2ff] p-7 sm:flex-row sm:items-center sm:p-9">
              <div><h2 className="text-[25px] font-extrabold tracking-[-.04em] text-slate-950">Ready to organise your workshop?</h2><p className="mt-2 text-[15px] leading-7 text-slate-600">Create your CubeGears workspace to get started.</p></div>
              <Link href="/signup" className="button-primary focus-ring inline-flex">Create workshop account ↗</Link>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}

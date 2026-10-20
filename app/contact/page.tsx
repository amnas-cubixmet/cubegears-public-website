import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = {
  title: "Contact & Onboarding",
  description: "Learn how to get started with CubeGears and choose the right workshop onboarding path.",
};

const topics = [
  { title: "New workshop setup", description: "Create a company workspace and begin the owner onboarding flow." },
  { title: "Product questions", description: "Explore feature modules, job workflows and workshop operations." },
  { title: "Billing questions", description: "Learn how feature credits, usage and settlement are configured." },
  { title: "Growing teams", description: "See how roles, staff and branches can fit into your operations." },
];

export default function ContactPage() {
  const contactEmail = process.env.CONTACT_EMAIL?.trim();
  return (
    <>
      <PublicHeader />
      <main id="main-content" className="bg-[#f7f9fd]">
        <section className="page-shell grid gap-12 py-18 sm:py-24 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">LET&apos;S GET YOUR WORKSHOP READY</p>
            <h1 className="mt-5 text-[clamp(40px,5vw,64px)] font-extrabold leading-[1.09] tracking-[-.06em] text-[#0b1d37]">A better way to run your workshop starts here.</h1>
            <p className="section-copy mt-6 max-w-xl">Find your next step, explore what CubeGears can do, or begin creating your workshop account.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/signup" className="button-primary focus-ring inline-flex">Create workshop account ↗</Link>
              {contactEmail ? <a className="button-secondary focus-ring" href={"mailto:" + contactEmail}>Email our team →</a> : <Link className="button-secondary focus-ring" href="/how-it-works">See how it works →</Link>}
            </div>
            {contactEmail ? <p className="mt-4 break-all text-[14px] text-slate-600">Email: {contactEmail}</p> : null}
          </div>
          <div className="surface-card p-6 sm:p-9">
            <p className="eyebrow">HOW WE CAN HELP</p>
            <div className="mt-6 grid gap-4">
              {topics.map((topic, index) => (
                <div key={topic.title} className="flex gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-700">0{index + 1}</span>
                  <div><h2 className="text-[17px] font-extrabold text-slate-900">{topic.title}</h2><p className="mt-2 text-[14px] leading-7 text-slate-600">{topic.description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-slate-200 bg-white py-16">
          <div className="page-shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div><h2 className="section-title">Want to see the full workflow?</h2><p className="section-copy mt-3">See how CubeGears connects each step of a service job.</p></div>
            <Link href="/how-it-works" className="button-primary focus-ring inline-flex">Explore the workflow ↗</Link>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}

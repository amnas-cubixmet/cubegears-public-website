import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

const topics = [
  ["Sales", "Questions about using CubixGear for your workshop."],
  ["Product", "Questions about modules, workflow and workshop features."],
  ["Onboarding", "Help planning workshop setup and account structure."],
  ["Partnerships", "For multi-branch and business partnership discussions."],
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0b1220]">
      <PublicHeader />

      <section className="page-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.14em] text-[#1769ff]">Contact</span>
          <h1 className="mt-4 max-w-xl text-[40px] font-black leading-[1.03] tracking-[-.05em] sm:text-[56px]">
            Talk to us about your workshop.
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-7 text-slate-600">
            Choose the area you need help with. Contact delivery can be connected to your backend or CRM later.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {topics.map(([title, text]) => (
              <div key={title} className="rounded-[16px] border border-slate-200 bg-white p-4">
                <h2 className="text-[13px] font-black">{title}</h2>
                <p className="mt-1 text-[11px] leading-5 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,.04)] sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[.14em] text-[#1769ff]">Start here</p>
          <h2 className="mt-2 text-[28px] font-black tracking-[-.035em]">New workshop?</h2>
          <p className="mt-3 text-[13px] leading-6 text-slate-500">
            The fastest path is to create your workshop account. Your signup captures the basic company and owner details needed for onboarding.
          </p>

          <Link href="/signup" className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#1769ff] px-6 text-[13px] font-extrabold text-white">
            Create Workshop Account →
          </Link>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <p className="text-[12px] font-bold text-slate-700">Already planning a custom deployment?</p>
            <p className="mt-2 text-[11px] leading-5 text-slate-500">
              You can later connect this page to email, CRM, WhatsApp or a backend contact endpoint without changing the visual layout.
            </p>
          </div>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}

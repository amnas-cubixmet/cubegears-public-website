import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = {
  title: "Workshop Features",
  description: "Explore customer management, job cards, inventory, invoicing, staff and reporting tools for workshops.",
};

const groups = [
  { number: "01", title: "Customers & vehicles", desc: "Keep records and service history together, and find the right information when a vehicle returns.", items: ["Customer records", "Vehicle profiles", "Service history", "Balances"] },
  { number: "02", title: "Service & job cards", desc: "Move each workshop job through inspection, estimates, approvals, work, quality checks and delivery.", items: ["Job cards", "Inspections", "Estimates", "Work status", "Quality checks"] },
  { number: "03", title: "Stock & inventory", desc: "Organise parts and consumables with movements and clearer day-to-day stock visibility.", items: ["Parts catalogue", "Stock movements", "Suppliers", "Low-stock tracking"] },
  { number: "04", title: "Invoices & expenses", desc: "Connect labour and parts estimates with invoices, payments and operating expenses.", items: ["Estimates", "Invoices", "Payment records", "Expenses"] },
  { number: "05", title: "Staff & attendance", desc: "Bring team information, roles, shifts and attendance into the same workshop workspace.", items: ["Staff", "Roles", "Attendance", "Leave", "Shifts"] },
  { number: "06", title: "Reports & visibility", desc: "See how jobs, stock and operations are moving without switching between disconnected records.", items: ["Job overview", "Stock reports", "Business insights", "Team activity"] },
];

export default function FeaturesPage() {
  return (
    <>
      <PublicHeader />
      <main id="main-content" className="bg-[#f7f9fd]">
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="soft-grid pointer-events-none absolute inset-0" />
          <div className="page-shell relative py-18 text-center sm:py-24">
            <p className="eyebrow justify-center">BUILT FOR REAL WORKSHOP WORK</p>
            <h1 className="mx-auto mt-5 max-w-4xl text-[clamp(40px,5vw,64px)] font-extrabold leading-[1.09] tracking-[-.06em] text-[#0b1d37]">Connected tools for every part of your day.</h1>
            <p className="section-copy mx-auto mt-6 max-w-2xl">From front desk to workshop floor, CubeGears keeps your day-to-day operations in one place.</p>
          </div>
        </section>
        <section className="section-pad">
          <div className="page-shell grid gap-5 md:grid-cols-2">
            {groups.map((group) => (
              <article key={group.title} className="surface-card surface-card-hover p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-lg font-extrabold text-blue-700">{group.number}</span>
                  <span className="h-px w-20 bg-blue-100" />
                </div>
                <h2 className="mt-7 text-[24px] font-extrabold tracking-[-.04em] text-slate-900">{group.title}</h2>
                <p className="mt-4 text-[15px] leading-8 text-slate-600">{group.desc}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {group.items.map((item) => <span key={item} className="rounded-full border border-blue-100 bg-[#f3f7ff] px-3 py-2 text-[13px] font-semibold text-slate-700">{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="border-t border-slate-200 bg-white py-16">
          <div className="page-shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div><h2 className="section-title">Choose your workshop tools.</h2><p className="section-copy mt-3">Explore credit-based modules that fit your workflow.</p></div>
            <Link href="/pricing" className="button-primary focus-ring inline-flex">How pricing works ↗</Link>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}

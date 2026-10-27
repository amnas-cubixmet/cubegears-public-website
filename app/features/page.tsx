import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import { BottomCTA, PageHero, SectionLead } from "@/components/MarketingBlocks";

export const metadata: Metadata = {
  title: "Workshop Features",
  description: "Explore customer management, job cards, inventory, invoicing, staff and reporting tools for workshops.",
};

const groups = [
  { number: "01", title: "Customers & vehicles", desc: "See customer profiles, vehicle details and service history together each time a vehicle returns.", items: ["Customer records", "Vehicle profiles", "Service history", "Balances"] },
  { number: "02", title: "Service & job cards", desc: "Give each job a clear path from initial inspection through estimates, repair work and delivery.", items: ["Job cards", "Inspections", "Estimates", "Quality checks"] },
  { number: "03", title: "Stock & inventory", desc: "Keep track of the parts and consumables your team uses during daily service operations.", items: ["Parts catalogue", "Stock movements", "Suppliers", "Stock visibility"] },
  { number: "04", title: "Invoices & expenses", desc: "Make the handoff from parts and labour to estimates, invoices and payment records easier.", items: ["Estimates", "Invoices", "Payment records", "Expenses"] },
  { number: "05", title: "Staff & attendance", desc: "Keep your people, access roles and attendance information in a shared workspace.", items: ["Staff", "Roles", "Attendance", "Leave & shifts"] },
  { number: "06", title: "Reports & visibility", desc: "Understand how work is moving without collecting updates from multiple disconnected files.", items: ["Job overview", "Stock reports", "Business insights", "Team activity"] },
];

export default function FeaturesPage() {
  return (
    <>
      <PublicHeader />
      <main id="main-content" className="bg-[#f7f9fd]">
        <PageHero eyebrow="ONE CONNECTED WORKSPACE" title="Tools that work together, just like your team." description="From the service desk to the workshop floor, CubeGears keeps the details of each service visit in one place." center>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Customer & vehicle", "Job card", "Parts & labour", "Invoice"].map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true" className="text-blue-400">→</span> : null}
                <span className="marketing-chip">{step}</span>
              </div>
            ))}
          </div>
        </PageHero>

        <section className="section-pad">
          <div className="page-shell">
            <SectionLead eyebrow="WORKSHOP CAPABILITIES" title="Everything your workshop needs to stay organised." description="Explore the connected areas of your daily operation. Availability of optional modules depends on the features activated for your workspace." />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {groups.map((group) => (
                <article key={group.number} className="marketing-card surface-card-hover flex h-full flex-col p-6 sm:p-9">
                  <div className="flex items-center justify-between gap-4">
                    <span className="marketing-number" aria-hidden="true">{group.number}</span>
                    <span className="text-[11px] font-extrabold uppercase tracking-[.15em] text-slate-400">Workshop tools</span>
                  </div>
                  <h3 className="mt-7 text-[23px] font-extrabold tracking-[-.04em] text-slate-950 sm:text-[25px]">{group.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">{group.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
                    {group.items.map((item) => <span key={item} className="marketing-chip">{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-14 sm:py-18">
          <div className="page-shell grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div>
              <SectionLead eyebrow="CONNECTED BY DESIGN" title="One service visit. A clearer record." description="Keep the steps of a job together, from intake to final billing, instead of switching between spreadsheets and chat threads." />
              <Link href="/how-it-works" className="focus-ring mt-6 inline-flex items-center gap-2 rounded-lg py-2 font-bold text-blue-700 hover:text-blue-900">See the service workflow <span aria-hidden="true">→</span></Link>
            </div>
            <div className="marketing-card p-6 sm:p-8">
              {[
                ["01", "Check-in", "Customer and vehicle details"],
                ["02", "Service", "Job notes, parts and work status"],
                ["03", "Handover", "Invoice and service history"],
              ].map(([number, title, body], index) => (
                <div key={number} className={"flex gap-4 " + (index < 2 ? "border-b border-slate-100 pb-5 mb-5" : "")}>
                  <span className="marketing-number" aria-hidden="true">{number}</span>
                  <div>
                    <p className="text-[16px] font-extrabold text-slate-950">{title}</p>
                    <p className="mt-1 text-[14px] leading-6 text-slate-600">{body}</p>
                  </div>
                  <span className="ml-auto self-center text-blue-500" aria-hidden="true">✓</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <BottomCTA eyebrow="GROW AT YOUR OWN PACE" title="Choose the tools your team needs." description="Explore how modules and credit-based usage work before setting up your workspace." href="/pricing" label="Explore pricing" secondaryHref="/signup" secondaryLabel="Create account" />
      </main>
      <PublicFooter />
    </>
  );
}

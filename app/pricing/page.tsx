import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = {
  title: "Feature Credits & Billing",
  description: "Understand CubeGears flexible feature credits, workshop modules and storage billing.",
};

const billing = [
  { number: "01", title: "Core workspace", note: "Included essentials", description: "Start with the dashboard, staff management and SaaS account tools. Access still follows your team's permissions.", items: ["Dashboard", "Staff management", "SaaS account"] },
  { number: "02", title: "Optional features", note: "Credit-based usage", description: "Activate workshop modules as needed. Credit rates and active-user rules are controlled by the platform billing configuration.", items: ["Feature activation", "Active-user usage", "Configured credit rates"] },
  { number: "03", title: "Storage & settlement", note: "Usage tracked separately", description: "Storage allowances and usage charges follow the platform settings. Review charge details in your workspace.", items: ["Storage allowance", "Usage records", "Billing calendar"] },
];

export default function PricingPage() {
  return (
    <>
      <PublicHeader />
      <main id="main-content" className="bg-[#f7f9fd]">
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="soft-grid pointer-events-none absolute inset-0" />
          <div className="page-shell relative py-18 text-center sm:py-24">
            <p className="eyebrow justify-center">FLEXIBLE FEATURE CREDITS</p>
            <h1 className="mx-auto mt-5 max-w-4xl text-[clamp(40px,5vw,64px)] font-extrabold leading-[1.09] tracking-[-.06em] text-[#0b1d37]">A workshop setup that fits your workflow.</h1>
            <p className="section-copy mx-auto mt-6 max-w-2xl">CubeGears uses configurable feature credits rather than the fixed Starter and Growth subscriptions previously shown here.</p>
          </div>
        </section>
        <section className="section-pad">
          <div className="page-shell">
            <div className="grid gap-5 lg:grid-cols-3">
              {billing.map((item, index) => (
                <article key={item.title} className={"surface-card flex flex-col p-7 sm:p-8 " + (index === 1 ? "ring-2 ring-blue-300" : "")}>
                  <p className="text-[12px] font-extrabold tracking-[.12em] text-blue-600">{item.number} / {item.note.toUpperCase()}</p>
                  <h2 className="mt-6 text-[27px] font-extrabold tracking-[-.045em] text-slate-900">{item.title}</h2>
                  <p className="mt-4 min-h-[115px] text-[15px] leading-7 text-slate-600">{item.description}</p>
                  <div className="mt-4 flex-1 border-t border-slate-100 pt-6">
                    {item.items.map((detail) => <p key={detail} className="mb-3 flex gap-3 text-[14px] font-semibold text-slate-700"><span className="text-blue-600" aria-hidden="true">✓</span>{detail}</p>)}
                  </div>
                  <Link href="/signup" className={index === 1 ? "button-primary focus-ring mt-6 inline-flex" : "button-secondary focus-ring mt-6"}>Create workshop account ↗</Link>
                </article>
              ))}
            </div>
            <div className="mt-9 rounded-[20px] border border-blue-100 bg-blue-50 px-6 py-5 text-[14px] leading-7 text-blue-950">
              <strong>About pricing:</strong> Live credit rates, minimum credit rules, storage pricing and billing dates are configured by the SaaS administrator. No fixed prices are published on this page. Review the current applicable charges in the product before activating paid tools.
            </div>
          </div>
        </section>
        <section className="border-t border-slate-200 bg-white py-16">
          <div className="page-shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div><h2 className="section-title">Explore CubeGears features.</h2><p className="section-copy mt-3">See the tools you can add to your workshop workflow.</p></div>
            <Link href="/features" className="button-primary focus-ring inline-flex">Explore features ↗</Link>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}

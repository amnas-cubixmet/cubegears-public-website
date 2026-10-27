import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import { BottomCTA, PageHero, SectionLead } from "@/components/MarketingBlocks";

export const metadata: Metadata = {
  title: "Feature Credits & Billing",
  description: "Understand CubeGears flexible feature credits, optional modules and storage billing.",
};

const billing = [
  { number: "01", eyebrow: "INCLUDED ESSENTIALS", title: "Start with the essentials", description: "Begin with the core workspace before deciding which additional tools your team needs.", items: ["Dashboard", "Staff management", "SaaS account tools"] },
  { number: "02", eyebrow: "OPTIONAL MODULES", title: "Activate the right tools", description: "Enable workshop features according to your workflow. Usage and rates follow the platform's configured credit rules.", items: ["Feature activation", "Active-user billing rules", "Configurable credit rates"] },
  { number: "03", eyebrow: "USAGE & RECORDS", title: "Keep charges visible", description: "Review the applicable storage allowances, feature usage and billing records inside your company workspace.", items: ["Storage allowance", "Usage and charge records", "Billing calendar"] },
];

const faqs = [
  ["Is CubeGears a fixed monthly subscription?", "CubeGears uses feature credits instead of the old fixed Starter and Growth subscriptions. Billing depends on the modules and rules configured for your workspace."],
  ["Where can I see the current credit prices?", "Current feature-credit rates and minimum rules are configured by the SaaS administrator. Check the applicable charges in your workspace before activating a paid feature."],
  ["How is storage billed?", "Free allowances, storage rates and the billing method depend on platform settings. The applicable records and charges can be reviewed in your workspace."],
  ["When are credits settled?", "The settlement schedule is controlled by platform billing settings. Check your workspace for the current billing calendar and any payment due dates."],
];

export default function PricingPage() {
  return (
    <>
      <PublicHeader />
      <main id="main-content" className="bg-[#f7f9fd]">
        <PageHero eyebrow="FLEXIBLE FEATURE CREDITS" title="Only the workshop tools you choose to activate." description="Start with core tools, add optional modules and review applicable usage rules in your own workspace." center>
          <Link href="/signup" className="button-primary focus-ring inline-flex">Create workshop account <span aria-hidden="true">↗</span></Link>
          <p className="mt-3 text-[13px] text-slate-500">No fixed public credit rates are shown here.</p>
        </PageHero>

        <section className="section-pad">
          <div className="page-shell">
            <SectionLead eyebrow="HOW CREDIT BILLING WORKS" title="A clear path from setup to usage." description="Your workshop can start with the core workspace, then select the modules it uses for daily operations." />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {billing.map((item, index) => (
                <article key={item.number} className={"marketing-card flex h-full flex-col p-6 sm:p-8 " + (index === 1 ? "border-blue-300 shadow-[0_18px_50px_rgba(36,94,245,.09)]" : "")}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="marketing-number" aria-hidden="true">{item.number}</span>
                    {index === 1 ? <span className="rounded-full bg-blue-600 px-3 py-1.5 text-[11px] font-extrabold text-white">FLEXIBLE SETUP</span> : null}
                  </div>
                  <p className="mt-7 text-[11px] font-extrabold tracking-[.15em] text-blue-600">{item.eyebrow}</p>
                  <h3 className="mt-2 text-[24px] font-extrabold leading-tight tracking-[-.04em] text-slate-950">{item.title}</h3>
                  <p className="mt-4 flex-1 text-[15px] leading-7 text-slate-600">{item.description}</p>
                  <ul className="mt-7 space-y-4 border-t border-slate-100 pt-6">
                    {item.items.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-[14px] font-semibold leading-6 text-slate-700"><span className="marketing-check" aria-hidden="true">✓</span>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-4 rounded-2xl border border-blue-200 bg-[#eaf2ff] px-6 py-6 text-[14px] leading-7 text-[#23416b] sm:flex-row sm:items-start sm:px-8">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-xl font-extrabold text-blue-600" aria-hidden="true">i</span>
              <p><strong>Important:</strong> Live credit prices, minimum credit rules, storage charges and settlement dates are set by the SaaS administrator. The exact charges may vary with configuration. Always review the current rates inside CubeGears before activating paid tools.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-14 sm:py-18">
          <div className="page-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <SectionLead eyebrow="COMMON QUESTIONS" title="Understand the billing model before you begin." description="Credit usage is designed to be visible in your workspace. Here are a few useful details about the setup." />
              <Link href="/contact" className="focus-ring mt-6 inline-flex items-center gap-2 rounded-lg py-2 font-bold text-blue-700 hover:text-blue-900">Questions about onboarding? <span aria-hidden="true">→</span></Link>
            </div>
            <div className="space-y-3">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group marketing-card px-5 py-1 sm:px-6">
                  <summary className="focus-ring flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                    {question}<span aria-hidden="true" className="shrink-0 text-2xl font-normal text-blue-600 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="border-t border-slate-100 pb-5 pt-4 text-[14px] leading-7 text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <BottomCTA eyebrow="EXPLORE THE PLATFORM" title="See the tools behind your workshop workflow." description="Find the features that make sense for your workshop, then create your workspace." href="/features" label="Explore features" secondaryHref="/signup" secondaryLabel="Create account" />
      </main>
      <PublicFooter />
    </>
  );
}

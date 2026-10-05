import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

const plans = [
  ["Starter", "For small workshops moving from paper or spreadsheets.", ["Customers & vehicles", "Job cards", "Services", "Basic invoices"]],
  ["Growth", "For active workshops that need connected daily operations.", ["Everything in Starter", "Inventory & stock", "Payments & expenses", "Staff & attendance"]],
  ["Multi-Branch", "For larger businesses managing multiple workshop locations.", ["Everything in Growth", "Branch operations", "Advanced reports", "Central management"]],
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0b1220]">
      <PublicHeader />

      <section className="border-b border-slate-200 bg-white">
        <div className="page-shell py-16 text-center sm:py-20">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.14em] text-[#1769ff]">Pricing</span>
          <h1 className="mx-auto mt-4 max-w-3xl text-[40px] font-black leading-[1.03] tracking-[-.05em] sm:text-[58px]">
            Plans that can grow with your workshop.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-slate-600">
            Final subscription pricing can be connected to your billing backend when plans are confirmed.
          </p>
        </div>
      </section>

      <section className="page-shell py-16 sm:py-20">
        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map(([name, description, items], index) => (
            <article key={name as string} className={"rounded-[22px] border bg-white p-6 sm:p-7 " + (index === 1 ? "border-blue-300 shadow-[0_18px_50px_rgba(23,105,255,.09)]" : "border-slate-200")}>
              {index === 1 ? <span className="rounded-full bg-blue-50 px-3 py-1 text-[9px] font-black uppercase tracking-[.12em] text-[#1769ff]">Popular</span> : null}
              <h2 className="mt-4 text-[24px] font-black tracking-[-.03em]">{name as string}</h2>
              <p className="mt-3 min-h-12 text-[13px] leading-6 text-slate-500">{description as string}</p>
              <p className="mt-6 text-[26px] font-black tracking-[-.035em] text-[#1769ff]">Pricing on request</p>
              <div className="mt-6 space-y-3">
                {(items as string[]).map((item) => (
                  <p key={item} className="text-[12px] font-semibold text-slate-600">✓ {item}</p>
                ))}
              </div>
              <Link href="/signup" className={"mt-7 inline-flex h-11 w-full items-center justify-center rounded-xl text-[12px] font-extrabold " + (index === 1 ? "bg-[#1769ff] text-white" : "border border-slate-200 text-slate-800")}>
                Create workshop account
              </Link>
            </article>
          ))}
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}

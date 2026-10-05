import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

const types = [
  ["Independent garages", "Keep daily jobs, customers, parts and billing organised without complex systems."],
  ["Service centres", "Give advisors, mechanics and managers one shared workflow for every vehicle."],
  ["Multi-branch workshops", "Standardise operations and reporting across branches as the business grows."],
  ["Specialist workshops", "Use the same platform for electrical, AC, detailing, body repair and specialist service teams."],
];

export default function ForWorkshopsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0b1220]">
      <PublicHeader />

      <section className="bg-[#0b1731] text-white">
        <div className="page-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.14em] text-blue-200">For workshops</span>
            <h1 className="mt-4 max-w-3xl text-[40px] font-black leading-[1.03] tracking-[-.05em] sm:text-[58px]">
              Built around the way automobile workshops actually work.
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-300">
              CubixGear helps small teams and growing workshop businesses move from scattered records to a consistent digital workflow.
            </p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[.06] p-6">
            <p className="text-[11px] font-bold uppercase tracking-[.14em] text-blue-300">Core job flow</p>
            <p className="mt-4 text-[18px] font-black leading-8">
              New → Inspection → Estimate Pending → Approved → In Progress → Waiting for Parts → QC → Ready for Delivery → Delivered
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell py-16 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2">
          {types.map(([title, text]) => (
            <article key={title} className="rounded-[22px] border border-slate-200 bg-white p-6 sm:p-7">
              <h2 className="text-[20px] font-black tracking-[-.025em]">{title}</h2>
              <p className="mt-3 text-[13px] leading-6 text-slate-500">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[24px] border border-blue-100 bg-blue-50 p-7 sm:p-9">
          <h2 className="text-[28px] font-black tracking-[-.035em]">Start with your workshop profile.</h2>
          <p className="mt-3 max-w-2xl text-[13px] leading-6 text-slate-600">
            Create the workshop account first. Customers, vehicles, job cards, stock, invoices and staff can then connect to the same company workspace.
          </p>
          <Link href="/signup" className="mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-[#1769ff] px-6 text-[13px] font-extrabold text-white">
            Sign up your workshop →
          </Link>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}

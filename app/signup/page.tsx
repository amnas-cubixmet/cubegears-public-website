import type { Metadata } from "next";
import Link from "next/link";
import SignupForm from "./signup-form";

export const metadata: Metadata = {
  title: "Create Workshop Account",
  description: "Create your CubixGear workshop account.",
};

const benefits = [
  "Customer and vehicle management",
  "Job cards and service workflow",
  "Inventory and stock tracking",
  "Invoices and payment records",
  "Staff, attendance and reports",
];

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#0b1220]">
      <header className="border-b border-slate-200 bg-white">
        <div className="page-shell flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#1769ff] text-sm font-black text-white">C</span>
            <span className="text-[17px] font-black tracking-[-0.03em]">CUBIXGEAR</span>
          </Link>
          <Link href="/" className="text-sm font-bold text-slate-500 transition hover:text-slate-950">
            ← Back to website
          </Link>
        </div>
      </header>

      <section className="page-shell grid gap-10 py-10 sm:py-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:py-20">
        <aside className="self-start rounded-[28px] bg-[#07111f] p-7 text-white sm:p-9 lg:sticky lg:top-24">
          <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-[.15em] text-blue-200">
            New workshop
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-.045em] sm:text-5xl">
            Set up your workshop on CubixGear.
          </h1>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            Create the owner account and workshop profile. This signup is structured
            for direct connection to the CubixGear backend.
          </p>

          <div className="mt-9 space-y-3">
            {benefits.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-white/[.06] px-4 py-3 text-sm font-semibold text-slate-200">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#1769ff] text-[11px] font-black text-white">✓</span>
                {item}
              </div>
            ))}
          </div>
        </aside>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,.06)] sm:p-9">
          <div className="mb-8 border-b border-slate-100 pb-7">
            <p className="text-xs font-black uppercase tracking-[.17em] text-[#1769ff]">Sign up</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-.04em]">Create your workshop account</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Enter your workshop and owner details below.
            </p>
          </div>

          <SignupForm />
        </div>
      </section>
    </main>
  );
}

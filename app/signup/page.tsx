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
    <main className="min-h-screen bg-[#f6f8fb] text-[#0b1220]">
      <header className="border-b border-slate-200 bg-white">
        <div className="page-shell flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[11px] bg-[#1769ff] text-sm font-black text-white">
              C
            </span>
            <span className="truncate text-[16px] font-black tracking-[-0.035em]">
              CUBIX<span className="text-[#1769ff]">GEAR</span>
            </span>
          </Link>
          <Link
            href="/"
            className="focus-ring shrink-0 rounded-lg px-2 py-2 text-[12px] font-bold text-slate-500 transition hover:bg-slate-50 hover:text-slate-950 sm:text-[13px]"
          >
            ← Back
          </Link>
        </div>
      </header>

      <section className="page-shell grid gap-6 py-7 sm:py-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-10 lg:py-14">
        <aside className="self-start overflow-hidden rounded-[24px] bg-[#07111f] p-6 text-white sm:p-8 lg:sticky lg:top-20">
          <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.15em] text-blue-200">
            New workshop
          </span>

          <h1 className="mt-5 text-[34px] font-black leading-[1.04] tracking-[-.045em] sm:text-[44px]">
            Set up your workshop on CubixGear.
          </h1>

          <p className="mt-4 max-w-lg text-[14px] leading-7 text-slate-300">
            Create your workshop profile and owner account to get started with a more organised service operation.
          </p>

          <div className="mt-7 space-y-2.5">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[13px] border border-white/[.06] bg-white/[.05] px-3.5 py-3 text-[12px] font-semibold text-slate-200"
              >
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#1769ff] text-[9px] font-black text-white">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </aside>

        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,.05)] sm:p-8 lg:p-9">
          <div className="mb-7 border-b border-slate-100 pb-6">
            <p className="text-[10px] font-black uppercase tracking-[.17em] text-[#1769ff]">
              Sign up
            </p>
            <h2 className="mt-2 text-[28px] font-black leading-tight tracking-[-.04em] sm:text-[32px]">
              Create your workshop account
            </h2>
            <p className="mt-2 text-[13px] leading-6 text-slate-500">
              Enter the primary workshop and owner details.
            </p>
          </div>

          <SignupForm />
        </div>
      </section>
    </main>
  );
}

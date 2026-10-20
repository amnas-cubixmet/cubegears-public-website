import type { Metadata } from "next";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import SignupForm from "./signup-form";

export const metadata: Metadata = {
  title: "Create Workshop Account",
  description: "Set up a workshop and owner account in CubeGears.",
  robots: { index: false, follow: false },
};

const benefits = [
  "Bring customers and vehicles together",
  "Organise job cards and service visits",
  "Connect stock, estimates and invoices",
  "Give your team a shared workspace",
];

export default function SignupPage() {
  return (
    <>
      <PublicHeader />
      <main id="main-content" className="min-h-[calc(100svh-76px)] bg-[#f4f7fc]">
        <section className="page-shell grid items-start gap-7 py-9 sm:py-14 lg:grid-cols-[.83fr_1.17fr] lg:gap-10">
          <aside className="relative overflow-hidden rounded-[26px] bg-[#091c38] p-7 text-white sm:p-10 lg:sticky lg:top-24">
            <div className="pointer-events-none absolute -right-32 -top-24 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="relative">
              <p className="eyebrow !text-blue-300">NEW WORKSPACE</p>
              <h1 className="mt-6 text-[clamp(35px,4vw,49px)] font-extrabold leading-[1.1] tracking-[-.055em]">Your workshop. One connected workspace.</h1>
              <p className="mt-5 text-[16px] leading-8 text-slate-300">Create your workshop profile and owner account to begin using CubeGears.</p>
              <ul className="mt-9 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-[15px] leading-6 text-slate-200">
                    <span aria-hidden="true" className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-600 text-xs font-bold text-white">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="surface-card min-w-0 p-6 sm:p-9">
            <p className="eyebrow">WORKSHOP SIGN UP</p>
            <h2 className="mt-3 text-[30px] font-extrabold tracking-[-.045em] text-slate-950 sm:text-[36px]">Create your account</h2>
            <p className="mt-3 text-[15px] leading-7 text-slate-600">Enter the workshop and owner contact details. A secure password setup link will be emailed after successful registration.</p>
            <div className="my-8 h-px bg-slate-100" />
            <SignupForm />
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}

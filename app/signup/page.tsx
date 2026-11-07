import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import SignupForm from "./signup-form";

export const metadata: Metadata = {
  title: "Get Started | CubeGears",
  description: "Create your car wash, detailing or automotive workshop management account.",
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return (
    <>
      <PublicHeader />
      <main id="main-content" className="min-h-[calc(100svh-76px)] bg-[#f5f8fd]">
        <section className="mx-auto w-full max-w-[690px] px-4 py-7 sm:px-6 sm:py-14">
          <div className="min-w-0 rounded-[18px] border border-slate-200 bg-white px-5 py-7 shadow-[0_20px_65px_rgba(13,35,76,.07)] sm:rounded-[26px] sm:px-10 sm:py-11">
            <p className="text-center text-[12px] font-bold uppercase tracking-[.16em] text-blue-700">CubeGears · Workshop Management</p>
            <h1 className="mt-4 text-center text-[clamp(30px,5vw,42px)] font-extrabold leading-tight tracking-[-.045em] text-[#10233e]">Get started with CubeGears</h1>
            <p className="mx-auto mt-3 max-w-md text-center text-[15px] leading-7 text-slate-600">Set up your car wash, detailing studio or automotive workshop in one connected workspace.</p>
            <div className="mt-7 border-t border-slate-100 pt-6 sm:mt-9 sm:pt-8">
              <SignupForm />
            </div>
            <p className="mt-6 text-center text-[14px] leading-6 text-slate-600">
              Already have an account?{" "}
              <a href="https://cubegears-company-panel-three.vercel.app/login" className="focus-ring inline-flex min-h-11 items-center font-bold text-blue-700 underline-offset-4 hover:underline">Log in</a>
            </p>
            <p className="mt-4 text-center text-[12px] leading-6 text-slate-500">After registration, follow the secure password setup link sent to your email.</p>
          </div>
          <p className="mt-6 text-center text-[13px] text-slate-500">Want to learn more? <Link href="/features" className="font-semibold text-blue-700 hover:underline">Explore features</Link></p>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}

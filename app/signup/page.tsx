import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import { WorkshopPhoto } from "@/components/WorkshopPhoto";
import SignupForm from "./signup-form";

export const metadata: Metadata = {
  title: "Create Workshop Account | CubeGears",
  description: "Register your car garage, bike workshop or automotive service centre and create your CubeGears workspace.",
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return (
    <>
      <PublicHeader />
      <main id="main-content" className="signup-stage min-h-[calc(100svh-76px)]">
        <section className="page-shell py-7 sm:py-12 lg:py-16">
          <div className="signup-grid">
            <div className="flex min-w-0 flex-col gap-4">
              <WorkshopPhoto photo="bikeService" priority className="signup-story h-[360px] flex-1 lg:min-h-[580px]" caption="Car & two-wheeler service" sizes="(max-width: 1024px) 100vw, 45vw">
                <span className="photo-label"><span className="photo-label-dot" /> CUBEGEARS · WORKSHOP SOFTWARE</span>
                <h1 className="mt-5 max-w-md text-[clamp(32px,3.8vw,54px)] font-extrabold leading-[1.07] tracking-[-.06em]">
                  A better way to run <span className="text-[#ff7983]">every service job.</span>
                </h1>
                <p className="mt-4 max-w-sm text-[15px] leading-7 text-white/80">
                  One connected workspace for car garages, motorcycle service centres and the people behind every repair.
                </p>
              </WorkshopPhoto>
              <div className="grid gap-3 rounded-xl border border-[#e9e8e7] bg-white p-5 sm:grid-cols-3">
                {["Vehicle job cards", "Parts & invoices", "Team access roles"].map((benefit, index) => (
                  <div key={benefit} className={"flex items-center gap-2 text-[13px] font-semibold text-[#4d5053] " + (index < 2 ? "sm:border-r sm:border-[#ece9e8]" : "")}>
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#ffe9eb] text-[#c51b29]" aria-hidden="true">✓</span>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="signup-card min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="eyebrow">WORKSHOP SIGN UP</p>
                <span className="rounded-md bg-[#fff0f1] px-3 py-1.5 text-[11px] font-extrabold text-[#ba1625]">STEP 01 · WORKSHOP DETAILS</span>
              </div>
              <h2 className="mt-5 text-[clamp(30px,3.5vw,46px)] font-extrabold leading-[1.1] tracking-[-.055em] text-[#17191b]">Create your account.</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#6b6d70]">
                Enter your workshop and owner contact details. After registration, we&apos;ll send the secure password setup link to your email.
              </p>

              <div className="mt-7 border-t border-[#eeeae9] pt-7">
                <SignupForm />
              </div>

              <p className="mt-6 text-center text-[14px] leading-7 text-[#65676a]">
                Already have a workshop account?{" "}
                <a href="https://cubegears-company-panel-three.vercel.app/login" className="focus-ring inline-flex min-h-11 items-center font-extrabold text-[#bc1726] hover:underline">Sign in</a>
              </p>
              <p className="mt-2 text-center text-[12px] leading-6 text-[#85888a]">
                Your details are sent to the CubeGears registration service. Account setup is completed through a secure email link.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-[13px] text-[#77797b]">
            <span>Want to see what&apos;s included?</span>
            <Link href="/features" className="font-bold text-[#b81725] hover:underline">Explore platform features</Link>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}

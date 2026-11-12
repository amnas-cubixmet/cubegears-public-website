import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import SignupForm from "./signup-form";

export const metadata: Metadata = {
  title: "Create Workshop Account | cubixgear",
  description: "Register your car garage, bike workshop or automotive service centre and create your cubixgear workspace.",
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  const panelUrl = process.env.COMPANY_PANEL_URL?.trim() || process.env.FRONTEND_URL?.trim()
    || (process.env.NODE_ENV === "development" ? "http://localhost:5173" : "");
  let signInUrl = null;
  if (panelUrl) {
    try {
      const url = new URL("/login", panelUrl);
      if (url.protocol === "https:" || (process.env.NODE_ENV === "development" && url.protocol === "http:")) {
        signInUrl = url.href;
      }
    } catch {
      // Retain the existing header link when the panel URL is misconfigured.
    }
  }

  return (
    <>
      <div className={signInUrl ? "[&_.site-signin-button]:!hidden" : undefined}>
        <PublicHeader />
      </div>
      <main id="main-content" className="signup-stage min-h-[calc(100svh-76px)]">
        <section className="page-shell mx-auto max-w-[830px] py-6 sm:py-12 lg:py-16">
          <div className="signup-card min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="eyebrow">WORKSHOP SIGN UP</p>
              <span className="rounded-lg bg-[#eaf2ff] px-3 py-1.5 text-[11px] font-extrabold text-[#245bd5]">STEP 01 · WORKSHOP DETAILS</span>
            </div>
            <h1 className="mt-5 text-[clamp(31px,4vw,46px)] font-extrabold leading-[1.12] tracking-[-.055em] text-[#10233f]">Create your workshop account</h1>
            <p className="mt-4 max-w-[590px] text-[15px] leading-7 text-[#586a80]">
              Start your cubixgear workspace for car and motorcycle service. Enter your workshop and owner details to register.
            </p>

            <div className="mt-8">
              <SignupForm signInUrl={signInUrl} />
            </div>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-[13px] text-[#65758b]">
            <Link href="/features" className="font-bold text-[#245bd5] hover:underline">Explore platform features</Link>
            <Link href="/how-it-works" className="font-bold text-[#245bd5] hover:underline">Learn how it works</Link>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}

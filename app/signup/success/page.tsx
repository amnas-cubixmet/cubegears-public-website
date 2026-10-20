import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = { title: "Check Your Email", robots: { index: false, follow: false } };

export default function SignupSuccessPage() {
  return (
    <>
      <PublicHeader />
      <main id="main-content" className="min-h-[calc(100svh-76px)] bg-[#f4f7fc]">
        <section className="page-shell grid min-h-[calc(100svh-76px)] place-items-center py-12">
          <div className="surface-card w-full max-w-2xl px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-50 text-4xl font-black text-emerald-600" aria-hidden="true">✓</div>
            <p className="eyebrow mt-8 justify-center">ACCOUNT REQUEST RECEIVED</p>
            <h1 className="mt-4 text-[clamp(32px,4vw,46px)] font-extrabold leading-[1.12] tracking-[-.055em] text-slate-950">Check your email to get started.</h1>
            <p className="mx-auto mt-5 max-w-lg text-[16px] leading-8 text-slate-600">If you just completed signup successfully, follow the secure password setup link sent to your account email. Check your spam folder if you do not see it.</p>
            <Link href="/" className="button-primary focus-ring mt-9 inline-flex">Back to CubeGears ↗</Link>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}

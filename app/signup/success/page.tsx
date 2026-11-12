import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = { title: "Workshop Registration", robots: { index: false, follow: false } };

export default async function SignupSuccessPage({ searchParams }: { searchParams: Promise<{ mode?: string }> }) {
  const params = await searchParams;
  const passwordCreated = params?.mode === "password";
  return (
    <>
      <PublicHeader />
      <main id="main-content" className="min-h-[calc(100svh-76px)] bg-[#f5f8ff]">
        <section className="page-shell grid min-h-[calc(100svh-76px)] place-items-center py-10 sm:py-16">
          <div className="marketing-card w-full max-w-2xl px-6 py-12 text-center sm:px-12 sm:py-16">
            <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-blue-50 text-4xl font-black text-[#2563eb]" aria-hidden="true">✓</span>
            <p className="eyebrow mt-8 justify-center">REGISTRATION SUBMITTED</p>
            <h1 className="marketing-text-balance mx-auto mt-4 text-[clamp(32px,4vw,46px)] font-extrabold leading-[1.12] tracking-[-.055em] text-[#17283d]">{passwordCreated ? "Your workshop account is ready" : "Check your inbox for the next step"}</h1>
            <p className="mx-auto mt-5 max-w-lg text-[16px] leading-8 text-slate-600">{passwordCreated
              ? "Your password has been created. Sign in with your registered mobile number or email and complete your workshop setup."
              : "Use the secure password setup link sent to your email. Messages may appear in spam or promotions."}</p>
            <div className="mt-8 rounded-2xl bg-[#eff5ff] p-5 text-left sm:p-6">
              <p className="text-[12px] font-extrabold tracking-[.12em] text-[#245bd5]">WHAT TO DO NEXT</p>
              <ol className="mt-4 space-y-3 text-[14px] leading-6 text-slate-700">
                <li className="flex gap-3"><span className="font-extrabold text-[#245bd5]">01</span> {passwordCreated ? "Open the cubixgear sign-in page." : "Open the secure setup email."}</li>
                <li className="flex gap-3"><span className="font-extrabold text-[#245bd5]">02</span> {passwordCreated ? "Sign in with your mobile number or email and password." : "Follow the secure link and create your password."}</li>
                <li className="flex gap-3"><span className="font-extrabold text-[#245bd5]">03</span> Sign in through the cubixgear Company Panel and complete workshop setup.</li>
              </ol>
            </div>
            <div className="responsive-actions mt-8 justify-center">
              <a href="https://app.cubixgear.tech/login" className="button-primary focus-ring inline-flex">Sign in to cubixgear</a>
              <Link href="/contact" className="button-secondary focus-ring">Need more guidance?</Link>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}

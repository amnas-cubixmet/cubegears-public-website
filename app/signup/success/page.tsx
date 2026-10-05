import Link from "next/link";

export default function SignupSuccessPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f7f9fc] px-4 py-12">
      <section className="w-full max-w-xl rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-[0_18px_60px_rgba(15,23,42,.07)] sm:p-12">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-green-50 text-2xl font-black text-green-600">✓</div>
        <p className="mt-6 text-xs font-black uppercase tracking-[.17em] text-[#1769ff]">Account created</p>
        <h1 className="mt-3 text-3xl font-black tracking-[-.04em] sm:text-4xl">
          Your workshop is ready.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500">
          CubixGear received your signup successfully. The backend can later return
          onboarding or company-panel information for the next step.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-[#1769ff] px-6 text-sm font-extrabold text-white transition hover:bg-[#0a4de0]"
        >
          Back to CubixGear
        </Link>
      </section>
    </main>
  );
}

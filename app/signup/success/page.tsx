import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-[#1769ff] text-sm font-black text-white">
        C
      </span>
      <span className="text-[16px] font-black tracking-[-0.035em]">
        Cubix<span className="text-[#1769ff]">Gear</span>
      </span>
    </Link>
  );
}

export default function SignupSuccessPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <header className="border-b border-slate-200 bg-white">
        <div className="page-shell flex h-16 items-center">
          <Logo />
        </div>
      </header>

      <section className="page-shell grid min-h-[calc(100svh-64px)] place-items-center py-10">
        <div className="w-full max-w-2xl rounded-[24px] border border-slate-200 bg-white px-6 py-12 text-center shadow-[0_18px_60px_rgba(15,23,42,.06)] sm:px-10 sm:py-16">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-50 ring-8 ring-emerald-50/50">
            <span className="text-[38px] font-black text-emerald-500">✓</span>
          </div>

          <p className="mt-7 text-[10px] font-black uppercase tracking-[.16em] text-[#1769ff]">
            Check your email
          </p>
          <h1 className="mt-3 text-[30px] font-black tracking-[-.04em] text-[#0a1530] sm:text-[40px]">
            Your workshop is almost ready
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[13px] leading-6 text-slate-500">
            We sent a secure password setup link to your email. Open that email and create your password to activate access to the CubixGear dashboard.
          </p>

          <Link
            href="/"
            className="focus-ring mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-[#1769ff] px-7 text-[13px] font-extrabold text-white shadow-[0_12px_28px_rgba(23,105,255,.2)] transition hover:bg-[#0a4de0]"
          >
            Back to CubixGear <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

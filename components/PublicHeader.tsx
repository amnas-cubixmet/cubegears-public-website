import Link from "next/link";

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[.06] bg-white/95 backdrop-blur-xl">
      <div className="page-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="CubixGear home">
          <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-[#1769ff] text-sm font-black text-white shadow-[0_8px_22px_rgba(23,105,255,.22)]">
            C
          </span>
          <span className="text-[16px] font-black tracking-[-0.035em]">
            Cubix<span className="text-[#1769ff]">Gear</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-[12px] font-semibold text-slate-600 lg:flex">
          <Link href="/features" className="transition hover:text-[#1769ff]">Features</Link>
          <Link href="/how-it-works" className="transition hover:text-[#1769ff]">How it works</Link>
          <Link href="/for-workshops" className="transition hover:text-[#1769ff]">For workshops</Link>
          <Link href="/pricing" className="transition hover:text-[#1769ff]">Pricing</Link>
          <Link href="/contact" className="transition hover:text-[#1769ff]">Contact</Link>
        </nav>

        <Link
          href="/signup"
          className="focus-ring inline-flex h-10 items-center justify-center rounded-[10px] bg-[#1769ff] px-4 text-[12px] font-bold text-white transition hover:bg-[#0a4de0]"
        >
          Sign up
        </Link>
      </div>
      <nav className="page-shell flex gap-5 overflow-x-auto border-t border-slate-100 py-2.5 text-[10px] font-bold text-slate-500 lg:hidden">
        <Link href="/features" className="shrink-0">Features</Link>
        <Link href="/how-it-works" className="shrink-0">How it works</Link>
        <Link href="/for-workshops" className="shrink-0">For workshops</Link>
        <Link href="/pricing" className="shrink-0">Pricing</Link>
        <Link href="/contact" className="shrink-0">Contact</Link>
      </nav>
    </header>
  );
}

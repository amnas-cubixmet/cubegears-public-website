import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="page-shell grid gap-6 py-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-[#1769ff] text-sm font-black text-white">C</span>
            <span className="text-[15px] font-black tracking-[-0.03em]">
              Cubix<span className="text-[#1769ff]">Gear</span>
            </span>
          </Link>
          <p className="mt-3 max-w-md text-[12px] leading-5 text-slate-500">
            Workshop management software for modern automobile service teams.
          </p>
        </div>
        <p className="text-[11px] text-slate-400">© {new Date().getFullYear()} CubixGear. All rights reserved.</p>
      </div>
    </footer>
  );
}

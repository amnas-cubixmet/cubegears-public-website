"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Brand } from "./Brand";

const links = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function PublicHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="page-shell flex h-[76px] items-center justify-between gap-5">
        <Brand />
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={"site-nav-link focus-ring " + (pathname === href ? "site-nav-link-active" : "")}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/signup" className="button-primary focus-ring hidden sm:inline-flex">
            Start your workshop <span aria-hidden="true">↗</span>
          </Link>
          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? (
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            ) : (
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-slate-100 bg-white lg:hidden">
          <div className="page-shell flex flex-col gap-1 py-3">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={"focus-ring rounded-xl px-4 py-3 text-[15px] font-semibold " + (pathname === href ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50")}
              >
                {label}
              </Link>
            ))}
            <Link href="/for-workshops" onClick={() => setMenuOpen(false)} className="focus-ring rounded-xl px-4 py-3 text-[15px] font-semibold text-slate-700 hover:bg-slate-50">
              For workshops
            </Link>
            <Link href="/signup" onClick={() => setMenuOpen(false)} className="button-primary focus-ring mt-2 justify-center sm:hidden">Start your workshop ↗</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

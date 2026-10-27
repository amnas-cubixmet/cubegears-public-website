import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
  center?: boolean;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, dark = false, center = false, children }: PageHeroProps) {
  return (
    <section className={"marketing-hero relative overflow-hidden border-b " + (dark ? "marketing-hero-dark text-white" : "")}>
      <div className={"page-shell relative py-16 sm:py-22 " + (center ? "text-center" : "")}>
        <p className={"eyebrow " + (dark ? "!text-blue-300 " : "") + (center ? "justify-center" : "")}>{eyebrow}</p>
        <h1 className={"marketing-text-balance mt-5 text-[clamp(38px,5vw,64px)] font-extrabold leading-[1.09] tracking-[-.058em] " + (center ? "mx-auto max-w-4xl " : "max-w-4xl ") + (dark ? "text-white" : "text-[#0b1d37]")}>{title}</h1>
        <p className={"mt-6 max-w-2xl text-[16px] leading-[1.8] sm:text-[17px] " + (center ? "mx-auto " : "") + (dark ? "text-slate-300" : "text-slate-600")}>{description}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

type SectionLeadProps = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
};

export function SectionLead({ eyebrow, title, description, center = false }: SectionLeadProps) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={"eyebrow " + (center ? "justify-center" : "")}>{eyebrow}</p>
      <h2 className="section-title marketing-text-balance mt-4">{title}</h2>
      {description ? <p className="section-copy mt-4">{description}</p> : null}
    </div>
  );
}

type BottomCTAProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  label: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function BottomCTA({ eyebrow, title, description, href, label, secondaryHref, secondaryLabel }: BottomCTAProps) {
  return (
    <section className="bg-white py-12 sm:py-18">
      <div className="page-shell">
        <div className="marketing-cta flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="relative max-w-2xl">
            <p className="eyebrow !text-blue-300">{eyebrow}</p>
            <h2 className="marketing-text-balance mt-4 text-[clamp(28px,3.4vw,40px)] font-extrabold leading-[1.16] tracking-[-.045em]">{title}</h2>
            <p className="mt-4 text-[15px] leading-7 text-slate-300">{description}</p>
          </div>
          <div className="responsive-actions relative shrink-0">
            <Link href={href} className="button-primary focus-ring inline-flex">{label} <span aria-hidden="true">↗</span></Link>
            {secondaryHref && secondaryLabel ? <Link href={secondaryHref} className="button-secondary focus-ring">{secondaryLabel} <span aria-hidden="true">→</span></Link> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

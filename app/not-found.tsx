import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export default function NotFound() {
  return (
    <>
      <PublicHeader />
      <main id="main-content" className="page-shell grid min-h-[65vh] place-items-center py-18 text-center">
        <div>
          <p className="eyebrow justify-center">404 · PAGE NOT FOUND</p>
          <h1 className="mt-5 text-[clamp(38px,5vw,58px)] font-extrabold tracking-[-.06em] text-slate-950">This page has taken a wrong turn.</h1>
          <p className="section-copy mx-auto mt-5 max-w-lg">The link may have changed. Go back to the website and explore CubeGears.</p>
          <Link href="/" className="button-primary focus-ring mt-8 inline-flex">Return home ↗</Link>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}

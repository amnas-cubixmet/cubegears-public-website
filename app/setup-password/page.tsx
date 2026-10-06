import type { Metadata } from "next";
import Link from "next/link";
import SetupPasswordForm from "./setup-password-form";

export const metadata: Metadata = {
  title: "Set Your Password",
  description: "Set up your CubixGear workshop account password.",
};

type PageProps = {
  searchParams: Promise<{
    uid?: string;
    token?: string;
  }>;
};

export default async function SetupPasswordPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const uid = params.uid || "";
  const token = params.token || "";

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-[#0b1220]">
      <header className="border-b border-slate-200 bg-white">
        <div className="page-shell flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[11px] bg-[#1769ff] text-sm font-black text-white">
              C
            </span>
            <span className="truncate text-[16px] font-black tracking-[-0.035em]">
              CUBIX<span className="text-[#1769ff]">GEAR</span>
            </span>
          </Link>
        </div>
      </header>

      <section className="page-shell grid min-h-[calc(100svh-64px)] place-items-center py-8 sm:py-12">
        <div className="w-full max-w-[520px] rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,.06)] sm:p-9">
          <p className="text-[10px] font-black uppercase tracking-[.17em] text-[#1769ff]">
            Account security
          </p>
          <h1 className="mt-2 text-[30px] font-black leading-tight tracking-[-.04em] sm:text-[36px]">
            Set your password
          </h1>
          <p className="mt-3 mb-7 text-[13px] leading-6 text-slate-500">
            Create a secure password for your CubixGear workshop account.
          </p>

          <SetupPasswordForm uid={uid} token={token} />
        </div>
      </section>
    </main>
  );
}

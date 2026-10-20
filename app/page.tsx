import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = {
  title: "Workshop Management Software",
  description: "Connect customers, vehicles, job cards, inventory, invoicing and teams with CubeGears workshop software.",
};

const modules = [
  { number: "01", name: "Job cards & service", detail: "Keep every job moving from inspection through delivery.", icon: "▤" },
  { number: "02", name: "Customers & vehicles", detail: "Find the right history for every customer and vehicle.", icon: "◈" },
  { number: "03", name: "Stock & inventory", detail: "Keep track of workshop parts and stock movements.", icon: "⬡" },
  { number: "04", name: "Invoices & payments", detail: "Keep estimates, billing and payments connected.", icon: "▧" },
  { number: "05", name: "Your workshop team", detail: "Organise staff, attendance and access permissions.", icon: "◎" },
  { number: "06", name: "Reports & insights", detail: "Understand your workshop operations in one place.", icon: "▥" },
];

const steps = [
  { number: "01", title: "Create your workspace", body: "Set up the workshop and owner details." },
  { number: "02", title: "Choose your tools", body: "Activate the features your team needs." },
  { number: "03", title: "Run daily operations", body: "Keep work, customers and payments connected." },
];

function ProductPreview() {
  const bars = [42, 72, 56, 85, 67, 93, 74, 86, 62, 94, 81, 99];
  return (
    <div className="relative" aria-label="Illustrative CubeGears dashboard interface">
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-blue-300/25 blur-3xl" />
      <div className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_34px_90px_rgba(19,44,92,.20)]">
        <div className="flex h-12 items-center gap-2 border-b border-slate-200 bg-white px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <span className="ml-3 text-[11px] font-bold tracking-tight text-slate-500">CubeGears · Workshop overview</span>
          <span className="ml-auto rounded-full bg-blue-50 px-2 py-1 text-[9px] font-bold text-blue-700">Preview</span>
        </div>
        <div className="grid min-h-[370px] grid-cols-[62px_minmax(0,1fr)] sm:grid-cols-[136px_minmax(0,1fr)]">
          <aside className="border-r border-slate-200 bg-slate-50 px-2 py-5 sm:px-3">
            <div className="mb-5 flex items-center justify-center gap-2 sm:justify-start">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-blue-600 text-[9px] font-black text-white">CG</span>
              <span className="hidden text-[11px] font-extrabold text-slate-900 sm:block">My workshop</span>
            </div>
            {["Overview", "Job cards", "Customers", "Inventory", "Invoices", "Staff"].map((item, index) => (
              <div key={item} className={"mb-1 flex h-9 items-center justify-center rounded-lg px-2 text-[10px] font-semibold sm:justify-start " + (index === 0 ? "bg-blue-600 text-white" : "text-slate-500")}>
                <span className="sm:hidden">{item.slice(0, 1)}</span>
                <span className="hidden sm:inline">{item}</span>
              </div>
            ))}
          </aside>
          <div className="min-w-0 bg-[#f8faff] p-3 sm:p-5">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[14px] font-extrabold tracking-tight text-slate-950">Good morning!</p>
                <p className="text-[9px] text-slate-400">Your workshop at a glance</p>
              </div>
              <span className="rounded-md bg-blue-600 px-2 py-1.5 text-[9px] font-bold text-white">+ New job</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[["28", "Open jobs"], ["14", "Ready for delivery"], ["06", "Low stock"]].map(([number, label]) => (
                <div key={label} className="rounded-xl border border-slate-200 bg-white p-3">
                  <p className="text-[20px] font-extrabold text-slate-900">{number}</p>
                  <p className="mt-1 text-[9px] leading-3 text-slate-500">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-extrabold text-slate-900">Activity overview</p>
                <p className="text-[9px] text-slate-400">Sample data</p>
              </div>
              <div className="mt-4 flex h-20 items-end gap-[5px]">
                {bars.map((height, index) => (
                  <div key={index} className="flex-1 rounded-t-[3px] bg-gradient-to-t from-blue-600 to-sky-300" style={{ height: height + "%" }} />
                ))}
              </div>
            </div>
            <div className="mt-3 rounded-xl border border-slate-200 bg-white">
              <div className="border-b border-slate-100 px-3 py-2 text-[10px] font-bold text-slate-900">Recent jobs</div>
              {[["JC-021", "Brake service", "In progress"], ["JC-022", "General service", "Ready"], ["JC-023", "AC inspection", "Pending"]].map(([id, job, status]) => (
                <div key={id} className="grid grid-cols-[50px_1fr_auto] items-center gap-2 border-b border-slate-100 px-3 py-2 text-[9px] last:border-0">
                  <span className="font-semibold text-slate-400">{id}</span>
                  <span className="truncate font-semibold text-slate-700">{job}</span>
                  <span className="text-slate-500">{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-slate-500">Illustrative product preview · Not live workshop data</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <PublicHeader />
      <main id="main-content" className="overflow-hidden bg-white">
        <section className="relative overflow-hidden bg-[linear-gradient(150deg,#ffffff_12%,#f1f6ff_72%,#eaf3ff_100%)]">
          <div className="soft-grid pointer-events-none absolute inset-0 opacity-70" />
          <div className="page-shell relative grid gap-14 py-18 sm:py-22 lg:min-h-[720px] lg:grid-cols-[.96fr_1.04fr] lg:items-center lg:gap-12">
            <div className="max-w-xl">
              <span className="eyebrow rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2">WORKSHOP OPERATIONS, CONNECTED</span>
              <h1 className="mt-7 text-[clamp(42px,5vw,70px)] font-[850] leading-[1.07] tracking-[-.065em] text-[#081c3a]">
                Less paperwork. <span className="text-[#245ef5]">More workshop progress.</span>
              </h1>
              <p className="mt-7 max-w-lg text-[17px] leading-[1.85] text-slate-600">
                Bring service jobs, customers, vehicles, stock and invoices into one clear workspace — so your team can focus on the work that matters.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/signup" className="button-primary focus-ring inline-flex">Create workshop account <span aria-hidden="true">↗</span></Link>
                <Link href="/how-it-works" className="button-secondary focus-ring">See how it works <span aria-hidden="true">→</span></Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-[13px] font-semibold text-slate-500">
                <span>✓ Built for vehicle service teams</span>
                <span>✓ Flexible modules</span>
              </div>
            </div>
            <ProductPreview />
          </div>
        </section>

        <section className="section-pad bg-white" id="features">
          <div className="page-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">ONE CONNECTED PLATFORM</p>
              <h2 className="section-title mt-4">Everything in the right place.</h2>
              <p className="section-copy mt-4">Your everyday tools work better when workshop information stays connected.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => (
                <article key={module.name} className="surface-card surface-card-hover p-6">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[24px] font-bold text-blue-600" aria-hidden="true">{module.icon}</span>
                    <span className="text-xs font-bold text-slate-300">{module.number}</span>
                  </div>
                  <h3 className="mt-7 text-[20px] font-extrabold tracking-[-.025em] text-slate-900">{module.name}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">{module.detail}</p>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/features" className="focus-ring inline-flex items-center gap-2 rounded-lg py-2 text-[15px] font-extrabold text-blue-700 hover:text-blue-900">Explore all features <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="section-pad bg-[#f6f9ff]">
          <div className="page-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">GET STARTED</p>
              <h2 className="section-title mt-4">Your workflow, simplified.</h2>
              <p className="section-copy mt-4">A straightforward path from setup to day-to-day workshop management.</p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {steps.map((step) => (
                <article key={step.number} className="surface-card p-7">
                  <span className="text-[32px] font-extrabold tracking-[-.05em] text-blue-600">{step.number}</span>
                  <h3 className="mt-6 text-xl font-extrabold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="page-shell">
            <div className="relative overflow-hidden rounded-[30px] bg-[#091c38] px-6 py-12 text-center text-white sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-24 -top-30 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
              <div className="relative">
                <p className="eyebrow justify-center !text-blue-300">READY TO GET ORGANISED?</p>
                <h2 className="mx-auto mt-5 max-w-2xl text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.15] tracking-[-.045em]">Make every job easier to manage.</h2>
                <p className="mx-auto mt-5 max-w-xl text-[16px] leading-8 text-slate-300">Create a workspace for your workshop and choose the tools you need.</p>
                <Link href="/signup" className="button-primary focus-ring relative mt-8 inline-flex">Get started with CubeGears ↗</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}

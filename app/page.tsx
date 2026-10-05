import Link from "next/link";

const features = [
  {
    title: "Customers & Vehicles",
    text: "Keep customer history, vehicle details, service records and workshop notes together.",
    icon: "01",
  },
  {
    title: "Job Cards & Workflow",
    text: "Move every job from inspection and estimate to approval, repair, QC and delivery.",
    icon: "02",
  },
  {
    title: "Inventory & Stock",
    text: "Track parts, oils and consumables with stock movement, pricing and low-stock visibility.",
    icon: "03",
  },
  {
    title: "Invoices & Payments",
    text: "Create workshop invoices, record payments and keep billing activity easy to review.",
    icon: "04",
  },
  {
    title: "Staff & Attendance",
    text: "Organize workshop teams, attendance, shifts and day-to-day staff activity.",
    icon: "05",
  },
  {
    title: "Reports & Insights",
    text: "See the numbers that matter across jobs, sales, inventory, expenses and operations.",
    icon: "06",
  },
];

const workflow = [
  "Customer & vehicle",
  "Inspection",
  "Estimate",
  "Approval",
  "Work in progress",
  "Quality check",
  "Invoice & payment",
  "Delivery",
];

function LogoMark() {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#1769ff] text-sm font-black text-white shadow-[0_8px_24px_rgba(23,105,255,.28)]">
      C
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9fc] text-[#0b1220]">
      <header className="sticky top-0 z-50 border-b border-black/[.06] bg-white/90 backdrop-blur-xl">
        <div className="page-shell flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="CubixGear home">
            <LogoMark />
            <span className="text-[17px] font-black tracking-[-0.03em]">CUBIXGEAR</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a className="transition hover:text-slate-950" href="#features">Features</a>
            <a className="transition hover:text-slate-950" href="#workflow">How it works</a>
            <a className="transition hover:text-slate-950" href="#workshops">For workshops</a>
          </nav>

          <Link
            href="/signup"
            className="rounded-xl bg-[#1769ff] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#0a4de0]"
          >
            Sign up
          </Link>
        </div>
      </header>

      <section className="relative border-b border-black/[.06] bg-white">
        <div className="soft-grid absolute inset-0 opacity-70" />
        <div className="page-shell relative grid min-h-[760px] items-center gap-14 py-20 lg:grid-cols-[1.03fr_.97fr] lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[.14em] text-blue-700">
              <span className="h-2 w-2 rounded-full bg-[#1769ff]" />
              Workshop operating system
            </div>

            <h1 className="max-w-[760px] text-[48px] font-black leading-[.98] tracking-[-0.055em] text-[#07111f] sm:text-[62px] lg:text-[78px]">
              Run your workshop.
              <span className="block text-[#1769ff]">Without the chaos.</span>
            </h1>

            <p className="mt-7 max-w-[650px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              CubixGear is complete automobile workshop management software for
              customers, vehicles, job cards, inventory, invoices, payments,
              staff, attendance and reports — all from one place.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#1769ff] px-6 text-sm font-extrabold text-white shadow-[0_14px_35px_rgba(23,105,255,.24)] transition hover:-translate-y-0.5 hover:bg-[#0a4de0]"
              >
                Create workshop account
                <span className="ml-2" aria-hidden>→</span>
              </Link>
              <a
                href="#features"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-extrabold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Explore features
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-slate-500">
              <span>✓ Built for workshops</span>
              <span>✓ Mobile friendly</span>
              <span>✓ Backend ready</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -left-8 -top-10 h-44 w-44 rounded-full bg-blue-200/60 blur-3xl" />
            <div className="absolute -bottom-10 -right-6 h-48 w-48 rounded-full bg-cyan-200/50 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-[#07111f] p-3 shadow-[0_35px_80px_rgba(15,23,42,.18)]">
              <div className="rounded-[20px] bg-[#f8fafc] p-4 sm:p-5">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.14em] text-slate-400">Workshop overview</p>
                    <h2 className="mt-1 text-xl font-black tracking-[-.03em]">Good morning, CubixGear</h2>
                  </div>
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#1769ff]">CG</div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    ["18", "Open jobs"],
                    ["07", "Ready"],
                    ["04", "Waiting parts"],
                    ["₹48K", "Today sales"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-white p-3">
                      <p className="text-lg font-black tracking-[-.03em]">{value}</p>
                      <p className="mt-1 text-[11px] font-semibold text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                    <p className="text-sm font-extrabold">Active job cards</p>
                    <span className="text-xs font-bold text-[#1769ff]">View all</span>
                  </div>
                  {[
                    ["JC-1048", "Toyota Innova", "In progress", "bg-blue-50 text-blue-700"],
                    ["JC-1047", "Hyundai i20", "QC", "bg-violet-50 text-violet-700"],
                    ["JC-1046", "Maruti Baleno", "Waiting parts", "bg-amber-50 text-amber-700"],
                  ].map(([job, car, status, color]) => (
                    <div key={job} className="grid grid-cols-[72px_1fr_auto] items-center gap-3 border-b border-slate-100 px-4 py-3 last:border-0">
                      <span className="text-xs font-black text-slate-500">{job}</span>
                      <span className="truncate text-sm font-bold">{car}</span>
                      <span className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold ${color}`}>{status}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-[1fr_auto] items-end gap-4 rounded-2xl bg-[#1769ff] p-4 text-white">
                  <div>
                    <p className="text-xs font-bold text-blue-100">Jobs completed this month</p>
                    <p className="mt-1 text-3xl font-black tracking-[-.04em]">126</p>
                  </div>
                  <div className="flex h-12 items-end gap-1">
                    {[42, 66, 48, 76, 58, 88, 72].map((h, i) => (
                      <span key={i} className="w-2 rounded-full bg-white/70" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="page-shell py-24 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[.18em] text-[#1769ff]">Everything in one place</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-.045em] sm:text-5xl">
            One system for the whole workshop.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Replace scattered registers, spreadsheets and disconnected tools with a
            clear operational workflow your team can actually use.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="group rounded-[22px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,.08)]">
              <div className="mb-10 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-xs font-black text-[#1769ff]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black tracking-[-.025em]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="border-y border-slate-200 bg-white py-24 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[.18em] text-[#1769ff]">Simple workflow</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-.045em] sm:text-5xl">
                From arrival to delivery.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
                Keep every vehicle visible through the complete service journey, so your
                front desk, mechanics and managers stay on the same page.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {workflow.map((item, index) => (
                <div key={item} className="flex min-h-20 items-center gap-4 rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#07111f] text-xs font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-extrabold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="workshops" className="page-shell py-24 sm:py-28">
        <div className="overflow-hidden rounded-[30px] bg-[#07111f] px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.18em] text-blue-300">Built for real workshop operations</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-.045em] sm:text-5xl">
                Ready to bring your workshop into one system?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                Create your workshop account now. The signup flow is prepared to connect
                directly with the CubixGear backend.
              </p>
            </div>
            <div className="lg:text-right">
              <Link
                href="/signup"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#1769ff] px-6 text-sm font-extrabold text-white transition hover:bg-blue-500"
              >
                Sign up for CubixGear <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="page-shell flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div>
              <p className="text-sm font-black tracking-[-.02em]">CUBIXGEAR</p>
              <p className="text-xs text-slate-500">Workshop management software</p>
            </div>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} CubixGear. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

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
    <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-[#1769ff] text-sm font-black text-white shadow-[0_8px_22px_rgba(23,105,255,.22)]">
      C
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f8fb] text-[#0b1220]">
      <header className="sticky top-0 z-50 border-b border-black/[.06] bg-white/92 backdrop-blur-xl">
        <div className="page-shell flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" aria-label="CubixGear home">
            <LogoMark />
            <span className="text-[16px] font-black tracking-[-0.035em]">
              CUBIX<span className="text-[#1769ff]">GEAR</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-[13px] font-semibold text-slate-600 md:flex">
            <a className="transition hover:text-slate-950" href="#features">Features</a>
            <a className="transition hover:text-slate-950" href="#workflow">How it works</a>
            <a className="transition hover:text-slate-950" href="#workshops">For workshops</a>
          </nav>

          <Link
            href="/signup"
            className="focus-ring inline-flex h-10 items-center justify-center rounded-[11px] bg-[#1769ff] px-4 text-[13px] font-bold text-white transition hover:bg-[#0a4de0]"
          >
            Sign up
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-black/[.06] bg-white">
        <div className="soft-grid absolute inset-0 opacity-80" />
        <div className="page-shell relative grid items-center gap-12 py-14 sm:py-18 lg:min-h-[720px] lg:grid-cols-[1.04fr_.96fr] lg:gap-16 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.14em] text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1769ff]" />
              Workshop management software
            </div>

            <h1 className="max-w-[760px] text-[42px] font-black leading-[1.02] tracking-[-0.055em] text-[#07111f] sm:text-[58px] lg:text-[72px]">
              Run your workshop.
              <span className="block text-[#1769ff]">Without the chaos.</span>
            </h1>

            <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-slate-600 sm:text-[17px] sm:leading-8">
              CubixGear brings customers, vehicles, job cards, inventory, invoices,
              payments, staff, attendance and reports into one clear workshop system.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-[#1769ff] px-6 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(23,105,255,.2)] transition hover:-translate-y-0.5 hover:bg-[#0a4de0]"
              >
                Create workshop account
                <span className="ml-2" aria-hidden>→</span>
              </Link>
              <a
                href="#features"
                className="focus-ring inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-extrabold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Explore features
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold text-slate-500">
              <span>✓ Customers to delivery</span>
              <span>✓ Mobile friendly</span>
              <span>✓ Built for service teams</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-200/60 blur-3xl" />
            <div className="absolute -bottom-12 -right-8 h-48 w-48 rounded-full bg-cyan-100 blur-3xl" />

            <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-[#07111f] p-2.5 shadow-[0_28px_70px_rgba(15,23,42,.16)] sm:p-3">
              <div className="rounded-[17px] bg-[#f8fafc] p-3.5 sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[.14em] text-slate-400">
                      Workshop overview
                    </p>
                    <h2 className="mt-1 truncate text-[16px] font-black tracking-[-.025em] sm:text-xl">
                      Today at CubixGear
                    </h2>
                  </div>
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-blue-50 text-[11px] font-black text-[#1769ff]">
                    CG
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {[
                    ["18", "Open jobs"],
                    ["07", "Ready"],
                    ["04", "Waiting"],
                    ["₹48K", "Sales"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-[13px] border border-slate-200 bg-white p-3">
                      <p className="text-[17px] font-black tracking-[-.03em]">{value}</p>
                      <p className="mt-0.5 text-[10px] font-semibold text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-3.5 overflow-hidden rounded-[15px] border border-slate-200 bg-white">
                  <div className="flex items-center justify-between border-b border-slate-100 px-3.5 py-3">
                    <p className="text-[12px] font-extrabold">Active job cards</p>
                    <span className="text-[10px] font-bold text-[#1769ff]">View all</span>
                  </div>

                  {[
                    ["JC-1048", "Toyota Innova", "In progress", "bg-blue-50 text-blue-700"],
                    ["JC-1047", "Hyundai i20", "QC", "bg-violet-50 text-violet-700"],
                    ["JC-1046", "Maruti Baleno", "Waiting parts", "bg-amber-50 text-amber-700"],
                  ].map(([job, car, status, color]) => (
                    <div
                      key={job}
                      className="grid grid-cols-[62px_minmax(0,1fr)] gap-x-2.5 gap-y-1 border-b border-slate-100 px-3.5 py-3 last:border-0 sm:grid-cols-[70px_minmax(0,1fr)_auto] sm:items-center"
                    >
                      <span className="text-[10px] font-black text-slate-500">{job}</span>
                      <span className="truncate text-[12px] font-bold">{car}</span>
                      <span className={"col-start-2 w-fit rounded-full px-2 py-1 text-[9px] font-extrabold sm:col-start-auto " + color}>
                        {status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-3.5 grid grid-cols-[1fr_auto] items-end gap-4 rounded-[15px] bg-[#1769ff] p-4 text-white">
                  <div>
                    <p className="text-[10px] font-bold text-blue-100">Completed this month</p>
                    <p className="mt-1 text-[28px] font-black tracking-[-.04em]">126</p>
                  </div>
                  <div className="flex h-10 items-end gap-1">
                    {[42, 66, 48, 76, 58, 88, 72].map((h, i) => (
                      <span
                        key={i}
                        className="w-1.5 rounded-full bg-white/70 sm:w-2"
                        style={{ height: h + "%" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="page-shell flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-center text-[10px] font-bold uppercase tracking-[.12em] text-slate-400 sm:text-[11px]">
          <span>Independent garages</span>
          <span>Service centres</span>
          <span>Multi-branch workshops</span>
          <span>Auto repair teams</span>
        </div>
      </section>

      <section id="features" className="page-shell py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-black uppercase tracking-[.18em] text-[#1769ff]">
            Everything in one place
          </p>
          <h2 className="mt-3 text-[34px] font-black leading-[1.05] tracking-[-.045em] sm:text-[46px]">
            One system for the whole workshop.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-600">
            Replace scattered registers, spreadsheets and disconnected tools with a
            clear workflow your whole team can follow.
          </p>
        </div>

        <div className="mt-10 grid gap-3.5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-[20px] border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(15,23,42,.07)] sm:p-6"
            >
              <div className="mb-8 flex h-9 w-9 items-center justify-center rounded-[10px] bg-blue-50 text-[10px] font-black text-[#1769ff]">
                {feature.icon}
              </div>
              <h3 className="text-[18px] font-black tracking-[-.025em]">{feature.title}</h3>
              <p className="mt-2.5 text-[13px] leading-6 text-slate-600">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[.18em] text-[#1769ff]">
                Simple workflow
              </p>
              <h2 className="mt-3 text-[34px] font-black leading-[1.05] tracking-[-.045em] sm:text-[46px]">
                From arrival to delivery.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-7 text-slate-600">
                Keep every vehicle visible through the full service journey, so front desk,
                mechanics and managers stay on the same page.
              </p>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {workflow.map((item, index) => (
                <div
                  key={item}
                  className="flex min-h-[68px] items-center gap-3.5 rounded-[16px] border border-slate-200 bg-[#f8fafc] px-4 py-3.5"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#07111f] text-[10px] font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13px] font-extrabold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="workshops" className="page-shell py-20 sm:py-24">
        <div className="overflow-hidden rounded-[26px] bg-[#07111f] px-5 py-10 text-white sm:px-9 sm:py-12 lg:px-12">
          <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[.18em] text-blue-300">
                Built for real workshop operations
              </p>
              <h2 className="mt-3 max-w-2xl text-[34px] font-black leading-[1.05] tracking-[-.045em] sm:text-[46px]">
                Bring your workshop into one clear system.
              </h2>
              <p className="mt-4 max-w-xl text-[14px] leading-7 text-slate-300">
                Create your workshop account and start with a cleaner, connected way to manage daily operations.
              </p>
            </div>

            <Link
              href="/signup"
              className="focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-[#1769ff] px-6 text-sm font-extrabold text-white transition hover:bg-blue-500"
            >
              Sign up for CubixGear <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="page-shell flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <LogoMark />
            <div>
              <p className="text-[13px] font-black tracking-[-.02em]">CUBIXGEAR</p>
              <p className="text-[11px] text-slate-500">Workshop management software</p>
            </div>
          </div>
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} CubixGear. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

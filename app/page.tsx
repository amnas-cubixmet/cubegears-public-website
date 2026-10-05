import Link from "next/link";

const features = [
  ["Customer Management", "Keep customer profiles and service history in one place.", "👤"],
  ["Vehicle Management", "Manage multiple vehicles and complete service records.", "🚗"],
  ["Job Cards", "Create, assign and track every workshop job clearly.", "📋"],
  ["Services", "Organise service items, labour and repair work.", "🛠"],
  ["Inventory & Stock", "Track parts, consumables and low-stock levels.", "📦"],
  ["Invoices & Billing", "Create professional invoices with parts and labour.", "🧾"],
  ["Payments", "Record paid, pending and partial workshop payments.", "💳"],
  ["Expenses", "Track daily operating costs and workshop expenses.", "📊"],
  ["Staff Management", "Manage your mechanics, advisors and workshop team.", "👥"],
  ["Attendance", "Track shifts, leave, clock-ins and overtime.", "✓"],
  ["Payroll", "Prepare salary, incentives, overtime and advances.", "₹"],
  ["Reports", "Understand sales, jobs, stock and team performance.", "📈"],
];

const workflow = [
  ["Customer arrives", "👤"],
  ["Vehicle added", "🚗"],
  ["Job card", "📄"],
  ["Inspection", "🔍"],
  ["Estimate", "🧾"],
  ["Work in progress", "🔧"],
  ["Invoice & payment", "💳"],
  ["Vehicle delivery", "✓"],
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="CubixGear home">
      <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-[#1769ff] text-sm font-black text-white shadow-[0_8px_22px_rgba(23,105,255,.22)]">
        C
      </span>
      <span className="text-[16px] font-black tracking-[-0.035em]">
        Cubix<span className="text-[#1769ff]">Gear</span>
      </span>
    </Link>
  );
}

function DashboardPreview() {
  return (
    <div className="relative">
      <div className="absolute -left-10 top-8 h-36 w-36 rounded-full bg-blue-200/60 blur-3xl" />
      <div className="absolute -bottom-8 right-0 h-44 w-44 rounded-full bg-cyan-100 blur-3xl" />

      <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,.16)]">
        <div className="flex h-12 items-center justify-between border-b border-slate-200 px-4">
          <Logo />
          <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-500">
            <span className="h-7 w-7 rounded-full bg-slate-100" />
            <span className="hidden sm:inline">Workshop Owner</span>
          </div>
        </div>

        <div className="grid min-h-[410px] grid-cols-[74px_minmax(0,1fr)] sm:grid-cols-[118px_minmax(0,1fr)]">
          <aside className="border-r border-slate-200 bg-[#f8fafc] p-2">
            {["Dashboard", "Customers", "Vehicles", "Job Cards", "Inventory", "Invoices", "Payments", "Reports"].map((item, index) => (
              <div
                key={item}
                className={
                  "mb-1 rounded-[8px] px-2 py-2 text-[8px] font-bold sm:text-[10px] " +
                  (index === 0 ? "bg-[#1769ff] text-white" : "text-slate-500")
                }
              >
                <span className="sm:hidden">{item.slice(0, 3)}</span>
                <span className="hidden sm:inline">{item}</span>
              </div>
            ))}
          </aside>

          <div className="min-w-0 bg-[#f8fafc] p-3 sm:p-4">
            <h3 className="text-sm font-black text-slate-950">Dashboard</h3>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                ["248", "Customers"],
                ["312", "Vehicles"],
                ["86", "Job cards"],
                ["₹4.28L", "Revenue"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[10px] border border-slate-200 bg-white p-2.5">
                  <p className="text-[13px] font-black tracking-[-.02em] text-slate-950">{value}</p>
                  <p className="mt-0.5 text-[8px] font-semibold text-slate-400">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-[12px] border border-slate-200 bg-white p-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-black">Revenue overview</p>
                <span className="text-[8px] text-slate-400">This month</span>
              </div>
              <div className="mt-4 flex h-20 items-end gap-1.5">
                {[34, 55, 44, 72, 48, 84, 64, 91, 58, 76, 96, 69].map((height, index) => (
                  <span
                    key={index}
                    className="flex-1 rounded-t bg-[#1769ff]/80"
                    style={{ height: height + "%" }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-[1.4fr_.6fr]">
              <div className="overflow-hidden rounded-[12px] border border-slate-200 bg-white">
                <div className="border-b border-slate-100 px-3 py-2 text-[9px] font-black">Recent job cards</div>
                {[
                  ["JC-001", "Swift", "In progress"],
                  ["JC-002", "Creta", "Completed"],
                  ["JC-003", "City", "Pending"],
                ].map(([job, car, status]) => (
                  <div key={job} className="grid grid-cols-[44px_1fr_auto] gap-2 border-b border-slate-100 px-3 py-2 text-[8px] last:border-0">
                    <span className="font-bold text-slate-500">{job}</span>
                    <span className="truncate font-semibold">{car}</span>
                    <span className="text-slate-400">{status}</span>
                  </div>
                ))}
              </div>

              <div className="hidden rounded-[12px] border border-slate-200 bg-white p-3 sm:block">
                <p className="text-[9px] font-black">Quick actions</p>
                <div className="mt-2 space-y-2 text-[8px] font-semibold text-slate-500">
                  <p>+ New job card</p>
                  <p>+ Customer</p>
                  <p>+ Vehicle</p>
                  <p>+ Invoice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#0b1220]">
      <header className="sticky top-0 z-50 border-b border-black/[.06] bg-white/95 backdrop-blur-xl">
        <div className="page-shell flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-7 text-[12px] font-semibold text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-[#1769ff]">Features</a>
            <a href="#workflow" className="transition hover:text-[#1769ff]">How it works</a>
            <a href="#workshops" className="transition hover:text-[#1769ff]">For workshops</a>
          </nav>

          <Link
            href="/signup"
            className="focus-ring inline-flex h-10 items-center justify-center rounded-[10px] bg-[#1769ff] px-5 text-[12px] font-bold text-white shadow-[0_8px_20px_rgba(23,105,255,.2)] transition hover:bg-[#0a4de0]"
          >
            Sign up
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white">
        <div className="soft-grid absolute inset-0 opacity-70" />
        <div className="page-shell relative grid gap-12 py-14 sm:py-16 lg:min-h-[700px] lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-16 lg:py-20">
          <div>
            <div className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.12em] text-[#1769ff]">
              #1 Workshop management software
            </div>

            <h1 className="mt-5 max-w-[640px] text-[42px] font-black leading-[1.03] tracking-[-.055em] text-[#0a1530] sm:text-[58px] lg:text-[66px]">
              Run Your Workshop Smarter with{" "}
              <span className="text-[#1769ff]">CubixGear</span>
            </h1>

            <p className="mt-6 max-w-[610px] text-[15px] leading-7 text-slate-600 sm:text-[17px] sm:leading-8">
              Manage customers, vehicles, job cards, services, inventory, invoices,
              payments, staff, attendance and reports — all from one powerful platform.
            </p>

            <div className="mt-8">
              <Link
                href="/signup"
                className="focus-ring inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#1769ff] px-6 text-sm font-extrabold text-white shadow-[0_14px_32px_rgba(23,105,255,.24)] transition hover:-translate-y-0.5 hover:bg-[#0a4de0] sm:w-auto"
              >
                Get Started Free <span className="ml-3">→</span>
              </Link>
              <p className="mt-2.5 text-[11px] text-slate-400">Set up your workshop account in minutes.</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-semibold text-slate-500">
              <span>◉ Easy to use</span>
              <span>▣ Built for workshops</span>
              <span>◇ Secure & reliable</span>
            </div>
          </div>

          <DashboardPreview />
        </div>
      </section>

      <section id="features" className="border-t border-slate-100 bg-[#fbfcfe] py-18 sm:py-20">
        <div className="page-shell">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[9px] font-black uppercase tracking-[.14em] text-[#1769ff]">
              Powerful features
            </span>
            <h2 className="mt-3 text-[30px] font-black tracking-[-.04em] text-[#0a1530] sm:text-[40px]">
              Everything You Need to Run Your Workshop
            </h2>
            <p className="mt-2 text-[13px] text-slate-500">All essential tools in one simple and powerful platform.</p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {features.map(([title, text, icon]) => (
              <article
                key={title}
                className="rounded-[16px] border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_32px_rgba(15,23,42,.06)]"
              >
                <div className="grid h-9 w-9 place-items-center rounded-[10px] bg-blue-50 text-[16px]">{icon}</div>
                <h3 className="mt-4 text-[13px] font-black leading-[1.15] text-[#0a1530]">{title}</h3>
                <p className="mt-2 text-[10px] leading-4 text-slate-500">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-white py-18 sm:py-20">
        <div className="page-shell">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[9px] font-black uppercase tracking-[.14em] text-[#1769ff]">
              Simple workflow
            </span>
            <h2 className="mt-3 text-[30px] font-black tracking-[-.04em] text-[#0a1530] sm:text-[38px]">
              How It Works
            </h2>
            <p className="mt-2 text-[12px] text-slate-500">
              From customer arrival to vehicle delivery — manage everything smoothly.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
            {workflow.map(([title, icon], index) => (
              <div key={title} className="relative text-center">
                <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-[17px] ring-1 ring-blue-100">
                  {icon}
                </div>
                {index < workflow.length - 1 ? (
                  <span className="absolute left-[calc(50%+28px)] top-[21px] hidden h-px w-[calc(100%-56px)] bg-blue-200 lg:block" />
                ) : null}
                <p className="mx-auto mt-3 max-w-[90px] text-[10px] font-black leading-4 text-[#0a1530]">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workshops" className="border-t border-slate-100 bg-[#f8fbff] py-18 sm:py-20">
        <div className="page-shell">
          <div className="rounded-[24px] bg-[#0b1731] px-5 py-10 text-center text-white sm:px-10 sm:py-12">
            <p className="text-[10px] font-black uppercase tracking-[.16em] text-blue-300">CubixGear for workshops</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-[32px] font-black leading-[1.05] tracking-[-.045em] sm:text-[44px]">
              One clear system for your whole workshop.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[13px] leading-6 text-slate-300">
              Create your workshop account and start managing daily operations in a cleaner, more connected way.
            </p>
            <Link
              href="/signup"
              className="focus-ring mt-7 inline-flex h-12 items-center justify-center rounded-xl bg-[#1769ff] px-6 text-[13px] font-extrabold text-white transition hover:bg-blue-500"
            >
              Create Workshop Account <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="page-shell flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
          <Logo />
          <p className="text-[11px] text-slate-500">© {new Date().getFullYear()} CubixGear. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

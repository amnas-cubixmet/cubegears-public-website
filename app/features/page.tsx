import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

const groups = [
  ["Customers & Vehicles", "Keep customer profiles, vehicles, service history, outstanding balances and reminders together.", ["Customer CRUD", "Multiple vehicles", "Service history", "Outstanding balance"]],
  ["Services & Job Cards", "Run every service job through a clear operational workflow from inspection to delivery.", ["Complaints", "Inspection", "Estimate", "Work progress", "QC", "Photos"]],
  ["Stock & Inventory", "Control parts and consumables with movement history, purchase workflows and job-card deduction.", ["SKU & barcode", "Suppliers", "Stock movement", "Low stock", "Purchase orders"]],
  ["Invoices & Billing", "Create professional estimates and invoices with taxes, labour, parts and payment records.", ["Estimates", "Invoices", "GST", "HSN/SAC", "Payments", "Expenses"]],
  ["Staff & Attendance", "Manage employees, teams, shifts, skills, documents, leave and overtime.", ["Employees", "Roles", "Shifts", "Leave", "Overtime", "Attendance rules"]],
  ["Payroll & Reports", "Connect attendance with payroll and see clear business performance reports.", ["Salary setup", "Incentives", "Payslips", "Sales reports", "Stock reports"]],
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0b1220]">
      <PublicHeader />

      <section className="border-b border-slate-200 bg-white">
        <div className="page-shell py-16 text-center sm:py-20">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.14em] text-[#1769ff]">Features</span>
          <h1 className="mx-auto mt-4 max-w-4xl text-[40px] font-black leading-[1.03] tracking-[-.05em] sm:text-[58px]">
            Everything your workshop needs, connected.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-600">
            CubixGear brings the front desk, workshop floor, inventory, billing and staff operations into one system.
          </p>
        </div>
      </section>

      <section className="page-shell py-16 sm:py-20">
        <div className="grid gap-4 lg:grid-cols-2">
          {groups.map(([title, description, items]) => (
            <article key={title as string} className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,.035)] sm:p-7">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-sm font-black text-[#1769ff]">CG</div>
              <h2 className="mt-5 text-[22px] font-black tracking-[-.03em]">{title as string}</h2>
              <p className="mt-3 text-[13px] leading-6 text-slate-500">{description as string}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {(items as string[]).map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-bold text-slate-600">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[24px] bg-[#0b1731] px-6 py-10 text-center text-white sm:px-10">
          <h2 className="text-[30px] font-black tracking-[-.04em] sm:text-[40px]">Ready to set up your workshop?</h2>
          <Link href="/signup" className="mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-[#1769ff] px-6 text-[13px] font-extrabold text-white">
            Create Workshop Account →
          </Link>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}

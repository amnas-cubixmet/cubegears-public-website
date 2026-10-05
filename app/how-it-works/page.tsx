import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

const steps = [
  ["01", "Customer arrives", "Find or create the customer profile and select the vehicle."],
  ["02", "Vehicle inspection", "Record complaints, inspection findings, photos and required work."],
  ["03", "Estimate", "Prepare labour and parts estimate before starting the repair."],
  ["04", "Approval", "Move approved work into the workshop queue."],
  ["05", "Work in progress", "Assign technicians, update status and consume required parts."],
  ["06", "Quality check", "Complete QC and make sure the vehicle is ready."],
  ["07", "Invoice & payment", "Generate the invoice and record payment status."],
  ["08", "Delivery", "Close the job and keep the complete service history for next time."],
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b1220]">
      <PublicHeader />

      <section className="bg-[#f8fbff]">
        <div className="page-shell py-16 text-center sm:py-20">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.14em] text-[#1769ff]">How it works</span>
          <h1 className="mx-auto mt-4 max-w-4xl text-[40px] font-black leading-[1.03] tracking-[-.05em] sm:text-[58px]">
            One workflow from arrival to delivery.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-600">
            Every step stays connected to the same customer, vehicle and job card so your team always has the right context.
          </p>
        </div>
      </section>

      <section className="page-shell py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          {steps.map(([number, title, description], index) => (
            <div key={number} className="grid gap-4 border-b border-slate-200 py-6 sm:grid-cols-[70px_220px_1fr] sm:items-center">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#1769ff] text-[11px] font-black text-white">{number}</div>
              <h2 className="text-[18px] font-black tracking-[-.02em]">{title}</h2>
              <p className="text-[13px] leading-6 text-slate-500">{description}</p>
              {index === steps.length - 1 ? null : <span className="hidden" />}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/signup" className="inline-flex h-12 items-center justify-center rounded-xl bg-[#1769ff] px-6 text-[13px] font-extrabold text-white">
            Start with CubixGear →
          </Link>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}

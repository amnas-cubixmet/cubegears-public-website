"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createWorkshopAccount } from "@/lib/api";

type FormState = {
  workshopName: string;
  ownerName: string;
  mobile: string;
  email: string;
  terms: boolean;
};

const initialForm: FormState = {
  workshopName: "",
  ownerName: "",
  mobile: "",
  email: "",
  terms: false,
};

const fieldClass =
  "mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-[16px] text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100";
const labelClass = "text-[14px] font-bold text-slate-800";

export default function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    setError("");

    const workshopName = form.workshopName.trim();
    const ownerName = form.ownerName.trim();
    const email = form.email.trim().toLowerCase();
    const mobile = form.mobile.replace(/[\s()-]/g, "");
    if (workshopName.length < 2) {
      setError("Workshop name must contain at least 2 characters.");
      return;
    }
    if (ownerName.length < 2) {
      setError("Owner name must contain at least 2 characters.");
      return;
    }
    if (!/^\+?\d{10,15}$/.test(mobile)) {
      setError("Enter a valid mobile number (10–15 digits).");
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (!form.terms) {
      setError("Please confirm you are authorised to register this workshop.");
      return;
    }

    setLoading(true);
    try {
      await createWorkshopAccount({
        workshopName,
        ownerName,
        mobile,
        email,
      });
      router.push("/signup/success");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className={labelClass} htmlFor="workshopName">Workshop name <span className="text-red-600">*</span></label>
        <input id="workshopName" name="workshopName" className={fieldClass} placeholder="Example Auto Care" autoComplete="organization" maxLength={150} minLength={2} value={form.workshopName} onChange={(e) => setField("workshopName", e.target.value)} required />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="ownerName">Owner name <span className="text-red-600">*</span></label>
          <input id="ownerName" name="ownerName" className={fieldClass} placeholder="Full name" autoComplete="name" maxLength={120} minLength={2} value={form.ownerName} onChange={(e) => setField("ownerName", e.target.value)} required />
        </div>
        <div>
          <label className={labelClass} htmlFor="mobile">Mobile number <span className="text-red-600">*</span></label>
          <input id="mobile" name="mobile" className={fieldClass} placeholder="+91 98765 43210" type="tel" inputMode="tel" autoComplete="tel" maxLength={22} value={form.mobile} onChange={(e) => setField("mobile", e.target.value)} required />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="email">Email address <span className="text-red-600">*</span></label>
        <input id="email" name="email" className={fieldClass} placeholder="owner@workshop.com" type="email" autoComplete="email" maxLength={254} value={form.email} onChange={(e) => setField("email", e.target.value)} required />
      </div>
      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-[14px] leading-6 text-slate-700">
        <input className="mt-1 h-4 w-4 shrink-0 accent-blue-600" type="checkbox" checked={form.terms} onChange={(e) => setField("terms", e.target.checked)} required />
        <span>I confirm I am authorised to create this workshop account and can receive account setup email.</span>
      </label>
      {error ? <div id="signup-error" role="alert" aria-live="assertive" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] font-semibold leading-6 text-red-800">{error}</div> : null}
      <button type="submit" disabled={loading} aria-describedby={error ? "signup-error" : undefined} className="button-primary focus-ring flex w-full !text-[16px] disabled:cursor-not-allowed disabled:opacity-60">
        {loading ? "Creating your workshop…" : "Create workshop account"}
        {!loading && <span aria-hidden="true">↗</span>}
      </button>
    </form>
  );
}

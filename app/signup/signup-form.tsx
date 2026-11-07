"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createWorkshopAccount } from "@/lib/api";

type FormState = {
  workshopName: string;
  ownerName: string;
  countryCode: string;
  mobile: string;
  email: string;
  whatsappConsent: boolean;
  terms: boolean;
};

const initialForm: FormState = {
  workshopName: "",
  ownerName: "",
  countryCode: "+91",
  mobile: "",
  email: "",
  whatsappConsent: false,
  terms: false,
};

const countryCodes = [
  { code: "+91", name: "India", digits: 10 },
  { code: "+971", name: "UAE", digits: 9 },
  { code: "+966", name: "Saudi Arabia", digits: 9 },
  { code: "+974", name: "Qatar", digits: 8 },
  { code: "+968", name: "Oman", digits: 8 },
  { code: "+965", name: "Kuwait", digits: 8 },
  { code: "+973", name: "Bahrain", digits: 8 },
] as const;

const fieldClass =
  "mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-[16px] text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100";
const phoneFieldClass = fieldClass.replace("mt-2 ", "") + " min-w-0 flex-1";
const labelClass = "text-[14px] font-bold text-slate-800";

export default function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const selectedCountry = countryCodes.find((country) => country.code === form.countryCode) ?? countryCodes[0];

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
    const localMobile = form.mobile.replace(/\D/g, "");
    const mobile = `${form.countryCode}${localMobile}`;
    if (workshopName.length < 2) {
      setError("Workshop name must contain at least 2 characters.");
      return;
    }
    if (ownerName.length < 2) {
      setError("Owner name must contain at least 2 characters.");
      return;
    }
    if (localMobile.length !== selectedCountry.digits || !/^\+\d{10,15}$/.test(mobile)) {
      setError(`Enter a valid ${selectedCountry.digits}-digit mobile number for ${selectedCountry.name}.`);
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (!email && !form.whatsappConsent) {
      setError("Enter an email address or consent to receive the setup link by WhatsApp.");
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
        whatsappConsent: form.whatsappConsent,
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="ownerName">Owner name <span className="text-red-600">*</span></label>
          <input id="ownerName" name="ownerName" className={fieldClass} placeholder="Full name" autoComplete="name" maxLength={120} minLength={2} value={form.ownerName} onChange={(e) => setField("ownerName", e.target.value)} required />
        </div>
        <div>
          <label className={labelClass} htmlFor="mobile">Mobile number <span className="text-red-600">*</span></label>
          <div className="mt-2 flex min-w-0 gap-2">
            <select
              id="countryCode"
              name="countryCode"
              aria-label="Country calling code"
              value={form.countryCode}
              onChange={(e) => setField("countryCode", e.target.value)}
              className="h-12 w-[106px] shrink-0 rounded-xl border border-slate-300 bg-white px-2 text-[14px] font-semibold text-slate-900 outline-none transition hover:border-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 sm:w-[110px]"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>{country.code} {country.name}</option>
              ))}
            </select>
            <input
              id="mobile"
              name="mobile"
              className={phoneFieldClass}
              placeholder={selectedCountry.digits === 10 ? "98765 43210" : "Mobile number"}
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              aria-describedby="mobile-help"
              maxLength={15}
              value={form.mobile}
              onChange={(e) => setField("mobile", e.target.value.replace(/\D/g, ""))}
              required
            />
          </div>
          <p id="mobile-help" className="mt-2 text-[12px] leading-5 text-slate-500">Enter the {selectedCountry.digits}-digit number without the country code.</p>
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="email">Email address <span className="text-slate-500">(optional if WhatsApp is selected)</span></label>
        <input id="email" name="email" className={fieldClass} placeholder="owner@workshop.com" type="email" autoComplete="email" maxLength={254} value={form.email} onChange={(e) => setField("email", e.target.value)} />
      </div>
      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-[14px] leading-6 text-slate-700">
        <input className="mt-1 h-4 w-4 shrink-0 accent-blue-600" type="checkbox" checked={form.terms} onChange={(e) => setField("terms", e.target.checked)} required />
        <span>I confirm I am authorised to create this workshop account and receive setup instructions through my selected contact method.</span>
      </label>
      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-[14px] leading-6 text-slate-700">
        <input className="mt-1 h-4 w-4 shrink-0 accent-blue-600" type="checkbox" checked={form.whatsappConsent} onChange={(e) => setField("whatsappConsent", e.target.checked)} />
        <span>I consent to receive the secure password setup link through WhatsApp. This is required when no email address is provided.</span>
      </label>
      {error ? <div id="signup-error" role="alert" aria-live="assertive" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] font-semibold leading-6 text-red-800">{error}</div> : null}
      <button type="submit" disabled={loading} aria-describedby={error ? "signup-error" : undefined} className="button-primary focus-ring flex w-full !text-[16px] disabled:cursor-not-allowed disabled:opacity-60">
        {loading ? "Creating your workshop…" : "Create workshop account"}
        {!loading && <span aria-hidden="true">↗</span>}
      </button>
    </form>
  );
}

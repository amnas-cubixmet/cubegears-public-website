"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createWorkshopAccount } from "@/lib/api";

type FormState = {
  workshopName: string;
  ownerName: string;
  countryCode: string;
  mobile: string;
  email: string;
};

const initialForm: FormState = {
  workshopName: "",
  ownerName: "",
  countryCode: "+91",
  mobile: "",
  email: "",
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

const fieldClass = "signup-input mt-2";
const phoneFieldClass = "signup-input min-w-0 flex-1";
const labelClass = "signup-label";

export default function SignupForm({ signInUrl }: { signInUrl: string | null }) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmationUnknown, setConfirmationUnknown] = useState(false);
  const submitting = useRef(false);
  const selectedCountry = countryCodes.find((country) => country.code === form.countryCode) ?? countryCodes[0];

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (!confirmationUnknown) setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current || submitted || confirmationUnknown) return;
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
    if (!email) {
      setError("Email address is required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    submitting.current = true;
    setLoading(true);
    try {
      const result = await createWorkshopAccount({
        workshopName,
        ownerName,
        mobile,
        email,
        whatsappConsent: false,
      });
      setSubmitted(true);
      if (result.setupDelivery === "email_sent") router.push("/signup/success");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      if (err instanceof TypeError || /confirmation timed out|unable to reach|unreachable|unexpected response|invalid response|temporarily unavailable|HTTP 5\d\d/i.test(message)) {
        setConfirmationUnknown(true);
        setError("Unable to confirm registration. Check your email for a setup link or contact support before trying again.");
      } else if (message.includes("Password setup email is unavailable.")) {
        setError("Password setup email is temporarily unavailable. Please try again later.");
      } else {
        setError(message);
      }
    } finally {
      submitting.current = false;
      setLoading(false);
    }
  }

  const signIn = signInUrl && (
    <p className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-600">
      Already have an account?
      <a href={signInUrl} className="focus-ring rounded-md border border-blue-200 px-3 py-2 font-semibold text-blue-700 hover:bg-blue-50">Sign In</a>
    </p>
  );

  if (submitted) {
    return (
      <div>
        <div role="status">
          <h2 className="text-lg font-bold text-slate-900">Workshop account created</h2>
          <p className="mt-2 text-sm text-slate-600">Email delivery has not been confirmed. Check your inbox and spam folder for a password setup link. Contact support if it doesn’t arrive.</p>
        </div>
        {signIn}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-busy={loading}>
      <div>
        <label className={labelClass} htmlFor="workshopName">Workshop name <span className="text-red-600">*</span></label>
        <input id="workshopName" name="workshopName" className={fieldClass} placeholder="Example Auto Care" autoComplete="organization" maxLength={150} minLength={2} value={form.workshopName} onChange={(e) => setField("workshopName", e.target.value)} required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
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
              onChange={(e) => {
                // The national number must be entered again when changing country:
                // a number from the previous country may have a different length.
                setForm((current) => ({ ...current, countryCode: e.target.value, mobile: "" }));
                if (!confirmationUnknown) setError("");
              }}
              className="signup-input signup-country text-[13px] font-semibold"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>{country.code} {country.name}</option>
              ))}
            </select>
            <input
              id="mobile"
              name="mobile"
              className={phoneFieldClass}
              placeholder={`${selectedCountry.digits}-digit number`}
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={selectedCountry.digits}
              pattern={`[0-9]{${selectedCountry.digits}}`}
              value={form.mobile}
              onChange={(e) => setField("mobile", e.target.value.replace(/\D/g, "").slice(0, selectedCountry.digits))}
              required
            />
          </div>
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="email">Email address <span className="text-red-600">*</span></label>
        <input id="email" name="email" className={fieldClass} placeholder="owner@workshop.com" type="email" autoComplete="email" maxLength={254} value={form.email} onChange={(e) => setField("email", e.target.value)} required />
      </div>
      {error ? <div id="signup-error" role="alert" aria-live="assertive" className="signup-error">{error}</div> : null}
      <button type="submit" disabled={loading || confirmationUnknown} aria-describedby={error ? "signup-error" : undefined} className="button-primary focus-ring flex w-full !text-[16px] disabled:cursor-not-allowed disabled:opacity-60">
        {loading ? "Creating your workshop…" : "Create Workshop Account"}
      </button>
      {signIn}
    </form>
  );
}

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
  password: string;
  confirmPassword: string;
};

const initialForm: FormState = {
  workshopName: "",
  ownerName: "",
  countryCode: "+91",
  mobile: "",
  email: "",
  password: "",
  confirmPassword: "",
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
    if (!email && !form.password) {
      setError("Enter a recovery email or choose a password to create your account.");
      return;
    }
    if (form.password && form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (form.password && form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      await createWorkshopAccount({
        workshopName,
        ownerName,
        mobile,
        email,
        whatsappConsent: false,
        ...(form.password ? { password: form.password, confirmPassword: form.confirmPassword } : {}),
      });
      router.push(form.password ? "/signup/success?mode=password" : "/signup/success");
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
                setError("");
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
        <label className={labelClass} htmlFor="email">Email address (recommended for recovery)</label>
        <input id="email" name="email" className={fieldClass} placeholder="owner@workshop.com" type="email" autoComplete="email" maxLength={254} value={form.email} onChange={(e) => setField("email", e.target.value)} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="password">Create password (recommended)</label>
          <input id="password" name="password" type="password" className={fieldClass} placeholder="At least 8 strong characters" autoComplete="new-password" minLength={8} maxLength={128} value={form.password} onChange={(e) => setField("password", e.target.value)} />
        </div>
        <div>
          <label className={labelClass} htmlFor="confirmPassword">Confirm password</label>
          <input id="confirmPassword" name="confirmPassword" type="password" className={fieldClass} placeholder="Repeat password" autoComplete="new-password" value={form.confirmPassword} onChange={(e) => setField("confirmPassword", e.target.value)} />
        </div>
      </div>
      <p className="text-[12px] leading-5 text-slate-600">
        Create a password now to sign in with your mobile number. If you leave it blank, a verified email delivery service is required to send a secure setup link.
      </p>
      {error ? <div id="signup-error" role="alert" aria-live="assertive" className="signup-error">{error}</div> : null}
      <button type="submit" disabled={loading} aria-describedby={error ? "signup-error" : undefined} className="button-primary focus-ring flex w-full !text-[16px] disabled:cursor-not-allowed disabled:opacity-60">
        {loading ? "Creating your workshop…" : "Create workshop account"}
      </button>
    </form>
  );
}

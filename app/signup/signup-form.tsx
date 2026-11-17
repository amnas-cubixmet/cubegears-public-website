"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createWorkshopAccount, SignupApiError, type SignupField } from "@/lib/api";

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

const fieldOrder: SignupField[] = ["workshopName", "ownerName", "mobile", "email"];

export default function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");
  const [fieldError, setFieldError] = useState<{ field: SignupField; message: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const formElement = useRef<HTMLFormElement>(null);
  const feedback = useRef<HTMLDivElement>(null);
  const selectedCountry = countryCodes.find((country) => country.code === form.countryCode) ?? countryCodes[0];

  useEffect(() => {
    if (fieldError) {
      const field = formElement.current?.elements.namedItem(fieldError.field);
      if (field instanceof HTMLElement) field.focus();
    } else if (error) {
      feedback.current?.focus();
    }
  }, [fieldError, error]);

  const fieldFeedback = (field: SignupField) => fieldError?.field === field ? {
    "aria-invalid": true,
    "aria-describedby": `signup-${field}-error`,
  } : {};

  const renderFieldError = (field: SignupField) => fieldError?.field === field && (
    <p id={`signup-${field}-error`} className="signup-field-error" role="alert">{fieldError.message}</p>
  );

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (key === fieldError?.field) setFieldError(null);
    setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    setError("");
    setFieldError(null);

    const workshopName = form.workshopName.trim();
    const ownerName = form.ownerName.trim();
    const email = form.email.trim().toLowerCase();
    const localMobile = form.mobile.replace(/\D/g, "");
    const mobile = `${form.countryCode}${localMobile}`;
    if (workshopName.length < 2) {
      setFieldError({ field: "workshopName", message: "Workshop name must contain at least 2 characters." });
      return;
    }
    if (ownerName.length < 2) {
      setFieldError({ field: "ownerName", message: "Owner name must contain at least 2 characters." });
      return;
    }
    if (localMobile.length !== selectedCountry.digits || !/^\+\d{10,15}$/.test(mobile)) {
      setFieldError({ field: "mobile", message: `Enter a valid ${selectedCountry.digits}-digit mobile number for ${selectedCountry.name}.` });
      return;
    }
    if (!email) {
      setFieldError({ field: "email", message: "Enter your email address to receive the password setup link." });
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFieldError({ field: "email", message: "Enter a valid email address." });
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
      });
      router.push("/signup/success");
    } catch (err) {
      if (err instanceof SignupApiError) {
        const field = fieldOrder.find((key) => err.fieldErrors[key]);
        const message = field && err.fieldErrors[field];
        if (field && message) setFieldError({ field, message });
        else setError(err.message);
      } else {
        setError("We couldn’t confirm your registration. Check your inbox for the setup email before resubmitting, or contact support.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form ref={formElement} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className={labelClass} htmlFor="workshopName">Workshop name <span className="text-red-600">*</span></label>
        <input {...fieldFeedback("workshopName")} id="workshopName" name="workshopName" className={fieldClass} placeholder="Example Auto Care" autoComplete="organization" maxLength={150} minLength={2} value={form.workshopName} onChange={(e) => setField("workshopName", e.target.value)} required />
        {renderFieldError("workshopName")}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="ownerName">Owner name <span className="text-red-600">*</span></label>
          <input {...fieldFeedback("ownerName")} id="ownerName" name="ownerName" className={fieldClass} placeholder="Full name" autoComplete="name" maxLength={120} minLength={2} value={form.ownerName} onChange={(e) => setField("ownerName", e.target.value)} required />
          {renderFieldError("ownerName")}
        </div>
        <div>
          <label className={labelClass} htmlFor="mobile">Mobile number <span className="text-red-600">*</span></label>
          <div className="signup-phone-row mt-2 flex min-w-0 gap-2">
            <select
              id="countryCode"
              name="countryCode"
              aria-label="Country calling code"
              autoComplete="tel-country-code"
              value={form.countryCode}
              onChange={(e) => {
                // The national number must be entered again when changing country:
                // a number from the previous country may have a different length.
                setForm((current) => ({ ...current, countryCode: e.target.value, mobile: "" }));
                if (fieldError?.field === "mobile") setFieldError(null);
                setError("");
              }}
              className="signup-input signup-country font-semibold"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>{country.code} {country.name}</option>
              ))}
            </select>
            <input
              {...fieldFeedback("mobile")}
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
          {renderFieldError("mobile")}
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="email">Email address <span className="text-red-600">*</span></label>
        <input {...fieldFeedback("email")} id="email" name="email" className={fieldClass} placeholder="owner@workshop.com" type="email" autoComplete="email" maxLength={254} value={form.email} onChange={(e) => setField("email", e.target.value)} required />
        {renderFieldError("email")}
      </div>
      {error ? <div ref={feedback} tabIndex={-1} id="signup-error" role="alert" className="signup-error">{error}</div> : null}
      <button type="submit" disabled={loading} aria-describedby={error ? "signup-error" : undefined} className="button-primary focus-ring flex w-full !text-[16px] disabled:cursor-not-allowed disabled:opacity-60">
        {loading ? "Creating your workshop…" : "Create workshop account"}
      </button>
    </form>
  );
}

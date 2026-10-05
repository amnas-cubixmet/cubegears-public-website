"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createWorkshopAccount } from "@/lib/api";

type FormState = {
  workshopName: string;
  ownerName: string;
  mobile: string;
  email: string;
  country: string;
  state: string;
  city: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

const initialForm: FormState = {
  workshopName: "",
  ownerName: "",
  mobile: "",
  email: "",
  country: "India",
  state: "",
  city: "",
  password: "",
  confirmPassword: "",
  terms: false,
};

const fieldClass =
  "mt-1.5 h-11 w-full rounded-[11px] border border-slate-200 bg-white px-3.5 text-[13px] font-medium text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-[#1769ff] focus:ring-4 focus:ring-blue-50";

const labelClass = "text-[12px] font-bold text-slate-700";

export default function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (form.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!form.terms) {
      setError("Please accept the Terms and Privacy Policy.");
      return;
    }

    setLoading(true);

    try {
      await createWorkshopAccount({
        workshopName: form.workshopName.trim(),
        ownerName: form.ownerName.trim(),
        mobile: form.mobile.trim(),
        email: form.email.trim(),
        country: form.country.trim(),
        state: form.state.trim(),
        city: form.city.trim(),
        password: form.password,
      });

      router.push("/signup/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4.5" noValidate>
      <div>
        <label className={labelClass} htmlFor="workshopName">
          Workshop name *
        </label>
        <input
          id="workshopName"
          className={fieldClass}
          placeholder="Example Auto Care"
          autoComplete="organization"
          value={form.workshopName}
          onChange={(e) => setField("workshopName", e.target.value)}
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="ownerName">
            Owner name *
          </label>
          <input
            id="ownerName"
            className={fieldClass}
            placeholder="Full name"
            autoComplete="name"
            value={form.ownerName}
            onChange={(e) => setField("ownerName", e.target.value)}
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="mobile">
            Mobile number *
          </label>
          <input
            id="mobile"
            className={fieldClass}
            placeholder="+91 98765 43210"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.mobile}
            onChange={(e) => setField("mobile", e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          Email address *
        </label>
        <input
          id="email"
          className={fieldClass}
          placeholder="owner@workshop.com"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setField("email", e.target.value)}
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className={labelClass} htmlFor="country">
            Country *
          </label>
          <input
            id="country"
            className={fieldClass}
            autoComplete="country-name"
            value={form.country}
            onChange={(e) => setField("country", e.target.value)}
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="state">
            State *
          </label>
          <input
            id="state"
            className={fieldClass}
            placeholder="Kerala"
            autoComplete="address-level1"
            value={form.state}
            onChange={(e) => setField("state", e.target.value)}
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="city">
            City *
          </label>
          <input
            id="city"
            className={fieldClass}
            placeholder="City"
            autoComplete="address-level2"
            value={form.city}
            onChange={(e) => setField("city", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="password">
            Password *
          </label>
          <input
            id="password"
            className={fieldClass}
            placeholder="Minimum 8 characters"
            type="password"
            autoComplete="new-password"
            value={form.password}
            onChange={(e) => setField("password", e.target.value)}
            required
            minLength={8}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="confirmPassword">
            Confirm password *
          </label>
          <input
            id="confirmPassword"
            className={fieldClass}
            placeholder="Repeat password"
            type="password"
            autoComplete="new-password"
            value={form.confirmPassword}
            onChange={(e) => setField("confirmPassword", e.target.value)}
            required
            minLength={8}
          />
        </div>
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-[12px] bg-slate-50 px-3.5 py-3 text-[12px] leading-5 text-slate-600">
        <input
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#1769ff]"
          type="checkbox"
          checked={form.terms}
          onChange={(e) => setField("terms", e.target.checked)}
        />
        <span>
          I agree to the <span className="font-bold text-slate-900">Terms</span> and{" "}
          <span className="font-bold text-slate-900">Privacy Policy</span>.
        </span>
      </label>

      {error ? (
        <div
          role="alert"
          className="rounded-[12px] border border-red-200 bg-red-50 px-3.5 py-3 text-[12px] font-semibold leading-5 text-red-700"
        >
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="focus-ring flex h-12 w-full items-center justify-center rounded-xl bg-[#1769ff] px-5 text-[13px] font-extrabold text-white transition hover:bg-[#0a4de0] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Creating workshop..." : "Create workshop account"}
        {!loading ? <span className="ml-2">→</span> : null}
      </button>
    </form>
  );
}

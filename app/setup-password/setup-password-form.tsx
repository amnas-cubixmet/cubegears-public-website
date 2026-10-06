"use client";

import { FormEvent, useState } from "react";
import { setupWorkshopPassword } from "@/lib/api";

type Props = {
  uid: string;
  token: string;
};

const fieldClass =
  "mt-1.5 h-12 w-full rounded-[11px] border border-slate-200 bg-white px-3.5 text-[13px] font-medium text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-[#1769ff] focus:ring-4 focus:ring-blue-50";

export default function SetupPasswordForm({ uid, token }: Props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!uid || !token) {
      setError("This password setup link is incomplete or invalid.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await setupWorkshopPassword({ uid, token, password });
      setComplete(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to set your password.");
    } finally {
      setLoading(false);
    }
  }

  if (complete) {
    const panelUrl =
      process.env.NEXT_PUBLIC_COMPANY_PANEL_URL || "http://localhost:5173";

    return (
      <div className="text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-[28px] font-black text-emerald-500">
          ✓
        </div>
        <h2 className="mt-5 text-[28px] font-black tracking-[-.04em] text-[#0a1530]">
          Password created
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[13px] leading-6 text-slate-500">
          Your email is verified and your CubixGear workshop account is ready.
        </p>
        <a
          href={panelUrl}
          className="focus-ring mt-7 inline-flex h-12 items-center justify-center rounded-xl bg-[#1769ff] px-7 text-[13px] font-extrabold text-white transition hover:bg-[#0a4de0]"
        >
          Open CubixGear Dashboard <span className="ml-2">→</span>
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="password" className="text-[12px] font-bold text-slate-700">
          Create password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="new-password"
          className={fieldClass}
          placeholder="Minimum 8 characters"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          minLength={8}
          required
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="text-[12px] font-bold text-slate-700">
          Confirm password
        </label>
        <input
          id="confirmPassword"
          type="password"
          autoComplete="new-password"
          className={fieldClass}
          placeholder="Repeat password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          minLength={8}
          required
        />
      </div>

      <div className="rounded-[12px] bg-slate-50 px-3.5 py-3 text-[11px] leading-5 text-slate-500">
        Use at least 8 characters. Avoid common or fully numeric passwords.
      </div>

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
        disabled={loading || !uid || !token}
        className="focus-ring flex h-12 w-full items-center justify-center rounded-xl bg-[#1769ff] px-5 text-[13px] font-extrabold text-white transition hover:bg-[#0a4de0] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Setting password..." : "Set password"}
      </button>
    </form>
  );
}

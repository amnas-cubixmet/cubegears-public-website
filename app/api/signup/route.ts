import { NextResponse } from "next/server";

type SignupRequest = {
  workshopName: string;
  ownerName: string;
  mobile: string;
  email: string;
};

function getBackendUrl(): string | null {
  const baseUrl = process.env.BACKEND_API_URL?.trim().replace(/\/$/, "");
  const endpoint = (process.env.BACKEND_SIGNUP_PATH || "/auth/signup").trim();
  if (!baseUrl) return null;

  try {
    const url = new URL(baseUrl + (endpoint.startsWith("/") ? endpoint : "/" + endpoint));
    return ["http:", "https:"].includes(url.protocol) ? url.toString() : null;
  } catch {
    return null;
  }
}

function isValidPayload(value: unknown): value is SignupRequest {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const p = value as Record<string, unknown>;
  return (
    typeof p.workshopName === "string" && p.workshopName.trim().length >= 2 && p.workshopName.length <= 150 &&
    typeof p.ownerName === "string" && p.ownerName.trim().length >= 2 && p.ownerName.length <= 120 &&
    typeof p.mobile === "string" && /^\+?\d{10,15}$/.test(p.mobile.replace(/[\s()-]/g, "")) &&
    typeof p.email === "string" && p.email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email.trim())
  );
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ message: "Send a JSON signup request." }, { status: 415 });
  }

  const bodyLength = Number(request.headers.get("content-length") || 0);
  if (bodyLength > 8192) {
    return NextResponse.json({ message: "Signup request is too large." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid signup request." }, { status: 400 });
  }
  if (!isValidPayload(payload)) {
    return NextResponse.json({ message: "Please enter valid workshop and owner contact details." }, { status: 400 });
  }

  const backendUrl = getBackendUrl();
  if (!backendUrl) {
    return NextResponse.json({ message: "Registration is temporarily unavailable. Please contact support." }, { status: 503 });
  }

  const backendPayload = {
    workshop_name: payload.workshopName.trim(),
    owner_name: payload.ownerName.trim(),
    mobile: payload.mobile.trim(),
    email: payload.email.trim(),
  };

  try {
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(backendPayload),
      cache: "no-store",
      signal: AbortSignal.timeout(12000),
    });

    const data: unknown = await response.json().catch(() => ({ message: "Unable to process registration." }));
    if (response.ok) return NextResponse.json(data, { status: response.status });
    // Expose normal validation feedback but never arbitrary upstream error pages.
    if (response.status >= 500) {
      return NextResponse.json({ message: "Registration is temporarily unavailable." }, { status: 502 });
    }
    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json({ message: "Unable to reach the CubeGears registration service. Please try again." }, { status: 502 });
  }
}

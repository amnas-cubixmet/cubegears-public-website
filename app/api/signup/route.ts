import { NextResponse } from "next/server";

type SignupRequest = {
  workshopName?: string;
  ownerName?: string;
  mobile?: string;
  email?: string;
  country?: string;
  state?: string;
  city?: string;
  password?: string;
};

function getBackendUrl() {
  const baseUrl = process.env.BACKEND_API_URL?.trim().replace(/\/$/, "");
  const endpoint = (process.env.BACKEND_SIGNUP_PATH || "/api/auth/signup/").trim();

  if (!baseUrl) {
    return null;
  }

  return baseUrl + (endpoint.startsWith("/") ? endpoint : "/" + endpoint);
}

export async function POST(request: Request) {
  let payload: SignupRequest;

  try {
    payload = (await request.json()) as SignupRequest;
  } catch {
    return NextResponse.json({ message: "Invalid signup request." }, { status: 400 });
  }

  const required = [
    payload.workshopName,
    payload.ownerName,
    payload.mobile,
    payload.email,
    payload.country,
    payload.state,
    payload.city,
    payload.password,
  ];

  if (required.some((value) => !value || !value.trim())) {
    return NextResponse.json(
      { message: "Please complete all required signup fields." },
      { status: 400 },
    );
  }

  const backendUrl = getBackendUrl();

  if (!backendUrl) {
    return NextResponse.json(
      {
        message:
          "Signup backend is not connected yet. Set BACKEND_API_URL on the server.",
      },
      { status: 503 },
    );
  }

  const backendPayload = {
    workshop_name: payload.workshopName!.trim(),
    owner_name: payload.ownerName!.trim(),
    mobile: payload.mobile!.trim(),
    email: payload.email!.trim(),
    country: payload.country!.trim(),
    state: payload.state!.trim(),
    city: payload.city!.trim(),
    password: payload.password!,
    password_confirm: payload.password!,
  };

  try {
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(backendPayload),
      cache: "no-store",
    });

    const contentType = response.headers.get("content-type") || "";
    const data = contentType.includes("application/json")
      ? await response.json()
      : { message: await response.text() };

    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json(
      { message: "Unable to reach the CubixGear backend." },
      { status: 502 },
    );
  }
}

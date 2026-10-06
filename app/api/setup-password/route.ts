import { NextResponse } from "next/server";

type SetupPasswordRequest = {
  uid?: string;
  token?: string;
  password?: string;
};

function getBackendUrl() {
  const baseUrl = process.env.BACKEND_API_URL?.trim().replace(/\/$/, "");
  const endpoint = (process.env.BACKEND_SETUP_PASSWORD_PATH || "/auth/setup-password").trim();

  if (!baseUrl) return null;

  return baseUrl + (endpoint.startsWith("/") ? endpoint : "/" + endpoint);
}

export async function POST(request: Request) {
  let payload: SetupPasswordRequest;

  try {
    payload = (await request.json()) as SetupPasswordRequest;
  } catch {
    return NextResponse.json({ message: "Invalid password setup request." }, { status: 400 });
  }

  if (!payload.uid || !payload.token || !payload.password) {
    return NextResponse.json(
      { message: "The password setup link is incomplete or invalid." },
      { status: 400 },
    );
  }

  const backendUrl = getBackendUrl();

  if (!backendUrl) {
    return NextResponse.json(
      { message: "Password setup backend is not connected." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
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

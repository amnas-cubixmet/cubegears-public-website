export type WorkshopSignupPayload = {
  workshopName: string;
  ownerName: string;
  mobile: string;
  email: string;
  country: string;
  state: string;
  city: string;
  password: string;
};

type SignupResponse = {
  message?: string;
  workshop?: unknown;
  user?: unknown;
  [key: string]: unknown;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "";
const SIGNUP_ENDPOINT =
  process.env.NEXT_PUBLIC_SIGNUP_ENDPOINT ?? "/api/auth/signup";

export async function createWorkshopAccount(
  payload: WorkshopSignupPayload,
): Promise<SignupResponse> {
  if (!API_BASE_URL) {
    throw new Error(
      "Signup API is not configured. Add NEXT_PUBLIC_API_URL to your environment.",
    );
  }

  const response = await fetch(`${API_BASE_URL}${SIGNUP_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({}))) as SignupResponse;

  if (!response.ok) {
    const message =
      typeof data.message === "string"
        ? data.message
        : "Unable to create the workshop account. Please check your details.";
    throw new Error(message);
  }

  return data;
}

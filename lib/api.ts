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

export async function createWorkshopAccount(
  payload: WorkshopSignupPayload,
): Promise<SignupResponse> {
  const response = await fetch("/api/signup", {
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

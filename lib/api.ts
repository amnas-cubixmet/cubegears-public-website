export type WorkshopSignupPayload = {
  workshopName: string;
  ownerName: string;
  mobile: string;
  email: string;
  country: string;
  state: string;
  city: string;
};

type SignupResponse = {
  message?: string;
  workshop?: unknown;
  user?: unknown;
  [key: string]: unknown;
};

function getApiErrorMessage(data: SignupResponse) {
  if (typeof data.message === "string" && data.message.trim()) {
    return data.message;
  }

  if (typeof data.detail === "string" && data.detail.trim()) {
    return data.detail;
  }

  for (const value of Object.values(data)) {
    if (Array.isArray(value) && typeof value[0] === "string") {
      return value[0];
    }

    if (value && typeof value === "object" && !Array.isArray(value)) {
      for (const nested of Object.values(value as Record<string, unknown>)) {
        if (Array.isArray(nested) && typeof nested[0] === "string") {
          return nested[0];
        }
        if (typeof nested === "string" && nested.trim()) {
          return nested;
        }
      }
    }
  }

  return "Unable to create the workshop account. Please check your details.";
}

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
    throw new Error(getApiErrorMessage(data));
  }

  return data;
}

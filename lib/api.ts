export type WorkshopSignupPayload = {
  workshopName: string;
  ownerName: string;
  mobile: string;
  email: string;
  whatsappConsent: boolean;
};

type SignupResponse = {
  message?: string;
  workshop?: unknown;
  user?: unknown;
  [key: string]: unknown;
};

const signupFieldKeys = {
  workshop_name: "workshopName",
  owner_name: "ownerName",
  mobile: "mobile",
  email: "email",
} as const;

export type SignupField = (typeof signupFieldKeys)[keyof typeof signupFieldKeys];
type SignupFieldErrors = Partial<Record<SignupField, string>>;

function signupFieldErrors(data: unknown): SignupFieldErrors {
  if (!data || typeof data !== "object" || Array.isArray(data)) return {};
  const fields = data as Record<string, unknown>;
  const errors: SignupFieldErrors = {};
  for (const [key, field] of Object.entries(signupFieldKeys)) {
    const value = fields[key];
    const message = Array.isArray(value) ? value[0] : value;
    if (typeof message === "string" && message.trim()) errors[field] = message;
  }
  return errors;
}

function getApiErrorMessage(data: unknown, status: number): string {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return `Registration failed (HTTP ${status}). Please try again or contact support.`;
  }
  const fields = data as Record<string, unknown>;
  const getText = (value: unknown): string | null => {
    if (typeof value === "string" && value.trim()) return value.trim();
    if (Array.isArray(value) && typeof value[0] === "string") return value[0];
    return null;
  };

  // Prefer explicit server message when one is provided (including upstream
  // error explanations). Otherwise tell the user which field Django rejected.
  for (const key of ["message", "detail"]) {
    const text = getText(fields[key]);
    if (text) return text;
  }
  const names: Record<string, string> = {
    workshop_name: "Workshop name",
    owner_name: "Owner name",
    mobile: "Mobile number",
    email: "Email address",
    non_field_errors: "Registration",
  };
  for (const [key, value] of Object.entries(fields)) {
    const text = getText(value);
    if (text) return `${names[key] || key}: ${text}`;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      for (const [nestedKey, nestedValue] of Object.entries(value)) {
        const nestedText = getText(nestedValue);
        if (nestedText) return `${names[nestedKey] || nestedKey}: ${nestedText}`;
      }
    }
  }
  return `Registration failed (HTTP ${status}). Please check your details or contact support.`;
}

// Preserve safe Django field errors so signup can highlight the relevant
// input rather than showing a generic failure at the bottom of the form.
export class SignupApiError extends Error {
  readonly fieldErrors: SignupFieldErrors;

  constructor(message: string, fieldErrors: SignupFieldErrors = {}) {
    super(message);
    this.name = "SignupApiError";
    this.fieldErrors = fieldErrors;
  }
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
    const message = getApiErrorMessage(data, response.status);
    throw new SignupApiError(message, signupFieldErrors(data));
  }

  return data;
}

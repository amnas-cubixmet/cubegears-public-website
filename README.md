# CubixGear Public Website

Public-facing website for CubixGear workshop management software.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Routes

- \`/\` — public product website
- \`/signup\` — workshop owner signup
- \`/signup/success\` — successful signup state
- \`/api/signup\` — server-side signup proxy

There is intentionally no public login page or login CTA in this project.

## Local development

\`\`\`bash
npm install
npm run dev
\`\`\`

Open \`http://localhost:3000\`.

## Backend connection

Copy \`.env.example\` to \`.env.local\`:

\`\`\`env
BACKEND_API_URL=http://127.0.0.1:8000/api/v1
BACKEND_SIGNUP_PATH=/auth/signup
BACKEND_SETUP_PASSWORD_PATH=/auth/setup-password
NEXT_PUBLIC_COMPANY_PANEL_URL=http://localhost:5173
\`\`\`

The browser sends signup requests only to the Next.js route \`/api/signup\`.
That server route forwards the request to the Django backend. The backend base URL is therefore not exposed as a \`NEXT_PUBLIC_*\` value.

The proxy currently maps the public form to this backend JSON shape:

\`\`\`json
{
  "workshop_name": "Example Auto Care",
  "owner_name": "Owner Name",
  "mobile": "+919876543210",
  "email": "owner@example.com",
  "country": "India",
  "state": "Kerala",
  "city": "Chalakudy",
  "password": "password",
  "password_confirm": "password"
}
\`\`\`

If the Django endpoint uses another route, change only \`BACKEND_SIGNUP_PATH\`.

## Production build

\`\`\`bash
npm run build
npm start
\`\`\`


## Password setup flow

Public signup does not collect a password.

1. The owner submits workshop, contact and location details.
2. Django creates the company, head-office branch, workshop-admin role and owner user.
3. Django emails a secure link to `/setup-password?uid=...&token=...`.
4. The public website sends the new password through `/api/setup-password` to Django.
5. Django sets the password and marks the email as verified.
6. The user can then sign in to the Company Panel.

For local development, the default Django console email backend prints the password setup email and link in the backend terminal. Configure SMTP environment variables in production to send real email.

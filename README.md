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

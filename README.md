# CubeGears public website

Marketing and workshop onboarding website for CubeGears, built with **Next.js 16, React 19, TypeScript and Tailwind CSS 4**.

## Pages

| Route | Purpose |
|---|---|
| / | Public product home |
| /features | Feature modules |
| /how-it-works | Workshop service process |
| /for-workshops | Workshop types |
| /pricing | Feature-credit billing overview |
| /contact | Contact and onboarding |
| /signup | New workshop registration |
| /signup/success | Registration next steps |
| /api/signup | Server-side Django signup proxy |

The public website intentionally has **no login page or login CTA**. Sign-in and password setup belong to the Company Panel.

## Local development

Install Node.js 22 and run:

    npm ci
    cp .env.example .env.local
    npm run dev

Open http://localhost:3000.

## Backend

Server-only environment variables:

    BACKEND_API_URL=http://127.0.0.1:8000/api/v1
    BACKEND_SIGNUP_PATH=/auth/signup

Optional production variables:

    SITE_URL=https://your-real-domain.example
    CONTACT_EMAIL=your-real-support-email@example.com

Never expose backend URLs or secrets in NEXT_PUBLIC_ variables. Only set a real contact email if it is monitored; otherwise, the Contact page shows product and signup links.

The public form sends workshop name, owner name, mobile and email to /api/signup. The Next.js server forwards the mapped fields to Django. The form does **not** ask for a country, state or city.

Django is responsible for account creation and secure password setup email. Configure its production SMTP and Company Panel password setup URL separately.

## Validation

    npm run lint
    npx tsc --noEmit
    node --test tests/signup-no-location.test.mjs
    npm run build

GitHub Actions runs these checks on pull requests.

## Production checklist

- Configure the live Django API URL, correct signup path and working email delivery.
- Set the real SITE_URL and optionally CONTACT_EMAIL.
- Test navigation, signup success/failure, email and password setup against a staging backend.
- Confirm live pricing and credit rules before publishing numeric claims.
- Publish approved privacy policy, terms and verified business contact details before launch.
- Perform keyboard, mobile-device, and cross-browser accessibility testing.
- Merge only after CI passes and the changes are reviewed.

## Deploy

This application requires a supported Node.js server runtime; it is not configured as a static export. Build using npm ci then npm run build, and serve using npm start. Never commit .env.local.

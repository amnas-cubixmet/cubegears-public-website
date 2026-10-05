# CubixGear Public Website

Public-facing website for CubixGear workshop management software.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Routes

- `/` — public product website
- `/signup` — workshop owner signup
- `/signup/success` — successful signup state

There is intentionally no public login page or login CTA in this project.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Backend connection

Copy `.env.example` to `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SIGNUP_ENDPOINT=/api/auth/signup
```

The signup form sends a JSON `POST` request with:

```json
{
  "workshopName": "Example Auto Care",
  "ownerName": "Owner Name",
  "mobile": "+919876543210",
  "email": "owner@example.com",
  "country": "India",
  "state": "Kerala",
  "city": "Chalakudy",
  "password": "password"
}
```

Update `NEXT_PUBLIC_SIGNUP_ENDPOINT` if the backend uses a different signup path.

## Production build

```bash
npm run build
npm start
```

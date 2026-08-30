# StudyMate

A peer study-group matching platform for Kasetsart University SKE/CPE
students. This is Sprint 1: a minimal landing page and Google sign-in flow,
with no database or matching features yet.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js (Auth.js v5)](https://authjs.dev/) with the Google provider

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example file and fill in your own values:

```bash
cp .env.local.example .env.local
```

| Variable             | Description                                                                                        |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| `AUTH_SECRET`         | Random string used to sign session tokens. Generate one with `npx auth secret`.                     |
| `NEXTAUTH_URL`        | The base URL of the app during local dev (`http://localhost:3000`).                                 |
| `AUTH_GOOGLE_ID`      | OAuth Client ID from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).  |
| `AUTH_GOOGLE_SECRET`  | OAuth Client Secret from the same Google Cloud project.                                              |

For local development you can leave the placeholder Google values in place;
you'll just see an error from Google when actually clicking "Sign in with
Google" until real credentials are added.

When creating the Google OAuth client, set the authorized redirect URI to:

```
http://localhost:3000/api/auth/callback/google
```

### 3. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  page.tsx              # Landing page ("/")
  login/page.tsx         # Sign-in page ("/login")
  dashboard/page.tsx     # Placeholder post-login page ("/dashboard")
  api/auth/[...nextauth]/route.ts  # NextAuth route handler
components/
  Navbar.tsx
  Hero.tsx
  GoogleSignInButton.tsx
auth.ts                  # NextAuth configuration
```

## Sprint 1 scope

- Landing page with hero + "Get Started" CTA
- Login page with "Sign in with Google"
- Placeholder dashboard showing "Welcome, {name}"

Not included yet (planned for later sprints): course search, study group
creation, and a database.

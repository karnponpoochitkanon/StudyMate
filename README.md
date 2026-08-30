# StudyMate

A peer study-group matching platform for Kasetsart University SKE/CPE
students.

## Repository layout

```
apps/
  web/    # Next.js frontend (landing page + Google sign-in)
  api/    # Standalone Express backend server
```

The frontend and backend are independent apps, each with its own
`package.json`. Install and run them separately.

## Frontend — `apps/web`

Next.js (App Router) + TypeScript + Tailwind CSS, with NextAuth (Auth.js v5)
Google sign-in. Sprint 1 scope: landing page, login page, placeholder
dashboard. No database yet.

```bash
cd apps/web
npm install
cp .env.local.example .env.local
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000). See
[apps/web](apps/web) for environment variable details.

## Backend — `apps/api`

Node.js + Express + TypeScript. Currently exposes a single `GET /health`
endpoint.

```bash
cd apps/api
npm install
cp .env.example .env
npm run dev
```

The API listens on [http://localhost:4000](http://localhost:4000). See
[apps/api/README.md](apps/api/README.md) for details.
    
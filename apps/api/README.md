# studymate-api

Standalone backend server for StudyMate, separate from the Next.js frontend
(`apps/web`).

## Tech stack

- Node.js + [Express](https://expressjs.com/) 5
- TypeScript
- [tsx](https://github.com/privatenumber/tsx) for dev/watch

## Getting started

```bash
cd apps/api
npm install
cp .env.example .env
npm run dev
```

The server listens on `http://localhost:4000` by default (override with `PORT`).

## Endpoints

| Method | Path      | Description                        |
| ------ | --------- | --------------------------------- |
| GET    | `/health` | Liveness check, returns `200` JSON |

Example:

```bash
curl http://localhost:4000/health
```

```json
{
  "status": "ok",
  "service": "studymate-api",
  "uptime": 1.23,
  "timestamp": "2026-08-30T00:00:00.000Z"
}
```

## Scripts

| Command         | Description                        |
| --------------- | --------------------------------- |
| `npm run dev`   | Start with hot reload (tsx watch) |
| `npm run build` | Compile TypeScript to `dist/`     |
| `npm start`     | Run the compiled server           |

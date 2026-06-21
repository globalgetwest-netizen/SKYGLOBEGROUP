# SkyGlobe Group — Website

### One World. One Mission.

The official website for **SkyGlobe Group** — global mobility, education, AI, and
digital innovation. Built and led by **Saleh Shuaibu, Founder & Chief Executive Officer**.

> **Brand rule:** The name is always **SkyGlobe Group**.

---

## What this is

A modern **Next.js 14** website (App Router + TypeScript + Tailwind CSS). It includes
**NORIA**, the SkyGlobe AI assistant, which runs as a separate service and is reached
through a thin proxy at `/api/noria`.

The whole application lives in the **`web/`** folder.

---

## Project structure

```
web/
  src/
    app/          Next.js routes (pages + /api/noria proxy)
    components/   UI + page sections
    features/     Feature modules
    hooks/        React hooks
    lib/          Helpers and utilities
    services/     API clients
    store/        State (Zustand)
    styles/       Global styles
    types/        TypeScript types
  package.json
  next.config.mjs
  tailwind.config.ts
  tsconfig.json
README.md
```

---

## Run locally

```bash
cd web
npm install
npm run dev
```

Open http://localhost:3000

---

## Environment variables

Copy `web/.env.example` to `web/.env.local` and set:

```
# URL of the standalone NORIA engine service (repo: NORIA-ENGINE)
# Local dev:  http://localhost:4000
# Production: https://noria.skyglobegroup.com  (or the Render service URL)
NORIA_API_URL=http://localhost:4000
```

All AI keys, the vector database, and web-search keys live on the **NORIA-ENGINE**
service — **not** in this repo.

---

## NORIA architecture

NORIA is a separate project so it can serve every SkyGlobe product, not just this site:

```
Website  →  /api/noria  (proxy)  →  NORIA-ENGINE service  →  /v1/ask
```

The engine uses a 3-layer design: an LLM provider chain (Groq → Gemini → Ollama),
a PostgreSQL + pgvector knowledge store, and live web grounding.

---

## Deploy

Deploy from this repo with **Root Directory = `web`** so the host builds the Next.js app.
After NORIA-ENGINE is live, set `NORIA_API_URL` in the deployment environment variables.

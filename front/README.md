# POS System — Frontend (Vite + React + TypeScript)

This repository is a point-of-sale (POS) application split across the frontend, backend (deprecated), and Supabase resources. This README explains how to run, develop, and deploy the frontend and how the app integrates with Supabase (including an Edge Function to create Supabase auth users securely).

If you landed here from the root of the repo, this `front` directory contains the single-page app built with React + Vite + TypeScript.

---

## Table of Contents
- About this project
- High-level architecture
- Features
- Local development (front)
- Supabase integration
  - Auth & public.users
  - Images storage
  - Edge Function for creating auth users
- How to create users from the UI
- Build & production
- Troubleshooting
- Contributing
- License

---

## About this project

This is a lightweight POS web application used to manage inventory, orders, customers, users, and shop settings. The front-end is implemented with React (TypeScript) and Vite and can be hosted anywhere (Netlify, Vercel, Static hosting). Database, auth, and storage are managed with Supabase.

The repo also contains a legacy `back` service which in earlier versions handled server API routes, but the app is being migrated to use Supabase for backend responsibilities (auth, storage, row-level security).

## High-level architecture

- Frontend: `front/` — React + TypeScript + Vite. Talks directly to Supabase (client) and to a secure Edge Function for admin-only operations.
- Supabase: hosted DB, Auth, Storage, Functions.
- Backend (deprecated): `back/` — legacy Express server still available for local development but not required when using Supabase.

## Key features

- Inventory CRUD (items with images)
- Categories, branches, and settings
- Orders & receipts (print + PDF download)
- Users and roles (admin/cashier) — UI-integrated creation via Supabase Edge Function
- Image upload to Supabase Storage with automatic deletion of old images when replaced or when the item is deleted

## Requirements

- Node.js 18+ (tested with Node 18 / Node 20)
- NPM or pnpm
- A Supabase project (URL + anon key + service_role key)

## Local development (frontend)

1. Install dependencies and run the dev server

```bash
cd front
npm install
npm run dev
```

2. Environment variables

Create a `.env` file at `front/.env` (or use your shell environment) with at least the Supabase client values:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=public-anon-key
# Optional: points to deployed Edge Function for creating users
VITE_SUPABASE_CREATE_USER_URL=https://<project>.functions.supabase.co/create-auth-user
```

Restart the dev server when changing environment variables.

3. Logging in

Sign into the app (you must have an admin account in Supabase Auth or create one via the Supabase dashboard). The app stores the session token locally and uses it to authorize admin actions.

## Supabase integration

This application talks to Supabase to handle authentication, data, and storage. Important things to know:

- Auth / public.users:
  - Supabase stores auth accounts in `auth.users` (UUID ids). This app stores a profile row in `public.users` that references `auth.users` (via `userid` UUID) and stores `role` (admin/cashier) so RBAC can be enforced by RLS.

- Storage (images):
  - Item images and shop logo are stored in the `images` bucket. When an item is updated with a new image or deleted, the frontend calls helpers that delete the old file from storage (best-effort) to avoid orphaned files.

- Receipts / PDF:
  - The receipt can be printed from the HTML or downloaded as a PDF using a client-side library (html2pdf) which inlines images to make sure logos show up in the PDF.

### Edge Function: create-auth-user

Creating auth users requires Supabase's `service_role` key which must never be exposed in the browser. To allow creating auth users from the app UI, we use a secure Supabase Function (Edge Function) which:

- Validates the caller's session token.
- Confirms the caller is an admin (`public.users` check) using the `service_role` key.
- Calls the Supabase Admin API `/auth/v1/admin/users` with the service role key to create the user.
- Optionally inserts a `public.users` profile row so the app and RLS policies can reflect the new user.

The function lives at `supabase/functions/create-auth-user/index.ts`. Deploy via the Supabase CLI and set the function's environment secrets:

```
SUPABASE_URL=https://<project>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key  # secret
```

When deployed, add the function URL to `VITE_SUPABASE_CREATE_USER_URL` in your front environment.

## How the UI creates users

The UI `users` form calls `usersAPI.create`, which will call the Edge Function (if VITE_SUPABASE_CREATE_USER_URL is set) and return structured responses. The function returns field-level validation messages (for duplicate email/username) which the UI displays inline under the fields.

This keeps the Admin experience in-app while the service role key remains securely managed by Supabase functions.

## Build & Production

To build for production:

```bash
cd front
npm run build
```

Deploy the `dist` folder to any static host or use the Vite preview command for a local check.

### Deploying on Netlify (Single Page App routing)

If you deploy this repo to Netlify, the app uses client-side routing which requires a rewrite rule so browser refreshes on app routes don't return 404s.

- A `_redirects` file has been added to `front/public/_redirects` and will be copied into `dist/` during the build. It contains a rule to rewrite all paths back to `/index.html`.
- Additionally, there is a `netlify.toml` at the repository root which sets the build base to `front` and configures the publish directory to `front/dist`.

On Netlify, set the build command to `npm run build` and the publish directory to `dist` when the site is configured to use `front` as the base. If you use the repository root as the Netlify project, Netlify will honor `netlify.toml` and build `front` automatically.

## Troubleshooting

- If you see CORS issues while inlining images to generate PDFs, ensure the Supabase storage bucket CORS allows requests from your origin or use the function to proxy images.
- If user creation fails, check the function logs in Supabase and make sure `SUPABASE_SERVICE_ROLE_KEY` is set as a secret.

## Tests

This repository currently has no automated tests. If you want, I can add unit tests for key parts of the frontend and CI steps to run builds and linters.

## Contributing

Contributions welcome — open a PR and I'll help review.

## Questions / Next steps I can help with

- Add a CI/CD workflow to deploy the Edge Function and frontend automatically.
- Add strong typing and unit tests for `front/src/services/api.ts` to remove lingering `any` usage.
- Add server-side or Edge-generated PDF receipts if you prefer server-side deterministic PDFs.

---

If you want a README at the repository root describing the overall project (back + front + supabase + deploy), I can create a root README that links to this file and provides higher-level deployment steps.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

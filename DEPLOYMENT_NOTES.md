## Deployment notes

- This project is Next.js based. Prefer Vercel for deployment.
- Ensure Node version >= 18.
- Environment variables for SMTP (if you want real emails) and Google Maps API can be set in Vercel.
- The API routes in /pages/api currently write to a local `data/` folder. On serverless platforms, persistent writes may not be available — switch to a proper database (Supabase, MongoDB, or Bolt DB).

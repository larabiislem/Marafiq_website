# Marafeq Al-Banaa Website (Next.js)

Professional bilingual (EN/AR) corporate website for Marafeq Al-Banaa with modern animations, RTL support, services pages, projects gallery, and contact workflow.

## Tech Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion (section animations)
- Lucide React (icons)
- Nodemailer (contact email delivery API)

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` (auto-redirects to `/en`).

## Main Routes

- `/en` and `/ar` (home)
- `/:locale/about`
- `/:locale/services`
- `/:locale/services/:slug`
- `/:locale/partners`
- `/:locale/projects`
- `/:locale/contact`
- `/:locale/news` (optional section)

## Contact Email Configuration

The contact form posts to `POST /api/contact`.

Set these environment variables to enable email sending:

- `SMTP_HOST`
- `SMTP_PORT` (default 587)
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_RECEIVER_EMAIL` (optional; defaults to company email)

If SMTP variables are missing, the API returns a clear configuration error.

# Human-Led AI — manojtailor.com rebuild

This version is restructured to be easy to upload through GitHub's website —
just 3 shallow folders (`pages`, `components`, `public`), none of them
containing further subfolders, so dragging each one into GitHub's upload box
should now pick up everything in one go.

## What's included
- 10 real pages: Home, About, Manifesto, Contact, Letters, Join, Privacy Policy,
  Terms of Use, Disclaimer, Cookie Policy
- Your photo on About and Contact
- The "Human-Led AI" text wordmark as the site logo
- Old URLs preserved via redirects (`/refund-policy` → `/cookie-policy`,
  `/a-more-human-led-way-to-approach-ai` → `/letters`)

## One thing to fix before this is fully live
The **Join** page (`/join`) has a placeholder where your email sign-up form
should be. The old WordPress page used a ConvertKit *shortcode*, which only
works inside WordPress. Get the real JS embed code from ConvertKit
(Grow → Landing Pages & Forms → your form → Embed), and send it to Claude
to drop into `pages/join.jsx`.

## How to upload (do this in the empty GitHub repo you already created)
1. Click "uploading an existing file"
2. From your unzipped folder, drag in the **`pages`** folder itself, wait
   for it to finish, then drag in **`components`**, then **`public`**
   (one folder at a time is more reliable than all three at once)
3. Then drag in the 6 loose files at the top level: `.gitignore`,
   `next.config.mjs`, `package.json`, `package-lock.json`, `README.md`
4. Once everything's listed, scroll down and click **Commit changes**

## How to deploy
1. Go to vercel.com → New Project → Import this repository
2. Vercel detects Next.js automatically — click Deploy
3. You'll get a free `*.vercel.app` preview URL

Once you're happy with the preview, point manojtailor.com's DNS at Vercel.

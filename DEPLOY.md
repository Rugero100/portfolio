# Deploy Guide — GitHub + Vercel

Step-by-step instructions to push your portfolio online.

---

## Part 1: Push to GitHub

### Step 1 — Create a GitHub repository

1. Go to [https://github.com/new](https://github.com/new)
2. **Repository name:** `portfolio` (or any name you like)
3. Set visibility to **Public** (required for free Vercel from personal account)
4. **Do NOT** check "Add a README" (you already have code)
5. Click **Create repository**

### Step 2 — Connect and push from your computer

Open a terminal in the project folder and run (replace `YOUR_USERNAME` and `REPO_NAME`):

```bash
cd d:\Studies\Projects\Portfolio

git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

git push -u origin main
```

**Example** for account [Rugero100](https://github.com/Rugero100):

```bash
git remote add origin https://github.com/Rugero100/portfolio.git
git push -u origin main
```

### Step 3 — Sign in when prompted

- GitHub may ask you to log in in the browser
- Or use a **Personal Access Token** as the password (not your GitHub password)
  - Create one: GitHub → Settings → Developer settings → Personal access tokens → Generate new token (classic) → enable `repo` scope

---

## Part 2: Deploy on Vercel

### Step 1 — Create a Vercel account

1. Go to [https://vercel.com/signup](https://vercel.com/signup)
2. Sign up with **GitHub** (easiest — links your repos automatically)

### Step 2 — Import your project

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Click **Import** next to your `portfolio` repository
3. Vercel auto-detects **Vite** — keep these settings:

| Setting            | Value           |
| ------------------ | --------------- |
| Framework Preset   | Vite            |
| Build Command      | `npm run build` |
| Output Directory   | `dist`          |
| Install Command    | `npm install`   |

4. Click **Deploy** (first deploy may take 1–2 minutes)

### Step 3 — Add environment variables (EmailJS)

If you use the contact form with EmailJS:

1. In Vercel → your project → **Settings** → **Environment Variables**
2. Add these three (same values as your local `.env`):

```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

3. Go to **Deployments** → click **⋯** on the latest → **Redeploy** so the variables take effect

### Step 4 — Your live URL

After deploy, Vercel gives you a URL like:

```
https://portfolio-username.vercel.app
```

You can add a custom domain later in **Settings → Domains**.

---

## Part 3: Update the site later

Whenever you change the code:

```bash
git add .
git commit -m "Describe your changes"
git push
```

Vercel redeploys automatically on every push to `main`.

---

## Troubleshooting

| Problem | Fix |
| -------- | ----- |
| `git push` rejected | Run `git pull origin main --rebase` then push again |
| Blank page on Vercel | Check build logs; ensure Output Directory is `dist` |
| Contact form not working | Add EmailJS env vars in Vercel and redeploy |
| CV download 404 | Ensure `public/cv.pdf` is committed and pushed |

---

**Your GitHub:** [https://github.com/Rugero100](https://github.com/Rugero100)

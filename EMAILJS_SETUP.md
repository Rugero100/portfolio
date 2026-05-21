# EmailJS Setup Guide

Follow these steps to enable the contact form to send emails directly from your portfolio (no mail app popup).

## 1. Create a free account

Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)

## 2. Add an email service

1. Go to **Email Services** → **Add New Service**
2. Choose Gmail (or your provider) and connect your email
3. Copy the **Service ID** (e.g. `service_abc123`)

## 3. Create an email template

1. Go to **Email Templates** → **Create New Template**
2. Use these variables in your template (must match exactly):

```
From: {{from_name}}
Reply-To: {{from_email}}

Subject: {{subject}}

Message:
{{message}}
```

3. Set **To Email** to your address (or use `{{to_email}}`)
4. Copy the **Template ID** (e.g. `template_xyz789`)

## 4. Get your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

## 5. Create the `.env` file

In the project root (`Portfolio/`), create a file named `.env`:

```env
VITE_EMAILJS_SERVICE_ID=service_your_id_here
VITE_EMAILJS_TEMPLATE_ID=template_your_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the values with your real IDs from EmailJS.

## 6. Restart the dev server

Environment variables only load on startup:

```bash
# Stop the server (Ctrl+C), then:
npm run dev
```

## 7. Test the form

Submit a test message on the Contact section. You should see: *"Message sent successfully!"*

---

**Note:** Until `.env` is configured, the form opens your default email app instead (mailto fallback).

**Also update** your real email in `src/data/portfolioData.js` → `personalInfo.email`

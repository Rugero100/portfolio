# Rugero Bonheur — Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features glassmorphism design, smooth animations, dark/light mode, and a fully functional contact form powered by EmailJS.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat&logo=tailwind-css)

## Features

- Animated hero with typing effect and profile photo
- Glassmorphism cards and gradient backgrounds
- Floating tech icons and scroll reveal animations
- Sticky navbar with active section highlighting
- Mobile responsive menu
- Dark mode (default) with light mode toggle
- Loading screen animation
- Projects, skills, services, education, and contact sections
- EmailJS contact form integration
- Smooth scrolling navigation

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 4**
- **Framer Motion** — animations
- **React Icons** — icon library
- **React Scroll** — smooth scrolling
- **EmailJS** — contact form

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone or navigate to the project folder:**

   ```bash
   cd Portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for Production

```bash
npm run build
npm run preview
```

## Customization Guide

### Personal Information

Edit `src/data/portfolioData.js` to update:

- Name, email, bio, tagline
- Navigation links
- Skills, services, education
- Social media URLs
- Statistics

### Projects

Edit `src/data/projects.js` to add or update projects with real GitHub and demo links.

### Profile Photo

Replace `src/assets/profile.png` with your own photo.

### CV Download

Add your resume as `public/cv.pdf` for the "Download CV" button.

### EmailJS Setup (Contact Form)

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Create an email service and template.
3. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

4. Fill in your EmailJS credentials:

   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. Restart the dev server after adding `.env`.

### Theme

Dark mode is the default. Users can toggle light mode via the navbar button. Theme preference is saved in `localStorage`.

## Project Structure

```
src/
├── assets/          # Images (profile photo)
├── components/      # Reusable UI components
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Services.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ...
├── data/            # Content data (easy to edit)
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── App.jsx          # Root app component
└── main.jsx         # Entry point
```

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## License

This project is open source and available for personal and educational use.

---

Built with passion by **Rugero Bonheur** — Full Stack Developer from Rwanda.

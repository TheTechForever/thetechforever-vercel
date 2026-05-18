# TechNova — Company Website
## Complete Documentation & Setup Guide

---

## 📁 Project Structure

```
my-company-site/
│
├── src/
│   └── app/
│       ├── page.jsx              ← MAIN PAGE (assembles all sections)
│       ├── layout.jsx            ← Root layout (title, meta tags)
│       ├── globals.css           ← Global styles & CSS variables
│       │
│       └── components/           ← Each section is its own component
│           ├── Navbar.jsx        ← Top navigation bar
│           ├── Navbar.module.css
│           ├── Hero.jsx          ← First section (banner)
│           ├── Hero.module.css
│           ├── About.jsx         ← About Us section
│           ├── About.module.css
│           ├── Services.jsx      ← Services section
│           ├── Services.module.css
│           ├── Portfolio.jsx     ← Portfolio / Projects section
│           ├── Portfolio.module.css
│           ├── Testimonials.jsx  ← Client testimonials
│           ├── Testimonials.module.css
│           ├── Contact.jsx       ← Contact form
│           ├── Contact.module.css
│           ├── Footer.jsx        ← Footer
│           └── Footer.module.css
│
├── package.json                  ← Project dependencies
├── next.config.js                ← Next.js configuration
└── README.md                     ← This file
```

---

## 🚀 How to Run the Website

### Step 1: Install Node.js
Download from: https://nodejs.org (choose the LTS version)

### Step 2: Open Terminal
- **Windows**: Press `Win + R` → type `cmd` → Enter
- **Mac**: Press `Cmd + Space` → type `Terminal` → Enter

### Step 3: Navigate to this folder
```bash
cd path/to/my-company-site
# Example: cd C:\Users\YourName\Downloads\my-company-site
```

### Step 4: Install dependencies
```bash
npm install
```
This downloads React and Next.js. Takes 1-2 minutes.

### Step 5: Start the website
```bash
npm run dev
```

### Step 6: Open in browser
Go to: **http://localhost:3000**

Your website is now running! 🎉

---

## ✏️ How to Customize

### Change Company Name
- Open `src/app/components/Navbar.jsx` → find `TechNova` → replace with your name
- Open `src/app/components/Footer.jsx` → do the same
- Open `src/app/layout.jsx` → update the `title` and `description`

### Change Colors
Open `src/app/globals.css` and edit the `:root` variables:
```css
--accent: #00d4ff;        /* Change to any color e.g. #ff6b35 for orange */
--bg-primary: #080c14;    /* Main background */
--text-primary: #f0f4ff;  /* Main text color */
```

### Change Hero Text
Open `src/app/components/Hero.jsx`:
- Edit the `<h1>` tag for your main headline
- Edit the `<p>` tag for the subheading
- Edit the `STATS` array for your company numbers

### Edit Services
Open `src/app/components/Services.jsx`:
- Edit the `SERVICES` array — change title, desc, tags, and icon for each service
- Add new objects to the array to add more services

### Edit Portfolio Projects
Open `src/app/components/Portfolio.jsx`:
- Edit the `PROJECTS` array with your real projects
- Change the `emoji`, `title`, `desc`, `tech`, and `gradient` for each

### Edit Testimonials
Open `src/app/components/Testimonials.jsx`:
- Edit the `TESTIMONIALS` array with real client quotes
- Change `avatar` to 2-letter initials of the client's name

### Edit Contact Info
Open `src/app/components/Contact.jsx`:
- Edit the `CONTACT_INFO` array with your real address, email, phone

---

## 📧 Making the Contact Form Work

By default the form is a demo (simulates sending). To make it actually send emails:

### Option 1: Formspree (Easiest — Free)
1. Go to https://formspree.io → Sign up → New Form
2. Copy your form endpoint URL (looks like `https://formspree.io/f/xabcd1234`)
3. In `Contact.jsx`, replace the placeholder with:
```javascript
const res = await fetch('https://formspree.io/f/YOUR_ID_HERE', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
if (res.ok) setStatus('sent')
else setStatus('error')
```

### Option 2: EmailJS (No backend, free tier)
1. Go to https://emailjs.com → create account + email template
2. `npm install @emailjs/browser`
3. Follow their React integration guide

---

## 🌐 How to Deploy (Make it Live)

### Deploy to Vercel (Free — Recommended)
1. Create a free account at https://vercel.com
2. Install Vercel CLI: `npm install -g vercel`
3. In your project folder run: `vercel`
4. Follow the prompts — your site goes live in ~2 minutes!
5. You get a free `.vercel.app` domain instantly

### Connect a Custom Domain
1. Buy a domain from GoDaddy, Namecheap, etc.
2. In Vercel dashboard → your project → Settings → Domains
3. Add your domain and follow the DNS instructions

---

## 🔗 Connect to WordPress (Headless)

If you want WordPress to manage your content:

1. Install WordPress on your shared hosting
2. Install the free **WPGraphQL** plugin
3. In any component, fetch your posts like this:

```javascript
// At the top of your component file:
async function getPosts() {
  const res = await fetch('https://your-wp-site.com/wp-json/wp/v2/posts')
  return res.json()
}

// Then use the posts in your component:
const posts = await getPosts()
posts.map(post => post.title.rendered)
```

---

## ❓ Common Issues

| Problem | Solution |
|---|---|
| `npm: command not found` | Install Node.js from nodejs.org first |
| `Module not found` error | Run `npm install` again |
| Port 3000 already in use | Run `npm run dev -- --port 3001` |
| Styles not applying | Make sure file is named `.module.css` exactly |
| Changes not showing | Save the file — Next.js auto-refreshes |

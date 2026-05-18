// ============================================================
// Portfolio.jsx
// Showcases your past projects with category filters.
// EDIT: Replace the PROJECTS array with your real work.
// ============================================================

'use client'
import { useState } from 'react'
import styles from './Portfolio.module.css'

// CATEGORIES — used for the filter buttons
const CATEGORIES = ['All', 'Web App', 'Mobile', 'E-Commerce', 'Cloud']

// PROJECTS DATA — replace with your real projects
// gradient: any CSS gradient for the project thumbnail
const PROJECTS = [
  {
    title: 'FinTrack Dashboard',
    category: 'Web App',
    desc: 'Real-time financial analytics platform for 50k+ users with live charts and alerts.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    gradient: 'linear-gradient(135deg, #0d1b2a 0%, #00d4ff22 100%)',
    emoji: '📊',
  },
  {
    title: 'ShopEase Mobile',
    category: 'Mobile',
    desc: 'Cross-platform e-commerce app with AR product preview and one-tap checkout.',
    tech: ['React Native', 'Firebase'],
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #7c3aed22 100%)',
    emoji: '🛍️',
  },
  {
    title: 'MediConnect Platform',
    category: 'Web App',
    desc: 'Telemedicine SaaS connecting 200+ doctors with patients across 5 countries.',
    tech: ['Next.js', 'WebRTC', 'AWS'],
    gradient: 'linear-gradient(135deg, #0a1628 0%, #10b98122 100%)',
    emoji: '🏥',
  },
  {
    title: 'LuxeStore',
    category: 'E-Commerce',
    desc: 'Premium fashion e-commerce store with AI-powered recommendations and Razorpay.',
    tech: ['Next.js', 'Shopify', 'Tailwind'],
    gradient: 'linear-gradient(135deg, #1a0d00 0%, #f5910022 100%)',
    emoji: '👗',
  },
  {
    title: 'CloudScale Infrastructure',
    category: 'Cloud',
    desc: 'Multi-region AWS deployment with auto-scaling for a 10M-user SaaS product.',
    tech: ['AWS', 'Terraform', 'Docker'],
    gradient: 'linear-gradient(135deg, #001a1a 0%, #00d4ff15 100%)',
    emoji: '☁️',
  },
  {
    title: 'EduLearn App',
    category: 'Mobile',
    desc: 'Gamified learning app for K-12 students with offline mode and teacher dashboard.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    gradient: 'linear-gradient(135deg, #0a1a00 0%, #86efac22 100%)',
    emoji: '📚',
  },
]

export default function Portfolio() {
  // Track which category filter is active (default = "All")
  const [active, setActive] = useState('All')

  // Filter projects based on active category
  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  return (
    <section id="portfolio" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="section">
        <span className="section-label">Our Work</span>
        <h2 className="section-title">Projects We're Proud Of</h2>
        <p className="section-sub">
          A selection of products we've designed and built for clients across industries.
        </p>

        {/* FILTER BUTTONS */}
        <div className={styles.filters}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT CARDS */}
        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <div key={i} className={styles.card}>
              {/* Thumbnail with gradient background */}
              <div className={styles.thumb} style={{ background: project.gradient }}>
                <span className={styles.thumbEmoji}>{project.emoji}</span>
              </div>
              <div className={styles.body}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.desc}</p>
                <div className={styles.tech}>
                  {project.tech.map(t => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'
// ============================================================
// Contact.jsx
// The contact form section at the bottom of the page.
// 'use client' is needed because we use React state for the form.
//
// HOW TO RECEIVE EMAILS:
// Replace the handleSubmit function body with a real email
// service like EmailJS, Formspree, or your own API endpoint.
// ============================================================

import { useState } from 'react'
import styles from './Contact.module.css'

// CONTACT INFO — edit these with your real details
const CONTACT_INFO = [
  { icon: '📍', label: 'Address',  value: 'Vadodara, Gujarat, India'    },
  { icon: '📧', label: 'Email',    value: 'hello@technova.in'           },
  { icon: '📞', label: 'Phone',    value: '+91 98765 43210'             },
  { icon: '🕐', label: 'Hours',    value: 'Mon–Sat, 9am – 7pm IST'      },
]

export default function Contact() {
  // Form field values stored in state
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('')  // 'sending' | 'sent' | 'error'

  // Update state as user types
  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Handle form submission
  // CUSTOMIZE THIS: Connect to Formspree, EmailJS, or your API
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // -----------------------------------------------
      // OPTION 1: Formspree (easiest — free tier available)
      // 1. Go to formspree.io → create form → copy your endpoint
      // 2. Replace the URL below with your Formspree endpoint
      //
      // const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form),
      // })
      // if (res.ok) setStatus('sent'); else setStatus('error')
      //
      // -----------------------------------------------
      // OPTION 2: EmailJS (no backend required)
      // npm install emailjs-com, then follow their docs
      // -----------------------------------------------

      // PLACEHOLDER: simulates a 1.5s send delay for demo
      await new Promise(r => setTimeout(r, 1500))
      setStatus('sent')
      setForm({ name: '', email: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="section">
        <span className="section-label">Get in Touch</span>
        <h2 className="section-title">Start Your Project Today</h2>
        <p className="section-sub">
          Tell us what you're building and we'll get back to you within 24 hours.
        </p>

        {/* TWO-COLUMN: form | contact info */}
        <div className={styles.grid}>

          {/* LEFT: CONTACT FORM */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Rahul Mehta"
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="rahul@company.com"
                  required
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Service Needed</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={styles.input}
              >
                <option value="">Select a service...</option>
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>Cloud & DevOps</option>
                <option>E-Commerce</option>
                <option>AI & Automation</option>
                <option>Other</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Project Details *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project, timeline, and budget..."
                rows={5}
                required
                className={styles.textarea}
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>

            {/* STATUS MESSAGES */}
            {status === 'sent' && (
              <p className={styles.successMsg}>
                ✅ Message sent! We'll be in touch within 24 hours.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>
                ❌ Something went wrong. Please email us directly.
              </p>
            )}
          </form>

          {/* RIGHT: CONTACT INFO + CTA */}
          <div className={styles.infoCol}>
            {CONTACT_INFO.map((item, i) => (
              <div key={i} className={styles.infoItem}>
                <span className={styles.infoIcon}>{item.icon}</span>
                <div>
                  <div className={styles.infoLabel}>{item.label}</div>
                  <div className={styles.infoValue}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* QUICK CTA BOX */}
            <div className={styles.ctaBox}>
              <div className={styles.ctaTitle}>Free Consultation</div>
              <p className={styles.ctaText}>
                Not sure where to start? Book a free 30-minute call with our lead architect.
              </p>
              <a href="mailto:hello@technova.in" className={styles.ctaLink}>
                Book a Call →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

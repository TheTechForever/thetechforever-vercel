// ============================================================
// Testimonials.jsx
// Shows client reviews/quotes to build trust.
// EDIT: Replace with your real client testimonials below.
// ============================================================

import styles from './Testimonials.module.css'

// TESTIMONIALS DATA — replace with real quotes from your clients
const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'CTO, FinTrack India',
    avatar: 'PS',
    quote:
      'TheTechForever delivered our dashboard 2 weeks early with zero bugs on launch. Their communication throughout the project was exceptional — we always knew exactly where things stood.',
    rating: 5,
  },
  {
    name: 'James Whitfield',
    role: 'Founder, LuxeStore UK',
    avatar: 'JW',
    quote:
      'We had a rough experience with our previous agency. TheTechForever completely rebuilt our store in 6 weeks and our conversion rate went up 34%. Worth every rupee.',
    rating: 5,
  },
  {
    name: 'Amir Al-Hassan',
    role: 'CEO, MediConnect UAE',
    avatar: 'AA',
    quote:
      "Building a telemedicine platform is incredibly complex. TheTechForever handled HIPAA considerations, WebRTC, and scaling — all flawlessly. I couldn't recommend them more.",
    rating: 5,
  },
]

// Helper: render star icons based on rating number
function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={styles.star}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="section">
        <span className="section-label">Client Love</span>
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-sub">
          {"Don't just take our word for it \u2014 here's what the people we've worked with think."}
        </p>

        {/* TESTIMONIAL CARDS */}
        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={styles.card}>
              {/* Star rating */}
              <Stars count={t.rating} />

              {/* Quote text */}
              <blockquote className={styles.quote}>"{t.quote}"</blockquote>

              {/* Author info */}
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

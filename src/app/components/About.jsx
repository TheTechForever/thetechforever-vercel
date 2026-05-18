// ============================================================
// About.jsx
// The "About Us" section — tells your company story.
// Edit the text, values, and founding year below.
// ============================================================

import styles from './About.module.css'

// CORE VALUES — edit or add more as needed
const VALUES = [
  { icon: '🎯', title: 'Mission-Driven',  desc: 'Every line of code serves a purpose. We build with intention and measure impact.'     },
  { icon: '🔒', title: 'Reliable',         desc: 'We deliver on time, every time. Our clients trust us because we never cut corners.'   },
  { icon: '🚀', title: 'Innovative',       desc: 'We stay ahead of the curve, adopting emerging tech before it becomes mainstream.'      },
  { icon: '🤝', title: 'Collaborative',    desc: 'We work as true partners — your team and ours, with shared goals and full transparency.'},
]

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="section">

        {/* TWO-COLUMN LAYOUT: text left, visual right */}
        <div className={styles.grid}>

          {/* LEFT: Text content */}
          <div className={styles.textCol}>
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              A Team of Builders,<br />
              <span className="accent">Not Just Coders</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>
              Founded in 2016, TheTechForever has grown from a 3-person startup into a
              full-service software company trusted by 150+ clients across India,
              the UAE, and the UK.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 32 }}>
              We don't just write code — we understand your business, identify the
              right technology, and build solutions that grow with you. From MVP
              to enterprise, we've done it all.
            </p>
            <a href="#contact" className={styles.link}>
              Let's build something together →
            </a>
          </div>

          {/* RIGHT: Core values grid */}
          <div className={styles.valuesGrid}>
            {VALUES.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <span className={styles.icon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

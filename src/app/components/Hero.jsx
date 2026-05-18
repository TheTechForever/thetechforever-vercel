// ============================================================
// Hero.jsx — Updated with TheTechForever branding & logo
// ============================================================

import Image from 'next/image'
import styles from './Hero.module.css'

const STATS = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '8+',   label: 'Years Experience'    },
  { value: '40+',  label: 'Team Members'        },
]

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={styles.content}>

        {/* COMPANY LOGO */}
        <div className={`${styles.heroLogo} fade-up delay-1`}>
          <Image
            src="/TheTechForever-Light-Logo-Rectangle-with-white-line.png"
            alt="TheTechForever"
            width={180}
            height={64}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* BADGE */}
        <div className="section-label fade-up delay-1">
          IT &amp; Software Solutions
        </div>

        {/* HEADLINE */}
        <h1 className={`${styles.headline} fade-up delay-2`}>
          We Build Software<br />
          That <span className="accent">Powers</span> Business
        </h1>

        {/* SUBHEADING */}
        <p className={`${styles.sub} fade-up delay-3`}>
          TheTechForever delivers cutting-edge web apps, mobile solutions, and
          cloud infrastructure — helping startups and enterprises scale
          with confidence.
        </p>

        {/* CTA BUTTONS */}
        <div className={`${styles.ctas} fade-up delay-4`}>
          <a href="#portfolio" className={styles.btnPrimary}>View Our Work</a>
          <a href="#contact"   className={styles.btnOutline}>Start a Project</a>
        </div>

        {/* STATS */}
        <div className={styles.stats}>
          {STATS.map((s, i) => (
            <div key={i} className={`${styles.statItem} fade-up`} style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

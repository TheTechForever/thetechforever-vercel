// ============================================================
// Footer.jsx — Updated with TheTechForever logo image
// ============================================================

import Image from 'next/image'
import styles from './Footer.module.css'

const FOOTER_LINKS = {
  Company:  ['About Us', 'Services', 'Portfolio', 'Careers'],
  Services: ['Web Development', 'Mobile Apps', 'Cloud & DevOps', 'AI & Automation'],
  Contact:  ['hello@thetechforever.com', '+91 98765 43210', 'Vadodara, Gujarat'],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.top}>

          {/* Brand column */}
          <div className={styles.brandCol}>
            {/* LOGO IMAGE */}
            <div className={styles.logoWrap}>
              <Image
                src="/logo.png"
                alt="TheTechForever"
                width={140}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className={styles.tagline}>
              Building the software that<br />powers tomorrow&apos;s businesses.
            </p>
            {/* SOCIAL LINKS — replace '#' with your real URLs */}
            <div className={styles.socials}>
              <a href="#" aria-label="LinkedIn"  className={styles.social}>in</a>
              <a href="#" aria-label="Twitter"   className={styles.social}>𝕏</a>
              <a href="#" aria-label="GitHub"    className={styles.social}>gh</a>
              <a href="#" aria-label="Instagram" className={styles.social}>ig</a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([col, links]) => (
            <div key={col} className={styles.linkCol}>
              <h4 className={styles.colTitle}>{col}</h4>
              <ul className={styles.linkList}>
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className={styles.link}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <span>© {year} TheTechForever Pvt. Ltd. All rights reserved.</span>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

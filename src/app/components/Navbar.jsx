'use client'
// ============================================================
// Navbar.jsx
// The top navigation bar that sticks to the top while scrolling.
// 'use client' is needed because we use JavaScript interactivity
// (scroll detection and mobile menu toggle).
// ============================================================

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'

// NAV LINKS — edit these to change the menu items
const NAV_LINKS = [
  { label: 'About',       href: '#about'       },
  { label: 'Services',    href: '#services'    },
  { label: 'Portfolio',   href: '#portfolio'   },
  { label: 'Testimonials',href: '#testimonials'},
  { label: 'Contact',     href: '#contact'     },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)  // tracks if user scrolled
  const [menuOpen, setMenuOpen] = useState(false)  // tracks mobile menu state

  // Listen for scroll events — adds a shadow to navbar after scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll) // cleanup
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        {/* LOGO — your company logo image */}
        <a href="#hero" className={styles.logoWrap}>
          <Image
            src="/logo.png"
            alt="TheTechForever Logo"
            width={140}
            height={48}
            style={{ objectFit: 'contain' }}
            priority
          />
        </a>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className={styles.nav}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA BUTTON — links to the contact section */}
        <a href="#contact" className={styles.ctaBtn}>Get in Touch</a>

        {/* HAMBURGER BUTTON — only visible on mobile */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.barOpen : styles.bar} />
          <span className={menuOpen ? styles.barOpen2 : styles.bar} />
          <span className={menuOpen ? styles.barOpen3 : styles.bar} />
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)} // close menu when a link is clicked
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
            Get in Touch
          </a>
        </div>
      )}
    </header>
  )
}

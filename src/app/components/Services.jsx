// ============================================================
// Services.jsx
// Lists all the services your company offers.
// Each service card shows an icon, title, description, and tags.
// EDIT: Add/remove services in the SERVICES array below.
// ============================================================

import styles from './Services.module.css'

// SERVICES DATA — edit this array to add/remove/update services
const SERVICES = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Custom websites and web applications built with React, Next.js, and modern frameworks. Fast, scalable, and SEO-ready.',
    tags: ['React', 'Next.js', 'Node.js'],
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile apps for iOS and Android. Beautiful UX, smooth performance, and robust backend integration.',
    tags: ['React Native', 'Flutter', 'iOS/Android'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    desc: 'AWS, GCP, and Azure infrastructure setup, CI/CD pipelines, containerization, and monitoring for reliable deployments.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    icon: '🛒',
    title: 'E-Commerce Solutions',
    desc: 'End-to-end online store development with payment gateways, inventory management, and conversion-optimized design.',
    tags: ['Shopify', 'WooCommerce', 'Custom'],
  },
  {
    icon: '🤖',
    title: 'AI & Automation',
    desc: 'Integrate AI into your workflows. Chatbots, data pipelines, predictive analytics, and process automation that saves hours.',
    tags: ['OpenAI', 'Python', 'ML'],
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    desc: 'Security audits, penetration testing, and hardening for your web apps and APIs. Sleep soundly knowing you\'re protected.',
    tags: ['Pen Testing', 'SSL/TLS', 'OWASP'],
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="section">
        <span className="section-label">What We Do</span>
        <h2 className="section-title">Services Built for Scale</h2>
        <p className="section-sub">
          From idea to deployment, we cover the full stack — whatever your business needs to succeed online.
        </p>

        {/* SERVICE CARDS GRID */}
        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.icon}>{service.icon}</span>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc}>{service.desc}</p>
              {/* TAGS — small badges for technologies used */}
              <div className={styles.tags}>
                {service.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

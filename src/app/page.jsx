// ============================================================
// page.jsx  ← THIS IS THE MAIN PAGE FILE
//
// This file assembles all sections into one complete page.
// Think of it like a table of contents — each import brings
// in a section, and they appear on the page in the order
// you list them here.
//
// TO ADD A NEW SECTION:
//   1. Create YourSection.jsx in /components/
//   2. Import it here: import YourSection from './components/YourSection'
//   3. Add <YourSection /> below in the right position
// ============================================================

// Import all section components
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Services     from './components/Services'
import Portfolio    from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function Page() {
  return (
    <>
      {/* NAVIGATION — fixed at the top */}
      <Navbar />

      {/* MAIN CONTENT — sections in order */}
      <main>
        <Hero />         {/* Section 1: Full-screen banner */}
        <About />        {/* Section 2: About the company */}
        <Services />     {/* Section 3: Services offered */}
        <Portfolio />    {/* Section 4: Past projects */}
        <Testimonials /> {/* Section 5: Client reviews */}
        <Contact />      {/* Section 6: Contact form */}
      </main>

      {/* FOOTER — at the very bottom */}
      <Footer />
    </>
  )
}

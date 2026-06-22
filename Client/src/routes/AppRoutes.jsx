/**
 * AppRoutes.jsx — Nextnix Website
 * ---------------------------------
 * This file controls ALL page navigation of the website.
 * Every URL path is defined here.
 * If you want to add a new page in future, just add a new <Route> here.
 *
 * Folder: client/src/routes/AppRoutes.jsx
 */

import { Routes, Route } from "react-router-dom";

// ─── Page Imports ────────────────────────────────────────────────────────────
// Each page is imported from the pages/ folder.
// Lazy loading is NOT used here intentionally — website is small right now.
// Add React.lazy() when you have 10+ pages in future for better performance.
import Home     from "../pages/Home";
import About    from "../pages/About";
import Learn    from "../pages/Learn";
import Services from "../pages/Services";
import Contact  from "../pages/Contact";

// ─── 404 Page ────────────────────────────────────────────────────────────────
// This page shows when someone visits a URL that does not exist.
// Example: nextnix.com/xyz → shows NotFound page
// Create this file at: client/src/pages/NotFound.jsx
import NotFound from "../pages/NotFound";


// ─── AppRoutes Component ─────────────────────────────────────────────────────
const AppRoutes = () => {
  return (

    /**
     * <Routes> — Container for all route definitions.
     * Only ONE route renders at a time — the one that matches the current URL.
     * Never put anything inside <Routes> except <Route> elements.
     */
    <Routes>

      {/* ── Home Page ──────────────────────────────────────────────────────
          URL: nextnix.com/
          Shows: Hero, Features, YouTube videos, Services preview, Mission
          index prop means this is the default/root page.
      */}
      <Route index element={<Home />} />

      {/* ── About Page ─────────────────────────────────────────────────────
          URL: nextnix.com/about
          Shows: Founder story, BCA+MCA background, Vision, Mission, Motto
      */}
      <Route path="about" element={<About />} />

      {/* ── Learn Page ─────────────────────────────────────────────────────
          URL: nextnix.com/learn
          Shows: YouTube videos embedded, Free roadmaps, Resources
          Topics: Coding, CCNA, Windows Administration
      */}
      <Route path="learn" element={<Learn />} />

      {/* ── Services Page ──────────────────────────────────────────────────
          URL: nextnix.com/services
          Shows: Free YouTube learning, Offline batches (coming soon),
                 Corporate training (coming soon), College workshops (coming soon)
          NOTE: This page shows both current and future business offerings.
                Do NOT remove coming-soon items — they build trust and awareness.
      */}
      <Route path="services" element={<Services />} />

      {/* ── Contact Page ───────────────────────────────────────────────────
          URL: nextnix.com/contact
          Shows: Contact form (EmailJS), Social links, Business email
          SECURITY NOTE: Form uses EmailJS — no backend needed.
                         Never expose your EmailJS Service ID, Template ID,
                         or Public Key directly in code.
                         Always use .env file for those values.
                         Example: VITE_EMAILJS_SERVICE_ID=your_id
      */}
      <Route path="contact" element={<Contact />} />

      {/* ── 404 Not Found ──────────────────────────────────────────────────
          URL: any unknown path (nextnix.com/xyz)
          SECURITY NOTE: path="*" is required — it catches all unknown URLs.
                         Without this, React shows a blank white page which
                         looks broken and unprofessional.
          Shows: Friendly message + back to home button
      */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default AppRoutes;
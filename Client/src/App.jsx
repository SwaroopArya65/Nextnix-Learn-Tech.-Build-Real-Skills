/**
 * App.jsx — Nextnix Website
 * --------------------------
 * This is the ROOT component of the entire website.
 * Everything passes through this file.
 *
 * Structure:
 *   main.jsx → App.jsx → AppRoutes.jsx → Individual Pages
 *
 * This file handles:
 *   1. Global SEO meta tags (title, description, og:image)
 *   2. Global security headers via meta tags
 *   3. Global layout (Navbar + Page Content + Footer)
 *   4. Toast notifications (for contact form success/error)
 *   5. Routing setup via BrowserRouter
 *
 * Folder: client/src/App.jsx
 */

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

// ─── Layout Components ────────────────────────────────────────────────────────
// Navbar and Footer appear on EVERY page automatically.
// You only need to write them once here.
import Navbar  from "./components/common/Navbar";
import Footer  from "./components/common/Footer";

// ─── Routes ───────────────────────────────────────────────────────────────────
// All page routing is handled inside AppRoutes.jsx
import AppRoutes from "./routes/AppRoutes";


// ─── App Component ────────────────────────────────────────────────────────────
const App = () => {
  return (

    /**
     * <HelmetProvider> — Wrapper required by react-helmet-async.
     * Must be the outermost wrapper so every page can set its own
     * title and meta tags independently for SEO.
     */
    <HelmetProvider>
      <Helmet>
        {/* ── Default Page Title ── */}
        <title>Nextnix — Learn tech. Build Real Skills.</title>

        {/* ── Default SEO Description ── */}
        <meta
          name="description"
          content="Nextnix is a beginner-friendly tech education brand. Learn coding, CCNA, and Windows Administration from zero — even on mobile. No laptop needed."
        />

        {/* ── Keyword Hints for Google ── */}
        <meta
          name="keywords"
          content="coding for beginners, learn tech India, CCNA beginner, Windows administration, mobile learning, Nextnix"
        />

        {/* ── Author ── */}
        <meta name="author" content="Nextnix" />

        {/* ── Open Graph (Social Sharing) ── */}
        <meta property="og:title"       content="Nextnix — Learn tech. Build Real Skills." />
        <meta property="og:description" content="Beginner-friendly tech education — coding, CCNA, Windows Admin. Learn from zero, even on mobile." />
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://nextnix.com" />
        {/* Replace og:image value with your actual banner image path in /public/ */}
        <meta property="og:image"       content="/og-icon.svg" />

        {/* ── Security: Prevent MIME type sniffing ── */}
        <meta http-equiv="X-Content-Type-Options" content="nosniff" />

        {/* ── Security: Referrer Policy ──
            "strict-origin-when-cross-origin" means:
            When user clicks a link to another site, only your domain name
            is shared — not the full URL. Protects user privacy.
        */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* ── Security: Content Security Policy (CSP) ──
            Controls EXACTLY what can run on your website.
            This blocks hackers from injecting malicious scripts (XSS attacks).

            BREAKDOWN:
            default-src 'self'     → Only load files from your own domain
            script-src  'self'     → Only run scripts from your domain
            style-src   'self' ... → Allow your CSS + Google Fonts
            font-src    fonts.*    → Allow Google Fonts to load
            img-src     'self' ... → Allow images from your domain + YouTube
            frame-src   youtube.*  → Allow YouTube embeds only

            IMPORTANT: When you add new services (EmailJS, Analytics etc.),
            you must add their domain here too. Otherwise they will be blocked.
        */}
        <meta
          http-equiv="Content-Security-Policy"
          content="
            default-src 'self';
            script-src  'self' 'unsafe-inline' https://cdn.emailjs.com;
            style-src   'self' 'unsafe-inline' https://fonts.googleapis.com;
            font-src    https://fonts.gstatic.com;
            img-src     'self' data: https://img.youtube.com https://i.ytimg.com;
            frame-src   https://www.youtube.com https://www.youtube-nocookie.com;
            connect-src 'self' https://api.emailjs.com;
          "
        />

        {/* ── Mobile Responsive ──
            Tells the browser to match screen width of the device.
            Without this, mobile users see a zoomed-out desktop version.
        */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      </Helmet>

      <BrowserRouter>

        {/* Navbar — appears on every page at the top */}
        <Navbar />

        {/* Main content area — AppRoutes renders the correct page here */}
        <main>
          <AppRoutes />
        </main>

        {/* Footer — appears on every page at the bottom */}
        <Footer />
        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              fontFamily: "inherit",
              fontSize: "14px",
            },
            success: {
              style: {
                background: "#E1F5EE",
                color: "#085041",
                border: "1px solid #9FE1CB",
              },
            },
            error: {
              style: {
                background: "#FCEBEB",
                color: "#501313",
                border: "1px solid #F7C1C1",
              },
            },
          }}
        />

      </BrowserRouter>

    </HelmetProvider>
  );
};

export default App;
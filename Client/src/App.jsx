import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* Global SEO */}
        <Helmet>
          <title>
            Nextnix | Learn Tech. Build Real Skills.
          </title>

          <meta
            name="description"
            content="Nextnix is a beginner-friendly tech education platform helping students learn technology, build real projects, and become job ready."
          />

          <meta
            name="keywords"
            content="Nextnix, Learn Tech, Web Development, MERN Stack, Programming, React, JavaScript, Coding, Career Development"
          />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Nextnix | Learn Tech. Build Real Skills."
          />

          <meta
            property="og:description"
            content="Learn technology from beginner to advanced level and build real-world projects with Nextnix."
          />

          <meta
            property="og:type"
            content="website"
          />

          <meta
            property="og:image"
            content="/logo.png"
          />

          <meta
            property="og:url"
            content="https://nextnix.in"
          />

          {/* Twitter */}
          <meta
            name="twitter:card"
            content="summary_large_image"
          />

          <meta
            name="twitter:title"
            content="Nextnix | Learn Tech. Build Real Skills."
          />

          <meta
            name="twitter:description"
            content="Learn technology and build real skills with practical projects."
          />

          <meta
            name="twitter:image"
            content="/logo.png"
          />

          {/* Security */}
          <meta
            httpEquiv="X-UA-Compatible"
            content="IE=edge"
          />

          <meta
            httpEquiv="Content-Security-Policy"
            content="
              default-src 'self';
              img-src 'self' data: https:;
              script-src 'self';
              style-src 'self' 'unsafe-inline';
              font-src 'self' data:;
              connect-src 'self' https:;
            "
          />

          <meta
            httpEquiv="Referrer-Policy"
            content="strict-origin-when-cross-origin"
          />

          <meta
            httpEquiv="Permissions-Policy"
            content="camera=(), microphone=(), geolocation=()"
          />
        </Helmet>

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: "12px",
              background: "#111827",
              color: "#ffffff",
            },
          }}
        />

        {/* Global Layout */}
        <div className="flex min-h-screen flex-col bg-white overflow-x-hidden">
          <Navbar />

          <main className="flex-1">
            <AppRoutes />
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
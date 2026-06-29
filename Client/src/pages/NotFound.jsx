import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home,
  GraduationCap,
  Play,
  Mail,
  ArrowRight,
  Compass,
} from "lucide-react";

import SEO from "../components/common/SEO";

const quickLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Learn",
    path: "/learn",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 | Page Not Found | Nextnix"
        description="The page you're looking for couldn't be found."
        keywords="404, Page Not Found"
        url="https://nextnix.netlify.app/404"
        image="https://nextnix.netlify.app/logo.png"
        robots="noindex, nofollow"
      />

      <div className="relative isolate flex min-h-screen items-center overflow-hidden">

        {/* Background */}

        <div className="nn-bg-light-grid absolute inset-0 -z-20" />

        {/* Decorative Blur */}

        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#5EE587]/20 blur-[120px]" />

        <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-[#051D67]/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: .6,
              }}
            >

              <span className="inline-flex items-center gap-2 rounded-full border border-[#5EE587]/30 bg-[#5EE587]/10 px-5 py-2 text-sm font-semibold text-[#051D67]">

                <Compass size={16} />

                Lost? Don't Worry

              </span>

              <h1 className="mt-8 font-space-grotesk text-8xl font-black leading-none text-[#051D67] md:text-[10rem]">
                404
              </h1>

              <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] md:text-5xl">
                Oops! Page Not Found
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                The page you're looking for doesn't exist,
                may have been moved, or the URL might be
                incorrect.

                <br />
                <br />

                Even the best developers sometimes take
                the wrong path. Let's get you back on
                track.
              </p>

              {/* Buttons */}

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link
                  to="/"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#5EE587] px-8 py-4 font-semibold text-[#051D67] transition hover:-translate-y-1 hover:bg-[#4dd977]"
                >

                  <Home size={20} />

                  Back Home

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />

                </Link>

                <Link
                  to="/learn"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#051D67]/20 bg-white/80 px-8 py-4 font-semibold text-[#051D67] backdrop-blur-xl transition hover:border-[#5EE587]"
                >

                  <GraduationCap size={20} />

                  Start Learning

                </Link>

              </div>

            </motion.div>

            {/* Right */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: .6,
              }}
              className="rounded-[40px] border border-[#5EE587]/20 bg-white/70 p-10 shadow-2xl backdrop-blur-xl"
            >

              <h3 className="font-space-grotesk text-3xl font-bold text-[#051D67]">
                Popular Pages
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Here are some helpful places you might
                want to visit instead.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                {quickLinks.map((page) => (

                  <Link
                    key={page.title}
                    to={page.path}
                    className="rounded-full border border-[#5EE587]/30 bg-[#5EE587]/10 px-5 py-3 font-medium text-[#051D67] transition hover:bg-[#5EE587] hover:text-[#051D67]"
                  >
                    {page.title}
                  </Link>

                ))}

              </div>

              <div className="mt-12 border-t border-slate-200 pt-10">

                <h4 className="font-space-grotesk text-2xl font-bold text-[#051D67]">
                  Continue Your Journey
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  Explore tutorials, projects, career
                  guidance, networking, and much more
                  through Nextnix.
                </p>

                <div className="mt-8 flex flex-col gap-4">

                  <a
                    href="https://youtube.com/@YOURCHANNEL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl bg-[#051D67] px-6 py-4 font-semibold text-white transition hover:bg-[#06257F]"
                  >

                    <Play size={20} />

                    Visit YouTube Channel

                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 rounded-xl border border-[#051D67]/20 px-6 py-4 font-semibold text-[#051D67] transition hover:border-[#5EE587]"
                  >

                    <Mail size={20} />

                    Contact Nextnix

                  </Link>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </>
  );
}
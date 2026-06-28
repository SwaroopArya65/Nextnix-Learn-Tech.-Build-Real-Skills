import { useEffect, useState } from "react";
import {
    Menu,
    X,
    Play,
} from "lucide-react";
import {
    NavLink,
    Link,
    useLocation,
} from "react-router-dom";
import {
    AnimatePresence,
    motion,
} from "framer-motion";
import logo from "../../assets/logoicon.svg";
import { ChevronsDown } from 'lucide-react';

function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Learn", path: "/learn" },
        { name: "Contact", path: "/contact" },
    ];

    // Auto-close mobile menu on route change
    useEffect(() => {
        setMobileMenu(false);
    }, [location.pathname]);

    // Navbar shadow on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled
                    ? "shadow-md backdrop-blur-lg"
                    : ""
                }`}
        >
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2"
                >
                    <img src={logo} alt="Nextnix Logo" className="flex h-11 w-11 items-center justify-center" />

                    <div>
                        <h1 className="text-lg font-extrabold font-inter text-[#051d67]">
                            Nextnix
                        </h1>

                        <p className="-mt-1 text-xs text-[#029f31] tracking-wide font-inter">
                            FUTURE. INNOVATED.
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-10 lg:flex">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `relative text-[17px] font-medium font-inter tracking-wider transition-colors ${isActive
                                    ? "text-[#029f31]"
                                    : "text-gray-700 hover:text-[#029f31]"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {link.name}

                                    {isActive && (
                                        <motion.div
                                            layoutId="active-nav"
                                            className="absolute -bottom-2 left-0 h-0.75 w-full rounded-full bg-[#029f31]"
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden items-center lg:flex">
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-md outline px-4 py-2 font-medium font-inter text-[#051d67] tracking-wider transition-all hover:scale-100 hover:outline-[#029f31] hover:*:text-[#029f31] hover:text-[#029f31] hover:bg-[#5EE587]/10"
                    >
                        <ChevronsDown size={20} />
                        Subscribe
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() =>
                        setMobileMenu(!mobileMenu)
                    }
                    className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
                >
                    {mobileMenu ? (
                        <X size={30} />
                    ) : (
                        <Menu size={30} />
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenu && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() =>
                                setMobileMenu(false)
                            }
                            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 250,
                            }}
                            className="fixed right-0 top-0 z-50 h-screen w-full max-w-sm bg-[#d1fade] p-6 shadow-2xl lg:hidden"
                        >
                            {/* Mobile Header */}
                            <div className="mb-10 flex items-center justify-between">
                                <Link
                                    to="/"
                                    className="flex items-center gap-2"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                                        <img src={logo} alt="Nextnix Logo" className="h-6 w-6" />
                                    </div>

                                    <span className="text-lg font-bold text-[#051d67]">
                                        Nextnix
                                    </span>
                                </Link>

                                <button
                                    onClick={() =>
                                        setMobileMenu(false)
                                    }
                                >
                                    <X size={30} />
                                </button>
                            </div>

                            {/* Mobile Links */}
                            <div className="space-y-2">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.name}
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `block rounded-xl px-4 py-3 font-medium font-inter tracking-wider transition ${isActive
                                                ? "text-[#029f31] bg-indigo-50"
                                                : "text-gray-700 hover:text-[#029f31] hover:font-bold"
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}
                            </div>

                            {/* Mobile CTA */}
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-10 flex w-full font-inter items-center justify-center gap-2 rounded-md bg-[#029f31] px-5 py-3 font-semibold text-white transition hover:bg-[#027a24]"
                            >
                                <Play size={20} />
                                Subscribe on YouTube
                            </a>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default Navbar;
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {
    GraduationCap,
    Play,
    Code2,
    Briefcase,
    Camera,
    ArrowUpRight,
    Globe,
    Monitor,
    FolderKanban,
    Map,
} from "lucide-react";

const exploreLinks = [
    { name: "Home", path: "/" },
    { name: "Learn", path: "/learn" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

const socialLinks = [
    {
        name: "YouTube",
        href: "https://www.x.com/@Nextnixtech",
        icon: Play,
    },
    {
        name: "GitHub",
        href: "https://github.com/SwaroopArya65",
        icon: Code2,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/jobs/",
        icon: Briefcase,
    },
    {
        name: "Instagram",
        href: "https://instagram.com/nextnixtech",
        icon: Camera,
    },
];

function Footer() {
    return (
        <>
            <footer className="nn-bg-light-grid border-t border-[#5EE587]/10">
                <div className="mx-auto max-w-7xl px-6 py-10">
                    {/* Top Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-0"
                    >
                        {/* Brand */}
                        <div>
                            <NavLink
                                to="/"
                                className="flex items-center gap-4"
                            >
                                <img
                                    src={logo}
                                    alt="Nextnix Logo"
                                    className="h-14 w-100%"
                                />

                                {/* <div>
                                <h2 className="text-3xl font-bold text-[#051D67]">
                                    Nextnix
                                </h2>

                                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#5EE587]">
                                    Future. Innovated.
                                </p>
                            </div> */}
                            </NavLink>

                            <p className="mt-6 max-w-2xl text-lg leading-7 text-justify font-inter tracking-wider text-slate-600">
                                Nextnix is a beginner-friendly tech education
                                platform helping students learn real-world
                                technology skills through practical projects,
                                guided learning, and community support.
                            </p>

                            <p className="mt-6 font-semibold font-space-grotesk tracking-wider text-[#5EE587]">
                                Learn Tech. Build Real Skills.
                            </p>
                        </div>

                        {/* Explore */}
                        <div>
                            <h3 className="mb-6 text-xl font-extrabold font-space-grotesk tracking-widest text-[#051D67]">
                                Explore
                            </h3>

                            <ul className="space-y-3">
                                {[
                                    "Home",
                                    "Learn",
                                    "Services",
                                    "About",
                                    "Contact",
                                ].map((item) => (
                                    <li key={item}>
                                        <NavLink
                                            to={
                                                item === "Home"
                                                    ? "/"
                                                    : `/${item.toLowerCase()}`
                                            }
                                            className="text-lg font-inter tracking-wider font-semibold text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-[#5EE587]"
                                        >
                                            {item}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Learn */}
                        <div>
                            <h3 className="mb-6 text-xl font-extrabold font-space-grotesk tracking-widest text-[#051D67]">
                                Learn
                            </h3>

                            <ul className="space-y-3">
                                {[
                                    {
                                        icon: <Code2 size={18} />,
                                        name: "Coding",
                                    },
                                    {
                                        icon: <Globe size={18} />,
                                        name: "CCNA",
                                    },
                                    {
                                        icon: <Monitor size={18} />,
                                        name: "Windows Admin",
                                    },
                                    {
                                        icon: (
                                            <FolderKanban size={18} />
                                        ),
                                        name: "Projects",
                                    },
                                    {
                                        icon: <Map size={18} />,
                                        name: "Roadmaps",
                                    },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 text-lg font-inter tracking-wider font-semibold text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-[#5EE587]"
                                        >
                                            {item.icon}
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Connect */}
                        <div>
                            <h3 className="mb-6 text-xl font-extrabold font-space-grotesk tracking-widest text-[#051D67]">
                                Connect
                            </h3>

                            <ul className="space-y-3">
                                {[
                                    {
                                        icon: <Play size={20} />,
                                        name: "YouTube",
                                    },
                                    {
                                        icon: <Code2 size={20} />,
                                        name: "GitHub",
                                    },
                                    {
                                        icon: <Briefcase size={20} />,
                                        name: "LinkedIn",
                                    },
                                    {
                                        icon: <Camera size={20} />,
                                        name: "Instagram",
                                    },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 text-lg font-inter tracking-wider font-semibold text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-[#5EE587]"
                                        >
                                            {item.icon}
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Bottom Section */}
                    <div className=" flex flex-col items-center justify-between gap-6 md:flex-row">
                        <p className="text-base text-slate-500 font-inter tracking-wider mt-4">
                            © {new Date().getFullYear()} Nextnix. All rights
                            reserved.
                        </p>
                        <p className="text-base text-slate-500 font-inter tracking-wider mt-4">
                            Last Updated On :  {new Date().toLocaleString("en-IN", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                                // second: "2-digit",
                            })}
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 font-space-grotesk tracking-wider font-medium rounded-full border border-[#5EE587]/15 bg-white/50 px-5 py-3 backdrop-blur-md">
                            {/* {[
                                <Play size={22} />,
                                <Code2 size={22} />,
                                <Briefcase size={22} />,
                                <Camera size={22} />,
                            ].map((icon, index) => (
                                <button
                                    key={index}
                                    className="rounded-full p-2 text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:text-[#5EE587]"
                                >
                                    {icon}
                                </button>
                            ))} */}

                            Version : 1.10.12
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
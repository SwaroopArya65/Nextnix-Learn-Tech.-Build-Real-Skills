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
        href: "https://github.com/nextnixtech",
        icon: Code2,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/company/nextnix",
        icon: Briefcase,
    },
    {
        name: "Instagram",
        href: "https://instagram.com/nextnixtech",
        icon: Camera,
    },
];

function Footer() {

    const handleSubscribe = () => {
        const toastId = toast.loading(
            "Opening YouTube Channel..."
        );

        setTimeout(() => {
            toast.dismiss(toastId);

            toast.success("Redirected successfully!");

            window.open(
                "https://www.youtube.com/@Nextnixtech",
                "_blank",
                "noopener,noreferrer"
            );
        }, 2000);
    };

    const handleTelegram = () => {
        toast.success("Redirecting to Telegram Community...");

        setTimeout(() => {
            window.open(
                "https://t.me/your-community-link",
                "_blank",
                "noopener,noreferrer"
            );
        }, 1500);
    };

    return (
        <>
            <footer className="nn-bg-light-grid border-t border-[#5EE587]/10 mt-4">

                <div className="relative -translate-y-12">
                    <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-[#5EE587]/20 bg-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(94,229,135,0.15)]">
                        <div className="px-8 py-2 md:px-14 md:py-14">
                            {/* Badge */}
                            <div className="flex justify-center">
                                <span className="inline-flex items-center gap-2 rounded-full border border-[#5EE587]/40 bg-[#5EE587]/10 px-5 py-2 text-sm font-medium font-inter text-[#051D67]">
                                    🚀 Join Our Growing Community
                                </span>
                            </div>

                            {/* Stats */}
                            <div className="mt-4 grid gap-6 md:grid-cols-2">
                                <div className="rounded-2xl border border-[#5EE587]/20 bg-white/10 p-3 text-center backdrop-blur-xl">
                                    <p className="text-4xl font-bold font-poppins text-[#051D67]">
                                        17+
                                    </p>

                                    <p className="mt-2 font-inter text-slate-600">
                                        Learners already watching on YouTube
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-[#5EE587]/20 bg-white/10 p-3 text-center backdrop-blur-xl">
                                    <p className="text-4xl">💬</p>

                                    <p className="mt-2 font-inter text-slate-600">
                                        Join Telegram Community to get help,
                                        share progress, and grow together.
                                    </p>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <button
                                    onClick={handleSubscribe}
                                    className="rounded-2xl bg-[#051D67] px-8 py-4 font-semibold font-inter text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A2B8F]"
                                >
                                    📹 Subscribe on YouTube
                                </button>

                                <button
                                    onClick={handleTelegram}
                                    className="rounded-2xl border border-[#5EE587]/40 bg-[#5EE587]/10 px-8 py-4 font-semibold font-inter text-[#051D67] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5EE587]/20"
                                >
                                    💬 Join Telegram
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-6 py-20">
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
                        <p className="text-base text-slate-500 font-inter tracking-wider">
                            © {new Date().getFullYear()} Nextnix. All rights
                            reserved.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 rounded-full border border-[#5EE587]/15 bg-white/50 px-5 py-3 backdrop-blur-md">
                            {[
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
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
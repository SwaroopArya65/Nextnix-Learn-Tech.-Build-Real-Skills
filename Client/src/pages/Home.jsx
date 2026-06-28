import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MonitorPlay, FolderKanban, Clock3, Clock, GraduationCap, Building2 } from "lucide-react";
import {
    Rocket,
    Map,
    Quote,
    Star,
} from "lucide-react";
import {
    ArrowRight,
    Play,
    Code2,
    Globe,
    Monitor,
    BookOpen,
    Users,
    Laptop,
    PlayCircle,
    Briefcase,
} from "lucide-react";

function Home() {
    const YOUTUBE_URL = "https://www.youtube.com/@Nextnixtech";
    const YOUTUBE_PLALIST_URL = "https://www.youtube.com/@Nextnixtech/videos"

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

    const handleVideo = () => {
        const toastId = toast.loading(
            "Opening YouTube Channel..."
        );

        setTimeout(() => {
            toast.dismiss(toastId);

            toast.success("Redirected successfully!");

            window.open(
                "https://www.youtube.com/@Nextnixtech/videos",
                "_blank",
                "noopener,noreferrer"
            );
        }, 2000);
    };

    const navigate = useNavigate();

    const handleExplore = (path) => {
        navigate(path);
    };

    const handlePlaylistOpen = (title, url) => {
        toast.success(`Opening "${title}" playlist...`);

        setTimeout(() => {
            window.open(url, "_blank", "noopener,noreferrer");
        }, 1200);
    };

    const announcements = [
        {
            title: "🎓 Live Classes",
            path: "/services/live-classes",
        },
        {
            title: "💻 MERN Stack",
            path: "/learn/mern-stack",
        },
        {
            title: "🌐 CCNA",
            path: "/learn/ccna",
        },
        {
            title: "🖥️ Windows Admin",
            path: "/learn/windows-admin",
        },
        {
            title: "🏆 Career Guidance",
            path: "/services/career-guidance",
        },
    ];

    const features = [
        {
            icon: Laptop,
            title: "Practical Learning",
            description:
                "No theory overload — every concept is taught through real projects you can show in your portfolio.",
        },
        {
            icon: Rocket,
            title: "Industry Relevant",
            description:
                "We teach only what the industry actually uses — no outdated tools, no wasted time.",
        },
        {
            icon: Users,
            title: "Community Support",
            description:
                "You're never learning alone — get help, share progress, and grow with fellow beginners.",
        },
        {
            icon: Map,
            title: "Structured Roadmaps",
            description:
                "No confusion about what to learn next — follow a clear step-by-step path to your tech career.",
        },
    ];

    const topics = [
        {
            icon: Code2,
            title: "Coding",
            description:
                "Build websites, APIs, and full-stack applications using modern technologies.",
            level: "Beginner → Advanced",
            path: "/learn/coding",
        },
        {
            icon: Globe,
            title: "CCNA",
            description:
                "Learn networking fundamentals, routing, switching, and infrastructure management.",
            level: "Beginner → Intermediate",
            path: "/learn/ccna",
        },
        {
            icon: Monitor,
            title: "Windows Admin",
            description:
                "Manage servers, Active Directory, and enterprise Windows environments.",
            level: "Beginner → Advanced",
            path: "/learn/windows-admin",
        },
    ];

    const videos = [
        {
            title: "React Roadmap for Beginners",
            duration: "18 min",
            playlistUrl:
                "https://www.youtube.com/playlist?list=PLgR80RvbSd3Kvu4RaAwcShZvXOiFxyEZw",
        },
        {
            title: "Build a MERN Project from Scratch",
            duration: "42 min",
            playlistUrl:
                "https://www.youtube.com/playlist?list=PLgR80RvbSd3K8gSFTTBxiifPX5sGtki03",
        },
        {
            title: "CCNA Networking Fundamentals",
            duration: "25 min",
            playlistUrl:
                "https://youtube.com/playlist?list=CCNA_PLAYLIST_ID",
        },
    ];

    const services = [
        {
            icon: MonitorPlay,
            title: "Live Classes",
            status: "Available",
        },
        {
            icon: GraduationCap,
            title: "College Workshops",
            status: "Join Waitlist",
        },
        {
            icon: Building2,
            title: "Corporate Training",
            status: "Join Waitlist",
        },
    ];

    return (
        <>
            {/* SEO */}
            <Helmet>
                <title>
                    Nextnix | Learn Tech. Build Real Skills.
                </title>

                <meta
                    name="description"
                    content="Learn Coding, CCNA, Windows Administration, and real-world tech skills with Nextnix."
                />

                <meta
                    property="og:title"
                    content="Nextnix | Learn Tech. Build Real Skills."
                />

                <meta
                    property="og:description"
                    content="Begin your tech journey with Coding, Networking, and System Administration courses."
                />

                <meta
                    property="og:image"
                    content="/logo.png"
                />

                {/* Basic Security */}
                <meta
                    httpEquiv="Referrer-Policy"
                    content="strict-origin-when-cross-origin"
                />

                <meta
                    httpEquiv="Permissions-Policy"
                    content="camera=(), microphone=(), geolocation=()"
                />
            </Helmet>

            <div className="nn-bg-light-grid overflow-hidden">
                {/* ================================= */}
                {/* Hero Section */}
                {/* ================================= */}

                <section className="nn-bg-dark-grid flex min-h-screen items-center py-20 sm:py-24 md:py-28 lg:py-32">
                    <div className="mx-auto max-w-5xl px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-3 rounded-full border border-[#5EE587]/30 bg-white/70 px-5 py-2 mb-5 shadow-lg backdrop-blur-md"
                        >
                            <span className="flex items-center rounded-full bg-[#5EE587]/20 px-3 py-1 text-xs font-semibold text-[#051D67]">
                                🚀 NEW
                            </span>

                            {/* Scrolling Buttons */}
                            <div className="w-96 overflow-hidden">
                                <div className="animate-marquee flex w-max gap-3">
                                    {[...announcements, ...announcements].map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.path}
                                            className="animate-text-glow shrink-0 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5EE587] hover:bg-[#5EE587]/10 hover:text-[#051D67]"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <ArrowRight
                                size={16}
                                className="text-[#051D67]"
                            />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto max-w-5xl text-6xl font-extrabold font-space-grotesk tracking-wide leading-[0.95] md:text-8xl text-[#051D67]"
                        >
                            Learn Tech.
                            <br />
                            Build Real Skills.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.6,
                            }}
                            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl font-inter tracking-wide"
                        >
                            From YouTube to classroom — India's beginner-first platform for real tech skills & real direction. 
                            No experience needed. No expensive laptop needed. Just the will to learn — we'll handle the rest.
                        </motion.p>

                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                            <button
                                onClick={handleSubscribe}
                                className="flex items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-3 font-semibold font-inter tracking-wide leading-0.5 transition bg-[#5EE587] text-[#051D67] hover:bg-[#4fd678] cursor-pointer"
                            >
                                <Play size={20} />
                                Free learning on YouTube
                            </button>

                            <button
                                onClick={handleSubscribe}
                                className="flex items-center justify-center gap-2 rounded-md px-4 py-3 font-semibold font-inter tracking-wide leading-0.5 transition hover:bg-[#5EE587]/10 hover:border-[#5EE587] border border-[#051D67] bg-white text-[#051D67] cursor-pointer"
                            >
                                <Briefcase size={20} />
                                Explore Services
                            </button>
                        </div>

                        {/* Feature Tags */}
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-pulse">
                            <span className="rounded-full border border-green-200 bg-white/70 px-4 py-2 text-sm font-medium text-gray-700 backdrop-blur-sm">
                                🚀 Project-Based Learning
                            </span>

                            <span className="rounded-full border border-green-200 bg-white/70 px-4 py-2 text-sm font-medium text-gray-700 backdrop-blur-sm">
                                🎯 Beginner Friendly
                            </span>

                            <span className="rounded-full border border-green-200 bg-white/70 px-4 py-2 text-sm font-medium text-gray-700 backdrop-blur-sm">
                                💼 Career Focused
                            </span>
                        </div>
                    </div>
                </section>

                {/* ================================= */}
                {/* Trust Bar */}
                {/* ================================= */}

                <section className="-mt-10 relative z-10 w-full px-6 lg:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="
                        w-full
                        bg-[#5EE587]/8
                        backdrop-blur-2xl
                        shadow-[0_8px_40px_rgba(94,229,135,0.10)]
                        "
                    >
                        <div className="grid gap-8 p-8 sm:grid-cols-2 lg:grid-cols-4">
                            {/* Card 1 */}
                            <div className="border-r border-[#5EE587]/15 group flex items-center gap-5 p-4 transition-all duration-300 hover:bg-white/20">
                                <div className="rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67] backdrop-blur-md">
                                    <PlayCircle size={32} />
                                </div>

                                <div>
                                    <h3 className="animate-pulse font-inter tracking-wide text-lg font-semibold text-[#051D67]">
                                        Free Tutorials
                                    </h3>

                                    <p className="font-inter tracking-wide text-slate-600">
                                        Learn from YouTube.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="border-r-2 border-[#5EE587]/15 group flex items-center gap-5 p-4 transition-all duration-300 hover:bg-white/20">
                                <div className="rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67] backdrop-blur-md">
                                    <MonitorPlay size={32} />
                                </div>

                                <div>
                                    <h3 className="animate-pulse font-inter tracking-wide text-lg font-semibold text-[#051D67]">
                                        Free Live Sessions
                                    </h3>

                                    <p className="font-inter tracking-wide text-slate-600">
                                        Learn interactively.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="border-r-2 border-[#5EE587]/15 group flex items-center gap-5 p-4 transition-all duration-300 hover:bg-white/20">
                                <div className="rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67] backdrop-blur-md">
                                    <FolderKanban size={32} />
                                </div>

                                <div>
                                    <h3 className="animate-pulse font-inter tracking-wide text-lg font-semibold text-[#051D67]">
                                        Practical Projects
                                    </h3>

                                    <p className="font-inter tracking-wide text-slate-600">
                                        Build while learning.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className=" group flex items-center gap-5 p-4 transition-all duration-300 hover:bg-white/20">
                                <div className="rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67] backdrop-blur-md">
                                    <Clock3 size={32} />
                                </div>

                                <div>
                                    <h3 className="animate-pulse font-inter tracking-wide text-lg font-semibold text-[#051D67]">
                                        Self-Paced
                                    </h3>

                                    <p className="font-inter tracking-wide text-slate-600">
                                        Learn anytime.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* ================================= */}
                {/* Why Nextnix */}
                {/* ================================= */}

                <section className="relative overflow-hidden py-24">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(94,229,135,0.12),transparent_70%)]" />

                    <div className="relative mx-auto max-w-7xl px-6">
                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <span className="inline-flex rounded-full border border-[#5EE587]/30 bg-white/10 px-4 py-2 text-sm font-medium text-[#051D67] font-inter tracking-wider backdrop-blur-md">
                                What Makes Nextnix Different?
                            </span>

                            <h2 className="mt-6 text-4xl font-semibold text-[#051D67] md:text-5xl lg:text-6xl font-space-grotesk tracking-wide ">
                                Learn Smarter.
                                <br />
                                Build Real Skills.
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-lg font-inter tracking-wide leading-8 text-slate-600">
                                Nextnix helps beginners master technology through practical
                                projects, structured roadmaps, and industry-focused learning.
                            </p>
                        </motion.div>

                        {/* Feature Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                        >
                            {features.map((feature, index) => {
                                const Icon = feature.icon;

                                return (
                                    <div
                                        key={index}
                                        className="
                                        group
                                        rounded-4xl
                                        border border-[#5EE587]/20
                                        bg-white/10
                                        p-8
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover:-translate-y-2
                                        hover:border-[#5EE587]/40
                                        hover:bg-white/20
                                        hover:shadow-[0_10px_40px_rgba(94,229,135,0.15)]
                                        "
                                    >
                                        {/* Icon */}
                                        <div className="mb-6 inline-flex rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67] transition-transform duration-300 group-hover:scale-110">
                                            <Icon size={32} />
                                        </div>

                                        {/* Title */}
                                        <h3 className=" font-inter tracking-wide text-xl font-semibold text-[#051D67]">
                                            {feature.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-4 leading-7 font-inter tracking-wide  text-slate-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* ================================= */}
                {/* Topics */}
                {/* ================================= */}

                <section className="relative overflow-hidden py-20">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(94,229,135,0.10),transparent_70%)]" />

                    <div className="relative mx-auto max-w-7xl px-6">
                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <span className="inline-flex rounded-full border border-[#5EE587]/30 bg-white/10 px-4 py-2 text-sm font-medium font-inter tracking-wide text-[#051D67] backdrop-blur-md">
                                Explore Topics
                            </span>

                            <h2 className="mt-6 text-4xl font-semibold text-[#051D67] md:text-5xl font-space-grotesk tracking-wider">
                                Learn Technologies That
                                <br />
                                Power Modern Careers
                            </h2>

                            <p className="mx-auto mt-6 max-w-xl text-lg font-inter tracking-wide leading-8 text-slate-600">
                                Explore beginner-friendly learning paths designed to help you
                                develop practical skills and build real-world projects.
                            </p>
                        </motion.div>

                        {/* Topic Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
                        >
                            {topics.map((topic, index) => {
                                const Icon = topic.icon;

                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -8 }}
                                        className="
                                        group
                                        rounded-4xl
                                        border border-[#5EE587]/20
                                         bg-white/10
                                        p-8
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                         hover:border-[#5EE587]/40
                                         hover:bg-white/20
                                        hover:shadow-[0_15px_40px_rgba(94,229,135,0.15)]
                                        "
                                    >
                                        {/* Icon */}
                                        <div className="inline-flex rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67] transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                                            <Icon size={36} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="mt-8 text-2xl font-inter tracking-wide font-semibold text-[#051D67]">
                                            {topic.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-4 leading-7 font-inter tracking-wide text-slate-600">
                                            {topic.description}
                                        </p>

                                        {/* Footer */}
                                        <div className="mt-8 flex items-center justify-between">
                                            <span className="rounded-full border border-[#5EE587]/30 bg-[#5EE587]/10 px-3 py-1 text-xs font-medium font-inter tracking-wide text-[#051D67]">
                                                {topic.level}
                                            </span>

                                            <button
                                                onClick={() => handleExplore(topic.path)}
                                                className="
                                                flex items-center gap-2
                                                font-semibold font-inter tracking-wide
                                                text-[#051D67]
                                                transition-all duration-300
                                                group-hover:gap-3
                                                cursor-pointer
                                            "
                                            >
                                                Explore
                                                <ArrowRight size={18} />
                                            </button>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* ================================= */}
                {/* Latest Videos */}
                {/* ================================= */}

                <section className="relative py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        {/* Heading */}
                        <div className="text-center">
                            <span className="rounded-full border border-[#5EE587]/30 bg-white/10 px-4 py-2 text-sm font-medium font-inter tracking-wide text-[#051D67] backdrop-blur-md">
                                Latest Videos
                            </span>

                            <h2 className="mt-6 text-4xl font-semibold font-space-grotesk tracking-wide text-[#051D67] md:text-5xl">
                                Learn Through
                                <br />
                                Practical Tutorials
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-lg font-space-grotesk tracking-wide text-slate-600">
                                Watch step-by-step tutorials and build projects with us.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                            {videos.map((video, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -8 }}
                                    className="overflow-hidden rounded-4xl border border-[#5EE587]/20 bg-white/10 backdrop-blur-xl"
                                >
                                    <div className="flex h-56 items-center justify-center bg-[#051D67]/90">
                                        <Play size={60} className="text-white" />
                                    </div>

                                    <div className="p-8">
                                        <h3
                                            onClick={() =>
                                                handlePlaylistOpen(
                                                    video.title,
                                                    video.playlistUrl
                                                )
                                            }
                                            className="
                                            text-xl
                                            font-semibold
                                            font-inter
                                            tracking-wide
                                            text-[#051D67]
                                            cursor-pointer
                                            transition-all
                                            duration-300
                                            hover:text-[#5EE587]
                                            "
                                        >
                                            {video.title}
                                        </h3>

                                        <Play
                                            size={20}
                                            className="
                                            text-[#5EE587]
                                            transition-transform
                                            duration-300
                                            group-hover:scale-110
                                            "
                                        />

                                        <div className="mt-4 flex items-center font-inter tracking-wide gap-2 text-slate-600">
                                            <Clock size={18} />
                                            {video.duration}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-14 text-center">
                            <button className="inline-flex items-center gap-2 rounded-xl bg-[#051D67] px-6 py-4 font-semibold font-inter tracking-wide text-white transition hover:scale-105 cursor-pointer" onClick={handleVideo}>
                                View All Videos
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* ================================= */}
                {/* Services */}
                {/* ================================= */}

                <section className="relative py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center">
                            <span className="rounded-full border border-[#5EE587]/30 bg-white/10 px-4 py-2 text-sm font-medium font-inter tracking-wide text-[#051D67] backdrop-blur-md">
                                Services
                            </span>

                            <h2 className="mt-6 text-4xl font-semibold font-space-grotesk tracking-wide text-[#051D67] md:text-5xl">
                                Learn Today.
                                <br />
                                Grow Tomorrow.
                            </h2>
                        </div>

                        <div className="mt-20 grid gap-8 md:grid-cols-3">
                            {services.map((service, index) => {
                                const Icon = service.icon;

                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -8 }}
                                        className="rounded-4xl border border-[#5EE587]/20 bg-white/10 p-10 backdrop-blur-xl"
                                    >
                                        <div className="inline-flex rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67]">
                                            <Icon size={34} />
                                        </div>

                                        <h3 className="mt-8 text-2xl font-semibold font-inter tracking-wide text-[#051D67]">
                                            {service.title}
                                        </h3>

                                        <span className="mt-6 inline-block rounded-full font-inter tracking-wide bg-[#5EE587]/15 px-4 py-2 text-sm font-medium text-[#051D67]">
                                            {service.status}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ================================= */}
                {/* Mission Quote */}
                {/* ================================= */}

                <section className="relative py-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="
                            rounded-[40px]
                            border border-[#5EE587]/20
                            bg-white/10
                            p-12
                            text-center
                            backdrop-blur-xl
                            "
                        >
                            <div className="mb-8 inline-flex rounded-full bg-[#5EE587]/15 p-5 text-[#051D67]">
                                <Quote size={36} />
                            </div>

                            <blockquote className="mx-auto max-w-3xl text-2xl font-medium font-space-grotesk tracking-wide leading-relaxed text-[#051D67] md:text-3xl">
                                I started Nextnix because I was once the confused beginner
                                who didn't know where to start.
                                <br />
                                <br />
                                My mission is simple:
                                <br />
                                <span className="font-bold font-inter tracking-wide">
                                    Learn Tech. Build Real Skills.
                                </span>
                            </blockquote>

                            <div className="mt-12">
                                <p className="text-xl font-semibold font-space-grotesk tracking-wide text-[#051D67]">
                                    Arya Swaroop
                                </p>

                                <p className="mt-2 text-slate-600">
                                    Founder, Nextnix
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ================================= */}
                {/* Final CTA */}
                {/* ================================= */}

                <section className="relative overflow-hidden py-24">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(94,229,135,0.12),transparent_70%)]" />

                    <div className="relative mx-auto max-w-7xl px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="
                                    relative
                                    overflow-hidden
                                    rounded-[40px]
                                    border border-[#5EE587]/20
                                  bg-[#051D67]/90
                                    p-8
                                    text-center
                                    backdrop-blur-2xl
                                    shadow-[0_20px_60px_rgba(5,29,103,0.35)]
                                    md:p-16
                                    "
                        >
                            {/* Internal Green Glow */}
                            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#5EE587]/10 blur-[120px]" />
                            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#5EE587]/10 blur-[120px]" />

                            <div className="relative">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 rounded-full border border-[#5EE587]/30 bg-[#5EE587]/10 px-4 py-2 text-sm font-medium font-inter tracking-wide text-[#5EE587] backdrop-blur-md">
                                    <Rocket size={16} />
                                    Join Our Growing Community || Next Generation of Tech Learners
                                </div>

                                {/* Heading */}
                                <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-bold font-space-grotesk tracking-wide text-white md:text-5xl lg:text-6xl">
                                    Ready to Start Your
                                    <span className="mt-2 block text-[#5EE587]">
                                        Tech Journey?
                                    </span>
                                </h2>

                                {/* Description */}
                                <p className="mx-auto mt-6 max-w-2xl font-inter tracking-wide text-lg leading-8 text-slate-300">
                                    No confusion. No information overload.
                                    Learn step by step, build real-world projects,
                                    and grow your tech career with confidence.
                                </p>

                                {/* Buttons */}
                                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                    <button
                                        onClick={handleSubscribe}
                                        className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-md
                                        bg-[#5EE587]
                                        px-8
                                        py-4
                                        font-semibold
                                        text-[#051D67]
                                        transition-all
                                        duration-300
                                        hover:scale-105
                                        font-inter
                                        tracking-wide
                                        cursor-pointer
                                        hover:shadow-[0_12px_40px_rgba(94,229,135,0.45)]
                                        "
                                    >
                                        Subscribe on YouTube
                                        <ArrowRight size={20} />
                                    </button>

                                    <button
                                        onClick={handleSubscribe}
                                        className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-md
                                        border border-white/20
                                      bg-white/10
                                        px-8
                                        py-4
                                        font-semibold
                                      text-white
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                      hover:bg-white/20
                                        font-inter
                                        tracking-wide
                                        cursor-pointer
                                        hover:scale-105
                                        "
                                    >
                                        <Play size={18} />
                                        Join Telegram
                                    </button>
                                </div>

                                {/* Trust Indicators */}
                                <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
                                    <div className="flex items-center gap-2 tracking-wider font-inter">
                                        <Star size={16} className="text-[#5EE587]" />
                                        <span>17 + Learners already watching on YouTube</span>
                                    </div>

                                    <div className="flex items-center gap-2 tracking-wider font-inter">
                                        <Rocket size={16} className="text-[#5EE587]" />
                                        <span>Join Telegram Community to get Help</span>
                                    </div>

                                    {/* <div className="flex items-center gap-2 tracking-wider font-inter">
                                        <Briefcase
                                            size={16}
                                            className="text-[#5EE587]"
                                        />
                                        <span>Career Focused</span>
                                    </div> */}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;
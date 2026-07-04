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
import SEO from "../components/common/SEO";
// import ComingSoonModal from "../common/ComingSoonModal";

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
            path: "/services#service-cards",
        },
        {
            title: "💻 MERN Stack",
            path: "/learn#featured-paths",
        },
        {
            title: "🌐 CCNA",
            path: "/learn#featured-paths",
        },
        {
            title: "🖥️ Windows Admin",
            path: "/learn#featured-paths",
        },
        {
            title: "🏆 Career Guidance",
            path: "/services#service-cards",
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
            title: "Learn Coding",
            description:
                "Learn modern programming through step-by-step tutorials and hands-on practice.",
            level: "Beginner → Advanced",
            path: "/learn#latest-tutorials",
        },
        {
            icon: Globe,
            title: "Career Guidance",
            description:
                "Navigate your tech journey with expert guidance, placement tips, and career roadmaps.",
            level: "Beginner → Intermediate",
            path: "/learn#learning-journey",
        },
        {
            icon: Monitor,
            title: "Real Projects",
            description:
                "Turn knowledge into experience by building practical, industry-inspired applications.",
            level: "Beginner → Advanced",
            path: "/learn#latest-tutorials",
        },
    ];

    const videos = [
        {
            title: "Learn Coding From Zero",
            videos: "40+ Videos",
            description: "Master programming fundamentals and build modern web applications with beginner-friendly tutorials.",
            playlistUrl:
                "https://www.youtube.com/playlist?list=PLgR80RvbSd3Kvu4RaAwcShZvXOiFxyEZw",
        },
        {
            title: "Career Guidance & Placements",
            videos: "20+ Videos",
            description: "Learn career planning, placement preparation, interview tips, and choose the right path in tech.",
            playlistUrl:
                "https://www.youtube.com/playlist?list=PLgR80RvbSd3K8gSFTTBxiifPX5sGtki03",
        },
        {
            title: "Real Project Explanations",
            videos: "15+ Videos",
            description: "Build real-world projects from scratch and understand how professional applications are developed.",
            playlistUrl:
                "https://youtube.com/playlist?list=CCNA_PLAYLIST_ID",
        },
    ];

    const services = [
        {
            icon: MonitorPlay,
            title: "Live Classes",
            description:
                "Learn directly from experienced instructors through live, interactive online sessions.",
            features: [
                "Live Q&A Sessions",
                "Project-Based Learning",
                "Community Support",
            ],
            status: "Enroll Now",
            buttonText: "Join Live Batch",
            path: "/services/live-classes",
        },
        {
            icon: GraduationCap,
            title: "College Workshops",
            description:
                "Practical workshops conducted in colleges to bridge the gap between academics and industry.",
            features: [
                "Hands-on Sessions",
                "Industry Experts",
                "Certification",
            ],
            status: "Join Waitlist",
            buttonText: "Request Workshop",
            path: "/services/college-workshops",
        },
        {
            icon: Building2,
            title: "Corporate Training",
            description:
                "Upskill teams with customized training programs tailored to industry requirements.",
            features: [
                "Customized Curriculum",
                "Team Training",
                "Professional Certification",
            ],
            status: "Join Watilist",
            buttonText: "Contact Us",
            path: "/services/corporate-training",
        },
    ];

    return (
        <>
            {/* SEO */}
            <SEO
                title="Nextnix | Learn Tech. Build Real Skills."
                description="Learn Coding, CCNA, Windows Administration, Career Guidance and real-world tech skills with Nextnix."
                keywords="Nextnix, Coding, CCNA, Career Guidance, Web Development"
                url="https://nextnix.netlify.app/"
                image="https://nextnix.netlify.app/logo.svg"
            />

            <div className="nn-bg-light-grid overflow-hidden">
                {/* ================================= */}
                {/* Hero Section */}
                {/* ================================= */}

                <section className="nn-bg-dark-grid flex min-h-screen items-center py-16 sm:py-20 md:py-24 lg:py-28">
                    <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-5 flex w-full max-w-full items-center gap-2 overflow-hidden rounded-full border border-[#5EE587]/30 bg-white/70 px-2 py-2 shadow-lg backdrop-blur-md sm:mx-auto sm:inline-flex sm:w-auto sm:max-w-3xl sm:px-5"
                        >
                            <span className="shrink-0 rounded-full bg-[#5EE587]/20 px-3 py-1 text-[11px] font-semibold text-[#051D67] sm:text-xs">
                                🚀 NEW
                            </span>

                            {/* Scrolling Buttons */}
                            <div className="min-w-0 flex-1 overflow-hidden">
                                <div className="animate-marquee flex whitespace-nowrap gap-2 sm:gap-3">
                                    {[...announcements, ...announcements].map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.path}
                                            className="animate-text-glow shrink-0 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5EE587] hover:bg-[#5EE587]/10 hover:text-[#051D67] sm:px-4 sm:text-sm"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <ArrowRight
                                size={16}
                                className="hidden shrink-0 text-[#051D67] sm:block"
                            />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto max-w-5xl font-space-grotesk text-4xl font-extrabold leading-none tracking-wide text-[#051D67] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
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
                            className="mx-auto mt-6 max-w-3xl px-2 text-base leading-7 text-slate-600 font-inter tracking-normal sm:text-lg md:mt-8 md:text-xl md:leading-8"
                        >
                            From YouTube to classroom — India's beginner-first platform for real tech skills & real direction.
                            No experience needed. No expensive laptop needed. Just the will to learn — we'll handle the rest.
                        </motion.p>

                        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
                            <button
                                onClick={handleSubscribe}
                                className="cursor-pointer flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-[#5EE587] px-6 py-3 font-semibold font-inter tracking-wide text-[#051D67] transition hover:bg-[#4fd678] sm:w-auto"
                            >
                                <Play size={20} />
                                Free learning on YouTube
                            </button>

                            <button
                                onClick={handleSubscribe}
                                className="cursor-pointer flex w-full items-center justify-center gap-2 rounded-md border border-[#051D67] bg-white px-6 py-3 font-semibold font-inter tracking-wide text-[#051D67] transition hover:border-[#5EE587] hover:bg-[#5EE587]/10 sm:w-auto"
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
                                Choose Your
                                <br />
                                Learning Journey
                            </h2>

                            <p className="mx-auto mt-6 max-w-xl text-lg font-inter tracking-wide leading-8 text-slate-600">
                                Everything you need to learn, build, and grow your career in technology, all in one place.
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
                {/* Latest Playlists */}
                {/* ================================= */}

                <section className="relative py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        {/* Heading */}
                        <div className="text-center">
                            <span className="rounded-full border border-[#5EE587]/30 bg-white/10 px-4 py-2 text-sm font-medium font-inter tracking-wide text-[#051D67] backdrop-blur-md">
                                Latest Playlists
                            </span>

                            <h2 className="mt-6 text-4xl font-semibold font-space-grotesk tracking-wide text-[#051D67] md:text-5xl">
                                Start Learning with
                                <br />
                                Our Most Popular Playlists
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-lg font-space-grotesk tracking-wide text-slate-600">
                                Explore step-by-step playlists designed to help beginners learn practical skills, build real projects, and grow their careers.
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

                                        <p className="mx-auto mt-6 max-w-xl text-lg font-inter tracking-wide leading-8 text-slate-600">
                                            {video.description}
                                        </p>

                                        <div className="mt-4 flex items-center font-inter tracking-wide gap-2 text-slate-600">
                                            <Clock size={18} />
                                            {video.videos}
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
                                Our Services
                            </span>

                            <h2 className="mt-6 text-4xl font-semibold font-space-grotesk tracking-wide text-[#051D67] md:text-5xl">
                                Helping You
                                <br />
                                Learn Beyond YouTube.
                            </h2>
                            <p className="mx-auto mt-6 max-w-2xl text-lg font-space-grotesk tracking-wide text-slate-600">
                                Whether you're an individual learner, a college, or an organization, Nextnix offers practical learning experiences designed to build real-world skills.
                            </p>
                        </div>

                        <div className="mt-20 grid gap-8 md:grid-cols-3">
                            {services.map((service, index) => {
                                const Icon = service.icon;

                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -8 }}
                                        className="flex flex-col rounded-4xl border border-[#5EE587]/20 bg-white/10 p-10 backdrop-blur-xl transition-all duration-300"
                                    >
                                        {/* Icon */}
                                        <div className="inline-flex w-fit rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67]">
                                            <Icon size={34} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="mt-8 text-2xl font-semibold font-inter tracking-wide text-[#051D67]">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-4 leading-7 font-inter tracking-wide text-slate-600">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="mt-6 space-y-3">
                                            {service.features.map((feature, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-3 text-sm font-inter text-slate-700"
                                                >
                                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5EE587]/20 text-[#051D67]">
                                                        ✓
                                                    </span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Footer */}
                                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                            <span className="inline-flex w-fit items-center justify-center rounded-full bg-[#5EE587]/15 px-4 py-2 text-sm font-medium font-inter text-[#051D67]">
                                                {service.status}
                                            </span>

                                            <button
                                                onClick={() => navigate(service.path)}
                                                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#051D67] px-5 py-3 font-semibold font-inter text-[#051D67] transition-all duration-300 hover:bg-[#051D67] hover:text-white sm:w-auto cursor-pointer"
                                            >
                                                Learn More
                                                <ArrowRight size={18} />
                                            </button>

                                        </div>
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
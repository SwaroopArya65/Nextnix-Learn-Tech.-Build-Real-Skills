import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Play,
    Users,
    BookOpen,
    Rocket,
} from "lucide-react";

const stats = [
    {
        icon: Users,
        value: "17+",
        label: "Learners on YouTube",
    },
    {
        icon: BookOpen,
        value: "5+",
        label: "Learning Playlists",
    },
    {
        icon: Rocket,
        value: "100%",
        label: "Practical Learning",
    },
];

export default function AboutHero() {
    return (
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-[#5EE587]/30 bg-white/70 px-5 py-2 shadow-lg backdrop-blur-md"
                >
                    <span className="rounded-full bg-[#5EE587]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#051D67]">
                        ✨ About Nextnix
                    </span>

                    <ArrowRight
                        size={16}
                        className="text-[#051D67]"
                    />
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-5xl text-center font-space-grotesk text-4xl font-extrabold leading-tight tracking-tight text-[#051D67] sm:text-5xl md:text-6xl lg:text-7xl"
                >
                    Built for Beginners.
                    <br />
                    Designed for Real Careers.
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.25,
                        duration: 0.6,
                    }}
                    className="mx-auto mt-8 max-w-3xl text-center font-inter text-base leading-8 tracking-wide text-slate-600 sm:text-lg"
                >
                    Nextnix is a beginner-first tech learning platform
                    helping students learn practical skills through
                    YouTube, hands-on projects, live classes, and
                    community support. Our mission is to make technology
                    education simple, accessible, and career-focused.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.5,
                    }}
                    className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row"
                >
                    <Link
                        to="/learn"
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#5EE587] px-7 py-4 font-inter font-semibold tracking-wide text-[#051D67] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4fd678] sm:w-auto"
                    >
                        <Play size={20} />
                        Explore Learning
                    </Link>

                    <Link
                        to="/community"
                        className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#051D67] bg-white px-7 py-4 font-inter font-semibold tracking-wide text-[#051D67] transition-all duration-300 hover:border-[#5EE587] hover:bg-[#5EE587]/10 sm:w-auto"
                    >
                        <Users size={20} />
                        Join Community
                    </Link>
                </motion.div>

                {/* Trust Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.2,
                        duration: 0.6,
                    }}
                    className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3"
                >
                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                whileHover={{
                                    y: -5,
                                }}
                                className="rounded-3xl border border-[#5EE587]/20 bg-white/10 p-6 backdrop-blur-xl"
                            >
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5EE587]/15 text-[#051D67]">
                                    <Icon size={28} />
                                </div>

                                <h3 className="mt-5 text-center font-space-grotesk text-3xl font-bold text-[#051D67]">
                                    {item.value}
                                </h3>

                                <p className="mt-2 text-center font-inter text-sm leading-6 tracking-wide text-slate-600">
                                    {item.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}
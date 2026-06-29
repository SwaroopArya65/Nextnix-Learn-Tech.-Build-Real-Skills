import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, PlayCircle, ArrowRight } from "lucide-react";

export default function LearnHero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="mx-auto max-w-4xl text-center">

                    {/* Badge */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 rounded-full border border-[#5EE587]/30 bg-white/60 px-5 py-2 backdrop-blur-xl"
                    >
                        <BookOpen
                            size={18}
                            className="text-[#051D67]"
                        />

                        <span className="font-medium text-[#051D67]">
                            Learning Hub
                        </span>
                    </motion.div>

                    {/* Heading */}

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-8 font-space-grotesk text-5xl font-bold leading-tight text-[#051D67] sm:text-6xl lg:text-7xl"
                    >
                        Learn Skills.
                        <br />
                        Build Confidence.
                        <br />
                        Launch Your Career.
                    </motion.h1>

                    {/* Description */}

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-8 max-w-3xl text-lg leading-8 tracking-wide text-slate-600 md:text-xl"
                    >
                        Discover beginner-friendly roadmaps, practical tutorials,
                        hands-on projects, and career guidance designed to help
                        you become job-ready with confidence.
                    </motion.p>

                    {/* Buttons */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Link
                            to="/services"
                            className="group inline-flex items-center gap-2 rounded-xl bg-[#5EE587] px-7 py-4 font-semibold text-[#051D67] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4fd678]"
                        >
                            <BookOpen size={20} />

                            Start Learning

                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>

                        <a
                            href="https://youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-xl border border-[#051D67] bg-white px-7 py-4 font-semibold text-[#051D67] transition-all duration-300 hover:border-[#5EE587] hover:bg-[#5EE587]/10"
                        >
                            <PlayCircle size={20} />

                            Browse Playlists
                        </a>
                    </motion.div>

                    {/* Quick Stats */}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
                    >
                        {[
                            {
                                number: "50+",
                                label: "Tutorials",
                            },
                            {
                                number: "10+",
                                label: "Learning Paths",
                            },
                            {
                                number: "100%",
                                label: "Beginner Friendly",
                            },
                            {
                                number: "Free",
                                label: "YouTube Content",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-[#5EE587]/20 bg-white/60 p-5 backdrop-blur-xl"
                            >
                                <h3 className="font-space-grotesk text-3xl font-bold text-[#051D67]">
                                    {item.number}
                                </h3>

                                <p className="mt-2 text-sm tracking-wide text-slate-600">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
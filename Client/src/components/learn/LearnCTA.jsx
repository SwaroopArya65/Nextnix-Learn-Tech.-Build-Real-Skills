import { motion } from "framer-motion";
import {
    Play,
    Users,
    MessageCircle,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function LearnCTA() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                        className="overflow-hidden rounded-[40px] border border-[#5EE587]/20 bg-linear-to-br from-[#051D67] via-[#06257F] to-[#0A2D94] p-10 shadow-2xl md:p-16"
                >
                    {/* Badge */}

                    <div className="flex justify-center">

                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-[#5EE587] backdrop-blur-xl">

                            <Sparkles size={16} />

                            Start Your Learning Journey Today

                        </span>

                    </div>

                    {/* Heading */}

                    <h2 className="mx-auto mt-8 max-w-4xl text-center font-space-grotesk text-4xl font-bold leading-tight text-white md:text-6xl">
                        Don't Just Watch Tutorials.
                        <br />
                        Build a Career with Nextnix.
                    </h2>

                    {/* Description */}

                    <p className="mx-auto mt-8 max-w-3xl text-center font-inter text-lg leading-8 text-white/80">
                        Thousands of learners start with curiosity but succeed
                        through consistency. Begin your journey today with
                        structured roadmaps, practical projects, and a supportive
                        learning community.
                    </p>

                    {/* Buttons */}

                    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

                        <a
                            href="https://Play.com/@YOURCHANNEL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-xl bg-[#5EE587] px-8 py-4 font-semibold text-[#051D67] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                        >
                            <Play size={22} />

                            Start Learning

                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />

                        </a>

                        <a
                            href="https://t.me/YOURCOMMUNITY"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
                        >
                            <Users size={20} />

                            Join Community

                        </a>

                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
                        >
                            <MessageCircle size={20} />

                            Contact Us

                        </Link>

                    </div>

                    {/* Features */}

                    <div className="mt-16 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">

                        {[
                            "100% Beginner Friendly",
                            "Project-Based Learning",
                            "Career-Focused Guidance",
                            "Learn at Your Own Pace",
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="text-center"
                            >

                                <div className="mx-auto h-2 w-2 rounded-full bg-[#5EE587]" />

                                <p className="mt-4 font-medium text-white/90">
                                    {item}
                                </p>

                            </div>

                        ))}

                    </div>

                </motion.div>

            </div>
        </section>
    );
}
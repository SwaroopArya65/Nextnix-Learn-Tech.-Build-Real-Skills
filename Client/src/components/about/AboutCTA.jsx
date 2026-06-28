import { motion } from "framer-motion";
import { Play, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
    "Free Learning Resources",
    "Hands-on Projects",
    "Career Guidance",
];

export default function AboutCTA() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[40px] border border-[#5EE587]/20 bg-white/10 p-8 backdrop-blur-xl sm:p-12 lg:p-16"
                >

                    {/* Background Glow */}

                    <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#5EE587]/10 blur-3xl"></div>

                    <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#051D67]/5 blur-3xl"></div>

                    <div className="relative z-10 text-center">

                        <span className="rounded-full border border-[#5EE587]/30 bg-white/60 px-5 py-2 text-sm font-medium text-[#051D67] backdrop-blur-xl">
                            Your Journey Starts Today
                        </span>

                        <h2 className="mt-8 font-space-grotesk text-4xl font-bold text-[#051D67] sm:text-5xl">
                            Ready to Build Your
                            <br />
                            Tech Career?
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl font-inter text-lg leading-8 text-slate-600">
                            Every expert was once a beginner.
                            Join thousands of learners taking their
                            first step with Nextnix and start building
                            real skills today.
                        </p>

                        {/* Highlights */}

                        <div className="mt-10 flex flex-wrap justify-center gap-4">

                            {highlights.map((item) => (

                                <div
                                    key={item}
                                    className="rounded-full border border-[#5EE587]/20 bg-[#5EE587]/10 px-5 py-3 font-inter text-sm font-medium text-[#051D67]"
                                >
                                    ⭐ {item}
                                </div>

                            ))}

                        </div>

                        {/* Buttons */}

                        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">

                            <Link
                                to="/learn"
                                className="flex items-center justify-center gap-2 rounded-lg bg-[#5EE587] px-8 py-4 font-semibold text-[#051D67] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4fd678]"
                            >
                                <Play size={20} />

                                Start Learning

                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                to="/community"
                                className="flex items-center justify-center gap-2 rounded-lg border border-[#051D67] bg-white px-8 py-4 font-semibold text-[#051D67] transition-all duration-300 hover:border-[#5EE587] hover:bg-[#5EE587]/10"
                            >
                                <MessageCircle size={20} />

                                Join Telegram
                            </Link>

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}
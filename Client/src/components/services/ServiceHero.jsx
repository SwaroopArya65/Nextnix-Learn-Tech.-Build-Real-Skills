import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceHero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-24 sm:pt-36 sm:pb-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-5xl text-center">

                    {/* Badge */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 rounded-full border border-[#5EE587]/40 bg-white/70 px-5 py-2 backdrop-blur-xl shadow-lg"
                    >
                        <Rocket
                            size={16}
                            className="text-[#051D67]"
                        />

                        <span className="font-inter text-sm font-medium tracking-wide text-[#051D67]">
                            Our Services
                        </span>
                    </motion.div>

                    {/* Heading */}

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-8 font-space-grotesk text-4xl font-extrabold leading-tight tracking-tight text-[#051D67] sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        Helping You Learn,
                        <br />
                        Build & Grow.
                    </motion.h1>

                    {/* Sub Heading */}

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-8 max-w-3xl font-inter text-base leading-8 tracking-wide text-slate-600 sm:text-lg md:text-xl"
                    >
                        Whether you're starting your first coding journey,
                        preparing for a career, or training your team,
                        Nextnix delivers practical learning experiences
                        designed for real-world success.
                    </motion.p>

                    {/* Buttons */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Link
                            to="/contact"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#051D67] px-8 py-4 font-inter text-base font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#06257F]"
                        >
                            Explore Services

                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>

                        <Link
                            to="/contact"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#051D67] bg-white px-8 py-4 font-inter text-base font-semibold tracking-wide text-[#051D67] transition-all duration-300 hover:border-[#5EE587] hover:bg-[#5EE587]/10"
                        >
                            <Briefcase size={18} />

                            Contact Us
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
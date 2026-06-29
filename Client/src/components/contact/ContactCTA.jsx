import { motion } from "framer-motion";
import {
    ArrowRight,
    Play,
    MessageCircle,
    Sparkles,
    GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactCTA() {
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
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-[#5EE587] backdrop-blur-xl">
                        <Sparkles size={16} />
                        Let's Build Something Amazing
                    </span>

                    {/* Heading */}

                    <h2 className="mx-auto mt-8 max-w-4xl text-center font-space-grotesk text-4xl font-bold leading-tight text-white md:text-6xl">
                        Your Journey Starts
                        <br />
                        With One Conversation.
                    </h2>

                    {/* Description */}

                    <p className="mx-auto mt-8 max-w-3xl text-center font-inter text-lg leading-8 text-white/80">
                        Whether you're beginning your tech journey, planning a
                        college workshop, looking for corporate training, or
                        exploring collaboration opportunities, Nextnix is ready
                        to help you take the next step.
                    </p>

                    {/* Buttons */}

                    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

                        <Link
                            to="#contact-form"
                            className="group inline-flex items-center gap-2 rounded-xl bg-[#5EE587] px-8 py-4 font-semibold text-[#051D67] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                        >
                            <MessageCircle size={20} />

                            Send a Message

                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>

                        <a
                            href="https://youtube.com/@YOURCHANNEL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
                        >
                            <Play size={20} />

                            Watch Tutorials
                        </a>

                        <Link
                            to="/learn"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
                        >
                            <GraduationCap size={20} />

                            Start Learning
                        </Link>

                    </div>

                    {/* Highlights */}

                    <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">

                        {[
                            "Career-Focused Learning",
                            "Hands-on Projects",
                            "College & Corporate Training",
                            "Growing Tech Community",
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
import { motion } from "framer-motion";
import {
    ArrowRight,
    Play,
    Send,
    ShieldCheck,
    Users,
    FolderKanban,
    GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

const trustItems = [
    {
        icon: GraduationCap,
        title: "Beginner-First Learning",
    },
    {
        icon: FolderKanban,
        title: "Project-Based Approach",
    },
    {
        icon: Users,
        title: "Community Support",
    },
    {
        icon: ShieldCheck,
        title: "Career-Oriented Guidance",
    },
];

export default function ServiceCTA() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-[40px] border border-[#5EE587]/20 bg-linear-to-br from-[#051D67] via-[#06257F] to-[#0A2D94] p-8 shadow-2xl md:p-14"
                >
                    {/* Trust Section */}

                    <div className="text-center">

                        <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide text-[#5EE587]">
                            Trusted by Future Tech Professionals
                        </span>

                        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                            {trustItems.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                                    >
                                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5EE587]/15 text-[#5EE587]">
                                            <Icon size={28} />
                                        </div>

                                        <h3 className="mt-4 font-space-grotesk text-lg font-semibold text-white">
                                            {item.title}
                                        </h3>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* CTA */}

                    <div className="mx-auto mt-20 max-w-3xl text-center">

                        <h2 className="font-space-grotesk text-4xl font-bold leading-tight text-white md:text-5xl">
                            Ready to Start Your
                            <br />
                            Tech Journey?
                        </h2>

                        <p className="mt-6 font-inter text-lg leading-8 text-white/80">
                            Whether you're learning your first programming
                            language, preparing for placements, or looking to
                            upskill your team, Nextnix is here to help you
                            every step of the way.
                        </p>

                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-2 rounded-xl bg-[#5EE587] px-8 py-4 font-semibold text-[#051D67] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                            >
                                Get Started Today

                                <ArrowRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>

                            <a
                                href="https://Play.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
                            >
                                <Play size={20} />

                                Watch on Play
                            </a>

                            <a
                                href="https://t.me/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
                            >
                                <Send size={20} />

                                Join Community
                            </a>

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}
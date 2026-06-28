import { motion } from "framer-motion";
import {
    XCircle,
    CheckCircle2,
} from "lucide-react";

const comparisons = [
    {
        other: "Random tutorials without a roadmap",
        nextnix: "Structured learning paths from beginner to advanced",
    },
    {
        other: "Mostly theory-based learning",
        nextnix: "Hands-on projects with practical implementation",
    },
    {
        other: "Learning alone",
        nextnix: "Supportive learner community and mentorship",
    },
    {
        other: "No career direction",
        nextnix: "Career guidance and placement preparation",
    },
    {
        other: "Expensive learning resources",
        nextnix: "Free and affordable quality education",
    },
    {
        other: "Little real-world experience",
        nextnix: "Portfolio-ready projects and industry skills",
    },
];

export default function WhyDifferent() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <span className="rounded-full border border-[#5EE587]/30 bg-white/60 px-5 py-2 text-sm font-medium text-[#051D67] backdrop-blur-xl">
                        Why Nextnix?
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] sm:text-5xl">
                        More Than Tutorials.
                        <br />
                        A Complete Learning Experience.
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl font-inter text-lg leading-8 text-slate-600">
                        We don't just teach technology. We provide a complete
                        learning journey designed to help beginners gain real
                        skills, build confidence, and grow into successful
                        professionals.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 overflow-hidden rounded-[36px] border border-[#5EE587]/20 bg-white/10 backdrop-blur-xl"
                >
                    <div className="grid grid-cols-2 border-b border-[#5EE587]/20">

                        <div className="bg-red-50/40 p-6 text-center">
                            <h3 className="font-space-grotesk text-2xl font-bold text-red-500">
                                Others
                            </h3>
                        </div>

                        <div className="bg-[#5EE587]/10 p-6 text-center">
                            <h3 className="font-space-grotesk text-2xl font-bold text-[#051D67]">
                                Nextnix
                            </h3>
                        </div>

                    </div>

                    {comparisons.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-2 border-b border-[#5EE587]/10 last:border-none"
                        >
                            <div className="flex items-center gap-3 p-6">
                                <XCircle
                                    size={22}
                                    className="shrink-0 text-red-400"
                                />

                                <p className="font-inter text-slate-600">
                                    {item.other}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 bg-[#5EE587]/5 p-6">
                                <CheckCircle2
                                    size={22}
                                    className="shrink-0 text-[#5EE587]"
                                />

                                <p className="font-inter font-medium text-[#051D67]">
                                    {item.nextnix}
                                </p>
                            </div>
                        </div>
                    ))}

                </motion.div>

            </div>
        </section>
    );
}
import { motion } from "framer-motion";
import {
    BookOpenCheck,
    FolderKanban,
    Compass,
    Users,
    Briefcase,
    Infinity,
} from "lucide-react";

const reasons = [
    {
        icon: BookOpenCheck,
        title: "Structured Learning",
        description:
            "Follow organized learning paths instead of jumping between random videos. Every lesson builds on the previous one.",
    },
    {
        icon: Compass,
        title: "Beginner-Friendly",
        description:
            "We explain every concept from the basics, making technology accessible even if you're starting from zero.",
    },
    {
        icon: FolderKanban,
        title: "Project-Based Learning",
        description:
            "Apply your knowledge through real-world projects that strengthen your portfolio and practical skills.",
    },
    {
        icon: Briefcase,
        title: "Career-Oriented Content",
        description:
            "Learn skills that companies actually expect, along with interview preparation, resumes, and career guidance.",
    },
    {
        icon: Users,
        title: "Supportive Community",
        description:
            "Connect with fellow learners, ask questions, share progress, and stay motivated throughout your journey.",
    },
    {
        icon: Infinity,
        title: "Continuous Growth",
        description:
            "Technology keeps evolving, and so do we. New tutorials, projects, and learning paths are added regularly.",
    },
];

export default function WhyLearnNextnix() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="rounded-full border border-[#5EE587]/30 bg-[#5EE587]/10 px-4 py-2 text-sm font-semibold text-[#051D67]">
                        Why Learn with Nextnix
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] md:text-5xl">
                        Learn Smarter, Not Harder
                    </h2>

                    <p className="mt-6 font-inter text-lg leading-8 text-slate-600">
                        We believe learning technology should be structured,
                        practical, and enjoyable. Our goal is to help you build
                        confidence, not confusion.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

                    {reasons.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="group rounded-[30px] border border-[#5EE587]/20 bg-white/70 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#5EE587]/40 hover:shadow-xl"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5EE587]/15 text-[#051D67] transition-transform duration-300 group-hover:scale-110">
                                    <Icon size={30} />
                                </div>

                                <h3 className="mt-8 font-space-grotesk text-2xl font-bold text-[#051D67]">
                                    {item.title}
                                </h3>

                                <p className="mt-5 font-inter leading-8 text-slate-600">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Highlight */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 rounded-[36px] border border-[#5EE587]/20 bg-linear-to-r from-[#051D67] to-[#0A2D94] p-10 text-center shadow-2xl"
                >
                    <h3 className="font-space-grotesk text-3xl font-bold text-white">
                        Your Learning Journey Matters
                    </h3>

                    <p className="mx-auto mt-5 max-w-3xl font-inter text-lg leading-8 text-white/90">
                        At Nextnix, success isn't measured by the number of
                        videos you watch. It's measured by the skills you build,
                        the projects you complete, and the confidence you gain
                        along the way.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
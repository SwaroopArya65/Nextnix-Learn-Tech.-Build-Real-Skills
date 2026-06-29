import { motion } from "framer-motion";
import {
    FolderKanban,
    Users,
    Briefcase,
    GraduationCap,
    HeartHandshake,
    Infinity,
} from "lucide-react";

const reasons = [
    {
        icon: FolderKanban,
        title: "Real Projects",
        description:
            "Build practical, portfolio-ready projects that strengthen your skills and prepare you for real-world development.",
    },
    {
        icon: GraduationCap,
        title: "Beginner-Friendly",
        description:
            "No prior experience? No problem. Our learning approach is designed for complete beginners.",
    },
    {
        icon: Briefcase,
        title: "Career Focused",
        description:
            "Go beyond coding with resume guidance, interview preparation, and placement-oriented learning.",
    },
    {
        icon: Users,
        title: "Community Support",
        description:
            "Learn alongside passionate students, ask questions, collaborate on projects, and grow together.",
    },
    {
        icon: HeartHandshake,
        title: "Mentorship",
        description:
            "Receive guidance from mentors who genuinely care about your progress and long-term success.",
    },
    {
        icon: Infinity,
        title: "Continuous Learning",
        description:
            "Stay updated with new technologies, fresh content, and continuous learning opportunities.",
    },
];

export default function WhyChooseNextnix() {
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
                        Why Choose Nextnix
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] md:text-5xl">
                        More Than Just Learning
                    </h2>

                    <p className="mt-6 font-inter text-lg leading-8 text-slate-600">
                        At Nextnix, we don't just teach technology. We help you
                        develop practical skills, build confidence, and prepare
                        for a successful career in tech.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

                    {reasons.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="group rounded-[30px] border border-[#5EE587]/20 bg-white/70 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#5EE587]/50 hover:shadow-xl"
                            >
                                {/* Icon */}

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5EE587]/15 text-[#051D67] transition duration-300 group-hover:scale-110">
                                    <Icon size={30} />
                                </div>

                                {/* Title */}

                                <h3 className="mt-8 font-space-grotesk text-2xl font-bold text-[#051D67]">
                                    {item.title}
                                </h3>

                                {/* Description */}

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
                    className="mt-20 rounded-[36px] border border-[#5EE587]/20 bg-gradient-to-r from-[#051D67] to-[#0A2D94] p-10 text-center text-white shadow-2xl"
                >
                    <h3 className="font-space-grotesk text-3xl font-bold">
                        Your Success Is Our Mission
                    </h3>

                    <p className="mx-auto mt-5 max-w-3xl font-inter text-lg leading-8 text-white/90">
                        Whether you're preparing for your first internship,
                        switching careers, or improving your professional
                        skills, Nextnix is committed to supporting your journey
                        every step of the way.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
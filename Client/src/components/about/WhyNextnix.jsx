import { motion } from "framer-motion";
import {
    FolderKanban,
    Rocket,
    Target,
    Users,
    GraduationCap,
    BookOpen,
    ArrowRight,
} from "lucide-react";

const features = [
    {
        icon: FolderKanban,
        title: "Project-Based Learning",
        description:
            "Build real-world applications that strengthen your portfolio and practical experience.",
    },
    {
        icon: Rocket,
        title: "Beginner Friendly",
        description:
            "Learn step by step with structured guidance. No prior experience required.",
    },
    {
        icon: Target,
        title: "Career Focused",
        description:
            "Everything you learn is designed to prepare you for internships and real jobs.",
    },
    {
        icon: Users,
        title: "Community Support",
        description:
            "Grow with like-minded learners, ask questions, and stay motivated together.",
    },
    {
        icon: GraduationCap,
        title: "Expert Guidance",
        description:
            "Get practical insights, mentorship, and learning strategies from experienced instructors.",
    },
    {
        icon: BookOpen,
        title: "Structured Roadmaps",
        description:
            "No more confusion. Follow clear learning paths designed for long-term success.",
    },
];



export default function WhyNextnix() {
    return (
        <section id="why-nextnix" className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="mx-auto max-w-3xl text-center"
                >

                    <span className="rounded-full border border-[#5EE587]/30 bg-white/60 px-5 py-2 text-sm font-medium text-[#051D67] backdrop-blur-xl">
                        Why Choose Nextnix
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] sm:text-5xl">
                        Learn Smarter.
                        <br />
                        Grow Faster.
                    </h2>

                    <p className="mt-6 font-inter text-lg leading-8 text-slate-600">
                        Nextnix is more than a learning platform. It's a complete
                        ecosystem designed to help beginners build practical skills,
                        confidence, and successful careers.
                    </p>

                </motion.div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

                    {features.map((feature, index) => {

                        const Icon = feature.icon;

                        return (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: .5,
                                    delay: index * .08,
                                }}
                                whileHover={{
                                    y: -10,
                                }}
                                className="group rounded-[30px] border border-[#5EE587]/20 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300"
                            >

                                {/* Icon */}

                                <div className="inline-flex rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#5EE587]/25">

                                    <Icon size={34} />

                                </div>

                                {/* Title */}

                                <h3 className="mt-8 font-space-grotesk text-2xl font-bold text-[#051D67]">

                                    {feature.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-4 font-inter leading-7 tracking-wide text-slate-600">

                                    {feature.description}

                                </p>

                                {/* Footer */}

                                <div className="mt-8 flex items-center gap-2 font-inter font-semibold text-[#051D67] transition-all duration-300 group-hover:gap-3">

                                    Learn More

                                    <ArrowRight size={18} />

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

            </div>
        </section>
    );
}
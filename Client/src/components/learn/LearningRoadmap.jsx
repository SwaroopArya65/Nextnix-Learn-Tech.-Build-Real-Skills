import { motion } from "framer-motion";
import {
    Compass,
    PlayCircle,
    Code2,
    FolderKanban,
    Users,
    Briefcase,
    ArrowDown,
} from "lucide-react";

const roadmap = [
    {
        icon: Compass,
        title: "Choose a Learning Path",
        description:
            "Pick Coding, Networking, Windows Administration, or Career Preparation based on your goals.",
    },
    {
        icon: PlayCircle,
        title: "Watch Structured Tutorials",
        description:
            "Follow our carefully organized YouTube playlists from beginner to advanced.",
    },
    {
        icon: Code2,
        title: "Practice Every Day",
        description:
            "Apply every concept through coding exercises, labs, and practical assignments.",
    },
    {
        icon: FolderKanban,
        title: "Build Real Projects",
        description:
            "Create portfolio-ready projects that demonstrate your skills to employers.",
    },
    {
        icon: Users,
        title: "Join the Community",
        description:
            "Ask questions, collaborate with learners, and stay motivated throughout your journey.",
    },
    {
        icon: Briefcase,
        title: "Become Job Ready",
        description:
            "Prepare for internships, placements, certifications, and your first tech job.",
    },
];

export default function LearningRoadmap() {
    return (
        <section id="roadmap" className="py-24">
            <div className="mx-auto max-w-6xl px-6">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full border border-[#5EE587]/30 bg-white/70 px-5 py-2 text-sm font-medium text-[#051D67] backdrop-blur-xl">
                        Learning Journey
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] md:text-5xl">
                        Your Roadmap to Success
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Learning isn't just watching videos. Follow a structured
                        roadmap that takes you from complete beginner to
                        job-ready professional.
                    </p>

                </div>

                {/* Timeline */}

                <div className="mt-20 space-y-8">

                    {roadmap.map((step, index) => {
                        const Icon = step.icon;

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
                            >
                                <div className="rounded-3xl border border-[#5EE587]/20 bg-white/60 p-8 backdrop-blur-xl">

                                    <div className="flex flex-col gap-6 md:flex-row md:items-center">

                                        {/* Number */}

                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#051D67] text-2xl font-bold text-white">
                                            {index + 1}
                                        </div>

                                        {/* Icon */}

                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5EE587]/15 text-[#051D67]">
                                            <Icon size={30} />
                                        </div>

                                        {/* Content */}

                                        <div className="flex-1">

                                            <h3 className="font-space-grotesk text-2xl font-bold text-[#051D67]">
                                                {step.title}
                                            </h3>

                                            <p className="mt-3 leading-8 text-slate-600">
                                                {step.description}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                {index !== roadmap.length - 1 && (
                                    <div className="flex justify-center py-4">
                                        <ArrowDown
                                            size={28}
                                            className="text-[#5EE587]"
                                        />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}
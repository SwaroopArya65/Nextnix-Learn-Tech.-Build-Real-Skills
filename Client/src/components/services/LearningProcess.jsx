import { motion } from "framer-motion";
import {
    UserPlus,
    BookOpen,
    Laptop2,
    Briefcase,
    Rocket,
} from "lucide-react";

const steps = [
    {
        icon: UserPlus,
        title: "Join Nextnix",
        description:
            "Choose the learning path that matches your goals and become part of our growing tech community.",
    },
    {
        icon: BookOpen,
        title: "Learn by Doing",
        description:
            "Understand concepts through live sessions, practical examples, and beginner-friendly guidance.",
    },
    {
        icon: Laptop2,
        title: "Build Real Projects",
        description:
            "Apply your knowledge by building portfolio-worthy projects that strengthen your practical skills.",
    },
    {
        icon: Briefcase,
        title: "Career Guidance",
        description:
            "Receive mentorship, placement tips, interview preparation, and industry insights.",
    },
    {
        icon: Rocket,
        title: "Grow with Confidence",
        description:
            "Continue learning, collaborate with the community, and confidently move toward your career goals.",
    },
];

export default function LearningProcess() {
    return (
        <section id="learning-journey" className="py-24">
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
                        Learning Journey
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] md:text-5xl">
                        Your Journey Starts Here
                    </h2>

                    <p className="mt-6 font-inter text-lg leading-8 text-slate-600">
                        Every learner follows a structured path designed to
                        transform curiosity into real-world skills and career
                        confidence.
                    </p>
                </motion.div>

                {/* Timeline */}

                <div className="relative mt-20">

                    {/* Desktop Connecting Line */}

                    <div className="absolute left-0 right-0 top-14 hidden h-1 rounded-full bg-[#5EE587]/20 lg:block" />

                    <div className="grid gap-8 lg:grid-cols-5">

                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -8 }}
                                    className="relative rounded-3xl border border-[#5EE587]/20 bg-white/70 p-6 text-center backdrop-blur-xl"
                                >
                                    {/* Step Number */}

                                    <div className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#051D67] text-sm font-bold text-white shadow-lg">
                                        {index + 1}
                                    </div>

                                    {/* Icon */}

                                    <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#5EE587]/15 text-[#051D67]">
                                        <Icon size={34} />
                                    </div>

                                    {/* Title */}

                                    <h3 className="mt-8 font-space-grotesk text-xl font-bold text-[#051D67]">
                                        {step.title}
                                    </h3>

                                    {/* Description */}

                                    <p className="mt-4 font-inter text-sm leading-7 text-slate-600">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
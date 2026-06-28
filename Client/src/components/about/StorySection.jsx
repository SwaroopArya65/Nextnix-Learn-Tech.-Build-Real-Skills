import { motion } from "framer-motion";
import {
    Compass,
    BookOpen,
    Laptop2,
    Rocket,
} from "lucide-react";

const journey = [
    {
        icon: Compass,
        title: "Confused Beginner",
        description: "Too many tutorials. No clear roadmap.",
    },
    {
        icon: BookOpen,
        title: "Structured Learning",
        description: "Simple guidance with practical concepts.",
    },
    {
        icon: Laptop2,
        title: "Build Projects",
        description: "Learn by creating real-world applications.",
    },
    {
        icon: Rocket,
        title: "Career Growth",
        description: "Build confidence for internships and jobs.",
    },
];

export default function StorySection() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >

                    <span className="rounded-full border border-[#5EE587]/30 bg-white/60 px-5 py-2 text-sm font-medium text-[#051D67] backdrop-blur-xl">
                        Our Story
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] sm:text-5xl">
                        Why Nextnix Exists
                    </h2>

                    <p className="mt-6 font-inter text-lg leading-8 text-slate-600">
                        Every great journey starts with a problem. Ours began
                        with the confusion that thousands of beginners still
                        face today.
                    </p>

                </motion.div>

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Story */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .6 }}
                        className="rounded-4xl border border-[#5EE587]/20 bg-white/10 p-8 backdrop-blur-xl lg:p-10"
                    >

                        <h3 className="font-space-grotesk text-3xl font-bold text-[#051D67]">
                            Built From My Own Learning Journey
                        </h3>

                        <div className="mt-8 space-y-6 font-inter leading-8 tracking-wide text-slate-600">

                            <p>
                                I started Nextnix because I once faced the same
                                confusion that thousands of students experience
                                today. There were countless tutorials, endless
                                playlists, and too many opinions, but no clear
                                direction.
                            </p>

                            <p>
                                Instead of making learning easier, the internet
                                often made it more overwhelming. Beginners
                                struggled to decide what to learn, where to
                                begin, and which skills actually mattered for
                                their careers.
                            </p>

                            <p>
                                Nextnix was created to change that. Our goal is
                                simple: provide structured learning, practical
                                projects, and genuine guidance so every beginner
                                can build real skills with confidence.
                            </p>

                        </div>

                    </motion.div>

                    {/* Journey */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .6 }}
                        className="relative"
                    >

                        <div className="absolute left-6 top-0 h-full w-0.5 bg-[#5EE587]/30"></div>

                        <div className="space-y-10">

                            {journey.map((step, index) => {

                                const Icon = step.icon;

                                return (

                                    <motion.div
                                        whileHover={{ x: 8 }}
                                        key={index}
                                        className="relative flex items-start gap-6"
                                    >

                                        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5EE587]/15 text-[#051D67] backdrop-blur-xl">
                                            <Icon size={28} />
                                        </div>

                                        <div>

                                            <h4 className="font-space-grotesk text-xl font-semibold text-[#051D67]">
                                                {step.title}
                                            </h4>

                                            <p className="mt-2 font-inter leading-7 text-slate-600">
                                                {step.description}
                                            </p>

                                        </div>

                                    </motion.div>

                                );

                            })}

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}
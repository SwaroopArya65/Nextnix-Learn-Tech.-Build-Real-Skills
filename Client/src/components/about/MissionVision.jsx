import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2 } from "lucide-react";

const cards = [
    {
        icon: Target,
        title: "Our Mission",
        description:
            "To simplify technology education by providing practical, beginner-friendly learning experiences that empower students to build real-world skills and achieve their career goals with confidence.",
        points: [
            "Project-Based Learning",
            "Beginner Friendly",
            "Affordable Education",
        ],
    },
    {
        icon: Eye,
        title: "Our Vision",
        description:
            "To become India's most trusted beginner-first technology learning platform, helping millions of students transform their passion into successful careers through quality education and community support.",
        points: [
            "Trusted Learning Platform",
            "Career-Focused Education",
            "Continuous Innovation",
        ],
    },
];

export default function MissionVision() {
    return (
        <section className="py-24">
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
                        Mission & Vision
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] sm:text-5xl">
                        The Purpose That Drives Nextnix
                    </h2>

                    <p className="mt-6 font-inter text-lg leading-8 text-slate-600">
                        Everything we build is guided by one simple goal:
                        helping beginners learn practical technology skills and
                        create meaningful careers.
                    </p>

                </motion.div>

                {/* Cards */}

                <div className="mt-16 grid gap-8 lg:grid-cols-2">

                    {cards.map((card, index) => {

                        const Icon = card.icon;

                        return (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: .6, delay: index * .2 }}
                                whileHover={{ y: -8 }}
                                className="group relative overflow-hidden rounded-4xl border border-[#5EE587]/20 bg-white/10 p-8 backdrop-blur-xl"
                            >

                                {/* Decorative Glow */}

                                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#5EE587]/10 blur-3xl transition-all duration-500 group-hover:bg-[#5EE587]/20"></div>

                                {/* Icon */}

                                <div className="relative z-10 inline-flex rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67]">
                                    <Icon size={34} />
                                </div>

                                {/* Title */}

                                <h3 className="relative z-10 mt-8 font-space-grotesk text-3xl font-bold text-[#051D67]">
                                    {card.title}
                                </h3>

                                {/* Description */}

                                <p className="relative z-10 mt-6 font-inter leading-8 tracking-wide text-slate-600">
                                    {card.description}
                                </p>

                                {/* Divider */}

                                <div className="relative z-10 my-8 h-px bg-[#5EE587]/20"></div>

                                {/* Points */}

                                <div className="relative z-10 space-y-4">

                                    {card.points.map((point, i) => (

                                        <div
                                            key={i}
                                            className="flex items-center gap-3"
                                        >

                                            <CheckCircle2
                                                size={20}
                                                className="text-[#5EE587]"
                                            />

                                            <span className="font-inter text-slate-700">
                                                {point}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

            </div>
        </section>
    );
}
import { motion } from "framer-motion";
import {
    MonitorPlay,
    BookOpen,
    FolderKanban,
    Users,
} from "lucide-react";

const stats = [
    {
        icon: MonitorPlay,
        number: "17+",
        title: "YouTube Learners",
        description:
            "Growing community learning through our free YouTube tutorials.",
    },
    {
        icon: BookOpen,
        number: "5+",
        title: "Learning Playlists",
        description:
            "Structured playlists covering coding, networking, career guidance, and more.",
    },
    {
        icon: FolderKanban,
        number: "10+",
        title: "Hands-on Projects",
        description:
            "Real-world projects that help learners build practical experience.",
    },
    {
        icon: Users,
        number: "Growing",
        title: "Community",
        description:
            "An active community where learners connect, ask questions, and grow together.",
    },
];

export default function ImpactSection() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="rounded-full border border-[#5EE587]/30 bg-white/60 px-5 py-2 text-sm font-medium text-[#051D67] backdrop-blur-xl">
                        Our Impact
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] sm:text-5xl">
                        Growing One Learner at a Time
                    </h2>

                    <p className="mt-6 font-inter text-lg leading-8 text-slate-600">
                        Every learner, project, and achievement inspires us to
                        continue making quality technology education accessible
                        to everyone.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

                    {stats.map((item, index) => {

                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -8 }}
                                className="group relative overflow-hidden rounded-4xl border border-[#5EE587]/20 bg-white/10 p-8 backdrop-blur-xl"
                            >

                                {/* Glow */}

                                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#5EE587]/10 blur-3xl transition-all duration-300 group-hover:bg-[#5EE587]/20"></div>

                                {/* Icon */}

                                <div className="relative z-10 inline-flex rounded-2xl bg-[#5EE587]/15 p-4">

                                    <Icon
                                        size={34}
                                        className="text-[#051D67]"
                                    />

                                </div>

                                {/* Number */}

                                <h3 className="relative z-10 mt-8 font-space-grotesk text-5xl font-bold text-[#051D67]">
                                    {item.number}
                                </h3>

                                {/* Title */}

                                <h4 className="mt-4 font-space-grotesk text-2xl font-semibold text-[#051D67]">
                                    {item.title}
                                </h4>

                                {/* Description */}

                                <p className="mt-4 font-inter leading-7 text-slate-600">
                                    {item.description}
                                </p>

                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
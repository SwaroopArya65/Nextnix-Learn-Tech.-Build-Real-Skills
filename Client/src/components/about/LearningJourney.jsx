import { motion } from "framer-motion";
import {
    Compass,
    BookOpen,
    FolderKanban,
    Users,
    BriefcaseBusiness,
} from "lucide-react";

const journey = [
    {
        icon: Compass,
        title: "Discover",
        description:
            "Start your tech journey by exploring beginner-friendly roadmaps and free learning resources.",
    },
    {
        icon: BookOpen,
        title: "Learn Fundamentals",
        description:
            "Understand the core concepts through structured playlists and practical explanations.",
    },
    {
        icon: FolderKanban,
        title: "Build Projects",
        description:
            "Apply your knowledge by creating real-world projects that strengthen your portfolio.",
    },
    {
        icon: Users,
        title: "Join Community",
        description:
            "Connect with fellow learners, ask questions, and grow together inside the Nextnix community.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Launch Your Career",
        description:
            "Prepare for internships and jobs with career guidance, interview tips, and mentorship.",
    },
];

export default function LearningJourney() {
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
                        Learning Journey
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] sm:text-5xl">
                        Your Journey Starts Here
                    </h2>

                    <p className="mt-6 font-inter text-lg leading-8 text-slate-600">
                        Every learner follows a clear roadmap designed to build
                        confidence, practical skills, and career readiness.
                    </p>
                </motion.div>

                {/* Desktop Timeline */}

                <div className="relative mt-20 hidden lg:block">

                    <div className="absolute left-0 top-12 h-1 w-full rounded-full bg-[#5EE587]/20"></div>

                    <div className="grid grid-cols-5 gap-8">

                        {journey.map((step, index) => {

                            const Icon = step.icon;

                            return (

                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="relative text-center"
                                >

                                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#5EE587]/30 bg-white/20 backdrop-blur-xl">

                                        <Icon
                                            size={36}
                                            className="text-[#051D67]"
                                        />

                                    </div>

                                    <h3 className="mt-6 font-space-grotesk text-xl font-bold text-[#051D67]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 font-inter text-sm leading-7 text-slate-600">
                                        {step.description}
                                    </p>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

                {/* Mobile Timeline */}

                <div className="relative mt-16 space-y-10 lg:hidden">

                    <div className="absolute left-7 top-0 h-full w-0.5 bg-[#5EE587]/30"></div>

                    {journey.map((step, index) => {

                        const Icon = step.icon;

                        return (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="relative flex gap-6"
                            >

                                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#5EE587]/30 bg-white/20 backdrop-blur-xl">

                                    <Icon
                                        size={24}
                                        className="text-[#051D67]"
                                    />

                                </div>

                                <div>

                                    <h3 className="font-space-grotesk text-xl font-bold text-[#051D67]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 font-inter leading-7 text-slate-600">
                                        {step.description}
                                    </p>

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

            </div>
        </section>
    );
}
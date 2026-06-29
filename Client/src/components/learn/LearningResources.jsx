import { motion } from "framer-motion";
import {
    FileText,
    FolderKanban,
    ClipboardList,
    Lightbulb,
    Download,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
    {
        icon: FileText,
        title: "Study Notes",
        description:
            "Easy-to-understand notes that summarize important concepts and help you revise quickly.",
        badge: "Coming Soon",
        button: "Explore Notes",
        link: "/resources/notes",
    },
    {
        icon: FolderKanban,
        title: "Project Ideas",
        description:
            "Real-world project ideas to strengthen your portfolio and improve practical development skills.",
        badge: "Available",
        button: "View Projects",
        link: "/projects",
    },
    {
        icon: ClipboardList,
        title: "Interview Questions",
        description:
            "Practice frequently asked coding, networking, and technical interview questions.",
        badge: "Coming Soon",
        button: "Start Practice",
        link: "/resources/interviews",
    },
    {
        icon: Lightbulb,
        title: "Cheat Sheets",
        description:
            "Quick-reference guides for HTML, CSS, JavaScript, React, Networking, and Windows Server.",
        badge: "Coming Soon",
        button: "Browse Cheat Sheets",
        link: "/resources/cheatsheets",
    },
];

export default function LearningResources() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="rounded-full border border-[#5EE587]/30 bg-[#5EE587]/10 px-4 py-2 text-sm font-semibold text-[#051D67]">
                        Free Learning Resources
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] md:text-5xl">
                        Learn Beyond Videos
                    </h2>

                    <p className="mt-6 font-inter text-lg leading-8 text-slate-600">
                        Boost your learning with study notes, project ideas,
                        interview preparation, and practical resources designed
                        to help you learn faster.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {resources.map((resource, index) => {

                        const Icon = resource.icon;

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

                                {/* Icon */}

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5EE587]/15 text-[#051D67] transition-transform duration-300 group-hover:scale-110">
                                    <Icon size={30} />
                                </div>

                                {/* Title */}

                                <h3 className="mt-8 font-space-grotesk text-2xl font-bold text-[#051D67]">
                                    {resource.title}
                                </h3>

                                {/* Description */}

                                <p className="mt-5 font-inter leading-8 text-slate-600">
                                    {resource.description}
                                </p>

                                {/* Badge */}

                                <span
                                    className={`mt-6 inline-block rounded-full px-4 py-2 text-sm font-medium ${resource.badge === "Available"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {resource.badge}
                                </span>

                                {/* Button */}

                                <Link
                                    to={resource.link}
                                    className="group mt-8 inline-flex items-center gap-2 font-semibold text-[#051D67]"
                                >
                                    {resource.button}

                                    {resource.badge === "Available" ? (
                                        <ArrowRight
                                            size={18}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    ) : (
                                        <Download size={18} />
                                    )}
                                </Link>

                            </motion.div>

                        );

                    })}

                </div>

                {/* Bottom Banner */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 rounded-[36px] border border-[#5EE587]/20 bg-linear-to-r from-[#051D67] via-[#06257F] to-[#0A2D94] p-10 text-center shadow-xl"
                >
                    <h3 className="font-space-grotesk text-3xl font-bold text-white">
                        More Resources Are Coming
                    </h3>

                    <p className="mx-auto mt-5 max-w-3xl font-inter text-lg leading-8 text-white/90">
                        We're continuously building free notes, coding
                        challenges, project templates, interview kits, and
                        learning resources to help you grow with confidence.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
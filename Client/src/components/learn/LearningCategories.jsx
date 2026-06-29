import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Code2,
    Network,
    MonitorSmartphone,
    Briefcase,
    ArrowRight,
} from "lucide-react";

const categories = [
    {
        icon: Code2,
        title: "Learn Coding",
        description:
            "Master modern web development from HTML to MERN Stack through beginner-friendly tutorials and real-world projects.",
        badge: "Beginner → Advanced",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
        ],
        link: "/learn/coding",
    },

    {
        icon: Network,
        title: "Networking (CCNA)",
        description:
            "Understand networking fundamentals, routing, switching, IP addressing, and prepare for the CCNA certification.",
        badge: "Networking",
        skills: [
            "OSI Model",
            "Routing",
            "Switching",
            "Subnetting",
            "IPv4",
            "CCNA",
        ],
        link: "/learn/networking",
    },

    {
        icon: MonitorSmartphone,
        title: "Windows Administration",
        description:
            "Learn Windows Server, Active Directory, DNS, DHCP, virtualization, and enterprise system administration.",
        badge: "System Admin",
        skills: [
            "Windows Server",
            "Active Directory",
            "DNS",
            "DHCP",
            "VirtualBox",
            "PowerShell",
        ],
        link: "/learn/windows",
    },

    {
        icon: Briefcase,
        title: "Career & Placement",
        description:
            "Build resumes, prepare for interviews, understand career paths, and become industry ready.",
        badge: "Career Growth",
        skills: [
            "Resume",
            "Interview",
            "Projects",
            "LinkedIn",
            "Roadmaps",
            "Jobs",
        ],
        link: "/learn/career",
    },
];

export default function LearningCategories() {
    return (
        <section className="py-24">

            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full border border-[#5EE587]/30 bg-white/70 px-5 py-2 text-sm font-medium text-[#051D67] backdrop-blur-xl">
                        Explore Categories
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] md:text-5xl">
                        Choose Your Learning Path
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Whether you're starting from scratch or preparing for
                        your next career move, Nextnix provides structured
                        learning paths designed for real-world success.
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

                    {categories.map((category, index) => {

                        const Icon = category.icon;

                        return (

                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.25 }}
                                className="rounded-3xl border border-[#5EE587]/20 bg-white/50 p-8 backdrop-blur-xl"
                            >

                                {/* Icon */}

                                <div className="inline-flex rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67]">

                                    <Icon size={34} />

                                </div>

                                {/* Title */}

                                <h3 className="mt-7 text-2xl font-bold text-[#051D67]">
                                    {category.title}
                                </h3>

                                {/* Description */}

                                <p className="mt-4 leading-7 text-slate-600">
                                    {category.description}
                                </p>

                                {/* Badge */}

                                <div className="mt-6">

                                    <span className="rounded-full bg-[#5EE587]/15 px-4 py-2 text-sm font-medium text-[#051D67]">
                                        {category.badge}
                                    </span>

                                </div>

                                {/* Skills */}

                                <div className="mt-8 flex flex-wrap gap-2">

                                    {category.skills.map((skill, i) => (

                                        <span
                                            key={i}
                                            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600"
                                        >
                                            {skill}
                                        </span>

                                    ))}

                                </div>

                                {/* Button */}

                                <Link
                                    to={category.link}
                                    className="group mt-8 inline-flex items-center gap-2 font-semibold text-[#051D67]"
                                >
                                    Explore Path

                                    <ArrowRight
                                        size={18}
                                        className="transition-transform group-hover:translate-x-1"
                                    />

                                </Link>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}
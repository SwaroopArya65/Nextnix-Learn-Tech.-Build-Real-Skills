import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Laptop2,
    Network,
    Briefcase,
    Clock3,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

const learningPaths = [
    {
        icon: Laptop2,
        title: "Full Stack Web Development",
        level: "Beginner → Advanced",
        duration: "5 Learning Stages",
        description:
            "Build modern websites and full-stack applications using industry-standard technologies.",

        roadmap: [
            "HTML & CSS",
            "JavaScript",
            "React.js",
            "Node & Express",
            "MongoDB & Deployment",
        ],

        skills: [
            "Projects",
            "Git",
            "REST API",
        ],

        button: "Start Learning",
        link: "/learn/coding",
    },

    {
        icon: Network,
        title: "Networking & CCNA",
        level: "Foundation → Professional",
        duration: "6 Learning Stages",
        description:
            "Understand computer networking and prepare yourself for enterprise networking careers.",

        roadmap: [
            "Networking Basics",
            "OSI & TCP/IP",
            "IP Addressing",
            "Routing",
            "Switching",
            "CCNA Preparation",
        ],

        skills: [
            "Cisco",
            "Subnetting",
            "Packet Tracer",
        ],

        button: "Explore Path",
        link: "/learn/networking",
    },

    {
        icon: Briefcase,
        title: "Career Preparation",
        level: "Job Ready",
        duration: "Complete Guide",
        description:
            "Everything you need to prepare for internships, placements and your first tech job.",

        roadmap: [
            "Career Roadmap",
            "Resume Building",
            "LinkedIn",
            "Projects",
            "Interview Preparation",
        ],

        skills: [
            "Resume",
            "Interview",
            "Placement",
        ],

        button: "Prepare Now",
        link: "/learn/career",
    },
];

export default function FeaturedPaths() {
    return (
        <section id="featured-paths" className="py-24">

            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full border border-[#5EE587]/30 bg-white/70 px-5 py-2 text-sm font-medium text-[#051D67] backdrop-blur-xl">
                        Featured Learning Paths
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] md:text-5xl">
                        Follow a Structured Roadmap
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Don't waste time figuring out what to learn next.
                        Follow carefully designed roadmaps that take you from
                        beginner to job-ready, one step at a time.
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-16 grid gap-8 lg:grid-cols-3">

                    {learningPaths.map((path, index) => {

                        const Icon = path.icon;

                        return (

                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                transition={{ duration: .25 }}
                                className="rounded-3xl border border-[#5EE587]/20 bg-white/60 p-8 backdrop-blur-xl"
                            >

                                {/* Icon */}

                                <div className="inline-flex rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67]">

                                    <Icon size={34} />

                                </div>

                                {/* Title */}

                                <h3 className="mt-7 text-2xl font-bold text-[#051D67]">
                                    {path.title}
                                </h3>

                                {/* Description */}

                                <p className="mt-4 leading-7 text-slate-600">
                                    {path.description}
                                </p>

                                {/* Info */}

                                <div className="mt-6 flex flex-wrap gap-3">

                                    <span className="rounded-full bg-[#5EE587]/15 px-4 py-2 text-sm font-medium text-[#051D67]">
                                        {path.level}
                                    </span>

                                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">

                                        <Clock3 size={16} />

                                        {path.duration}

                                    </span>

                                </div>

                                {/* Roadmap */}

                                <div className="mt-8 space-y-4">

                                    {path.roadmap.map((step, i) => (

                                        <div
                                            key={i}
                                            className="flex items-center gap-3"
                                        >

                                            <CheckCircle2
                                                size={18}
                                                className="text-[#5EE587]"
                                            />

                                            <span className="text-slate-700">
                                                {step}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                                {/* Skills */}

                                <div className="mt-8 flex flex-wrap gap-2">

                                    {path.skills.map((skill, i) => (

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
                                    to={path.link}
                                    className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-[#051D67] px-6 py-3 font-semibold text-white transition hover:bg-[#06257f]"
                                >
                                    {path.button}

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
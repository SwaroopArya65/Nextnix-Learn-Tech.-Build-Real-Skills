import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    GraduationCap,
    Building2,
    Briefcase,
    Handshake,
    ArrowRight,
    Clock3,
    BadgeCheck,
} from "lucide-react";

const options = [
    {
        icon: GraduationCap,
        title: "Student Support",
        description:
            "Need help choosing the right learning path, understanding a topic, or planning your tech career? We're here to guide you.",
        features: [
            "Learning Roadmaps",
            "Career Guidance",
            "Course Recommendations",
        ],
        badge: "Most Popular",
        button: "Get Guidance",
        link: "#contact-form",
    },

    {
        icon: Building2,
        title: "College Workshops",
        description:
            "Invite Nextnix to conduct hands-on workshops, seminars, bootcamps, and career awareness sessions for students.",
        features: [
            "Technical Workshops",
            "Seminars",
            "Campus Training",
        ],
        badge: "Educational",
        button: "Request Workshop",
        link: "#contact-form",
    },

    {
        icon: Briefcase,
        title: "Corporate Training",
        description:
            "Empower your workforce with customized technical training programs designed for modern industry requirements.",
        features: [
            "Live Training",
            "Hands-on Sessions",
            "Certification Support",
        ],
        badge: "Professional",
        button: "Schedule Meeting",
        link: "#contact-form",
    },

    {
        icon: Handshake,
        title: "Partnership & Collaboration",
        description:
            "Let's collaborate on educational initiatives, content creation, sponsorships, internships, and community events.",
        features: [
            "Partnership",
            "Business Inquiry",
            "Community Events",
        ],
        badge: "Business",
        button: "Let's Connect",
        link: "#contact-form",
    },
];

export default function ContactOptions() {
    return (
        <section className="py-24">

            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >

                    <span className="rounded-full border border-[#5EE587]/30 bg-[#5EE587]/10 px-5 py-2 text-sm font-semibold text-[#051D67]">
                        Choose Your Purpose
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] md:text-5xl">
                        How Can We Help You?
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Select the option that best matches your needs, and we'll
                        ensure your inquiry reaches the right place.
                    </p>

                </motion.div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2">

                    {options.map((option, index) => {

                        const Icon = option.icon;

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
                                className="group rounded-4xl border border-[#5EE587]/20 bg-white/70 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#5EE587]/40 hover:shadow-2xl"
                            >

                                {/* Header */}

                                <div className="flex items-start justify-between">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5EE587]/15 text-[#051D67] transition-transform duration-300 group-hover:scale-110">

                                        <Icon size={30} />

                                    </div>

                                    <span className="rounded-full bg-[#051D67]/10 px-4 py-2 text-sm font-medium text-[#051D67]">
                                        {option.badge}
                                    </span>

                                </div>

                                {/* Title */}

                                <h3 className="mt-8 font-space-grotesk text-2xl font-bold text-[#051D67]">
                                    {option.title}
                                </h3>

                                {/* Description */}

                                <p className="mt-5 leading-8 text-slate-600">
                                    {option.description}
                                </p>

                                {/* Features */}

                                <div className="mt-8 space-y-4">

                                    {option.features.map((feature, i) => (

                                        <div
                                            key={i}
                                            className="flex items-center gap-3"
                                        >

                                            <BadgeCheck
                                                size={18}
                                                className="text-[#5EE587]"
                                            />

                                            <span className="text-slate-700">
                                                {feature}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                                {/* Footer */}

                                <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">

                                    <div className="flex items-center gap-2 text-sm text-slate-500">

                                        <Clock3 size={16} />

                                        Response within 24 Hours

                                    </div>

                                    <Link
                                        to={option.link}
                                        className="group inline-flex items-center gap-2 font-semibold text-[#051D67]"
                                    >

                                        {option.button}

                                        <ArrowRight
                                            size={18}
                                            className="transition-transform group-hover:translate-x-1"
                                        />

                                    </Link>

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}
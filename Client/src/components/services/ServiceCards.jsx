import { motion } from "framer-motion";
import {
    ArrowRight,
    Check,
    GraduationCap,
    Building2,
    MonitorPlay,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        icon: MonitorPlay,
        title: "Live Classes",
        description:
            "Learn directly from experienced instructors through interactive live sessions focused on practical skills and real-world projects.",

        features: [
            "Live Q&A Sessions",
            "Project-Based Learning",
            "Community Support",
        ],

        button: "Explore Classes",
        path: "/services/live-classes",
        available: true,
    },

    {
        icon: GraduationCap,
        title: "College Workshops",
        description:
            "Hands-on workshops designed for colleges to bridge the gap between academics and industry expectations.",

        features: [
            "Hands-on Sessions",
            "Industry Experts",
            "Certificates",
        ],

        button: "Book Workshop",
        path: "/services/workshops",
        available: false,
    },

    {
        icon: Building2,
        title: "Corporate Training",
        description:
            "Customized training programs that help organizations upskill employees with practical technologies.",

        features: [
            "Custom Curriculum",
            "Expert Mentors",
            "Certification",
        ],

        button: "Contact Team",
        path: "/services/corporate-training",
        available: false,
    },
];

export default function ServiceCards() {
    return (
        <section id="service-cards" className="py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="grid gap-8 lg:grid-cols-3">

                    {services.map((service, index) => {
                        const Icon = service.icon;

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
                                whileHover={{ y: -10 }}
                                className="group flex h-full flex-col rounded-[32px] border border-[#5EE587]/20 bg-white/70 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#5EE587]/50 hover:shadow-2xl"
                            >
                                {/* Icon */}

                                <div className="inline-flex h-18 w-18 items-center justify-center rounded-3xl bg-[#5EE587]/15 text-[#051D67]">
                                    <Icon size={34} />
                                </div>

                                {/* Title */}

                                <h3 className="mt-8 font-space-grotesk text-3xl font-bold text-[#051D67]">
                                    {service.title}
                                </h3>

                                {/* Description */}

                                <p className="mt-5 flex-grow font-inter leading-8 tracking-wide text-slate-600">
                                    {service.description}
                                </p>

                                {/* Features */}

                                <div className="mt-8 space-y-4">

                                    {service.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#5EE587]/20">
                                                <Check
                                                    size={15}
                                                    className="text-[#051D67]"
                                                />
                                            </div>

                                            <span className="font-inter text-[15px] text-slate-700">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom */}

                                <div className="mt-10 flex items-center justify-between gap-4">

                                    <span
                                        className={`rounded-full px-4 py-2 text-sm font-semibold ${
                                            service.available
                                                ? "bg-[#5EE587]/20 text-[#051D67]"
                                                : "bg-slate-100 text-slate-600"
                                        }`}
                                    >
                                        {service.available
                                            ? "Available Now"
                                            : "Coming Soon"}
                                    </span>

                                    <Link
                                        to={service.path}
                                        className="group/button inline-flex items-center gap-2 rounded-xl border border-[#051D67] px-5 py-3 font-semibold text-[#051D67] transition hover:bg-[#051D67] hover:text-white"
                                    >
                                        {service.button}

                                        <ArrowRight
                                            size={18}
                                            className="transition-transform duration-300 group-hover/button:translate-x-1"
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
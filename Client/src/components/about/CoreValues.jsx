import { motion } from "framer-motion";
import {
    Hammer,
    Users,
    Rocket,
    Quote,
} from "lucide-react";

const values = [
    {
        icon: Hammer,
        title: "Learn by Building",
        description:
            "Reading tutorials is only the beginning. Real confidence comes from building projects, solving problems, and applying knowledge in practical situations.",
        quote: "Build. Break. Learn.",
    },
    {
        icon: Users,
        title: "Community First",
        description:
            "Learning becomes easier when people support each other. We believe in growing together through collaboration, discussion, and shared experiences.",
        quote: "Grow Together.",
    },
    {
        icon: Rocket,
        title: "Never Stop Improving",
        description:
            "Technology evolves every day, and lifelong learning is the key to staying relevant. Curiosity and consistency drive long-term success.",
        quote: "Keep Learning.",
    },
];

export default function CoreValues() {
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
                        Our Core Values
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] sm:text-5xl">
                        The Principles That Guide Everything We Do
                    </h2>

                    <p className="mt-6 font-inter text-lg leading-8 text-slate-600">
                        Every lesson, project, workshop, and community interaction
                        at Nextnix is built around these values.
                    </p>

                </motion.div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 lg:grid-cols-3">

                    {values.map((value, index) => {

                        const Icon = value.icon;

                        return (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: .6,
                                    delay: index * .15,
                                }}
                                whileHover={{
                                    y: -10,
                                }}
                                className="group relative overflow-hidden rounded-4xl border border-[#5EE587]/20 bg-white/10 p-8 backdrop-blur-xl"
                            >

                                {/* Glow */}

                                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#5EE587]/10 blur-3xl transition-all duration-500 group-hover:bg-[#5EE587]/20"></div>

                                {/* Icon */}

                                <div className="relative z-10 inline-flex rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67]">

                                    <Icon size={34} />

                                </div>

                                {/* Title */}

                                <h3 className="relative z-10 mt-8 font-space-grotesk text-2xl font-bold text-[#051D67]">

                                    {value.title}

                                </h3>

                                {/* Description */}

                                <p className="relative z-10 mt-5 font-inter leading-8 tracking-wide text-slate-600">

                                    {value.description}

                                </p>

                                {/* Quote */}

                                <div className="relative z-10 mt-10 rounded-2xl border border-[#5EE587]/20 bg-[#5EE587]/10 p-5">

                                    <Quote
                                        size={20}
                                        className="mb-3 text-[#051D67]"
                                    />

                                    <p className="font-space-grotesk text-lg font-semibold italic text-[#051D67]">

                                        {value.quote}

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
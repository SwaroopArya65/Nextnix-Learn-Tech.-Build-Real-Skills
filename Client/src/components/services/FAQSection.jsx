import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Who can join Nextnix?",
        answer:
            "Anyone passionate about learning technology can join. Whether you're a school student, college student, graduate, or working professional, Nextnix is designed to help learners at every stage.",
    },
    {
        question: "Do I need prior coding experience?",
        answer:
            "Not at all. Our courses and learning paths are beginner-friendly and start from the fundamentals before moving to advanced concepts.",
    },
    {
        question: "Will I work on real-world projects?",
        answer:
            "Yes. Practical learning is at the core of Nextnix. You'll build portfolio-ready projects that help you gain confidence and showcase your skills.",
    },
    {
        question: "Will certificates be provided?",
        answer:
            "Certificates will be available for selected workshops, training programs, and future premium learning initiatives.",
    },
    {
        question: "Can colleges collaborate with Nextnix?",
        answer:
            "Absolutely. We conduct workshops, seminars, career guidance sessions, and technical training programs for colleges and educational institutions.",
    },
    {
        question: "How can companies request corporate training?",
        answer:
            "Organizations can contact us through our Contact page to discuss customized corporate training programs tailored to their technology requirements.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24">
            <div className="mx-auto max-w-5xl px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="rounded-full border border-[#5EE587]/30 bg-[#5EE587]/10 px-4 py-2 text-sm font-semibold text-[#051D67]">
                        Frequently Asked Questions
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] md:text-5xl">
                        Got Questions?
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl font-inter text-lg leading-8 text-slate-600">
                        Here are answers to some of the most common questions
                        about learning with Nextnix.
                    </p>
                </motion.div>

                {/* FAQ */}

                <div className="mt-16 space-y-5">

                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.08,
                            }}
                            viewport={{ once: true }}
                            className="overflow-hidden rounded-3xl border border-[#5EE587]/20 bg-white/70 backdrop-blur-xl"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between px-7 py-6 text-left"
                            >
                                <span className="pr-5 font-space-grotesk text-xl font-semibold text-[#051D67]">
                                    {faq.question}
                                </span>

                                <motion.div
                                    animate={{
                                        rotate:
                                            activeIndex === index ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <ChevronDown
                                        className="text-[#051D67]"
                                        size={24}
                                    />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                        }}
                                        exit={{
                                            height: 0,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                    >
                                        <p className="px-7 pb-7 font-inter leading-8 text-slate-600">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}
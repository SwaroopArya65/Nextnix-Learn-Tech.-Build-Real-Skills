import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "I'm a complete beginner. Where should I start?",
        answer:
            "Start with our 'Learn Coding From Zero' roadmap. It begins with the fundamentals and gradually progresses to advanced topics through structured tutorials and practical projects.",
    },
    {
        question: "Do I need any prior coding knowledge?",
        answer:
            "No. All our learning paths are designed for absolute beginners. We explain every concept step by step using simple language and practical examples.",
    },
    {
        question: "Are the learning resources free?",
        answer:
            "Most of our YouTube tutorials, learning roadmaps, and community resources are completely free. Additional premium learning opportunities may be introduced in the future.",
    },
    {
        question: "Do I need a powerful laptop to start?",
        answer:
            "Not at all. Most beginner courses can be completed on an entry-level laptop. We'll also recommend free software and tools whenever possible.",
    },
    {
        question: "Will I build real-world projects?",
        answer:
            "Yes. Practical learning is one of our core principles. You'll work on portfolio-ready projects that help you apply your knowledge and prepare for real jobs.",
    },
    {
        question: "How do I stay updated with new tutorials?",
        answer:
            "Subscribe to our YouTube channel and follow Nextnix on social platforms. You'll receive updates whenever new tutorials, projects, or learning resources are released.",
    },
];

export default function LearnFAQ() {
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
                        Learning FAQ
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] md:text-5xl">
                        Questions Before You Start?
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl font-inter text-lg leading-8 text-slate-600">
                        We've answered some of the most common questions to help
                        you begin your learning journey with confidence.
                    </p>
                </motion.div>

                {/* FAQ List */}

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
                                        size={24}
                                        className="text-[#051D67]"
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
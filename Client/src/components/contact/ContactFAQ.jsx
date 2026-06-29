import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How quickly will I receive a response?",
        answer:
            "We typically respond to all inquiries within 24 hours on business days. For workshop or corporate training requests, our team may contact you even sooner.",
    },
    {
        question: "Can colleges invite Nextnix for workshops?",
        answer:
            "Absolutely! We conduct hands-on workshops, seminars, coding sessions, networking sessions, career guidance programs, and technical training for colleges and universities.",
    },
    {
        question: "Do you provide corporate training programs?",
        answer:
            "Yes. We offer customized corporate training programs in programming, networking, system administration, and other technical domains based on organizational requirements.",
    },
    {
        question: "Can I collaborate with Nextnix?",
        answer:
            "Definitely. We welcome collaborations with educators, content creators, student communities, organizations, and industry professionals who share our vision of accessible technology education.",
    },
    {
        question: "Where is Nextnix located?",
        answer:
            "Nextnix is based in Giridih, Jharkhand, India. While our learning platform primarily operates online, we also conduct offline workshops, training programs, and educational events.",
    },
    {
        question: "How can I stay updated with Nextnix?",
        answer:
            "Subscribe to our YouTube channel and follow us on LinkedIn, Instagram, and GitHub to receive updates about tutorials, workshops, projects, and upcoming learning opportunities.",
    },
];

export default function ContactFAQ() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24">

            <div className="mx-auto max-w-5xl px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="rounded-full border border-[#5EE587]/30 bg-[#5EE587]/10 px-5 py-2 text-sm font-semibold text-[#051D67]">
                        Contact FAQ
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] md:text-5xl">
                        Frequently Asked Questions
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                        Before sending your message, you might find the answer
                        you're looking for below.
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
                                duration: 0.45,
                                delay: index * 0.08,
                            }}
                            viewport={{ once: true }}
                            className="overflow-hidden rounded-[28px] border border-[#5EE587]/20 bg-white/70 backdrop-blur-xl"
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
                                    transition={{
                                        duration: 0.25,
                                    }}
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

                                        <p className="px-7 pb-7 leading-8 text-slate-600">
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
import { motion } from "framer-motion";
import { Quote, GraduationCap } from "lucide-react";

export default function FounderMessage() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <span className="rounded-full border border-[#5EE587]/30 bg-white/60 px-5 py-2 text-sm font-medium text-[#051D67] backdrop-blur-xl">
                        Founder Message
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] sm:text-5xl">
                        A Message From The Founder
                    </h2>

                    <p className="mt-6 font-inter text-lg leading-8 text-slate-600">
                        Every journey begins with uncertainty. Mine was no
                        different, and that's exactly why Nextnix exists today.
                    </p>
                </motion.div>

                {/* Card */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative mt-16 overflow-hidden rounded-[36px] border border-[#5EE587]/20 bg-white/10 p-8 backdrop-blur-xl sm:p-12"
                >

                    {/* Decorative Glow */}

                    <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#5EE587]/10 blur-3xl"></div>

                    {/* Quote Icon */}

                    <Quote
                        size={60}
                        className="absolute right-8 top-8 text-[#5EE587]/20"
                    />

                    {/* Founder */}

                    <div className="relative z-10 flex flex-col items-center">

                        {/* Photo Placeholder */}

                        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#5EE587]/30 bg-[#5EE587]/10">

                            <GraduationCap
                                size={46}
                                className="text-[#051D67]"
                            />

                        </div>

                        <h3 className="mt-6 font-space-grotesk text-3xl font-bold text-[#051D67]">
                            Arya Swaroop
                        </h3>

                        <p className="mt-2 font-inter tracking-wide text-slate-600">
                            Founder • Nextnix
                        </p>

                    </div>

                    {/* Message */}

                    <div className="relative z-10 mt-12 space-y-6 text-center font-inter leading-8 tracking-wide text-slate-600">

                        <p>
                            I still remember how confusing it felt to begin my
                            journey in technology. Every platform seemed to offer
                            endless tutorials, yet none answered the simple
                            question every beginner asks:
                            <span className="font-semibold text-[#051D67]">
                                {" "}
                                "Where should I start?"
                            </span>
                        </p>

                        <p>
                            Like many students, I spent countless hours jumping
                            between videos, articles, and courses. Instead of
                            learning efficiently, I often felt lost because there
                            wasn't a clear roadmap or practical direction.
                        </p>

                        <p>
                            That experience inspired me to create Nextnix—a
                            beginner-first learning platform where technology is
                            taught through structured guidance, hands-on projects,
                            and a supportive community. My goal is simple:
                            <span className="font-semibold text-[#051D67]">
                                {" "}
                                make quality tech education accessible,
                                practical, and confidence-building for everyone.
                            </span>
                        </p>

                    </div>

                    {/* Signature */}

                    <div className="relative z-10 mt-12 border-t border-[#5EE587]/20 pt-8 text-center">

                        <p className="font-space-grotesk text-2xl font-semibold italic text-[#051D67]">
                            "Learn. Build. Grow."
                        </p>

                        <p className="mt-5 font-space-grotesk text-xl font-bold text-[#051D67]">
                            Arya Swaroop
                        </p>

                        <p className="mt-1 font-inter text-slate-500">
                            Founder, Nextnix
                        </p>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}
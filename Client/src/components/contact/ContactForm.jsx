import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactForm() {
    return (
        <section
            id="contact-form"
            className="py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="rounded-full border border-[#5EE587]/30 bg-[#5EE587]/10 px-5 py-2 text-sm font-semibold text-[#051D67]">
                        Contact Form
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] md:text-5xl">
                        Send Us a Message
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Have a question, workshop inquiry, collaboration idea,
                        or simply want to say hello? Fill out the form below and
                        we'll get back to you as soon as possible.
                    </p>
                </motion.div>

                {/* Form Card */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-16 max-w-5xl rounded-[36px] border border-[#5EE587]/20 bg-white/70 p-8 shadow-xl backdrop-blur-xl md:p-12"
                >

                    <form className="space-y-8">

                        {/* Row 1 */}

                        <div className="grid gap-6 md:grid-cols-2">

                            <div>
                                <label className="mb-2 block font-medium text-[#051D67]">
                                    Full Name
                                </label>

                                <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4">

                                    <User
                                        size={20}
                                        className="text-slate-400"
                                    />

                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-transparent px-3 py-4 outline-none"
                                    />

                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block font-medium text-[#051D67]">
                                    Email Address
                                </label>

                                <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4">

                                    <Mail
                                        size={20}
                                        className="text-slate-400"
                                    />

                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-transparent px-3 py-4 outline-none"
                                    />

                                </div>
                            </div>

                        </div>

                        {/* Row 2 */}

                        <div className="grid gap-6 md:grid-cols-2">

                            <div>
                                <label className="mb-2 block font-medium text-[#051D67]">
                                    Phone Number
                                </label>

                                <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4">

                                    <Phone
                                        size={20}
                                        className="text-slate-400"
                                    />

                                    <input
                                        type="tel"
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full bg-transparent px-3 py-4 outline-none"
                                    />

                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block font-medium text-[#051D67]">
                                    Subject
                                </label>

                                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-none">

                                    <option>
                                        Select a Subject
                                    </option>

                                    <option>
                                        Student Guidance
                                    </option>

                                    <option>
                                        Workshop Inquiry
                                    </option>

                                    <option>
                                        Corporate Training
                                    </option>

                                    <option>
                                        Partnership
                                    </option>

                                    <option>
                                        General Question
                                    </option>

                                </select>
                            </div>

                        </div>

                        {/* Message */}

                        <div>

                            <label className="mb-2 block font-medium text-[#051D67]">
                                Your Message
                            </label>

                            <div className="flex rounded-xl border border-slate-200 bg-white p-4">

                                <MessageSquare
                                    size={20}
                                    className="mt-1 text-slate-400"
                                />

                                <textarea
                                    rows="6"
                                    placeholder="Tell us about your inquiry..."
                                    className="w-full resize-none bg-transparent px-3 outline-none"
                                />

                            </div>

                        </div>

                        {/* Footer */}

                        <div className="flex flex-col items-start justify-between gap-6 border-t border-slate-200 pt-8 md:flex-row md:items-center">

                            <p className="max-w-xl text-sm leading-7 text-slate-500">
                                By submitting this form, you agree that Nextnix
                                may contact you regarding your inquiry. We
                                respect your privacy and never share your
                                information.
                            </p>

                            <button
                                type="submit"
                                className="group inline-flex items-center gap-2 rounded-xl bg-[#051D67] px-8 py-4 font-semibold text-white transition hover:bg-[#06257F]"
                            >
                                Send Message

                                <Send
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </button>

                        </div>

                    </form>

                </motion.div>

            </div>
        </section>
    );
}
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    MessageCircle,
    Mail,
    Users,
    ArrowRight,
    PhoneCall,
    Clock3,
    MapPin,
    Sparkles,
} from "lucide-react";

export default function ContactHero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left Content */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Badge */}

                        <div className="inline-flex items-center gap-2 rounded-full border border-[#5EE587]/30 bg-white/70 px-5 py-2 backdrop-blur-xl">

                            <Sparkles
                                size={18}
                                className="text-[#051D67]"
                            />

                            <span className="font-medium text-[#051D67]">
                                We'd Love to Hear From You
                            </span>

                        </div>

                        {/* Heading */}

                        <h1 className="mt-8 font-space-grotesk text-5xl font-bold leading-tight text-[#051D67] sm:text-6xl lg:text-7xl">
                            Let's Build Your
                            <br />
                            Tech Journey
                            <br />
                            Together.
                        </h1>

                        {/* Description */}

                        <p className="mt-8 max-w-2xl text-lg leading-8 tracking-wide text-slate-600">
                            Whether you're a student, college, company, or
                            aspiring professional, we're here to help. Reach out
                            for learning guidance, workshops, collaborations,
                            or training opportunities.
                        </p>

                        {/* Buttons */}

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                            <Link
                                to="#contact-form"
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#5EE587] px-8 py-4 font-semibold text-[#051D67] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4fd678]"
                            >
                                <MessageCircle size={20} />

                                Send Message

                                <ArrowRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>

                            <a
                                href="mailto:contact@nextnix.in"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#051D67] bg-white px-8 py-4 font-semibold text-[#051D67] transition hover:border-[#5EE587] hover:bg-[#5EE587]/10"
                            >
                                <Mail size={20} />

                                Email Us
                            </a>

                            <Link
                                to="/learn"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#051D67]/20 bg-white/70 px-8 py-4 font-semibold text-[#051D67] backdrop-blur-xl transition hover:border-[#5EE587]"
                            >
                                <Users size={20} />

                                Explore Courses
                            </Link>

                        </div>

                    </motion.div>

                    {/* Right Card */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="rounded-[36px] border border-[#5EE587]/20 bg-white/60 p-8 backdrop-blur-xl shadow-xl"
                    >

                        <h2 className="font-space-grotesk text-3xl font-bold text-[#051D67]">
                            Quick Contact
                        </h2>

                        <p className="mt-3 leading-7 text-slate-600">
                            We're always happy to answer your questions and
                            guide you on your learning journey.
                        </p>

                        <div className="mt-10 space-y-6">

                            <div className="flex items-start gap-5">

                                <div className="rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67]">
                                    <Mail size={24} />
                                </div>

                                <div>

                                    <h3 className="font-semibold text-[#051D67]">
                                        Email
                                    </h3>

                                    <p className="mt-1 text-slate-600">
                                        contact@nextnix.in
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-5">

                                <div className="rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67]">
                                    <PhoneCall size={24} />
                                </div>

                                <div>

                                    <h3 className="font-semibold text-[#051D67]">
                                        Phone
                                    </h3>

                                    <p className="mt-1 text-slate-600">
                                        +91 XXXXX XXXXX
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-5">

                                <div className="rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67]">
                                    <MapPin size={24} />
                                </div>

                                <div>

                                    <h3 className="font-semibold text-[#051D67]">
                                        Location
                                    </h3>

                                    <p className="mt-1 text-slate-600">
                                        Giridih, Jharkhand, India
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-5">

                                <div className="rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67]">
                                    <Clock3 size={24} />
                                </div>

                                <div>

                                    <h3 className="font-semibold text-[#051D67]">
                                        Response Time
                                    </h3>

                                    <p className="mt-1 text-slate-600">
                                        Usually within 24 hours
                                    </p>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}
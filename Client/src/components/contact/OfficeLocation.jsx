import { motion } from "framer-motion";
import {
    MapPin,
    Clock3,
    Mail,
    Phone,
    Navigation,
} from "lucide-react";

export default function OfficeLocation() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="rounded-full border border-[#5EE587]/30 bg-[#5EE587]/10 px-5 py-2 text-sm font-semibold text-[#051D67]">
                        Office Location
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] md:text-5xl">
                        Visit or Reach Out to Us
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Although Nextnix is an online-first learning platform,
                        we're always happy to connect with learners,
                        educational institutions, and businesses.
                    </p>
                </motion.div>

                {/* Content */}

                <div className="mt-20 grid gap-10 lg:grid-cols-2">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="rounded-4xl border border-[#5EE587]/20 bg-white/70 p-10 backdrop-blur-xl"
                    >

                        <div className="space-y-8">

                            <div className="flex gap-5">

                                <div className="rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67]">
                                    <MapPin size={24} />
                                </div>

                                <div>

                                    <h3 className="font-space-grotesk text-2xl font-bold text-[#051D67]">
                                        Address
                                    </h3>

                                    <p className="mt-2 leading-7 text-slate-600">
                                        Giridih,
                                        <br />
                                        Jharkhand,
                                        <br />
                                        India
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-5">

                                <div className="rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67]">
                                    <Clock3 size={24} />
                                </div>

                                <div>

                                    <h3 className="font-semibold text-[#051D67]">
                                        Working Hours
                                    </h3>

                                    <p className="mt-2 text-slate-600">
                                        Monday – Saturday
                                    </p>

                                    <p className="text-slate-600">
                                        10:00 AM – 7:00 PM
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-5">

                                <div className="rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67]">
                                    <Mail size={24} />
                                </div>

                                <div>

                                    <h3 className="font-semibold text-[#051D67]">
                                        Email
                                    </h3>

                                    <p className="mt-2 text-slate-600">
                                        contact@nextnix.in
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-5">

                                <div className="rounded-2xl bg-[#5EE587]/15 p-4 text-[#051D67]">
                                    <Phone size={24} />
                                </div>

                                <div>

                                    <h3 className="font-semibold text-[#051D67]">
                                        Phone
                                    </h3>

                                    <p className="mt-2 text-slate-600">
                                        +91 XXXXX XXXXX
                                    </p>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                    {/* Right */}

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="overflow-hidden rounded-4xl border border-[#5EE587]/20 bg-white/70 shadow-xl backdrop-blur-xl"
                    >

                        <iframe
                            title="Nextnix Location"
                            src="https://www.google.com/maps?q=Giridih,Jharkhand,India&output=embed"
                            className="h-112.5 w-full"
                            loading="lazy"
                            allowFullScreen
                        />

                        <div className="border-t border-slate-200 p-6">

                            <a
                                href="https://maps.google.com/?q=Giridih,Jharkhand,India"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#051D67] px-6 py-3 font-semibold text-white transition hover:bg-[#06257F]"
                            >
                                <Navigation size={18} />

                                Open in Google Maps

                            </a>

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}
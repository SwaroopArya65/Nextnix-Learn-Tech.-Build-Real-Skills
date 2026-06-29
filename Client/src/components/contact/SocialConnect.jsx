import { motion } from "framer-motion";
import {
    Play,
    Briefcase,
    Camera,
    Code,
    Send,
    ArrowUpRight,
} from "lucide-react";

const socialLinks = [
    {
        icon: Play,
        title: "YouTube",
        description: "Learn coding, networking, career guidance, and real-world projects.",
        username: "@Nextnix",
        color: "hover:border-red-400",
        url: "https://youtube.com/@YOURCHANNEL",
    },
    {
        icon: Briefcase,
        title: "LinkedIn",
        description: "Stay updated with professional insights, workshops, and announcements.",
        username: "Nextnix",
        color: "hover:border-blue-500",
        url: "https://linkedin.com/company/YOURPAGE",
    },
    {
        icon: Camera,
        title: "Instagram",
        description: "Behind the scenes, reels, quick tips, and community updates.",
        username: "@nextnix",
        color: "hover:border-pink-500",
        url: "https://instagram.com/YOURPAGE",
    },
    {
        icon: Code,
        title: "Code",
        description: "Explore open-source projects, source code, and learning resources.",
        username: "Nextnix",
        color: "hover:border-slate-700",
        url: "https://Code.com/YOURUSERNAME",
    },
    {
        icon: Send,
        title: "Telegram",
        description: "Join our learning community for updates, notes, and discussions.",
        username: "Coming Soon",
        color: "hover:border-sky-500",
        url: "#",
    },
];

export default function SocialConnect() {
    return (
        <section className="py-24">

            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >

                    <span className="rounded-full border border-[#5EE587]/30 bg-[#5EE587]/10 px-5 py-2 text-sm font-semibold text-[#051D67]">
                        Stay Connected
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] md:text-5xl">
                        Connect with Nextnix Everywhere
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Follow us across our platforms to continue learning,
                        receive updates, explore projects, and become part of
                        the growing Nextnix community.
                    </p>

                </motion.div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

                    {socialLinks.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: .45,
                                    delay: index * .08,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -8,
                                }}
                                className={`group rounded-[28px] border border-[#5EE587]/20 bg-white/70 p-7 backdrop-blur-xl transition-all duration-300 hover:shadow-xl ${item.color}`}
                            >

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5EE587]/15 text-[#051D67] transition duration-300 group-hover:scale-110">

                                    <Icon size={30} />

                                </div>

                                <h3 className="mt-8 font-space-grotesk text-2xl font-bold text-[#051D67]">
                                    {item.title}
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-slate-600">
                                    {item.description}
                                </p>

                                <p className="mt-6 font-medium text-[#051D67]">
                                    {item.username}
                                </p>

                                <div className="mt-8 inline-flex items-center gap-2 font-semibold text-[#051D67]">

                                    Visit

                                    <ArrowUpRight
                                        size={18}
                                        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />

                                </div>

                            </motion.a>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}
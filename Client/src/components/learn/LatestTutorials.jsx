import { motion } from "framer-motion";
import {
    Clock3,
    CalendarDays,
    ArrowRight,
    PlayCircle,
} from "lucide-react";

const tutorials = [
    {
        title: "Learn HTML in One Shot",
        category: "Web Development",
        duration: "2h 15m",
        date: "Latest",
        thumbnail: "/images/tutorials/html.jpg",
        url: "https://youtube.com/",
    },
    {
        title: "JavaScript for Beginners",
        category: "JavaScript",
        duration: "1h 42m",
        date: "Latest",
        thumbnail: "/images/tutorials/javascript.jpg",
        url: "https://youtube.com/",
    },
    {
        title: "CCNA Networking Basics",
        category: "Networking",
        duration: "58 min",
        date: "Latest",
        thumbnail: "/images/tutorials/ccna.jpg",
        url: "https://youtube.com/",
    },
];

export default function LatestTutorials() {
    return (
        <section id="latest-tutorials" className="py-24">

            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full border border-[#5EE587]/30 bg-white/70 px-5 py-2 text-sm font-medium text-[#051D67] backdrop-blur-xl">
                        Latest Tutorials
                    </span>

                    <h2 className="mt-6 font-space-grotesk text-4xl font-bold text-[#051D67] md:text-5xl">
                        Keep Learning Every Week
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Explore our newest tutorials covering coding,
                        networking, Windows administration, and career
                        preparation. Fresh content is added regularly to
                        keep your skills up to date.
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-16 grid gap-8 lg:grid-cols-3">

                    {tutorials.map((tutorial, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            transition={{ duration: .25 }}
                            className="overflow-hidden rounded-3xl border border-[#5EE587]/20 bg-white/60 backdrop-blur-xl"
                        >

                            {/* Thumbnail */}

                            <div className="group relative h-56 overflow-hidden">

                                <img
                                    src={tutorial.thumbnail}
                                    alt={tutorial.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100">

                                    <PlayCircle
                                        size={60}
                                        className="text-white"
                                    />

                                </div>

                            </div>

                            {/* Content */}

                            <div className="p-7">

                                <span className="rounded-full bg-[#5EE587]/15 px-4 py-2 text-sm font-medium text-[#051D67]">
                                    {tutorial.category}
                                </span>

                                <h3 className="mt-6 text-2xl font-bold text-[#051D67]">
                                    {tutorial.title}
                                </h3>

                                {/* Meta */}

                                <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-500">

                                    <div className="flex items-center gap-2">

                                        <Clock3 size={16} />

                                        {tutorial.duration}

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <CalendarDays size={16} />

                                        {tutorial.date}

                                    </div>

                                </div>

                                {/* Button */}

                                <a
                                    href={tutorial.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group mt-8 inline-flex items-center gap-2 font-semibold text-[#051D67]"
                                >

                                    Watch Tutorial

                                    <ArrowRight
                                        size={18}
                                        className="transition-transform group-hover:translate-x-1"
                                    />

                                </a>

                            </div>

                        </motion.div>

                    ))}

                </div>

                {/* Bottom Button */}

                <div className="mt-16 text-center">

                    <a
                        href="https://youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#051D67] px-8 py-4 font-semibold text-white transition hover:bg-[#06257F]"
                    >

                        View All Tutorials

                        <ArrowRight size={18} />

                    </a>

                </div>

            </div>

        </section>
    );
}
import { X, Rocket, Bell, Sparkles } from "lucide-react";

export default function ComingSoonModal({
    isOpen,
    onClose,
    title,
    description,
}) {
    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 backdrop-blur-sm p-5"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#08142E] text-white shadow-2xl animate-[fadeIn_.3s_ease]"
            >
                {/* Close */}

                <button
                    onClick={onClose}
                    className="absolute right-5 top-5 rounded-full p-2 transition hover:bg-white/10"
                >
                    <X size={20} />
                </button>

                {/* Header */}

                <div className="bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500 p-8 text-center">

                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">

                        <Rocket
                            size={42}
                            className="text-white"
                        />

                    </div>

                    <h2 className="text-3xl font-bold">

                        Coming Soon 🚀

                    </h2>

                    <p className="mt-2 text-blue-100">

                        We're building something amazing.

                    </p>

                </div>

                {/* Content */}

                <div className="space-y-6 p-8">

                    <div>

                        <h3 className="mb-3 text-2xl font-semibold">

                            {title}

                        </h3>

                        <p className="text-gray-300 leading-7">

                            {description}

                        </p>

                    </div>

                    {/* Progress */}

                    <div>

                        <div className="mb-2 flex items-center justify-between text-sm">

                            <span className="flex items-center gap-2">

                                <Sparkles size={16} />

                                Development Progress

                            </span>

                            <span>80%</span>

                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-gray-700">

                            <div className="h-full w-4/5 rounded-full bg-linear-to-r from-cyan-400 to-blue-500"></div>

                        </div>

                    </div>

                    {/* Features */}

                    <div className="rounded-2xl bg-white/5 p-5">

                        <h4 className="mb-4 font-semibold">

                            What's Coming

                        </h4>

                        <ul className="space-y-3 text-gray-300">

                            <li>✔ Practical Learning Experience</li>

                            <li>✔ Industry Expert Sessions</li>

                            <li>✔ Certification</li>

                            <li>✔ Lifetime Learning Support</li>

                        </ul>

                    </div>

                    {/* Footer */}

                    <div className="flex flex-col gap-3 sm:flex-row">

                        <button
                            onClick={onClose}
                            className="flex-1 rounded-xl border border-white/10 px-5 py-3 font-medium transition hover:bg-white/10"
                        >
                            Continue Browsing
                        </button>

                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-700"
                        >
                            <Bell size={18} />

                            Subscribe Updates
                        </a>

                    </div>

                </div>

            </div>
        </div>
    );
}
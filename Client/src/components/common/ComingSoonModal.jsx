import { useEffect } from "react";
import { X, Sparkles } from "lucide-react";

const ComingSoonModal = ({
    isOpen,
    onClose,
    title = "Coming Soon",
    description = "We're working hard to launch this feature soon.",
}) => {

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl p-8 animate-[fadeIn_.25s_ease]"
            >

                {/* Close Button */}

                <button
                    onClick={onClose}
                    className="absolute right-5 top-5 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
                >
                    <X size={22} />
                </button>

                {/* Icon */}

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-green-500 text-white shadow-lg">

                    <Sparkles size={34} />

                </div>

                {/* Heading */}

                <h2 className="text-center text-3xl font-bold text-gray-900">

                    {title}

                </h2>

                {/* Description */}

                <p className="mt-4 text-center leading-7 text-gray-600">

                    {description}

                </p>

                {/* Divider */}

                <div className="my-8 h-px bg-gray-200"></div>

                {/* Bottom Text */}

                <div className="space-y-2 text-center">

                    <p className="font-semibold text-blue-700">

                        🚀 Coming Soon

                    </p>

                    <p className="text-sm text-gray-500">

                        We're building something amazing for the Nextnix community.
                        Stay connected and be the first to explore it.

                    </p>

                </div>

                {/* Button */}

                <button
                    onClick={onClose}
                    className="mt-8 w-full rounded-xl bg-linear-to-r from-blue-600 to-green-500 py-3 font-semibold text-white transition hover:opacity-90 cursor-pointer"
                >

                    Got it

                </button>

            </div>
        </div>
    );
};

export default ComingSoonModal;
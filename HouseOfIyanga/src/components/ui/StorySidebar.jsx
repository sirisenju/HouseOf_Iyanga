import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

function StorySidebar({ isOpen, onClose, story }) {
    return (
        <AnimatePresence>
            {isOpen && story && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black z-40"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed right-0 top-0 h-full w-full md:w-[400px] bg-white z-50 shadow-2xl overflow-y-auto"
                    >
                        <div className="p-6">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 transition-colors"
                            >
                                <FaTimes size={24} />
                            </button>

                            <div className="mt-12">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
                                />
                                <h2 className="text-3xl font-playfairDisplay text-Intermediary-theme mb-4">
                                    {story.title}
                                </h2>
                                <div className="w-16 h-1 bg-Secondary-theme mb-6"></div>
                                <p className="text-gray-600 leading-relaxed font-manrope">
                                    {story.description}
                                </p>

                                <div className="mt-8 p-4 bg-Home-bg rounded-lg">
                                    <h3 className="font-bold text-Intermediary-theme mb-2">Inspiration</h3>
                                    <p className="text-sm text-gray-500 italic">
                                        "{story.inspiration}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default StorySidebar;

import React, { useState } from "react";
import _Header from "../sections/_Header";
import _Footer from "../sections/_Footer";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../animations/variants";

function Gallery() {
    const [selectedId, setSelectedId] = useState(null);

    const images = Array.from({ length: 9 }, (_, i) => ({
        id: i + 1,
        src: `/galleryImages/${i + 1}.jpg`,
        alt: `Gallery Image ${i + 1}`,
    }));

    return (
        <section className="bg-white min-h-screen flex flex-col">
            <_Header />

            <main className="flex-grow pt-28 pb-10 px-4 sm:px-10">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-4xl md:text-6xl font-medium mb-4"
                    >
                        Captured Moments
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-Secondary-theme text-sm md:text-base max-w-2xl mx-auto"
                    >
                        A glimpse into the artistry and elegance we bring to life.
                    </motion.p>
                </div>

                {/* Gallery Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
                >
                    {images.map((image) => (
                        <motion.div
                            key={image.id}
                            variants={fadeInUp}
                            layoutId={`card-container-${image.id}`}
                            onClick={() => setSelectedId(image.id)}
                            className="cursor-pointer break-inside-avoid overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow"
                        >
                            <motion.img
                                src={image.src}
                                alt={image.alt}
                                layoutId={`card-image-${image.id}`}
                                whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
                                initial={{ filter: "grayscale(100%)", scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="w-full h-80 object-cover"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Lightbox / Modal */}
                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        >
                            <motion.div
                                layoutId={`card-container-${selectedId}`}
                                className="relative max-w-4xl max-h-[90vh] w-full bg-transparent"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <motion.img
                                    src={images.find(img => img.id === selectedId)?.src}
                                    layoutId={`card-image-${selectedId}`}
                                    className="w-full h-full object-contain max-h-[85vh] rounded-md"
                                />
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute -top-10 right-0 text-white text-xl p-2"
                                >
                                    Close
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <_Footer />
        </section>
    );
}

export default Gallery;

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stories = [
    {
        id: 1,
        title: "Radiant Skin Therapy",
        image: "/contentImage/faceskinModel.jpg",
        description: "Our signature skin therapy focuses on deep hydration and rejuvenation. Using organic ingredients, we restore your skin's natural glow.",
        inspiration: "The purity of nature and the resilience of healthy skin."
    },
    {
        id: 2,
        title: "Holistic Massage",
        image: "/contentImage/massageBack.jpg",
        description: "Experience total relaxation with our holistic massage techniques. Designed to relieve tension and promote mental clarity.",
        inspiration: "The rhythmic flow of ocean waves calming the shore."
    },
    {
        id: 3,
        title: "Elegant Hair Styling",
        image: "/contentImage/hair.jpg",
        description: "From classic cuts to modern styles, our hair experts create looks that define your personality.",
        inspiration: "The fluid movement of silk in the wind."
    },
    {
        id: 4,
        title: "Rejuvenating Spa Day",
        image: "/contentImage/spa.jpg",
        description: "Immerse yourself in a full day of pampering. Our spa packages offer a complete escape from the daily grind.",
        inspiration: "A hidden oasis in the middle of a bustling city."
    },
    {
        id: 5,
        title: "Advanced Facial Care",
        image: "/contentImage/faceskinModel2.jpg",
        description: "Targeted treatments for specific skin concerns. We use advanced technology combined with traditional techniques.",
        inspiration: "The precision of science meeting the art of beauty."
    },
    {
        id: 6,
        title: "Body Wellness",
        image: "/contentImage/bodyTreatment.jpg",
        description: "Complete body treatments that nourish and tone. Feel confident and revitalized in your own skin.",
        inspiration: "The strength and grace of the human form."
    }
];

function ParallaxImage({ story, onClick }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <div
            ref={ref}
            className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => onClick(story)}
        >
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%]">
                <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </motion.div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-white text-2xl font-playfairDisplay">{story.title}</h3>
                    <p className="text-white/80 text-sm mt-2 font-manrope">View Story</p>
                </div>
            </div>
        </div>
    );
}

function ParallaxSection({ onSelectStory }) {
    return (
        <section className="bg-white py-20 px-4 md:px-10 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-playfairDisplay text-Intermediary-theme mb-4">Our Gallery</h2>
                    <p className="text-Secondary-theme max-w-2xl mx-auto">
                        Discover the stories and inspiration behind our most iconic looks. Click on an image to reveal the journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {stories.map((story, index) => (
                        <div key={story.id} className={index % 2 === 0 ? "md:mt-0" : "md:mt-20"}>
                            <ParallaxImage story={story} onClick={onSelectStory} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ParallaxSection;

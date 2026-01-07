export const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", bounce: 0.3, duration: 1.2 }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Delay between each child animation
            delayChildren: 0.1
        }
    }
};

export const hoverBounce = {
    scale: 1.05,
    filter: "grayscale(0%)", // Specific requirement: Grayscale to Full Color (optional but requested)
    transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
    }
};

export const imageInitial = {
    filter: "grayscale(100%)", // Start grayscale
    scale: 1
}

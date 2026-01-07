import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useReservation } from "../context/ReservationContext";

function HamburgerComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useReservation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const openReservation = () => {
    toggleMenu();
    openModal();
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, y: 50 },
    open: { opacity: 1, y: 0 }
  }


  return (
    <div className="">
      {/* Burger Button */}
      <button
        onClick={toggleMenu}
        className="relative z-50 w-10 h-10 flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
      >
        <span
          className={`block w-8 h-0.5 bg-black transform transition-all duration-300 ease-out ${isOpen ? "rotate-45 translate-y-2 bg-white" : ""
            }`}
        />
        <span
          className={`block w-8 h-0.5 bg-black transform transition-all duration-300 ease-out ${isOpen ? "opacity-0" : "opacity-100"
            }`}
        />
        <span
          className={`block w-8 h-0.5 bg-black transform transition-all duration-300 ease-out ${isOpen ? "-rotate-45 -translate-y-2 bg-white" : ""
            }`}
        />
      </button>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 w-full h-screen bg-Secondary-theme z-40 flex flex-col items-center justify-center"
          >
            <motion.div
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center space-y-8"
            >
              <motion.div variants={itemVariants}>
                <Link to="/" onClick={toggleMenu} className="font-manrope text-4xl text-white hover:text-Primary-theme transition-colors">Home</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link to="/about" onClick={toggleMenu} className="font-manrope text-4xl text-white hover:text-Primary-theme transition-colors">About</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link to="/service" onClick={toggleMenu} className="font-manrope text-4xl text-white hover:text-Primary-theme transition-colors">Services</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link to="/gallery" onClick={toggleMenu} className="font-manrope text-4xl text-white hover:text-Primary-theme transition-colors">Gallery</Link>
              </motion.div>
              <motion.div variants={itemVariants} className="pt-8">
                <button onClick={openReservation} className="px-8 py-3 bg-white text-Secondary-theme rounded-full font-bold hover:bg-Primary-theme transition-colors">
                  RESERVATION
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HamburgerComponent;

import React from "react";
import HamburgerComponent from "../HamburgerComponent";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useReservation } from "../../context/ReservationContext";

function _Header() {
  const location = useLocation();
  const { openModal } = useReservation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/service", label: "Services" },
    { path: "/gallery", label: "Gallery" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md flex justify-between items-center px-7 w-full h-20 z-30 fixed border-b-2 border-Footer-theme">
      <Link to="/" className="text-3xl md:text-3xl font-medium">HOUSE OF IYANGA.</Link>
      <div className="hidden md:flex">
        <div className="flex justify-center items-center mr-7 gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative pr-2 font-manrope text-lg"
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-[2px] w-full bg-Secondary-theme"
                />
              )}
            </Link>
          ))}
        </div>
        <button
          className="bg-Primary-theme px-7 py-1 font-manrope hover:bg-Secondary-theme transition-colors"
          onClick={() => openModal()}
        >
          RESERVATION
        </button>
      </div>
      <div className="md:hidden">
        <HamburgerComponent />
      </div>
    </header>
  );
}

export default _Header;

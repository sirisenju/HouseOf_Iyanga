import React from "react";
import HamburgerComponent from "../HamburgerComponent";

function _Header() {
  return (
    <header className="bg-white flex justify-between items-center px-7 w-full h-20 z-30 fixed border-b-2 border-Footer-theme">
      <p className="text-4xl md:text-5xl">Beautyness.</p>
      <div className="hidden md:flex">
        <div className="flex justify-center items-center mr-7">
          <div className="pr-6 font-manrope text-lg">Home</div>
          <div className="pr-6 font-manrope text-lg">About</div>
          <div className="pr-6 font-manrope text-lg">Services</div>
          <div className="pr-6 font-manrope text-lg">Contact</div>
        </div>
        <button
          className="bg-Primary-theme px-7 py-1 font-manrope"
          onCdivck={"#"}
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

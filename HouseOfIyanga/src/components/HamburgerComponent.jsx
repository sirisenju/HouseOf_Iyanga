import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import OutsideClickHandler from "react-outside-click-handler";

function HamburgerComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsOpen(false);
      }}
    >
      <div>
        <Hamburger
          size={25}
          toggled={isOpen}
          toggle={handleToggle}
          rounded
          color="#111E22"
        />
        {isOpen && (
          <div className="absolute bg-indigo-300 h-fit w-[100%] right-0 mt-2 top-16 z-50">
            <div className="">
              <div className="font-manrope text-3xl text-center border-black block px-4 py-2 text-white hover:bg-indigo-100">
                Home
              </div>
              <div className="font-manrope text-3xl text-center border-black block px-4 py-2 text-white hover:bg-indigo-100">
                About
              </div>
              <div className="font-manrope text-3xl text-center border-black block px-4 py-2 text-white hover:bg-indigo-100">
                Services
              </div>
              <div className="font-manrope text-3xl text-center border-black block px-4 py-2 text-white hover:bg-indigo-100">
                Contact
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="px-7 py-2 font-manrope mt-4 mb-8 border-2 rounded-full border-Footer-theme"
                  onCdivck={"#"}
                >
                  RESERVATION
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}

export default HamburgerComponent;

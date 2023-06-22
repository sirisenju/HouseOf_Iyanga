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
      <div className="relative">
        <Hamburger
          size={25}
          toggled={isOpen}
          toggle={handleToggle}
          rounded
          color="#111E22"
        />
        {isOpen && (
          <div className="absolute bg-indigo-300 h-max w-60 right-2 mt-2 top-14 py-4 rounded-md">
            <div className="">
              <div className="font-manrope text-3xl text-center border-b-2 border-black block px-4 py-2 text-white hover:bg-indigo-100">
                Home
              </div>
              <div className="font-manrope text-3xl text-center border-b-2 border-black block px-4 py-2 text-white hover:bg-indigo-100">
                About
              </div>
              <div className="font-manrope text-3xl text-center border-b-2 border-black block px-4 py-2 text-white hover:bg-indigo-100">
                Services
              </div>
              <div className="font-manrope text-3xl text-center border-b-2 border-black block px-4 py-2 text-white hover:bg-indigo-100">
                Contact
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="bg-Primary-theme px-7 py-1 font-manrope "
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

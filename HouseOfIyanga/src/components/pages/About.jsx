import React from "react";
import _Header from "../sections/_Header";
import _Footer from "../sections/_Footer";

function About() {
  return (
    <main className="pt-[80px]">
      {/**First section start.......................................................... */}
      <section className="w-full">
        <div
          className="w-full h-[280px] flex justify-center items-center"
          style={{ backgroundImage: "url('/contentImage/bgImg1.jpg')" }}
        >
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs text-white">SHORT STORY ABOUT US.</p>
            <h2 className="font-medium text-3xl pt-6 pb-6 text-white">
              THE BIG STORY BEHIND OUR BEAUTYNESS CENTER
            </h2>
            <button className="px-6 py-2 bg-Primary-theme text-white text-sm">
              MAKE A RESERVATION
            </button>
          </div>
        </div>
      </section>
      {/**First section end.......................................................... */}

      {/**second section start.......................................................... */}
      <section className="w-full h-[75vh] flex justify-center items-center bg-Home-bg">
        <div className="max-w-xl mx-auto p-5">
          <p className="text-sm text-center text-Primary-theme">OUR VALUES.</p>
          <h2 className="font-medium text-3xl pl-4">
            The work values we thrive for.
          </h2>
          <div className="max-w-md h-full flex mb-4 mt-6 border-b-2 border-gray-300">
            <img
              className="h-20 w-24 object-contain"
              src="/contentImage/beautyExperts.png"
              alt=""
            />
            <div className="pl-2 pb-6">
              <h3 className="font-medium text-xl pt-1">Beauty Experts.</h3>
              <p className="text-sm pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                eveniet fuga voluptatum consectetur! Rerum!
              </p>
            </div>
          </div>
          <div className="max-w-md h-full flex mb-4 border-b-2 border-gray-300">
            <img
              className="h-20 w-24 object-contain"
              src="/contentImage/greatServices.png"
              alt=""
            />
            <div className="pl-2 pb-6">
              <h3 className="font-medium text-xl pt-1">Great Services.</h3>
              <p className="text-sm pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                eveniet fuga voluptatum consectetur! Rerum!
              </p>
            </div>
          </div>
          <div className="max-w-md h-full flex border-b-2 border-gray-300">
            <img
              className="h-20 w-24 object-contain"
              src="/contentImage/genuein.png"
              alt=""
            />
            <div className="pl-2 pb-6">
              <h3 className="font-medium text-xl pt-1">Great Services.</h3>
              <p className="text-sm pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                eveniet fuga voluptatum consectetur! Rerum!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/**second section end.......................................................... */}
    </main>
  );
}

export default About;

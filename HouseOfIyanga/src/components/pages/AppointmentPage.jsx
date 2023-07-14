import React from "react";
import { FaBeer, FaCheckCircle, FaCheckDouble, FaRegCheckCircle } from "react-icons/fa"

function AppointmentPage() {
  return (
    <main className="pt-[80px]">
        {/**first section starts........................................................*/}
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
      {/**first section ends........................................................*/}

      {/**second section starts........................................................*/}
      <section className="w-full h-[80vh]">
        <div className="w-full flex">
            <div className="w-[60%] flex justify-center items-center">
                <div className="max-w-lg p-4">
                    <h3 className=" text-sm pt-2">WHAT INCLUDES?</h3>
                    <p className="text-4xl font-medium pt-4 pb-5">About the service.</p>
                    <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil aspernatur, 
                        autem hic tenetur officia praesentium nulla ex tempore 
                        enim repellat ipsa! Aliquam tempora adipisci et repellat dolores porro assumenda.
                    </p>
                    <p className=" text-lg pt-5 font-semibold pb-2">Our Methodology: </p>
                    <div className="flex pb-4">
                        <FaRegCheckCircle size={40} color="#7A9CA5"/>
                        <div className="pl-4"><span className="text-lg font-semibold">The Assessment stage</span><br /> Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Magni distinctio quibusdam molestiae.</div>
                    </div>
                    <div className="flex pb-4">
                        <FaRegCheckCircle size={40} color="#7A9CA5"/>
                        <div className="pl-4"><span className="text-lg font-semibold">The Initialization stage</span><br /> Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Magni distinctio quibusdam molestiae.</div>
                    </div>
                    <div className="flex pb-4">
                        <FaRegCheckCircle size={40} color="#7A9CA5"/>
                        <div className="pl-4"><span className="text-lg font-semibold">The Treatment stage</span><br /> Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Magni distinctio quibusdam molestiae.</div>
                    </div>
                </div>
            </div>
            <div className="w-[40%] bg-green-400">
                <img className="object-contain object-center w-full" src="/contentImage/faceMask1.jpg" alt="" />
            </div>
        </div>
      </section>
      {/**second section ends........................................................*/}
    </main>
  );
}

export default AppointmentPage;

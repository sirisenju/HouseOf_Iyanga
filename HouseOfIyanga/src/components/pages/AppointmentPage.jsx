import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useReservation } from "../../context/ReservationContext";

function AppointmentPage() {
  const { openModal } = useReservation();
  return (
    <main className="pt-[80px]">
      {/**first section starts........................................................*/}
      <section className="w-full">
        <div
          className="w-full py-20 flex justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/contentImage/bgImg1.jpg')" }}
        >
          <div className="max-w-xl mx-auto text-center px-4">
            <p className="text-xs text-white">SHORT STORY ABOUT US.</p>
            <h2 className="font-medium text-3xl pt-6 pb-6 text-white">
              THE BIG STORY BEHIND HOUSE OF IYANGA
            </h2>
            <button
              onClick={() => openModal()}
              className="px-6 py-2 bg-Primary-theme text-white text-sm hover:bg-Secondary-theme transition-colors"
            >
              MAKE A RESERVATION
            </button>
          </div>
        </div>
      </section>
      {/**first section ends........................................................*/}

      {/**second section starts........................................................*/}
      <section className="w-full min-h-[80vh]">
        <div className="w-full flex flex-col md:flex-row h-full">
          <div className="w-full md:w-[60%] flex justify-center items-center">
            <div className="max-w-lg p-4 md:p-8">
              <h3 className=" text-sm pt-2">WHAT INCLUDES?</h3>
              <p className="text-4xl font-medium pt-4 pb-5">About the service.</p>
              <p className="text-lg">Our signature beauty service covers everything from skin prep and foundation matching
                to expertly blended eye and lip looks. Every session begins with a one-on-one consultation so we understand
                your event, preferences, and skin type before a single brush touches your face.
              </p>
              <p className=" text-lg pt-5 font-semibold pb-2">Our Methodology: </p>
              <div className="flex pb-4">
                <FaRegCheckCircle size={40} color="#7A9CA5" />
                <div className="pl-4"><span className="text-lg font-semibold">The Assessment stage</span><br /> We analyze your skin type, undertone, and facial structure
                  to choose the right primer, foundation shade, and techniques for a seamless, long-wearing finish.</div>
              </div>
              <div className="flex pb-4">
                <FaRegCheckCircle size={40} color="#7A9CA5" />
                <div className="pl-4"><span className="text-lg font-semibold">The Initialization stage</span><br /> Skin is prepped with cleansing, moisturizing, and priming.
                  We set up your personalized product palette and tools for hygienic, precision application.</div>
              </div>
              <div className="flex pb-4">
                <FaRegCheckCircle size={40} color="#7A9CA5" />
                <div className="pl-4"><span className="text-lg font-semibold">The Treatment stage</span><br /> Your full makeup application—complexion, eyes, brows, and lips—is refined
                  with setting spray and touch-up guidance so your look stays fresh for hours.</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%] min-h-[400px] md:min-h-full">
            <img className="object-cover h-full w-full" src="/galleryImages/img8.jpeg" alt="" />
          </div>
        </div>
      </section>
      {/**second section ends........................................................*/}
    </main>
  );
}

export default AppointmentPage;

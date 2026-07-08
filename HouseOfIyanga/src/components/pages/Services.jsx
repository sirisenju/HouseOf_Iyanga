import React from "react";
import _Header from "../sections/_Header";
import _Footer from "../sections/_Footer";

function Services() {
  const priceList = [
    {
      id: 1,
      item: "Full makeup",
      price: "17.00",
      description: "Flawless foundation, contour, and finishing for weddings, events, or nights out.",
    },
    {
      id: 2,
      item: "Face mask",
      price: "7.20",
      description: "Deep-cleansing treatments that hydrate, brighten, and revive tired skin.",
    },
    {
      id: 3,
      item: "Eyebrows shaping",
      price: "11.63",
      description: "Precision shaping and tinting to frame your face and define your look.",
    },
    {
      id: 4,
      item: "Hair styling",
      price: "16.62",
      description: "Blowouts, updos, and event-ready styles finished with heat protection.",
    },
  ];
  return (
    <section>
      <_Header />
      <main className="pt-[100px]">
        {/*first section start................................................ */}
        <section className="w-full bg-white">
          {/* Section heading */}
          <div className="flex justify-center py-8">
            <div className="text-center max-w-sm">
              <p className="sm:text-xs max-[639px]:text-sm text-Secondary-theme">
                OUR SERVICES
              </p>
              <h2 className="sm:text-3xl max-[639px]:text-4xl font-medium">
                We are Experienced in making you very Beautiful.
              </h2>
            </div>
          </div>

          {/* items wrapper — centered, constrained width */}
          <div className="max-w-4xl mx-auto w-full">

          {/* item 1 */}
          <div className="flex flex-col min-[1400px]:flex-row w-full">
            <img
              className="max-[1400px]:h-80 w-full min-[1400px]:w-1/2 object-cover"
              src="/contentImage/faceMask1.jpg"
              alt=""
            />
            <div className="min-h-[30rem] w-full min-[1400px]:w-1/2 relative flex flex-col">
              <div className="p-6 flex-1">
                {priceList.map((product) => (
                  <div key={product.id}>
                    <div className="w-full border-b-2 py-1">
                      <ul className="leaders">
                        <li>
                          <span className="text-lg font-semibold">{product.item}</span>{" "}
                          <span className="pl-2 font-medium">from ${product.price}</span>
                        </li>
                      </ul>
                      <p>{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 pb-6 flex">
                <button className="text-xs px-4 py-2 border-2 border-Secondary-theme mx-auto">
                  GET AN APPOINTMENT
                </button>
              </div>
              <div className="h-14 w-14 bg-Secondary-theme absolute bottom-0 left-0 max-[1400px]:hidden" />
            </div>
          </div>

          {/* item 2 */}
          <div className="flex flex-col min-[1400px]:flex-row-reverse w-full">
            <img
              className="max-[1400px]:h-80 w-full min-[1400px]:w-1/2 object-cover"
              src="/contentImage/faceMask2.jpg"
              alt=""
            />
            <div className="min-h-[30rem] w-full min-[1400px]:w-1/2 relative flex flex-col">
              <div className="p-6 flex-1 mt-6">
                {priceList.map((product) => (
                  <div key={product.id}>
                    <div className="w-full border-b-2 py-1">
                      <ul className="leaders">
                        <li>
                          <span className="text-lg font-semibold">{product.item}</span>{" "}
                          <span className="pl-2 font-medium">from ${product.price}</span>
                        </li>
                      </ul>
                      <p>{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 pb-6 flex">
                <button className="text-xs px-4 py-2 border-2 border-Secondary-theme mx-auto">
                  GET AN APPOINTMENT
                </button>
              </div>
              <div className="h-14 w-14 bg-Secondary-theme absolute top-0 right-0 max-[1400px]:hidden" />
            </div>
          </div>

          {/* item 3 */}
          <div className="flex flex-col min-[1400px]:flex-row w-full">
            <img
              className="max-[1400px]:h-80 w-full min-[1400px]:w-1/2 object-cover"
              src="/contentImage/faceMask1.jpg"
              alt=""
            />
            <div className="min-h-[30rem] w-full min-[1400px]:w-1/2 relative flex flex-col">
              <div className="p-6 flex-1">
                {priceList.map((product) => (
                  <div key={product.id}>
                    <div className="w-full border-b-2 py-1">
                      <ul className="leaders">
                        <li>
                          <span className="text-lg font-semibold">{product.item}</span>{" "}
                          <span className="pl-2 font-medium">from ${product.price}</span>
                        </li>
                      </ul>
                      <p>{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 pb-6 flex">
                <button className="text-xs px-4 py-2 border-2 border-Secondary-theme mx-auto">
                  GET AN APPOINTMENT
                </button>
              </div>
              <div className="h-14 w-14 bg-Secondary-theme absolute bottom-0 left-0 max-[1400px]:hidden" />
            </div>
          </div>

          {/* item 4 */}
          <div className="flex flex-col min-[1400px]:flex-row-reverse w-full">
            <img
              className="max-[1400px]:h-80 w-full min-[1400px]:w-1/2 object-cover"
              src="/contentImage/faceMask2.jpg"
              alt=""
            />
            <div className="min-h-[30rem] w-full min-[1400px]:w-1/2 relative flex flex-col">
              <div className="p-6 flex-1 mt-6">
                {priceList.map((product) => (
                  <div key={product.id}>
                    <div className="w-full border-b-2 py-1">
                      <ul className="leaders">
                        <li>
                          <span className="text-lg font-semibold">{product.item}</span>{" "}
                          <span className="pl-2 font-medium">from ${product.price}</span>
                        </li>
                      </ul>
                      <p>{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 pb-6 flex">
                <button className="text-xs px-4 py-2 border-2 border-Secondary-theme mx-auto">
                  GET AN APPOINTMENT
                </button>
              </div>
              <div className="h-14 w-14 bg-Secondary-theme absolute top-0 right-0 max-[1400px]:hidden" />
            </div>
          </div>

          {/* item 5 */}
          <div className="flex flex-col min-[1400px]:flex-row w-full">
            <img
              className="max-[1400px]:h-80 w-full min-[1400px]:w-1/2 object-cover"
              src="/contentImage/faceMask1.jpg"
              alt=""
            />
            <div className="min-h-[30rem] w-full min-[1400px]:w-1/2 relative flex flex-col">
              <div className="p-6 flex-1">
                {priceList.map((product) => (
                  <div key={product.id}>
                    <div className="w-full border-b-2 py-1">
                      <ul className="leaders">
                        <li>
                          <span className="text-lg font-semibold">{product.item}</span>{" "}
                          <span className="pl-2 font-medium">from ${product.price}</span>
                        </li>
                      </ul>
                      <p>{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 pb-6 flex">
                <button className="text-xs px-4 py-2 border-2 border-Secondary-theme mx-auto">
                  GET AN APPOINTMENT
                </button>
              </div>
              <div className="h-14 w-14 bg-Secondary-theme absolute bottom-0 left-0 max-[1400px]:hidden" />
            </div>
          </div>

          </div>{/* end items wrapper */}
        </section>
        {/*first section end................................................ */}

        {/* Infinite Image Scroller Section */}
        <section className="w-full py-16 bg-white overflow-hidden flex flex-col gap-6">
          <div className="text-center mb-6">
            <p className="text-xs text-Secondary-theme uppercase tracking-wider font-manrope">Our Work</p>
            <h2 className="text-3xl font-medium font-playfairDisplay mt-2">Transformations & Artistry</h2>
          </div>

          <div className="flex flex-col gap-0 w-full">
            {/* Row 1: Left to Right (3 images) */}
            <div className="w-full overflow-hidden flex relative">
              {/* Soft gradient fade overlays on sides for premium look */}
              <div className="absolute top-0 left-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 right-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-scroll-right">
                <div className="flex shrink-0">
                  <img src="/galleryImages/1.jpg" className="w-[300px] md:w-[400px] h-[220px] md:h-[280px] object-cover shadow-sm" alt="Gallery 1" />
                  <img src="/galleryImages/2.jpg" className="w-[300px] md:w-[400px] h-[220px] md:h-[280px] object-cover shadow-sm" alt="Gallery 2" />
                  <img src="/galleryImages/3.jpg" className="w-[300px] md:w-[400px] h-[220px] md:h-[280px] object-cover shadow-sm" alt="Gallery 3" />
                </div>
                <div className="flex shrink-0" aria-hidden="true">
                  <img src="/galleryImages/1.jpg" className="w-[300px] md:w-[400px] h-[220px] md:h-[280px] object-cover shadow-sm" alt="Gallery 1 clone" />
                  <img src="/galleryImages/2.jpg" className="w-[300px] md:w-[400px] h-[220px] md:h-[280px] object-cover shadow-sm" alt="Gallery 2 clone" />
                  <img src="/galleryImages/3.jpg" className="w-[300px] md:w-[400px] h-[220px] md:h-[280px] object-cover shadow-sm" alt="Gallery 3 clone" />
                </div>
              </div>
            </div>

            {/* Row 2: Right to Left (4 images) */}
            <div className="w-full overflow-hidden flex relative">
              <div className="absolute top-0 left-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 right-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              <div className="flex animate-scroll-left">
                <div className="flex shrink-0">
                  <img src="/galleryImages/4.jpg" className="w-[300px] md:w-[400px] h-[220px] md:h-[280px] object-cover shadow-sm" alt="Gallery 4" />
                  <img src="/galleryImages/5.jpg" className="w-[300px] md:w-[400px] h-[220px] md:h-[280px] object-cover shadow-sm" alt="Gallery 5" />
                  <img src="/galleryImages/6.jpg" className="w-[300px] md:w-[400px] h-[220px] md:h-[280px] object-cover shadow-sm" alt="Gallery 6" />
                  <img src="/galleryImages/7.jpg" className="w-[300px] md:w-[400px] h-[220px] md:h-[280px] object-cover shadow-sm" alt="Gallery 7" />
                </div>
                <div className="flex shrink-0" aria-hidden="true">
                  <img src="/galleryImages/4.jpg" className="w-[300px] md:w-[400px] h-[220px] md:h-[280px] object-cover shadow-sm" alt="Gallery 4 clone" />
                  <img src="/galleryImages/5.jpg" className="w-[300px] md:w-[400px] h-[220px] md:h-[280px] object-cover shadow-sm" alt="Gallery 5 clone" />
                  <img src="/galleryImages/6.jpg" className="w-[300px] md:w-[400px] h-[220px] md:h-[280px] object-cover shadow-sm" alt="Gallery 6 clone" />
                  <img src="/galleryImages/7.jpg" className="w-[300px] md:w-[400px] h-[220px] md:h-[280px] object-cover shadow-sm" alt="Gallery 7 clone" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*second section start................................................ */}
        <section className="w-full h-[60vh] bg-Home-bg flex items-center justify-center">
          <div>
            <div className="max-w-lg h-full max-[1190px]:max-w-lg text-center">
              <p className="sm:text-xs max-[639px]:text-lg">FLAT DISCOUNT</p>
              <h2 className="sm:text-3xl max-[639px]:text-4xl font-semibold pt-3">
                Claim up to 50% offer on the most popular services.....
              </h2>
              <p className="text-lg pt-3 pb-3">
                Celebrate your next milestone with up to 50% off our most-booked services—bridal packages,
                full glam sessions, and signature facials. Limited slots available each month, so reserve early to lock in your date.
              </p>
              <div className="max-[350px]:inline mx-auto flex justify-between items-center border-2 max-[350px]:border-0 border-Secondary-theme h-28 max-w-sm">
                <div className="p-5">
                  <span className="text-lg">
                    Mail us:
                    <br />
                    beautyness@gmail.com
                  </span>
                  <br />
                  <span className="text-lg">
                    Call us:
                    <br />
                    +234 983 4564 554{" "}
                  </span>
                </div>
                <img
                  className="h-32 max-[280px]:w-full max-[280px]:object-fill w-32 object-contain"
                  src="/contentImage/Offer.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/*second section end................................................ */}
      </main>
      <_Footer />
    </section>
  );
}

export default Services;

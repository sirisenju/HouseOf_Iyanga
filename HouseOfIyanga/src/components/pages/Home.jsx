import React, { useRef, useState, useEffect } from "react";
import _Header from "../sections/_Header";
import _Footer from "../sections/_Footer";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../animations/variants";

function Home() {
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

  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section>
      <main className="overflow-hidden pt-[80px]">
        {/*first section start................................................ */}
        <section className="h-screen max-[767px]:h-full flex">
          <div className="w-1/2 bg-Home-bg flex items-center justify-center max-[767px]:hidden">
            <div className="max-w-sm p-3">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.p variants={fadeInUp} className="text-sm sm:text-xs text-Secondary-theme">WELCOME TO HOUSE OF IYANGA!</motion.p>
                <motion.h1 variants={fadeInUp} className="text-5xl font-medium pb-6 pt-2">
                  Beauty is power. A smile is its sword.
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-lg">
                  From bridal glam to everyday elegance, our certified artists craft
                  looks that highlight your natural beauty with premium, skin-friendly products.
                </motion.p>
                <div className="pt-6 pb-2">
                  <motion.button variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-2 bg-Secondary-theme text-white">
                    Make A Reservation
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="bg-cover max-[767px]:w-full w-1/2 h-full flex items-center max-[767px]:inline pt-10 max-[767px]:p-4" style={{ backgroundImage: "url('/contentImage/bgImg1.jpg')" }}>
            <div className="h-96 max-[767px]:w-full w-72 border-8 border-l-0 border-white flex items-center relative z-10">
              <img
                className="object-contain h-72 sm:h-[430px] w-full absolute max-[767px]:right-7 sm:right-10 origin-center"
                src="/galleryImages/img2.jpeg"
                alt="House of Iyanga makeup look"
              />
            </div>
            <div className="max-w-md pt-4 md:hidden">
              <p className="text-sm sm:text-xs text-Secondary-theme">WELCOME TO HOUSE OF IYANGA!</p>
              <h1 className="text-5xl font-medium pb-6 pt-2 text-white">
                Beauty is power. A smile is its sword.
              </h1>
              <p className="text-2xl text-white">
                From bridal glam to everyday elegance, our certified artists craft
                looks that highlight your natural beauty with premium, skin-friendly products.
              </p>
              <div className="pt-6 pb-2">
                <button className="px-6 py-2 bg-Secondary-theme text-white text-lg">
                  Make A Reservation
                </button>
              </div>
            </div>
          </div>
        </section>
        {/*first section end................................................ */}

        {/*second section start................................................ */}
        <section className="w-full bg-white max-[767px]:h-full md:h-[550px] flex items-center overflow-hidden p-4">
          {/* Carousel Container */}
          <motion.div
            ref={carouselRef}
            className="w-full cursor-grab active:cursor-grabbing overflow-hidden"
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -carouselWidth }}
              className="w-fit bg-white mx-auto flex gap-10 max-[767px]:inline max-[767px]:block max-[767px]:w-full px-4 md:px-20"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Item 1 */}
              <motion.div variants={fadeInUp} className="h-full sm:h-80 w-56 max-[767px]:w-full mb-10 flex-shrink-0">
                <div className="overflow-hidden h-[280px] sm:h-1/2 w-full mb-2">
                  <img
                    className="h-full w-full object-cover max-[767px]:object-center max-[767px]:object-cover"
                    src="/contentImage/spa.jpg"
                    alt="Spa and massage treatment"
                  />
                </div>
                <div className="max-w-md">
                  <h2 className="max-[767px]:text-3xl sm:text-2xl font-medium pt-2 pb-1">Spa & Massage</h2>
                  <p className="max-[767px]:text-lg sm:text-sm pb-2">
                    Restore balance with soothing massage and aromatherapy treatments
                    designed to melt stress and leave your skin glowing.
                  </p>
                  <button className="px-5 py-2 border-2 rounded-sm border-Secondary-theme text-xs max-[767px]:text-sm">
                    Read More
                  </button>
                </div>
              </motion.div>

              {/* Item 2 */}
              <motion.div variants={fadeInUp} className="h-full sm:h-80 w-56 max-[767px]:w-full flex-shrink-0 mb-2">
                <div className="overflow-hidden h-[280px] sm:h-1/2 w-full mb-2">
                  <img
                    className="h-full w-full object-cover max-[767px]:object-center max-[767px]:object-cover"
                    src="/contentImage/hair.jpg"
                    alt="Hair and beauty styling"
                  />
                </div>
                <div className="max-w-md">
                  <h2 className="max-[767px]:text-3xl sm:text-2xl font-medium pt-2 pb-1">Hair & Beauty</h2>
                  <p className="max-[767px]:text-lg sm:text-sm pb-2">
                    Precision cuts, blowouts, and styling for every texture—finished
                    with expert color matching and heat protection.
                  </p>
                  <button className="px-5 py-2 border-2 rounded-sm border-Secondary-theme text-xs max-[767px]:text-sm">
                    Read More
                  </button>
                </div>
              </motion.div>

              {/* Item 3 */}
              <motion.div variants={fadeInUp} className="h-full sm:h-80 w-56 max-[767px]:w-full flex-shrink-0">
                <div className="overflow-hidden h-[280px] sm:h-1/2 w-full mb-2">
                  <img
                    className="h-full w-full object-cover max-[767px]:object-center max-[767px]:object-cover"
                    src="/contentImage/bodyTreatment.jpg"
                    alt="Body treatment service"
                  />
                </div>
                <div className="max-w-md">
                  <h2 className="max-[767px]:text-3xl sm:text-2xl font-medium pt-2 pb-1">Body Treatment</h2>
                  <p className="max-[767px]:text-lg sm:text-sm pb-2">
                    Exfoliating scrubs, detox wraps, and nourishing body rituals
                    that smooth, firm, and revive from head to toe.
                  </p>
                  <button className="px-5 py-2 border-2 rounded-sm border-Secondary-theme text-xs max-[767px]:text-sm">
                    Read More
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
        {/*second section end................................................ */}

        {/*third section start................................................ */}
        <section className="w-full bg-Home-bg h-[80vh] max-[639px]:h-full flex items-center justify-center">
          <div className="flex w-[850px] items-center justify-between max-[639px]:inline max-[639px]:p-4">
            <div className="w-1/2 min-[692px]:hidden max-[639px]:w-full flex justify-end max-[639px]:justify-start pl-4">
              <div className="relative">
                <img className="h-80 w-72 object-cover" src="/contentImage/aboutBG.jpg" alt="" />
                <img className="h-full w-full object-contain absolute top-5 max-[290px]:top-0 right-5" src="/contentImage/faceskinModel2.jpg" alt="" />
              </div>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center pt-4 pl-5 max-[639px]:inline">
              <div className="lg:max-w-sm max-[639px]:w-full">
                <p className="md:text-xs max-[639px]:text-sm text-Secondary-theme pt-4">ABOUT US</p>
                <h2 className="text-4xl font-medium pb-6 pt-1">The Beauty is about being Comfortable in your own skin!</h2>
                <p className="md:text-sm max-[639px]:text-lg pb-3">At House of Iyanga, we believe beauty starts with confidence. Our studio offers
                  personalized consultations, cruelty-free cosmetics, and techniques tailored to your skin tone,
                  features, and style—whether you are preparing for a special event or treating yourself to everyday care.</p>
                <div className="flex max-[639px]:justify-between md:gap-3 pb-5 pt-2 max-[364px]:hidden">
                  <img className="h-32 max-[690px]:w-24 w-28 object-contain" src="/contentImage/beautyExperts.png" alt="" />
                  <img className="h-32 max-[690px]:w-24 w-28 object-contain" src="/contentImage/greatServices.png" alt="" />
                  <img className="h-32 max-[690px]:w-24 w-28 object-contain" src="/contentImage/genuein.png" alt="" />
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-end max-[692px]:hidden pr-4 pl-4">
              <div className="relative">
                <img className="h-80 w-72 object-cover" src="/contentImage/aboutBG.jpg" alt="" />
                <img className="h-full w-full object-cover absolute top-4 right-4" src="/contentImage/faceskinModel2.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/*third section end................................................ */}

        {/*fourth section start................................................ */}
        <section className="w-full h-[140%] bg-white flex justify-center items-center">
          <div className="xl:w-1/2 max-[850px]:w-full max-[1200px]:p-4">
            <div className="flex justify-center">
              <div className="text-center max-w-sm pt-2 pb-4 mb-4">
                <p className="sm:text-xs max-[639px]:text-sm text-Secondary-theme">OUR SERVICES</p>
                <h2 className="sm:text-3xl max-[639px]:text-4xl font-medium">
                  We are Experienced in making you very Beautiful.
                </h2>
              </div>
            </div>
            {/*item 1............................................................................... */}
            <div className="flex flex-col min-[1400px]:flex-row max-[1639px]:w-full">
              <img
                className="max-[1400px]:h-80 w-full min-[1400px]:w-1/2 object-cover"
                src="/contentImage/faceMask1.jpg"
                alt=""
              />
              <div className="h-full min-h-[30rem] w-full min-[1400px]:w-1/2 relative max-[370px]:mb-16 flex flex-col">
                <div className="max-[1639px]:p-3 max-[1639px]:w-full flex-1">
                  {priceList.map((product) => (
                    <div key={product.id}>
                      <div className="w-full 2xl:max-w-lg border-b-2 py-1 lg:pl-4">
                        <ul className="leaders">
                          <li>
                            <span className="text-lg font-semibold">
                              {product.item}
                            </span>{" "}
                            <span className="pl-2 font-medium">
                              {" "}
                              from ${product.price}
                            </span>
                          </li>
                        </ul>
                        <p>{product.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 pb-2 flex">
                  <button className="text-xs px-4 py-2 border-2 border-Secondary-theme mx-auto">
                    GET AN APPOINTMENT
                  </button>
                </div>
                <div className="h-14 w-14 bg-Secondary-theme absolute bottom-0 left-0 max-[1400px]:hidden" />
              </div>
            </div>
      
            {/*item 2............................................................................... */}
            <div className="flex flex-col min-[1400px]:flex-row-reverse mb-14">
              <img
                className="max-[1400px]:h-auto w-full min-[1400px]:w-1/2 object-cover"
                src="/contentImage/faceMask2.jpg"
                alt=""
              />
              <div className="w-full min-[1400px]:w-1/2 relative max-[370px]:mb-16 flex flex-col" style={{ height: "auto", minHeight: "24rem" }}>
                <div className="max-[1639px]:p-2 max-[1639px]:w-full mt-10">
                  {priceList.map((product) => (
                    <div key={product.id}>
                      <div className="w-full 2xl:max-w-lg border-b-2 py-1 lg:pl-2">
                        <ul className="leaders">
                          <li>
                            <span className="text-lg font-semibold">
                              {product.item}
                            </span>{" "}
                            <span className="pl-2 font-medium">
                              {" "}
                              from ${product.price}
                            </span>
                          </li>
                        </ul>
                        <p>{product.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 pb-2 flex">
                  <button className="text-xs px-4 py-2 border-2 border-Secondary-theme mx-auto">
                    GET AN APPOINTMENT
                  </button>
                </div>
                <div className="h-14 w-14 bg-Secondary-theme absolute top-0 right-0 max-[1400px]:hidden" />
              </div>
            </div>
          </div>
        </section>
        {/*fourth section end................................................ */}

        {/*fifth section start................................................ */}
        <section className="w-full h-full max-[920px]:pb-8 bg-Home-bg flex items-center justify-center">
          <div className="lg:max-w-5xl max-[920px]:w-full p-5">
            <div className="text-center p-7">
              <p className="sm:text-xs max-[639px]:text-sm">TESTIMONIALS</p>
              <h2 className="sm:text-3xl max-[639px]:text-4xl font-medium">What Our Customers says...</h2>
            </div>
            <div className="flex items-center gap-6 max-[920px]:inline ">
              <div className="bg-white h-full w-full ">
                <div className="px-6 py-5 text-lg w-full h-full">
                  “I walked in nervous about my wedding makeup and walked out feeling like myself—only more radiant.
                  The artist matched my foundation perfectly and the look lasted all night.“
                </div>
                <div className="bg-Intermediary-theme flex justify-between p-3">
                  <div className="flex">
                    <img className="object-contain h-16 w-16" src="/contentImage/malereviewer.jpg" alt="" />
                    <div className="pl-1 pt-1">
                      <img className="object-contain" src="/contentImage/Reviews.png" alt="" />
                      <p className="text-sm text-white">Ada Nwosu</p>
                      <p className="text-sm text-white">Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="pt-1 pr-1">
                    <img className="object-contain h-10 w-11" src="/contentImage/commaIcon.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="bg-white h-full w-full max-[920px]:mt-5">
                <div className="px-6 py-5 text-lg w-full h-full">
                  <p>“I have tried countless salons, but House of Iyanga is different. Soft glam for my anniversary dinner,
                    flawless eyebrows, and they actually listened to what I wanted.“</p>
                </div>
                <div className="bg-Intermediary-theme flex justify-between p-3">
                  <div className="flex">
                    <img className="object-contain h-16 w-16" src="/contentImage/femaleReviewer.jpg" alt="" />
                    <div className="pl-1 pt-1">
                      <img className="object-contain" src="/contentImage/Reviews.png" alt="" />
                      <p className="text-sm text-white">Chioma Eze</p>
                      <p className="text-sm text-white">Abuja, Nigeria</p>
                    </div>
                  </div>
                  <div className="pt-1 pr-1">
                    <img className="object-contain h-10 w-11" src="/contentImage/commaIcon.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*fifth section end................................................ */}

        {/*sixth section start................................................ */}
        <section className="w-full max-[920px]:h-full h-[80vh] max-[1190px]:h-[150vh] bg-white flex justify-center items-center">
          <div className="bg-Home-bg2 pl-6 w-1/2 lg:w-[60%] max-[1190px]:block max-[1190px]:p-8 max-[720px]:w-full gap-7 flex items-center">
            <div className="max-w-xs mx-auto h-full max-[1190px]:max-w-lg">
              <p className="sm:text-xs max-[639px]:text-lg">FLAT DISCOUNT</p>
              <h2 className="sm:text-3xl max-[639px]:text-4xl font-medium pt-3">Claim up to 50% offer on the most popular <br />services.....</h2>
              <p className="text-lg pt-3 pb-3">Celebrate your next milestone with up to 50% off our most-booked services—bridal packages,
                full glam sessions, and signature facials. Limited slots available each month, so reserve early to lock in your date.</p>
              <div className="max-[350px]:inline flex justify-between items-center border-2 max-[350px]:border-0 border-Secondary-theme h-28 w-full">
                <div >
                  <span className="text-lg">Mail us: beautyness@gmail.com</span>
                  <br />
                  <span className="text-lg">Call us: +234 983 4564 554 </span>
                </div>
                <img className="h-32 max-[280px]:w-full max-[280px]:object-fill w-32 object-contain" src="/contentImage/Offer.png" alt="" />
              </div>
            </div>
            <div className="bg-Home-bg lg:w-1/2 max-w-full h-full flex justify-center py-10 max-[1190px]:inline max-[1190px]:pt-8">
              <form action="">
                <div className="max-[1190px]:pt-8">
                  <input className="w-full py-2 px-2 mb-3 border-2 border-Secondary-theme outline-none " placeholder="Name" type="text" />
                </div>
                <div className="">
                  <input className="w-full py-2 px-2 mb-3 border-2 border-Secondary-theme outline-none" placeholder="Email" type="email" />
                </div>
                <div className="">
                  <input className="w-full py-2 px-2 mb-3 border-2 border-Secondary-theme outline-none" placeholder="Phone" type="number" />
                </div>
                <div className="">
                  <input className="w-full mb-3 py-2 px-2 outline-none border-2 border-Secondary-theme" placeholder="Service You Need" type="text" />
                </div>
                <div className="mb-3">
                  <textarea name="text" id="" className="w-full h-28 py-2 px-2 outline-none border-2 border-Secondary-theme" placeholder="Any Note For Us?"></textarea>
                </div>
                <div className="w-full lg:w-72 h-11 bg-Secondary-theme flex items-center justify-center">
                  <button className="text-white">
                    GET AN APPOINTMENT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/*sixth section end................................................ */}
      </main>
    </section>
  );
}

export default Home;

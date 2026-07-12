import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../animations/variants";
import { useReservation } from "../../context/ReservationContext";

function Home() {
  const { openModal } = useReservation();
  const navigate = useNavigate();

  const priceList = [
    {
      id: 1,
      item: "Bridal Makeup",
      price: "45,000",
      description: "Flawless bridal foundation, contour, and finishing for your most important day.",
    },
    {
      id: 2,
      item: "Asoebi Package",
      price: "60,000",
      description: "Full glam and gele for Asoebi guests — single and group rates available.",
    },
    {
      id: 3,
      item: "Bridal Girls",
      price: "45,000",
      description: "Makeup for bridal squad members — per person and group of five pricing.",
    },
    {
      id: 4,
      item: "Bridal Prep",
      price: "30,000",
      description: "Morning prep and base application so the bride is camera-ready from first light.",
    },
  ];

  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", note: "" });

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

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
                  <motion.button
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openModal()}
                    className="px-6 py-2 bg-Secondary-theme text-white"
                  >
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
                <button
                  onClick={() => openModal()}
                  className="px-6 py-2 bg-Secondary-theme text-white text-lg"
                >
                  Make A Reservation
                </button>
              </div>
            </div>
          </div>
        </section>
        {/*first section end................................................ */}

        {/*second section start................................................ */}
        <section className="w-full bg-white max-[767px]:h-full md:h-[550px] flex items-center overflow-hidden p-4">
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
                    src="/galleryImages/img1.jpeg"
                    alt="Bridal makeup by House of Iyanga"
                  />
                </div>
                <div className="max-w-md">
                  <h2 className="max-[767px]:text-3xl sm:text-2xl font-medium pt-2 pb-1">Bridal Makeup</h2>
                  <p className="max-[767px]:text-lg sm:text-sm pb-2">
                    From foundation to final touch — flawless, lasting bridal glam
                    crafted to match your vision and your skin perfectly.
                  </p>
                  <button
                    onClick={() => navigate("/service")}
                    className="px-5 py-2 border-2 rounded-sm border-Secondary-theme text-xs max-[767px]:text-sm hover:bg-Secondary-theme hover:text-white transition-colors"
                  >
                    See Packages
                  </button>
                </div>
              </motion.div>

              {/* Item 2 */}
              <motion.div variants={fadeInUp} className="h-full sm:h-80 w-56 max-[767px]:w-full flex-shrink-0 mb-2">
                <div className="overflow-hidden h-[280px] sm:h-1/2 w-full mb-2">
                  <img
                    className="h-full w-full object-cover max-[767px]:object-center max-[767px]:object-cover"
                    src="/galleryImages/img9.jpeg"
                    alt="Asoebi glam by House of Iyanga"
                  />
                </div>
                <div className="max-w-md">
                  <h2 className="max-[767px]:text-3xl sm:text-2xl font-medium pt-2 pb-1">Asoebi Glam</h2>
                  <p className="max-[767px]:text-lg sm:text-sm pb-2">
                    Group glam for Asoebi queens — makeup and gele for single guests
                    or the full squad, with team rates that work for everyone.
                  </p>
                  <button
                    onClick={() => navigate("/service")}
                    className="px-5 py-2 border-2 rounded-sm border-Secondary-theme text-xs max-[767px]:text-sm hover:bg-Secondary-theme hover:text-white transition-colors"
                  >
                    See Packages
                  </button>
                </div>
              </motion.div>

              {/* Item 3 */}
              <motion.div variants={fadeInUp} className="h-full sm:h-80 w-56 max-[767px]:w-full flex-shrink-0">
                <div className="overflow-hidden h-[280px] sm:h-1/2 w-full mb-2">
                  <img
                    className="h-full w-full object-cover max-[767px]:object-center max-[767px]:object-cover"
                    src="/galleryImages/img11.jpeg"
                    alt="Bridal girls package by House of Iyanga"
                  />
                </div>
                <div className="max-w-md">
                  <h2 className="max-[767px]:text-3xl sm:text-2xl font-medium pt-2 pb-1">Bridal Girls</h2>
                  <p className="max-[767px]:text-lg sm:text-sm pb-2">
                    Your entire squad deserves to glow. Makeup-only packages for
                    bridesmaids — single and group of five pricing available.
                  </p>
                  <button
                    onClick={() => navigate("/service")}
                    className="px-5 py-2 border-2 rounded-sm border-Secondary-theme text-xs max-[767px]:text-sm hover:bg-Secondary-theme hover:text-white transition-colors"
                  >
                    See Packages
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
                <p className="md:text-sm max-[639px]:text-lg pb-3">
                  At House of Iyanga, we believe beauty starts with confidence. Our studio offers
                  personalized consultations, cruelty-free cosmetics, and techniques tailored to your skin tone,
                  features, and style — whether you are preparing for a special event or treating yourself to everyday care.
                </p>
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
                <img className="h-full w-full object-cover absolute top-4 right-4" src="/galleryImages/img6.jpeg" alt="" />
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
              <div className="w-full h-[480px] min-[1400px]:w-1/2 max-[1400px]:h-[200px]">
                <img
                  className="h-full w-full object-cover"
                  src="/galleryImages/img5.jpeg"
                  alt=""
                />
              </div>
              <div className="h-full min-h-[30rem] w-full min-[1400px]:w-1/2 relative max-[370px]:mb-16 flex flex-col">
                <div className="max-[1639px]:p-3 max-[1639px]:w-full flex-1">
                  {priceList.map((product) => (
                    <div key={product.id}>
                      <div className="w-full 2xl:max-w-lg border-b-2 py-1 lg:pl-4">
                        <ul className="leaders">
                          <li>
                            <span className="text-lg font-semibold">{product.item}</span>{" "}
                            <span className="pl-2 font-medium">from ₦{product.price}</span>
                          </li>
                        </ul>
                        <p>{product.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 pb-2 flex">
                  <button
                    onClick={() => openModal()}
                    className="text-xs px-4 py-2 border-2 border-Secondary-theme mx-auto hover:bg-Secondary-theme hover:text-white transition-colors"
                  >
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
                src="/galleryImages/img3.jpeg"
                alt=""
              />
              <div className="w-full min-[1400px]:w-1/2 relative max-[370px]:mb-16 flex flex-col" style={{ height: "auto", minHeight: "24rem" }}>
                <div className="max-[1639px]:p-2 max-[1639px]:w-full mt-10">
                  {priceList.map((product) => (
                    <div key={product.id}>
                      <div className="w-full 2xl:max-w-lg border-b-2 py-1 lg:pl-2">
                        <ul className="leaders">
                          <li>
                            <span className="text-lg font-semibold">{product.item}</span>{" "}
                            <span className="pl-2 font-medium">from ₦{product.price}</span>
                          </li>
                        </ul>
                        <p>{product.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 pb-2 flex">
                  <button
                    onClick={() => openModal()}
                    className="text-xs px-4 py-2 border-2 border-Secondary-theme mx-auto hover:bg-Secondary-theme hover:text-white transition-colors"
                  >
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
            <div className="flex items-center gap-6 max-[920px]:inline">
              <div className="bg-white h-full w-full">
                <div className="px-6 py-5 text-lg w-full h-full">
                  &ldquo;I walked in nervous about my wedding makeup and walked out feeling like myself — only more radiant.
                  The artist matched my foundation perfectly and the look lasted all night.&rdquo;
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
                  &ldquo;I have tried countless salons, but House of Iyanga is different. Soft glam for my anniversary dinner,
                  flawless eyebrows, and they actually listened to what I wanted.&rdquo;
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
              <h2 className="sm:text-3xl max-[639px]:text-4xl font-medium pt-3">
                Claim up to 50% offer on the most popular <br />services.....
              </h2>
              <p className="text-lg pt-3 pb-3">
                Celebrate your next milestone with up to 50% off our most-booked services — bridal packages,
                full glam sessions, and signature looks. Limited slots available each month, so reserve early to lock in your date.
              </p>
              <div className="max-[350px]:inline flex justify-between items-center border-2 max-[350px]:border-0 border-Secondary-theme h-28 w-full">
                <div>
                  <span className="text-lg">Mail us: Bookiyanga@gmail.com</span>
                  <br />
                  <span className="text-lg">Call us: 08053312857</span>
                </div>
                <img className="h-32 max-[280px]:w-full max-[280px]:object-fill w-32 object-contain" src="/contentImage/Offer.png" alt="" />
              </div>
            </div>

            <div className="bg-Home-bg lg:w-1/2 max-w-full h-full flex justify-center py-10 max-[1190px]:inline max-[1190px]:pt-8">
              {formSent ? (
                <div className="flex flex-col items-center justify-center text-center px-4 py-12 gap-4">
                  <div className="w-14 h-14 rounded-full bg-Secondary-theme/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-Secondary-theme" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">We&rsquo;ll be in touch!</h3>
                  <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                    Thanks for reaching out. We&rsquo;ll get back to you within 24 hours.
                    Ready to book now?
                  </p>
                  <button
                    onClick={() => openModal()}
                    className="mt-2 px-6 py-2 bg-Secondary-theme text-white text-sm hover:bg-Primary-theme transition-colors"
                  >
                    Make A Reservation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="max-[1190px]:pt-8">
                    <input
                      className="w-full py-2 px-2 mb-3 border-2 border-Secondary-theme outline-none"
                      placeholder="Name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="w-full py-2 px-2 mb-3 border-2 border-Secondary-theme outline-none"
                      placeholder="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="w-full py-2 px-2 mb-3 border-2 border-Secondary-theme outline-none"
                      placeholder="Phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <input
                      className="w-full mb-3 py-2 px-2 outline-none border-2 border-Secondary-theme"
                      placeholder="Service You Need"
                      type="text"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="w-full h-28 py-2 px-2 outline-none border-2 border-Secondary-theme"
                      placeholder="Any Note For Us?"
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    />
                  </div>
                  <div className="w-full lg:w-72 h-11 bg-Secondary-theme flex items-center justify-center hover:bg-Primary-theme transition-colors">
                    <button type="submit" className="text-white w-full h-full">
                      GET AN APPOINTMENT
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
        {/*sixth section end................................................ */}
      </main>
    </section>
  );
}

export default Home;

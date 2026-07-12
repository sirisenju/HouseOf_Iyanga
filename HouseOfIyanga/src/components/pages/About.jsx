import React from "react";
import _Header from "../sections/_Header";
import _Footer from "../sections/_Footer";
import { useReservation } from "../../context/ReservationContext";

function About() {
  const { openModal } = useReservation();

  return (
    <section>
      <_Header />
      <main className="pt-[80px]">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="w-full">
          <div
            className="w-full min-h-[300px] md:min-h-[360px] flex justify-center items-center bg-cover bg-center relative"
            style={{ backgroundImage: "url('/contentImage/bgImg1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative z-10 max-w-xl mx-auto text-center px-6">
              <p className="text-xs text-white/80 tracking-widest uppercase">Short Story About Us.</p>
              <h2 className="font-medium text-2xl md:text-3xl pt-5 pb-6 text-white leading-snug">
                The Big Story Behind House of Iyanga
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

        {/* ── VALUES ───────────────────────────────────────────────────────── */}
        <section className="w-full bg-Home-bg py-16 px-4">
          <div className="max-w-xl mx-auto">
            <p className="text-sm text-center text-Primary-theme tracking-widest uppercase mb-2">
              Our Values.
            </p>
            <h2 className="font-medium text-2xl md:text-3xl pl-2 mb-8">
              The work values we thrive for.
            </h2>

            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-300">
              <img
                className="h-16 w-16 md:h-20 md:w-20 object-contain shrink-0"
                src="/contentImage/beautyExperts.png"
                alt="Beauty Experts"
              />
              <div>
                <h3 className="font-medium text-lg md:text-xl">Beauty Experts.</h3>
                <p className="text-sm pt-2 leading-relaxed text-gray-600">
                  Our certified makeup artists stay current on trends, techniques, and products —
                  bringing runway-quality artistry to every appointment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-300">
              <img
                className="h-16 w-16 md:h-20 md:w-20 object-contain shrink-0"
                src="/contentImage/greatServices.png"
                alt="Great Services"
              />
              <div>
                <h3 className="font-medium text-lg md:text-xl">Great Services.</h3>
                <p className="text-sm pt-2 leading-relaxed text-gray-600">
                  From consultation to final touch-up, we deliver attentive, hygienic service
                  in a calm, welcoming space designed for your comfort.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-6 border-b border-gray-300">
              <img
                className="h-16 w-16 md:h-20 md:w-20 object-contain shrink-0"
                src="/contentImage/genuein.png"
                alt="Genuine Care"
              />
              <div>
                <h3 className="font-medium text-lg md:text-xl">Genuine Care.</h3>
                <p className="text-sm pt-2 leading-relaxed text-gray-600">
                  We use only trusted, dermatologist-approved products and honest recommendations —
                  never upselling, always what your skin actually needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT SPLIT ──────────────────────────────────────────────────── */}
        <section className="w-full bg-Footer-theme">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
            {/* Image */}
            <div className="w-full lg:w-1/2 h-72 sm:h-96 lg:h-[500px] overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                src="/galleryImages/img4.jpeg"
                alt="House of Iyanga artistry"
              />
            </div>
            {/* Text */}
            <div className="w-full lg:w-1/2 flex items-center px-8 md:px-12 py-12 lg:py-16">
              <div className="text-white max-w-md">
                <p className="text-xs tracking-widest uppercase text-white/60 mb-3">About Us</p>
                <h2 className="font-medium text-2xl md:text-3xl pb-4 leading-snug">
                  Style is a Reflection of your Attitude &amp; your Personality.
                </h2>
                <p className="text-sm leading-relaxed text-white/80">
                  Founded on the belief that every woman deserves to feel stunning in her own skin,
                  House of Iyanga blends African beauty traditions with modern makeup artistry.
                  Our studio is a space where color, confidence, and craftsmanship come together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── MEET THE CEO ─────────────────────────────────────────────────── */}
        <section className="w-full bg-Home-bg py-14 px-4">
          <div className="text-center mb-10 px-2">
            <p className="text-sm pb-2 tracking-widest uppercase">Meet The CEO.</p>
            <h2 className="text-3xl md:text-4xl font-medium leading-snug">
              The Amazing woman behind the brand.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
            <img
              className="w-full md:w-[300px] lg:w-[340px] h-72 md:h-auto object-cover object-top shrink-0"
              src="/contentImage/aboutModel.jpg"
              alt="Sherlin D'Cruz"
            />
            <div className="w-full pt-8 md:pt-4 md:pl-10 lg:pl-12 pr-2">
              <h3 className="text-xs tracking-widest uppercase text-gray-500">Founder, House of Iyanga</h3>
              <p className="pt-2 pb-3 font-medium text-3xl md:text-4xl">Sherlin D&rsquo;Cruz</p>
              <p className="pb-5 text-sm md:text-base leading-relaxed text-gray-600 max-w-md">
                Sherlin founded House of Iyanga with one mission: to make professional makeup artistry
                accessible, personal, and unforgettable. With over a decade of experience in bridal glam,
                editorial shoots, and everyday beauty, she leads a team dedicated to enhancing — not masking —
                your natural features.
              </p>

              <div className="flex items-center gap-3 mb-3">
                <img className="h-8 w-8 object-contain shrink-0" src="/contentImage/Call.png" alt="Phone" />
                <a href="tel:08053312857" className="text-sm hover:text-Secondary-theme transition-colors">
                  08053312857
                </a>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <img className="h-8 w-8 object-contain shrink-0" src="/contentImage/mail.png" alt="Email" />
                <a href="mailto:Bookiyanga@gmail.com" className="text-sm hover:text-Secondary-theme transition-colors break-all">
                  Bookiyanga@gmail.com
                </a>
              </div>

              <button
                onClick={() => openModal()}
                className="px-5 py-2 bg-Secondary-theme text-white text-sm hover:bg-Primary-theme transition-colors mb-5"
              >
                MAKE A RESERVATION
              </button>

              <div className="flex gap-4 pt-2">
                <img className="object-contain h-4 w-4" src="/contentImage/f.png" alt="Facebook" />
                <img className="object-contain h-4 w-4" src="/contentImage/twit.png" alt="Twitter" />
                <img className="object-contain h-4 w-4" src="/contentImage/in.png" alt="Instagram" />
              </div>
            </div>
          </div>
        </section>

        {/* ── INSTAGRAM / GALLERY ──────────────────────────────────────────── */}
        <section className="w-full py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-6">

            {/* Left column — text + tall image */}
            <div className="w-full md:w-[320px] shrink-0">
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Share Us</p>
              <h2 className="text-3xl md:text-4xl font-medium pb-4 leading-snug">
                Follow us on <br className="hidden md:block" /> Instagram.
              </h2>
              <p className="pb-8 text-sm leading-relaxed text-gray-500 max-w-sm">
                See our latest bridal transformations, soft glam looks, and behind-the-scenes studio moments.
                Tag us in your photos — we love celebrating your glow-up with our community.
              </p>
              <div className="overflow-hidden h-64 md:h-80">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  src="/galleryImages/img7.jpeg"
                  alt="House of Iyanga"
                />
              </div>
            </div>

            {/* Right column — two stacked images */}
            <div className="flex-1 flex flex-col gap-4 bg-red-500 w-full h-full">
              <div className="overflow-hidden h-60 md:h-[35%]">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  src="/galleryImages/img9.jpeg"
                  alt="House of Iyanga"
                />
              </div>
              <div className="overflow-hidden h-52 md:h-[40%]">
                <img
                  className="w-full h-full md:h-[330px] object-cover object-center hover:scale-105 transition-transform duration-700"
                  src="/galleryImages/img12.jpeg"
                  alt="House of Iyanga"
                />
              </div>
            </div>
          </div>

          <div className="text-center pt-12">
            <button
              onClick={() => openModal()}
              className="bg-Primary-theme px-10 py-2.5 text-white text-sm hover:bg-Secondary-theme transition-colors"
            >
              Contact Us here
            </button>
          </div>
        </section>

      </main>
      <_Footer />
    </section>
  );
}

export default About;

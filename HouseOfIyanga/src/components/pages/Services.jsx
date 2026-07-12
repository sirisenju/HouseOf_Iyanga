import React, { useState } from "react";
import _Header from "../sections/_Header";
import _Footer from "../sections/_Footer";
import { useReservation } from "../../context/ReservationContext";
import {
  bridalPackages,
  partyExtras,
  logistics,
  bookingTerms,
} from "../../data/servicesData";

/* ── Small helper components ─────────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-Secondary-theme shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-xs text-Secondary-theme uppercase tracking-[0.2em] font-manrope">
      {children}
    </p>
  );
}

/* ── Bridal Package Card ─────────────────────────────────────────────────── */
function BridalCard({ pkg, reverse, openModal }) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } w-full min-h-[520px]`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 overflow-hidden">
        <img
          className="w-full h-72 lg:h-full object-cover transition-transform duration-700 hover:scale-105"
          src={pkg.image}
          alt={pkg.name}
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 relative flex flex-col bg-white">
        {/* Decorative corner accent */}
        <div
          className={`h-12 w-12 bg-Secondary-theme absolute ${
            reverse ? "bottom-0 right-0" : "bottom-0 left-0"
          } hidden lg:block`}
        />

        <div className="p-8 flex-1 flex flex-col justify-center">
          {/* Tag */}
          <span className="inline-block text-[10px] tracking-[0.18em] uppercase text-Secondary-theme border border-Secondary-theme/40 px-3 py-1 mb-4 w-fit font-manrope">
            {pkg.tag}
          </span>

          <h3 className="font-playfairDisplay text-3xl font-semibold mb-2">
            {pkg.name}
          </h3>

          <p className="text-3xl font-playfairDisplay text-Secondary-theme font-medium mb-5">
            {pkg.price}
          </p>

          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            {pkg.description}
          </p>

          {/* Inclusions */}
          <ul className="space-y-2 mb-8">
            {pkg.inclusions.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => openModal(pkg.name, pkg.calendlyKey)}
            className="self-start text-xs tracking-[0.15em] uppercase px-7 py-3 border-2 border-Secondary-theme hover:bg-Secondary-theme hover:text-white transition-all duration-300 font-manrope"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Party Extra Card ────────────────────────────────────────────────────── */
function PartyExtraCard({ data, openModal }) {
  return (
    <div className="flex flex-col bg-white border border-gray-100 shadow-sm overflow-hidden group">
      <div className="overflow-hidden h-64">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="text-[10px] tracking-[0.18em] uppercase text-Secondary-theme border border-Secondary-theme/40 px-3 py-1 mb-3 w-fit font-manrope">
          {data.tag}
        </span>
        <h3 className="font-playfairDisplay text-2xl font-semibold mb-4">
          {data.title}
        </h3>

        {/* Pricing rows */}
        <div className="space-y-3 mb-6 flex-1">
          {data.pricing.map((tier, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b border-gray-100 pb-3"
            >
              <div>
                <p className="text-sm font-medium text-gray-800">{tier.label}</p>
                <p className="text-xs text-gray-400">{tier.detail}</p>
              </div>
              <p className="text-Secondary-theme font-semibold font-playfairDisplay text-lg">
                {tier.price}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => openModal(data.title, data.calendlyKey)}
          className="w-full text-xs tracking-[0.15em] uppercase py-3 border-2 border-Secondary-theme hover:bg-Secondary-theme hover:text-white transition-all duration-300 font-manrope"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

/* ── Accordion Term ──────────────────────────────────────────────────────── */
function AccordionTerm({ term, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="text-sm font-semibold text-gray-800 font-manrope">
          <span className="text-Secondary-theme mr-3 font-playfairDisplay">
            {String(index + 1).padStart(2, "0")}.
          </span>
          {term.title}
        </span>
        <svg
          className={`w-5 h-5 text-Secondary-theme shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      {open && (
        <p className="text-sm text-gray-500 leading-relaxed pb-4 pl-8 font-manrope">
          {term.body}
        </p>
      )}
    </div>
  );
}

/* ── Main Page ───────────────────────────────────────────────────────────── */
function Services() {
  const { openModal } = useReservation();

  return (
    <section>
      <_Header />
      <main className="pt-[80px]">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section
          className="w-full min-h-[55vh] bg-cover bg-center flex items-center justify-center relative"
          style={{ backgroundImage: "url('/galleryImages/img6.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
            <SectionLabel>Brides By Iyanga</SectionLabel>
            <h1 className="font-playfairDisplay text-4xl md:text-5xl font-semibold text-white mt-4 leading-tight">
              Bridal Service Catalogue
            </h1>
            <p className="text-white/70 mt-4 text-base md:text-lg font-manrope max-w-lg mx-auto">
              From single-day elegance to a full luxury bridal experience —
              every package is crafted to make you unforgettable.
            </p>
            <button
              onClick={() => openModal("Bridal Consultation", "general")}
              className="mt-8 px-8 py-3 border-2 border-white text-white text-xs tracking-[0.2em] uppercase font-manrope hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Book a Consultation
            </button>
          </div>
        </section>

        {/* ── BRIDAL PACKAGES ───────────────────────────────────────────── */}
        <section className="w-full bg-white">
          <div className="text-center py-14 px-4">
            <SectionLabel>Our Packages</SectionLabel>
            <h2 className="font-playfairDisplay text-3xl md:text-4xl font-semibold mt-3">
              Choose Your Bridal Package
            </h2>
            <p className="text-gray-400 mt-3 text-sm font-manrope max-w-md mx-auto">
              Every bridal package includes a personal consultation to ensure your look
              is tailored exactly to your vision.
            </p>
          </div>

          <div className="max-w-6xl mx-auto w-full">
            {bridalPackages.map((pkg, i) => (
              <BridalCard
                key={pkg.id}
                pkg={pkg}
                reverse={i % 2 !== 0}
                openModal={openModal}
              />
            ))}
          </div>
        </section>

        {/* ── PARTY EXTRAS ──────────────────────────────────────────────── */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>Party Extras</SectionLabel>
              <h2 className="font-playfairDisplay text-3xl md:text-4xl font-semibold mt-3">
                Asoebi & Bridal Girls
              </h2>
              <p className="text-gray-400 mt-3 text-sm font-manrope max-w-md mx-auto">
                Your entire squad deserves to glow. Group packages available —
                the more, the merrier (and more affordable).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PartyExtraCard data={partyExtras.asoebi} openModal={openModal} />
              <PartyExtraCard data={partyExtras.bridalGirls} openModal={openModal} />
            </div>
          </div>
        </section>

        {/* ── IMAGE SCROLLER ────────────────────────────────────────────── */}
        <section className="w-full py-16 bg-white overflow-hidden flex flex-col gap-6">
          <div className="text-center mb-6">
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="text-3xl font-medium font-playfairDisplay mt-2">
              Transformations &amp; Artistry
            </h2>
          </div>

          <div className="flex flex-col gap-0 w-full">
            {/* Row 1: Left to Right */}
            <div className="w-full overflow-hidden flex relative">
              <div className="absolute top-0 left-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 right-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              <div className="flex animate-scroll-right">
                {[1, 2, 3, 1, 2, 3].map((n, i) => (
                  <img
                    key={i}
                    src={`/galleryImages/${n}.jpg`}
                    className="w-[300px] md:w-[400px] h-[220px] md:h-[280px] object-cover shadow-sm"
                    alt={`Gallery ${n}`}
                  />
                ))}
              </div>
            </div>

            {/* Row 2: Right to Left */}
            <div className="w-full overflow-hidden flex relative">
              <div className="absolute top-0 left-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 right-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              <div className="flex animate-scroll-left">
                {[4, 5, 6, 7, 4, 5, 6, 7].map((n, i) => (
                  <img
                    key={i}
                    src={`/galleryImages/${n}.jpg`}
                    className="w-[300px] md:w-[400px] h-[220px] md:h-[280px] object-cover shadow-sm"
                    alt={`Gallery ${n}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── LOGISTICS CLAUSE ──────────────────────────────────────────── */}
        <section className="w-full bg-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>Travel & Logistics</SectionLabel>
              <h2 className="font-playfairDisplay text-3xl md:text-4xl font-semibold mt-3">
                Location Travel Fees
              </h2>
              <p className="text-gray-400 mt-3 text-sm font-manrope max-w-md mx-auto">
                For locations outside Asaba, a travel fee is charged based on
                current transportation rates. Below is a guide.
              </p>
            </div>

            <div className="overflow-hidden border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-Secondary-theme text-white">
                    <th className="text-left py-4 px-6 font-manrope tracking-wide font-medium">Zone</th>
                    <th className="text-left py-4 px-6 font-manrope tracking-wide font-medium hidden sm:table-cell">Areas</th>
                    <th className="text-right py-4 px-6 font-manrope tracking-wide font-medium">Travel Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {logistics.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                    >
                      <td className="py-4 px-6 font-semibold text-gray-800 font-manrope">{row.zone}</td>
                      <td className="py-4 px-6 text-gray-500 hidden sm:table-cell font-manrope">
                        {row.areas}
                        {row.note && (
                          <span className="block text-xs text-Secondary-theme/70 mt-0.5">{row.note}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-right font-semibold text-Secondary-theme font-playfairDisplay">{row.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center font-manrope">
              Road transportation to Lagos/Abuja is exclusively via GUO Transport Company.
            </p>
          </div>
        </section>

        {/* ── BOOKING TERMS ─────────────────────────────────────────────── */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>Before You Book</SectionLabel>
              <h2 className="font-playfairDisplay text-3xl md:text-4xl font-semibold mt-3">
                Booking Terms
              </h2>
              <p className="text-gray-400 mt-3 text-sm font-manrope max-w-md mx-auto">
                Please read these carefully before reaching out. Knowing the
                terms makes for a smooth, stress-free experience for everyone.
              </p>
            </div>

            <div className="bg-white px-6 md:px-8 py-2 shadow-sm border border-gray-100">
              {bookingTerms.map((term, i) => (
                <AccordionTerm key={i} term={term} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA ───────────────────────────────────────────────── */}
        <section
          className="w-full py-24 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/galleryImages/img3.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-6 max-w-xl mx-auto text-white">
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 className="font-playfairDisplay text-3xl md:text-4xl font-semibold mt-4 mb-4">
              Ready to Begin Your Bridal Journey?
            </h2>
            <p className="text-white/70 font-manrope text-sm mb-8 leading-relaxed">
              Choose the glam category that speaks to you, review the logistics
              &amp; booking terms, then send us a DM or book a consultation below.
              We are so honoured to be considered for your big day — we cannot wait
              to slay with you, Queen!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a
                href="mailto:Bookiyanga@gmail.com"
                className="text-sm font-manrope hover:text-Secondary-theme transition-colors"
              >
                Bookiyanga@gmail.com
              </a>
              <span className="hidden sm:block text-white/30">|</span>
              <a
                href="tel:08053312857"
                className="text-sm font-manrope hover:text-Secondary-theme transition-colors"
              >
                08053312857
              </a>
            </div>

            <button
              onClick={() => openModal("Bridal Consultation", "general")}
              className="px-10 py-3 border-2 border-white text-white text-xs tracking-[0.2em] uppercase font-manrope hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Book a Consultation
            </button>
          </div>
        </section>

      </main>
      <_Footer />
    </section>
  );
}

export default Services;

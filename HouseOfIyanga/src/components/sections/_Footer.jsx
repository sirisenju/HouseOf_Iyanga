import React from "react";
import { Link } from "react-router-dom";
import TypewriterText from "../ui/TypewriterText";

const socialLinks = [
  { icon: "/socialIcons/facebookWIcon.png", alt: "Facebook", size: "h-4 w-4" },
  { icon: "/socialIcons/twitterIcon.png", alt: "Twitter", size: "h-4.5 w-4.5" },
  { icon: "/socialIcons/instagramWIcon.png", alt: "Instagram", size: "h-3.5 w-3.5" },
  { icon: "/socialIcons/whatsappWIcon.png", alt: "WhatsApp", size: "h-4.5 w-4.5" },
];

function _Footer() {
  return (
    <footer className="bg-Intermediary-theme w-full overflow-hidden text-white font-playfairDisplay">
      {/* Huge Background Text "IYANGA" */}
      <div className="w-full text-center select-none pt-12 md:pt-16 lg:pt-20 overflow-hidden">
        <h1 className="font-playfairDisplay font-medium text-white/[0.08] tracking-normal leading-none text-[clamp(6rem,24vw,36rem)] select-none flex justify-center items-center w-full">
          <TypewriterText text="IYANGA" speed={160} />
        </h1>
      </div>

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pb-16 pt-8 md:pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 lg:gap-12">
          
          {/* Column 1: Branding, Socials & Copyright */}
          <div className="flex flex-col space-y-6 justify-between h-full">
            <div>
              <h3 className="font-playfairDisplay text-lg md:text-xl font-bold tracking-wide uppercase text-white">
                HOUSE OF IYANGA.
              </h3>
              
              {/* Social Icons */}
              <div className="flex gap-2.5 mt-5">
                {socialLinks.map((social) => (
                  <div
                    key={social.alt}
                    className="h-10 w-10 border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all flex items-center justify-center cursor-pointer"
                  >
                    <img
                      className={`${social.size} object-contain opacity-80 hover:opacity-100 transition-opacity`}
                      src={social.icon}
                      alt={social.alt}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="text-xs text-white/40 leading-relaxed pt-2">
              <p>© 2021 House of Iyanga.</p>
              <p>Powered by ROOT.</p>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="font-playfairDisplay text-base md:text-lg font-medium text-white mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Utility */}
          <div>
            <h4 className="font-playfairDisplay text-base md:text-lg font-medium text-white mb-5">
              Utility
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Start here
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Style Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Keep in Touch */}
          <div>
            <h4 className="font-playfairDisplay text-base md:text-lg font-medium text-white mb-5">
              Keep in Touch
            </h4>
            <ul className="space-y-3 text-sm text-white/50 leading-relaxed">
              <li className="hover:text-white transition-colors cursor-default">
                89, Pounds Square Ave.
              </li>
              <li>
                <a
                  href="mailto:amrohore4real@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  amrohore4real@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:08053312857"
                  className="hover:text-white transition-colors"
                >
                  08053312857
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default _Footer;

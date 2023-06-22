import React from "react";

function _Footer() {
  return (
    <footer className="bg-Footer-theme w-full h-5/6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="pt-16 pb-16 sm:flex sm:justify-between max-lg:p-6 border-b-2 grid place-content-center gap-10 w-full">
          <p className="text-5xl text-white">Beautyness.</p>
          <div className="flex gap-x-2 justify-center items-center">
            <div className="h-12 w-12 border-2 border-Secondary-theme flex items-center justify-center">
              <img
                className="h-7 w-7 object-contain"
                src={"/socialIcons/facebookWIcon.png"}
                alt=""
              />
            </div>
            <div className="h-12 w-12 border-2 border-Secondary-theme flex items-center justify-center">
              <img
                className="h-8 w-8 object-contain"
                src={"/socialIcons/twitterIcon.png"}
                alt=""
              />
            </div>
            <div className="h-12 w-12 border-2 border-Secondary-theme flex items-center justify-center">
              <img
                className="h-6 w-6 object-contain"
                src={"/socialIcons/instagramWIcon.png"}
                alt=""
              />
            </div>
            <div className="h-12 w-12 border-2 border-Secondary-theme flex items-center justify-center">
              <img
                className="h-8 w-8 object-contain"
                src={"/socialIcons/whatsappWIcon.png"}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-between max-md:grid max-md:grid-cols-3 max-sm:grid-cols-2 max-[420px]:inline max-[540px]:place-content-center max-3sm:pt-4 pt-16 pb-16 px-2 text-white">
          <div className="max-[420px]:pl-5">
            <span className="text-xl max-sm:text-2xl font-semibold tracking-wider">
              Explore
            </span>
            <div className="list-none text-base pt-3 max-[420px]:pt-0">
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Appointments</li>
              <li>Contact Us</li>
            </div>
          </div>
          <div className="max-[420px]:pl-5 max-[420px]:pt-4">
            <span className="text-xl max-sm:text-2xl font-semibold tracking-wider">
              Utility
            </span>
            <div className="list-none text-base pt-3 max-[420px]:pt-0">
              <li>Start here</li>
              <li>Catalog</li>
            </div>
          </div>
          <div className="max-[420px]:pl-5 max-[420px]:pt-4">
            <span className="text-xl max-sm:text-2xl font-semibold tracking-wider">
              Keep in Touch
            </span>
            <div className="list-none text-base pt-3 max-[420px]:pt-0 ">
              <li>Address: 89, pounds square Ave.</li>
              <li>mail: amrohore4real@gmail.com</li>
              <li>Phone: 08053312857</li>
            </div>
          </div>
          <div className="max-[420px]:pl-5 max-[420px]:pt-4">
            <span className="text-xl max-sm:text-2xl font-semibold tracking-wider">
              Working Hours
            </span>
            <div className="list-none text-base pt-3 max-[420px]:pt-0">
              <li>Mon to Fri: 7am-6pm</li>
              <li>Sat: 9am-7pm</li>
              <li>Sun: 9am-6pm</li>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-Intermediary-theme w-full h-16 border-t-2">
        <p className="font-manrope text-xs font-thin text-white">
          Copyright 2021. Drafted by Victor Themes. Powered by ROOT.
        </p>
      </div>
    </footer>
  );
}

export default _Footer;

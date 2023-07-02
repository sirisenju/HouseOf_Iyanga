import React from "react";
import _Header from "../sections/_Header";
import _Footer from "../sections/_Footer";

function About() {
  return (
    <section>
      <_Header />
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
            <p className="text-sm text-center text-Primary-theme">
              OUR VALUES.
            </p>
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

        {/**third section start.......................................................... */}
        <section className="w-full h-[75vh] flex justify-center items-center relative">
          <div className="bg-Footer-theme max-w-3xl h-1/2 flex">
            <img
              className="h-[360px] w-[280px] object-cover absolute top-[17%] ml-14"
              src="/contentImage/aboutModel.jpg"
              alt=""
            />
            <div className="w-1/2 ml-auto flex justify-center items-center">
              <div className="pr-4 pl-2 text-white">
                <p className="text-sm">ABOUT US</p>
                <h2 className="font-medium text-3xl pt-2 pb-3">
                  Style is a Reflection of your Attitude & your Personality.
                </h2>
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                  iure quam neque ducimus expedita quae laborum maxime molestias
                  incidunt dolore, soluta tempora nisi optio commodi vel qui!
                </p>
              </div>
            </div>
          </div>
        </section>
        {/**third section end.......................................................... */}

        {/**fourth section start.......................................................... */}
        <section className="w-full bg-Home-bg h-[90vh] ">
          <div className="text-center pt-7">
            <p className="text-sm pb-2">MEET THE CEO.</p>
            <h2 className="text-4xl font-medium">
              The Amazing woman behind the brand.
            </h2>
          </div>
          <div className="flex justify-center pt-10">
            <div className="max-w-3xl flex">
              <img
                className="h-full w-[340px] object-cover"
                src="/contentImage/aboutModel.jpg"
                alt=""
              />
              <div className="w-full pl-12 pr-4 pt-4">
                <h3 className="text-sm">CEO BEAUTYNESS.</h3>
                <p className="pt-2 pb-2 font-medium text-4xl">Sherlin D’Cruz</p>
                <p className="pb-3 text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  impedit beatae quia quae aliquam accusantium minima porro
                  tenetur quos eum consequuntur dicta facilis cum hic cupiditate
                  nulla quis ab itaque quo, esse voluptate fugiat amet sint
                  eius.
                </p>
                <div className="flex gap-4">
                  <img
                    className="h-12 w-12 object-contain"
                    src="/contentImage/Call.png"
                    alt=""
                  />
                  <p>09087876565</p>
                </div>
                <div className="flex pt-4 pb-4 gap-4">
                  <img
                    className="h-12 w-12 object-contain"
                    src="/contentImage/mail.png"
                    alt=""
                  />
                  <p className="">amrohore4real@gmail.com</p>
                </div>
                <button className="px-5 py-2 bg-slate-400">
                  MAKE A RESERVATION
                </button>
                <div className="flex gap-4 pt-4 pb-3">
                  <img
                    className="object-contain h-4 w-4"
                    src="/contentImage/f.png"
                    alt=""
                  />
                  <img
                    className="object-contain h-4 w-4"
                    src="/contentImage/twit.png"
                    alt=""
                  />
                  <img
                    className="object-contain h-4 w-4"
                    src="/contentImage/in.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/**fourth section end.......................................................... */}

        {/**fifth section start.......................................................... */}
        <section className="h-[110vh] w-full">
          <div className="max-w-3xl mx-auto flex mt-20">
            <div className="max-w-sm h-full pb-6">
              <p className="pt-3 text-sm">SHARE US</p>
              <h2 className="pt-3 pb-3 text-4xl font-medium">
                Follow us on <br /> Instagram.
              </h2>
              <p className="pb-10 text-md pr-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus, illum ad, assumenda consectetur saepe impedit
                optio perferendis possimus ab omnis sunt doloribus, maxime
                voluptatum explicabo? Alias.
              </p>

              <img
                className="h-96 object-contain"
                src="/contentImage/candles.jpg"
                alt=""
              />
            </div>
            <div className="max-w-lg">
              <img
                className="h-[60%] object-cover pb-7"
                src="/contentImage/massageTable.png"
                alt=""
              />
              <img
                className=" h-[40%] object-cover"
                src="/contentImage/massageBack.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="text-center pt-8">
            <button className=" bg-Primary-theme px-10 py-2 text-white">
              Contact Us
            </button>
          </div>
        </section>
        {/**fifth section end.......................................................... */}
      </main>
      <_Footer />
    </section>
  );
}

export default About;

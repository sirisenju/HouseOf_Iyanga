import React from "react";

function Home() {
  return (
    <main>
      {/*first section start................................................ */}
      <section className="h-screen flex">
        <div className="w-1/2 bg-Home-bg flex items-center justify-center">
          <div className="max-w-sm p-3">
            <p className="text-xs text-Secondary-theme">WELCOME TO BEAUTYNESS!</p>
            <h1 className="text-5xl font-medium pb-6 pt-2">
              Beauty is power. A smile is its sword.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam quod id modi.
            </p>
            <div className="pt-6 pb-2">
              <button className="px-6 py-2 bg-Secondary-theme text-white">
                Make A Reservation
              </button>
            </div>
          </div>
        </div>
        <div className="bg-homeRightImage w-1/2 h-full flex items-center">
          <div className="h-96 w-80 border-8 border-l-0 border-white flex items-center relative z-10">
            <img
              className="object-contain h-72 w-96 absolute right-11"
              src="/contentImage/faceskinModel.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      {/*first section end................................................ */}

      {/*second section start................................................ */}
      <section className="w-full bg-white h-[600px] flex items-center">
        <div className="w-[820px] bg-white mx-auto flex justify-between ">
          <div className="h-80 w-56">
            <img
              className="object-contain h-1/2"
              src="/contentImage/spa.jpg"
              alt=""
            />
            <div className="">
              <h2 className="text-2xl font-medium pt-2 pb-1">Spa & Massage</h2>
              <p className="text-sm pb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                eum aut cum?
              </p>
              <button className="px-5 py-2 border-2 rounded-sm border-Secondary-theme text-xs">
                Read More
              </button>
            </div>
          </div>
          <div className="h-80 w-56">
            <img
              className="object-contain h-1/2"
              src="/contentImage/hair.jpg"
              alt=""
            />
            <div className="">
              <h2 className="text-2xl font-medium pt-2 pb-1">Hair & Beauty</h2>
              <p className="text-sm pb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                eum aut cum?
              </p>
              <button className="px-5 py-2 border-2 rounded-sm border-Secondary-theme text-xs">
                Read More
              </button>
            </div>
          </div>
          <div className="h-80 w-56">
            <img
              className="object-contain h-1/2"
              src="/contentImage/bodyTreatment.jpg"
              alt=""
            />
            <div>
              <h2 className="text-2xl font-medium pt-2 pb-1">Body Treatment</h2>
              <p className="text-sm pb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                eum aut cum?
              </p>
              <button className="px-5 py-2 border-2 rounded-sm border-Secondary-theme text-xs">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*second section end................................................ */}

      {/*third section start................................................ */}
      <section className="w-full bg-Home-bg h-[620px] flex items-center justify-center">
        <div className="flex w-[850px] items-center justify-between">
          <div className="w-1/2 h-full flex items-center justify-center pt-4 pl-5">
              <div className="max-w-sm">
                <p className="text-xs text-Secondary-theme">ABOUT US</p>
                <h2 className="text-4xl font-medium pb-6 pt-1">The Beauty is about <br /> being Comfortable <br /> in your own skin!</h2>
                <p className="text-sm pb-3">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have 
                suffered alteration in some form, buying to <br /> injected humour, or randomised words which don't look 
                even many desktop publishing packages.</p>
                <div className="flex justify-between pb-5">
                  <img className="h-32 w-28 object-contain" src="/contentImage/beautyExperts.png" alt="" />
                  <img className="h-32 w-28 object-contain" src="/contentImage/greatServices.png" alt="" />
                  <img className="h-32 w-28 object-contain"  src="/contentImage/genuein.png" alt="" />
                </div>
              </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="relative">
              <img className="h-80 w-72 object-cover" src="/contentImage/aboutBG.jpg" alt="" />
              <img className="h-80 w-72 object-cover absolute top-6 right-6" src="/contentImage/faceskinModel2.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/*third section end................................................ */}

      {/*fourth section start................................................ */}
      <section className="w-full h-[140vh] bg-white flex justify-center items-center">
        <div className="w-1/2">
          <div className="flex justify-center">
            <div className="text-center max-w-sm pt-2 pb-4 mb-4">
              <p className="text-xs text-Secondary-theme">OUR SERVICES</p>
              <h2 className="text-3xl font-medium">We are Experienced in making you very Beautiful.</h2>
            </div>
          </div>
          <div className="bg-green-300 flex">
            <img className="h-96 w-96 object-cover" src="/contentImage/faceMask1.jpg" alt="" />
            <div className="bg-red-300 h-96 w-96 relative">price lists
              <div className="h-14 w-14 bg-Secondary-theme absolute bottom-0 left-0"></div>
            </div>
          </div>
          <div className="bg-green-500 flex ">
            <div className="bg-red-200 h-96 w-96 relative">price lists
              <div className="h-14 w-14 bg-Secondary-theme absolute top-0 right-0"></div>
            </div>
            <img className="h-96 w-96 object-cover" src="/contentImage/faceMask2.jpg" alt="" />
          </div>
        </div>
      </section>
      {/*fourth section end................................................ */}

      {/*fifth section start................................................ */}
      <section className="w-full h-[60vh] bg-Home-bg flex items-center justify-center">
        <div className="w-1/2">
          <div className="text-center p-7">
            <p className="text-xs">TESTIMONIALS</p>
            <h2 className="text-3xl font-medium">What Our Customers says...</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-white h-full w-1/2">
              <div className="px-6 py-5 text-sm w-full h-full">
                  “ It is a long established fact 
                that a reader will be tracked distracted by the readable content of a page is when looking at its layout. 
                The point of using Lorem of distribution it look like readable English “
                </div>
              <div className="bg-Intermediary-theme flex justify-between p-3">
                <div className="flex">
                  <img className="object-contain h-16 w-16" src="/contentImage/malereviewer.jpg" alt="" />
                  <div className="pl-1 pt-1">
                      <img className="object-contain" src="/contentImage/Reviews.png" alt="" />
                      <p className="text-sm text-white">Gwen Stacy</p>
                      <p className="text-sm text-white">United States</p>
                    </div>
                </div>
                <div className="pt-1 pr-1">
                    <img className="object-contain h-10 w-11" src="/contentImage/commaIcon.png" alt="" />
                  </div>
              </div>
            </div>
            <div className="bg-white h-full w-1/2">
              <div className="px-6 py-5 text-sm w-full h-full">
                <p>“ It is a long established fact 
                  that a reader will be tracked distracted by the readable content of a 
                  page is when looking at its layout. 
                  The point of using Lorem of distribution it look like readable English “</p>
              </div>
              <div className="bg-Intermediary-theme flex justify-between p-3">
                <div className="flex">
                    <img className="object-contain h-16 w-16" src="/contentImage/femaleReviewer.jpg" alt="" />
                    <div className="pl-1 pt-1">
                      <img className="object-contain" src="/contentImage/Reviews.png" alt="" />
                      <p className="text-sm text-white">Gwen Stacy</p>
                      <p className="text-sm text-white">United States</p>
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
      <section className="w-full h-[80vh] bg-white flex justify-center items-center">
        <div className="bg-Home-bg2 pl-6 w-1/2 gap-7 flex items-center">
          <div className="w-1/2 h-full"> 
            <p className="text-xs">FLAT DISCOUNT</p>
            <h2 className="text-3xl font-medium pt-3">Claim up to 50% offer on the most popular <br />services.....</h2>
            <p className="text-sm pt-3 pb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
              alteration in some form, buying to injected humour, or randomised words.</p>
              <div className="flex justify-between items-center border-2 border-Secondary-theme h-28 w-full">
                <div >
                  <span className="">Mail us: beautyness@gmail.com</span>
                  <br />
                  <span className="">Call us: +234 983 4564 554 </span>
                </div>
                <img className="h-32 w-32 object-contain" src="/contentImage/Offer.png" alt="" />
              </div>
          </div>
          <div className="bg-Home-bg w-1/2 h-full flex justify-center py-10">
            <form action="">
              <div className="">
                <input className="w-72 py-2 px-2 mb-3 border-2 border-Secondary-theme outline-none " placeholder="Name" type="text" />
              </div>
              <div className="">
                <input className="w-72 py-2 px-2 mb-3 border-2 border-Secondary-theme outline-none" placeholder="Name" type="text" />
              </div>
              <div className="">
                <input className="w-72 py-2 px-2 mb-3 border-2 border-Secondary-theme outline-none" placeholder="Name" type="text" />
              </div>
              <div className="">
                <input className="w-72 mb-3 py-2 px-2 outline-none border-2 border-Secondary-theme" placeholder="Name" type="text" />
              </div>
              <div className="mb-3">
                <textarea name="text" id="" className="w-72 h-28 py-2 px-2 outline-none border-2 border-Secondary-theme" placeholder="Any Note For Us?"></textarea>
              </div>
              <div className="w-72 h-11 bg-Secondary-theme flex items-center justify-center">
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
  );
}

export default Home;

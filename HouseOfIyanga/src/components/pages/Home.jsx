import React from "react";

function Home() {
  const priceList = [
    {
      id: 1,
      item: "Full makeup",
      price: "17.00",
    },
    {
      id: 2,
      item: "Face mask",
      price: "7.20",
    },
    {
      id: 3,
      item: "Eyebrows shapening",
      price: "11.63",
    },
    {
      id: 4,
      item: "Hair styling",
      price: "16.62",
    },
  ];

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

      {/*second section start................................................ 
      <section className="w-full bg-white max-[520px]:h-full md:h-[600px] flex items-center">
        <div className="w-[820px] bg-white mx-auto flex justify-between max-[520px]:inline p-4">
          <div className="h-80 w-56 max-[520px]:w-full mb-28">
            <img
              className="h-1/2 w-full object-cover max-[520px]:object-center max-[520px]:object-cover max-[520px]:h-3/4"
              src="/contentImage/spa.jpg"
              alt=""
            />
            <div className="max-w-md">
              <h2 className="max-[520px]:text-3xl sm:text-2xl font-medium pt-2 pb-1">Spa & Massage</h2>
              <p className="max-[520px]:text-lg sm:text-sm pb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                eum aut cum?
              </p>
              <button className="px-5 py-2 border-2 rounded-sm border-Secondary-theme text-xs max-[520px]:text-sm">
                Read More
              </button>
            </div>
          </div>
          <div className="h-80 w-56 max-[520px]:w-full mb-28">
            <img
              className="h-1/2 w-full object-cover max-[520px]:object-center max-[520px]:object-cover max-[520px]:h-3/4"
              src="/contentImage/hair.jpg"
              alt=""
            />
            <div className="max-w-md">
              <h2 className="max-[520px]:text-3xl sm:text-2xl font-medium pt-2 pb-1">Hair & Beauty</h2>
              <p className="max-[520px]:text-lg sm:text-sm pb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                eum aut cum?
              </p>
              <button className="px-5 py-2 border-2 rounded-sm border-Secondary-theme text-xs max-[520px]:text-sm">
                Read More
              </button>
            </div>
          </div>
          <div className="h-80 w-56 max-[520px]:w-full mb-28">
            <img
              className="h-1/2 w-full object-cover max-[520px]:object-center max-[520px]:object-cover max-[520px]:h-3/4"
              src="/contentImage/bodyTreatment.jpg"
              alt=""
            />
            <div className="max-w-md">
              <h2 className="max-[520px]:text-3xl sm:text-2xl font-medium pt-2 pb-1">Body Treatment</h2>
              <p className="max-[520px]:text-lg sm:text-sm pb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                eum aut cum?
              </p>
              <button className="px-5 py-2 border-2 rounded-sm border-Secondary-theme text-xs max-[520px]:text-sm">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*second section end................................................ */}

      {/*third section start................................................ 
      <section className="w-full bg-Home-bg h-[80vh] max-[639px]:h-full flex items-center justify-center overflow-hidden">
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
                <p className="md:text-sm max-[639px]:text-lg pb-3">There are many variations of passages of Lorem Ipsum available, but the majority have 
                suffered alteration in some form, buying to injected humour, or randomised words which don't look 
                even many desktop publishing packages.</p>
                <div className="flex max-[639px]:justify-between md:gap-3 pb-5 pt-2 max-[364px]:hidden">
                  <img className="h-32 max-[690px]:w-24 w-28 object-contain" src="/contentImage/beautyExperts.png" alt="" />
                  <img className="h-32 max-[690px]:w-24 w-28 object-contain" src="/contentImage/greatServices.png" alt="" />
                  <img className="h-32 max-[690px]:w-24 w-28 object-contain"  src="/contentImage/genuein.png" alt="" />
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

      {/*fourth section start................................................ 
      <section className="w-full h-[140%] bg-white flex justify-center items-center overflow-hidden">
        <div className="xl:w-1/2 max-[850px]:w-full max-[1200px]:p-4">
          <div className="flex justify-center">
            <div className="text-center max-w-sm pt-2 pb-4 mb-4">
              <p className="sm:text-xs max-[639px]:text-sm text-Secondary-theme">OUR SERVICES</p>
              <h2 className="sm:text-3xl max-[639px]:text-4xl font-medium">
                We are Experienced in making you very Beautiful.
              </h2>
            </div>
          </div>
          <div className="flex max-[1400px]:inline max-[1639px]:w-full">
            <img
              className="h-96 max-[1400px]:h-80 w-full object-cover"
              src="/contentImage/faceMask1.jpg"
              alt=""
            />
            <div className="h-96 w-full relative max-[370px]:mb-16">
              <div className="max-[1639px]:p-3 max-[1639px]:w-full">
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
                      <p>The versions have evolved over the there are</p>
                    </div>
                  </div>
                ))}
                <button className="text-xs px-4 py-2 border-2 mt-2 ml-4 border-Secondary-theme">
                  GET AN APPOINTMENT
                </button>
              </div>
              <div className="h-14 w-14 bg-Secondary-theme absolute bottom-0 left-0 max-[1400px]:hidden" />
            </div>
          </div>
          {/*item 2............................................................................... 
          <div className="flex max-[1400px]:inline max-[1300px]:w-full mb-10">
            <img
              className="h-96 max-[1400px]:h-80 min-[1461px]:hidden w-full object-cover"
              src="/contentImage/faceMask2.jpg"
              alt=""
            />
            <div className="h-96 w-full relative max-[370px]:mb-16">
              <div className="pt-14 max-[1400px]:pt-6 max-[1400px]:p-3 max-[1400px]:w-full pr-6">
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
                      <p>The versions have evolved over the there are</p>
                    </div>
                  </div>
                ))}
                <button className="text-xs px-4 py-2 border-2 mt-2 ml-4 border-Secondary-theme">
                  GET AN APPOINTMENT
                </button>
              </div>
              <div className="h-14 w-14 bg-Secondary-theme absolute top-0 right-0 max-[1400px]:hidden" />
            </div>
            <img
              className="h-96 w-full max-[1460px]:hidden object-cover"
              src="/contentImage/faceMask2.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      {/*fourth section end................................................ */}

      {/*fifth section start................................................ 
      <section className="w-full h-full max-[920px]:pb-8 bg-Home-bg flex items-center justify-center overflow-hidden">
        <div className="lg:max-w-5xl max-[920px]:w-full p-5">
          <div className="text-center p-7">
            <p className="sm:text-xs max-[639px]:text-sm">TESTIMONIALS</p>
            <h2 className="sm:text-3xl max-[639px]:text-4xl font-medium">What Our Customers says...</h2>
          </div>
          <div className="flex items-center gap-6 max-[920px]:inline ">
            <div className="bg-white h-full w-full ">
              <div className="px-6 py-5 text-lg w-full h-full">
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
            <div className="bg-white h-full w-full max-[920px]:mt-5">
              <div className="px-6 py-5 text-lg w-full h-full">
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

      {/*sixth section start................................................ 
      <section className="w-full max-[920px]:h-full h-[80vh] max-[1190px]:h-[150vh] bg-white flex justify-center items-center">
        <div className="bg-Home-bg2 pl-6 w-1/2 lg:w-[60%] max-[1190px]:block max-[1190px]:p-8 max-[720px]:w-full gap-7 flex items-center">
          <div className="max-w-xs mx-auto h-full max-[1190px]:max-w-lg"> 
            <p className="sm:text-xs max-[639px]:text-lg">FLAT DISCOUNT</p>
            <h2 className="sm:text-3xl max-[639px]:text-4xl font-medium pt-3">Claim up to 50% offer on the most popular <br />services.....</h2>
            <p className="text-lg pt-3 pb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
              alteration in some form, buying to injected humour, or randomised words.</p>
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
  );
}

export default Home;

import React from "react";

function Home() {
  return (
    <main>
      <section className="h-screen flex">
        <div className="w-1/2 bg-Home-bg flex items-center justify-center">
          <div className="max-w-sm p-3">
            <p className="text-sm">Welcome to Beautyness!</p>
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
      <section className="w-full bg-white h-[480px] flex items-center">
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
    </main>
  );
}

export default Home;

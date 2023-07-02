import React from "react";
import _Header from "../sections/_Header";
import _Footer from "../sections/_Footer";

function Services() {
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
    <section>
      <_Header />
      <main className="pt-[100px]">
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
          {/*item 2............................................................................... */}
          <div className="flex max-[1400px]:inline max-[1300px]:w-full">
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
          {/*item 3............................................................................... */}
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
          
          {/*item 4............................................................................... */}
          <div className="flex max-[1400px]:inline max-[1300px]:w-full">
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
          {/*item 5............................................................................... */}
          <div className="flex max-[1400px]:inline max-[1639px]:w-full mb-10">
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
        </div>
      </section>
      {/*fourth section end................................................ */}
      </main>
      <_Footer />
    </section>
  );
}

export default Services;

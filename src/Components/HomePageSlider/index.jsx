import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import leftArrowIcon from "/left-arrow.svg"; // Ajusta esta ruta
import rightArrowIcon from "/right-arrow.svg"; // Ajusta esta ruta

function HomePageSlider() {
  return (
    <>
      <section className="hidden sm:block relative -top-40 border-b-2 border-black cursor-pointer bg-customYellow w-screen overflow-hidden ">
        <div className="w-screen overflow-hidden hd:h-[593px] fullhd:h-[923px] qhd:h-[2313px] 4k:h-[1713px] relative top-[-90px] hd:top-[60px] fullhd:top-[90px] qhd:top-[-50px] 4k:top-[160px] md:h-[450px] md:top-20">
          <div className="w-screen overflow-hidden scale-150">
            <Carousel
              swipeable={true}
              emulateTouch={true}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              centerMode={false}
              infiniteLoop={true}
              transitionTime={20000}
              stopOnHover={false}
              swipeScrollTolerance={200}
              className="scale-125 h-[800px] relative top-[150px] 4k:h-[1513px] 4k:top-[330px]"
            >
              <div>
                {/* Button with an overlay that contains a link */}
                <div>
                  <img
                    src="/carousel-image.png"
                    alt="Image for the Carousel"
                    className="w-full h-full inline-block cursor-pointer mt-20"
                  />
                  {/* Overlay */}

                  <button className="absolute top-60 flex items-center justify-center opacity-0 transition-opacity left-[15%] hover:opacity-100">
                  <NavLink
                      to={`/product-detail/${5}`}
                      className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                    >
                      Converse All Star
                    </NavLink>
                  </button>

                  <button className="absolute top-60 flex items-center justify-center opacity-0 transition-opacity left-[42%] hover:opacity-100">
                    <NavLink
                      to={`/product-detail/${17}`}
                      className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                    >
                      Converse All Star
                    </NavLink>
                  </button>
                  <button className="absolute top-60 flex items-center justify-center opacity-0 transition-opacity left-[62%] hover:opacity-100">
                    <Link
                      to="/destination1"
                      className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                    >
                      Converse All Star
                    </Link>
                  </button>
                  <button className="absolute top-60 flex items-center justify-center opacity-0 transition-opacity left-[85%] hover:opacity-100">
                    <Link
                      to="/destination1"
                      className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                    >
                      Converse All Star
                    </Link>
                  </button>
                </div>
              </div>
              <div>
                {/* Cloned image for infinite loop */}
                <div>
                  {/* Button with an overlay that contains a link */}
                  <div>
                    <img
                      src="/carousel-image.png"
                      alt="Image for the Carousel"
                      className="w-full h-full inline-block cursor-pointer mt-20"
                    />
                    {/* Overlay */}
                    <button className="absolute top-60 flex items-center justify-center opacity-0 transition-opacity left-[10%] hover:opacity-100">
                      <Link
                        to="/destination1"
                        className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                      >
                        Converse All Star
                      </Link>
                    </button>
                    <button className="absolute top-60 flex items-center justify-center opacity-0 transition-opacity left-[42%] hover:opacity-100">
                      <Link
                        to="/destination1"
                        className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                      >
                        Converse All Star
                      </Link>
                    </button>
                    <button className="absolute top-60 flex items-center justify-center opacity-0 transition-opacity left-[62%] hover:opacity-100">
                      <Link
                        to="/destination1"
                        className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                      >
                        Converse All Star
                      </Link>
                    </button>
                    <button className="absolute top-60 flex items-center justify-center opacity-0 transition-opacity left-[62%] hover:opacity-100">
                      <Link
                        to="/destination1"
                        className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                      >
                        Converse All Star
                      </Link>
                    </button>
                    <button className="absolute top-60 flex items-center justify-center opacity-0 transition-opacity left-[85%] hover:opacity-100">
                      <Link
                        to="/destination1"
                        className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                      >
                        Converse All Star
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Mobile carousel */}
      <section className="md:hidden relative border-b-2 border-black cursor-pointer -top-40 bg-customYellow h-[430px]">
        <div className="w-screen overflow-hidden max-w-screen-sm relative top-20">
          <Carousel
            swipeable={true}
            emulateTouch={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            centerMode={false} // Set centerMode to false to enable free swipe
            infiniteLoop={true}
            showArrows={false}
          >
            <div>
              {/* Button with an overlay that contains a link */}
              <div className="relative group">
                <img
                  src="mobile-slider-1.png"
                  alt="Image for the Carousel"
                  className="w-full h-auto inline-block cursor-pointer"
                />
                {/* Overlay */}
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity left-[230px]">
                  <Link
                    to="/destination1"
                    className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                  >
                    Tay Son T-Shirt
                  </Link>
                </button>
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -left-[630px]">
                  <Link
                    to="/destination1"
                    className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                  >
                    Tay Son T-Shirt
                  </Link>
                </button>
              </div>
            </div>
            <div>
              {/* Cloned image for infinite loop */}
              <div className="relative group h-[300px]">
                <img
                  src="mobile-slider-2.png"
                  alt="Image for the Carousel"
                  className="w-screen h-auto inline-block cursor-pointer object-cover"
                />
                {/* Overlay */}
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity left-[450px]">
                  <Link
                    to="/destination1"
                    className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                  >
                    Jedi Mind T-Shirt
                  </Link>
                </button>
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -left-[630px]">
                  <Link
                    to="/destination1"
                    className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                  >
                    Converse All Star
                  </Link>
                </button>
              </div>
            </div>
            <div>
              {/* Cloned image for infinite loop */}
              <div className="relative group h-[300px]">
                <img
                  src="mobile-slider-3.png"
                  alt="Image for the Carousel"
                  className="w-screen h-auto inline-block cursor-pointer object-cover"
                />
                {/* Overlay */}
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity left-[450px]">
                  <Link
                    to="/destination1"
                    className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                  >
                    Jedi Mind T-Shirt
                  </Link>
                </button>
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -left-[630px]">
                  <Link
                    to="/destination1"
                    className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                  >
                    Converse All Star
                  </Link>
                </button>
              </div>
            </div>
            <div>
              {/* Cloned image for infinite loop */}
              <div className="relative group h-[300px]">
                <img
                  src="mobile-slider-4.png"
                  alt="Image for the Carousel"
                  className="w-screen h-auto inline-block cursor-pointer object-cover"
                />
                {/* Overlay */}
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity left-[100px]">
                  <Link
                    to="/destination1"
                    className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                  >
                    Jedi Mind T-Shirt
                  </Link>
                </button>
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -left-[830px]">
                  <Link
                    to="/destination1"
                    className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                  >
                    Converse All Star
                  </Link>
                </button>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default HomePageSlider;

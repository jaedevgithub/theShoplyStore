import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { useSwipeable } from "react-swipeable";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomePageSlider() {
  return (
    <>
      <section className="hidden sm:block relative -top-20 border-b-2 border-black cursor-pointer bg-customYellow">
        <div className="w-screen overflow-hidden">
          <div className="w-full h-auto overflow-hidden">
            <Carousel
              swipeable={true}
              emulateTouch={true}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              centerMode={false} // Set centerMode to false to enable free swipe
              infiniteLoop={false}
              showArrows={false}
              transitionTime={1000}
              stopOnHover={false}
            >
              <div>
                {/* Button with an overlay that contains a link */}
                <div>
                  <img
                    src="public/Images/slideshow.png"
                    alt="Image for the Carousel"
                    className="w-full h-full inline-block cursor-pointer"
                  />
                  {/* Overlay */}
                  <button className="absolute -top-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity left-[15%]">
                    <Link
                      to="/destination1"
                      className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                    >
                      Jedi Mind T-Shirt
                    </Link>
                  </button>
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity right-[15%]">
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
                      src="public/Images/slideshow.png"
                      alt="Image for the Carousel"
                      className="w-full h-full inline-block cursor-pointer"
                    />
                    {/* Overlay */}
                    <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity left-[15%]">
                      <Link
                        to="/destination1"
                        className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
                      >
                        Jedi Mind T-Shirt
                      </Link>
                    </button>
                    <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity right-[15%]">
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
                  src="public/Images/1.png"
                  alt="Image for the Carousel"
                  className="w-full h-auto inline-block cursor-pointer"
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
                  src="public/Images/2.png"
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
                  src="public/Images/3.png"
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
                  src="public/Images/4.png"
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

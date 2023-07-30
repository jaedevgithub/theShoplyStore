import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomePageSlider() {
  return (
    <section className="relative top-5 border-b-2 border-black scale-150 cursor-pointer">
      <div className="w-screen overflow-hidden">
        <Carousel
          swipeable={true}
          emulateTouch={true} // Add this prop to enable touch event emulation
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          centerMode={true}
          centerSlidePercentage={100}
          infiniteLoop={true}
        >
          <div>
            <img
              src="src/Assets/Images/SLIDESHOW FOR WEB .png"
              alt="Image for the Carousel"
              className="w-full h-auto inline-block cursor-pointer"
            />
          </div>
          <div>
            {/* Cloned image for infinite loop */}
            <img
              src="src/Assets/Images/SLIDESHOW FOR WEB .png"
              alt="Image for the Carousel"
              className="w-full h-auto inline-block cursor-pointer"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default HomePageSlider;

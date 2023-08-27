import React, { useContext, useState, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import "/src/index.css";

const CategoryFilter = () => {
  // Access the shopping cart context
  const context = useContext(ShoppingCartContext);

  // State variables to track selected category and view modes
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentView, setCurrentView] = useState("desktop");

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    context.setSearchByCategory(category);
    setSelectedCategory(category);
  };

  // Effect to update view mode based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 820) {
        setCurrentView("mobile");
      } else {
        setCurrentView("desktop");
      }
    };

    // Initial check when the component mounts
    handleResize();

    // Add the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      {/* Category filter for desktop */}
      {currentView === "desktop" && (
        <section className="relative md:left-10 md:scale-125 md:mb-40 md:-mt-40 fullhd:scale-100 -mt-60 mr-40 hidden lg:block ">
          <img
            src="/categoryfilter-desktop.svg"
            alt="category-image"
            className="w-full h-full inline-block relative z-10 pointer-events-none"
          />
          <button
            onClick={() => handleCategoryClick("shoes")}
            className={`absolute top-1/2 left-1/2 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-0 bg-white text-white w-60 h-20 transition hover:border-b-4 hover:border-black ${
              selectedCategory === "shoes" ? "border-b-4 border-black" : ""
            } hd:w-[150px] hd:-ml-[330px] hd:top-[135px] 4k:top-[460px] 4k:left-[1330px] 4k:w-[500px] fullhd:w-[220px] fullhd:-ml-[435px] qhd:top-[225px] qhd:left-[900px] fullhd:top-[210px]`}
          >
            Shoes
          </button>
          <button
            onClick={() => handleCategoryClick("clothes")}
            className={`absolute top-1/2 left-1/2 cursor-pointer transform translate-x-1/2 -translate-y-1/2 z-0 bg-white text-white w-[350px] h-20 transition hover:border-b-4 hover:border-black ${
              selectedCategory === "clothes" ? "border-b-4 border-black" : ""
            } fullhd:w-[300px] hd:top-[135px] hd:-ml-[50px] hd:w-[205px] qhd:top-[225px] qhd:left-[950px] 4k:top-[460px] 4k:left-[1800px] 4k:w-[580px] fullhd:top-[210px] fullhd:ml-[-20px]`}
          >
            Clothes
          </button>
        </section>
      )}

      {/* Category filter for tablet */}
      {currentView === "mobile" && (
        <section className="hidden md:block lg:hidden overflow-hidden -mt-20 mb-60">
          <figure className="flex items-center justify-center relative -top-[-20px] overflow-hidden -ml-40 z-0">
            <img
              src="/categoryfilter-mobile-and-tablet.svg"
              alt="category-image"
              className="w-full h-full inline-block md:ml-40 sm:ml-0 scale-150 z-10 pointer-events-none"
            />
          </figure>

          <div className="md:flex lg:hidden grid gap-x-60 gap-y-20 grid-cols-2 w-screen relative -top-[170px] left-9 overflow-hidden justify-between">
            {/* Render clickable category options */}
            <span className="mt-6">
              <span className="relative left-6">
                <button
                  onClick={() => handleCategoryClick("shoes")}
                  className={`bg-none text-white cursor-pointer border-b-4 border-transparent hover:border-black w-[150px] ${
                    selectedCategory === "clothes"
                      ? "border-b-4 border-black"
                      : ""
                  }`}
                >
               <p className="opacity-0">Shoes</p>
                </button>
              </span>
              <span className="relative -right-[300px] tablet:-right-[340px]">
                <button
                  onClick={() => handleCategoryClick("clothes")}
                  className={`bg-none text-white border-b-4 border-transparent w-[185px] hover:border-black hover:underline ${
                    selectedCategory === "clothes"
                      ? "border-b-4 border-black underline"
                      : ""
                  }`}
                >
               <p className="opacity-0">Clothes</p>
                </button>
              </span>
            </span>
          </div>
        </section>
      )}

      {/* Category filter for mobile */}
      {currentView === "mobile" && (
        <section>
          <figure className="flex items-center justify-center md:hidden relative -top-[0px] overflow-hidden z-0">
            <img
              src="/categoryfilter-mobile-and-tablet.svg"
              alt="category-image"
              className="w-full h-full inline-block md:ml-40 sm:ml-0 scale-150 z-10 pointer-events-none"
            />
          </figure>

          <div className="md:hidden lg:hidden grid gap-x-60 gap-y-20 grid-cols-2 w-screen relative -top-[95px] overflow-hidden ">
            {/* Render clickable category options */}
            <button
             onClick={() => {
              handleCategoryClick("shoes");
              setSelectedCategory("shoes");
            }}
              className={` bg-none text-white cursor-pointer border-b-2 border-transparent hover:border-black relative left-8 mt-[1px] z-2${
                selectedCategory === "clothes"
                  ? "border-b-2 border-black"
                  : ""
                  ? "border-black"
                  : ""
              }`}
            >
              <p className="opacity-0">Shoes</p>
            </button>
            <span className="relative -left-[70px]">
              <button
               onClick={() => {
                handleCategoryClick("clothes");
                setSelectedCategory("clothes");
              }}
                className={` bg-none text-white border-b-2 border-transparent w-[95px] hover:border-black mt-[1px] ${
                  selectedCategory === "clothes"
                    ? "border-b-2 border-black"
                    : ""
                    ? "border-black"
                    : ""
                }`}
              >
              <p className="opacity-0">Clothes</p>
              </button>
            </span>
          </div>
        </section>
      )}
    </>
  );
};

export default CategoryFilter;

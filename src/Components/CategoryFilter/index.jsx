import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import "/src/index.css";

const CategoryFilter = () => {
  const context = useContext(ShoppingCartContext);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to set the search category in the context when a category is clicked
  const handleCategoryClick = (category) => {
    context.setSearchByCategory(category);
    setSelectedCategory(category);
  };

  return (
    <>
      {/* Category filter for desktop*/}
      <section className="relative -mt-60 mr-40 hidden lg:block">
        <img
          src="SHOPLY (3).svg"
          alt="category-image"
          className="w-full h-full inline-block relative z-10 pointer-events-none"
        />
        <button
          onClick={() => handleCategoryClick("shoes")}
          className={`absolute top-1/2 left-1/2 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-0 bg-white text-white w-60 h-20 transition hover:border-b-4 hover:border-black ${
            selectedCategory === "shoes" ? "border-b-4 border-black" : ""
          } hd:w-[150px] hd:-ml-[335px] hd:top-[135px] 4k:top-[460px] 4k:left-[1330px] 4k:w-[500px] fullhd:w-[220px] fullhd:-ml-[450px] qhd:top-[225px] qhd:left-[915px] fullhd:top-[210px]`}
        >
          Shoes
        </button>
        <button
          onClick={() => handleCategoryClick("clothes")}
          className={`absolute top-1/2 left-1/2 cursor-pointer transform translate-x-1/2 -translate-y-1/2 z-0 bg-white text-white w-[350px] h-20 transition hover:border-b-4 hover:border-black ${
            selectedCategory === "clothes" ? "border-b-4 border-black" : ""
          } fullhd:w-[300px] hd:top-[135px] hd:-ml-[50px] hd:w-[205px] qhd:top-[225px] qhd:left-[925px] 4k:top-[460px] 4k:left-[1800px] 4k:w-[580px] fullhd:top-[210px] fullhd:ml-[-75px]`}
        >
          Clothes
        </button>
      </section>

      {/* Category filter for tablet*/}
      <section className="hidden md:block lg:hidden">
        <figure className="flex items-center justify-center relative -top-[160px] overflow-hidden -ml-40">
          <img
            src="SHOPLY (475 × 195 px) (1).svg"
            alt="category-image"
            className="w-full h-full inline-block md:ml-40 sm:ml-0 scale-150 z-10 pointer-events-none"
          />
        </figure>

        <section className="md:flex lg:hidden grid gap-x-60 gap-y-20 grid-cols-2 w-screen relative -top-[345px] left-9 overflow-hidden">
          {/* Render clickable category options */}
          <button
            onClick={() => handleCategoryClick("shoes")}
            className={`bg-white text-white cursor-pointer border-b-2 border-transparent hover:border-black w-[150px] relative left-8 mt-[10px]${
              selectedCategory === "clothes" ? "border-b-2 border-black" : ""
            }`}
          >
            Shoes
          </button>
          <span className="relative -left-[-80px]">
            <button
              onClick={() => handleCategoryClick("clothes")}
              className={`bg-white text-white border-b-2 border-transparent w-[195px] hover:border-black left-5 mt-[15px] ${
                selectedCategory === "clothes" ? "border-b-2 border-black" : ""
              }`}
            >
              Clothes
            </button>
          </span>
        </section>
      </section>

      {/* Category filter for mobile*/}
      <section>
        <figure className="flex items-center justify-center md:hidden relative -top-[0px] overflow-hidden">
          <img
            src="SHOPLY (475 × 195 px) (1).svg"
            alt="category-image"
            className="w-full h-full inline-block md:ml-40 sm:ml-0 scale-150  z-10  pointer-events-none"
          />
        </figure>

        <section className="md:hidden lg:hidden grid gap-x-60 gap-y-20 grid-cols-2 w-screen  relative -top-[95px] overflow-hidden">
          {/* Render clickable category options */}

          <button
            onClick={() => handleCategoryClick("shoes")}
            className={` bg-white text-white cursor-pointer border-b-2 border-transparent hover:border-black relative left-8 mt-[1px]${
              selectedCategory === "clothes"
                ? "border-b-2 border-black"
                : ""
                ? "border-black"
                : ""
            }`}
          >
            Shoes
          </button>
          <span className="relative -left-[70px]">
            <button
              onClick={() => handleCategoryClick("clothes")}
              className={` bg-white text-white border-b-2 border-transparent w-[95px] hover:border-black  mt-[1px] ${
                selectedCategory === "clothes"
                  ? "border-b-2 border-black"
                  : ""
                  ? "border-black"
                  : ""
              }`}
            >
              Clothes
            </button>
          </span>
        </section>
      </section>
    </>
  );
};

export default CategoryFilter;

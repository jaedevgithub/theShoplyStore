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
      <figure className="hidden md:flex items-center justify-center">
        <img
          src="public/Images/categoryfilter-black.png"
          alt="category-image"
          className="w-full h-full inline-block md:ml-40 sm:ml-0"
        />
      </figure>

      <section className="hidden md:grid gap-x-60 gap-y-20 grid-cols-2 w-full max-w-screen-lg relative -top-[210px] left-[40px] text-[54px]">
        {/* Render clickable category options */}
        <p
          onClick={() => handleCategoryClick("shoes")}
          className={`font-[Whyte] font-bold relative uppercase underline underline-offset-8 right-[95px] text-[54px] cursor-pointer] ${
            selectedCategory === "shoes" || selectedCategory === null
              ? "text-black"
              : "text-customGray"
          }`}
        >
          Shoes
        </p>
        <p
          onClick={() => handleCategoryClick("clothes")}
          className={`font-[Whyte] font-bold relative underline underline-offset-8 right-[170px] uppercase text-[54px] cursor-pointer  ${
            selectedCategory === "clothes" || selectedCategory === null
              ? "text-black"
              : "text-customGray"
          } `}
        >
          Clothes
        </p>
      </section>

      {/* Category filter for mobile*/}

      <figure className="flex items-center justify-center md:hidden relative -top-[120px]">
        <img
         src="public/Images/categoryfilter-mobile.png"
          alt="category-image"
          className="w-full h-full inline-block md:ml-40 sm:ml-0"
        />
      </figure>

      <section className="md:hidden grid gap-x-60 gap-y-20 grid-cols-2 w-full max-w-screen-lg relative -top-[210px]">
        {/* Render clickable category options */}
        <p
          onClick={() => handleCategoryClick("shoes")}
          className={`font-[Whyte] font-bold relative uppercase underline underline-offset-8 right-[-8px] text-[19px] top-[19px] cursor-pointer ${
            selectedCategory === "shoes" || selectedCategory === null
              ? "text-black"
              : "text-customGray"
          }`}
        >
          Shoes
        </p>
        <p
          onClick={() => handleCategoryClick("clothes")}
          className={`font-[Whyte] font-bold relative underline underline-offset-8 right-[170px] uppercase text-[19px] top-[19px] left-[-110px]  cursor-pointer  ${
            selectedCategory === "clothes" || selectedCategory === null
              ? "text-black"
              : "text-customGray"
          } `}
        >
          Clothes
        </p>
      </section>
    </>
  );
};

export default CategoryFilter;

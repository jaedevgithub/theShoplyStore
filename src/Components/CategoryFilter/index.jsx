import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const CategoryFilter = () => {
  const context = useContext(ShoppingCartContext);

  // Function to set the search category in the context when a category is clicked
  const handleCategoryClick = (category) => {
    context.setSearchByCategory(category);
  };

  return (
    <section className="hidden md: relative top-40 ">
      <section className="grid gap-x-60 gap-y-20 grid-cols-4 w-full max-w-screen-lg">
        {/* Render clickable category options */}
        <p onClick={() => handleCategoryClick("shoes")}>Shoes</p>
        <p onClick={() => handleCategoryClick("clothes")}>Clothes</p>
      </section>
    </section>
  );
};

export default CategoryFilter;

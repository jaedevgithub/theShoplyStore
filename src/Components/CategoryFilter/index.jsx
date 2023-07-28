import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const CategoryFilter = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <section className="relative top-40 ">
      <section className="grid gap-x-60 gap-y-20 grid-cols-4 w-full max-w-screen-lg">
        <p onClick={() => context.setSearchByCategory("shoes")}>Shoes</p>
        <p onClick={() => context.setSearchByCategory("clothes")}>Clothes</p>
      </section>
    </section>
  );
};

export default CategoryFilter;

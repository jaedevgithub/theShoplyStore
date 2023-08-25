import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import CategoryFilter from "../../Components/CategoryFilter";
import HomePageSlider from "../../Components/HomePageSlider";

function Home() {
  // Get the shopping cart context and extract filteredItems and items
  const context = useContext(ShoppingCartContext);
  const filteredProducts = context.filteredItems || context.items;
  const selectedProduct = filteredProducts[0]; // Get the first product in the filtered list

  return (
    <>
      <Layout>
        {/* Home page carousel component */}
        <HomePageSlider />

        {/* Product category filter componentsadasdasdas */}
        <CategoryFilter /> 

        {/* Main section */}
        <section>
          <div className="grid gap-x-6 gap-y-20 grid-cols-4 w-full max-w-screen-xl relative mx-auto">
            {/* Render a single Card with the selected product */}
            {selectedProduct && <Card data={selectedProduct} />}
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Home;

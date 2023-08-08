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

  return (
    <>
      <Layout>
        {/*Home page carousel component for desktop and mobile*/}

        <HomePageSlider></HomePageSlider>

        {/*Product category filter component for desktop and mobile*/}

        <CategoryFilter />

        {/* Main section for desktop view */}

        <section className="hidden md:grid gap-x-60 gap-y-20 grid-cols-4 w-full max-w-screen-lg relative right-28 top-0">
          {filteredProducts.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </section>
      </Layout>

      {/* Secondary section for mobile view */}

      <section className="md:hidden w-full right-14 mx-1 relative top-[-1250px]">
        <div className="grid grid-cols-2 gap-x-60 gap-y-20 items-center justify-center scale-50 relative">
          {filteredProducts.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;

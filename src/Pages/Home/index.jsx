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

        <section className="hidden md:grid gap-x-60 gap-y-20 grid-cols-4 w-full max-w-screen-lg relative left-[-6.6rem] top-0">
          {filteredProducts.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </section>

        {/* Secondary section for mobile view */}

        <section className="md:hidden w-screens h-[900px] relative top-[-50px]">
          <div className="grid grid-cols-1 gap-y-20 items-center">
            {filteredProducts.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Home;

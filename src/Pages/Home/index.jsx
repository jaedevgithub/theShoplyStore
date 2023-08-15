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

  // Determine the view based on screen size or other criteria

  const isDesktopView = window.innerWidth >= 1024;
  const isMobileView = window.innerWidth < 640;
  const isTabletView = !isDesktopView && !isMobileView;

  return (
    <>
      <Layout>
        {/* Home page carousel component for desktop and mobile */}
        <HomePageSlider></HomePageSlider>

        {/* Product category filter component for desktop and mobile */}
        <CategoryFilter />

        {/* Main section for desktop view */}
        {isDesktopView && (
          <section className="hidden md:hidden lg:block sm:w-screens relative top-[-50px]">
            <div className="grid gap-x-6 gap-y-20 grid-cols-4 w-full max-w-screen-xl relative mx-auto">
              {filteredProducts.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </div>
          </section>
        )}

        {/* Secondary section for mobile view */}
        {isMobileView && (
          <section className="md:hidden">
            <div className="grid grid-cols-2 items-center gap-y-20 gap-x-6">
              {filteredProducts.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </div>
          </section>
        )}

        {/* Secondary section for tablet view */}
        {isTabletView && (
          <section className="hidden md:block lg:hidden w-screens relative top-[-50px]">
            <div className="grid grid-cols-4 items-center gap-y-40 gap-x-6">
              {filteredProducts.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </div>
          </section>
        )}
      </Layout>
    </>
  );
}

export default Home;

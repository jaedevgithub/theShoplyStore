import React, { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import CategoryFilter from "../../Components/CategoryFilter";
import HomePageSlider from "../../Components/HomePageSlider";

function Home() {
  // Access the global context
  const context = useContext(ShoppingCartContext);

  // Extract filteredItems and items from the context
  const filteredProducts = context.filteredItems || context.items;

  // State to determine the view type
  const [isDesktopView, setIsDesktopView] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);

  // Function to handle window size changes
  const handleWindowSizeChange = () => {
    const width = window.innerWidth;
    setIsDesktopView(width >= 1024);
    setIsMobileView(width < 640);
    setIsTabletView(width >= 640 && width < 1024);
  };

  // Subscribe to window size changes
  useEffect(() => {
    // Execute once to set the initial view
    handleWindowSizeChange();

    // Add an event listener to detect window size changes
    window.addEventListener("resize", handleWindowSizeChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <Layout>
        <section className="mt-40">
          {/* Homepage carousel component for desktop and mobile */}
          <HomePageSlider />

          {/* Product category filter component for desktop and mobile */}
          <CategoryFilter />

          {/* Main section for desktop view */}
          {isDesktopView && (
            <section className="hidden md:hidden lg:block sm:w-screens md:left-2 relative mb-60 mt-20">
              <div className="grid gap-x-6 gap-y-20 grid-cols-4 w-full max-w-screen-xl relative mx-auto">
                {filteredProducts.map((item, index) => (
                  <Card key={index} data={item} />
                ))}
              </div>
            </section>
          )}

          {/* Secondary section for tablet view */}
          {isTabletView && (
            <section className="flex justify-center items-center h-screen top-[-50px] mt-[500px] mb-[600px]">
              <div className="hidden md:block lg:hidden w-screens relative ">
                <div className="grid grid-cols-4 items-center gap-y-40 gap-x-4">
                  {filteredProducts.map((item, index) => (
                    <Card key={index} data={item} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Mobile section for mobile view */}
          {isMobileView && (
            <section className="md:hidden flex justify-center items-center h-screen relative top-[1000px] mb-[2290px] mt-[290px]">
              <div className="grid grid-cols-2 items-center gap-y-[120px] gap-x-5 justify-center ">
                {filteredProducts.map((item, index) => (
                  <Card key={index} data={item} />
                ))}
              </div>
            </section>
          )}
        </section>
      </Layout>
    </>
  );
}

export default Home;

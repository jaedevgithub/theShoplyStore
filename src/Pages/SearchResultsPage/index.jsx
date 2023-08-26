import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

const SearchResultsPage = () => {
  // Access the shopping cart context
  const context = useContext(ShoppingCartContext);
  const location = useLocation();
  
  // State to manage search query and view size
  const [searchQuery, setSearchQuery] = useState("");
  const [isDesktopAndTabletView, setIsDesktopAndTabletView] = useState(true);
  const [isMobileView, setIsMobileView] = useState(true);

  // Function to handle window size changes
  const handleWindowSizeChange = () => {
    const width = window.innerWidth;
    setIsDesktopAndTabletView(width > 640);
    setIsMobileView(width < 767);
  };

  // Subscribe to window resize events
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    // Unsubscribe when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  // Get the search query from the URL parameter when the page loads
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    setSearchQuery(query || "");
  }, [location.search]);

  // Filter the items based on the search query
  const filteredItems = context.items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Search results for desktop and tablet */}
      {isDesktopAndTabletView && (
        <section>
          <h2 className="hidden md:block font-[Whyte] text-[58px] mb-20 mt-20 text-center">
            Search Results
          </h2>
          <div className="hidden md:grid md:gap-x-6 md:gap-y-20 md:grid-cols-4 w-full max-w-screen-xl relative mx-auto mb-60 font-[Whyte] md:scale-[0.99]">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <Card key={index} data={item} /> // Use the index as a unique key
              ))
            ) : (
              <p className="text-2xl font-semibold mb-40 mt-40 text-[58px] font-[Whyte]">
                NO ORDERS HERE, AAACKKK
              </p>
            )}
          </div>
        </section>
      )}

      {/* Search results for mobile */}
      <section className="mt-10 mb-10">
        {!isMobileView && (
          <div>
            {/* Search results for mobile */}
            <h2 className="md:hidden font-[Whyte] text-[38px] mb-5 mt-40 text-center">
              Search Results
            </h2>
            <div className="md:hidden flex justify-center flex-col items-center gap-y-[150px] w-screen">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <Card key={index} data={item} /> // Use the index as a unique key
                ))
              ) : (
                <p className="text-2xl font-semibold mb-40 mt-40 text-[28px] font-[Whyte]">
                  NO ORDERS HERE, AAACKKK
                </p>
              )}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default SearchResultsPage;

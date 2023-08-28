import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Card from "../../Components/Card";

const SearchResultsPage = () => {
  // Access the shopping cart context
  const context = useContext(ShoppingCartContext);
  const location = useLocation();

  // State to manage search query and view size
  const [searchQuery, setSearchQuery] = useState("");
  const [currentView, setCurrentView] = useState("desktop"); // Initialize as "desktop"

  // Function to handle window size changes
  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setCurrentView("mobile");
    } else {
      setCurrentView("desktop");
    }
  };

  // Initial check when the component mounts
  useEffect(() => {
    handleResize();
  }, []);

  // Subscribe to window resize events
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Unsubscribe when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
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
    <>
      {/* Search results for desktop and tablet */}
      {currentView === "desktop" && (
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
        {currentView === "mobile" && (
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
                <p className="text-2xl font-semibold mb-40 mt-40 text-[28px] ml-10 font-[Whyte]">
                  NO ORDERS HERE, AAACKKK
                </p>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SearchResultsPage;

import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

const SearchResultsPage = () => {
  const context = useContext(ShoppingCartContext);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

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
      {/* Search results desktop*/}
      <h2 className="hidden md:block">Search Results</h2>
      <section className="hidden md:block grid gap-x-60 gap-y-20 grid-cols-4 w-full max-w-screen-lg relative right-28">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <Card key={index} data={item} /> // Use the index as a unique key
          ))
        ) : (
          <p>No results found</p>
        )}
      </section>
      {/* Search results mobile*/}
      <h2 className="md:hidden">Search Results</h2>
      <section className="md:hidden flex justify-center flex-col items-center gap-y-20 w-screen ">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <Card key={index} data={item} /> // Use the index as a unique key
          ))
        ) : (
          <p>No results found</p>
        )}
      </section>
    </Layout>
  );
};

export default SearchResultsPage;

import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

const SearchResultsPage = () => {
  const context = useContext(ShoppingCartContext);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  // Obtener el valor de búsqueda del parámetro de URL al cargar la página
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    setSearchQuery(query || "");
  }, [location.search]);

  // Filtrar los elementos en función del valor de búsqueda
  const filteredItems = context.items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <h2>Search Results</h2>
      <section className="grid gap-x-60 gap-y-20 grid-cols-4 w-full max-w-screen-lg relative right-28">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <Card key={index} data={item} /> // Usamos el índice como clave única
          ))
        ) : (
          <p>No results found</p>
        )}
      </section>
    </Layout>
  );
};

export default SearchResultsPage;

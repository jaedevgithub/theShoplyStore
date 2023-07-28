import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import CategoryFilter from "../../Components/CategoryFilter";

function Home() {
  const context = useContext(ShoppingCartContext);

  // Obtener la lista de productos filtrada por categoría desde el contexto
  const filteredProducts = context.filteredItems || context.items;

  return (
    <>
      <Layout>
        Home
        <CategoryFilter></CategoryFilter>
        <section className="hidden md:grid gap-x-60 gap-y-20 grid-cols-4 w-full max-w-screen-lg relative right-28 top-60">
          {filteredProducts.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </section>
      </Layout>

      <section className="md:hidden w-screen max-w-screen-lg scale-50 mx-auto">
        <div className="grid grid-cols-2 gap-x-60 gap-y-20 items-center justify-center">
          {filteredProducts.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;

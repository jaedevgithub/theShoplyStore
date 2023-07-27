import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home() {
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <Layout>
        Home
        <section className="hidden md:grid gap-x-60 gap-y-20 grid-cols-4 w-full max-w-screen-lg relative right-28">
          {Array.isArray(context.items) ? ( // Use context.items instead of items
            context.items.map((item, index) => (
              <Card key={item.id + index} data={item} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </Layout>
      <section className="md:hidden w-screen max-w-screen-lg scale-50 mx-auto">
        <div className="grid grid-cols-2 gap-x-60 gap-y-20 items-center justify-center">
          {Array.isArray(context.items) ? (
            // Use context.items instead of items
            context.items.map((item, index) => (
              <div key={item.id + index} className="relative right-20 -ml-8">
                <Card data={item} />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;

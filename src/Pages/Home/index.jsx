import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://testing-api-cghc.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setItems([]);
      });
  }, []);

  return (
    <Layout>
      Home

      <section className="hidden md:grid gap-x-60 gap-y-20 grid-cols-4 w-full max-w-screen-lg relative right-28">
        {Array.isArray(items) ? (
          items.map((item, index) => <Card key={item.id + index} data={item} />)
        ) : (
          <p>Loading...</p>
        )}
      </section>

      <section className="md:hidden grid gap-x-60 gap-y-20 grid-cols-1 w-full max-w-screen-lg scale-90 items-center justify-center bottom-40">
        {Array.isArray(items) ? (
          items.map((item, index) => (
            <div key={item.id + index} className="grid-item">
              <Card data={item} />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>

    </Layout>
  );
}

export default Home;

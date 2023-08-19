import React, { useContext, useState, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";

const Card = ({ productId }) => {
  const context = useContext(ShoppingCartContext);
  const [products, setProducts] = useState([]); // State to store fetched products
  const [seventhProduct, setSeventhProduct] = useState(null); // State to store the seventh product
  const [hasFetched, setHasFetched] = useState(false); // Track whether the data has been fetched

  useEffect(() => {
    if (!hasFetched) {
      const fetchProducts = async () => {
        try {
          const response = await fetch(`https://testing-api-cghc.onrender.com/products`);
          const productsData = await response.json();
          setProducts(productsData.slice(0, 6)); // Fetch the first 6 products
          
          // Fetch the seventh product
          const seventhResponse = await fetch(`https://testing-api-cghc.onrender.com/products/${7}`);
          const seventhProductData = await seventhResponse.json();
          setSeventhProduct(seventhProductData);
          
          setHasFetched(true); // Mark data as fetched
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      fetchProducts();
    }
  }, [hasFetched]); // Include hasFetched as a dependency

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  return (
    <div>
     
      {seventhProduct && (
        <NavLink to={`/product-detail/${seventhProduct.id}`}>
          <button className="bg-blue cursor-pointer special-style" onClick={() => showProduct(seventhProduct)}>
            <p className="flex justify-between">
              <span className="text-[50px] font-[Whyte]">
                {hasFetched ? seventhProduct.title : "Loading..."}
              </span>
            </p>
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default Card;

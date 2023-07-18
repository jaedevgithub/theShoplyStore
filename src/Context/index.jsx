// ShoppingCartContext.js

import React, { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [productCounts, setProductCounts] = useState({});

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  useEffect(() => {
    const updatedCount = Object.values(productCounts).reduce(
      (totalCount, quantity) => totalCount + quantity,
      0
    );
    setCount(updatedCount);
  }, [productCounts]);

  const addProductToCart = (product, quantity = 1) => {
    const updatedCartProducts = [...cartProducts];
    const updatedProductCounts = { ...productCounts };

    if (updatedProductCounts[product.id]) {
      updatedProductCounts[product.id] += quantity;
    } else {
      updatedProductCounts[product.id] = quantity;
      updatedCartProducts.push(product);
    }

    setCartProducts(updatedCartProducts);
    setProductCounts(updatedProductCounts);
  };

  const removeProductFromCart = (product) => {
    const updatedProductCounts = { ...productCounts };
    const count = updatedProductCounts[product.id];

    if (count > 1) {
      updatedProductCounts[product.id] -= 1;
    } else {
      delete updatedProductCounts[product.id];
      setCartProducts(cartProducts.filter((item) => item.id !== product.id));
    }

    setProductCounts(updatedProductCounts);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        addProductToCart,
        removeProductFromCart,
        productCounts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

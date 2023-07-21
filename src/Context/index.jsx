import React, { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [productSizes, setProductSizes] = useState({}); // Updated state to store the selected sizes

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  useEffect(() => {
    const updatedCount = Object.values(productSizes).reduce(
      (totalCount, sizes) => totalCount + sizes.length,
      0
    );
    setCount(updatedCount);
  }, [productSizes]);

  const addProductToCart = (product, size) => {
    const productId = product.id;
    const updatedProductSizes = { ...productSizes };

    if (updatedProductSizes[productId]) {
      updatedProductSizes[productId].push(size);
    } else {
      updatedProductSizes[productId] = [size];
    }

    setProductSizes(updatedProductSizes);

    const existingProductIndex = cartProducts.findIndex(
      (p) => p.id === productId && p.size === size
    );

    if (existingProductIndex !== -1) {
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[existingProductIndex].quantity += 1;
      setCartProducts(updatedCartProducts);
    } else {
      setCartProducts((prevCartProducts) => [
        ...prevCartProducts,
        { ...product, size, quantity: 1 },
      ]);
    }
  };

  const removeProductFromCart = (product) => {
    const productId = product.id;
    const sizes = productSizes[productId];
    const updatedProductSizes = { ...productSizes };
    const count = updatedProductSizes[productId].length;

    if (count > 1) {
      updatedProductSizes[productId] = sizes.slice(0, -1);
    } else {
      delete updatedProductSizes[productId];
      setCartProducts(cartProducts.filter((item) => item.id !== productId));
    }

    setProductSizes(updatedProductSizes);
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
        productSizes,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

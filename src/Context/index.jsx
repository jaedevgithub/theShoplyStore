import React, { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [productSizes, setProductSizes] = useState([]);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  useEffect(() => {
    const updatedCount = productSizes.reduce(
      (totalCount, product) => totalCount + product.sizes.length,
      0
    );
    setCount(updatedCount);
  }, [productSizes]);

  const addProductToCart = (product, size) => {
    const productId = product.id;
    const existingProduct = cartProducts.find(
      (p) => p.id === product.id && p.size === size
    );

    if (existingProduct) {
      const updatedCartProducts = cartProducts.map((p) =>
        p.id === product.id && p.size === size
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
      setCartProducts(updatedCartProducts);
    } else {
      setCartProducts((prevCartProducts) => [
        ...prevCartProducts,
        { ...product, size, quantity: 1 },
      ]);
    }

    const productIndex = productSizes.findIndex((p) => p.id === productId);
    if (productIndex >= 0) {
      const updatedProductSizes = [...productSizes];
      updatedProductSizes[productIndex].sizes.push(size);
      setProductSizes(updatedProductSizes);
    } else {
      setProductSizes((prevProductSizes) => [
        ...prevProductSizes,
        { id: productId, sizes: [size] },
      ]);
    }
  };

  const removeProductFromCart = (product) => {
    const productId = product.id;
    const productIndex = productSizes.findIndex((p) => p.id === productId);
    if (productIndex >= 0) {
      const updatedProductSizes = [...productSizes];
      updatedProductSizes[productIndex].sizes.pop();
      setProductSizes(updatedProductSizes);
    }

    setCartProducts(cartProducts.filter((item) => item.id !== productId));
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

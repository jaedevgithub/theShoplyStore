import React, { useContext, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ShoppingCartContext } from "../../Context";
import Layout from "../Layout";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  const { productToShow } = context;

  if (!productToShow) {
    return <p>Loading...</p>; // Handle the case where productToShow is null or undefined.
  }

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const category = productToShow?.category?.name || "";

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const addProductsToCart = () => {
    if (selectedSize) {
      context.addProductToCart(productToShow, selectedSize);
      context.setCount(context.count + 1);
    } else {
      console.error("Please select a size before adding to the cart.");
    }
  };

  return (
    <>
      {/* Desktop product detail page */}
      <section className="hidden sm:hidden md:hidden lg:flex items-center justify-center -mb-[900px] mt-20">
        <div className="hidden md:flex flex-row-3 items-center justify-between mb-60 relative mt-80">
          <aside>
            {/* Display product images */}
            {productToShow.images.map((image, index) => (
              <figure
                key={index}
                className="-mb-4 scale-75 relative -top-72 right-60"
              >
                <img
                  className={`w-32 h-32 object-cover rounded-customBorder  ${
                    selectedImage === image ? "border-2 border-black" : ""
                  }`}
                  src={image}
                  alt={productToShow.title}
                  onClick={() => handleImageClick(image)}
                />
              </figure>
            ))}
          </aside>
          {/* Display main product image */}
          <figure className="h-100 w-96 scale-150 relative right-20 top-2">
            <img
              className="h-[600px] w-[900px] object-cover rounded-customBorder "
              src={selectedImage || productToShow.images[0]}
              alt={productToShow.title}
            />
          </figure>
          <div className="flex flex-col justify-between relative mt-10 -top-80 -right-20">
            <div className="flex flex-col items-left">
              {/* Display product details */}
              <p className="text-xl">{category}</p>
              <span>
                <h2 className="text-4xl mb-5 font-[WhyteInktrap] font-semibold text-[48px] w-[300px]">
                  {productToShow.title}
                </h2>
              </span>
              <p className="text-xl mb-5">{productToShow.description}</p>
            </div>
            <div>
              <h3 className="text-2xl mb-2">Sizes:</h3>
              {/* Display product sizes */}
              {productToShow.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`inline-block border border-black rounded-customBorder  px-3 py-1 text-sm font-semibold mr-2 mb-2 ${
                    selectedSize === size ? "bg-gray-200" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <p>Selected Size: {selectedSize}</p>
            {/* Add to cart button */}
            <button
              className="font-semibold border-2 border-black rounded-customBorder  p-2 text-lg cursor-pointer flex items-center justify-center h-9 mb-4 mt-4 uppercase"
              onClick={addProductsToCart}
              disabled={!selectedSize}
            >
              Add ${productToShow.price}
            </button>
          </div>
        </div>
      </section>

      {/* Mobile and tablet product detail page */}
      <section className="sm:block md:block xl:hidden mt-[180px]  -mb-[940px] top-10">
        <div className="flex flex-col items-left">
          {/* Display product details on mobile */}
          <p className="text-xl relative ml-10">{category}</p>
          <h2 className="text-4xl mb-5 ml-10">{productToShow.title}</h2>
          <p className="text-xl mb-5 ml-10">{productToShow.description}</p>
        </div>
        {/* Display carousel of product images on mobile */}
        <Carousel
          className="rounded-xl relative mx-auto"
          swipeable={true}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          emulateTouch={true}
          showIndicators={false}
          centerMode={true}
          centerSlidePercentage={100}
        >
          {productToShow.images.map((image, index) => (
            <div
              className="h-80 w-80 mx-auto flex justify-center items-center"
              key={index}
            >
              <img
                src={image}
                alt={productToShow.title}
                className="h-full w-full object-cover rounded-customBorder"
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </Carousel>
        {/* Add to cart button on mobile */}
        <div className="mx-12 mt-4">
          <h3 className="text-2xl mb-2">Sizes:</h3>
          <div className="flex flex-row items-center justify-left mx-auto">
            {/* Display product sizes */}
            {productToShow.sizes.map((size) => (
              <button
                key={size} // Use the size value directly as the key.
                onClick={() => handleSizeSelect(size)}
                className={`inline-block border border-black rounded-customBorder px-3 py-1 text-sm font-semibold mr-2 mb-2 ${
                  selectedSize === size ? "bg-gray-200" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <p>Selected Size: {selectedSize}</p>
        </div>
        {/* Add to cart button */}
        <div className="flex items-center justify-center">
          <button
            className="font-semibold border-2 border-black rounded-customBorder p-2 text-lg cursor-pointer flex items-center justify-center h-9 mb-4 mt-4 uppercase w-72"
            onClick={addProductsToCart}
            disabled={!selectedSize}
          >
            Add ${productToShow.price}
          </button>
        </div>
      </section>
      <Layout></Layout>
    </>
  );
};

export default ProductDetail;

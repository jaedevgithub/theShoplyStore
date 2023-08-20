import React, { useContext, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  const { productToShow } = context;

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
      context.setCount((count) => count + 1);
    } else {
      console.error("Please select a size before adding to the cart.");
    }
  };

  // Use window.innerWidth to determine screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Add event listener to update screenWidth when the window is resized
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      if (newScreenWidth !== screenWidth) {
        setScreenWidth(newScreenWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      // Remove event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <>
      <Layout>
        {screenWidth >= 768 && ( // Render if screen width is greater than or equal to 768px
          <section className="hidden lg:flex items-center justify-center hd:-mb-[350px] hd:-mt-60 fullhd:mb-[-1550px] fullhd:mt-[-1540px] hd:-mt-20 hd:scale-75 fullhd:scale-100 4k:mb-[-2500px] 4k:mt-[-3700px]">
            {/* Desktop product detail code */}
            <div className="hidden md:flex flex-row-3 items-center justify-between mb-60 relative mt-80">
              <aside>
                {/* Display product images */}
                {productToShow.images.map((image, index) => (
                  <figure
                    key={index}
                    className="-mb-4 scale-75 relative -top-72 right-60"
                  >
                    <img
                      className={`w-32 h-32 object-cover rounded-customBorder ${
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
                  className="h-[600px] w-[900px] object-cover rounded-customBorder"
                  src={selectedImage || productToShow.images[0]}
                  alt={productToShow.title}
                />
              </figure>
              <div className="flex flex-col justify-between relative mt-10 -top-[255px] -right-20">
                <div className="flex flex-col items-left">
                  {/* Display product details */}
                  <span className="bg-green-500 rounded-full flex w-[110px] h-[36px] items-center mb-5">
                    <p className="font-[Whyte] ml-4 text-xl font-bold mt-[1px]">
                      {category}
                    </p>
                  </span>
                  <span>
                    <h2 className="mb-5 font-[WhyteInktrap] font-[600] text-[60px] mt-5">
                      {productToShow.title}
                    </h2>
                  </span>
                </div>
                <div>
                  {/* Display product sizes */}
                  {productToShow.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`w-[50px] h-[50px] font-[Whyte] text-center inline-block border border-black rounded-full text-sm font-semibold mr-2 mb-2 ${
                        selectedSize === size ? "bg-black text-white" : ""
                      }`}
                    >
                      <p className="mt-[1px]">{size}</p>
                    </button>
                  ))}
                </div>
                <p className="mt-2 font-[Whyte] font-bold">
                  Selected Size: {selectedSize}
                </p>
                {/* Add to cart button */}
                <button
                  className="font-bold font-[Whyte] border-2 border-black rounded-customBorder p-2 text-lg cursor-pointer flex items-center justify-center h-9 mb-4 mt-4 uppercase w-[466px] h-[44px] font-bold font-[Whyte] border-4 border-black hover:bg-black hover:text-white"
                  onClick={addProductsToCart}
                  disabled={!selectedSize}
                >
                  Add ${productToShow.price}
                </button>
                <p className="text-[24px] mb-5 font-[Whyte]">
                  {productToShow.description}
                </p>
              </div>
            </div>
          </section>
        )}

        {screenWidth < 768 && ( // Render if screen width is less than 768px
          <section className="sm:block md:block xl:hidden mt-[180px] md:mb-[-1320px]">
            {/* Mobile and tablet product detail code */}
            <div className="flex flex-col items-left">
              {/* Display product details on mobile */}
              <span className="bg-green-500 rounded-full flex w-[110px] h-[36px] items-center mb-5 ml-8 text-center">
                <p className="font-[Whyte ml-4 text-xl font-bold mt-[1px] mb-[4px]">
                  {category}
                </p>
              </span>
              <h2 className="font-[WhyteInktrap] font-bold text-4xl mb-5 ml-8">
                {productToShow.title}
              </h2>
              <p className="font-[Whyte] text-xl mb-5 ml-8">
                {productToShow.description}
              </p>
            </div>
            {/* Display carousel of product images on mobile */}
            <Carousel
              className="relative mx-auto mt-10 mb-10 w-screen"
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
                    className="h-full w-full object-cover rounded-lg"
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              ))}
            </Carousel>
            {/* Add to cart button on mobile */}
            <div className="mx-12 mt-4">
              <div className="flex flex-row items-center justify-left mx-auto">
                {/* Display product sizes */}
                {productToShow.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={`font-[Whyte] w-[50px] h-[50px] font-[Whyte] text-center inline-block border border-black rounded-full text-sm font-semibold mr-2 mb-2 ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    <p className="mt-[1px]">{size}</p>
                  </button>
                ))}
              </div>
              <p className="font-[Whyte] font-bold mt-2">
                Selected Size: {selectedSize}
              </p>
            </div>
            {/* Add to cart button */}
            <div className="flex items-center justify-center">
              <button
                className="font-bold font-[Whyte] border-2 border-black font-semibold rounded-customBorder p-2 text-lg cursor-pointer flex items-center justify-center h-9 mb-4 mt-4 uppercase w-[320px] hover.bg-black hover.text-white"
                onClick={addProductsToCart}
                disabled={!selectedSize}
              >
                Add ${productToShow.price}
              </button>
            </div>
          </section>
        )}
      </Layout>
    </>
  );
};

export default ProductDetail;

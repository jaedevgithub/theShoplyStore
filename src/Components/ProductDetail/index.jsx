import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  // Access the shopping cart context
  const context = useContext(ShoppingCartContext);
  const { items, loadDataFromAPI } = context;

  // Access the router navigation function
  const navigate = useNavigate();
  const { productId } = useParams();

  // Find the product to display based on productId
  const productToShow = items.find(
    (product) => product.id === parseInt(productId)
  );
  const category = productToShow?.category?.name || "";

  // States to manage selected image, size, and view
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [currentView, setCurrentView] = useState("desktop");

  useEffect(() => {
    // Check if the screen width is less than or equal to the width of tablets
    const handleResize = () => {
      if (window.innerWidth <= 820) {
        setCurrentView("mobile");
      } else {
        setCurrentView("desktop");
      }
    };

    // Initial check when the component mounts
    handleResize();

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Load data from the API if there are no products
  useEffect(() => {
    if (items.length === 0) {
      loadDataFromAPI();
    }
  }, [items, loadDataFromAPI]);

  // Handle the case when the product is not found
  useEffect(() => {
    if (!productToShow) {
      // Redirect to the current product detail page
      navigate(`/product-detail/${productId}`);
    }
  }, [productToShow, navigate, productId]);

  // Function to handle image clicks
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Function to add products to the cart
  const addProductsToCart = () => {
    if (selectedSize) {
      context.addProductToCart(productToShow, selectedSize);
      context.setCount((count) => count + 1);
    } else {
      console.error("Please select a size before adding to the cart.");
    }
  };

  return (
    <>
      {/* Desktop product detail */}
      {currentView === "desktop" && (
        <section className="hidden lg:flex relative items-center justify-center hd:mb-[10px] hd:-mt-20 fullhd:mb-[250px] fullhd:mt-[-240px] fullhd:top-[190px] hd:-mt-20 hd:ml-40 hd:scale-[0.9] fullhd:scale-100 4k:mb-[-2500px] 4k:mt-[-3700px]">
          {/* Desktop product detail code */}
          <div className="hidden md:flex flex-row-3 items-center justify-between mb-60 relative mt-80">
            <aside>
              {/* Display product images if productToShow is defined and has images */}
              {productToShow &&
                productToShow.images &&
                productToShow.images.length > 0 &&
                productToShow.images.map((image, index) => (
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
                src={
                  selectedImage ||
                  (productToShow &&
                    productToShow.images &&
                    productToShow.images[0])
                }
                alt={productToShow && productToShow.title}
              />
            </figure>

            <div className="flex flex-col justify-between relative mt-10 -top-[105px] -right-20">
              <div className="flex flex-col items-left">
                {/* Display product details */}
                <span className="bg-green rounded-full flex w-[110px] h-[36px] items-center justify-center mb-5">
                  <p className="font-[Whyte] text-xl font-bold">{category}</p>
                </span>
                <span>
                  {productToShow && (
                    <h1 className="mb-5 font-[WhyteInktrap] font-[600] text-[60px] mt-5">
                      {productToShow.title}
                    </h1>
                  )}
                </span>
              </div>
              <div>
                {/* Display product sizes */}
                {productToShow &&
                  productToShow.sizes &&
                  productToShow.sizes.length > 0 &&
                  productToShow.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`w-16 h-16 font-[Whyte] font-medium text-center inline-block border border-black rounded-full text-sm mr-2 mb-2 ${
                        selectedSize === size ? "bg-black text-white" : ""
                      }`}
                    >
                      <span className="flex items-center justify-center">
                        <p className="text-[12px] font-bold">{size}</p>
                      </span>
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
                {productToShow ? `Add $${productToShow.price}` : "Add to Cart"}{" "}
                {/* Check if productToShow is null before accessing 'price' */}
              </button>
              <span className="w-[500px] mt-10">
                <p className="text-[24px] mb-5 font-[Whyte]">
                  {productToShow ? productToShow.description : ""}{" "}
                  {/* Check if productToShow is null before accessing 'description' */}
                </p>
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Mobile and tablet product detail */}
      {currentView === "mobile" && (
        <section className="sm:block md:block xl:hidden mt-[190px] md:mt-[140px] md:mb-[150px] overflow-hidden">
          {/* Mobile and tablet product detail code */}
          <div className="flex flex-col items-left">
            {/* Display product details on mobile */}
            <span className="bg-green rounded-full flex w-[110px] h-[36px] items-center justify-center mb-5 ml-8 text-center">
              <p className="font-[Whyte] text-xl font-medium">{category}</p>
            </span>
            {productToShow && (
              <h2 className="mb-5 font-[WhyteInktrap] font-[600] text-[40px] mt-5 ml-8">
                {productToShow.title}
              </h2>
            )}

            {productToShow && productToShow.description && (
              <span className="w-[350px] overflow-hidden md:w-[750px] overflow-hidden">
                <p className="font-[Whyte] text-[20px] mb-5 ml-8">
                  {productToShow.description}
                </p>
              </span>
            )}
          </div>
          {/* Display carousel of product images on mobile */}
          <Carousel
            className="relative mx-auto mt-10 mb-10 w-screen md:scale-[2.2] md:mt-60 md:mb-60 "
            swipeable={true}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            emulateTouch={true}
            showIndicators={false}
            centerMode={true}
            centerSlidePercentage={100}
          >
            {productToShow &&
              productToShow.images &&
              productToShow.images.map((image, index) => (
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
            <div className="flex flex-row items-center justify-center mx-auto">
              {/* Display product sizes */}
              {productToShow &&
                productToShow.sizes &&
                productToShow.sizes.length > 0 &&
                productToShow.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={`font-[Whyte] w-[50px] h-[50px] hd:w-[60px] hd:h-[60px] font-[Whyte] text-center inline-block border border-black rounded-full text-sm font-semibold mr-4 mb-2 ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    <span className="flex items-center justify-center relative">
                      <p className="text-[15px] font-medium mt-1 mb-1">{size}</p>
                    </span>
                  </button>
                ))}
            </div>
            <p className="font-[Whyte] font-bold mt-2">
              Selected Size: {selectedSize}
            </p>
          </div>
          {/* Add to cart button */}
          {productToShow && productToShow.price && (
            <div className="flex items-center justify-center">
              <button
                className="font-bold font-[Whyte] border-2 border-black font-semibold rounded-lg p-2 text-lg cursor-pointer flex items-center justify-center h-9 mb-4 mt-4 uppercase w-[320px] hover:bg-black hover:text-white"
                onClick={addProductsToCart}
                disabled={!selectedSize}
              >
                Add ${productToShow.price}
              </button>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default ProductDetail;

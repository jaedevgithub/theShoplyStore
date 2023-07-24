import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  const { productToShow } = context;
  const [selectedImage, setSelectedImage] = useState("");

  // State to control the selected size
  const [selectedSize, setSelectedSize] = useState("");

  // If there's no product to show, return null to render nothing
  if (!productToShow) {
    return null;
  }

  const category = productToShow.category ? productToShow.category.name : "";

  // Update the state with the clicked image
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Update the state with the selected size
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Function to add the selected product to the cart and update the counter
  const addProductsToCart = () => {
    if (selectedSize) {
      // If a size is selected, add the product to the cart using the context function
      context.addProductToCart(productToShow, selectedSize);
      // Update the counter directly in the context
      context.setCount(context.count + 1);
    } else {
      console.error("Please select a size before adding to the cart.");
    }
  };

  return (
    <>
      {/* Desktop Product Detail Page */}

      <section className="hidden md:flex flex-row-3 items-center justify-between mt-60 mb-60 relative top-10">
        <aside>
          {productToShow.images.map((image, index) => (
            <figure
              key={index}
              className="-mb-4 scale-75 relative -top-60 left-4"
            >
              <img
                className={`w-32 h-32 object-cover rounded-3xl ${
                  selectedImage === image ? "border-4 border-black" : ""
                }`}
                src={image}
                alt={productToShow.title}
                onClick={() => handleImageClick(image)}
              />
            </figure>
          ))}
        </aside>

        <figure className="h-100 w-96 scale-150 relative right-10">
          <img
            className="h-full w-full object-cover rounded-3xl"
            src={selectedImage || productToShow.images[0]}
            alt={productToShow.title}
          />
        </figure>

        <div className="flex flex-col justify-between relative -top-80 right-40">
          <div className="flex flex-col items-left">
            <p className="text-xl">{category}</p>
            <h2 className="text-4xl mb-5">{productToShow.title}</h2>
            <p className="text-xl mb-5">{productToShow.description}</p>
          </div>
          <div>
            <h3 className="text-2xl mb-2">Sizes:</h3>
            {productToShow.sizes.map((size) => (
              <button
                key={size} // Usar directamente el valor de la talla como clave
                onClick={() => handleSizeSelect(size)}
                className={`inline-block border border-gray-400 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${
                  selectedSize === size ? "bg-gray-200" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <p>Selected Size: {selectedSize}</p>{" "}
          {/* Mostrar la talla seleccionada */}
          <button
            className="font-semibold border-2 border-black rounded-full p-2 text-lg cursor-pointer flex items-center justify-center h-9 mb-4 mt-4 uppercase"
            onClick={addProductsToCart}
            disabled={!selectedSize}
          >
            Add ${productToShow.price}
          </button>
        </div>
      </section>

      {/* Mobile Product Detail Page */}

      <section className="md:hidden mt-40 mb-60 top-10">
        <div className="flex flex-col items-left">
          <p className="text-xl relative ml-10">{category}</p>
          <h2 className="text-4xl mb-5 ml-10">{productToShow.title}</h2>
          <p className="text-xl mb-5 ml-10">{productToShow.description}</p>
        </div>

        <Carousel
          className="rounded-xl"
          swipeable={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          centerMode={true}
          centerSlidePercentage={100}
        >
          {productToShow.images.map((image, index) => (
            <div
              className="h-80 w-80 mx-2 flex justify-center items-center"
              key={index}
            >
              <img
                src={image}
                alt={productToShow.title}
                className="h-full w-full object-cover rounded-3xl"
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </Carousel>

        <div className="flex items-center justify-center">
          <button
            className="font-semibold border-2 border-black rounded-full p-2 text-lg cursor-pointer flex items-center justify-center h-9 mb-4 mt-4 uppercase"
            onClick={() => context.setCount(context.count + 1)}
          >
            Add ${productToShow.price}
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;

import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";

const Card = ({ data }) => {
  // Destructure the required data from the "data" prop
  const { images, title, price } = data;
  const context = useContext(ShoppingCartContext);

  // Function to show the product detail when clicked
  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  // Use short-circuiting to set default values for image, title, and price
  const image = images && images.length > 0 ? images[0] : "";
  const displayTitle = title ? title : "Title Not Available";
  const displayPrice = price ? price : "Price Not Available";

  // State to track whether the mouse is over the Card
  const [isMouseOver, setIsMouseOver] = useState(false);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <>
      <NavLink to="/product-detail">
        <section
          className="bg-white cursor-pointer w-[287px] h-[382px] relative"
          onClick={() => showProduct(data)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <figure className="relative mb-2 w-full h-full">
            <img
              className={`w-full h-full object-cover rounded-customBorder transition-opacity ${
                isMouseOver ? "opacity-0" : "opacity-100"
              }`}
              src={image}
              alt={displayTitle}
            />
            {isMouseOver && images && images.length > 1 && (
              <img
                className={`absolute inset-0 w-full h-full object-cover rounded-customBorder border-black border-2 transition-opacity ${
                  isMouseOver ? "opacity-100" : "opacity-0"
                }`}
                src={images[1]}
                alt={displayTitle}
              />
            )}
          </figure>
          <p className="flex justify-between">
            <span className="text-sm font-light">{displayTitle}</span>
            <span className="text-lg font-medium">${displayPrice}</span>
          </p>
        </section>
      </NavLink>
    </>
  );
};

export default Card;

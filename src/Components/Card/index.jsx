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
      <NavLink to={`/product-detail/${data.id}`}>
        {" "}
        <section
          className="bg-white cursor-pointer w-[160.5px] h-[210.38px] md:w-[169.5px] md:h-[227.13px] lg:w-[287.5px] lg:h-[382.38px] "
          onClick={() => showProduct(data)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <figure className="relative mb-12 mt-12 w-full h-full">
            <img
              className={`w-full h-full object-cover rounded-customBorder transition-opacity  ${
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
            <span className="text-[20px] font-[Whyte]">{displayTitle}</span>
            <span className="text-[20px] font-[Whyte]">${displayPrice}</span>
          </p>
        </section>
      </NavLink>
    </>
  );
};

export default Card;
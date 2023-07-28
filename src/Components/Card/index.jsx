import React, { useContext } from "react";
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

  return (
    <>
      <NavLink to="/product-detail">
        <div
          className="bg-white cursor-pointer w-72 h-96 rounded-lg"
          onClick={() => showProduct(data)}
        >
          <figure className="relative mb-2 w-full h-full">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={image}
              alt={displayTitle}
            />
          </figure>
          <p className="flex justify-between">
            <span className="text-sm font-light">{displayTitle}</span>
            <span className="text-lg font-medium">${displayPrice}</span>
          </p>
        </div>
      </NavLink>
    </>
  );
};

export default Card;

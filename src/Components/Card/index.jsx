import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ data }) => {
  const image = data.images && data.images.length > 0 ? data.images[0] : "";
  const title = data.title ? data.title : "";
  const price = data.price ? data.price : "";
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

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
              alt={title}
            />
          </figure>
          <p className="flex justify-between">
            <span className="text-sm font-light">{title}</span>
            <span className="text-lg font-medium">${price}</span>
          </p>
        </div>
      </NavLink>
    </>
  );
};

export default Card;

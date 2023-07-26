import React from "react";

const OrdersCard = props => {
  // Destructure the props to get the date, totalPrice, and totalProducts
  const { date, totalPrice, totalProducts } = props;

  return (
    // Container for displaying order information
    <div className="flex justify-between items-center mb-3 border border-black">
      <p>
        {/* Display the order date */}
        <span>{date}</span>
        {/* Display the total number of products in the order */}
        <span>{totalProducts}</span>
        {/* Display the total price of the order */}
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCard;

import React from "react";

const OrdersCard = ({ date, totalPrice, totalProducts }) => {
  return (
    // Container for displaying order information
    <div className="border border-gray-300 rounded-lg p-4 mb-3 w-screen">
      {/* Section for order date and total products */}
      <div className="flex items-center justify-between mb-2">
        {/* Display the order date */}
        <h3 className="text-xl font-semibold">{date}</h3>
        {/* Display the total number of products in the order */}
        <span className="text-sm">
          {totalProducts} {totalProducts === 1 ? "product" : "products"}
        </span>
      </div>
      {/* Display the total price of the order */}
      <p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default OrdersCard;

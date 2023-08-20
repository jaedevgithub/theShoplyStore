import React from "react";

const OrdersCard = ({ date, totalPrice, totalProducts }) => {
  // Check if totalPrice is a number before using toFixed
  const formattedTotalPrice = typeof totalPrice === 'number' ? `$${totalPrice.toFixed(2)}` : 'N/A';

  return (
    <div className="border border-gray-300 rounded p-4 mb-4 flex items-center justify-between shadow-md w-[300px]">
      <div className="flex-1">
        <p className="text-xl font-semibold">{date}</p>
        <p className="text-lg font-bold text-red-600">{formattedTotalPrice}</p>
        <p className="text-sm font-semibold text-gray-600">
          {totalProducts} {totalProducts === 1 ? "product" : "products"}
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;

import React from "react";

const OrdersCard = ({ date, totalPrice, totalProducts }) => {
  return (
    <>
      <table>
        <thead className="text-[24px] border-b-2 border-black -mb-[1100px]">
          <tr className="bg-white ">
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Products</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p className="text-xl font-semibold text-center">{date}</p>
            </td>
            <td>
              <p className="text-lg font-bold  text-center">
                ${totalPrice.toFixed(2)}
              </p>
            </td>
            <td>
              <p className="text-sm text-center font-bold ">
                {totalProducts} {totalProducts === 1 ? "product" : "products"}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default OrdersCard;

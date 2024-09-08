import React, { useContext } from "react";
import { CartContext } from "../cart/CartContext";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const { cartItems, incrementItem, decrementItem, getTotalAmount } =
    useContext(CartContext)!;

  const navigate = useNavigate();
  // وضعیت کلید پرداخت در زمانی که سبد خرید خالی است
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="border p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <button
                  onClick={() => decrementItem(item.id)}
                  className="bg-red-300 text-white px-3 py-1 rounded hover:bg-red-500 text-x"
                >
                  -
                </button>
                <span className="font-bold text-lg">{item.quantity}</span>
                <button
                  onClick={() => incrementItem(item.id)}
                  className="bg-green-300 text-white px-3 py-1 rounded hover:bg-green-500"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-8 text-lg font-semibold p-4">
        Total Amount: ${getTotalAmount().toFixed(2)}
      </div>

      <div className="mt-auto flex justify-between w-full max-w-sm space-x-4">
        <button
          onClick={() => navigate("/")}
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 hover:text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
        <button
          onClick={() => navigate("/checkout")}
          className={`w-full py-2 px-4 rounded font-bold ${
            isCartEmpty
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
          disabled={isCartEmpty}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

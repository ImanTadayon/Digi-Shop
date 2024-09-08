import React, { useState, useContext } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import profilrImage from "../../assets/a4d2481f-9c57-4171-baeb-05ac5e8fc31f.avif";
import { CartContext } from "../cart/CartContext";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { cartItems } = useContext(CartContext)!;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // محاسبه تعداد محصول در سبد خرید جهت نمایش آن در صفحه اصلی
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center px-4">
        <button onClick={toggleMenu} className="text-white text-2xl md:hidden">
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
        <nav
          className={`md:flex md:space-x-4 md:justify-center mt-4 md:mt-0 ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <h1 className="text-xl font-bold text-center text-blue-100 flex-grow">
          DIGI SHOP
        </h1>
        <div className="flex items-center space-x-4">
          <Link to="/user" className="text-xl hover:text-gray-300">
            <img
              src={profilrImage}
              alt="User"
              className="w-8 h-8 rounded-full"
            />
          </Link>

          <Link
            to="/cart"
            className="relative text-xl hover:text-gray-300 flex items-center"
          >
            <i className="fas fa-shopping-cart"></i>
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

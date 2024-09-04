import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import profilrImage from "../../assets/a4d2481f-9c57-4171-baeb-05ac5e8fc31f.avif";

export const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <a href="#cart" className="text-xl hover:text-gray-300">
            <i className="fas fa-shopping-cart"></i>
          </a>

          <Link to="/user" className="text-xl hover:text-gray-300">
            <img
              src={profilrImage}
              alt="User"
              className="w-8 h-8 rounded-full "
            />
          </Link>
        </div>
        <h1 className="text-xl font-bold text-center text-blue-100 flex-grow">
          DIGI SHOP
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/home" className="hover:text-gray-300">
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
      </div>
    </header>
  );
};

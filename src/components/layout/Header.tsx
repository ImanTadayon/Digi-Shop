import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <a href="#cart" className="text-xl hover:text-gray-300">
            <i className="fas fa-shopping-cart"></i>
          </a>

          <a href="#profile" className="text-xl hover:text-gray-300">
            <i className="fas fa-user"></i>
          </a>
        </div>
        <h1 className="text-xl font-bold text-center text-blue-100 flex-grow">
          DIGI SHOP
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Footer: React.FC = () => (
  <footer className="p-4 bg-gray-800 text-white ">
    <div className="flex justify-between items-center">
      <p>Organizations should contact us for orders and more information.</p>

      <div className="p-4 flex space-x-6">
        <a href="https://t.me/Iamited">
          <i className="fa-brands fa-telegram text-xl"></i>
        </a>
        <a href="mailto:imantadayon@gmail.com">
          <i className="fa-regular fa-envelope text-xl"></i>
        </a>
        <a href="#facebook">
          <i className="fa-brands fa-facebook text-xl"></i>
        </a>
        <a href="https://twitter.com/imantadayon">
          <i className="fa-brands fa-twitter text-xl"></i>
        </a>
      </div>
    </div>
    <div className="p-2">
      <p>© 2024 Online Shop. All rights reserved.</p>
    </div>
  </footer>
);

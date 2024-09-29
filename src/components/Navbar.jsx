// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">
          Mchikichini
        </Link>
        <div className="flex space-x-4">
          <Link to="/product/:id" className="hover:text-yellow-400">
            Product
          </Link>
          <Link to="/order-status" className="hover:text-yellow-400">
            Order Status
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

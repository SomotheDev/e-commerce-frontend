// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      {/* Top Header */}
      <div className="container mx-auto flex justify-center items-center py-2 px-4 text-sm text-gray-700">
        <div className="flex space-x-6">
          <Link to="/help" className="hover:underline">Help Centre</Link>
          <Link to="/account" className="hover:underline">My Account</Link>
          <Link to="/wishlist" className="hover:underline">My Wishlist</Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <div>
          <Link to="/" className="font-bold text-2xl flex items-center">Mchikichini Online</Link>
          <span className='text-sm text-red-700'>buy today, get it today</span>
        </div>
        {/* Search Bar */}
        <div className="flex-grow mx-8">
          <input
            type="text"
            placeholder="I am searching for..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Cart */}
        <div className="flex items-center space-x-4">
          <div className="text-sm">
            <p>Total <span className="font-bold">£0.00</span></p>
            <p className="text-red-500">Saving £0.00</p>
          </div>
          <Link to="/cart" className="relative">
            <FiShoppingCart className="w-8 h-8" />
            <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-gray-100 py-2">
        <div className="container mx-auto flex items-center space-x-6 justify-between ">
          <Link to="/mens" className="hover:underline">MENS</Link>
          <Link to="/womens" className="hover:underline">WOMENS</Link>
          <Link to="/boys" className="hover:underline">BOYS</Link>
          <Link to="/girls" className="hover:underline">GIRLS</Link>
          <Link to="/christmas" className="hover:underline">CHRISTMAS</Link>
          <Link to="/footwear" className="hover:underline">FOOTWEAR</Link>
          <Link to="/brands" className="hover:underline">BRANDS</Link>
          <Link to="/clearance" className="text-white bg-red-500 font-bold hover:underline px-3 py-3">CLEARANCE</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

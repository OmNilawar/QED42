import React from 'react';
import { Link } from 'react-router-dom'; 

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        <div className="text-white text-xl font-bold">
          <Link to="/">Logo</Link>
        </div>

        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/cart" className="text-white hover:text-gray-300">Cart</Link>
          <Link to="/shop" className="text-white hover:text-gray-300">Shop</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>

        <div className="md:hidden flex items-center">
          <button className="text-white">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

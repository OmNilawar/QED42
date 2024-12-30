import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';
import { IoIosMenu } from "react-icons/io";

export const Navbar = () => {
  const { getCartItemCount } = useContext(StoreContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        
        <div className="text-white text-xl font-bold">
          <Link to="/">Logo</Link>
        </div>

      
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>

          <Link to="/cart" className="text-white hover:text-gray-300 relative">
            Cart
            {getCartItemCount() > 0 && (
              <span className="absolute top-1 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
            )}
          </Link>

          <Link to="/orders" className="text-white hover:text-gray-300">Orders</Link>
          <Link className="text-white hover:text-gray-300">Contact</Link>
        </div>

        
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white"> <IoIosMenu />
          </button>
        </div>
      </div>

      
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/cart" className="text-white hover:text-gray-300 relative">
            Cart
            {getCartItemCount() > 0 && (
              <span className="absolute top-1 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
            )}
          </Link>
          <Link to="/orders" className="text-white hover:text-gray-300">Orders</Link>
          <Link className="text-white hover:text-gray-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

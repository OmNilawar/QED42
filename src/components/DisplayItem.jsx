import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import add_icon_green from '../assets/add_icon_green.png';
import remove_icon_red from '../assets/remove_icon_red.png';

const DisplayItem = ({ 
  id, 
  title, 
  price, 
  category, 
  image, 
  cartCount, 
  addToCart, 
  removeFromCart 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-60 flex flex-col">
      {/* Image of the product */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 object-contain mx-auto"
      />
      {/* here we will see the title */}
      <h3 className="text-lg font-semibold mt-4 text-center">{title}</h3>

      {/* price of the product and category */}
      <p className="text-gray-600 text-center mt-2">${price}</p>
      <p className="text-gray-600 text-center mt-2">{category}</p>

      {/* cart functionality */}
      <div className="mt-auto">
        {!cartCount ? (
          <button
            className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              addToCart(id);
            }}
          >
            Add to Cart
          </button>
        ) : (
          <div className="food-item-counter flex justify-evenly items-center">
            <img
              onClick={(e) => {
                e.preventDefault();
                removeFromCart(id);
              }}
              src={remove_icon_red}
              alt="Remove"
              className="cursor-pointer h-6 w-6"
            />
            
            <span className="px-4 text-center text-lg font-medium">
              {cartCount}
            </span>
              
            <img
              onClick={(e) => {
                e.preventDefault();
                addToCart(id);
              }}
              src={add_icon_green}
              alt="Add"
              className="cursor-pointer h-6 w-6"
            />
          </div>
        )}
      </div>

      {/* View Details button */}
      <Link to={`/product/${id}`} className="mt-4 w-full px-6 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 transition-colors">
        View Details
      </Link>
    </div>
  );
};

export default DisplayItem;

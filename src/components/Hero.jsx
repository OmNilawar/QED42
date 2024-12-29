import React, { useContext, useState } from 'react';
import { StoreContext } from '../Context/StoreContext.jsx';
import DisplayItem from './DisplayItem';

const Hero = () => {
  const { products, cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === '' || product.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products..."
          className="px-4 py-2 w-80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Categories</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>

      
      <div className="flex flex-wrap gap-6 justify-center px-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <DisplayItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.images[0]}
              cartCount={cartItems[product.id]}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <p className="text-gray-600 text-lg">No products found!</p>
        )}
      </div>
    </div>
  );
};

export default Hero;

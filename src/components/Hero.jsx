import React, { useContext, useState } from 'react';
import { StoreContext } from '../Context/StoreContext.jsx';
import DisplayItem from './DisplayItem';
import { FaFilter } from 'react-icons/fa';

const Hero = () => {
  const { products, cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [showFilters, setShowFilters] = useState(false); 

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === '' || product.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  //sorting function based on selected option
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === 'price-low-high') {
      return a.price - b.price; 
    } else if (sortOption === 'price-high-low') {
      return b.price - a.price;
    } else if (sortOption === 'rating-high-low') {
      return b.rating - a.rating; 
    }
    return 0; //default
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
        
        
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="p-3 bg-blue-500 rounded-full text-white shadow-lg hover:bg-blue-600 transition-colors"
        >
          <FaFilter size={20} />
        </button>
      </div>

      
      <div
        className={`absolute top-20 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
          showFilters ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full max-w-xs"
          >
            <option value="">All Categories</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
          </select>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full max-w-xs"
          >
            <option value="">Sort by</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating-high-low">Rating: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center px-4 mt-8">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
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
              rating={product.rating}
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

import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext.jsx';
import add_icon_green from '../assets/add_icon_green.png';
import remove_icon_red from '../assets/remove_icon_red.png';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const PraticularItem = () => {
  const { id } = useParams(); 
  const { BaseURL, addToCart, removeFromCart, cartItems } = useContext(StoreContext); 
  const [product, setProduct] = useState(null); // particular product after fetch
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error 
  const [showAllReviews, setShowAllReviews] = useState(false); // bool to show all reviews
  const [currentImage, setCurrentImage] = useState(''); // to set the current image
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product details from the API
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${BaseURL}/products/${id}`);
        if (!response.ok) throw new Error('Failed to fetch product details');
        const data = await response.json();
        setProduct(data);
        // Set the initial image to the first image
        setCurrentImage(data.thumbnail);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, BaseURL]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const cartCount = cartItems[id] || 0;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <FaRegArrowAltCircleLeft className='w-10 h-10 cursor-pointer' onClick={() => navigate('/')}/>
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        {/* product images */}
        <div className="flex items-center justify-between gap-6">
          <div className="w-1/2">
            <img
              src={currentImage}
              alt={product.title}
              className="w-full h-64 object-contain rounded-lg mb-4 shadow-md"
            />
            <div className="flex gap-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-20 w-20 object-cover rounded-lg border border-gray-200 cursor-pointer"
                  onClick={() => setCurrentImage(img)} // Update the current image when clicked
                />
              ))}
            </div>
          </div>

          {/* product overview */}
          <div className="w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-lg font-semibold text-green-600 mb-2">
              Price: ${product.price}{' '}
              <span className="text-sm text-gray-500">(-{product.discountPercentage}%)</span>
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Category:</strong> {product.category} |{' '}
              <strong>Brand:</strong> {product.brand}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>SKU:</strong> {product.sku}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Stock:</strong> {product.availabilityStatus} ({product.stock} available)
            </p>

            {/* cart functionality */}
            <div className="mt-6 flex justify-between gap-2">
              {!cartCount ? (
                <button
                  className="w-[50%] px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(id);
                  }}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="w-[50%] p-2 bg-gray-300 rounded-xl flex justify-between items-center">
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

              {/* Buy Now button */}
              <button
                className="w-[50%] px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(id); // Add item to cart first
                  navigate('/cart'); // Navigate to the cart page
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Product Details</h2>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <p>
              <strong>Weight:</strong> {product.weight} kg
            </p>
            <p>
              <strong>Dimensions:</strong> {product.dimensions.width} x{' '}
              {product.dimensions.height} x {product.dimensions.depth} cm
            </p>
            <p>
              <strong>Warranty:</strong> {product.warrantyInformation}
            </p>
            <p>
              <strong>Shipping:</strong> {product.shippingInformation}
            </p>
            <p>
              <strong>Return Policy:</strong> {product.returnPolicy}
            </p>
            <p>
              <strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}
            </p>
            <p>
              <strong>Barcode:</strong> {product.meta.barcode}
            </p>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex justify-between items-center mb-4">
                <p className="font-semibold text-lg">{product.reviews[0].reviewerName}</p>
                <p className="text-sm text-gray-500">{product.reviews[0].date}</p>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={`text-xl ${starIndex < product.reviews[0].rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600">{product.reviews[0].comment}</p>
            </div>

            {!showAllReviews && product.reviews.length > 1 && (
              <button
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                onClick={() => setShowAllReviews(true)}
              >
                Show All Reviews
              </button>
            )}

            
            {showAllReviews && product.reviews.slice(1).map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex justify-between items-center mb-4">
                  <p className="font-semibold text-lg">{review.reviewerName}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <span
                      key={starIndex}
                      className={`text-xl ${starIndex < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* QR Code */}
        <div className="mt-6 text-center">
          <h2 className="text-xl font-bold mb-2">QR Code</h2>
          <img
            src={product.meta.qrCode}
            alt="QR Code"
            className="mx-auto h-32 w-32 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

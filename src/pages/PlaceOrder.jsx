import React, { useContext, useState } from 'react';
import { StoreContext } from '../Context/StoreContext';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const PlaceOrder = () => {
  const { getTotalCartAmount, getDeliveryFee, setCartItems, cartItems } = useContext(StoreContext);
  const [deliveryDetails, setDeliveryDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    landmark: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });

  const delivery = getDeliveryFee();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({ ...prev, [name]: value }));
  };

  const confirmOrder = (e) => {
    e.preventDefault();

    if (!deliveryDetails.firstName || !deliveryDetails.email || !deliveryDetails.phone) {
      alert('Please fill out all required fields!');
      return;
    }

    const orderDetails = {
      deliveryDetails,
      cartItems,
      totalAmount: delivery === "free delivery" ? getTotalCartAmount() : getTotalCartAmount() + delivery,
      deliveryFee: delivery,
    };

    const previousOrders = JSON.parse(localStorage.getItem('orders')) || [];
    previousOrders.push(orderDetails);
    localStorage.setItem('orders', JSON.stringify(previousOrders));

    setCartItems({});
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-12">
        <form
          onSubmit={confirmOrder}
          className="flex flex-col md:flex-row justify-between gap-12 w-full max-w-6xl"
        >
          {/* Left Section */}
          <div className="w-full md:max-w-[30%] lg:max-w-[500px]">
            <p className="text-2xl font-semibold mb-8">Delivery Details</p>
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                value={deliveryDetails.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="lastName"
                value={deliveryDetails.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <input
              type="email"
              name="email"
              value={deliveryDetails.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <input
              type="text"
              name="street"
              value={deliveryDetails.street}
              onChange={handleChange}
              placeholder="Street"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <input
              type="text"
              name="landmark"
              value={deliveryDetails.landmark}
              onChange={handleChange}
              placeholder="(Landmark)"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                name="city"
                value={deliveryDetails.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="state"
                value={deliveryDetails.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                name="zipCode"
                value={deliveryDetails.zipCode}
                onChange={handleChange}
                placeholder="Zip-Code"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="country"
                value={deliveryDetails.country}
                onChange={handleChange}
                placeholder="Country"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <input
              type="text"
              name="phone"
              value={deliveryDetails.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
          </div>

          {/* Right Section */}
          <div className="w-full md:min-w-[40%] mt-14">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
              <div>
                <div className="flex justify-between mb-2">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr className="border-t border-gray-300 my-2" />
                <div className="flex justify-between mb-2">
                  <p>Delivery Fee</p>
                  <p>{delivery === "free delivery" ? "free delivery" : `$${delivery}`}</p>
                </div>
                <hr className="border-t border-gray-300 my-2" />
                <div className="flex justify-between mb-4">
                  <p>Total</p>
                  <p>${delivery === "free delivery" ? getTotalCartAmount() : (getTotalCartAmount() + delivery).toFixed(2)}</p>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PlaceOrder;

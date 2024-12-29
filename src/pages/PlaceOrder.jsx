import React, { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount, getDeliveryFee, setCartItems} = useContext(StoreContext);

  const delivery = getDeliveryFee();
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center mt-12">
      <form className="flex flex-col md:flex-row justify-between gap-12 w-full max-w-6xl">
        {/* Left Section */}
        <div className="w-full md:max-w-[30%] lg:max-w-[500px]">
          <p className="text-2xl font-semibold mb-8">Delivery Details</p>
          <div className="flex gap-4 mb-4">
            <input 
              type="text" 
              placeholder="First Name" 
              className="w-full p-2 border border-gray-300 rounded-md" 
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              className="w-full p-2 border border-gray-300 rounded-md" 
            />
          </div>
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-2 border border-gray-300 rounded-md mb-4" 
          />
          <input 
            type="text" 
            placeholder="Street" 
            className="w-full p-2 border border-gray-300 rounded-md mb-4" 
          />
          <input 
            type="text" 
            placeholder="(Land Mark)" 
            className="w-full p-2 border border-gray-300 rounded-md mb-4" 
          />
          <div className="flex gap-4 mb-4">
            <input 
              type="text" 
              placeholder="City" 
              className="w-full p-2 border border-gray-300 rounded-md" 
            />
            <input 
              type="text" 
              placeholder="State" 
              className="w-full p-2 border border-gray-300 rounded-md" 
            />
          </div>
          <div className="flex gap-4 mb-4">
            <input 
              type="text" 
              placeholder="Zip-Code" 
              className="w-full p-2 border border-gray-300 rounded-md" 
            />
            <input 
              type="text" 
              placeholder="Country" 
              className="w-full p-2 border border-gray-300 rounded-md" 
            />
          </div>
          <input 
            type="text" 
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
            <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" 
                onClick={() => {
                    navigate('/');
                    setCartItems({});
                }}
            >Confirm Order</button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default PlaceOrder;

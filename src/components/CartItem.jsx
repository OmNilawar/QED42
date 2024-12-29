import React, { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext.jsx';
import remove_icon_red from '../assets/remove_icon_red.png';
import add_icon_green from '../assets/add_icon_green.png';
import { useNavigate } from 'react-router-dom';

const CartItem = () => {
  const { products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getDeliveryFee } = useContext(StoreContext);
  const delivery = getDeliveryFee();
  const navigate = useNavigate();
  
  return (
    <div className="cart mt-12 mx-4 lg:mx-16">
      <div className="cart-items-title grid grid-cols-6 gap-4 items-center text-gray-500 text-[max(1vw,12px)] mb-6">
        <p>Item</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {products.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={item.id} className="cart-item mt-4 text-black">
              <div className="grid grid-cols-6 gap-4 items-center border-b pb-4">
                <img src={item.images[0]} alt={item.title} className="w-14 rounded-lg" />
                <p className="text-gray-700 font-medium">{item.title}</p>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">{cartItems[item.id]}</span>
                  <img
                    onClick={() => addToCart(item.id)}
                    src={add_icon_green}
                    alt="Add"
                    className="w-6 cursor-pointer"
                  />
                </div>
                <p className="text-gray-700 font-medium">
                  ${(item.price * cartItems[item.id]).toFixed(2)}
                </p>
                <p
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 cursor-pointer font-bold"
                >
                  X
                </p>
              </div>
              <hr className="border-t border-gray-200" />
            </div>
          );
        }
      })}

      <div className="cart-bottom mt-8 flex flex-col lg:flex-row justify-between gap-8">
        <div className="cart-total flex flex-col gap-5 flex-1">
          <h2 className="text-xl font-bold text-gray-800">Cart Total</h2>
          <div className="cart-total-details flex justify-between items-center">
            <p className="text-gray-600">Subtotal</p>
            <p className="font-semibold text-gray-700">${getTotalCartAmount().toFixed(2)}</p>
          </div>
          <hr />
          <div className="cart-total-details flex justify-between items-center">
            <p className="text-gray-600">Delivery Fee</p>
            <p className="font-semibold text-gray-700">
              {delivery === "free delivery" ? "Free Delivery" : `$${delivery}`}
            </p>
          </div>
          <hr />
          <div className="cart-total-details flex justify-between items-center">
            <p className="text-gray-600">Total</p>
            <p className="font-bold text-gray-800">
              {delivery === "free delivery" ? getTotalCartAmount().toFixed(2) : (getTotalCartAmount() + delivery).toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => navigate('/order')}
            className="mt-6 bg-tomato-500 text-white py-2 rounded-lg w-full sm:w-1/3 hover:bg-tomato-600"
          >
            Proceed to Checkout
          </button>
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800">Promo Code</h2>
          <p className="text-gray-600 mb-2">Submit your promo code</p>
          <div className="promo-code-details flex justify-between items-center bg-gray-200 rounded-md p-2">
            <input
              type="text"
              placeholder="Enter code"
              className="bg-transparent border-none pl-2 outline-none w-full"
            />
            <button className="w-[max(10vw,150px)] py-3 bg-black text-white rounded-lg text-lg">
              Submit
            </button>
          </div>
        </div>
        
      </div>

      <button onClick={() => navigate('/placeOrder')}>CheckOut</button>
    </div>
  );
};

export default CartItem;

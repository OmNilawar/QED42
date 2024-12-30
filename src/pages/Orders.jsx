import React, { useEffect, useState, useContext} from 'react';
import { Navbar } from '../components/Navbar';
import { StoreContext } from '../Context/StoreContext';

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const {products} = useContext(StoreContext);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);//to fetch only once the dependency array is kept empty

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-12 px-4">
        <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
        {orders.length === 0 ? (
          <p className="text-gray-600">No orders placed yet.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order, index) => (
              <div
                key={index}
                className="p-6 border border-gray-300 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-semibold mb-2">Order #{index + 1}</h2>
                <div className="mb-4">
                  <h3 className="font-semibold">Delivery Details:</h3>
                  <p>{order.deliveryDetails.firstName} {order.deliveryDetails.lastName}</p>
                  <p>{order.deliveryDetails.email}</p>
                  <p>Phone: {order.deliveryDetails.phone}</p>
                </div>
                <div>
                  <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
                  <p><strong>Delivery Fee:</strong> {order.deliveryFee === "free delivery" ? "Free" : `$${order.deliveryFee}`}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

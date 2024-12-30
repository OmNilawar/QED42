import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems,setCartItems] = useState({});

  const BaseURL = 'https://dummyjson.com';
  
  
  //to fetch the data from the api
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${BaseURL}/products`);
      return res.data.products;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  //to load the initial data
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, []); 

  //to console log the value of cartItems when ever we change the cart
  useEffect(() => {
    console.log(cartItems);
  },[cartItems]);


  //below are some functionality of cart such as to add and to remove
  const addToCart = (itemId) => {
      if(!cartItems[itemId])
      {
        setCartItems({...cartItems,[itemId] : 1});
      }
      else
      {
        setCartItems((prev) => ({...prev,[itemId] : prev[itemId] + 1}));
      }
  }

  
  const removeFromCart = (itemId) => {
      setCartItems((prev) => {
        const updatedCart = {...prev,[itemId] : prev[itemId] - 1}
        
        if(updatedCart[itemId] === 0)
        {
          delete updatedCart[itemId];
        }
        return updatedCart;
  });
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for(const item in cartItems)
    {
      if(cartItems[item] > 0)
      {
        const temp = products.find((temp) => temp.id == item);
        if(temp)
        {
          total += temp.price * cartItems[item];  
        }
      }
    }
    return total;
  }

  const getDeliveryFee = () => {
    let amount = getTotalCartAmount();
    if(amount === 0)
        return 0;
    else if (amount >= 50)
        return "free delivery"
    else    
        return 2;
  }


  const contextValue = {
    products,
    setProducts,
    BaseURL,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getDeliveryFee
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

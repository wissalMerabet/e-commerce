import { createContext, useState, useEffect } from "react";
import Axios from "axios";

// Create the Cart Context
export const Cartcontext = createContext();

// CartContext provider to manage and share cart state across the app
export const CartProvider = ({ children }) => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const USERID = window.localStorage.getItem("userID");

  // Fetch cart items from the backend
  const fetchCartItems = async () => {
    if (USERID) {
      try {
        const response = await Axios.get(`http://localhost:3000/Cart?userID=${USERID}`);
        setCartItemCount(response.data.length);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    }
  };

  // Automatically fetch cart items on component mount
  useEffect(() => {
    fetchCartItems();
  }, [USERID]);

  return (
    <Cartcontext.Provider value={{ cartItemCount, fetchCartItems }}>
      {children}
    </Cartcontext.Provider>
  );
};

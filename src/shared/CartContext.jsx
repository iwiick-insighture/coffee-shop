// src/shared/CartContext.js
import React from 'react';

const CartContext = React.createContext();
export const useCart = () => React.useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const foundIndex = prevItems.findIndex(item => item.id === newItem.id);
      if (foundIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[foundIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const foundIndex = prevItems.findIndex(item => item.id === itemId);
      if (foundIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[foundIndex].quantity -= 1;
        
        if (updatedItems[foundIndex].quantity <= 0) {
          return updatedItems.filter(item => item.id !== itemId);
        }
        return updatedItems;
      }
      return prevItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

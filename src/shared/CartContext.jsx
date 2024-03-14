import { createContext } from "react";
import useCartItems from "../api/hooks/useCartItems";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { cartItems, addToCart, removeFromCart, refreshCart } = useCartItems();

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, refreshCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

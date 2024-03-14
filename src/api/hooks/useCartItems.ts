import { useEffect, useState } from "react";
import { CartApiClient } from "../apiClient";

const useCartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    refreshCart();
  }, []);

  const refreshCart = async () => {
    try {
      setLoading(true);
      const { data: res } = await CartApiClient.get(
        `/${localStorage.getItem("currentUserId")}`
      );
      setCartItems(res.data);
      setLoading(false);
    } catch (error) {
      alert("Something Went Wrong");
      setLoading(false);
    }
  };

  const addToCart = async (coffeeId: string) => {
    try {
      await CartApiClient.post(
        `/add/${localStorage.getItem("currentUserId")}/${coffeeId}`
      );
      await refreshCart();
    } catch (error) {
      alert("Something Went Wrong");
    }
  };

  const removeFromCart = async (coffeeId: string) => {
    try {
      await CartApiClient.delete(
        `/remove/${localStorage.getItem("currentUserId")}/${coffeeId}`
      );
      await refreshCart();
    } catch (error) {
      alert("Something Went Wrong");
    }
  };

  const clearCart = async () => {
    try {
      await CartApiClient.delete(`/${localStorage.getItem("currentUserId")}`);
      await refreshCart();
    } catch (error) {
      alert("Something Went Wrong");
    }
  };

  return {
    cartItems,
    isLoading: loading,
    addToCart,
    removeFromCart,
    clearCart,
    refreshCart,
  };
};

export default useCartItems;

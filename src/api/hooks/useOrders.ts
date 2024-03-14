import { useEffect, useState } from "react";
import { OrderApiClient } from "../apiClient";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    refreshOrders();
  }, []);

  const refreshOrders = async () => {
    try {
      setLoading(true);
      const { data: res } = await OrderApiClient.get(
        `/${localStorage.getItem("currentUserId")}`
      );
      setOrders(res.data);
      setLoading(false);
    } catch (error) {
      alert("Something Went Wrong");
      setLoading(false);
    }
  };

  const createOrder = async () => {
    try {
      await OrderApiClient.post(`/${localStorage.getItem("currentUserId")}`);
      await refreshOrders();
    } catch (error) {
      alert("Something Went Wrong");
    }
  };

  const clearOrder = async (orderId: string) => {
    try {
      await OrderApiClient.delete(
        `/${localStorage.getItem("currentUserId")}/${orderId}`
      );
      await refreshOrders();
    } catch (error) {
      alert("Something Went Wrong");
    }
  };

  return {
    orders,
    isLoading: loading,
    createOrder,
    refreshOrders,
    clearOrder,
  };
};

export default useOrders;

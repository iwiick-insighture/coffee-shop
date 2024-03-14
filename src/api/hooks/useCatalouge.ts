import { useEffect, useState } from "react";
import { CatalougeApiClient } from "../apiClient";

const useCatalouge = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    refreshCatalouge();
  }, []);

  const refreshCatalouge = async () => {
    try {
      setLoading(true);
      const { data: res } = await CatalougeApiClient.get("/");
      setCoffees(res.data);
      setLoading(false);
    } catch (error) {
      alert("Something Went Wrong");
      setLoading(false);
    }
  };

  const addNewCoffee = async (coffeeItem: {
    name: string;
    price: number;
    quantity: number;
    imageUrl?: string;
  }) => {
    try {
      await CatalougeApiClient.post(`/`, {
        name: coffeeItem.name,
        price: coffeeItem.price,
        quantity: coffeeItem.quantity,
        imageUrl: coffeeItem.imageUrl,
      });
      await refreshCatalouge();
    } catch (error) {
      alert("Something Went Wrong");
    }
  };

  const updateCoffee = async (
    coffeeId: string,
    coffeeItem: {
      name?: string;
      price?: number;
      quantity?: number;
      imageUrl?: string;
    }
  ) => {
    try {
      await CatalougeApiClient.put(`/${coffeeId}`, coffeeItem);
      await refreshCatalouge();
    } catch (error) {
      alert("Something Went Wrong");
    }
  };

  const deleteCoffee = async (coffeeId: string) => {
    try {
      await CatalougeApiClient.delete(`/${coffeeId}`);
      await refreshCatalouge();
    } catch (error) {
      alert("Something Went Wrong");
    }
  };

  return {
    coffees,
    isLoading: loading,
    addNewCoffee,
    updateCoffee,
    deleteCoffee,
  };
};

export default useCatalouge;

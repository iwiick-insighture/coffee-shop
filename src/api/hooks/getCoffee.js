import { useQuery } from "@tanstack/react-query";
import coffeeItemsData from "../../data/coffeeItems.json";

const getCoffee = () => {
  return useQuery({
    queryKey: ['coffeeItems'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return coffeeItemsData;
      
      // Uncomment the following lines when ready to switch to an API call
      // const { data } = await apiClient.get('/coffeeItems');
      // return data;
    },
  });
};

export default getCoffee;

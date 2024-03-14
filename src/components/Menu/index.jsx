import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import useCatalouge from "../../api/hooks/useCatalouge";
import useCartItems from "../../api/hooks/useCartItems";
import defaultCoffeeImage from "../../../public/coffees/default-coffee.jpg";
const Menu = () => {
  const { coffees } = useCatalouge();
  const { addToCart, removeFromCart } = useCartItems();

  const handleIncrement = (item) => {
    addToCart(item.id);
  };

  const handleDecrement = (item) => {
    removeFromCart(item.id);
  };

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-10">
      {coffees?.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <img
              src={item.imageUrl ? item.imageUrl : defaultCoffeeImage}
              alt={item.name}
              className="w-full h-auto rounded-lg object-cover"
              style={{ height: "220px" }}
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-left text-base font-normal my-2 flex justify-between flex-row gap-2">
              {item.name}{" "}
              {/* {clickCounts[item.id] > 0 && (
                <span className="py-1 px-2 bg-[#424b66] text-white rounded-full text-xs">
                  Selected {clickCounts[item.id]}
                </span>
              )} */}
            </CardTitle>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <h4 className="text-3xl font-semibold text-[#424B66]">
              ${Number(item.price).toFixed(2)}
            </h4>
            <Button
              onClick={() => handleIncrement(item)}
              className="bg-[#F7F8FE] hover:bg-slate-100 border border-[#C9CCD9] text-black text-xl font-light w-3 h-8"
            >
              +
            </Button>
            <Button
              onClick={() => handleDecrement(item)}
              className="bg-[#F7F8FE] hover:bg-slate-100 border border-[#C9CCD9] text-black text-xl font-light w-3 h-8"
            >
              -
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Menu;

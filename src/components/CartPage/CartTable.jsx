import { Button } from "@components/ui/button";
import defaultCoffeeIcon from "../../../public/coffees/default-coffee.jpg";

const CartTable = ({ coffees, cartItems, addToCart, removeFromCart }) => {
  const handleAddToCart = (item) => {
    addToCart(item.coffeeId);
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item.coffeeId);
  };

  const getCoffee = (item) => {
    return coffees?.find((coffee) => coffee?.id == item?.coffeeId);
  };

  return (
    <div>
      <div
        className={`pb-10 px-5 rounded-lg ${
          cartItems.length > 4 && "overflow-y-scroll"
        } h-[420px]`}
      >
        {cartItems.map((item) => (
          <div
            className={`flex sm:flex-row flex-col items-start justify-between sm:p-5 py-5 ${
              item._id < cartItems.length ? "border-b border-gray-200" : ""
            }`}
            key={item._id}
          >
            <div className="flex flex-row">
              <img
                src={getCoffee(item)?.imageUrl || defaultCoffeeIcon}
                alt="coffee"
                style={{ height: "70px", width: "60px" }}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col items-start justify-center px-8 gap-1">
                <p className="font-medium text-lg">{getCoffee(item)?.name}</p>
                <div className="flex flex-row items-center gap-3">
                  <p>Quantity</p>
                  <Button
                    onClick={() => handleRemoveFromCart(item)}
                    className="bg-[#F7F8FE] border border-slate-400 hover:bg-slate-100 font-light text-black text-xl w-8 h-8"
                  >
                    -
                  </Button>
                  <p>{item.quantity}</p>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className="bg-[#F7F8FE] border border-slate-400 hover:bg-slate-100 font-light text-black text-xl w-8 h-8"
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
            <p className="text-xl font-semibold">
              ${Number(getCoffee(item)?.price).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartTable;

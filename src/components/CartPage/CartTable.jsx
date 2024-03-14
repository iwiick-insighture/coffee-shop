import getCoffee from "@/api/hooks/getCoffee";
import { Button } from "@components/ui/button";
import { useCart } from "@shared/CartContext";
import { calculateTotalItems } from "@shared/CartUtils";

const CartTable = () => {
  const { data: coffeeItems, isLoading, error } = getCoffee();
  const { cartItems, addToCart, removeFromCart } = useCart();
  const totalItems = calculateTotalItems(cartItems);
  const loadClickCounts = () =>
    JSON.parse(localStorage.getItem("clickCounts")) || {};

  const updateClickCounts = (newCounts) => {
    localStorage.setItem("clickCounts", JSON.stringify(newCounts));
  };

  const handleAddToCart = (item) => {
    const clickCounts = loadClickCounts();
    const newItemCount = (clickCounts[item.id] || 0) + 1;
    clickCounts[item.id] = newItemCount;
    updateClickCounts(clickCounts);

    addToCart({ ...item, quantity: newItemCount });
  };

  const handleRemoveFromCart = (itemId) => {
    const clickCounts = loadClickCounts();
    const newItemCount = Math.max(0, (clickCounts[itemId] || 1) - 1);

    if (newItemCount > 0) {
      clickCounts[itemId] = newItemCount;
    } else {
      delete clickCounts[itemId];
    }
    updateClickCounts(clickCounts);

    removeFromCart(itemId, newItemCount);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

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
              item.id < cartItems.length ? "border-b border-gray-200" : ""
            }`}
            key={item.id}
          >
            <div className="flex flex-row">
              <img
                src={item.imageUrl}
                alt="coffee"
                style={{ height: "70px", width: "60px" }}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col items-start justify-center px-8 gap-1">
                <p className="font-medium text-lg">{item.name}</p>
                <div className="flex flex-row items-center gap-3">
                  <p>Quantity</p>
                  <Button
                    onClick={() => handleRemoveFromCart(item.id)}
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
              ${Number(item.price).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartTable;

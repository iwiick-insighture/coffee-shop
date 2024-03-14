import useCatalouge from "../api/hooks/useCatalouge";
import useOrders from "../api/hooks/useOrders";

const Order = () => {
  const { orders, clearOrder } = useOrders();
  const { coffees } = useCatalouge();
  const getCoffee = (coffeeId) => {
    return coffees?.find((coffee) => coffee?.id == coffeeId);
  };

  const deleteOrder = async (orderId) => {
    await clearOrder(orderId);
  };

  return (
    <section>
      <div className="relative">
        <h3 className="text-left font-semibold text-2xl">Order History</h3>
        <div className="py-5">
          {orders.map((order) => {
            return (
              <div key={order._id} className="my-5 relative">
                <div className="shadow rounded-lg bg-white p-5">
                  <div className="mb-4 text-left">
                    {" "}
                    {/* Added text-left class */}
                    <h3 className="text-xl font-semibold">
                      {new Date(order?.createdAt).toDateString()}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {order._id?.replace("order_", "#")}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    {order.items.map((item) => (
                      <div key={item._id} className="flex items-center">
                        <p className="font-semibold">{item.quantity}x</p>
                        <div className="flex flex-col ml-2">
                          <p>
                            {getCoffee(item.coffeeId)?.name || item.coffeeId}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    className="absolute top-2 right-2 bg-white border border-gray-300 text-gray-500 hover:bg-white hover:text-gray-500 px-2 py-1 rounded"
                    onClick={() => deleteOrder(order._id)}
                  >
                    Clear
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Order;

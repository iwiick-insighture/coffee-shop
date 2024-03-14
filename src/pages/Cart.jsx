import CartTable from "@components/CartPage/CartTable";
import Payment from "@components/CartPage/Payment";
import PaymentForm from "@components/CartPage/PaymentForm";
import useCatalouge from "../api/hooks/useCatalouge";
import useCartItems from "../api/hooks/useCartItems";

const Cart = () => {
  const { coffees } = useCatalouge();
  const { cartItems, addToCart, removeFromCart } = useCartItems();

  return (
    <section>
      <div className="relative">
        <h3 className="text-left font-semibold text-2xl">Shopping Cart</h3>
        <div className="py-5">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="my-5 shadow rounded-lg bg-white">
              <div className="pt-10 px-5">
                <h3 className="text-left text-xl font-semibold px-5 pb-5">
                  Items in your Cart
                </h3>
              </div>

              <CartTable
                coffees={coffees}
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
              <Payment />
            </div>
            <div className="my-5 shadow rounded-lg bg-white">
              <PaymentForm coffees={coffees} cartItems={cartItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

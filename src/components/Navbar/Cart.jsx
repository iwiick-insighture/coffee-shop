import { CartContext } from "../../shared/CartContext.jsx";
import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <Link
      to="/cart"
      className="flex relative flex-row items-center justify-center text-white"
    >
      <IoCartOutline className="w-9 h-9" />
      <span className="absolute -top-2 -right-1 text-xs text-white w-6 h-6 flex items-center justify-center rounded-full bg-[#64ABFF]">
        {cartItems.length || 0}
      </span>
    </Link>
  );
};

export default Cart;

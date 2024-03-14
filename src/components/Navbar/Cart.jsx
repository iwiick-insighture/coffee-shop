import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Cart = () => {
  const [noOfItemsClicked, setNoOfItemsClicked] = React.useState(0);

  React.useEffect(() => {
    const updateNoOfItemsClicked = () => {
      const clickCounts = JSON.parse(localStorage.getItem('clickCounts') || '{}');
      const itemCount = Object.keys(clickCounts).length;
      setNoOfItemsClicked(itemCount);
    };

    updateNoOfItemsClicked();
    window.addEventListener('storage', updateNoOfItemsClicked);
    return () => window.removeEventListener('storage', updateNoOfItemsClicked);
  }, []);

  return (
    <Link
      to="/cart"
      className="flex relative flex-row items-center justify-center text-white"
    >
      <IoCartOutline className="w-9 h-9" />
      <span className="absolute -top-2 -right-1 text-xs text-white w-6 h-6 flex items-center justify-center rounded-full bg-[#64ABFF]">
        {noOfItemsClicked}
      </span>
    </Link>
  );
};

export default Cart;

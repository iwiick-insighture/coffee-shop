import Cart from "./Navbar/Cart";
import Logo from "./Navbar/Logo";
import Profile from "./Navbar/Profile";

const Header = () => {
  return (
    <header className="header">
      <div className="flex flex-row h-16 items-center justify-between w-full max-w-[1210px] mx-auto">
        <Logo />
        <div className="ml-auto flex items-center space-x-2">
          <Cart />
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default Header;

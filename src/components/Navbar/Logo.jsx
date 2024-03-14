import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src="/logo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;

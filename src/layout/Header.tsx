import logo from "../assets/images/Logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-primary h-20">
      <div className="custom-width mx-auto flex justify-between items-center h-full">
        <img src={logo} alt="" />
        <nav className="flex gap-5 text-white">
          <Link to="/">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link>
        </nav>
      </div>
    </header>
  );
};

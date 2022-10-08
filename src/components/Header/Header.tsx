import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-primary h-20">
      <div className="header-components">
        <img src={logo} alt="" />
        <nav className="header-list">
          <Link to="/">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
};

import logo from "../../images/Logo.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-components">
        <img src={logo} alt="" />
        <nav className="header-list">
          <a href="">Order</a>
          <a href="">Order Review</a>
          <a href="">Manage Inventory</a>
          <a href="">Login</a>
        </nav>
      </div>
    </header>
  );
};

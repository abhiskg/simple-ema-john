import logo from "../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export const Header = () => {
  const userContext = useContext(UserContext);

  const handleSignOut = () => {
    userContext?.logOut().then(() => {});
  };

  return (
    <header className="bg-primary h-20">
      <div className="custom-width mx-auto flex justify-between items-center h-full">
        <img src={logo} alt="" />
        <nav className="flex gap-5 text-white">
          <Link to="/">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About</Link>
          {userContext?.user?.uid ? (
            <div className="cursor-pointer" onClick={handleSignOut}>
              Logout
            </div>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

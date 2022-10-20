import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const userContext = useContext(UserContext);
  const location = useLocation();

  if (userContext?.loading) {
    return <div>Loading....</div>;
  }

  if (!userContext?.user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return <>{children}</>;
};

export default PrivateRoute;

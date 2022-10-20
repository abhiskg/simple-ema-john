import Root from "../layout/Root";
import { Shop } from "../screens/Shop";
import { createBrowserRouter } from "react-router-dom";
import Orders from "../screens/Orders";
import Inventory from "../screens/Inventory";
import About from "../screens/About";
import { productAndCartLoader } from "../loaders/productAndCartLoader";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Shipping from "../screens/Shipping";
import PrivateRoute from "../routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Shop />,
      },
      {
        path: "orders",
        element: <Orders />,
        loader: productAndCartLoader,
      },
      {
        path: "inventory",
        element: (
          <PrivateRoute>
            <Inventory />
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "shipping",
        element: (
          <PrivateRoute>
            <Shipping />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

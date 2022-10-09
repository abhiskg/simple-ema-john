import Root from "../layout/Root";
import { Shop } from "../screens/Shop";
import { createBrowserRouter } from "react-router-dom";
import Orders from "../screens/Orders";
import Inventory from "../screens/Inventory";
import About from "../screens/About";
import { productAndCartLoader } from "../loaders/productAndCartLoader";

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
        element: <Inventory />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;

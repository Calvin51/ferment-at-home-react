import { createHashRouter } from "react-router-dom";
import Products from "./views/front/products";
import About from "./views/front/About";
import Fqa from "./views/front/Fqa";
import FrontEndLayout from "./layout/FrontEndLayout";
import Home from "./views/front/Home";
import Cart from "./views/front/Cart";
import OrderDetails from "./views/front/OrderDetails";
import AccountManage from "./views/front/AccountManage";
import Checkout from "./views/front/Checkout";

export const routes = createHashRouter([
  {
    path: "/",
    element: <FrontEndLayout />,
    children: [
      {
        // 首頁只會有一個
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/fqa",
        element: <Fqa />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/orderdetails/:id",
        element: <OrderDetails />,
      },
      {
        path: "/accountManage",
        element: <AccountManage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

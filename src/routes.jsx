import { createHashRouter } from "react-router-dom";
import Products from "./views/front/products";
import About from "./views/front/About";
import Fqa from "./views/front/Fqa";
import FrontEndLayout from "./layout/FrontEndLayout";
import Home from "./views/front/Home";


export const routes = createHashRouter([
    {
        path: "/",
        element: <FrontEndLayout />,
        children: [
            {
                // 首頁只會有一個
                index: true,
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/fqa",
                element: <Fqa />
            }
        ]
    },
])
import Jewelery from "../pages/Jewelery";
import Detail from "../pages/Detail";
import Homepage from "../pages/Homepage";
import Cart from "../pages/Cart";
import { createBrowserRouter } from "react-router-dom";
import ProductsList from "../pages/ProductsList";
import Electronics from "../pages/Electronics";
import Men from "../pages/Men";
import Women from "../pages/Women";

const router = createBrowserRouter([
  {
    path: "/jewelery",
    element: <Jewelery />,
  },
  {
    path: "/electronics",
    element: <Electronics />,
  },
  {
    path: "/men",
    element: <Men />,
  },
  {
    path: "/women",
    element: <Women />,
  },
  {
    path: "/electronics",
    element: <Electronics />,
  },
  {
    path: "/detail/:productId", //priduct id is for rendering the description as per id
    element: <Detail />,
  },
  {
    path: "/products",
    element: <ProductsList />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default router;

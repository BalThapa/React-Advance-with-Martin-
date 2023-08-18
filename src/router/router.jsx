import Test from "../Test";
//import Products from "../Products";
import Homepage from "../Homepage";
import { createBrowserRouter } from "react-router-dom";
import ProductsList from "../ProductsList";


const router = createBrowserRouter([
    {
      path: "/test",
      element: <Test />,
    },
    {
      path: "/products",
      element: <ProductsList />,
    },
    {
      path: "/homepage",
      element: <Homepage />,
    },
  ]);

  export default router;
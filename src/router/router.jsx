import Test from "../Test";
//import Product from "../Product";
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
      path: "/",
      element: <Homepage />,
    },
  ]);

  export default router;
import Test from "../Test";
import Detail from "../Detail";
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
  ]);

  export default router;
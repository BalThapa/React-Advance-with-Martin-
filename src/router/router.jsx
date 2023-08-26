import Test from "../pages/Test";
import Detail from "../pages/Detail";
import Homepage from "../pages/Homepage";
import { createBrowserRouter } from "react-router-dom";
import ProductsList from "../pages/ProductsList";



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
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Error from "../components/Error";
 
const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/statistics",
            element:<Statistics></Statistics>,
        },
        {
            path:"/dashboard",
            element:<Dashboard></Dashboard>
        },
      ]
    },
  ]);

  export default router
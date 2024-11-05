import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Error from "../components/Error";
import Laptop from "../pages/Laptop";
import Phones from "../pages/Phones";
import Alldisplay from "../pages/Alldisplay";
import SmartWatche from "../pages/SmartWatche";
import MacBook from "../pages/MacBook";
import Iphone from "../pages/Iphone";
import Accessories from "../pages/Accessories";
import Details from "../pages/Details";
 
 
const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Home></Home>,    
            children:[
              {
                path:"/laptops",
                element:<Laptop></Laptop>,
                loader:()=>fetch("../allData.json")
              }, 
              {
                path:"/phones",
                element:<Phones></Phones>,
                loader:()=>fetch("../allData.json")
              },
              {
                path:"/datails/:id",
               element: <Details></Details>
            
              },
              {
                path:"/",
                element:<Alldisplay></Alldisplay>,
                loader:()=>fetch("../allData.json"),
              },
              {
                path:"/watches",
                element:<SmartWatche></SmartWatche>,
                loader:()=>fetch("../allData.json")
              },
              {
                path:"/macbook",
                element:<MacBook></MacBook>,
                loader:()=>fetch("../allData.json")
              },
              {
                path:"/iphone",
                element:<Iphone></Iphone>,
                loader:()=>fetch("../allData.json")
              },
              {
                path:"/accessories",
                element:<Accessories></Accessories>
              },
            ] 
        },
        {
          path:"/details/:id",
          loader:({params})=>fetch(`/allData.json/${params.id}`),
          element:<Details></Details>
        },
        {
            path:"/statistics",
            element:<Statistics></Statistics>,
            loader:()=>fetch("../allData.json")
        },
        {
            path:"/dashboard",
            element:<Dashboard></Dashboard>
        },
      ]
    },
  ]);

  export default router
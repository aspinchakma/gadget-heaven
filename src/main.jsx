import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accessories from "./Components/Accessories";
import AllProducts from "./Components/AllProducts";
import DashBoard from "./Components/DashBoard";
import Home from "./Components/Home";
import Iphones from "./Components/Iphones";
import Laptops from "./Components/Laptops";
import MacBook from "./Components/MacBook";
import NotFound from "./Components/NotFound";
import Phones from "./Components/Phones";
import Root from "./Components/Root";
import SmartWatch from "./Components/SmartWatch";
import Statistics from "./Components/Statistics";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <AllProducts />,
          },
          {
            path: "/laptops",
            element: <Laptops />,
          },
          {
            path: "/phones",
            element: <Phones />,
          },
          {
            path: "/accessories",
            element: <Accessories />,
          },
          {
            path: "/smartWatches",
            element: <SmartWatch />,
          },
          {
            path: "/mackbook",
            element: <MacBook />,
          },
          {
            path: "/iphones",
            element: <Iphones />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

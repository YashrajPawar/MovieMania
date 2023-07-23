import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/components/Header";
import NewRelease from "../src/components/NewRelease";
import WhatsHot from "../src/components/WhatsHot";
import Footer from "../src/components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
require('dotenv').config();

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />  
      <Footer/>
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index:true,
        element: <NewRelease />
      },
      {
        path: "popularmovies",
        element: <WhatsHot />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);

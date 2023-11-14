import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Complaints from "./Components/Complaints";
import Home from "./Components/Home"
// import { Switch, Route } from 'react-router-dom';
import Login from "./Components/login";
// import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
const appRouter = createBrowserRouter([
  {
      path : "/",
      element : <App />,
      children : [
          {
              path: "/",
              element : <Login />
          },
          {
              path : "/home",
              element : <Home />,
              // element: <Menu />
          },
          {
              path : "/complaints",
              element: <Complaints />
          },
        ],
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />) 



// const root = ReactDOM.createRoot(document.getElementById("root"));

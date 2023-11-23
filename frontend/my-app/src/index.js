import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Complaints from "./Components/Complaints";
import Home from "./Components/Home"
// import { Switch, Route } from 'react-router-dom';

// import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import AdminPage from './Components/AdminPage';
import AdminMenu from './Components/AdminMenu';
import AdminHome from './Components/AdminHome';
import AddCompPage from './Components/AddCompPage';
import Login from './Components/Login';
const appRouter = createBrowserRouter([
  {
      path : "/",
      element : <App />,
      children : [
          {
              path: "/",
              element : <Login/>
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
          {
            path : "/Admin/complaints",
            element: <AdminPage/>
          },
          {
            path : "/Admin/Home",
            element: <AdminHome/>
          },
          {
            path : "/addComplaints",
            element: <AddCompPage/>
          }
        ],
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />) 



// const root = ReactDOM.createRoot(document.getElementById("root"));




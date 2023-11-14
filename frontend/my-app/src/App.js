// import ReactDOM from 'react-dom/client';
// import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
// import ComplaintPage from "./Components/ComplaintPage";
// import Menu from "./Components/Menu"
// import { Switch, Route } from 'react-router-dom';
// import Login from "./Components/Login";

import { Outlet } from "react-router-dom"
// import './index.css';
const App = () => {
  return (
    <div>
      {/* Your other components or content */}
      {/* <SideBar/> */}
      {/* <Menu></Menu> */}
      <Outlet/>
      {/* <Login/> */}
    </div>
  );
};




export default App;

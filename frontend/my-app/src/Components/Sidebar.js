import { useState } from "react";
import Calendar from "./assets/Calendar.png"
import  Setting from "./assets/Setting.png"
import  Chat from "./assets/Chat.png"
import Folder from "./assets/Folder.png"
import User from "./assets/User.png"
import Chart_fill from "./assets/Chart_fill.png"
import Chart from "./assets/Chart.png"
import Control from "./assets/control.png"
import Logo from "./assets/logo.png"
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Accounts", src: User, gap: true },
    { title: "Schedule ", src: Calendar },
    { title: "Analytics", src: Chart },
    { title: "Files ", src: Folder, gap: true },
    { title: "Setting", src: Setting },
  ];





  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#3d2d67] h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={Control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={Logo}
            
            className={`cursor-pointer duration-500 w-20 h-20 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            PG Girls Mess
          </h1>
        </div>
        <ul className="pt-6">
        <li  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}>
            <img src={Chart_fill} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
                <Link to="/home">Home</Link>
                {/* Home */}
            </span> 
        </li>
        <li  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}>
            <img src={Chat} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
            <Link to="/complaints">Complaint</Link>
            {/* Complaints */}
            </span> 
        </li>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} />
              {/* image */}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title} 
                {/* name */}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};
export default SideBar;
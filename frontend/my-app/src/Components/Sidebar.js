import React from 'react'


const Sidebar = () => {
    const Menus = [
        {title:"Dashboard", src:""},
        {title:"Menu", src:""},
        {title:"Complaints", src:""},
        {title:"Payments", src:""},
    ]
  return (
    <div className="flex">
        <div className={`w-72 h-screen bg-dark-purple relative`}>
            <ul classname="pt-6">
                {Menus.map((Menu,index) => (
                <li key={index} className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300text-sm items-center gap-x-4 ${"bg-light-white"}`}>
                    <span className={`origin-left duration-200`}>
                        {Menu.title}
                    </span>
                </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
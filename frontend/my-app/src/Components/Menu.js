import React from 'react'
import MenuCard from './MenuCard'

const Menu = () => {
  return (
    <div className='absolute w-screen'>
    {<img className='absolute -my-[950px] w-screen h-screen  opacity-100 -z-30  ml-[80px] ' src='https://img.freepik.com/free-photo/top-close-up-view-vegetables-tomatoes-with-pedicels-garlic-bell-peppers-lemon-oil-onion_140725-72203.jpg'></img> }
        <div>
            <h1 className='font-extrabold text-center text-6xl ml-[400px] mb-10 -my-[850px] font-serif'>Today's Mess Menu</h1>
        </div>
        <div>
            <select name="days" id="days" className=' ml-[450px] my-5 border-solid border-2 p-2 w-60'>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option> 
            </select>
        </div>
        <div className=' ml-[380px] my-10 flex flex-wrap'>
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />

        </div>

    </div>
  )
}

export default Menu

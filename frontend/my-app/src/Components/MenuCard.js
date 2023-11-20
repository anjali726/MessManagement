import React, { useState } from 'react'

const MenuCard = ({Admin}) => {
  const [update,setUpdate] = useState(false);
  const [isAdmin,setAdmin] = useState(Admin);
  const handleClick = ()=>{
    setUpdate(true)
  }
  return (
    <div className='flex flex-col'>
    <div className='ml-[80px] border-4 border-blue-300 rounded-3xl  p-10'>
        <h1 className='text-center font-bold text-2xl '>Breakfast</h1>
        <p className='mb-5'>8:00 am - 9:00 am</p>
        <hr className='mb-5'></hr>
        <ul className='text-lg font-semibold'>
            <li>{(isAdmin && update)?<input className='border-solid border-2' type='text'></input>:'Tea' }</li>
            <li>{(isAdmin && update)?<input type='text'></input>:'Tea' }</li>
        </ul>
        {isAdmin && <button onClick={handleClick} className='bg-gray-400 bg-opacity-30 text-black rounded-lg mt-2 p-2'>Update</button> }
    </div>
        
      
    </div>
  )
}

export const HighMenu = (MenuCard)=>{
  return ({isAdmin})=>{
    return (
      <div>
        <MenuCard Admin={isAdmin}/>
      </div>
    )
  }
}

export default MenuCard

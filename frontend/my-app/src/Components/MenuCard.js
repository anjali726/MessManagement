import React from 'react'

const MenuCard = () => {
  return (
    <div className='flex flex-col'>
    <div className='ml-[80px] border-4 border-blue-300 rounded-3xl  p-10'>
        <h1 className='text-center font-bold text-2xl '>Breakfast</h1>
        <p className='mb-5'>8:00 am - 9:00 am</p>
        <hr className='mb-5'></hr>
        <ul className='text-lg font-semibold'>
            <li>Tea</li>
            <li>Bread</li>
        </ul>
    </div>
        
      
    </div>
  )
}

export default MenuCard

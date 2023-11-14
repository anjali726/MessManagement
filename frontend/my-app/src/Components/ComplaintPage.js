import React from 'react'
import ComplaintCard from './ComplaintCard'
const ComplaintPage = () => {
  return (
    <div className='w-screen'>
        <div>
        <h1 className='font-extrabold text-center text-6xl ml-[350px] mb-10 -my-[850px] font-serif'>Students Complaints</h1>
        </div>
        <div className=' ml-[280px] my-10 flex flex-wrap'>
            <ComplaintCard />
            <ComplaintCard />
            <ComplaintCard />
            <ComplaintCard />

        </div>
    </div>
  )
}

export default ComplaintPage

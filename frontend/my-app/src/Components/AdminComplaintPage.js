import React, { useState } from 'react'
import ComplaintCard, {AdminComplaint} from './ComplaintCard'
const AdminComplaintPage = () => {
    const AddComplaint = AdminComplaint(ComplaintCard);
    const [addComplaint,setComment] = useState(false);
  return (
    <div className='w-screen'>
        <div>
        <h1 className='font-extrabold text-center text-6xl ml-[350px] mb-10 -my-[850px] font-serif'>Students Complaints</h1>
        </div>
        <div className=' ml-[280px] my-10 flex flex-wrap'>

            {<AddComplaint Complaint={addComplaint} setComment={()=>addComplaint==true?setComment(false):setComment(true)} />}
            {/* {<AddComplaint Complaint={addComplaint} setComment={()=>addComplaint==true?setComment(true):setComment(false)} />}
            {<AddComplaint Complaint={addComplaint} setComment={()=>addComplaint==true?setComment(true):setComment(false)} />}
            {<AddComplaint Complaint={addComplaint} setComment={()=>addComplaint==true?setComment(true):setComment(false)} />} */}

        </div>
    </div>
  )
}

export default AdminComplaintPage

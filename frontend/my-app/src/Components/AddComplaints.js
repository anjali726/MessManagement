import React, { useState } from 'react';

const AddComplaint = () => {
  const [userId, setUserId] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    // Handling image upload logic can vary based on requirements.
    // For simplicity, just updating the image state with the file object.
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission logic, such as sending data to an API.
    console.log('Submitted:', { userId, description, image });
    // Reset form fields if needed
    setUserId('');
    setDescription('');
    setImage('');
  };

  return (
    <div className=''>
    <div className=' ml-[550px] -my-[700px] mr-[550px]m-4 p-4  rounded-lg'>
      
      <form className='' onSubmit={handleSubmit}>
        <div>
          <label className='font-semibold block my-2' htmlFor="userId">User ID:</label>
          <input className='border-solid border-2'
            type="text"
            id="userId"
            value={userId}
            onChange={handleUserIdChange}
          />
        </div>
        <div>
          <label className='font-semibold block my-2' htmlFor="description">Description:</label>
          <textarea className='border-solid border-2'
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <label className='font-semibold block my-2' htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button className='font-semibold block my-2 p-2 rounded-lg bg-orange-700' type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default AddComplaint;

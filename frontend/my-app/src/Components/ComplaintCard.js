import React, { useState } from 'react';
import dislike from "./assets/dislike.png";
import disliked from "./assets/disliked.png";
import like from "./assets/like.png";
import liked from "./assets/liked.png";

const ComplaintCard = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [Liked, setLiked] = useState(false);
  const [Disliked, setDisliked] = useState(false);

  const handleDislike = () => {
    setLiked(false);
    if (!Disliked) setDisliked(true);
    else setDisliked(false);
  };

  const handleLike = () => {
    setDisliked(false);
    if (!Liked) setLiked(true);
    else setLiked(false);
  };

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className='flex flex-col w-1/3 ml-[120px]'>
      <div className='border-4 border-blue-300 rounded-3xl mb-10 p-10'>
        <h3 className='font-bold text-lg pb-4'>User_Name</h3>
        <div className={`h-16 overflow-hidden ${showFullText ? 'h-auto' : ''}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, perferendis numquam id qui incidunt ducimus reprehenderit nostrum sed blanditiis nemo doloremque, odio, molestiae laboriosam mollitia consequuntur. Et vel facere culpa!
          </p>
        </div>
        {showFullText ? (
          <button
            className='text-blue-500 mt-2 cursor-pointer'
            onClick={handleToggleText}
          >
            Read less
          </button>
        ) : (
          <button
            className='text-blue-500 mt-2 cursor-pointer'
            onClick={handleToggleText}
          >
            Read more
          </button>
        )}
        <div>
          <img className='rounded-md' src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2lzMTYwNjItaW1hZ2Uta3d2eWZrd3IuanBn.jpg' alt="dirty food" />
        </div>
        <div className='pt-4 flex'>
          <img className='mr-2 w-6 h-6' src={Liked ? liked : like} onClick={handleLike} alt="Like" />
          <img className='ml-2 w-6 h-6' src={Disliked ? disliked : dislike} onClick={handleDislike} alt="Dislike" />
        </div>
      </div>
    </div>
  );
};

export default ComplaintCard;

"use client"

import React from 'react';
import './comments.css'

const Comments = () => {
  // Temporary
  const comments = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 2,
      name: "Vivek Mishra",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc:
        "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return (
    <div className='comments'>
      {comments.map((comment) => (
        <div className='comment' >
          <img className='for-imgCmt' src={comment.profilePic} alt='' />
          <div className='info' > 
            <span className=' font-bold'>{comment.name}</span>
          <p className=' text-black'>{comment.desc}</p>
          </div>
          <span className='date-pl flex-1 text-[2]'> 1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;

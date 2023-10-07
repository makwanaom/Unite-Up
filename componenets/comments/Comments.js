"use client"

import React from 'react';
import './comments.css'

const Comments = () => {
  // Temporary
  const comments = [
    {
      id: 1,
      name: "Aman Gupta",
      userId: 1,
      profilePic:
        "https://pbs.twimg.com/profile_images/1480461625727455234/fofDHTWQ_400x400.jpg",
      desc: "This company is a game-changer in the industry. Keep setting the standard for innovation!",
    },
    {
      id: 2,
      name: "Piyush Bansal",
      userId: 2,
      profilePic:
        "https://im.indiatimes.in/content/2022/Feb/Peyush-Bansal-shark-tank-india-net-worth_6203b3d39e29c.jpg?w=1200&h=900&cc=1",
      desc:
        "Your company consistently delivers on its promises.",
    },
    {
      id: 3,
      name: "Ashneer Grover",
      userId: 3,
      profilePic:
        "https://images.assettype.com/fortuneindia%2F2022-01%2Fea0ee46d-8917-44f1-88c8-6e3c4586ea04%2FAshneer_Grover_BharatPe.jpg?w=1250&q=60",
      desc:
        "The quality-to-price ratio of your products is unbeatable",
    },
  ];

  return (
    <div className='comments'>
      {comments.map((comment) => (
        <div className='comment bg-slate-300 rounded-xl p-3' >
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

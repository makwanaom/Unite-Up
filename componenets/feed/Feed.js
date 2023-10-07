"use client";
import React, { useState } from 'react';
import { FcStackOfPhotos } from "react-icons/fc";
import ModalComponent from '../Modal/modal';
import Posts from '../posts/Posts';
import "./feed.css";

const Feed = () => {
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 2,
      name: "Vivek Mishra",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
  ];
  
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState('');
  
  return (
    <div>
      <div className=' flex flex-row space-x-3 pb-1 mt-4'>
        <div className='bg-white  p-3 space-y-3 border border-gray-300 rounded-[10px]'>
          <div className='flex item-center space-x-2'>
            <button onClick={() => setModalOpen(true)} className=' border-gray-800 border-2 text-black rounded-full px-4 py-3 shadow-2xl bg-gradient-to-r from-slate-300 via-slate-200 to-slate-200 transition-all active:border-purple-400 '>New post</button>
            <div>
              <button className='  group hover:bg-white border-2 ml-72 px-4  rounded-full align-middle shadow-2xl bg-gradient-to-r from-slate-300 via-slate-200 to-slate-200 border-2xl   transition-all active:border-purple-400  border-black'>
                <FcStackOfPhotos size={25} className='ml-14' />
                <h4 className='  opacity-80 group-hover:opacity-100 '>
                  Recommended Post
                </h4>
              </button>
            </div>
            <ModalComponent status={status} setStatus={setStatus} modalOpen={modalOpen} setModalOpen={setModalOpen} />
          </div>
        </div>
       
      </div>
      <div className="flex flex-col gap-10 now">
        {posts.map((post) => (
          <Posts post={post} key={post.id} />
        ))}
      </div>
      
    </div>
  )
}

export default Feed;



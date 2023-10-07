"use client";
// Posts.js
import React, { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import './posts.css';
import Comments from '../comments/Comments';

const Posts = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false);
    const liked = true;

    return (
        <div className="post rounded-2xl">
            <div className="user">
                <div className="userInfo mt-7">
                    <img src={post.profilePic} alt="" />
                    <div className="details">
                        <a
                            href={`/profile/${post.userId}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <span className="name">{post.name}</span>
                        </a>
                        <span className="date">1 min ago</span>
                    </div>
                </div>
                <MoreHorizIcon className='cursor-pointer mr-4' />
            </div>
            <div className="contain">
                <p className='mt-4 ml-5'>{post.desc}</p>
                <img className='mt-4 object-fill h-[30rem] w-[50rem]' src={post.img} alt="" />
            </div>
            <div className="p-4 flex items-center gap-32">
                <div className="item flex items-center gap-2 cursor-pointer">
                    {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                    12 Likes
                </div>
                <div
                    className='item item flex items-center gap-2 cursor-pointer'
                    onClick={() => setCommentOpen(!commentOpen)}
                >
                    <TextsmsOutlinedIcon />
                    19 Comments
                </div>
                <div className="item item flex items-center gap-2 cursor-pointer">
                    <ShareOutlinedIcon />
                    Share
                </div>
            </div>

            {commentOpen && <Comments comments={post.comments} />}
        </div>
    );
};

export default Posts;

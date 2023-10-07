"use client"
import "./account.css"
import React from 'react'
import Image from 'next/image';

const Account = () => {
    return (
        <>

            <div className='container'>
                <div className='profile-main w-fit'>
                    <div className="profile-container mt-5 ml-52 rounded-2xl">
                        <Image className="dp-img" src={"/tesla.jpg"} width={100} height={1} />
                        <div className="profile-container-inner">
                            <Image className="profile-pic" src={"/DP-Tesla.jpg"} width={100} height={100} />

                            <h1 className=" font-bold text-2xl">Tesla</h1>
                            <b>Product Based Company</b>
                            <p> Austin, Texas, United States &middot; </p>

                            <div className="profile-btn">
                                <a href="#">Follow</a>
                                <a href="#">Chat</a>

                            </div>
                        </div>
                    </div>
                </div>
            

            </div>

            <div className="profile-description ml-52 rounded-2xl">
                <h2>
                   About 
                </h2>
                <p>
                Tesla is an American multinational automotive and clean energy company headquartered in Austin, Texas, which designs and manufactures electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services.
                </p>

            </div>


            <div className="profile-description ml-52 rounded-2xl">
                <h2>
                Achievement
                </h2>
                <p>
                Tesla developed the alternating-current power system that provides electricity for homes and buildings. He also pioneered the field of radio communication and was granted more than 100 U.S. patents.
                </p>

            </div>



            <div className='profile-sidebar'>

                </div>
        </>
    )
}

export default Account
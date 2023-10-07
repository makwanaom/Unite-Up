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
      name: "Garuda Aerospace",
      userId: 1,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWgTQfYA-ZeSuzqrq_zjhcLnbL14WHd7dZjvG_PiFDijyuL8l3skN4bkt3fQd2m995GE&usqp=CAU",
      desc: "Garuda Aerospace focuses on the design, build and customization of unmanned aerial vehicles (UAVs) or drones for various applications.",
      img: "https://entrackr.com/storage/2023/07/Garuda-aerospace-800x400.jpg"
    },
    {
      id: 2,
      name: "Observe.AI",
      userId: 2,
      profilePic:
        "https://assets-global.website-files.com/5caac3a8d636b7cfc2606d35/61697ebf919637920660f6e3_Open%20Graph.jpg",
      desc: "Observe.AI is the fastest way to boost contact center performance with live conversation intelligence. .",
      img: "https://www.cxtoday.com/wp-content/uploads/2023/06/observe.ai-llm.png"
    },
    {
      id: 3,
      name: "BoAt",
      userId: 3,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaLhrUUl8ottfGoy1zTBGLKqs9R51v1xPleA&usqp=CAU",
      desc: "BoAt is an India-based consumer electronics brand established in 2015 that markets earphones, headphones stereos, travel chargers, and premium rugged cables.",
      img: "https://static.startuptalky.com/2023/01/boAt-logo-startuptalky.jpg"
    },
    {
      id: 4,
      name: "Mamaearth",
      userId: 4,
      profilePic:
        "https://globalprimenews.com/wp-content/uploads/2020/06/IMG_20200620_134108.png",
      desc: "Mamaearth is an Indian based startup that offers a wide range of cosmetic products to elevate its customers' daily skin care routine.",
      img: "https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/original/9168ad18-96b3-418a-8ad7-400d37603c6f.png"
    },
    {
      id: 5,
      name: "Cadila Pharmaceuticals",
      userId: 5,
      profilePic:
        "https://ww2.freelogovectors.net/wp-content/uploads/2020/09/cadila_pharmaceuticals_logo.png",
      desc: "Cadila Pharmaceuticals is an Indian multinational pharmaceutical company based in Ahmedabad, Gujarat, India.",
      img: "https://sugermint.com/wp-content/uploads/2020/07/cadila-pharmaceuticals-limited.jpg"
    },
    {
      id: 6,
      name: "Cadila Pharmaceuticals",
      userId: 6,
      profilePic:
        "https://ww2.freelogovectors.net/wp-content/uploads/2020/09/cadila_pharmaceuticals_logo.png",
      desc: "Cadila Pharmaceuticals is an Indian multinational pharmaceutical company based in Ahmedabad, Gujarat, India.",
      img: "https://sugermint.com/wp-content/uploads/2020/07/cadila-pharmaceuticals-limited.jpg"
    },
    {
      id: 7,
      name: "Lenskart",
      userId: 7,
      profilePic:
        "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/hmk8o75en6he1bjrvxmh",
      desc: "Lenskart is an Indian multinational optical prescription eyewear retail chain, based in Gurugram.",
      img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/22a29dbb-df55-499b-85cd-b1bce5907cd9.__CR0,0,600,180_PT0_SX600_V1___.png"
    },
    {
      id: 8,
      name: "Zerodha",
      userId: 8,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkDraCL-JVvLUIOH87FOlKmRWSKNSKK7X4SA&usqp=CAU",
      desc: "Zerodha works on an online discount brokerage model wherein only online trading services are offered to customers.",
      img: "https://investorguruji.com/wp-content/uploads/2022/11/Zerodha-Logo.png"
    },
    {
      id: 9,
      name: "Ola Cab",
      userId: 9,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1b72og99HMRJXqbbz4AZEeBv62DHfyOlKg&usqp=CAU",
      desc: "Ola Cab is Online Automobile Limited Aggregator .It is a ride-hailing company based in India.",
      img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*BE92mYdSmr4F_NUk_zD80g.jpeg"
    },
    {
      id: 10,
      name: "Paytm",
      userId: 10,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQnQiTOYd7RvcQsGsIY8Eq4MozaPI8c40GfQ&usqp=CAU",
      desc: "Paytm is an Indian multinational financial technology company, that specializes in digital payments and financial services, based in Noida.",
      img: "https://pwebassets.paytm.com/commonwebassets/commonweb/images/about-us/monuments.svg"
    },
    {
      id: 11,
      name: "TATA Group",
      userId: 11,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmftbioLlnnSudQgbT4UTbGD_EQZl6Dtouxw&usqp=CAU",
      desc: "Tata Group is a global Indian conglomerate interested in various businesses, including aviation, steel, power, chemicals, and information technology.",
      img: "https://studysection.com/blog/wp-content/uploads/2020/11/5c1200fd3c00007d050f1375.jpeg"
    },
    
    {
      id: 12,
      name: "Infosys",
      userId: 12,
      profilePic:
        "https://images.moneycontrol.com/static-mcnews/2017/04/Infosys11.jpg?impolicy=website&width=770&height=431",
      desc: "Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services. The company was founded in Pune and is headquartered in Bangalore.",
      img: "https://www.unlock-bc.com/wordpress/wp-content/uploads/2019/09/Infosys-min-min.jpg"
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
              <button className='  group hover:bg-white border-2 ml-80 px-4  rounded-full align-middle shadow-2xl bg-gradient-to-r from-slate-300 via-slate-200 to-slate-200 border-2xl   transition-all active:border-purple-400  border-black'>
                <FcStackOfPhotos size={25} className=' ml-10' />
                <h4 className='  opacity-80 group-hover:opacity-100 '>
                 Previous Posts
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



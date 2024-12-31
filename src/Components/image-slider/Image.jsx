
import React, { useState } from 'react'
 import './Image.css'
 import { FaChevronCircleLeft } from "react-icons/fa";
 import { FaChevronCircleRight } from "react-icons/fa";


const Slider = () => {
  const ImageData = [
    {
      link: "https://www.shutterstock.com/image-photo/light-beacon-calling-batman-600nw-2448836315.jpg",
    },
    {
      link: "https://t4.ftcdn.net/jpg/03/89/39/09/360_F_389390965_lwqVX10TBdFH2WMBH6GGF8pcNiOhzfnb.jpg",
    },
    {
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCS69TX3psqxQNrCKHSQC-TVsQKVf8sG5jA&s",
    },
    {
      link: "https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b8c80905bc7264df9060efdc6f6a4aa1",
    },
  ];
  const [activeindex,setactiveindex]=useState(0);

  const handleprev =()=>{
    console.log('prev');
    setactiveindex( (current)=>(current -1 + ImageData.length)%ImageData.length)

  }
  const handlenext =()=>{
    console.log('prev');

  setactiveindex((current)=>(current+1)%ImageData.length)

  }
  
  return (
    <div className='slider-container'>
        <div className="img-container">
            {
              ImageData.map((item,index)=>(
                <div className={`imgmap ${index=== activeindex ? 'active' : ''}`} key={index}>
                    <img src={item.link} />
                </div>
              ))
            }
        </div>
        <div className="controls">
        <FaChevronCircleLeft onClick={handleprev} className='left' />
        <FaChevronCircleRight onClick={handlenext}  className='right' />
        </div>
   
    </div>
  
  )
}

export default Slider

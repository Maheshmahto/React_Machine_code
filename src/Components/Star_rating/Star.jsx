import { useState } from "react";
import { FaStar } from "react-icons/fa";
 import './style.css'
const Star =({noOfstar})=>{
    const [rating,setRating] =useState(null);
    const [hover,sethover]=useState(null);
    const handleOnclick =(index)=>{
        setRating(index);
    }
    const handleMouseEnter = (index)=>{
        setRating(index);
    }
    const handleMouseleave= (index)=>{
        sethover(rating);
    }
    return  (
    <>
    {
         [...Array(noOfstar)].map((item,index) =>{
            index=index+1;
            return <FaStar 
            key={index}
            onClick={()=>handleOnclick(index)}
            size={50}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onMouseEnter={()=>handleMouseEnter(index)}
            onMouseLeave={()=>handleMouseleave(index)}

            />
          })
    
    }
     
    </>

    )
}
export default Star
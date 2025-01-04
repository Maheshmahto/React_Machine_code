
import React, { useState } from 'react'

const Checkbox = () => {
    const country=['Usa','Canada','France'];
    const [ data,setData]=useState(country);
    const [findindex,setFindindex]=useState([]);
    const handleOnchange=(index)=>{
      if(findindex.includes(index)){
         setFindindex(findindex.filter((i)=> i!==index));
      }
      else{
        setFindindex([...findindex,index]);
      }
    }
    const handleDelete=(index)=>{
    setData( data.filter((item,i)=>i!==index)) 
    setFindindex(findindex.filter((i)=> i!==index));

    }
  return (
    <div>
       {
        data.map( (item,index)=>(
            <div className="Check-container">
                <input type="checkbox" id={`check-${index}`}
                  onChange={()=>handleOnchange(index)}
                  checked={findindex.includes(index)} 
                  />
               <label htmlFor={`check-${index}`}>{item}</label>
               {
                findindex.includes(index) && 
                <button onClick={()=>handleDelete(index)}>X</button>

               }
            </div>
        ))
       }
    </div>
  )
}

export default Checkbox

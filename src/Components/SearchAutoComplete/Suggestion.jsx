import React from 'react'

const Suggestion = ({data,handleOnclick}) => {
  return (
    <div>
         {
           data && data.length ?  data.map((item,index)=>(
            <li onClick={handleOnclick} key={index}>{item}</li> 
           )):null
         }
    </div>
  )
}

export default Suggestion

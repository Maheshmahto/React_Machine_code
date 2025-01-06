import React, { useState } from 'react'

const Outside = () => {
    const [showconten,setShowcontent]=useState(false);
  return (
    <div>
      {
        showconten? (
        <>
        <h1> this is a random content</h1>
        <p>please click outside of this to close this. it won't close if you click inside</p>

        </>
                 
        ):<button onClick={()=>setShowcontent(true)}>Show Content</button>
      }
    </div>
  )
}

export default Outside

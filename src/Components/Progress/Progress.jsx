import React from 'react'

const Progress = ({progress,color}) => {
    const styleobject={
        width :`${progress}%`,
        height:30,
        backgroundColor:color || 'pink',
        borderRadius:20,
    }
  return (
    <div className='container'>
       <div className="progress-container">
           <div style={styleobject}>
                {`${progress}%`}
           </div>
       </div>
    </div>
  )
}

export default Progress

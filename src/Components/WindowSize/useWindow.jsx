import React, { useLayoutEffect, useState } from 'react'

const useWindow = () => {
    const [windowSize,setWindowSize]=useState({height :0, width :0});
    const handleResize=()=>{
        setWindowSize( 
            {
          width : window.innerWidth,
          height :window.innerHeight,
            }
        )
    }
 
     useLayoutEffect( ()=>{
        handleResize();
        window.addEventListener('resize',handleResize);
        return ()=>{
            window.removeEventListener('resize',handleResize);
        }
     },[])

  return  windowSize;
  
}


export default useWindow
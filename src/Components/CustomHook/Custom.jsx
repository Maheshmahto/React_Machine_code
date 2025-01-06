import React, { useEffect, useState } from 'react'

const useCustom = ({url,option={}}) => {
    
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false);

  const fetchdata=async()=>{
    setLoading(true);
        try{
            const response= await fetch(url,{...option});
             const result= await response.json();
             setData(result);
             setLoading(false)
        }
        catch(e){
            console.log('error',e);
        }
  }
  useEffect(()=>{
     fetchdata();
  },[url])
  return {data,loading}
   
}

export default useCustom

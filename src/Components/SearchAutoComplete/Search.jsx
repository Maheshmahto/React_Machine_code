
import React, { useEffect, useState } from 'react'
import { use } from 'react';

const Search = () => {
    const [user,setUser]=useState([]);
    const [loading,setLoading]=useState(false);
    const [SearchPara,setSearchPara]=useState('');
    const [filterData,setfilterData]=useState([]);
    const [showDropdown,setShowDropdown]=useState(false);

    const fetchUserData=async()=>{
        setLoading(true);
        try{
        const data =await fetch('https://dummyjson.com/users');
        const result =await data.json();
        // console.log(result)
            if(result && result.users && result.users.length){
                setUser(result.users.map((item)=>(item.firstName)))
                setLoading(false)
            }
            // setUser(result.users.map((item)=>(item.firstName)))

        }
        catch(e){
            console.log("error",e);
        }
      
    }
    useEffect(()=>{
        fetchUserData();
    },[])
    console.log(user)

    // const handleOnclick=()={

    // }
  return (
    <div>
        {
            loading ? <div>please wait! data is loading</div> :
             <input type="text" value={SearchPara}  placeholder='Enter Name'/>

        }

    </div>
  )
}

export default Search

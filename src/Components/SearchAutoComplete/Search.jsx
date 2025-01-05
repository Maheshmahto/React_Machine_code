
import React, { useEffect, useState } from 'react'
import { use } from 'react';
import Suggestion from './Suggestion';

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
    // console.log(user)

    const handleOnchange=(event)=>{
        // const query=event.target.value.toLowerCase();
        const query = event.target.value.toLowerCase(); 

        setSearchPara(query);
       if(query.length>1){
        const filterdata= user && user.length ? user.filter( (item)=>item.toLowerCase().indexOf(query)>-1):[]
        setfilterData(filterdata);
        setShowDropdown(filterData);
        
       }
       else{
        setShowDropdown(false);
       }
    }
    console.log(user);
    console.log(filterData);
    const handleOnclick=(event)=>{

      setShowDropdown(false);
      setSearchPara(event.target.innerText);
    }
  return (
    <div>
        {
            loading ? <div>please wait! data is loading</div> :
             <input type="text" value={SearchPara} 
             onChange={handleOnchange}           
              placeholder='Enter Name'/>

        }
        {
            showDropdown && <Suggestion data={filterData} handleOnclick={handleOnclick}></Suggestion>
        }
    </div>
  )
}

export default Search

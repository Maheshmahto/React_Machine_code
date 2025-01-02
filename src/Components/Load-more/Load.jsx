import { useState ,useEffect } from "react"

 
 const Load =()=>{
    const [image,setImage]=useState([]);
    const [page,setPage]=useState(1);
    
    const fetchImages = async (index)=>{
        try{
            const url=`https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=20`;
            const result =await fetch(url);
            const data = await result.json();
           return data;

        }
        catch(e){
            console.log("error",e);
        }
    }
    
    const fetchPage =async(index)=>{
        const data = await fetchImages(index);
        setImage((prev)=>[...prev,...data]);
    }

     useEffect( ()=>{
        fetchPage(page);
     },[])

     const handleLoadmore =()=>{
          const nextPage =page +1;
          setPage(nextPage);
          fetchPage(nextPage);

     }
    
  return (
     <div>
        <h1>Load More</h1>
        {
            image.map((item,index)=>(
                <img key={index} src={item.thumbnailUrl}  />
            ))
        }
        <button onClick={handleLoadmore}>Load more</button>

     </div>
   )
 }
 export default Load
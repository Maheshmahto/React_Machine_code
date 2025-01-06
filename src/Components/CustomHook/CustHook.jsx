
import React from 'react'
import useCustom from './Custom'

const CustHook = () => {
  const  {data,loading}=useCustom({url : 'https://dummyjson.com/products',option:{}})
  console.log(data,loading);
  return (
    <div>
      {
        loading?<h1>please wait data is loading</h1>:(
            data && data.products && data.products.length ?(
                data.products.map((item)=>(
                  
                    <p key={item.id}>{ item.title}</p>
                ))
            ):null
        )
      }
    </div>
  )
}

export default CustHook

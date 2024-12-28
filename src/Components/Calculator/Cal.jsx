import { useState } from 'react'
import './cal.css'
const Cal = ()=>{
    const buttons =[
        '1','2','3','+',
        '4','5','6','-',
        '7','8','9','*',
        '0','C','=','/'
    ]
    const [input,setinput]=useState('');
    const handleclick=(value)=>{
        if(value === 'C'){
            setinput('');
        }
        else if(value === '='){
            setinput(eval(input))
        }
        else{
            setinput( (prev)=>prev +value);
        }
    }
  return(
    <>
      <div className="calculato-container">
           <div className="input-container">
                <input type="text" value={input} />
           </div>
           <div className="button-container">
                {
                    buttons.map( (btn, index)=>( 
                        <button onClick={()=>handleclick(btn)}>{btn}</button>
                    ))
                }
           </div>
      </div>
    </>
  )
}
export default Cal
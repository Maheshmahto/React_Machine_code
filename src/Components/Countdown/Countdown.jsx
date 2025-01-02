import { useEffect, useState } from 'react'
import './count.css'
const Countdown =()=>{
    const [sec,setSec]=useState('');
    const [min,setMin]=useState('');
    const [hour,setHour]=useState('');
    const [running ,setRunning]=useState(false);
    const [totalTime,setTotalTime]=useState(0);
    useEffect(()=>{
        if(running && totalTime>0){
            const timer = setInterval(() => setTotalTime((currentTime)=>currentTime-1)           
      , 1000);
            return ()=>clearInterval(timer)
        }
    }
     ,[running,totalTime])

     const handleStart =()=>{
        setTotalTime(hour*3600 +min*60+sec);
        setRunning(true);
     }

     const formatTime =(time)=>{
        const hrs=Math.floor(time/3600)
        const minutes=Math.floor((time%3600)/60)

        const seconds=(time%60).toString().padStart(2,'0')
       
        return `${hrs} :${minutes} :${seconds}`;
     }

   return (
     <div className="cnt-container">
        <h1>Countdown timer</h1>
        { !running &&   (
            <div>  
            <input type="number"
             placeholder='Hours'
            //  min='0'
            //  max= '59'
             value={hour}
             onChange={(e)=>setHour(e.target.value)}            
             />

             <input type="number"
             placeholder='minutes'
            //   min='0'
            //   max='59'
             value={min}
             onChange={(e)=>setMin(e.target.value)}
             />

             <input type="number"
             placeholder='seconds'
            //  min='0'
            //  max='59'
             value={sec}
             onChange={(e)=>setMin(e.target.value)}
             />
             <button onClick={handleStart} >Start</button>
             </div>
            ) }
            <h2>{formatTime(totalTime)}</h2>
           {
            running ? (<button onClick={()=>setRunning(false)} >Pause</button>) 
            : totalTime >0 ?<button onClick={()=>setRunning(true)} >Resume</button>
            :null
           }
           <button onClick={()=>{setSec(0);
                                 setHour(0);
                                 setMin(0);
                                 setRunning(false);
                                 setTotalTime(0);
 
            }}>Reset</button>
     </div>
    )
}
export default Countdown
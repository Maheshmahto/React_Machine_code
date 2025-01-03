import React, { useEffect, useState } from 'react'
import Accordian from './Components/Accordian/Accordian'
import Star from './Components/Star_rating/Star'
import Slider from './Components/image-slider/Image'
import Cal from './Components/Calculator/Cal'
import TodoApp from './Components/To-do/Todo'
import Weather from './Components/Weather/Weather'
import TicTacToe from './Components/TicTacToe/TicTacToe'
import QrCode from './Components/Qr-code/QrCode'
import LightDark from './Components/LightDark/LightDark'
import Quiz from './Components/Quiz-App/Quiz'
import Countdown from './Components/Countdown/Countdown'
import Load from './Components/Load-more/Load'
import Progress from './Components/Progress/Progress'

import './App.css'
import TabTest from './Components/Tabs/TabTest'
const App = () => {
  const [progress,setprogress]=useState(0);
  useEffect( ()=>{
    const timer = setInterval(()=>{
      if(progress<100){
        setprogress((p)=>(p+1))
      }
    },20)
   return ()=> {clearInterval(timer)}
  },[progress])
  return (
    <div className='app'>

     {/* <Accordian></Accordian> */}
     {/* <Star noOfstar={10}></Star> */}
     {/* <Slider></Slider> */}

     {/* <Cal></Cal> */}
     {/* <TodoApp></TodoApp> */}
     {/* <Weather></Weather> */}
     {/* <TicTacToe></TicTacToe> */}
     {/* <QrCode></QrCode> */}
     {/* <LightDark></LightDark> */}
     {/* <Quiz></Quiz> */}
     {/* <Countdown></Countdown> */}
     {/* <Load></Load> */}

     {/* <Progress progress={progress} color={'blue'}></Progress> */}
     <TabTest></TabTest>
    </div>
  )
}

export default App

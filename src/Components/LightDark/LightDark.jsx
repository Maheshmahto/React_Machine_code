import React from 'react'
import useLocalStroage from './LocalStorage'
import './Light.css'

const LightDark = () => {
    const [theme,setTheme]= useLocalStroage('theme','dark');
    const handleChangeTheme =()=>{
        setTheme (theme === 'light' ?'dark' : 'light')
        console.log(theme)
    }
  return (
    <>
      <div className="light-dark-mode" data-theme={theme}>
         <div className="light-container">
            <p>Hello World !</p>
            <button onClick={handleChangeTheme}>Change Theme</button>
         </div>
      </div>
    </>
  )
}

export default LightDark

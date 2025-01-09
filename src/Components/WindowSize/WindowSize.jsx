import React from 'react'
import useWindow from './useWindow'

const WindowSize = () => {
    const size= useWindow();
    const {width, height}=size;
  return (
    <div>
      <h1>mahesh</h1>
      <h3>the width is{width}</h3>
      <h3>the height is{height}</h3>
    </div>
  )
}

export default WindowSize

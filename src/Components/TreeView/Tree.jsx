import React, { useState } from 'react';

import './style.css'
const Tree = ({ files }) => {
    const [toggle,setToggle]=useState(false)
     const handleOnclick=()=>{
        setToggle(!toggle)
     }
     const [rotation, setRotation]=useState(false);
  return (
    <div>
      <div className="Tree-container" onClick={handleOnclick}>
        {files.isFolder ? (
          <button className={toggle ? 'expand' : ''} >
              {'>'}
          </button>
        ) : null}
        {files.name}
      </div>
      {files.isFolder && toggle && files.children.map((item) => (
        <div key={item.name} style={{ marginLeft: '20px' }}>
          <Tree files={item} />
        </div>
      ))
      }
    </div>
  );
};

export default Tree;

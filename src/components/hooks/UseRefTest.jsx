import React from 'react'
import { useRef } from 'react'
function UseRefTest() {
    const inputRef = useRef(null);

  return (
    <div>
        <input type="text" ref={inputRef} placeholder='type your name' /> 
        <button onClick={()=>{
            inputRef.current.focus();
        }}>click me to focus</button>
    </div>
  )
}

export default UseRefTest
import React from 'react'
import '../../styles/useStateTest.css'
import { useState } from 'react'

export function UseStateTest() {
  const [count, setCount] = useState(0);
  const counter = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1 className='header'>This is a basic counter using useState hook</h1>
      <button onClick={counter}>click me</button>
      <h3 > Number of times clicked {count}</h3>
    </div> 
  )
}

export const UseStateInput = () => {
  const [value, setValue] = useState('');
  const update = (e) => {
    setValue(e.target.value);
  }
  return(
    <div>
      <input type="text" placeholder='type something' onChange={update}/><br />
      <h1>{value?value:'type something'}</h1>
    </div>
  )
}



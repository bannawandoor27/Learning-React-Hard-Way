import React from 'react'
import '../styles/useStateTest.css'
function UseStateTest() {
  const [count, setCount] = React.useState(0);
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

export default UseStateTest
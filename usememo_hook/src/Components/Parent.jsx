import React from 'react'
import { useState } from 'react'
import ExpensiveCalculator from './ExpensiveCalculator';

const Parent = () => {
    let [count,setCount]=useState(0);
  return (
    <>
        <h1>Count:{count}</h1>
        <ExpensiveCalculator/>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>

    </>
  )
}

export default Parent
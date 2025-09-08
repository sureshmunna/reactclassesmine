import React from 'react'
import { useEffect } from 'react';
import { useMemo } from 'react'

const ExpensiveCalculator = () => {
    let result =useMemo(()=>{
        let sum =0;
        for (let i = 0; i < 100000; i++) {
            console.log('suresh');
            
             sum += i;
        }
          console.log(sum);
        return sum;        
      
        
    },[])
    
  return (
    <>
    <h2>ExpensiveCalculator</h2>
    <h3>Result :{result}</h3>
    </>

  )
}

export default ExpensiveCalculator
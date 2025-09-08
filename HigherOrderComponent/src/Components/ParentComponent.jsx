import React, { useCallback, useState } from 'react'
import Title from './Title';
import Count from './Count';
import Button from './Button';

const ParentComponent = () => {
    let [age,setAge]=useState(30);
    let [salary,setSalary]= useState(50000);

    console.log("Parent Component : rendering");

    let IncreamentAge=useCallback(()=>{
        setAge(age+1);
    },[age])
    let IncreamentSalary = useCallback(()=>{
        setSalary(salary +10000)
    },[salary])
    
  return (
    <>
        <Title text="useCallback hook"/>
        <Count text="age" count={age}/>
        <Button handleClick={IncreamentAge}>Increament Age</Button>
        <Count text='salary' count={salary} />
        <Button handleClick={IncreamentSalary}>Increament Salary</Button>
    </>
  )
}

export default React.memo(ParentComponent); 
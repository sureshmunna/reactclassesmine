import React, { useContext, useState } from 'react'
import { mycontext2 } from '../Context/GlobalContext2';

const Aa = () => {
    let {val,setVal}=useContext(mycontext2);
    
  return (
    <div>
        <br></br><br></br>
        <h1>second Global Context</h1>
        <h1>val From Aa:{val.toString()}</h1>
        <button onClick={()=>{setVal(!val)}}>reverse</button>
    </div>
  )
}

export default Aa
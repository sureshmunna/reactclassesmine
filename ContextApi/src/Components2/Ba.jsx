import React, { useContext, useState } from 'react'
import { mycontext2 } from '../Context/GlobalContext2';

const Ba = () => {
  let {val,setVal}=useContext(mycontext2);
    return (
    <div>
        <h1>Val from Ba : {val.toString()} </h1>
        <button onClick={()=>{setVal(!val)}}>reverse again </button>
    </div>

)

}

export default Ba
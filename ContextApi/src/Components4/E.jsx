import React, { useContext } from 'react'
import { mycontext4 } from '../Context/GlobalContext4'

const E = () => {
    let {val,setVal}=useContext(mycontext4)
  return (
    <div>
        <h1>From Contect 4</h1>
        {
            val.map(item=>(
            <div>
                <h1>name :{item.name} </h1>
                <h1>age : {item.age}</h1>
            </div>
        ))
        }
    </div>
  )
}

export default E
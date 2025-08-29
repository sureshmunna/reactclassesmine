import React from 'react'
import { useContext } from 'react'
import { mycontext4 } from '../Context/GlobalContext4'

const F = () => {
    let {val,setVal}=useContext(mycontext4)
  return (
    <div>
        <button onClick={()=>{setVal(()=>val.map(item=>item.name=='Kohli'?({name:'Rohit',age:40}):item))}}>change name</button>
    </div>
  )
}

export default F
import React, { useContext } from 'react'
import { mycontect3 } from '../Context/GlobalContext3'

const Comp2 = () => {
    let {val,setVal}= useContext(mycontect3)
  return (
    <div>
        <button onClick={()=>{setVal(val.filter(item=>item %2==0))}}>Delete Odd Element</button><br></br>
        <button onClick={()=>{setVal(val.filter( item=>item %2!=0))}}>Delete Even Element</button>
    </div>
  )
}

export default Comp2
import { useContext } from 'react'
import { mycontect3 } from '../Context/GlobalContext3'

const Comp1 = () => {
    let {val,setVal}=useContext(mycontect3)
  return (
    <div>
        <h1>Third Global Context</h1>
        <h1> Values from array from Component 1</h1>
        {
            val.map((item,index)=><h5 key={index}>{item}</h5>)
        }
    </div>
  )
}

export default Comp1
import { useContext } from "react"
import { mycontext } from "../Context/GlobalContext"

const C =()=>{
    let {count,setCount}=useContext(mycontext)
    return(<>
    <h1>count in C : {count}</h1>
    <button onClick={()=>{setCount(0)}}>Set Count</button>
    </>)
}
export default C
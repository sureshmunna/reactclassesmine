import { useContext } from "react"
import { mycontext } from "../Context/GlobalContext"

const B =()=>{
    let {count,setCount}=useContext(mycontext)

    return(
        <>
        <h1>count in B:{count}</h1>
        <button onClick={()=>{setCount(prev=>prev-1)}}>Decreament</button>
        </>
    )
}
export default B;
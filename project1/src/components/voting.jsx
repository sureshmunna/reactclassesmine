import { useState } from "react"

let Voting =()=>{
    let [Ismarried,setIsmarried] =useState(false)
    return(
        <>
        <h1>Voting Component </h1>
        <h1>{Ismarried ? "Dont know":" Am"}</h1>
        <button onClick={()=>{setIsmarried(true)}}>Update marriage status</button>
        </>
    )
}
export default Voting
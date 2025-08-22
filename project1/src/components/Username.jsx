import { useState } from "react"

let Username =() =>{
    let[name,setName]=useState("Raj")
    return <>
     <h1>username : {name}</h1>
     <button onClick={()=>{setName("RajKumari")}}>Update Name</button>
    </>;
}
export default Username;
import { useEffect, useRef } from "react";

let Focus =()=>{
 let inputref= useRef();
 console.log(inputref);
 useEffect(()=>{
    console.log(inputref.current.id);
    inputref.current.focus()
 },[])
 return (
    <>
    <form>
        <label>First Name</label>
        <input type="text" ref={inputref} name="" id="fname" />
    </form>
    </>
 )
}
export default Focus
import { useState } from "react"

let Counter = () =>{
    let [state,setState] = useState(10);
    console.log(state);
    let age =30;
    
    let updateAge =()=>{
       age = age+1;
       console.log(age,"age");
       
    }
    return(<>
       <h1>useState hook</h1>
       <h1>Count : {state}</h1>
       <button onClick={()=>{setState(state +1)}}>Increment</button>
       <button onClick={()=>{setState(state-1)}}>Decrement</button>
       <button onClick={()=>{setState(10)}}>Reset</button>
       <h1>Age : {age}</h1>
       {/* <button onClick={()=>{updateAge()}}>update Age</button> */}
       <button onClick={updateAge}>update Age</button>
    </>)
    
}
export default Counter
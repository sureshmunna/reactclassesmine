import React, { useReducer } from 'react'

const UseReducer = () => {
    let reducer =(State,action)=>{
        switch (action.type) {
            case "inc":
                return State +=1
                break;
                 case "dec":
                return State -=1
                break;
                case "double":
                    return State+=State
                    break;
            default: "not did"
                break;
        }
    }
    let [state,dispatch]=useReducer(reducer,0)
  return (
   
   <>
        <h1>State : {state}</h1>
        <button onClick={()=>{dispatch({type:"inc"})}}>Increament</button><br></br><br></br>
        <button onClick={()=>{dispatch({type:"dec"})}}>Decreament</button><br></br><br></br>
        <button onClick={()=>{dispatch({type:"double"})}}>Double</button>
   </>
  )
}

export default UseReducer
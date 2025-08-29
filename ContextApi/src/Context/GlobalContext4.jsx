import React, { createContext, useState } from 'react'
export let mycontext4=createContext()
const GlobalContext4 = ({children}) => {
    let [val,setVal]=useState([{
        name:'Kohli',
        age:25
    }])
  return (
    <div>
        <mycontext4.Provider value={{val,setVal}}>
            {children}
        </mycontext4.Provider>
    </div>
    
  )
}


export default GlobalContext4
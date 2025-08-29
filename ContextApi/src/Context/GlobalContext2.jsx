import React, { createContext, useState } from 'react'

export let mycontext2=createContext()
const GlobalContext2 = (props) => {
  let [val,setVal]=useState(false)
    return (
    <>
    <mycontext2.Provider value={{val,setVal}}>
        {props.children}
    </mycontext2.Provider>
    </>
  )
}

export default GlobalContext2
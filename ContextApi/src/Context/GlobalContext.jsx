import { useState } from "react";
import { createContext } from "react";

export let mycontext = createContext();//returns object having Provider and Consumer 

const GlobalContext = (props) =>{
   let [count,setCount]= useState(0);
   return(
    <mycontext.Provider value={{count,setCount}}>
       {props.children}
    </mycontext.Provider>
   );
};
export default GlobalContext;


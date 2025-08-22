import { Fragment, useState } from "react"

let Employee =()=>{
   let [state,setState]= useState(["HTML","CSS","JavaScript","Java"])

   console.log(typeof state);
   return(<>
   {state.map((ele,index)=>{
    return(
        <Fragment key={index}>
            <li>{ele}</li>
        </Fragment>
    )
   })}
         
   </>)
   
}
export default Employee
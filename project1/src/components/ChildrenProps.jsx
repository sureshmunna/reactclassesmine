import { Children } from "react";
import Independence from "./Independence"

let Childrenprops =()=>{
    console.log(Children);
    
    return <>
      {/* <Independence>Happy Independence day </Independence> */}
      <Independence>
        <h1>Happy Independence Day</h1>
      </Independence>
      
    </>
}
export default Childrenprops
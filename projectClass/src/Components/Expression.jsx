import { Fragment } from "react";

let Expression = () =>{
    let ename = "Raj";
    let Ismarried = true;
    // return (<div>
    //     <h1>JSX Expression</h1>
    //     <h1>{ename}</h1>
    //     <h1>{Ismarried ? "Dont know":"AH"}</h1>
    // </div>)
    //!fragment;
    // return (<Fragment>  //Fragment is used to avoid extra node added into the DOM
    //     <h1>JSX Expression</h1>
    //     <h1>{ename}</h1>
    //     <h1>{Ismarried ? "Dont know":"AH"}</h1>
    // </Fragment>)
    return (<>
        <h1>JSX Expression</h1>
        <h1>{ename}</h1>
        <h1>{Ismarried ? "Dont know":"AH"}</h1>
    </>)
}
export default Expression
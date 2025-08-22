import ComponentB from "./ComponentB"

let ComponentA =()=>{
    console.log("d");
    
let gold = "100 kg";
return(
<><ComponentB data={gold}></ComponentB></>);
};
export default ComponentA
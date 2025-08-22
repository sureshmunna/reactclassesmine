import ComponentD from "./ComponentD"
import ComponentE from "./ComponentE"

let ComponentC = ()=>{

    let skills=["HTML","JAVA","JAVASCRIPT","C#"]
    return(
        <>
        <ComponentD data={skills}/>
        <ComponentE data={skills}/>
        </>
    )
}
export default ComponentC
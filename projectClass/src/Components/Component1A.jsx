import Component1B from "./Component1B"

let Component1A = ()=>{

    let Skills =["Java","C#","HTML","JAVASCRIPT",]
    return(
        <>
        <Component1B userName="Raj" age={30} data={Skills}></Component1B>
        </>
    );
}
export default Component1A
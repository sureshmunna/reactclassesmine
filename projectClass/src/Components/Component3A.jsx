import Component3B from "./Component3B";

let Component3A =()=>{
    let sayHello =()=>{
        console.log("Hello......");
        return(<><h1>Hi Hello</h1></>)
        
    };
    return (
        <>
        <Component3B greetings={sayHello}></Component3B>
        </>
    )
}
export default Component3A
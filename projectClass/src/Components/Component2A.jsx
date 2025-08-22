import Component2B from "./Component2B"

let Component2A = () => {
    let skills = ["HTML", "JAVA", "SQL", "C#", "JAVASCRIPT"]
    let employee = {
        Sid: 101,
        sName: "sueresh",
        sContact: "9676845648"
    }
    return (
        <>
        <Component2B userName="raj" age={30} data={skills} details={employee}></Component2B>
        </>
    );

}
export default Component2A
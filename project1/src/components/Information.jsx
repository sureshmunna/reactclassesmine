import { useState } from "react"

let Information  =() =>{
    let [student,setStudent] = useState({
        name :'suresh',
        scontact: 901066785,
        sid : 101,
        age:30
    });
    let {name,scontact,sid,age} = student;
    return (
        <>
        <h1>{name}</h1>
        <h1>{scontact}</h1>
        <h1>{sid}</h1>
        <h1>{age}</h1>
        <button onClick={()=>{setStudent({...student,scontact:11111111111})}}>Update Contact</button>
        </>
    )
}

export default Information
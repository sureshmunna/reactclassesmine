import { useEffect, useState } from "react"

let FetchFunction =()=>{
    let [allUsers,setAllUsers]=useState();
    let getUsers = async () =>{
        let result = await fetch("https://fakestoreapi.com/users");
        let data = (await result).json()
    }
    useEffect(()=>{
        getUsers();
    },[]);

    return(<>
    </>)
}
export default FetchFunction

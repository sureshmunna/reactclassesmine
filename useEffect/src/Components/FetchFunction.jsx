import { useEffect, useState } from "react";

let FetchFunction = () => {
  let [allUsers, setAllUsers] = useState([]);
  let getUsers = async () => {
    let result = await fetch("https://fakestoreapi.com/users");
    let data = await result.json();
    setAllUsers(data);
    console.log(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>users list</h2>
      <ul>
        {/* {allUsers?.map((users) => {
          let { email, username ,id} = users;
          return(
          <div key={id}>
            <li>
            
            
            <strong>{email}</strong>
            
            
          </li>
          <li>
            
            
            <strong>{username}</strong>
            
            
          </li>
            </div>
          )
        })} 
        */}
        {allUsers?.map((users) => (
          let { email, username ,id} = users
          
          <div key={id}>
            <li>
            {/* {console.log(email)} */}
            
            <strong>{email}</strong>
            
            
          </li>
          <li>
            {/* {console.log(email)} */}
            
            <strong>{username}</strong>
            
            
          </li>
            </div>
          ))}
      </ul>
    </>
  );
};
export default FetchFunction;

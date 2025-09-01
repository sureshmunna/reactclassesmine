import { Fragment, useEffect, useState } from "react";

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
        {allUsers?.map((users) => {
          let { email, username, id } = users;
          return (
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

        {
          allUsers?.map((user) => (
            <li key={user.id}>
              {user.email}<br></br>{user.username}
            </li>
          ))
        }
      </ul>
      <ul>
        {
          allUsers?.length > 0 ? allUsers?.map((user) => {
            let { email, username,id } = user;
            return (
              <Fragment key={id} >
                <li style={{color:"blue", backgroundColor:"GrayText",width:"25%"}}>{email} </li>
                <li style={{color:"red",background:"cyan",width:"25%"}}>{username}</li>
              </Fragment>
            )
          }) : []
        }
      </ul>
    </>
  );
};
export default FetchFunction;

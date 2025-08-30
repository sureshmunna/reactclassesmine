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
    </>
  );
};
export default FetchFunction;

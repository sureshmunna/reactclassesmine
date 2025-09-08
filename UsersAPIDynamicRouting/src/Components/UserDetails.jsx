import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();   //have to use useLocation
  const [Users, setUsers] = useState(null);

  // useEffect(() => {
  //   fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data));
  // }, [id]);
let getUsers = async () => {
    let data = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    let result = await data.json();
    setUsers(result);
    console.log(result);
  }
  useEffect(() => {
      getUsers();
    }, [id]);


  return (
    
    
   <div className="p-4">
    {console.log(Users)}
      <h2>{Users?.name}</h2>
      <img src={Users?.avatar}  width="300" />
      <p><b>Role:</b> {Users?.role}</p>
      
    </div>
  );
};

export default UserDetails;

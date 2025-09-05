import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();   //have to use useLocation
  const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data));
  // }, [id]);
let getProducts = async () => {
    let data = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    let result = await data.json();
    setProduct(result);
    console.log(result);
  }
  useEffect(() => {
      getProducts();
    }, [id]);


  return (
    
    
   <div className="p-4">
    {console.log(product)}
      <h2>{product?.name}</h2>
      <img src={product?.avatar}  width="300" />
      <p><b>Role:</b> {product?.role}</p>
      
    </div>
  );
};

export default UserDetails;

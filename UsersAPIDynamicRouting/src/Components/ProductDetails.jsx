import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  //const { id } = useParams();   
//   const [product, setProduct] = useState(null);

//   // useEffect(() => {
//   //   fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
//   //     .then((res) => res.json())
//   //     .then((data) => setProduct(data));
//   // }, [id]);
// let getProducts = async () => {
//     let data = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
//     let result = await data.json();
//     setProduct(result);
//     console.log(result);
//   }
//   useEffect(() => {
//       getProducts();
//     }, [id]);


//   return (
    
    
//    <div className="p-4">
//     {console.log(product)}
//       <h2>{product?.title}</h2>
//       <img src={product?.images[0]}  width="300" />
//       <p><b>Price:</b> ${product?.price}</p>
//       <p><b>Description:</b> {product?.description}</p>
//       <p><b>Category:</b> {product?.category?.name}</p>
//     </div>
//   );


//using useLocation to get the product directly 
const location = useLocation();
  // const  product  = location.state || {}; we can do like this if the state passed like state={product}
  const { product } = location.state || {}; //if state has passed like this state ={{product}} in products
  console.log(product);
  
  return (
   <div className="p-4">
    {console.log(product)}
      <h2>{product?.title}</h2>
      <img src={product?.images[0]}  width="300" />
      <p><b>Price:</b> ${product?.price}</p>
      <p><b>Description:</b> {product?.description}</p>
      <p><b>Category:</b> {product?.category?.name}</p>
    </div>
  );

};

export default ProductDetails;

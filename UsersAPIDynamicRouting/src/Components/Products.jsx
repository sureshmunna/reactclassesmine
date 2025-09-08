import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  let [products, setProducts] = useState([]);

  let getProducts = async () => {
    let data = await fetch("https://api.escuelajs.co/api/v1/products");
    let result = await data.json();
    setProducts(result);
    console.log(result);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className='user-div'>
        {products?.map((product) => {
          let { id, title, images } = product;
          return (
            <div key={id} className='image-div'>
              <img
                src={images[0]}   
                alt={title}
                className='image-box'
              />
              <h3>{title}</h3>
              <Link to={`/productDetails/${id}`} state={{ product }}>View Details</Link> 
              {/* <Link to={`/productDetails/${id}`} state={ product }>View Details</Link> //we can pass like this also */} 
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;

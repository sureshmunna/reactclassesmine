import React, { useState } from "react";
import { ShimmerTitle } from "react-shimmer-effects";

const LoadingCards = () => {
  let [loading, setLoading] = useState(false);
  return(
  <>
  {
     loading==false?<ShimmerTitle line={2} gap={10} variant="primary" />:<h1>data</h1>
  }
 <button onClick={()=>{setLoading(true)}} >Effect</button>
  
  </>);
};

export default LoadingCards;

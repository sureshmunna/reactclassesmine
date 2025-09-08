import React from "react";

const Count = (props) => {
    console.log(`${props.text} Component:rendering...`);
    let{text,count}=props;
    
  return <>
  <h1>
    {text}-{count}
  </h1>
  </>;
};

export default React.memo(Count) ;

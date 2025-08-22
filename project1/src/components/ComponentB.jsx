import ComponentC from "./ComponentC"

let ComponentB =(props)=>{
  console.log("babu");
  
  console.log(props);
  
   let {data}=props;
   return (<>
     <ComponentC data={data}></ComponentC>
   </>);
};
export default ComponentB
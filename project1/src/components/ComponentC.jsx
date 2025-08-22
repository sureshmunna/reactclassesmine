let ComponentC = (props)=>{
    console.log("suresh");
    
    console.log(props);
    let {data}=props;
    
    return(<><h1>{data}</h1></>);
};
export default ComponentC
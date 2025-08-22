let Child =(props)=>{
    console.log(props);
    
    let {title}=props;
return(
    <>
    <h1>Course : {title}</h1>
    </>
);

}
export default Child
let ComponentB = (props) => {
    console.log(props);
    
    return(
        <>
        <h1>{props.userName}</h1>
        <h1>{props.age}</h1>
        </>
    )

};
export default ComponentB
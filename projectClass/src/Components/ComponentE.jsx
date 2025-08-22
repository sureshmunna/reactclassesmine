let ComponentE =(props)=>{
    
    return(
        <>
        <h1>From ComponentE</h1>
            {
            props.data.map((ele,index)=>{
              return <ul key={index}>
                    <li>{ele}</li>
                </ul>
            })
            }        
        </>
    );
}
export default ComponentE
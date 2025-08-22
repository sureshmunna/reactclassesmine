let ComponentD = (props) => {
    return (

        <>
            <h1>From ComponentD</h1>
            {props.data.map((ele, index) => (
                <li key={index}>{ele}</li>
            ))
            }
        </>
    );
}
export default ComponentD
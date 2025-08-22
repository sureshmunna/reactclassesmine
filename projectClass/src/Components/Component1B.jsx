import { Fragment } from "react";

let Component1B = (props) => {
    console.log(props);
    return(
    <>
    <h1>{props.userName}</h1>
    <h1>{props.age}</h1>
    {
        props.data.map((ele,index)=>{
            return <Fragment key={index}>
                <li>{ele}</li>
            </Fragment>
        })
    }
    </>);

}
export default Component1B
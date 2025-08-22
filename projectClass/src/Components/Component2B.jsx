import { Fragment } from "react";

let Component2B = (props) => {
    console.log(props.details);

    return (
        <>
            <h1>{props.userName}</h1>
            <h1>{props.age}</h1>
            {
                props.data.map((ele, index) => {
                    return (<Fragment key={index}><li >{ele}</li></Fragment>);

                })

            }
            {/* {
                Object.entries(props.details).map(([key, value], index) => {
                    return (<li key={index}>
                        {key}:{value}
                    </li>)

                })
            } */}
            {
                Object.entries(props.details).map(([key, value], index) => ( //by giving () its called implicit return we dont use return key word here
                    <li key={index}>
                        {key}:{value}
                    </li>

                ))
            }
        </>
    )

}
export default Component2B
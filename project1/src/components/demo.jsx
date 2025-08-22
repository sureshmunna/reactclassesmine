import Test from "./test"


let Demo=()=>{
    let coursedetails ={
        location:"jspiders",
        duration:"4 months"
    }
    return<>
    <Test title='java full stack' price={30000} data={coursedetails}></Test>
    <Test title='python full stack' data={{location:undefined ,duration:undefined}} />
    </>
}
export default Demo
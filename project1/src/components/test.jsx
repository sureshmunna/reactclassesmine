let Test =(props)=>{
   console.log(props);
   let {price,title ,data:{location,duration}}= props
// let {price,title ,data:{location="BTM layout",duration="3months"}}= props
   return<>
    {/* <h1>{price||2500}</h1>
    <h1>{title ||"any fullstack"}</h1>
    <h1>{location || "layout"}</h1>
    <h1>{duration||"3 months"}</h1> */}
    <h1>{title}</h1>
    <h1>{price}</h1>
    <h1>{location}</h1>
    <h1>{duration}</h1>
   </>
}

export default Test
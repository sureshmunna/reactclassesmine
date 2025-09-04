import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Users from "../Components/Users";
import Products from "../Components/Products";
let routes = createBrowserRouter([{
    path:'/',
    element:<App/>,
    children:[{
        index:true,
        element:<Users/>
    },
    {
        path:'/products',
        element:<Products/>
    }
]
}])
export default routes
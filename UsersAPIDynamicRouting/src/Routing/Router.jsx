import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Users from "../Components/Users";
import Products from "../Components/Products";
import ProductDetails from "../Components/ProductDetails";
import UserDetails from "../Components/UserDetails";
let routes = createBrowserRouter([{
    path:'/',
    element:<App/>,
    children:[{
        index:true,
        element:<Users/>
    },
    {
        path:'/userDetails/:id',
        element:<UserDetails/>
    },
    {
        path:'/products',
        element:<Products/>
    },
    {
        path:'/productDetails/:id',
        element:<ProductDetails/>
    },
]
}])
export default routes
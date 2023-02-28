import {createBrowserRouter} from 'react-router-dom'
import { Main } from '../layout/Main';
import About from '../Pages/About/About';
import Dashboard from '../Pages/Admin/Dashboard/Dashboard';
import Orders from '../Pages/Admin/Orders/Orders';
import Users from '../Pages/Admin/Users/Users';
import Login from '../Pages/Auth/Login';
import Cart from '../Pages/Cart/Cart';
import ConfirmOrder from '../Pages/Cart/ConfirmOrder';
import PaymentSuccess from '../Pages/Cart/PaymentSuccess';
import Shipping from '../Pages/Cart/Shipping';
import Contact from '../Pages/Contact/Contact';
import { Home } from "../Pages/Home/Home";
import MyOrders from '../Pages/MyOrders/MyOrders';
import OrderDetails from '../Pages/MyOrders/OrderDetails';
import NotFound from '../Pages/NotFound/NotFound';
import Profile from '../Pages/Profile/Profile';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/shipping',
                element:<Shipping/>
            },
            {
                path:'/confirmorder',
                element:<ConfirmOrder/>
            },
            {
                path:'/paymentsuccess',
                element:<PaymentSuccess/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/me',
                element:<Profile/>
            },
            {
                path:'/myorders',
                element:<MyOrders/>
            },
            {
                path:'/order/:id',
                element:<OrderDetails/>
            },
            {
                path:'/admin/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/admin/orders',
                element:<Orders/>
            },
            {
                path:'/admin/users',
                element:<Users/>
            },
            {
                path:'*',
                element:<NotFound/>
            },
            

        ]

    }
])
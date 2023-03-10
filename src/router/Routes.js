import {createBrowserRouter} from 'react-router-dom'
import Loader from '../components/Loader/Loader';
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
import AdminRoute from './AdminRoute';
import ProtectedRoute from './ProtectedRoute';

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
                element:<ProtectedRoute><ConfirmOrder/></ProtectedRoute>
            },
            {
                path:'/paymentsuccess',
                element:<ProtectedRoute><PaymentSuccess/></ProtectedRoute>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/me',
                element:<ProtectedRoute><Profile/></ProtectedRoute>
            },
            {
                path:'/myorders',
                element:<ProtectedRoute><MyOrders/></ProtectedRoute>
            },
            {
                path:'/order/:id',
                element:<ProtectedRoute><OrderDetails/></ProtectedRoute>
            },
            {
                path:'/admin/dashboard',
                element:<ProtectedRoute><AdminRoute><Dashboard/></AdminRoute></ProtectedRoute>
            },
            {
                path:'/admin/orders',
                element:<ProtectedRoute><AdminRoute><Orders/></AdminRoute></ProtectedRoute>
            },
            {
                path:'/admin/users',
                element:<ProtectedRoute><AdminRoute><Users/></AdminRoute></ProtectedRoute>
            },
            {
                path:'*',
                element:<NotFound/>
            },
            {
                path:'/load',
                element:<Loader/>
            },
        ]
    }
])
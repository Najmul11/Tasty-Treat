import {createBrowserRouter} from 'react-router-dom'
import { Main } from '../layout/Main';
import About from '../Pages/About/About';
import Cart from '../Pages/Cart/Cart';
import Shipping from '../Pages/Cart/Shipping';
import Contact from '../Pages/Contact/Contact';
import { Home } from "../Pages/Home/Home";

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
        ]

    }
])
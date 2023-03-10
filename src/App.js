import {RouterProvider} from 'react-router-dom'
import { router } from './router/Routes';
import './styles/app.scss'
import './styles/Nav.scss'
import './styles/Home.scss'
import './styles/Sliderr.scss'
import './styles/Menu.scss'
import './styles/Footer.scss'
import './styles/Contact.scss'
import './styles/About.scss'
import './styles/Cart.scss'
import './styles/Shipping.scss'
import './styles/ConfirmOrder.scss'
import './styles/PaymentSuccess.scss'
import './styles/Login.scss'
import './styles/Profile.scss'
import './styles/MyOrders.scss'
import './styles/Dashboard.scss'
import './styles/Popout.scss'

import { useEffect, useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { loadUser } from './redux/actions/user';
import { loadAllReviews } from './redux/actions/review';

import toast,{ Toaster } from 'react-hot-toast';
import './App.css'



function App() {
  const isToastShownRef = useRef(false);


  const dispatch = useDispatch()
  const {error, message} = useSelector(state=>state.auth)

  useEffect(()=>{
    
    if (!isToastShownRef.current) {
      dispatch(loadUser())
      dispatch(loadAllReviews())
      isToastShownRef.current = true;
    }
    if (error) {
      toast.error(error)
      isToastShownRef.current = true;
      dispatch({type:"clearError"})
    }

  },[dispatch, error, message])

  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
        <Toaster/>
    </div>
  );
}

export default App;

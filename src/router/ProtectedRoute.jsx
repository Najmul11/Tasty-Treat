import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux'
import Loader from '../components/Loader/Loader';


const ProtectedRoute = ({children}) => {
   const location = useLocation();
   const {loading, user} = useSelector(state=>state.auth)

   if (loading || loading === undefined ) {
    console.log(loading);
      return <Loader/>
   }

   if (user) return children
   
   
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default ProtectedRoute;   

import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location);


if(user){
    return children;
 }

 if(loading){
    return <progress className="progress w-56"></progress>
 }

return   <Navigate to={"/user/login"} state = {{from:location}} replace ></Navigate>



};

export default PrivateRoute;
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../components/Shared/Context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user , loading} = useContext(AuthContext);
    const location = useLocation();
 
    if(loading){
        console.log(loading);
    }

    if (!user) {

        return <Navigate to='/signin' state={{ from: location }} replace></Navigate>;
    }
    return children;


};

export default PrivateRoute;
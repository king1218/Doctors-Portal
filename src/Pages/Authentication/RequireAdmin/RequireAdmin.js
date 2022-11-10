import { signOut } from 'firebase/auth';

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../Loading/Loading';


const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin,adminLoading] =useAdmin(user);
    const location = useLocation();

    if(loading|| adminLoading){
        return <Loading></Loading>
    }

    if(!user||!admin){
         toast.error('Sorry You are not a admin!!');
         signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace></Navigate> 
    }
    return children;
};

export default RequireAdmin;
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Loading/Loading';
import ErrorPage from '../ErrorPage/ErrorPage';

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
    //login with google:
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);
    if(token){
       navigate(from, { replace: true });

      
    }
    if(error){
      return  <ErrorPage error={error}></ErrorPage>
    }
    if(loading){
      return  <Loading></Loading>;
    }
    return (
        <div>
        <div className="divider text-sm">OR</div>
        <div className="grid  rounded-box place-items-center">
            <button onClick={()=>signInWithGoogle()} className="w-full btn btn-outline hover:bg-accent">CONTINUE WITH GOOGLE</button>
        </div>
        </div>
    );
};

export default SocialLogin;
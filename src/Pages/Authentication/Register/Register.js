import { async } from '@firebase/util';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile,  } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Loading/Loading';
import ErrorPage from '../ErrorPage/ErrorPage';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, Updateerror] = useUpdateProfile(auth);
    
 

      //register:
      const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [token] = useToken(user);
      
     //name
    
      const onSubmit = async (data) =>{
     
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName:data.name});
        
      }

      if(loading){
        return <Loading></Loading>
      }
      if(user){
        // navigate('/appointment')
      }
      
    return (
        <div className='flex justify-center items-center h-screen'>
        <div className="card w-96 bg-base-100 shadow-xl">
<div className="card-body">
  <h2 className="text-center text-2xl">Register</h2>
  
  <form  onSubmit={handleSubmit(onSubmit)}>
    <div>
    <input
     type="text"
     placeholder="Name"
   
     {...register("name", {
         required: {
             value: true,
             message: 'Name is Required'
         }
     })}
     className="input  input-bordered w-full max-w-xs"
    />
    <label className="label">
    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
  </label>
    </div>
    <div>
  <input type="email" 
  placeholder="Email" 
  {...register("email", {
    required: {
        value: true,
        message: 'Email is Required'
    },
    pattern: {
        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        message: 'Provide a valid Email'
    }
})}
  className="input my-2 input-bordered w-full max-w-xs" 
 />
  
  <label className="label">
  {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">
    {errors.email.message}</span>}
  {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">
    {errors.email.message}</span>}
  </label>
  </div>
 
  <div>
  <input type="password" 
  placeholder="Password" 
  {...register("password", {
    required: {
        value: true,
        message: 'Password is Required'
    },
    minLength: {
        value: 6,
        message: 'Must be 6 characters or longer'
    }
})}
  className="input  input-bordered w-full max-w-xs" 
 />
  
  <label className="label">
  {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
 {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  </label>
  </div>
    {
      error && <ErrorPage error={error}></ErrorPage>
    }
  
  <button className='text-sm text-accent my-2'>Forget Password?</button>
  <input className='btn w-full max-w-xs text-white' type="submit" value="Register" />
  <p className='text-sm text-center my-2' href="#">Already have an account?<Link to="/login" className='text-secondary'> Please LogIn</Link></p>
  </form>
  
  <SocialLogin></SocialLogin>
</div>
</div>
            
        </div>
    );
};

export default Register;
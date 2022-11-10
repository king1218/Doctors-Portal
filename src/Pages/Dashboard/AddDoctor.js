import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorPage from '../Authentication/ErrorPage/ErrorPage';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {data:serviceNames,isLoading}=useQuery('services',()=>fetch('http://localhost:5000/serviceName').then(res=>res.json()))
    const onSubmit = async (data) =>{
     console.log(data);
 
    }
          
    if(isLoading){
      return <Loading></Loading>
    }
    return (
        <div flex justify-center items-center h-96>
            
       <div className='card w-96 bg-base-100 shadow-xl mx-auto '>
      
    <div className='card-body '>
    <h1 className='text-center text-xl my-2'>Add New Doctor</h1>
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
  <select {...register("specialty")} className="select input-bordered w-full max-w-xs">
  
  {
    serviceNames.map(serviceName=><option
    key={serviceName._id}
    value={serviceName.name}
    >
      {serviceName.name}</option>)
  }
   </select>

  
  <label className="label">
  {errors.specialty?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
 
  </label>
  </div>

  <div>
    <label className='label'>Photo</label>
    <input
     type="file"
    className='input max-w-xs'
   
     {...register("image", {
         required: {
             value: true,
             message: 'Image is Required'
         }
     })}
 
    />
    <label className="label">
    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
  </label>
    </div>
 
  
 
  <input className='btn w-full max-w-xs text-white' type="submit" value="Add Doctor" />
  
  </form>
    </div>
       </div>
        </div>
    );
};

export default AddDoctor;
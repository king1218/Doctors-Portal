import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyAppoinment = () => {
    const [appoinments,setAppoinments]= useState([]);
    const [user,loading,error] = useAuthState(auth);
    useEffect(()=>{
        if(error){
            return <h1>{error}</h1>
        }
        if(loading){
           return <Loading></Loading>
        }
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res=>res.json())
        .then(data=>setAppoinments(data));
        }
    },[user,error,loading])

    return (
        <div>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Slot</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
        {
            appoinments.map((appoinment,index)=>
        <tr>
        <th>{index+1}</th>
        <td>{appoinment.patientName}</td>
        <td>{appoinment.date}</td>
        <td>{appoinment.slot}</td>
        <td>{appoinment.treatment}</td>
        </tr>
        )
        }
      
      
      
  
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default MyAppoinment;
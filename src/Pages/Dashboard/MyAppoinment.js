import { signOut } from 'firebase/auth';

import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ErrorPage from '../Authentication/ErrorPage/ErrorPage';
import Loading from '../Loading/Loading';

const MyAppoinment = () => {
    const [appoinments,setAppointments]= useState([]);
    const [user,loading,error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if(loading){
            return <Loading></Loading>
        
        }
        if(error){
            return <ErrorPage error={error}></ErrorPage>
        }
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setAppointments(data);
                });
        }
    }, [user])

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
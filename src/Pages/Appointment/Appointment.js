import React from 'react';
import doctorsmall from '../../assets/images/doctorsmall.png';
import appointment from '../../assets/images/appointment.png'

const Appointment = () => {
    return (
        <div className='flex  lg:mt-72 mt-32 items-center justify-between' style={{
            background:`url(${appointment})`
           
        }}>
            <div className='flex-1'><img src={doctorsmall} alt="doctor" className='mt-[-180px] hidden lg:block'/></div>
            <div className='lg:flex-1 text-white md:px-24 p-5 '>
                <h5 className='text-2xl text-primary '>Appointment</h5>
                <h1 className='md:text-3xl text-2xl my-4 '>Make an appointment Today</h1>
                <p className='text-sm md:text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button  className='mt-4  btn bg-gradient-to-r from-secondary to-primary text-white border-none '>Get started</button>

            </div>
            
        </div>
    );
};

export default Appointment;
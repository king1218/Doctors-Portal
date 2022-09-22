
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import bg from '../../assets/images/bg.png'
const AppointmentBanner = ({date,setDate}) => {
   
    return (
        
        <div className="hero w-full lg:py-20 py-10 " style={{
          background:`url(${bg})`,
          backgroundSize:'cover'
         
      }}>
       
        <div className="hero  my-10 lg:my-32 ">
      <div className="hero-content flex-col lg:flex-row-reverse p-0">
        <img src='https://i.ibb.co/N2w4gcQ/chair.png' alt='banner' className="lg:flex-1 md:max-w-sm xl:max-w-lg  rounded-lg shadow-2xl" />
        <div className='lg:flex-1   md:max-w-xs p-0  xl:max-w-lg  shadow-2xl rounded-lg'>
            <DayPicker
             mode="single"
             selected={date}
             onSelect={setDate}>
            </DayPicker>

           
           
          </div>
      </div>
    </div>
      </div>
       
    );
};

export default AppointmentBanner;
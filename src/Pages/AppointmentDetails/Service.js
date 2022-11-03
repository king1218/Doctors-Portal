import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots} =service;
    console.log(slots);
    return (
           <div className="card xl:w-10/12 w-full bg-base-100 shadow-xl mx-auto text-center ">
               <div className="card-body">
               <h2 className="text-xl font-semibold text-center text-secondary">{name}</h2>
               <p>{slots.length? <span>{slots[0]}</span>:
               <span className='text-red-600'>No Slots avoilable</span>}</p>
               <p>{slots.length} {slots.length > 1 ?'spaces':'space'} avoilable</p>
               <div className="card-actions justify-center">
            
               <label
                onClick={() => setTreatment(service)}
                className="btn bg-gradient-to-r from-secondary to-primary text-white border-none"
                disabled={slots.length===0} 
                 for="Booking-modal"
                 >Book Appointment</label>
               </div>
               </div>
        </div>
    );
};

export default Service;
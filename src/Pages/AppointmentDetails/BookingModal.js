import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {  toast } from 'react-toastify';

const BookingModal = ({treatment,date,setTreatment,refetch}) => {
    const [user] = useAuthState(auth);
    const {_id,name,slots} = treatment;
    const formattedDate = format(date,'PP');
    

    const handlebooking=event=>{
        event.preventDefault();
        const slot=event.target.slot.value;
        const phone = event.target.phone.value;

        const booking ={
            treatmentId: _id,
            treatment:name,
            date: formattedDate,
            slot,
            patient:user.email,
            patientName:user.displayName,
            phone
          }
          fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
      .then(res=>res.json())
      .then(data =>{
        console.log(data);
         if(data.success){
             toast(`Appointment is set, ${formattedDate} at ${slot}`)
         }
        else
        {
           toast(`Sorry you have already have an appoinment on ${data.booking?.data} at ${data.booking?.slot}`)
         }
         refetch()
        setTreatment(null);
        
        })
    }

    
   

    return (
    <div>
     <input type="checkbox" id="Booking-modal"  className="modal-toggle" />
     <div className="modal ">
     <div className="modal-box relative ">
      <label for="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 text-white border-none bg-accent">✕</label>
      <h3 className="text-lg font-bold text-accent">Booking for: {name}</h3>
     <form onSubmit={handlebooking} className=' w-10/12 mx-auto my-5'>
     <input name='date' type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full  mt-2 " />
     <select name='slot' className="select select-bordered w-full mt-2">
        <option disabled selected className='font-semibold'>{slots[0]}</option>
        {
            slots.map(slot=><option>{slot}</option>)
        }
     </select>
     <input name='name' type="text" value={user.displayName} disabled  className="input input-bordered w-full  mt-2  " />
    
     <input name='email' type="text" value={user.email} disabled className="input input-bordered w-full  mt-2" />
     <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full  mt-2" />
    <div className='modal-action'>
    <input   type="submit" className="text-center btn text-white border-none bg-accent w-full  mt-2" />
    </div>
     
     </form>
     
     
     </div>
     </div>
     </div>
    );
};

export default BookingModal;
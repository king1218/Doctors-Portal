import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment,date}) => {
    const {name,slots} = treatment;
    

    return (
    <div>
     <input type="checkbox" id="Booking-modal" className="modal-toggle" />
     <div class="modal ">
     <div class="modal-box relative ">
      <label for="Booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2 text-white border-none bg-accent">✕</label>
      <h3 class="text-lg font-bold text-accent">{name}</h3>
     <form className=' w-full my-5'>
     <input name='date' type="text" value={format(date, 'PP')} disabled class="input input-bordered w-full  mt-2 " />
     <select name='slot' class="select select-bordered w-full mt-2">
        <option disabled selected className='font-semibold'>Select Slot</option>
        {
            slots.map(slot=><option>{slot}</option>)
        }
     </select>
     <input name='name' type="text" placeholder="Name" class="input input-bordered w-full  mt-2 " />
     <input name='phone' type="text" placeholder="Phone Number" class="input input-bordered w-full  mt-2" />
     <input name='email' type="text" placeholder="Email" class="input input-bordered w-full  mt-2" />
     <input  type="submit" class=" text-center btn text-white border-none bg-accent w-full  mt-2" />
     </form>
     
     
     </div>
     </div>
     </div>
    );
};

export default BookingModal;
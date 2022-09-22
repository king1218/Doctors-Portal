import React from 'react';
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section  style={{
            background:`url(${appointment})`
           
        }}>
            <div className='py-10'>
            <div className='text-center mmt-20 text-white '  >
                <h5 className='text-primary text-xl  font-bold'>Contact Us</h5>
                <h1 className='text-2xl'>Stay connected with us</h1>
            </div>
            <div className='mx-auto max-w-sm mt-10 px-5'>
            <form className='' action="">
            <input type="email" placeholder="Email" class="input w-full max-w-sm block "/>
            <input type="text" placeholder="Subject" class="input w-full max-w-sm block my-4"/>
            <textarea className="textarea block max-w-sm w-full my-4"  placeholder="Your message"></textarea>
            <button className='btn bg-gradient-to-r from-secondary to-primary text-white text-center w-full'>Submit</button>
            </form>
            </div>
            </div>
            
        </section>
    );
};

export default ContactUs;
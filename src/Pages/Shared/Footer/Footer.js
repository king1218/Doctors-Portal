
import React from 'react';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer className=''>
             <div className=" p-10"  
             style={{
            background:`url(${footer})`,
            backgroundSize:'cover'
           
            }}>
                <div className='footer'>
                    
               <div className='lg:mx-auto'>
                 <span className="footer-title ">Services</span> 
                 <a className="link link-hover" href=''>Branding</a>
                 <a className="link link-hover">Design</a>
                 <a className="link link-hover">Marketing</a>
                 <a className="link link-hover">Advertisement</a>
               </div> 
               <div className='lg:mx-auto'> 
                 <span className="footer-title">Company</span> 
                 <a className="link link-hover">About us</a>
                 <a className="link link-hover">Contact</a>
                 <a className="link link-hover">Jobs</a>
                 <a className="link link-hover">Press kit</a>
               </div> 
               <div className='lg:mx-auto'>
                 <span className="footer-title">Legal</span> 
                 <a className="link link-hover">Terms of use</a>
                 <a className="link link-hover">Privacy policy</a>
                 <a className="link link-hover">Cookie policy</a>
               </div>
                </div>
               <div>
                 <p className='text-center my-10 text-sm lg:text-base'>Copyright © 2022 - All right reserved</p>
               </div>
             </div>
        </footer>
    );
};

export default Footer;
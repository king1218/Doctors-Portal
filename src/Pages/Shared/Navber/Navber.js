import React from 'react';
import {signOut } from 'firebase/auth';
import { useAuthState} from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';

import auth from '../../../firebase.init';

const Navber = () => {
  const [user] = useAuthState(auth);
  
  
    return (
        <div className="navbar xl:container xl:mx-auto  bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/appointment'>Appointment</Link></li>
      <li><Link to='/reviews'>Reviews</Link></li>
      <li><Link to='/contact'>Contact Us</Link></li>
      <li>
      {
        user&& <Link to='/dashboard'>Dashboard</Link>
      }
      </li>
     
      <li>
    
      {
        user ? <button  onClick={()=>signOut(auth)}  class='btn btn-primary '>Log-out</button>:<Link to='/login'>Login</Link>
      }
      </li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl ">Doctors Portal</Link>
  </div>
  <div className="navbar-center hidden lg:flex mx-auto ">
    <ul className="menu menu-horizontal p-0">
    <li><Link to='/' className='btn btn-active text-white'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/appointment'>Appointment</Link></li>
      <li><Link to='/reviews'>Reviews</Link></li>
      <li><Link to='/contact'>Contact Us</Link></li>
      
      <li>
      {
        user && <Link to='/dashboard'>Dashboard</Link>
      }
      </li>
      
     <li>
      {
        user ? <button onClick={()=>signOut(auth)} class=' '>Log-out</button>:<Link to='/login'>Login</Link>
      }
      </li>
     
    </ul>
  </div>
  <div className='navbar-end md:hidden'>
  {
    user && <label for="my-drawer-2" className=" drawer-button lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
  }
  </div>
  
</div>
    );
};

export default Navber;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin]=useAdmin(user)
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
    {/* <!-- Page content here --> */}
    <h2 className='text-accent text-2xl text-center my-5'>Dashboard</h2>
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label for="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-30 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><Link to='/dashboard/review'>My Review</Link></li>
      {
        admin &&
        <>
        <li><Link to='/dashboard/allusers'>All Users</Link></li>
        <li><Link to='/dashboard/addDoctor'>Add Dcotor</Link></li>
        </>
      }
      
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;
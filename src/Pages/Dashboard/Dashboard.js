import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
    {/* <!-- Page content here --> */}
    <h2 className='text-accent text-2xl text-center my-5'>My Dashboard</h2>
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label for="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-30 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><Link to='/dashboard/review'>My Review</Link></li>
      
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet } from 'react-router-dom';
import useRole from '../../hooks/useRole';


const Dashboard = () => {
   const [role] = useRole();
   console.log(role)
 
  return (
    <>
      <Helmet>
        <title>Power Fitness | Dashboard</title>
      </Helmet>

      <div className="flex">
        <div className="w-56 min-h-screen bg-orange-400">
          <ul className="menu p-4 space-y-1">

            
              {role === 'admin' && <>
                <li><NavLink to='/dashboard/allNewsletter'>All Newsletter </NavLink> </li>
                <li><NavLink to='/dashboard/adTrainers'>All Trainers</NavLink> </li>
                <li><NavLink to='/dashboard/appliey'>Applied Trainer </NavLink> </li>
                <li><NavLink to='/dashboard/Balance'>Balance</NavLink> </li>
                <li><NavLink to='/dashboard/addClass'>Add Class</NavLink> </li>
                <li><NavLink to='/dashboard/addForum'>Add Forum</NavLink> </li>
              </> }
           
                
              {role === 'trainer' && <>
                <li><NavLink to='/dashboard/manageSlots'>Manage Slots</NavLink> </li>
                <li><NavLink to='/dashboard/addNewSlot'>Add New slot</NavLink> </li>
                <li><NavLink to='/dashboard/addForum'>Add Forum</NavLink> </li>
              </> }

              
              {role === 'member' && <>
                <li><NavLink to='/dashboard/activity'>Activity Log page</NavLink> </li>
                <li><NavLink to='/dashboard/profile'>Profile Page</NavLink> </li>
                <li><NavLink to='/dashboard/bookedTrainer'>Booked Trainer</NavLink> </li>
              </> }





            <div className="divider"></div>
            <li><NavLink to='/'>Home</NavLink> </li>
            <li><NavLink to='/allTrainer'> Trainers</NavLink> </li>
            <li><NavLink to='/allClasses'> Classes</NavLink> </li>


          </ul>


        </div>
        <div className="flex-1 p-8 ">
          <Outlet></Outlet>
        </div>

      </div>
    </>
  );
};

export default Dashboard;
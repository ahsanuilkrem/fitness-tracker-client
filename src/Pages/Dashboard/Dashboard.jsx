import React from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
   
    return (
        <div className="flex">
        <div className="w-56 min-h-screen bg-orange-400">
         <ul className="menu p-4 space-y-1">
           
             <li><NavLink to='/dashboard/allNewsletter '>All Newsletter </NavLink> </li>
             <li><NavLink to='/dashboard/adTrainers'>All Trainers</NavLink> </li>
             <li><NavLink to='/dashboard/Applied Trainer'>Applied Trainer </NavLink> </li>
             <li><NavLink to='/dashboard/Balance'>Balance</NavLink> </li>
             <li><NavLink to='/dashboard/users'>Add Class</NavLink> </li>
            <li><NavLink to='/dashboard/userHome'>Add Forum</NavLink> </li>
           
             
          
           
             <div className="divider"></div>
             <li><NavLink to='/'> <FaHome></FaHome>Home</NavLink> </li>
             <li><NavLink to='/allTrainers'> <FaHome></FaHome>Trainers</NavLink> </li>
             <li><NavLink to='/classes'> <FaHome></FaHome>Classes</NavLink> </li>

           
            </ul>
      
         
         </div> 
        <div className="flex-1 p-8 ">
         <Outlet></Outlet>
        </div>

        </div>

    );
};

export default Dashboard;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
    const linke = <>
         <li><NavLink to='/'>Home </NavLink></li>
        <li><NavLink to='/allTriner'>All Trainer </NavLink></li>
        <li><NavLink to='/All classes'>All Classes  </NavLink></li>
        </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {linke}
                </ul>
            </div>
            <div className="">
                <a className="btn btn-ghost text-xl">Power Fitness </a>

            </div>

        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {linke}
            </ul>
        </div>
        <div className="navbar-end">
            
           
         <button>login</button>

        </div>
    </div>
    );
};

export default Navber;
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../components/Authlayout/Providers/AuthProvider';

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const linke = <>
        <li><NavLink to='/'>Home </NavLink></li>
        <li><NavLink to='/allTrainer'>All Trainer </NavLink></li>
        <li><NavLink to='/allClasses'>All Classes  </NavLink></li>
        <li><NavLink to='/community'>Community </NavLink></li>
        

        <li>
            {
                user ? <> <NavLink to='/dashboard'>Dashboard </NavLink> </> :  <></>
            }
        </li>
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white  w-full">
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

                <div>
                    {
                        user ? (
                            <img src={user.photoURL} className=" w-10 h-10 rounded-full mr-2" />
                        ) : ("")
                    }

                </div>

                {
                    user ? (
                        <button className='btn btn-accent' onClick={handleLogOut}>LogOut</button>
                    ) : (
                        <Link to='login'>
                            <button className='btn btn-success'>login</button>
                        </Link>
                    )
                }

            </div>
        </div>
    );
};

export default Navber;
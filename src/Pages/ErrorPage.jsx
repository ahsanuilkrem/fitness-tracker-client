import React from 'react';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div>
            <p className='text-2xl font-bold'>not page</p>
            <img src='' alt="" srcset="" />
            <Link to='/'>
            <button className='text-2xl font-bold text-lime-200'>Go to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;
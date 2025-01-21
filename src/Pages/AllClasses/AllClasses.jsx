import React from 'react';
import useClasses from '../../hooks/useClasses';
import { Helmet } from 'react-helmet-async';
import Classes from '../../Shared/Classes';

const AllClasses = () => {
    const [classes] = useClasses();
    // console.log(classes)
    return (
        <>
            <Helmet>
                <title>Power Fitness | AllClasses</title>
            </Helmet>
            <div className='pt-20 mb-10'>
                <h2 className='text-3xl font-bold text-center'>All Classes</h2>

                <div>
                    <label className="input input-bordered flex items-center gap-2 w-full max-w-xs mx-auto my-6">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center sm:m-0 sm:p-0'>
                {
                    classes.map(classe => <Classes key={classe._id} classe={classe}></Classes>)
                }
            </div>


        </>
    );
};

export default AllClasses;
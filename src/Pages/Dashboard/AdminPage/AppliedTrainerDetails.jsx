import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Card } from 'flowbite-react';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AppliedTrainerDetails = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { id } = useParams()
   
    const { data: trainer = [], reset } = useQuery({
        queryKey: ["applied", id],
        queryFn: async () => {
            const { data } = await axios.get(`https://fitness-tracker-server-sigma.vercel.app/trainer/${id}`)
            return data;
        }
    })
    // console.log(trainer);
    const { name, photo, email, experience, selectredOption = [], selectedSkills, time, hour, biography, _id } = trainer || [];

    const handleAppliyRole = () => {
        axiosSecure.patch(`/users/${user?.email}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "user role trainer successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    
                }
                console.log(res.data)
            })
    }


    return (
        <div className=''>
            <h3 className='text-center text-3xl font-bold'>Trainer Details Page</h3>

            <div>
                <Card className="w-full max-w-screen-lg mx-auto bg-slate-600 text-white">



                    <div className='flex'>
                        <div className="p-8  w-1/2">
                            <img
                                alt="Bonnie image"
                                src={photo}
                                className="mb-3 rounded-full w-40 h-44 shadow-lg"
                            />
                            <h5 className="mb-1 text-xl font-medium  dark:text-white">{name}</h5>
                            <span className="text-md dark:text-gray-400">Years of Experience:  {experience}</span>
                            <h3>Time: {hour}</h3>
                            <p>Biography: {biography}</p>

                        </div>
                        {/*  */}
                        <div className='p-10'>
                            <h4 className="text-xl font-medium">Available Slots:</h4>
                            <ul>
                                {selectredOption.length > 0 ? (
                                    selectredOption.map((slot, index) => (

                                        <li key={index} className='hover:text-sky-500'>{slot.label} {time}  </li>

                                    ))
                                ) : (
                                    <li>No available slots</li>
                                )}
                            </ul>
                            <div className='mt-8'>
                                <p> <span className='text-xl font-medium'>Skill:</span>
                                    {selectedSkills?.map((skills, index) => <li key={index}>{skills}</li>)}</p>
                            </div>
                            <div>
                                <button onClick={handleAppliyRole} className='btn m-5'>application</button>
                                <button className='btn ml-5'>rejecting</button>
                            </div>
                        </div>
                    </div>
                </Card>

            </div>


        </div>
    );
};

export default AppliedTrainerDetails;
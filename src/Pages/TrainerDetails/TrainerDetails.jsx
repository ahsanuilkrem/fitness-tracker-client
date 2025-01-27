import { useQuery } from '@tanstack/react-query';
import { Card } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import useAddSlot from '../../hooks/useAddSlot';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const TrainerDetails = () => {
    const [slote] = useAddSlot();
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const { data: trainer = [], isLoading } = useQuery({
        queryKey: ["trainer", id],
        queryFn: async () => {
            const { data } = await axiosSecure(`/trainer/${id}`)
            
            return data;
           
        }
      
    })
     console.log(trainer);
    const { name, photo, experience, selectredOption = [], selectedSkills, time, hour, biography, _id } = trainer || [];


    return (
        <>
            <Helmet>
                <title>Power Fitness | Trainer Details</title>
            </Helmet>

            <div className='pt-20'>
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
                                    <p>Biography:{biography}</p>
                                  
                                </div>
                                {/*  */}
                                <div className='p-10'>
                                    <h4 className="text-xl font-medium">Available Slots:</h4>

                                    <div>
                                        {
                                            slote.map(slot => <ul key={slot._id} >
                                                <Link to={`/trainerBooked/${slot._id}`} className='flex gap-1'>
                                                <li>{slot.selectredOption.map((day, index) => <p key={index}>{day.label}</p>)}</li>
                                                <li>{slot.time}</li>
                                                </Link>
                                            </ul>)
                                        }
                                    </div>
                                    {/* <ul>
                                        {selectredOption.length > 0 ? (
                                            selectredOption.map((slot, index) => (
                                                <Link to='/trainerBooked'>
                                                    <li key={index} className='hover:text-sky-500'>{slot.label} {time}  </li>
                                                </Link>
                                            ))
                                        ) : (
                                            <li>No available slots</li>
                                        )}
                                    </ul> */}
                                    <div className='mt-8'>
                                    <p> <span  className='text-xl font-medium'>Skill:</span>
                                    {selectedSkills?.map((skills, index) => <li key={index}>{skills}</li>)}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                    </div>
                    <div className=''>
                        <Card className='w-full text-center py-7'>
                            <h2 className='uppercase text-xl font-medium  text-pink-400'>Gat stsrted now</h2>
                           <div className='flex justify-center items-center'> <img src={photo} className='w-10 h-10 rounded-full' alt="" srcset="" /></div>
                            <h1 className='text-3xl font-bold'>Discover your skills with us</h1>
                            <p className='text-[16px] font-normal'> join with experienced dedicated FitVessel Team</p>
                          <div>
                            <Link to='/beTrainer'>
                            <button className='btn btn-wide bg-black text-white '> Be A Trainer </button>
                            </Link>
                          </div>
                        </Card>
                </div>

            </div>
        </>
    );
};

export default TrainerDetails;
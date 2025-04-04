import React from 'react';
import useTrainer from '../hooks/useTrainer';
import { Card } from 'flowbite-react';

const OurTeam = () => {
    const [trainers] = useTrainer();
    
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-10'> Our Team</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center'>
                {
                    trainers.slice(0, 3).map(trainer => <div key={trainer._id} >
                        <Card className="max-w-sm" >
                              <img src={trainer.photo} className='w-96 h-72 rounded-md' alt="" />
                           
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {trainer.name}
                            </h3>
                                <p className='text-black'> Years of Experience: {trainer.experience}</p>
                            <p className='text-black'>Biography:{trainer.biography.slice(0, 50)}...more</p>
                           
                        </Card>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OurTeam;
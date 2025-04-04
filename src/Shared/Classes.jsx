import { Card } from 'flowbite-react';
import React, { useState } from 'react';

const Classes = ({ classe }) => {
    const { name, details, image } = classe || [];

    const [isHovered, setIsHovered] = useState(false);
    const [ishovered1, setIshoverd1] = useState(false);


    return (
        <div className=''>

            <Card className="max-w-sm " >
                <img src={image} className='w-96 h-72 rounded-md' alt="" />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="font-normal text-black dark:text-gray-400">
                    {details.slice(0, 65)}...
                </p>

                <h2 className='text-xl text-black font-medium '>Trainer who took this class</h2>
                <div className='flex gap-3 text-black'>
                    <div>
                    {ishovered1 && (
                            <span className='absolute -mt-6'>{name}</span>
                        )}
                        <img src={image} className='w-12 h-12 rounded-full'
                             onMouseEnter={() => setIshoverd1(true)}
                             onMouseLeave={() => setIshoverd1(false)}
                              alt=""  />
                    </div>
                    <div>
                        {isHovered && (
                            <span className='absolute -mt-6'>{name}</span>
                        )}
                        <img src={image} className='w-12 h-12 rounded-full'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            alt="" />

                    </div>
                </div>
            </Card>

        </div>
    );
};

export default Classes;
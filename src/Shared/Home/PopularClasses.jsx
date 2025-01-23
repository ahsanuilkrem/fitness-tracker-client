import { Card } from 'flowbite-react';
import React from 'react';
import useClasses from '../../hooks/useClasses';

const PopularClasses = () => {
    const [classes] = useClasses();
   
    return (
        <div>
            <h2 className='text-2xl font-bold  text-center mt-10 mb-10'>Our Popular Classes</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
                    classes.slice(0, 5).map((classe, index) => <Card key={index} className="max-w-sm ">
                        <img src={classe.image} className='w-96 h-72 rounded-md' alt="" />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {classe.name}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {classe.details.slice(0, 65)}...
                        </p>
        
                    </Card>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;
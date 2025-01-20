import React from 'react';
import useTrainer from '../../hooks/useTrainer';
import Trainer from './Trainer';
import { Helmet } from 'react-helmet-async';

const AllTrainer = () => {
    const [trainers] = useTrainer();
   
    return (
        <>
            <Helmet>
                <title>Power Fitness | AllTrainer</title>
            </Helmet>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center'>
                {
                    trainers.map(trainer => <Trainer key={trainer._id} trainer={trainer}></Trainer>)
                }
            </div>
        </>
    );
};

export default AllTrainer;
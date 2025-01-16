import React from 'react';
import useTrainer from '../../hooks/useTrainer';
import Trainer from './Trainer';
import { SiTrainerroad } from 'react-icons/si';

const AllTrainer = () => {
    const [trainers] = useTrainer();
    console.log(trainers)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center'>
            {
                trainers.map(trainer => <Trainer key={SiTrainerroad._id} trainer={trainer}></Trainer> )
            }
        </div>
    );
};

export default AllTrainer;
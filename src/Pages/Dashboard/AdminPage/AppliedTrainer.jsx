import React from 'react';
import useTrainer from '../../../hooks/useTrainer';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const AppliedTrainer = () => {
    const [trainers, refetch] = useTrainer();
    return (
        <div className="overflow-x-auto">
            <Table>
                <Table.Head>
                    <Table.HeadCell>#</Table.HeadCell>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Photo</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Details</Table.HeadCell>

                </Table.Head>
                {
                    trainers.map((trainer, index) =>   <Table.Body key={trainer._id} className="divide-y">
                        <Table.Row  className="bg-white dark:border-gray-700 dark:bg-gray-800">
                               <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {index + 1}
                               </Table.Cell>
                               <Table.Cell>{trainer.name}</Table.Cell>
                               <Table.Cell>
                                   <img src={trainer.photo} className='w-10 h-10 rounded-full' alt="" srcset="" />
                               </Table.Cell>
                               <Table.Cell>{trainer.email}</Table.Cell>
                               
                               <Table.Cell>
                                   <Link to={`/dashboard/trainer/${trainer._id}`}>
                                   <button className="btn text-cyan-600">Details</button>
                                   </Link>
                               </Table.Cell>
                           </Table.Row>
                       
   
                   </Table.Body>)
                }
            </Table>
        </div>
    );
};

export default AppliedTrainer;
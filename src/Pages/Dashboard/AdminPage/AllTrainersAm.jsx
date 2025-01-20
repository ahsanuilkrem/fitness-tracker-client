import { Table } from 'flowbite-react';
import React from 'react';
import useTrainer from '../../../hooks/useTrainer';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllTrainersAm = () => {
    const [trainers, refetch] = useTrainer();
    const axiosSecure = useAxiosSecure();

    const handleDelete = trainer => {
        Swal.fire({
           title: "Are you sure?",
           text: "You won't be able to revert this!",
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Yes, delete it!"
       }).then((result) => {
           if (result.isConfirmed) {

               axiosSecure.delete(`/trainer/${trainer._id}`)
                   .then(res => {
                       if (res.data.deletedCount > 0) {
                           refetch();
                             Swal.fire({
                               title: "Deleted!",
                               text: "Your file has been deleted.",
                               icon: "success"
                             });
                       }
                   })
           }
       });
   }


    return (
        <div>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell></Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Photo</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Experience</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            trainers.map((trainer, index) =>  <Table.Row key={trainer._id} trainer={trainer} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                               {index + 1}
                            </Table.Cell>
                            <Table.Cell>{trainer.name}</Table.Cell>
                            <Table.Cell>
                                <img src={trainer.photo} className='w-10 h-10 rounded-full' alt="" srcset="" />
                            </Table.Cell>
                            <Table.Cell>{trainer.email}</Table.Cell>
                            <Table.Cell>{trainer.experience}</Table.Cell>
                            <Table.Cell>
                                <button onClick={() => handleDelete(trainer)} className="btn text-cyan-600 hover:text-red-500">
                                    <MdDelete className='text-2xl font-bold'></MdDelete>
                                </button>
                            </Table.Cell>
                        </Table.Row>)
                        }
                      
                    </Table.Body>
                </Table>
            </div>

        </div>
    );
};

export default AllTrainersAm;
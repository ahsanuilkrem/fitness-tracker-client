import { Table, TableRow } from 'flowbite-react';
import React from 'react';
import useAddSlot from '../../../hooks/useAddSlot';
import { MdDelete } from 'react-icons/md';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageSlots = () => {
    const [slote, refetch] = useAddSlot();
    const axiosSecure = useAxiosSecure();
    // console.log(slote)

       const handleDelete = slot => {
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
    
                   axiosSecure.delete(`/addSlot/${slot._id}`)
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
            <Table>
                <Table.Head>
                    <Table.HeadCell>#</Table.HeadCell>
                    <Table.HeadCell>Slot Name</Table.HeadCell>
                    <Table.HeadCell>Class Name</Table.HeadCell>
                    <Table.HeadCell>SlotHour</Table.HeadCell>
                    <Table.HeadCell>Action</Table.HeadCell>

                </Table.Head>
                <Table.Body className="divide-y">

                    {
                        slote.map((slot, index) => <Table.Row  key={slot._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                 {index + 1} 
                            </Table.Cell>
                            <Table.Cell>{slot.SlotName}</Table.Cell>
                            <Table.Cell>{slot.Class}</Table.Cell>
                            <Table.Cell>Time :{slot.SlotHour}(Hour) </Table.Cell>
                            <Table.Cell>
                                <button onClick={() => handleDelete(slot)} className='btn'><MdDelete className='text-2xl font-bold text-red-500'></MdDelete> </button>
                             </Table.Cell>
    
                        </Table.Row>)
                    }


                </Table.Body>
            </Table>
        </div>
    );
};

export default ManageSlots;
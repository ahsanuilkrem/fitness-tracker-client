import { Table } from 'flowbite-react';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const ActivitLog = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mb-3'>My Activity log</h2>
               <div>
                           <Table>
                               <Table.Head>
                                   <Table.HeadCell>Name</Table.HeadCell>
                                   <Table.HeadCell>Email</Table.HeadCell>
                                   <Table.HeadCell>Status</Table.HeadCell>
                                  
                               </Table.Head>
                               <Table.Body className="divide-y">
                               <Table.Row>
                                           <Table.Cell>{user?.displayName}</Table.Cell>
                                           <Table.Cell>{user?.email}</Table.Cell>
                                           <Table.Cell>Pendeng</Table.Cell>
                                           
                                </Table.Row>
                                   
           
                               </Table.Body>
                           </Table>
                       </div>
        </div>
    );
};

export default ActivitLog;
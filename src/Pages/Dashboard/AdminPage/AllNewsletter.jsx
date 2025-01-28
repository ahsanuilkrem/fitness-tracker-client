
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';

const AllNewsletter = () => {
    const { data: newsletter = [] } = useQuery({
        queryKey: ["newsletter"],
        queryFn: async () => {
            const { data } = await axios.get('https://fitness-tracker-server-sigma.vercel.app/newsletter')
            return data;
        }
    })
    console.log(newsletter);
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-5'>  All Newsletter</h2>
            <div>
                <Table>
                    <Table.Head>
                        <Table.HeadCell>#</Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                       
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            newsletter.map((news, index) => <Table.Row key={news._id}  className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {index + 1}
                                </Table.Cell>
                                <Table.Cell>{news.name}</Table.Cell>
                                <Table.Cell>{news.email}</Table.Cell>
                                
                            </Table.Row>)
                        }

                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default AllNewsletter;
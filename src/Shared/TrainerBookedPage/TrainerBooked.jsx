
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TrainerBooked = () => {
    // const { id } = useParams()
    // const { data: trainer = [] } = useQuery({
    //     queryKey: ["trainer", id],
    //     queryFn: async () => {
    //         const { data } = await axios.get(`http://localhost:5000/trainer/${id}`)
    //         return data;
    //     }
    // })
    // console.log(trainer);
    // const { name,   time, hour, biography, _id } = trainer || [];

    return (
        <div className='pt-16'>
            <h2> trainer booke page</h2>
            <h2>Trainer Name  </h2>

            <div>
                <div className="max-w-3xl mx-auto my-10">

                    <table className="table ">
                        {/* head */}
                        <thead >
                            <tr>
                            
                                <th className='border-2 border-lime-700'>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                              
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                               
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                              
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TrainerBooked;
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card } from "flowbite-react";


const TrainerBooked = () => {

    const { id } = useParams();
    console.log(id)
    const { data: slote = [] } = useQuery({
        queryKey: ["slote", id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/addSlot/${id}`)
            return data;
        }
    })
    console.log(slote)
    const { name, SlotName, Class, _id } = slote;
    return (
        <div className='pt-24'>


            
                <div className="max-w-3xl mx-auto my-10">

                    <div className="max-w-sm my-5 ">
                        <Card>

                            <h2>Trainer Name : {name}</h2>
                            <p>Slot Name : {SlotName}</p>
                            <p>Classes : {Class}</p>
                        </Card>

                    </div>

                    <table className="table ">
                        {/* head */}
                        <thead >
                            <tr>

                                <th className='border-2 border-stone-300'>Basic Membership</th>
                                <th className='border-2 border-stone-300'>Standard Membership</th>
                                <th className='border-2 border-stone-300'>Premium Membership</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>

                                <td className='border-2 border-stone-300'>Access to gym facilities during regular operating hours.</td>
                                <td className='border-2 border-stone-300'>All benefits of the basic membership.</td>
                                <td className='border-2 border-stone-300'>All benefits of the standard membership.</td>
                            </tr>
                            {/* row 2 */}
                            <tr>

                                <td className='border-2 border-stone-300'>Use of cardio and strength training equipment.</td>
                                <td className='border-2 border-stone-300'>Access to group fitness classes such as yoga, spinning, and Zumba.</td>
                                <td className='border-2 border-stone-300'>Access to personal training sessions with certified trainers.</td>
                            </tr>
                            {/* row 3 */}
                            <tr>

                                <td className='border-2 border-stone-300'>Access to locker rooms and showers.</td>
                                <td className='border-2 border-stone-300'>Use of additional amenities like a sauna or steam room.</td>
                                <td className='border-2 border-stone-300'>Discounts on additional services such as massage therapy or nutrition counseling.</td>
                            </tr>
                            {/* row  */}
                            <tr>

                                <td className='border-2 border-stone-300'>Price: $10</td>
                                <td className='border-2 border-stone-300'>Price: $50</td>
                                <td className='border-2 border-stone-300'>Price: $70</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <Link to={`/payment/${_id}`}>
                        <button className="btn">Join Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        
    );
};

export default TrainerBooked;






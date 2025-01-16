import { Card } from 'flowbite-react';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Trainer = ({ trainer }) => {
    const { trainer_name, profile_image, years_of_experience, available_slots, _id } = trainer
    return (
        <div>
            <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={profile_image}
            >
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {trainer_name}
                </h3>
                <h5 className='text-[18px] font-bold'> Years of Experience: {years_of_experience} </h5>
                <ul>
                    <h5 className='text-[18px] font-bold'>Available Slots: </h5>
                    {
                        available_slots.map(slots  => <li>{slots}</li>)
                    }
                </ul>
                <h4 className='flex items-center gap-2 text-[18px] font-bold'>Socials links : <FaFacebook className='text-sky-500 text-xl font-bold'></FaFacebook> </h4>
                    <Link to={`/trainer/${_id}`}>
                    <button className='btn btn-success'>Know more</button>
                    </Link>
            </Card>

        </div>
    );
};

export default Trainer;

import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Trainer = ({ trainer }) => {
    const { name, photo, experience, selectredOption, time, _id } = trainer || [];
    console.log(trainer)
    return (
        <div>
               <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={photo}
            >
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h3>
                <h5 className='text-[18px] font-bold'> Years of Experience: {experience} </h5>
                <ul>
                    <h5 className='text-[18px] font-bold'>Available Slots: </h5>
                    {
                        selectredOption.map(option  => <li>{option.label} {time} </li>)
                    } 
                </ul>
                     <Link to={`/trainer/${_id}`}>
                    <button className='btn btn-success'>Know more</button>
                    </Link> 
            </Card>
        </div>
    );
};

export default Trainer;

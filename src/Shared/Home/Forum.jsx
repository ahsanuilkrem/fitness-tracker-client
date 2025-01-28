import React from 'react';
import useForum from '../../hooks/useForum';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Forum = () => {
    const [community] = useForum();
    // console.log(community);
    return (
        <div>
            <h3 className='text-2xl font-bold text-center'> Discover Our Latest News </h3>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-5'>
            {
                community.slice(2, 8).map(communit => <Card key={communit._id} className="max-w-sm">
                    <div className=''>
                        <div className=''>
                            <img src={communit.image} className='w-full rounded-xl h-72'  alt="" srcset="" />
                        </div>
                        <div className=''>
                        <h2 className='text-xl font-bold my-2'>{communit.title}</h2>
                        <p className='text-[18px] font-normal my-2'>{communit.details.slice(0, 100)}...<Link to='/community'>more</Link> </p>
                        </div>
                    </div>
                </Card>)
            }
        </div>
        </div>
    );
};

export default Forum;
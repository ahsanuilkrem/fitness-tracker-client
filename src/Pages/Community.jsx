import React from 'react';
import useForum from '../hooks/useForum';

const Community = () => {
    const [community] = useForum();
    console.log(community);
    return (
        <div>
            
        <div className='pt-14 max-w-6xl mx-auto'>
            {
                community.map(communit => <div key={communit._id}>
                    <div className='md:flex md:ml-6'>
                        <div className='md:w-1/2'>
                            <img src={communit.image} className='w-full rounded-xl p-2 h-72 md:h-96' alt="" srcset="" />
                        </div>
                        <div className='md:w-1/2 ml-3'>
                        <h2 className='text-2xl font-bold my-5'>{communit.title}</h2>
                        <p className='text-[18px] font-normal my-2'>{communit.details} </p>
                        </div>
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default Community;
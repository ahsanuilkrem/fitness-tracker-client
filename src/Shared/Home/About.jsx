import React from 'react';

const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-gray-800 text-white p-10'>
            <div >
                <div className='flex gap-5 w-1/2'>
                    <img src="https://i.ibb.co.com/44M2C0S/fitness-3.jpg" className='h-80' />
                    <img src="https://i.ibb.co.com/44M2C0S/fitness-3.jpg" className='mt-8 h-80' />
                </div>
                <div className='flex justify-center items-center -mt-4'>
                    <img src='https://i.ibb.co.com/44M2C0S/fitness-3.jpg' className='w-1/2' />
                </div>
            </div>

            <div className='space-y-4 md:ml-14 md:mt-16'>
                <h2 className=' border-b-2 font-bold border-y-teal-700 w-20'>About Us</h2>
                <h2 className='text-2xl font-bold'>From the moment you walk through the door you know Gymbase is a unique place
                </h2>
                <p className='text-[18px] font-normal'>When we created Gym Base, we knew we wanted to be more than just a simple gym.
                    Having worked in traditional gyms in the past, we knew we needed to create a
                    concept that would provide our members with the most effective tools for success.
                    This meant we needed to offer a wide range of classes both for children and adults.
                    </p>
                <p className='text-[18px] font-normal'>
                    This also meant we needed to provide a learning environment run by experienced and
                    successful coaches. However, our most important goal was to create a welcoming
                    atmosphere and community in which everyone feels a sense of belonging.
                </p>
                <div className='flex  justify-between items-center'>
                    <div>
                        <p className='text-xs font-normal'>ENVIRONMENT </p>
                        <h2 className='text-xl font-bold'>Clean and Airy</h2>
                    </div>

                    <div>
                        <p className='text-xs font-normal'>CLASSES</p>
                        <h2 className='text-xl font-bold'>Every Level</h2>
                    </div>

                    <div>
                        <p className='text-xs font-normal'>PRICES</p>
                        <h2 className='text-xl font-bold'>Affordable</h2>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;
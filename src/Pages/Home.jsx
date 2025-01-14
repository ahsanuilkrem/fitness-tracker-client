import React from 'react';
import Banner from '../Shared/Home/Banner';
import Featured from '../Shared/Home/Featured';
import About from '../Shared/Home/About';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div className='my-15'>
            <Featured></Featured>
            <About></About>
            </div>
        </div>
    );
};

export default Home;

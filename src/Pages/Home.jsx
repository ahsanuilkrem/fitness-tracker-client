import React from 'react';
import Banner from '../Shared/Home/Banner';
import Featured from '../Shared/Home/Featured';
import About from '../Shared/Home/About';
import PopularClasses from '../Shared/Home/PopularClasses';
import OurTeam from '../Shared/OurTeam';
import Newsletter from '../Shared/Home/Newsletter';
import Reviews from '../Shared/Home/Reviews';
import Forum from '../Shared/Home/Forum';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div className='my-15'>
            <Featured></Featured>
            <About></About>
            <PopularClasses></PopularClasses>
            <Reviews></Reviews>
            <Forum></Forum>
            <Newsletter></Newsletter>
            <OurTeam></OurTeam>
            </div>
        </div>
    );
};

export default Home;

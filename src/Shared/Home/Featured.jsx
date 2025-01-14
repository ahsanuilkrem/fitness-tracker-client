import React from 'react';
import { FaAppleAlt, FaCalendarAlt, FaDumbbell, FaGift, FaTrophy, } from 'react-icons/fa';
import { IoFitnessSharp } from 'react-icons/io5';


const Featured = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 items-center' >
            <div>
                <FaDumbbell size={30}></FaDumbbell>
                <h2 className='text-2xl font-bold italic my-1'>Featured Workouts</h2>
                <p className='text-[16px] font-normal'> Discover our expertly designed workout programs to help you reach your
                    fitness goals faster. From strength training to cardio, we have routines for every level!

                </p>
            </div>
            <div>
                <FaTrophy className='text-slate-500' size={40}></FaTrophy>
                <h2 className='text-2xl font-bold italic my-1' >Success Stories</h2>
                <p className='text-[16px] font-normal'> Get inspired by real success stories from members who’ve transformed
                    their bodies and minds using our programs. See how you can achieve your fitness goals too!

                </p>
            </div>
            <div>
                <FaCalendarAlt className='text-lime-400' size={40}></FaCalendarAlt>
                <h2 className='text-2xl font-bold italic my-1'> Weekly Challenges
                </h2>
                <p className='text-[16px] font-normal'>Join our weekly fitness challenges to push yourself further. Track your progress,
                    stay motivated, and share your journey with our supportive community!</p>
            </div>
            <div>
            <FaAppleAlt className='text-green-500' size={40}></FaAppleAlt>

                <h2 className='text-2xl font-bold italic my-1'> Nutrition Tips</h2>
                <p className='text-[16px] font-normal'>Fuel your body with the right nutrition! Explore our expert-approved meal plans,
                    healthy recipes, and tips to complement your fitness journey.</p>
            </div>
            <div>
            <IoFitnessSharp className='text-red-500' size={40}></IoFitnessSharp>
                <h2 className='text-2xl font-bold italic my-1'>Trainer of the Month</h2>
                <p className='text-[16px] font-normal'>Meet our Trainer of the Month and learn their tips and tricks for success. Get
                    exclusive access to their workout plans and advice for reaching your peak performance.</p>
            </div>
            <div>
                <FaGift className='text-orange-400' size={40}></FaGift>
                <h2 className='text-2xl font-bold italic my-1'>Exclusive Offers</h2>
                <p className='text-[16px] font-normal'>Take advantage of limited-time offers on memberships, classes, and fitness gear. Don’t miss out on discounts that help you stay fit while saving money!

                </p>
            </div>

        </div>
    );
};

export default Featured;
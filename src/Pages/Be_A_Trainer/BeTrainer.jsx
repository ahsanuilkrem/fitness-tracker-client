import Select from 'react-select';
import useAuth from '../../hooks/useAuth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import useTrainer from '../../hooks/useTrainer';


const options = [
    { value: 'option1', label: 'Satday' },
    { value: 'option2', label: 'Sunday' },
    { value: 'option3', label: 'Monday' },
    { value: 'option4', label: 'Tueday' },
    { value: 'option5', label: 'Wedday' },
    { value: 'option6', label: 'Thuday' },
    { value: 'option7', label: 'Friday' },
]



const BeTrainer = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [selectredOption, setSelectedOption] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [, refetch] = useTrainer();


    const handleSelect = (selected) => {
        setSelectedOption(selected)
        // console.log(selected);
    }

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;

        setSelectedSkills((prev) => {
            if (checked) {
                return [...prev, value]; 
            } else {
                return prev.filter(skill => skill !== value);  
            }
        });
    };


    const handleSubmite = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const age = form.age.value;
        const experience = form.experience.value;
        const time = form.time.value;
        const hour = form.hour.value;
        const biography = form.biography.value;

        console.log(name, email, photo, age, selectedSkills, experience, selectredOption, time, hour, biography)

        const addform = {name, email, photo, age, selectedSkills, experience, selectredOption, time, hour, biography};

        axios.post('http://localhost:5000/trainer', addform)
        .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "added to you Trainer",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/alltrainer')
            }
                    
       });

      

       
    }

    return (
        <div className=" md:max-w-4xl  pt-32 mx-auto">
            <form onSubmit={handleSubmite} className='bg-slate-500'>
                <div className='md:flex  w-full gap-4 p-3'>
                    <div className='md:w-1/2'>
                        <label >Name</label>
                        <input type="text" className='w-full' name='name' placeholder="name" />

                    </div>
                    <div className='md:w-1/2'>
                        <label >Email</label>
                        <input type="email" className='w-full' defaultValue={user?.email}
                         name='email' placeholder="email" disabled />

                    </div>
                </div>
                <div className='md:flex  w-full gap-4 p-3'>
                    <div className='  md:w-1/2'>
                        <label >Photo URL</label>
                        <input type="url" className='w-full' name='photo' placeholder="photo Url" />
                    </div>
                    <div className='md:w-1/2'>
                        <label >Age</label>
                        <input type="number" className='w-full' name='age' placeholder="age" />
                    </div>
                </div>
                <div className=' w-full p-3'>
                    <label className='text-white text-xl font-bold'>Skills:</label>
                    <div className='flex flex-wrap gap-4'>

                        <div className="flex items-center gap-1">
                            <label for="valid1" className=''>Hit Blast</label>
                            <input type="checkbox" id="valid1" name='skills1'
                            value="Hit Blast" onChange={handleCheckboxChange} />
                        </div>
                        <div className="flex items-center gap-1">
                            <label for="valid2" className=''>Yoga Flow </label>
                            <input type="checkbox" id='valid2' name='skills2'
                             value="Yoga Flow" onChange={handleCheckboxChange} />

                        </div>
                        <div className="flex items-center gap-1">
                            <label fro='valid3'>Pilates Core</label>
                            <input type="checkbox" id='valid3' name='skills3'
                            onChange={handleCheckboxChange} value="Pilates Core" />
                        </div>
                        <div className="flex items-center gap-1">
                            <label fro='valid4' >Cardio Kickboxing</label>
                            <input type="checkbox" id='valid4' name='skills4'
                             onChange={handleCheckboxChange} value="Cardio Kickboxing" />
                        </div>

                        <div className="flex items-center gap-1">
                            <label fro='valid5' >Zumba Dance</label>
                            <input type="checkbox" id='valid5' name='skills' 
                             onChange={handleCheckboxChange} value="Zumba Dance" />
                        </div>
                        <div className="flex items-center gap-1">
                            <label fro='valid6'>Spin Cycle</label>
                            <input type="checkbox" id='valid6' name='skills'
                            onChange={handleCheckboxChange} value='Spin Cycle' />
                        </div>
                        <div className="flex items-center gap-1">
                            <label fro='valid7'>Barre Fitness</label>
                            <input type="checkbox" id='valid7' name='skills'
                            onChange={handleCheckboxChange} value='Barre Fitness' />
                        </div>
                        <div className="flex items-center gap-1">
                            <label fro='valid8'>Meditation and Mindfulness</label>
                            <input type="checkbox" id='valid8' name='skills'
                            onChange={handleCheckboxChange} value='Meditation and Mindfulness' />
                        </div>
                        <div className="flex items-center gap-1">
                            <label fro='valid9'>CrossFit Fundamentais</label>
                            <input type="checkbox" id='valid9' name='skills'
                            onChange={handleCheckboxChange} value='CrossFit Fundamentais' />
                        </div>

                    </div>

                </div>
                <div className='md:flex  w-full gap-4 p-3'>
                    <div className='  md:w-1/2'>
                        <label >Years of Experience</label>
                        <input type="text" className='w-full' name='experience' placeholder="Years of Experience" />
                    </div>
                    <div className='md:w-1/2'>
                        <div className=" block">
                            <label >Available days</label>
                        </div>
                        <Select isMulti={true} options={options} onChange={handleSelect} value={selectredOption} className='w-full'  >

                        </Select>
                    </div>
                </div>
                <div className='md:flex  w-full gap-4 p-3'>
                    <div className='  md:w-1/2'>
                        <label >Available time</label>
                        <select className='w-full' name='time' placeholder="Available time" >
                            <option value="Morning 6:00 AM - 12:00 PM">Morning 6:00 AM - 12:00 PM</option>
                            <option value="Noon 12:00 PM - 3:00 PM">Noon 12:00 PM - 3:00 PM</option>
                            <option value="Afternoon 3:00 PM - 6:00 PM ">Afternoon 3:00 PM - 6:00 PM</option>
                            <option value="Evening 6:00 PM - 9:00 PM">Evening 6:00 PM - 9:00 PM</option>
                            <option value="Night 9:00 PM - 12:00 AM">Night 9:00 PM - 12:00 AM</option>
                        </select>
                    </div>
                    <div className='md:w-1/2'>
                        <label >Class Duration (Hour)</label>
                        <input type="number" max='8' className='w-full' name='hour' placeholder="Class Duration" />
                    </div>
                </div>
                <div className=' w-full  p-3'>
                    <div className="">
                        <label >Biography</label>
                    </div>
                    <textarea className='w-full' name='biography' placeholder="Biography" rows={3} />

                </div>
                <div className='w-full p-3'>
                    <input type="submit" className='w-full btn'></input>
                </div>
            </form>
        </div>
    );
};

export default BeTrainer

    






import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Select from 'react-select';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const options = [
    { value: 'option1', label: 'Satday' },
    { value: 'option2', label: 'Sunday' },
    { value: 'option3', label: 'Monday' },
    { value: 'option4', label: 'Tueday' },
    { value: 'option5', label: 'Wedday' },
    { value: 'option6', label: 'Thuday' },
    { value: 'option7', label: 'Friday' },
]

const AddNewSlot = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();
    // const axiosPublic = useAxiosPublic();
    const [selectredOption, setSelectedOption] = useState([]);


    const handleSelect = (selected) => {
        setSelectedOption(selected)
        // console.log(selected);
    }

    const handleAddSlot = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const age = form.age.value;
        const time = form.time.value;
        const SlotName = form.SlotName.value;
        const SlotHour = form.SlotHour.value;
        const Class = form.Class.value;

        console.log(name, email, age, selectredOption, time, SlotName, SlotHour, Class);
        const Slotitem = {name, email, age, selectredOption, time, SlotName, SlotHour, Class };

        axiosSecure.post('/addSlot', Slotitem)
        .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
              
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "added to you Slot",
                    showConfirmButton: false,
                    timer: 1500
                  });
                 
            }
                    
       });


    }
   
    return (
        <div>
            <form onSubmit={handleAddSlot}>
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

                    <div className='md:w-1/2'>
                        <label >Age</label>
                        <input type="number" className='w-full' name='age' placeholder="age" />
                    </div>
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
                </div>
                <div className='md:flex  w-full gap-4 p-3'>
                    <div className='  md:w-1/2'>
                        <label >Select Slot Name</label>
                        <input type="text" className='w-full' name='SlotName' placeholder='Slot Name'  />   
                           
                    </div>
                    <div className='md:w-1/2'>
                        <label >Slot Time (Hour)</label>
                        <input type="text" className='w-full' name='SlotHour' placeholder="slot time" />
                    </div>
                </div>
                <div className='md:flex  w-full gap-4 p-3'>
                    <div className='md:w-1/2'>
                        <div className=" block">
                            <label >Available days</label>
                        </div>
                        <Select isMulti={true} options={options} onChange={handleSelect} value={selectredOption} className='w-full'  >

                        </Select>
                    </div>
                    <div className='  md:w-1/2'>
                        <label >Class Name</label>
                        <select className='w-full' name='Class' placeholder="class" >
                            <option value="Hit Blast">Hit Blast</option>
                            <option value="Yoga Flow">Yoga Flow</option>
                            <option value="Pilates Core">Pilates Core</option>
                            <option value="Cardio Kickboxing">Cardio Kickboxing</option>
                            <option value="Zumba Dance">Zumba Dance</option>
                            <option value="Spin Cycle">Spin Cycle</option>
                            <option value="Barre Fitness">Barre Fitness</option>
                            <option value="CrossFit Fundamentais">CrossFit Fundamentais</option>
                        </select>
                    </div>
                </div>
                <div className='w-full p-3'>
                    <input type="submit" className='w-full btn'></input>
                </div>
            </form >
        </div >
    );
};

export default AddNewSlot;
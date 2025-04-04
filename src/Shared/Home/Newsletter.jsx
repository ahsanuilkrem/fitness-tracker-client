import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Newsletter = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = (data) => {
    console.log(data.name, data.email)

    const userInfo = {
      name: data.name,
      email: data.email,

    }



    axiosPublic.post('/newsletter', userInfo)
      .then(res => {
        if (res.data.insertedId) {
          console.log('user Subscribe Now add to databise', res.data)
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Subscribe successfully",
            showConfirmButton: false,
            timer: 1500
          });
    
        }
      })

  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-2xl mx-auto my-10 bg-slate-300 p-3 rounded-md'>


        <div className='form-control w-full '>
          <label className='label text-black text-xl font-medium'> Name</label>
          <input  {...register("name", { required: true })}
            type='text'
            placeholder='Name'
            className='input input-bordered w-full '
          />
        </div>

        <div className='form-control w-full '>
          <label className='label text-xl text-black font-medium'>Email</label>
          <input  {...register("email", { required: true })}
            type='email'
            placeholder='Email'
            className='input input-bordered w-full '
          />
        </div>
        <div className='flex justify-center items-center'>
          <button className='btn btn-wide text-white btn-neutral mt-3' type="submit"> Subscribe Now </button>
        </div>

      </form>
    </div>
  );
};

export default Newsletter;
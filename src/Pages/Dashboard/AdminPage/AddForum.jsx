import React from 'react';
import { useForm } from 'react-hook-form';

const AddForum = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
         console.log(data)
    }
    return (
        <div>
          
           <form onSubmit={handleSubmit(onSubmit)} className='max-w-3xl'>
                <h2 className='text-2xl font-bold text-center my-3'>Add Forum</h2>
              <div className='md:flex gap-4'>

                <div className='form-control w-full '>
                <label className='label'> Title </label>
                <input  {...register("title", {required: true})}
                type='text'
                placeholder='Title'
                className='input input-bordered w-full '
                />
                </div>

                <div className='form-control w-full '>
                <label className='label'> Image</label>
                <input  {...register("image", {required: true})}
                type='file'
                className='file-input file-input-bordered w-full '
                />
                </div>
                </div>

                <div className='form-control w-full '>
                <label className='label'>Class Details</label>
                <textarea  {...register("details", {required: true})}
                type='text'
                placeholder='Class Details'
                className='textarea textarea-bordered w-full '
                ></textarea>
               

              </div>
              <input className='btn btn-wide btn-neutral mt-3' type="submit" />
            </form>
        </div>
    );
};

export default AddForum;
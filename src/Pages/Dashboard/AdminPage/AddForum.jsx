import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddForum = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
         console.log(data)
               const imageFile = {image: data.image[0]}
                 const res = await axiosPublic.post(image_hosting_api,imageFile, {
                     headers: {
                         'content-type': 'multipart/form-data' 
                     }
                 });
                 if(res.data.success){
                     const formItem = {
                         title: data.title,
                         details: data.details,
                         image: res.data.data.display_url,
                     }
         
                      axiosSecure.post('/forum', formItem)
                      .then(res => {
                         console.log(res.data);
                         if(res.data.insertedId){
                             reset();
                             Swal.fire({
                                 position: "top-end",
                                 icon: "success",
                                 title: "Your added to the Forum posts ",
                                 showConfirmButton: false,
                                 timer: 1500
                               });
                         }
                      })
                      console.log(res.data);
                 }
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
                <label className='label'> Details</label>
                <textarea  {...register("details", {required: true})}
                type='text'
                placeholder=' Details'
                className='textarea textarea-bordered w-full '
                ></textarea>
               

              </div>
              <input className='btn btn-wide btn-neutral mt-3' type="submit" />
            </form>
        </div>
    );
};

export default AddForum;
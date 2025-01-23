import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import lottiRegister from '../../assets/Lotti_regster.json'
import { AuthContext } from './Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { currentuser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // console.log(data);
        currentuser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                console.log('user profile info updated')

                const userInfo ={
                     name: data.name,
                    email: data.email,

                 }
            
                    
                 axiosPublic.post('/users', userInfo)
                    .then(res => {
                         if(res.data.insertedId){
                         console.log('user add to databise')
                         reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "user created successfully",
                            showConfirmButton: false,
                            timer: 1500
                          });
                         navigate('/');
                    }
                })          
            })
            .catch(error => console.log(error))
        })
    }


 
    return (
        <>
        <Helmet>
            <title>Bistro Boss | Signup</title>
        </Helmet>
        <div className="hero bg-base-200 min-h-screen py-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                 <Lottie animationData={lottiRegister}nimat></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-2xl font-bold text-center mt-3">SignUp now!</h1>
                    <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" required />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" {...register("photoURL", { required: true })} placeholder="Photo url" className="input input-bordered" required />
                            {errors.photoURL && <span className="text-red-600">Photo Url is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                                {...register("password", {
                                    required: true, minLength: 6, maxLength: 20,
                                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?=.*[0-9])/
                                })}
                                className="input input-bordered" required />
                            {errors.password && <span className="text-red-600">password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">password must be 6 character </span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-600">password must be less than 20 character </span>}
                            {errors.password?.type === 'pattern' && <span
                                className="text-red-600">password must have one upper case, one lower case, one number and one special character </span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary text-xl font-medium" type='submit' value="SignUp" />

                        </div>
                    </form>
                     <SocialLogin></SocialLogin>
                    <p className='mx-auto text-xl font-semibold p-2'> <small> Already have an account?  <Link to='/login' className="text-sky-600">Login</Link> </small></p>
                </div>
            </div>
        </div>
    </> 
    );
};


export default Register;


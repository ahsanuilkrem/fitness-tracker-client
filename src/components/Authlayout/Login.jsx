import Lottie from 'lottie-react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import  { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginlotti from '../../assets/Lotti_Login.json';
import { AuthContext } from './Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin';




const Login = () => {

    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User Login SuccessFul.",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                  navigate(from, {replace: true});
            })
            .catch(error => console.log(error))
    
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }


    return (
        <>
        <Helmet>
             <title>Power Fitness | login</title>
        </Helmet> 
      

        <div className="hero bg-base-200 min-h-screen pt-9">     
            <div className="hero-content flex-col items-center lg:flex-row">
                <div className="text-center w-1/2 ">
                   <Lottie animationData={loginlotti}></Lottie>
                 
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-2xl font-bold text-center  pt-3">Login now! </h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate /> 
                            </label>
                            <input type="text" onBlur={handleValidateCaptcha}  placeholder="type the captcha above"
                                name="captcha" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={false} className="btn btn-primary" type='submit' value="Login" />

                        </div>
                    </form>
                    <SocialLogin></SocialLogin> 
                    <p className='mx-auto text-xl font-semibold p-2'> <small>New Here? <Link to='/register' className='text-sky-600'>signUp</Link> </small></p>
                </div>

            </div>
            </div>
        
    </> 
      
    );
};

export default Login;
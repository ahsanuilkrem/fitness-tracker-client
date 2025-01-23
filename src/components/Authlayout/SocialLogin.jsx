import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";



const SocialLogin = () => {
    const {googleSignin} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignin()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
            .catch(error => {
                console.log(error)
            })
        } )
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn ml-8 btn-info text-white'><FaGoogle className='text-red-600'></FaGoogle> Google</button>
        </div>
    );
};

export default SocialLogin;
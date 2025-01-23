
import { Navigate, } from 'react-router-dom';
import useRole from '../hooks/useRole';

const TrainerRoute = ({children}) => {
    
    const [role, isLoading] = useRole();
    
    
    if(isLoading){
        return <progress className="progress w-56"></progress>
    }
    if(role === 'trainer') {
        return children;
    }
    return <Navigate to='/dashboard'  replace > </Navigate>
    
};

export default TrainerRoute;
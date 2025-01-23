import React from 'react';
import useRole from '../hooks/useRole';
import { Navigate } from 'react-router-dom';

const AdminRoute = () => {
    const [role, isLoading] = useRole();
    
    
    if(isLoading){
        return <progress className="progress w-56"></progress>
    }
    if(role === 'admin') {
        return children;
    }
    return <Navigate to='/dashboard'  replace > </Navigate>
};

export default AdminRoute;
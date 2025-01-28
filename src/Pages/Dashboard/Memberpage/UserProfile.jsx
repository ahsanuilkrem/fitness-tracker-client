import { Card } from 'flowbite-react';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserProfile = () => {
    const {user} = useAuth();
    const lastLoginAt = user?.metadata?.lastSignInTime;
    const formattedLastLoginAt = new Date(lastLoginAt).toLocaleString() 

    return (
        <div>
           
            <Card className='max-w-sm text-center'>
              <div className='flex justify-center items-center'>
              <img src={user.photoURL}  alt="" srcset="" className='w-16 h-16 rounded-full broder-2 border-stone-500' />
              </div>
                <p>{user?.displayName}</p>
                <p>{user?.email}</p>
                <p>{formattedLastLoginAt}</p>

            </Card>
        </div>
    );
};

export default UserProfile;
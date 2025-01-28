import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Payment = () => {
  // const axiosSecure = useAxiosSecure();
  //  const { id } = useParams();
  // // console.log(id)
  // const { data: trainer = [], isLoading } = useQuery({
  //     queryKey: ["trainer", id],
  //     queryFn: async () => {
  //         const { data } = await axiosSecure(`/trainer/${id}`)
         
  //          return data;
        
  //     }
      
  // })

  //  console.log(trainer);
    return (
        <div>
          payment
        </div>
    );
};

export default Payment;
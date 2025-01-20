import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useTrainer = () => {
    const axiosSecure = useAxiosSecure();
    const {data: trainers=[], refetch} = useQuery({
        queryKey: ['trainer'],
        queryFn: async  () => {
            const res = await axiosSecure.get('/trainer')
            return res.data;
        }
    })
    return [trainers , refetch]

};

export default useTrainer;


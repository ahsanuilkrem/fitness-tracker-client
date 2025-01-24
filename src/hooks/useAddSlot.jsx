import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAddSlot = () => {
    const axiosSecure = useAxiosSecure();
    const {data: slote=[], refetch} = useQuery({
        queryKey: ['slot'],
        queryFn: async  () => {
            const res = await axiosSecure.get('/addSlot')
            return res.data;
        }
    })
    return [slote , refetch]
};

export default useAddSlot;
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useForum = () => {
    const axiosPublic = useAxiosPublic();
    const {data: community=[], isPending, refetch } = useQuery({
       queryKey: ['forum'],
       queryFn: async() => {
          const res = await axiosPublic.get('/forum');
          return res.data;
       }
    })
    return [community, isPending, refetch]
};

export default useForum;
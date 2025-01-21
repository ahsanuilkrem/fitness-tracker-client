import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useClasses = () => {
   const axiosPublic = useAxiosPublic();
   const {data: classes=[], isPending, refetch } = useQuery({
      queryKey: ['classes'],
      queryFn: async() => {
         const res = await axiosPublic.get('/class');
         return res.data;
      }
   })
   return [classes, isPending, refetch]
};

export default useClasses;
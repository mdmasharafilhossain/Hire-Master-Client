import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../UseAxiosPublic/UseAxiosPublic";

const useManager = () => {
   
    const axiosPublic = UseAxiosPublic()
    const { data: managerInfo = [], isPending: loading, refetch } = useQuery({
        queryKey: ['managerInfo'],
        queryFn: async () => {
            const res = await axiosPublic.get('/managerProfile')
            return res.data
        }
    })

    return [managerInfo, loading, refetch]
}
export default useManager;
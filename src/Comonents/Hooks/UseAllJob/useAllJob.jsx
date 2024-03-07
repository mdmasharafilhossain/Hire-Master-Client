import { useContext } from "react";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useAllJob = () => {
    const axiosSecure = UseAxiosSecure();
    const {loading} = useContext(AuthContext);
    const {data:alljob=[],refetch}=useQuery({
        queryKey:["alljob"],
        queryFn:async()=>{
            const res =await axiosSecure.get("/staticjobpost")
            return res.data
    
        }
    })


return [alljob,loading,refetch]
};

export default useAllJob;
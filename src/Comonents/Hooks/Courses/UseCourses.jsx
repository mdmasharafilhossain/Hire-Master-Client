import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCourses=()=>{
    const axiosSecure = UseAxiosSecure();
    const {loading} = useContext(AuthContext);
    const {data:courses=[],refetch}=useQuery({
        queryKey:["courses"],
        queryFn:async()=>{
            const res =await axiosSecure.get("/premiumusercourse")
            return res.data
    
        }
    })


return [courses,loading,refetch]
}
export default useCourses;
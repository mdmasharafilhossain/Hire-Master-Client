import { useContext } from "react";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import UseAxiosSecure from "../../Comonents/Hooks/UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useHiringManagerAdmin = () => {
    const {user,loading} = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    
    const {data:isHiringManagerAdmin} = useQuery({
        queryKey:[user?.email, 'isHiringManagerAdmin'],
        enabled:!loading && !!user?.email,
        queryFn: async()=>{
            if(user?.email){
                const res = await axiosSecure.get(`/hiring-talents/checkAdmin/${user?.email}`);
            
            return res.data?.admin;
            }
            
        }
    })
    return [isHiringManagerAdmin]
};

export default useHiringManagerAdmin;
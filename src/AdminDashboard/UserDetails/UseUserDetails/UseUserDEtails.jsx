import { useContext } from "react";
import UseAxiosSecure from "../../../Comonents/Hooks/UseAxiosSecure/UseAxiosSecure";
import { AuthContext } from "../../../Comonents/AuthProvider/AuthProvider";
import { useQuery } from "@chakra-ui/react";


const UseUserDEtails = () => {
    const axiosSecure = UseAxiosSecure();
    const {loading} = useContext(AuthContext);
    const {data:Details=[]}=useQuery({
        queryKey:["Details"],
        queryFn:async()=>{
            const res =await axiosSecure.get("/userProfile/all")
            return res.data
    
        }
    })

console.log(Details)
return [Details,loading]
};

export default UseUserDEtails;
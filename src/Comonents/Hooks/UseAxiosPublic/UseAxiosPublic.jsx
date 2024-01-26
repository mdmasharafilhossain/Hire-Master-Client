import axios from "axios";


const AxiosPublic = axios.create({
    baseURL:"https://hire-master-server.vercel.app"
})

const UseAxiosPublic = () => {
    return AxiosPublic;
};

export default UseAxiosPublic;
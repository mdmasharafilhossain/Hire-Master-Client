import axios from "axios";



// const AxiosSecure = axios.create({
//     baseURL:'https://hire-master-server-sigma.vercel.app'
// })
const AxiosSecure = axios.create({
    baseURL: "https://hire-master-server-sigma.vercel.app"
    // baseURL:'https://hire-master-server.vercel.app'
})

const UseAxiosSecure = () => {
  return AxiosSecure;
};

export default UseAxiosSecure;

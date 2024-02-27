import axios from "axios";

<<<<<<< Updated upstream


const AxiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
=======
const AxiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
>>>>>>> Stashed changes
// const AxiosSecure = axios.create({
//     baseURL:'https://hire-master-server.vercel.app'
// })

const UseAxiosSecure = () => {
  return AxiosSecure;
};

export default UseAxiosSecure;

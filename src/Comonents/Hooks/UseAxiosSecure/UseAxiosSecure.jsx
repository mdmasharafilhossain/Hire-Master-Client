import axios from "axios";

<<<<<<< Updated upstream


<<<<<<< HEAD
const AxiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
=======
const AxiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
>>>>>>> Stashed changes
=======
>>>>>>> upstream/main
// const AxiosSecure = axios.create({
//     baseURL:'http://localhost:5000'
// })
const AxiosSecure = axios.create({
    baseURL:'https://hire-master-server.vercel.app'
})

const UseAxiosSecure = () => {
  return AxiosSecure;
};

export default UseAxiosSecure;

import axios from "axios";

<<<<<<< HEAD


const AxiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
// const AxiosSecure = axios.create({
//     baseURL:'https://hire-master-server.vercel.app'
// })
=======
const AxiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
// const AxiosSecure = axios.create({
//   baseURL: "https://hire-master-server.vercel.app",
// });
>>>>>>> a26aa07cf62edcf3c7ff91395b991dbff05802af

const UseAxiosSecure = () => {
  return AxiosSecure;
};

export default UseAxiosSecure;

import axios from "axios";

// const AxiosPublic = axios.create({
//   baseURL: "http://localhost:5000",
// });
const AxiosPublic = axios.create({
  baseURL:'https://hire-master-server-lyart.vercel.app'
})

const UseAxiosPublic = () => {
  return AxiosPublic;
};

export default UseAxiosPublic;

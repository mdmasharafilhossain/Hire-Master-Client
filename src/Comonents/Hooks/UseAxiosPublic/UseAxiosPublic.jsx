import axios from "axios";

// const AxiosPublic = axios.create({
//   baseURL: "https://hire-master-server-sigma.vercel.app",
// });
const AxiosPublic = axios.create({
  baseURL: "https://hire-master-server-sigma.vercel.app"
  // baseURL:'https://hire-master-server.vercel.app'
})

const UseAxiosPublic = () => {
  return AxiosPublic;
};

export default UseAxiosPublic;

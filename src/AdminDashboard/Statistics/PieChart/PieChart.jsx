

import { Chart } from "react-google-charts";



import UseAxiosPublic from "../../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import {  useEffect, useState } from "react";



export const options = {
  title: "Total User Types",
  is3D: true,
};

//for Job Seeker data



const PieChart = () => {
    
const AxiosPublic = UseAxiosPublic();
// const {loading} = useContext(AuthContext);
const [HiringManagers,setHiringManagers] = useState('');
const [JobSeekers,setJobSeekers]= useState('');
const [PremiumUsers, setPremiumUsers] = useState('');
// const {data: HiringManagers = []} = useQuery({
//         queryKey: ['HiringManagers'],
//         enabled:!loading,
//         queryFn: async () => {
//             const res = await axiosSecure.get("/hiring-talents");
//             console.log(res.data)
//             return res.data;
    
//         }
    
//     })
// for Hiring Manager 
useEffect(()=>{
  const fetchData = async () => {
    try {
        const response = await AxiosPublic.get('/hiring-talents');
        const data = response.data;
        setHiringManagers(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();

},[])
// for  Job Seekers 
useEffect(()=>{
  const fetchData = async () => {
    try {
        const response = await AxiosPublic.get('/users');
        const data = response.data;
        setJobSeekers(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();

},[])
// for  Premium User
useEffect(()=>{
  const fetchData = async () => {
    try {
        const response = await AxiosPublic.get('/payments');
        const data = response.data;
        setPremiumUsers(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();

},[])

    
    // const JobSeekers = HiringManagers.filter(jobSeeker => jobSeeker.length);
    // console.log(JobSeekers)
    // const TotalJobseeker = JobSeekers.length;
    // console.log(TotalJobseeker)
     const data = [
        ["Task", "Hours per Day"],
        ["Premium Users", PremiumUsers.length],
        ["Job Seekers", JobSeekers.length],
        ["Hiring Managers", HiringManagers.length],
        
        
      ];
    return (
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      );
};

export default PieChart;
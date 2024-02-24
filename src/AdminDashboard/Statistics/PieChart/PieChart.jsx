

import { Chart } from "react-google-charts";
import UseAxiosSecure from "../../../Comonents/Hooks/UseAxiosSecure/UseAxiosSecure";

import { AuthContext } from "../../../Comonents/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import { useContext, useEffect, useState } from "react";



export const options = {
  title: "Total User Types",
  is3D: true,
};

//for Job Seeker data



const PieChart = () => {
    const axiosSecure = UseAxiosSecure();
const AxiosPublic = UseAxiosPublic();
const {loading} = useContext(AuthContext);
const [HiringManagers,setHiringManagers] = useState('');
// const {data: HiringManagers = []} = useQuery({
//         queryKey: ['HiringManagers'],
//         enabled:!loading,
//         queryFn: async () => {
//             const res = await axiosSecure.get("/hiring-talents");
//             console.log(res.data)
//             return res.data;
    
//         }
    
//     })

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

    console.log(HiringManagers)
    // const JobSeekers = HiringManagers.filter(jobSeeker => jobSeeker.length);
    // console.log(JobSeekers)
    // const TotalJobseeker = JobSeekers.length;
    // console.log(TotalJobseeker)
     const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", HiringManagers.length],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
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
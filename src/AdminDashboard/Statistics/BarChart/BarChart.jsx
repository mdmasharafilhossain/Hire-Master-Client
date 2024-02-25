
import { Chart } from "react-google-charts";
import UseAxiosPublic from "../../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../Comonents/Hooks/UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
export const options = {
    title: "Types of Job Number",
    width: 600,
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };
const BarChart = () => {
    const AxiosPublic = UseAxiosPublic();
    // const [jobs,setJob]= useState('')
    // useEffect(()=>{
    //     const fetchData = async () => {
    //       try {
    //           const response = await AxiosPublic.get('/staticjobpost');
    //           const data = response.data;
    //           setJob(data);
    //       } catch (error) {
    //           console.error('Error fetching data:', error);
    //       }
    //   };
      
    //   fetchData();
      
    //   },[])
    const axiosSecure = UseAxiosSecure();
    const {data: jobs = []} = useQuery({
        
        queryKey: ['jobs'],
        
        queryFn: async () => {
            const res = await axiosSecure.get('/staticjobpost');
            console.log(res.data)
            return res.data;
            

        }
        

    });

      console.log(jobs)
      const Full_Time_Job = jobs.filter(job=>job.job_time === "Full-time");
      console.log(Full_Time_Job.length)



     const data = [
        [
          "Element",
          "Density",
          { role: "style" },
          {
            sourceColumn: 0,
            role: "annotation",
            type: "string",
            calc: "stringify",
          },
        ],
        ["Copper", 8.94, "#b87333", null],
        ["Silver", 10.49, "silver", null],
        ["Gold", 19.3, "gold", null],
        ["Platinum", 21.45, "color: #e5e4e2", null],
      ];
    return (
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      );
};

export default BarChart;
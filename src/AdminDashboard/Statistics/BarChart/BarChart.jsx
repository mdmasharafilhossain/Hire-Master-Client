
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

      
      const Full_Time_Job = jobs.filter(job=>job.job_time === "Full-time");
      const Remote_Job = jobs.filter(job=>job.job_time === "Remote");
      const Part_time_job = jobs.filter(job=>job.job_time === "Part-time");
      const Hybrid_job = jobs.filter(job=>job.job_time === "Hybrid");
      



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
        ["Full-time", Full_Time_Job.length, "#b87333", null],
        ["Remote", Remote_Job.length, "silver", null],
        ["Part-time", Part_time_job.length, "gold", null],
        ["Hybrid", Hybrid_job.length, "color: #e5e4e2", null],
      ];
    return (
        <div className="lg:ml-40">
          <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
        </div>
      );
};

export default BarChart;
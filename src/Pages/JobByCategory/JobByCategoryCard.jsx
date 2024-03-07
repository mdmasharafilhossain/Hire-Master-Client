import { useEffect, useState } from "react";
import UseAxiosPublic from "../../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";
import { FaCalendarAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { LuMapPin } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";


const JobByCategoryCard = ({card}) => {
    const { job_title} = card ||{}
    console.log(job_title)
    const axiosPublic = UseAxiosPublic()
    const [data,setData] = useState([])
    const [filterData,setFilterData] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        fetch('https://hire-master-server.vercel.app/filter/static-job-post')
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoading(false)

        })
        // const filterData = data.filter(brand => brand.brand == brand_name)
        // setFilter(filterData)
    },[])

    useEffect(()=>{
        const filterDataNew = data.filter(item => item.job_title === job_title)
        setFilterData(filterDataNew)
    },[data, job_title])
    
   console.log(filterData)
    console.log(data)

    return (
        <div>
            {
                filterData.map(data => <div key={data._id} className="max-w-5xl mx-4 md:mx-auto  px-10 py-2 md:py-5 mb-3 flex flex-col md:flex-row justify-between gap-y-1 md:gap-y-0 md:gap-2 border text-center md:text-left hover:shadow-xl">
                <Toaster position="top-right" reverseOrder={false} />
                {/* ----------Company logo------------ */}
                <figure className=" md:flex items-center justify-center ">
                  <img
                    src={data.company_logo}
                    alt="company logo"
                    className="w-16 mx-auto"
                  />
                  <p></p>
                </figure>
                {/* ----------Job OverView------------ */}
                <div className="space-y-1 md:space-y-3 flex flex-col  md:items-start md:w-96">
                  <h1 className="text-lg md:text-xl font-semibold">{data.job_title}</h1>
                  <h1 className="text-sm md:text-md font-medium">({data.company_name})</h1>
                  <hr className="w-full md:hidden " />
          
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
                    <p className="flex items-baseline gap-2 text-justify">
                      <LuMapPin className="text-[#FF3811]" />
                      <span className=" ">{data.job_location}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <IoMdTime className="text-[#FF3811]" /> <span>{data.job_time}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <FaRegMoneyBillAlt className="text-[#FF3811]" />
                      <span>{data.salary}</span>
                    </p>
                  </div>
                </div>
          
                {/* ------------Apply and DeadLine------------- */}
          
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      className="btn btn-sm  btn-warning"
                      to={`/jobDetails/${data._id}`}
                    >
                      <button>
                        {/* <CiHeart className="text-[#FF3811]" />  */}
                        Details
                      </button>
                    </Link>
                    
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <FaCalendarAlt className="text-[#FF3811]" />
                    <span>Deadline: {data.job_posting_date}</span>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default JobByCategoryCard;
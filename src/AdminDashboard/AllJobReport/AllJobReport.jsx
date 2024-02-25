import { useContext } from "react";
import UseAxiosSecure from "../../Comonents/Hooks/UseAxiosSecure/UseAxiosSecure";
import { AuthContext } from "../../Comonents/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const AllJobReport = () => {

    const axiosSecure = UseAxiosSecure();
    const {loading} = useContext(AuthContext);
    const {data:reports=[]}=useQuery({
        queryKey:["reports"],
        queryFn:async()=>{
            const res =await axiosSecure.get("/userreport")
            return res.data
    
        }
    })

console.log(reports)
// job_title: data.name,
//       company_name: data.companyname,
//       hiring_manager_email: data.manageremail,
//       user_email: data.useremail,
//       user_name:data.username,
//       user_comments:data.comments

    return (
        <div>
           <div>
            <div className="flex justify-evenly my-6 mb-10">
                <h2 className="text-4xl font-bold">All <span className='text-[#FF3811]'>Job Seeker List</span></h2>
               
            </div>
            <div className="overflow-x-auto ml-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-xl text-orange-600'>User Name</th>
                            <th className='text-xl text-orange-600'>User Email</th>
                            <th className='text-xl text-orange-600'>Hiring Manager Email</th>
                            <th className='text-xl text-orange-600'>Job Title</th>
                            <th className='text-xl text-orange-600'>View</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            reports.map((report,index) =>  <tr key={report._id}  className={index % 2 === 0 ? 'bg-slate-200' : 'bg-orange-200'}>
                            
                                <td className='font-bold'> <h1>{report?.user_name}</h1></td>
                                <td className='font-bold'> <h1>{report?.user_email}</h1></td>
                                <td className='font-bold'> <h1>{report?.hiring_manager_email}</h1></td>
                                <td className='font-bold'> <h1>{report?.job_title}</h1></td>
                                <td className='font-bold'> <h1>{report?.user_name}</h1></td>
                                 </tr>)
                        }
                        
                    </tbody>
                    {/* foot */}
                 
                </table>
            </div>
        </div>
        </div>
    );
};

export default AllJobReport;